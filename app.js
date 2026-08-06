const express = require("express");
const session = require("express-session");
const puppeteer = require("puppeteer");
require("dotenv").config();
const app = express();
/*
========================================================
CONFIGURATION
========================================================
*/

const PORT = process.env.PORT || 3001;

const baseUrl = process.env.BASE_URL || `http://localhost:${PORT}`;
const fichesData = require("./data/fiches");
const fichesPublic = require("./data/fiches public");
const prototypesPublic = require("./data/prototypes-public");
const prototypesMembres = require("./data/prototypes-membres");
const publications = require("./data/publications");

app.set("view engine", "ejs");
const path = require("path");

app.set("views", path.join(__dirname, "views"));

app.use(express.static("IHM"));

app.use(
  session({
    secret: "cap2032-secret",
    resave: false,
    saveUninitialized: false,
  }),
);

// Permet de lire les formulaires
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// CSS pdf
app.use((req, res, next) => {
  res.locals.pdfMode = false;
  next();
});

// Page login
app.get("/login", (req, res) => {
  res.render("membres/login", {
    error: null,
    currentPage: "login",
  });
});

// Traitement login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "membre" && password === "cap2032") {
    req.session.user = true;
    res.redirect("/espace-membre");
  } else {
    res.render("membres/login", { error: "Indentifiants incorrects" });
  }
});

// Logout
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

function isAuth(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect("membres/login");
  }
}

//Routes protéger
app.get("/espace-membre", isAuth, (req, res) => {
  const fiches = Object.entries(fichesData).map(([id, fiche]) => ({
    id,
    ...fiche,
  }));
  res.render("membres/index-membre", {
    fiches,
    currentPage: "membre",
  });
});

// route fiches détaillées

app.get("/membre/fiche/:id", isAuth, (req, res) => {
  const id = Number(req.params.id);
  const fiche = fichesData[id];

  if (!Number.isInteger(id) || !fiche) {
    return res.status(404).send("Fiche introuvable");
  }

  res.render("membres/fiche-detail", {
    fiche,
    id,
    user: req.session.user,
    pdfMode: false,
  });
});

app.get("/membre/synthese", isAuth, (req, res) => {
  res.render("membres/synthes");
});

app.get("/membres/prototype/:id", isAuth, (req, res) => {
  const id = Number(req.params.id);
  const prototype = prototypesMembres[id];

  if (!prototype) {
    return res.status(404).send("Prototype introuvable");
  }

  res.render("membres/prototype-membre", {
    id,
    prototype,
    user: req.session.user,
    pdfMode: false,
  });
});

/*
========================================================
OUTILS PDF
========================================================
*/

function sanitizeFilename(value = "document") {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9-_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function renderView(view, data) {
  return new Promise((resolve, reject) => {
    app.render(view, data, (err, html) => {
      if (err) return reject(err);
      resolve(html);
    });
  });
}

function makeAssetsAbsolute(html) {
  return html
    .replaceAll('href="/', `href="${baseUrl}/`)
    .replaceAll('src="/', `src="${baseUrl}/`)
    .replaceAll("href='/", `href='${baseUrl}/`)
    .replaceAll("src='/", `src='${baseUrl}/`);
}

async function sendPdfFromView({ res, view, data, filename }) {
  let browser;

  try {
    const html = makeAssetsAbsolute(
      await renderView(view, {
        ...data,
        pdfMode: true,
      }),
    );

    browser = await puppeteer.launch({
      headless: true,

      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
      ],
    });

    const page = await browser.newPage();

    /*
========================================================
DÉLAIS ADAPTÉS À RENDER
========================================================
*/

    page.setDefaultNavigationTimeout(120000);
    page.setDefaultTimeout(120000);

    await page.setViewport({
      width: 1400,
      height: 1000,
    });

    /*
========================================================
JOURNAL DES RESSOURCES QUI ÉCHOUENT
========================================================
*/

    page.on("requestfailed", (request) => {
      console.warn(
        "Ressource PDF non chargée :",
        request.url(),
        request.failure()?.errorText,
      );
    });

    /*
========================================================
CHARGEMENT DU HTML
========================================================
*/

    await page.setContent(html, {
      waitUntil: "domcontentloaded",
      timeout: 120000,
    });

    /*
========================================================
ATTENTE LIMITÉE DES POLICES
========================================================
*/

    await page.evaluate(async () => {
      if (!document.fonts?.ready) {
        return;
      }

      await Promise.race([
        document.fonts.ready,

        new Promise((resolve) => {
          setTimeout(resolve, 10000);
        }),
      ]);
    });

    /*
========================================================
ATTENTE LIMITÉE DES IMAGES
========================================================
*/

    await page.evaluate(async () => {
      const images = Array.from(document.images);

      await Promise.race([
        Promise.all(
          images.map((image) => {
            if (image.complete) {
              return Promise.resolve();
            }

            return new Promise((resolve) => {
              image.addEventListener("load", resolve, {
                once: true,
              });

              image.addEventListener("error", resolve, {
                once: true,
              });
            });
          }),
        ),

        new Promise((resolve) => {
          setTimeout(resolve, 15000);
        }),
      ]);
    });

    /*
========================================================
SUPPRESSION DES LIENS DANS LE PDF
========================================================
*/

    await page.evaluate(() => {
      document.querySelectorAll("a").forEach((link) => {
        const span = document.createElement("span");

        // Conserve le contenu du lien :
        // texte, icônes, images et balises internes.
        while (link.firstChild) {
          span.appendChild(link.firstChild);
        }

        // Conserve les classes pour garder la mise en forme.
        span.className = link.className;

        // Ajoute une classe spécifique au mode PDF.
        span.classList.add("pdf-disabled-link");

        // Conserve certains attributs utiles à l’affichage.
        if (link.id) {
          span.id = link.id;
        }

        link.replaceWith(span);
      });
    });

    await page.emulateMediaType("print");

    const pdf = await page.pdf({
      format: "A4",

      printBackground: true,

      displayHeaderFooter: true,

      headerTemplate: `
      <div style="
      width:100%;
      padding:0 15mm;
      text-align:right;
      font-size:8px;
      color:#666;
      ">
      CAP2032
      </div>
      `,

      footerTemplate: `
      <div style="
      width:100%;
      padding:0 15mm;
      display:flex;
      justify-content:space-between;
      font-size:8px;
      color:#666;
      ">
      <span>CAP2032</span>
      <span>
      Page
      <span class="pageNumber"></span>
      /
      <span class="totalPages"></span>
      </span>
      </div>
      `,

      margin: {
        top: "18mm",
        bottom: "20mm",
        left: "14mm",
        right: "14mm",
      },
    });

    res.set({
      "Content-Type": "application/pdf",

      "Content-Disposition": `attachment; filename="${sanitizeFilename(filename)}.pdf"`,

      "Content-Length": pdf.length,
    });

    return res.send(pdf);
  } catch (err) {
    console.error(err);

    return res.status(500).send("Erreur lors de la génération du PDF.");
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

/*
========================================================
PDF - FICHES PUBLIQUES
========================================================
*/

app.get("/download/fiche-public/:id", async (req, res) => {
  const id = Number(req.params.id);
  const fiche = fichesPublic[id];

  if (!fiche) {
    return res.status(404).send("Fiche introuvable");
  }

  return sendPdfFromView({
    res,

    view: "fiche-public",

    data: {
      id,
      fiche,
      user: req.session.user || null,
    },

    filename: `CAP2032-fiche-${id}-${fiche.title}`,
  });
});

/*
========================================================
PDF - FICHES MEMBRES
========================================================
*/

app.get("/membre/download/fiche/:id", isAuth, async (req, res) => {
  const id = Number(req.params.id);
  const fiche = fichesData[id];

  if (!Number.isInteger(id) || !fiche) {
    return res.status(404).send("Fiche membre introuvable");
  }

  return sendPdfFromView({
    res,
    view: "membres/fiche-detail",

    data: {
      id,
      fiche,
      user: req.session.user,
    },

    filename: `CAP2032-fiche-detaillee-${id}-${fiche.title}`,
  });
});

/*
========================================================
PDF - PROTOTYPES PUBLICS
========================================================
*/

app.get("/download/prototype-public/:id", async (req, res) => {
  const id = Number(req.params.id);
  const prototype = prototypesPublic[id];

  if (!Number.isInteger(id) || !prototype) {
    return res.status(404).send("Prototype public introuvable");
  }

  return sendPdfFromView({
    res,

    view: "prototype-public",

    data: {
      id,
      prototype,
      user: req.session.user || null,
    },

    filename: `CAP2032-prototype-public-${id}-${prototype.title}`,
  });
});

/*
========================================================
PDF — PROTOTYPES MEMBRES
========================================================
*/

app.get("/membre/download/prototype/:id", isAuth, async (req, res) => {
  const id = Number(req.params.id);
  const prototype = prototypesMembres[id];

  if (!Number.isInteger(id) || !prototype) {
    return res.status(404).send("Prototype membre introuvable");
  }

  return sendPdfFromView({
    res,

    view: "membres/prototype-membre",

    data: {
      id,
      prototype,
      user: req.session.user,
    },

    filename: `CAP2032-prototype-detaille-${id}-${prototype.title}`,
  });
});
/*
========================================================
PDF — ARTICLES ET ARCHÉOLOGIE
========================================================
*/

app.get("/publication/:slug/pdf", async (req, res) => {
  const publication = publications.find(
    (item) => item.slug === req.params.slug && item.status === "published",
  );

  if (!publication || !publication.pdf?.enabled) {
    return res.status(404).send("Publication PDF introuvable");
  }

  let view;
  let prefix;

  if (publication.type === "article") {
    view = "articles";
    prefix = "article";
  } else if (publication.type === "archeologie") {
    view = "archeologie";
    prefix = "archeologie";
  } else {
    return res.status(404).send("Type de publication inconnu");
  }

  return sendPdfFromView({
    res,

    view,

    data: {
      publication,
      currentPage: "publications",
      user: null,
    },

    filename: `CAP2032-${prefix}-${publication.slug}`,
  });
});

/*
========================================================
TÉLÉCHARGEMENT — RÉSUMÉ DU LIVRE
========================================================
*/

app.get("/download/resume-cap2032", (req, res) => {
  const pdfPath = path.join(
    __dirname,
    "IHM",
    "documents",
    "resume-cap2032.pdf",
  );

  return res.download(pdfPath, "CAP2032-resume-du-livre.pdf", (error) => {
    if (error && !res.headersSent) {
      console.error("Erreur téléchargement résumé CAP2032 :", error);

      return res.status(404).send("Le résumé du livre est introuvable.");
    }
  });
});

/*
========================================================
TÉLÉCHARGEMENT — RÉSUMÉ DES ESSAIS
========================================================
*/

app.get("/download/resume-essais-philosophiques", (req, res) => {
  const pdfPath = path.join(
    __dirname,
    "IHM",
    "documents",
    "resume-essais-philosophiques.pdf",
  );

  return res.download(
    pdfPath,
    "CAP2032-resume-des-essais-philosophiques.pdf",
    (error) => {
      if (error && !res.headersSent) {
        console.error("Erreur téléchargement résumé essais :", error);

        return res.status(404).send("Le résumé des essais est introuvable.");
      }
    },
  );
});

//routes pages

app.get("/", (req, res) => {
  /*
  ========================================================
  TRANSFORMATION DES PUBLICATIONS EN TABLEAU
  ========================================================
  */

  const listePublications = Array.isArray(publications)
    ? publications
    : Object.values(publications);

  /*
  ========================================================
  PUBLICATIONS RÉELLEMENT PUBLIÉES
  ========================================================
  */

  const publicationsPubliees = listePublications.filter((publication) => {
    return publication && publication.status !== "draft";
  });

  /*
  ========================================================
  DERNIER ARTICLE
  On prend le dernier déclaré dans publications.js
  ========================================================
  */

  const articles = publicationsPubliees.filter((publication) => {
    return publication.type === "article";
  });

  const dernierArticle =
    articles.length > 0 ? articles[articles.length - 1] : null;

  /*
  ========================================================
  DERNIÈRE PUBLICATION ARCHÉOLOGIQUE
  Accepte plusieurs écritures possibles du type
  ========================================================
  */

  const publicationsArcheologie = publicationsPubliees.filter((publication) => {
    return (
      publication.type === "archeologie" ||
      publication.type === "archeo" ||
      publication.type === "archéologie"
    );
  });

  const derniereArcheologie =
    publicationsArcheologie.length > 0
      ? publicationsArcheologie[publicationsArcheologie.length - 1]
      : null;

  /*
  ========================================================
  DERNIER PROTOTYPE PUBLIC
  On prend celui ayant l’identifiant numérique le plus élevé
  ========================================================
  */

  const listePrototypes = Object.entries(prototypesPublic)
    .filter(([, prototype]) => {
      return prototype && prototype.status !== "draft";
    })
    .sort(([idA], [idB]) => {
      return Number(idA) - Number(idB);
    });

  const dernierPrototypeEntry =
    listePrototypes.length > 0
      ? listePrototypes[listePrototypes.length - 1]
      : null;

  const dernierPrototype = dernierPrototypeEntry
    ? {
        id: dernierPrototypeEntry[0],
        ...dernierPrototypeEntry[1],
      }
    : null;

  /*
  ========================================================
  AFFICHAGE DE L’ACCUEIL
  ========================================================
  */

  return res.render("index", {
    currentPage: "home",
    user: req.session.user || null,

    dernierArticle,
    derniereArcheologie,
    dernierPrototype,
  });
});

app.get("/pilier1", (req, res) => {
  const listePublications = Array.isArray(publications)
    ? publications
    : Object.values(publications);

  const publicationsPilier = listePublications.filter((publication) => {
    return (
      publication &&
      publication.status === "published" &&
      publication.type === "archeologie"
    );
  });

  res.render("pilier1_intro", {
    currentPage: "pilier1",
    user: req.session.user || null,
    publicationsPilier,
  });
});

app.get("/pilier2", (req, res) => {
  const listePublications = Array.isArray(publications)
    ? publications
    : Object.values(publications);

  const publicationsPilier = listePublications.filter((publication) => {
    return (
      publication &&
      publication.status === "published" &&
      publication.type === "article"
    );
  });

  res.render("pilier2_intro", {
    currentPage: "pilier2",
    user: req.session.user || null,
    publicationsPilier,
  });
});

app.get("/pilier3", (req, res) => {
  const prototypesPilier = Object.entries(prototypesPublic)
    .filter(([, prototype]) => {
      return prototype && prototype.status !== "draft";
    })
    .map(([id, prototype]) => {
      return {
        id: Number(id),
        ...prototype,
      };
    })
    .sort((a, b) => a.id - b.id);

  res.render("pilier3_intro", {
    currentPage: "pilier3",
    user: req.session.user || null,
    prototypesPilier,
  });
});

/*
========================================================
ROUTE COMMUNE DES PUBLICATIONS
========================================================
*/

app.get("/publication/:slug", (req, res) => {
  const publication = publications.find(
    (item) => item.slug === req.params.slug && item.status === "published",
  );

  if (!publication) {
    return res.status(404).send("Publication introuvable");
  }

  let view;

  if (publication.type === "article") {
    view = "articles";
  } else if (publication.type === "archeologie") {
    view = "archeologie";
  } else {
    return res.status(404).send("Type de publication inconnu");
  }

  res.render(view, {
    publication,
    currentPage: "publications",
    user: req.session.user || null,
    pdfMode: false,
  });
});

app.get("/prototype/:id", (req, res) => {
  const id = Number(req.params.id);
  const prototype = prototypesPublic[id];

  if (!prototype) {
    return res.status(404).send("Prototype introuvable");
  }

  res.render("prototype-public", {
    id,
    prototype,
    user: req.session.user || null,
    pdfMode: false,
  });
});

app.get("/fiche:id", (req, res) => {
  const id = Number(req.params.id);
  const fiche = fichesPublic[id];

  if (!Number.isInteger(id) || id < 1 || id > 15 || !fiche) {
    return res.status(404).send("Fiche introuvable");
  }

  res.render("fiche-public", {
    fiche,
    id,
    pdfMode: false,
    user: req.session?.user || null,
  });
});

app.get("/ressources", (req, res) => {
  const listePublications = Array.isArray(publications)
    ? publications
    : Object.values(publications);

  const publicationsArchives = listePublications
    .filter((publication) => {
      return (
        publication &&
        publication.status === "published" &&
        (publication.type === "article" || publication.type === "archeologie")
      );
    })
    .sort((a, b) => {
      const dateA = a.publishedAt || `${a.publicationYear || 0}-01-01`;

      const dateB = b.publishedAt || `${b.publicationYear || 0}-01-01`;

      return new Date(dateB) - new Date(dateA);
    });

  return res.render("ressources", {
    currentPage: "ressources",
    user: req.session.user || null,
    publicationsArchives,
  });
});

const livrePurchaseUrl = process.env.LIVRE_PURCHASE_URL || "";
const essaisPurchaseUrl = process.env.ESSAIS_PURCHASE_URL || "";

app.get("/ouvrages", (req, res) => {
  return res.render("ouvrages", {
    currentPage: "ouvrages",
    user: req.session.user || null,
    livrePurchaseUrl,
    essaisPurchaseUrl,
  });
});

app.get("/membre/livre", isAuth, (req, res) => {
  return res.render("membres/livre", {
    currentPage: "dashboard",
    user: req.session.user,
    livrePurchaseUrl,
  });
});

app.get("/membre/essais", isAuth, (req, res) => {
  return res.render("membres/essais", {
    currentPage: "dashboard",
    user: req.session.user,
    essaisPurchaseUrl,
  });
});

app.get("/notes", (req, res) => {
  res.render("notes", {
    currentPage: "notes",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    currentPage: "contact",
  });
});

app.get("/test", (req, res) => {
  res.send("serveur OK");
});

app.get("/adhesion", (req, res) => {
  res.render("adhesion", {
    currentPage: "adhesion",
  });
});

app.post("/contact", async (req, res) => {
  const { nom, email, message } = req.body;

  console.log("---- Nouveau message ----");
  console.log("Nom :", nom);
  console.log("Email :", email);
  console.log("Message :", message);

  const payload = {
    sender: {
      name: "CAP 2032",
      email: "web05012000@gmail.com",
    },
    to: [
      {
        email: "cap2032.contacts@free.fr",
      },
    ],
    replyTo: {
      email: email,
    },
    subject: "Nouveau message CAP2032",
    textContent: `
Nom: ${nom}
Email: ${email}

Message:
${message}
    `,
  };

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log("Erreur Brevo :", data);
      return res.send("Erreur lors de l'envoi ❌");
    }

    console.log("Email envoyé :", data);
    res.send("Message envoyé ✅");
  } catch (err) {
    console.log("Erreur mail :", err);
    res.send("Erreur lors de l'envoi ❌");
  }
});

const SERVER_PORT = process.env.PORT || 3001;

app.listen(SERVER_PORT, () => {
  console.log(`Serveur lancé sur ${baseUrl}`);
});
