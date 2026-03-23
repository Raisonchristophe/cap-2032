const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
require("dotenv").config();

app.set("view engine", "ejs");
const path = require("path");

app.set("views", path.join(__dirname, "views"));

app.use(express.static("IHM"));

// Permet de lire les formulaires
app.use(express.urlencoded({ extended: true }));

//routes pages

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/pilier1", (req, res) => {
  res.render("pilier1_intro");
});

app.get("/pilier2", (req, res) => {
  res.render("pilier2_intro");
});

app.get("/pilier3", (req, res) => {
  res.render("pilier3_intro");
});

app.get("/paabo", (req, res) => {
  res.render("fiche_paabo");
});

app.get("/gobekli_tepe", (req, res) => {
  res.render("fiche_gobekli_tepe");
});

app.get("/indus", (req, res) => {
  res.render("fiche_indus");
});

app.get("/caral", (req, res) => {
  res.render("fiche_caral");
});

app.get("/article_synthese_pilier1", (req, res) => {
  res.render("article_synthese_pilier1");
});

app.get("/article_interet_general", (req, res) => {
  res.render("article_interet_general");
});

app.get("/article_pensee_systhemique", (req, res) => {
  res.render("article_pensee_systhemique");
});

app.get("/article_dette", (req, res) => {
  res.render("article_dette");
});

app.get("/article_institutions", (req, res) => {
  res.render("article_institutions");
});

app.get("/prototype1", (req, res) => {
  res.render("prototype_scic");
});

app.get("/prototype2", (req, res) => {
  res.render("prototype_agricole");
});

app.get("/prototype3", (req, res) => {
  res.render("prototype_ecole");
});

app.get("/prototype4", (req, res) => {
  res.render("prototype_systeme");
});

app.get("/fiche1", (req, res) => {
  res.render("fiche1");
});

app.get("/fiche2", (req, res) => {
  res.render("fiche2");
});

app.get("/fiche3", (req, res) => {
  res.render("fiche3");
});

app.get("/fiche4", (req, res) => {
  res.render("fiche4");
});

app.get("/fiche5", (req, res) => {
  res.render("fiche5");
});

app.get("/fiche6", (req, res) => {
  res.render("fiche6");
});

app.get("/fiche7", (req, res) => {
  res.render("fiche7");
});

app.get("/fiche8", (req, res) => {
  res.render("fiche8");
});

app.get("/fiche9", (req, res) => {
  res.render("fiche9");
});

app.get("/fiche10", (req, res) => {
  res.render("fiche10");
});

app.get("/fiche11", (req, res) => {
  res.render("fiche11");
});

app.get("/fiche12", (req, res) => {
  res.render("fiche12");
});

app.get("/fiche13", (req, res) => {
  res.render("fiche13");
});

app.get("/fiche14", (req, res) => {
  res.render("fiche14");
});

app.get("/fiche15", (req, res) => {
  res.render("fiche15");
});

app.get("/ressources", (req, res) => {
  res.render("ressources");
});

app.get("/notes", (req, res) => {
  res.render("notes_stratégiques");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/test", (req, res) => {
  res.send("serveur OK");
});

// Route formulaire

const transporter = nodemailer.createTransport({
  host: "smtp.free.fr",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/contact", (req, res) => {
  const { nom, email, message } = req.body;

  // ✅ LOG TERMINAL
  console.log("---- Nouveau message ----");
  console.log("Nom :", nom);
  console.log("Email :", email);
  console.log("Message :", message);

  // ✅ EMAIL
  const mailOptions = {
    from: "cap2032.contacts@free.fr",
    to: "cap2032.contacts@free.fr",
    replyTo: email,
    subject: "Nouveau message CAP2032",
    text: `
Nom: ${nom}
Email: ${email}

Message:
${message}
    `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("Erreur mail :", err);
      res.send("Erreur lors de l'envoi ❌");
    } else {
      console.log("Email envoyé :", info.response);

      res.send("Message envoyé ✅");
    }
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Serveur lancé sur le port " + PORT);
});
