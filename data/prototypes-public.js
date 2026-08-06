module.exports = {
  /*
======================================================
MODULE OPÉRATIONNEL 1
ATELIER TECHNIQUE TERRITORIAL
======================================================
*/

  1: {
    slug: "atelier-technique-territorial",

    title: "Atelier technique territorial",

    image: "/action/module1.png",

    subtitle: "Réparer, reconditionner, produire et entretenir localement.",

    intro:
      "L’Atelier technique territorial rassemble des activités complémentaires de réparation, de réemploi, de fabrication et de maintenance. Il peut être créé entièrement ou s’appuyer sur des structures, des compétences et des équipements déjà présents sur le territoire.",

    structure: [
      "Constat",
      "Objectif",
      "Principe",
      "Activités",
      "Adaptation territoriale",
      "Organisation",
      "Impacts",
      "Chiffres clés",
      "Articulation",
      "Conclusion",
    ],

    sections: [
      /*
      ======================================================
      1. CONSTAT
      ======================================================
      */

      {
        id: "constat",
        title: "Constat",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Les territoires disposent souvent de compétences techniques, d’ateliers, d’artisans, de ressourceries ou de structures d’insertion, mais ces ressources restent dispersées et insuffisamment reliées entre elles.",

              "Dans le même temps, une quantité importante de mobilier, de matériel informatique, d’électroménager, d’outillage et de matériaux du bâtiment est jetée alors qu’une partie pourrait être réparée, reconditionnée ou réemployée.",
            ],
          },

          {
            type: "list",

            items: [
              "Disparition progressive de certaines compétences techniques et artisanales locales.",
              "Dépendance à des fournisseurs et à des prestataires éloignés.",
              "Augmentation des déchets techniques et des équipements difficilement réparables.",
              "Faible structuration des filières locales de maintenance, de réparation et de réemploi.",
              "Manque de lieux de formation pratique et de transmission des savoir-faire.",
              "Cloisonnement entre artisans, collectivités, associations, entreprises, établissements de formation et structures d’insertion.",
              "Rigidité des marchés publics, qui limite souvent l’accès des petites structures locales à la commande publique.",
              "Marchés publics parfois organisés en lots trop importants ou selon des critères administratifs difficiles à satisfaire pour les petites structures.",
              "Prise en compte encore insuffisante du réemploi, de la réparabilité, du coût global et des retombées territoriales dans les achats publics.",
            ],
          },

          {
            type: "quote",

            content:
              "Le problème n’est pas toujours l’absence de compétences ou d’équipements, mais leur dispersion et leur faible articulation à l’échelle du territoire.",
          },
        ],
      },

      /*
      ======================================================
      2. OBJECTIF
      ======================================================
      */

      {
        id: "objectif",
        title: "Objectif",

        blocks: [
          {
            type: "encadre",

            title: "Objectif du prototype",

            content: [
              {
                subtitle: "Ce que l’atelier fait réellement",

                paragraphs: [
                  "L’Atelier technique territorial organise localement des activités de réparation, de reconditionnement, de fabrication et de maintenance.",

                  "Il transforme des objets, des équipements et des matériaux considérés comme des déchets en ressources utiles pour les habitants, les entreprises, les agriculteurs, les associations et les collectivités.",

                  "Il rassemble des compétences dispersées, forme par la pratique et répond à des besoins économiques concrets du territoire.",
                ],

                items: [
                  "Réparer avant de remplacer.",
                  "Reconditionner avant d’acheter neuf.",
                  "Produire localement certains équipements simples.",
                  "Entretenir les infrastructures et le matériel du territoire.",
                  "Transmettre des compétences techniques par le travail réel.",
                ],
              },

              {
                subtitle: "Ce que l’atelier n’est pas",

                paragraphs: [
                  "Ce n’est pas une simple déchetterie améliorée.",

                  "Ce n’est pas un atelier d’insertion reposant uniquement sur des activités artificielles ou durablement déficitaires.",

                  "Ce n’est pas non plus une entreprise cherchant à couvrir indistinctement tous les métiers techniques.",
                ],

                items: [
                  "Il ne remplace pas les artisans existants.",
                  "Il ne concurrence pas inutilement les entreprises locales.",
                  "Il n’impose pas un modèle identique à tous les territoires.",
                  "Il ne crée de nouvelles activités que lorsqu’un besoin réel n’est pas couvert.",
                ],
              },
            ],
          },
        ],
      },

      /*
      ======================================================
      3. PRINCIPE
      ======================================================
      */

      {
        id: "principe",
        title: "Principe général",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Le module commence par un diagnostic des ressources déjà présentes : artisans, ressourceries, garages solidaires, fablabs, entreprises adaptées, lycées professionnels, centres de formation, services techniques, entreprises du bâtiment ou ateliers municipaux.",

              "L’objectif n’est pas de dupliquer ces structures, mais de les relier, de mutualiser certaines fonctions et de créer uniquement les briques manquantes.",

              "L’Atelier technique territorial peut donc prendre des formes très différentes selon les territoires.",
            ],
          },

          {
            type: "resume",

            title: "La méthode en trois étapes",

            items: [
              "Identifier les compétences et les outils existants.",
              "Repérer les besoins non couverts.",
              "Créer ou relier les activités manquantes.",
            ],
          },
        ],
      },

      /*
      ======================================================
      4. ACTIVITÉS
      ======================================================
      */

      {
        id: "activites",
        title: "Activités principales",

        blocks: [
          {
            type: "activities",

            items: [
              {
                category: "Mobilier et bois",

                title: "Réemploi, réparation et fabrication",

                paragraphs: [
                  "Réparation et remise en état de mobilier.",
                  "Fabrication à partir de bois récupéré.",
                  "Production de mobilier simple pour les écoles, collectivités, associations, entreprises et habitants.",
                ],

                items: [
                  "Menuiserie",
                  "Ébénisterie simple",
                  "Réemploi du bois",
                  "Mobilier public",
                  "Aménagement intérieur",
                ],
              },

              {
                category: "Métal et mécanique",

                title: "Maintenance et petite fabrication",

                paragraphs: [
                  "Réparation d’outillage, de cycles, de petits équipements agricoles ou techniques.",
                  "Fabrication de pièces simples et adaptation de matériels existants.",
                ],

                items: [
                  "Soudure",
                  "Métallerie",
                  "Réparation de cycles",
                  "Maintenance agricole",
                  "Petite mécanique",
                ],
              },

              {
                category: "Numérique",

                title: "Reconditionnement et services locaux",

                paragraphs: [
                  "Collecte, diagnostic, remise en état et redistribution d’ordinateurs et de matériels numériques.",
                  "Accompagnement des structures locales dans la maintenance, la sécurisation et l’usage de leurs équipements.",
                ],

                items: [
                  "Reconditionnement informatique",
                  "Maintenance",
                  "Installation de logiciels",
                  "Sensibilisation à la cybersécurité",
                  "Services numériques locaux",
                ],
              },

              {
                category: "Électroménager",

                title: "Diagnostic, réparation et réemploi",

                paragraphs: [
                  "Réparation des appareils électroménagers.",
                  "Récupération des pièces détachées utilisables.",
                  "Remise en circulation des équipements réparables.",
                ],

                items: [
                  "Diagnostic",
                  "Réparation",
                  "Démontage",
                  "Récupération de pièces",
                  "Revente ou redistribution",
                ],
              },

              {
                category: "Bâtiment",

                title: "Construction, entretien et rénovation",

                paragraphs: [
                  "Le pôle bâtiment peut naître lors de l’autoconstruction ou de la rénovation des premiers locaux.",

                  "Les compétences, les équipes et l’outillage constitués peuvent ensuite être pérennisés pour répondre à des besoins territoriaux.",
                ],

                items: [
                  "Entretien des bâtiments",
                  "Rénovation énergétique",
                  "Réemploi de matériaux",
                  "Petits chantiers",
                  "Auto-construction accompagnée",
                ],
              },
            ],
          },
        ],
      },

      /*
      ======================================================
      5. ADAPTATION TERRITORIALE
      ======================================================
      */

      {
        id: "adaptation-territoriale",
        title: "Adaptation territoriale",

        blocks: [
          {
            type: "encadre",

            title: "Un module conçu pour s’adapter",

            content: [
              {
                subtitle: "Partir de ce qui existe",

                paragraphs: [
                  "Un territoire possédant déjà une ressourcerie n’a pas besoin d’en créer une seconde.",

                  "Cette ressourcerie peut devenir le noyau du module et être reliée à des artisans, à un lycée professionnel, à un fablab ou à des services techniques.",
                ],
              },

              {
                subtitle: "Compléter ce qui manque",

                paragraphs: [
                  "Le diagnostic territorial permet d’identifier les besoins non couverts : réparation informatique, maintenance agricole, électroménager, mobilier public, rénovation ou réemploi de matériaux.",

                  "Les nouvelles activités sont créées uniquement lorsqu’elles apportent une fonction absente ou insuffisante.",
                ],
              },

              {
                subtitle: "Construire progressivement",

                paragraphs: [
                  "Le module peut débuter avec une seule activité, puis s’élargir en fonction des besoins, des compétences disponibles et des débouchés.",

                  "Il peut également rester spécialisé si le territoire dispose déjà des autres fonctions.",
                ],
              },
            ],
          },

          {
            type: "examples",

            title: "Exemples de configurations",

            items: [
              {
                title: "Territoire disposant d’une ressourcerie",

                content:
                  "Ajout d’un atelier de réparation informatique et électroménager, sans recréer la fonction de collecte.",
              },

              {
                title: "Territoire agricole",

                content:
                  "Développement prioritaire de la mécanique, de la soudure et de la maintenance du matériel agricole.",
              },

              {
                title: "Ville moyenne",

                content:
                  "Développement du mobilier, du numérique, de l’électroménager et de la rénovation des bâtiments publics.",
              },

              {
                title: "Territoire disposant d’un lycée professionnel",

                content:
                  "Coopération avec les formations existantes et création de chantiers ou de commandes pédagogiques réelles.",
              },
            ],
          },
        ],
      },

      /*
      ======================================================
      6. ORGANISATION
      ======================================================
      */

      {
        id: "organisation",
        title: "Organisation",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "L’Atelier technique territorial peut être porté par une SCIC, une coopérative, une structure de l’économie sociale et solidaire ou une coopération contractuelle entre plusieurs acteurs existants.",

              "Le choix de la structure dépend du nombre d’activités, des acteurs engagés et du niveau de mutualisation recherché.",
            ],
          },

          {
            type: "list",

            title: "Principes d’organisation",

            items: [
              "Des ateliers spécialisés disposant de compétences professionnelles réelles.",
              "Des fonctions partagées : accueil, gestion, logistique, achats, communication et commercialisation.",
              "Des professionnels expérimentés assurant la production et la transmission.",
              "Des parcours de formation et de reconversion liés à des commandes réelles.",
              "Des partenariats avec les collectivités, entreprises, agriculteurs, associations et habitants.",
              "Une organisation évitant de concurrencer inutilement les artisans locaux.",
            ],
          },
        ],
      },

      /*
      ======================================================
      7. IMPACTS
      ======================================================
      */

      {
        id: "impacts",
        title: "Impacts attendus",

        blocks: [
          {
            type: "cards",

            items: [
              {
                title: "Emploi",

                content:
                  "Création d’activités techniques locales accessibles à différents niveaux de qualification.",
              },

              {
                title: "Économie circulaire",

                content:
                  "Allongement de la durée de vie des objets, équipements et matériaux.",
              },

              {
                title: "Transmission",

                content:
                  "Préservation et circulation des savoir-faire techniques et artisanaux.",
              },

              {
                title: "Souveraineté locale",

                content:
                  "Réduction de la dépendance à des fournisseurs et prestataires éloignés.",
              },

              {
                title: "Services publics",

                content:
                  "Réponse locale aux besoins de maintenance des écoles, bâtiments et équipements collectifs.",
              },

              {
                title: "Insertion et reconversion",

                content:
                  "Création de parcours fondés sur une activité productive réelle et utile.",
              },
            ],
          },
        ],
      },

      /*
      ======================================================
      8. CHIFFRES CLÉS
      ======================================================
      */

      {
        id: "chiffres-cles",
        title: "Chiffres clés",

        blocks: [
          {
            type: "stats",

            items: [
              {
                value: "5 à 7",
                label: "familles d’activités possibles",
              },

              {
                value: "1 à plusieurs",
                label: "ateliers selon le territoire",
              },

              {
                value: "3 à 5 ans",
                label: "montée en charge indicative",
              },

              {
                value: "Variable",
                label: "investissement selon les briques existantes",
              },
            ],

            note: "Les montants d’investissement, les effectifs et les recettes dépendent fortement des structures déjà présentes, des activités retenues et du niveau de mutualisation.",
          },

          {
            type: "notice",

            content:
              "Le chiffrage détaillé est présenté dans la version membre du prototype. Il distingue les locaux, les machines, les véhicules, le stock initial, les effectifs, les charges et les recettes par activité.",
          },
        ],
      },

      /*
      ======================================================
      9. ARTICULATION
      ======================================================
      */

      {
        id: "articulation",
        title: "Articulation avec les autres modules",

        blocks: [
          {
            type: "links",

            items: [
              {
                label: "Exploitation agricole polyculture-élevage",

                content:
                  "Maintenance du matériel, réparation, fabrication d’équipements simples et valorisation de matériaux.",

                url: "/prototype2",
              },

              {
                label: "École multiniveaux et pôle de transmission",

                content:
                  "Accueil de projets pédagogiques, apprentissage pratique et transmission des métiers techniques.",

                url: "/prototype3",
              },

              {
                label: "Village SCIC territorial",

                content:
                  "Mutualisation des locaux, de la gouvernance, des fonctions administratives, des achats et des investissements.",

                url: "/prototype4",
              },
            ],
          },
        ],
      },

      /*
      ======================================================
      10. CONCLUSION
      ======================================================
      */

      {
        id: "conclusion",
        title: "Conclusion",

        blocks: [
          {
            type: "conclusion",

            content:
              "L’Atelier technique territorial ne constitue pas un modèle figé. Il fournit un cadre permettant à chaque territoire d’identifier ses ressources techniques, de relier les acteurs existants et de créer progressivement les fonctions qui lui manquent.",
          },
        ],
      },
    ],

    memberAccess: {
      label: "Accéder à la version détaillée",
      url: "/membre/prototype/1",

      description:
        "La version membre présente le modèle économique, les investissements, les besoins humains et matériels, les hypothèses de recettes, le calendrier de déploiement et les conditions de réussite.",
    },

    navigation: {
      previous: null,

      list: {
        label: "Liste des prototypes",
        url: "/pilier3/#prototypes",
      },

      next: {
        label: "Exploitation agricole polyculture-élevage",
        url: "/prototype/2",
      },
    },
  },

  /*
========================================================
MODULE OPÉRATIONNEL 2
EXPLOITATION AGRICOLE POLYCULTURE-ÉLEVAGE
========================================================
*/

  2: {
    slug: "exploitation-agricole-polyculture-elevage",

    title: "Exploitation agricole polyculture-élevage",

    image: "/action/module2.png",

    subtitle:
      "Produire, transformer et sécuriser l’alimentation du territoire.",

    intro: `
L’exploitation agricole polyculture-élevage constitue un module alimentaire territorial adaptable.

Elle associe plusieurs productions agricoles complémentaires, des outils de transformation et des débouchés organisés afin de renforcer la viabilité économique de l’exploitation, la sécurité alimentaire locale et la coopération entre producteurs.

Le module peut être créé entièrement, compléter une exploitation existante ou relier plusieurs fermes autour d’équipements et de débouchés mutualisés.

Il ne propose donc pas un modèle agricole uniforme. Sa configuration dépend du climat, des sols, du foncier, des productions déjà présentes, des compétences disponibles et des besoins alimentaires du territoire.
  `,

    structure: [
      "Constat",
      "Objectif",
      "Principe",
      "Activités",
      "Adaptation territoriale",
      "Organisation",
      "Impacts",
      "Chiffres clés",
      "Articulation",
      "Conclusion",
    ],

    sections: [
      /*
    ======================================================
    1. CONSTAT
    ======================================================
    */

      {
        id: "constat",
        title: "Constat",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "La France demeure une grande puissance agricole, mais une partie croissante de son système alimentaire dépend de filières longues, concentrées et vulnérables.",

              "Dans de nombreux territoires, les exploitations produisent des matières premières qui sont transformées loin de leur lieu de production, tandis que la restauration collective et les habitants consomment des produits provenant d’autres régions ou de l’étranger.",

              "Les agriculteurs restent souvent isolés face aux investissements, à la transformation, à la commercialisation, aux aléas climatiques et aux fluctuations des marchés.",
            ],
          },

          {
            type: "list",

            items: [
              "Vieillissement des exploitants et difficultés de transmission des fermes.",
              "Fragilité économique d’un grand nombre d’exploitations.",
              "Dépendance aux intrants, à l’énergie et aux marchés mondiaux.",
              "Concentration des outils de transformation et de distribution.",
              "Déconnexion entre la production agricole et l’alimentation locale.",
              "Accès difficile au foncier pour les nouveaux agriculteurs.",
              "Manque d’équipements mutualisés pour la transformation et la conservation.",
              "Faible valorisation de certaines productions locales ou saisonnières.",
              "Perte d’une partie des productions en raison de l’absence de débouchés ou d’outils de transformation.",
              "Rigidité de la commande publique et difficulté pour les petites exploitations à répondre seules aux marchés de restauration collective.",
              "Vulnérabilité croissante face aux sécheresses, aux fortes chaleurs, aux excès d’eau et aux autres aléas climatiques.",
            ],
          },

          {
            type: "quote",

            content:
              "Le problème n’est pas seulement de produire davantage, mais de relier la production, la transformation, la conservation et les besoins alimentaires du territoire.",
          },
        ],
      },

      /*
    ======================================================
    2. OBJECTIF
    ======================================================
    */

      {
        id: "objectif",
        title: "Objectif",

        blocks: [
          {
            type: "encadre",

            title: "Objectif du prototype",

            content: [
              {
                subtitle: "Ce que l’exploitation fait réellement",

                paragraphs: [
                  "L’exploitation agricole polyculture-élevage produit une alimentation diversifiée tout en recherchant des complémentarités entre les cultures, les animaux, les arbres, les sols et les débouchés.",

                  "Elle associe la production agricole à la transformation, à la conservation et à la commercialisation afin de conserver une plus grande part de la valeur créée sur le territoire.",

                  "Elle peut également servir de support à la formation, à l’expérimentation, à la transmission et à la coopération avec les producteurs voisins.",
                ],

                items: [
                  "Produire une alimentation diversifiée.",
                  "Réduire les dépendances aux intrants extérieurs.",
                  "Transformer et conserver une partie des productions.",
                  "Sécuriser les débouchés par la restauration collective.",
                  "Mutualiser certains équipements avec les producteurs voisins.",
                  "Créer des emplois agricoles et alimentaires locaux.",
                  "Expérimenter des pratiques adaptées au territoire.",
                ],
              },

              {
                subtitle: "Ce que l’exploitation n’est pas",

                paragraphs: [
                  "Ce n’est pas une ferme modèle destinée à être reproduite à l’identique sur l’ensemble du territoire.",

                  "Ce n’est pas une exploitation cherchant à produire seule tous les aliments nécessaires à la population locale.",

                  "Ce n’est pas non plus un système fermé ou opposé aux exploitations agricoles déjà présentes.",
                ],

                items: [
                  "Elle ne remplace pas les producteurs existants.",
                  "Elle ne cherche pas l’autarcie alimentaire.",
                  "Elle ne rejette pas la mécanisation lorsqu’elle est utile.",
                  "Elle ne privilégie pas une technique agricole unique.",
                  "Elle complète et relie les productions présentes sur le territoire.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    3. PRINCIPE
    ======================================================
    */

      {
        id: "principe",
        title: "Principe général",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Le module repose sur la diversification des productions et sur leur complémentarité. Les animaux peuvent contribuer à la fertilisation et à l’entretien de certaines parcelles. Les cultures produisent de l’alimentation humaine, des fourrages, des pailles ou des matières organiques. Les arbres apportent des fruits, de l’ombre, du bois, une protection climatique et des habitats favorables à la biodiversité.",

              "Cette diversification ne signifie pas que chaque exploitation doit assurer toutes les productions. Elle peut être organisée à l’échelle d’une ferme ou d’un réseau de producteurs partageant certains équipements, débouchés et fonctions.",

              "La restauration collective constitue un débouché structurant, car elle permet d’organiser une demande relativement prévisible, tout en améliorant l’accès des habitants à une alimentation locale et de qualité.",

              "Un laboratoire de transformation et de conservation permet de valoriser les surplus, les produits hors calibre et certains invendus, y compris ceux provenant d’autres producteurs locaux.",
            ],
          },

          {
            type: "resume",

            title: "Les principes du module",

            items: [
              "Diversifier pour réduire les dépendances.",
              "Relier production, transformation et débouchés.",
              "Mutualiser sans uniformiser.",
              "Adapter les techniques au contexte local.",
              "Créer des complémentarités entre agriculteurs.",
              "Sécuriser une partie de la production par la commande collective.",
            ],
          },
        ],
      },

      /*
    ======================================================
    4. ACTIVITÉS
    ======================================================
    */

      {
        id: "activites",
        title: "Activités principales",

        blocks: [
          {
            type: "activities",

            items: [
              {
                category: "Maraîchage",

                title: "Production diversifiée de légumes",

                paragraphs: [
                  "Le maraîchage fournit une gamme diversifiée de légumes frais et de conservation.",

                  "Il peut associer culture sous abri, plein champ, légumes vivaces et productions saisonnières adaptées aux besoins de la restauration collective.",
                ],

                items: [
                  "Légumes frais",
                  "Légumes de garde",
                  "Cultures sous serre",
                  "Plantes aromatiques",
                  "Semences et plants",
                ],
              },

              {
                category: "Arboriculture et agroforesterie",

                title: "Productions fruitières et fonctions écologiques",

                paragraphs: [
                  "Les arbres peuvent être organisés sous forme de vergers, de prés-vergers, de haies fruitières, de forêts-jardins ou d’alignements agroforestiers.",

                  "Leur fonction ne se limite pas à la production alimentaire : ils contribuent également à l’ombrage, à la protection des cultures, à la biodiversité, à l’eau et à la fertilité des sols.",
                ],

                items: [
                  "Vergers",
                  "Petits fruits",
                  "Fruits à coque",
                  "Forêts-jardins",
                  "Haies fourragères",
                  "Bois d’œuvre ou énergie",
                ],
              },

              {
                category: "Élevage",

                title: "Complémentarité entre animaux et cultures",

                paragraphs: [
                  "L’élevage est dimensionné selon les surfaces disponibles, les ressources fourragères, les besoins alimentaires et les conditions climatiques.",

                  "Il peut contribuer à la fertilité des sols, à l’entretien des prairies, des vergers et de certains espaces agroforestiers.",
                ],

                items: [
                  "Bovins",
                  "Ovins",
                  "Caprins",
                  "Volailles",
                  "Équidés de travail",
                  "Petits élevages adaptés au contexte",
                ],
              },

              {
                category: "Grandes cultures",

                title: "Céréales, légumineuses et fourrages",

                paragraphs: [
                  "Les grandes cultures apportent des céréales alimentaires, des légumineuses, des fourrages, de la paille et des matières nécessaires au fonctionnement de l’exploitation.",

                  "Une partie des travaux peut être assurée par l’exploitation, mutualisée ou confiée à des entreprises agricoles locales.",
                ],

                items: [
                  "Céréales panifiables",
                  "Céréales fourragères",
                  "Légumineuses",
                  "Prairies temporaires",
                  "Foin",
                  "Cultures de couverture",
                ],
              },

              {
                category: "Transformation",

                title: "Valoriser les productions localement",

                paragraphs: [
                  "Le laboratoire de transformation permet de conserver, cuisiner et valoriser une partie des productions.",

                  "Il peut également accueillir les surplus ou les produits hors calibre d’autres exploitations du territoire.",
                ],

                items: [
                  "Conserves",
                  "Soupes et sauces",
                  "Produits déshydratés",
                  "Produits laitiers",
                  "Découpe et préparation",
                  "Conservation par le froid",
                ],
              },

              {
                category: "Restauration collective",

                title: "Un débouché structurant",

                paragraphs: [
                  "Les cantines scolaires, établissements de santé, structures médico-sociales, administrations et entreprises peuvent constituer un débouché régulier.",

                  "La mutualisation entre producteurs permet de proposer des volumes, une diversité et une continuité d’approvisionnement qu’une seule ferme ne pourrait pas toujours garantir.",
                ],

                items: [
                  "Planification des cultures",
                  "Regroupement des commandes",
                  "Logistique mutualisée",
                  "Transformation des surplus",
                  "Contrats pluriannuels",
                ],
              },

              {
                category: "Recherche et expérimentation",

                title: "Adapter les pratiques au territoire",

                paragraphs: [
                  "L’exploitation peut servir de laboratoire territorial pour tester des cultures, des outils, des variétés, des modes d’irrigation ou des associations entre productions.",

                  "Les résultats doivent être documentés et partagés avec les producteurs, les établissements agricoles et les partenaires scientifiques.",
                ],

                items: [
                  "Essais variétaux",
                  "Céréales jardinées",
                  "Forêts-jardins",
                  "Traction animale",
                  "Gestion de l’eau",
                  "Outils agricoles adaptés",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    5. ADAPTATION TERRITORIALE
    ======================================================
    */

      {
        id: "adaptation-territoriale",
        title: "Adaptation territoriale",

        blocks: [
          {
            type: "encadre",

            title: "Une exploitation conçue à partir du territoire",

            content: [
              {
                subtitle: "Partir des productions existantes",

                paragraphs: [
                  "Un territoire d’élevage ne développera pas la même organisation qu’un territoire maraîcher, viticole, céréalier ou arboricole.",

                  "Le module commence donc par l’identification des productions, des agriculteurs, des outils de transformation, des débouchés et des compétences déjà présents.",
                ],
              },

              {
                subtitle: "Compléter les maillons manquants",

                paragraphs: [
                  "Le diagnostic peut révéler que la production agricole existe déjà, mais que le territoire manque d’un laboratoire de transformation, d’un outil logistique, d’une légumerie ou d’une organisation commune pour répondre à la restauration collective.",

                  "Dans ce cas, le module ne consiste pas à créer une nouvelle ferme complète, mais à construire la fonction manquante.",
                ],
              },

              {
                subtitle: "Organiser les complémentarités",

                paragraphs: [
                  "Plusieurs producteurs peuvent mutualiser du matériel, une chambre froide, un laboratoire, une plateforme logistique ou certains salariés.",

                  "Ils peuvent également coordonner leurs productions afin de sécuriser les volumes et de limiter les surplus.",
                ],
              },

              {
                subtitle: "Construire progressivement",

                paragraphs: [
                  "Le module peut commencer par une activité prioritaire, puis s’élargir à mesure que les débouchés, les compétences et les capacités financières se consolident.",

                  "Cette progression réduit le risque d’un investissement initial surdimensionné.",
                ],
              },
            ],
          },

          {
            type: "examples",

            title: "Exemples de configurations",

            items: [
              {
                title: "Territoire disposant de nombreux maraîchers",

                content:
                  "Création prioritaire d’une légumerie, d’un laboratoire de transformation, d’une chambre froide et d’une organisation commune pour la restauration collective.",
              },

              {
                title: "Territoire d’élevage",

                content:
                  "Développement de cultures fourragères diversifiées, de haies alimentaires, d’outils de transformation et de débouchés locaux.",
              },

              {
                title: "Territoire céréalier",

                content:
                  "Introduction progressive de légumineuses, d’arboriculture, d’élevage complémentaire et d’outils de transformation alimentaire.",
              },

              {
                title: "Territoire possédant un lycée agricole",

                content:
                  "Création d’une exploitation expérimentale ou d’un réseau de fermes partenaires servant de support à la formation, à la recherche et à l’installation.",
              },

              {
                title: "Territoire sans exploitation disponible",

                content:
                  "Création progressive d’une nouvelle ferme polyculture-élevage, dimensionnée selon le foncier et les besoins locaux.",
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    6. ORGANISATION
    ======================================================
    */

      {
        id: "organisation",
        title: "Organisation",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Le module peut être porté par une exploitation unique, une SCIC, une coopérative agricole, un groupement de producteurs ou une coopération entre plusieurs structures existantes.",

              "Son organisation dépend du niveau d’intégration souhaité. Certaines productions peuvent appartenir à la structure commune, tandis que d’autres restent assurées par des agriculteurs indépendants liés par des contrats ou des accords de coopération.",

              "Les fonctions les plus faciles à mutualiser sont généralement la transformation, la conservation, la logistique, la commercialisation, certains équipements et les relations avec la restauration collective.",
            ],
          },

          {
            type: "list",

            title: "Principes d’organisation",

            items: [
              "Des ateliers de production clairement identifiés.",
              "Une planification commune des volumes destinés à la restauration collective.",
              "Des fonctions mutualisées de transformation et de conservation.",
              "Une logistique organisée entre les fermes, le laboratoire et les clients.",
              "Des professionnels responsables de chaque activité.",
              "Une coopération avec les agriculteurs et artisans alimentaires du territoire.",
              "Des espaces dédiés à la formation et à l’expérimentation.",
              "Une gestion distincte des activités productives et des fonctions pédagogiques.",
            ],
          },

          {
            type: "cards",

            title: "Équipements possibles",

            items: [
              {
                title: "Bâtiments agricoles",
                content:
                  "Hangars, étables, bergeries, poulaillers, serres et espaces de stockage.",
              },
              {
                title: "Transformation",
                content:
                  "Légumerie, conserverie, cuisine, laiterie ou atelier de découpe selon les productions.",
              },
              {
                title: "Conservation",
                content:
                  "Chambres froides, séchoirs, silos, caves et espaces de stockage sec.",
              },
              {
                title: "Logistique",
                content:
                  "Véhicules, espaces de préparation des commandes et plateforme de regroupement.",
              },
              {
                title: "Pédagogie",
                content:
                  "Salle de formation, parcelles expérimentales et espaces d’accueil.",
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    7. IMPACTS
    ======================================================
    */

      {
        id: "impacts",
        title: "Impacts attendus",

        blocks: [
          {
            type: "cards",

            items: [
              {
                title: "Alimentation",

                content:
                  "Sécurisation d’une partie de l’approvisionnement local en produits frais, transformés et de saison.",
              },

              {
                title: "Emploi",

                content:
                  "Création d’emplois agricoles, alimentaires, logistiques, techniques et pédagogiques.",
              },

              {
                title: "Revenus agricoles",

                content:
                  "Maintien d’une plus grande part de la valeur grâce à la transformation et à la vente organisée.",
              },

              {
                title: "Installation",

                content:
                  "Création de parcours d’entrée progressive dans les métiers agricoles et facilitation de la transmission.",
              },

              {
                title: "Sols et biodiversité",

                content:
                  "Diversification des cultures, développement des arbres et amélioration de la couverture des sols.",
              },

              {
                title: "Robustesse climatique",

                content:
                  "Répartition des risques entre plusieurs productions et adaptation progressive aux aléas.",
              },

              {
                title: "Restauration collective",

                content:
                  "Accès régulier à des produits locaux et amélioration de la visibilité économique pour les producteurs.",
              },

              {
                title: "Coopération territoriale",

                content:
                  "Mutualisation des équipements, coordination des productions et création de relations durables entre acteurs.",
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    8. CHIFFRES CLÉS
    ======================================================
    */

      {
        id: "chiffres-cles",
        title: "Chiffres clés",

        blocks: [
          {
            type: "stats",

            items: [
              {
                value: "4 à 7",
                label: "familles de productions possibles",
              },

              {
                value: "1 ou plusieurs",
                label: "exploitations associées",
              },

              {
                value: "3 à 5 ans",
                label: "montée en charge indicative",
              },

              {
                value: "Variable",
                label: "surface selon le contexte",
              },

              {
                value: "Mutualisable",
                label: "transformation et logistique",
              },
            ],

            note: "Les surfaces, les effectifs, l’investissement et les volumes de production dépendent du foncier, des structures existantes, des ateliers retenus et des besoins du territoire.",
          },

          {
            type: "notice",

            content:
              "Le chiffrage détaillé de la version membre distinguera le foncier, les bâtiments, le matériel, les animaux, les plantations, le laboratoire de transformation, la logistique, les effectifs, les charges et les recettes de chaque activité.",
          },
        ],
      },

      /*
    ======================================================
    9. ARTICULATION
    ======================================================
    */

      {
        id: "articulation",
        title: "Articulation avec les autres modules",

        blocks: [
          {
            type: "links",

            items: [
              {
                label: "Atelier technique territorial",

                content:
                  "Maintenance des équipements agricoles, réparation du matériel, fabrication d’outils simples et entretien des bâtiments.",

                url: "/prototype1",
              },

              {
                label: "École multiniveaux et pôle de transmission",

                content:
                  "Formation pratique, sensibilisation à l’alimentation, expérimentation et transmission des métiers agricoles.",

                url: "/prototype3",
              },

              {
                label: "Village SCIC territorial",

                content:
                  "Mutualisation de la gouvernance, du foncier, des logements, de l’énergie, de la restauration et de certaines fonctions administratives.",

                url: "/prototype4",
              },
            ],
          },

          {
            type: "quote",

            content:
              "L’exploitation agricole peut fonctionner seule, coopérer avec des structures existantes ou devenir le pôle alimentaire d’un écosystème territorial plus large.",
          },
        ],
      },

      /*
    ======================================================
    10. CONCLUSION
    ======================================================
    */

      {
        id: "conclusion",
        title: "Conclusion",

        blocks: [
          {
            type: "conclusion",

            content:
              "L’exploitation agricole polyculture-élevage proposée par CAP2032 n’est pas un modèle unique à reproduire. Elle constitue un cadre adaptable permettant de relier les productions agricoles, la transformation, la restauration collective, la formation et les besoins alimentaires du territoire. Elle peut être créée entièrement, compléter une ferme existante ou organiser la coopération entre plusieurs producteurs.",
          },
        ],
      },
    ],

    memberAccess: {
      label: "Accéder à la version détaillée",

      url: "/membre/prototype/2",

      description:
        "La version membre présente les surfaces, les ateliers de production, les besoins humains et matériels, les investissements, les charges, les recettes, la montée en charge, les débouchés et les différents scénarios d’adaptation territoriale.",
    },

    navigation: {
      previous: {
        label: "Atelier technique territorial",
        url: "/prototype/1",
      },

      list: {
        label: "Liste des prototypes",
        url: "/pilier3",
      },

      next: {
        label: "École multiniveaux et pôle de transmission",
        url: "/prototype/3",
      },
    },
  },

  /*
========================================================
MODULE OPÉRATIONNEL 3
ÉCOLE MULTINIVEAUX ET PÔLE DE TRANSMISSION
========================================================
*/

  3: {
    slug: "ecole-multiniveaux-pole-transmission",

    title: "École multiniveaux et pôle de transmission",

    image: "/action/module3.png",

    subtitle:
      "Former par la pratique, transmettre les savoirs et relier les générations.",

    intro: `
L’École multiniveaux et pôle de transmission constitue un module éducatif territorial adaptable.

Elle associe l’enseignement scolaire, la pédagogie par projets, la découverte des métiers, la formation professionnelle, la reconversion et la transmission intergénérationnelle.

Elle peut être créée comme un établissement complet, compléter une école ou un centre de formation existant, ou relier plusieurs structures éducatives, professionnelles et associatives autour de projets communs.

Elle ne propose pas un modèle scolaire uniforme. Son organisation dépend de la population, des établissements déjà présents, des compétences disponibles et des besoins éducatifs, sociaux et économiques du territoire.
  `,

    structure: [
      "Constat",
      "Objectif",
      "Principe",
      "Activités",
      "Adaptation territoriale",
      "Organisation",
      "Impacts",
      "Chiffres clés",
      "Articulation",
      "Conclusion",
    ],

    sections: [
      /*
    ======================================================
    1. CONSTAT
    ======================================================
    */

      {
        id: "constat",
        title: "Constat",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Le système éducatif transmet des connaissances indispensables, mais il peine parfois à relier les apprentissages scolaires, la compréhension du monde réel, les compétences pratiques et la découverte des métiers.",

              "Dans de nombreux territoires ruraux ou périurbains, les écoles ferment, les formations s’éloignent et les structures éducatives fonctionnent séparément des entreprises, des exploitations agricoles, des associations et des habitants.",

              "Parallèlement, de nombreux adultes doivent se reconvertir, des entreprises peinent à recruter et des savoir-faire techniques, artisanaux, agricoles ou domestiques risquent de disparaître faute de transmission.",
            ],
          },

          {
            type: "list",

            items: [
              "Éloignement progressif de certains établissements scolaires et centres de formation.",
              "Difficulté à maintenir des écoles dans les territoires peu peuplés.",
              "Cloisonnement entre enseignement général, formation professionnelle et monde du travail.",
              "Faible place accordée à l’apprentissage par la pratique.",
              "Orientation parfois trop tardive ou insuffisamment reliée aux aptitudes réelles des élèves.",
              "Dévalorisation persistante des métiers manuels, techniques, agricoles et artisanaux.",
              "Difficultés de recrutement dans de nombreux métiers essentiels.",
              "Manque de solutions de formation accessibles pour les adultes en reconversion.",
              "Faible transmission des savoir-faire entre les générations.",
              "Séparation entre l’école, les familles, les associations et les acteurs économiques du territoire.",
              "Uniformité de certaines réponses éducatives malgré la diversité des rythmes, des profils et des contextes locaux.",
            ],
          },

          {
            type: "quote",

            content:
              "L’enjeu n’est pas seulement de transmettre des connaissances, mais de permettre à chacun de comprendre, de faire, de coopérer et de trouver progressivement sa place dans la société.",
          },
        ],
      },

      /*
    ======================================================
    2. OBJECTIF
    ======================================================
    */

      {
        id: "objectif",
        title: "Objectif",

        blocks: [
          {
            type: "encadre",

            title: "Objectif du prototype",

            content: [
              {
                subtitle: "Ce que l’école fait réellement",

                paragraphs: [
                  "L’École multiniveaux organise les apprentissages autour d’un socle académique solide, enrichi par des projets concrets, des activités pratiques et des relations régulières avec les acteurs du territoire.",

                  "Elle permet à des élèves d’âges différents de travailler ensemble sur certains projets, tout en conservant des apprentissages adaptés à leur niveau et à leur progression.",

                  "Le pôle de transmission élargit cette logique aux adolescents, aux adultes en reconversion, aux professionnels, aux retraités et aux habitants disposant de compétences à partager.",
                ],

                items: [
                  "Garantir les apprentissages fondamentaux.",
                  "Développer l’autonomie, la coopération et l’esprit critique.",
                  "Relier les savoirs théoriques à des réalisations concrètes.",
                  "Faire découvrir les métiers et les activités du territoire.",
                  "Faciliter les reconversions et la formation continue.",
                  "Préserver et transmettre les savoir-faire.",
                  "Renforcer les liens entre les générations.",
                ],
              },

              {
                subtitle: "Ce que l’école n’est pas",

                paragraphs: [
                  "Ce n’est pas une école sans programme, sans exigences ou sans cadre pédagogique.",

                  "Ce n’est pas une structure destinée à orienter précocement les enfants vers un métier déterminé.",

                  "Ce n’est pas non plus un établissement fermé sur le Village SCIC ou sur les seules activités agricoles et techniques.",
                ],

                items: [
                  "Elle ne remplace pas les enseignants par des intervenants occasionnels.",
                  "Elle ne renonce pas aux connaissances académiques.",
                  "Elle ne confond pas apprentissage pratique et travail productif des enfants.",
                  "Elle n’impose pas le même parcours à tous les élèves.",
                  "Elle complète les structures existantes lorsqu’elles fonctionnent déjà.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    3. PRINCIPE
    ======================================================
    */

      {
        id: "principe",
        title: "Principe général",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Le module repose sur une articulation entre enseignement fondamental, pédagogie par projets, expérimentation, coopération et ouverture sur le territoire.",

              "Les apprentissages scolaires conservent une place centrale. La lecture, l’écriture, les mathématiques, les sciences, l’histoire, les langues, les arts et l’éducation civique donnent aux élèves les outils nécessaires pour comprendre le monde et agir avec discernement.",

              "Les projets permettent ensuite de mobiliser plusieurs disciplines autour d’une réalisation concrète : cultiver un jardin, construire un objet, étudier la qualité de l’eau, organiser une exposition, programmer un outil numérique ou documenter l’histoire du territoire.",

              "Le fonctionnement multiniveaux ne signifie pas que tous les élèves font la même chose. Il permet d’organiser des temps communs, de favoriser l’entraide et d’adapter certaines activités au niveau de chacun.",

              "Le pôle de transmission permet enfin de relier l’école aux formations professionnelles, aux reconversions, aux entreprises, aux associations et aux savoirs des habitants.",
            ],
          },

          {
            type: "resume",

            title: "Les principes du module",

            items: [
              "Garantir un socle académique exigeant.",
              "Apprendre en comprenant et en faisant.",
              "Adapter les parcours sans isoler les élèves.",
              "Coopérer entre âges et niveaux différents.",
              "Ouvrir l’école sur les ressources du territoire.",
              "Relier formation initiale et formation tout au long de la vie.",
              "Transmettre les compétences autant que les connaissances.",
            ],
          },
        ],
      },

      /*
    ======================================================
    4. ACTIVITÉS
    ======================================================
    */

      {
        id: "activites",
        title: "Activités principales",

        blocks: [
          {
            type: "activities",

            items: [
              {
                category: "Enseignement fondamental",

                title: "Acquérir les connaissances essentielles",

                paragraphs: [
                  "Les apprentissages fondamentaux restent la base du fonctionnement de l’école.",

                  "Ils sont organisés selon l’âge, le niveau et les besoins de chaque élève, avec des temps de travail individuel, en petits groupes et en classe entière.",
                ],

                items: [
                  "Lecture et expression écrite",
                  "Mathématiques",
                  "Sciences",
                  "Histoire et géographie",
                  "Langues",
                  "Arts",
                  "Éducation physique",
                  "Éducation civique",
                ],
              },

              {
                category: "Pédagogie par projets",

                title: "Relier plusieurs disciplines",

                paragraphs: [
                  "Les projets donnent du sens aux apprentissages en les reliant à une réalisation, une enquête ou une problématique concrète.",

                  "Ils peuvent être conduits sur quelques jours, plusieurs semaines ou une année scolaire.",
                ],

                items: [
                  "Projet scientifique",
                  "Projet agricole",
                  "Construction ou réparation",
                  "Création artistique",
                  "Recherche historique",
                  "Projet numérique",
                  "Organisation d’un événement",
                  "Étude environnementale",
                ],
              },

              {
                category: "Découverte des métiers",

                title: "Comprendre le travail réel",

                paragraphs: [
                  "Les élèves découvrent progressivement les métiers présents sur le territoire, leurs compétences, leurs contraintes et leur utilité sociale.",

                  "Cette découverte ne vise pas une orientation précoce, mais une meilleure compréhension du monde professionnel et des différentes formes d’activité.",
                ],

                items: [
                  "Visites d’entreprises et d’exploitations",
                  "Rencontres avec des professionnels",
                  "Démonstrations de savoir-faire",
                  "Ateliers pratiques encadrés",
                  "Stages d’observation",
                  "Projets menés avec des partenaires",
                ],
              },

              {
                category: "Transmission intergénérationnelle",

                title: "Faire circuler les savoirs et les expériences",

                paragraphs: [
                  "Des habitants, retraités, artisans, agriculteurs, techniciens, artistes ou professionnels peuvent intervenir dans un cadre défini avec l’équipe éducative.",

                  "Ils ne remplacent pas les enseignants, mais apportent des connaissances, des expériences et des savoir-faire complémentaires.",
                ],

                items: [
                  "Mémoire locale",
                  "Jardinage",
                  "Cuisine",
                  "Artisanat",
                  "Réparation",
                  "Culture scientifique",
                  "Arts et musique",
                  "Lecture et accompagnement",
                ],
              },

              {
                category: "Formation professionnelle",

                title: "Préparer aux métiers du territoire",

                paragraphs: [
                  "Le pôle de transmission peut accueillir des formations courtes, des apprentissages, des certifications ou des parcours construits avec des établissements professionnels existants.",

                  "Les formations sont liées à des activités réelles et à des besoins identifiés.",
                ],

                items: [
                  "Agriculture et alimentation",
                  "Bâtiment et rénovation",
                  "Maintenance et réparation",
                  "Numérique",
                  "Services aux personnes",
                  "Artisanat",
                  "Logistique",
                  "Économie sociale et coopérative",
                ],
              },

              {
                category: "Reconversion et formation continue",

                title: "Apprendre à tout âge",

                paragraphs: [
                  "Le module peut accueillir des adultes souhaitant changer de métier, actualiser leurs compétences ou reprendre une activité.",

                  "Les parcours associent formation théorique, mise en situation et accompagnement individualisé.",
                ],

                items: [
                  "Bilans de compétences",
                  "Modules courts",
                  "Mises en situation professionnelle",
                  "Tutorat",
                  "Validation des acquis",
                  "Accompagnement à la création d’activité",
                ],
              },

              {
                category: "Recherche pédagogique",

                title: "Évaluer et améliorer les pratiques",

                paragraphs: [
                  "L’école peut expérimenter des modalités pédagogiques nouvelles en partenariat avec des enseignants, chercheurs, établissements de formation et collectivités.",

                  "Les expérimentations doivent être documentées et évaluées afin de distinguer ce qui fonctionne, pour quels publics et dans quelles conditions.",
                ],

                items: [
                  "Pédagogie multiniveaux",
                  "Travail coopératif",
                  "Évaluation par compétences",
                  "Pédagogie par projets",
                  "Lien école-territoire",
                  "Usage raisonné du numérique",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    5. ADAPTATION TERRITORIALE
    ======================================================
    */

      {
        id: "adaptation-territoriale",
        title: "Adaptation territoriale",

        blocks: [
          {
            type: "encadre",

            title: "Une organisation construite à partir des besoins locaux",

            content: [
              {
                subtitle: "Partir des établissements existants",

                paragraphs: [
                  "Un territoire possédant déjà une école, un collège, un lycée professionnel, un centre de formation ou un tiers-lieu n’a pas besoin de recréer l’ensemble du module.",

                  "Ces structures peuvent constituer les premières briques du pôle de transmission et être reliées à de nouveaux partenaires.",
                ],
              },

              {
                subtitle: "Compléter les fonctions manquantes",

                paragraphs: [
                  "Le diagnostic peut montrer que l’école existe, mais que les liens avec les entreprises, les associations, la formation professionnelle ou les habitants restent faibles.",

                  "Le module peut alors se concentrer sur les projets partagés, la découverte des métiers, les formations pour adultes ou la transmission intergénérationnelle.",
                ],
              },

              {
                subtitle: "Adapter l’échelle",

                paragraphs: [
                  "Dans une petite commune, le module peut reposer sur une école primaire multiniveaux et quelques espaces partagés.",

                  "Dans un bourg ou une ville, il peut relier plusieurs établissements et proposer un véritable campus territorial de formation.",
                ],
              },

              {
                subtitle: "Construire progressivement",

                paragraphs: [
                  "Le projet peut commencer par quelques ateliers ou projets pédagogiques, puis s’élargir selon les résultats, les partenariats et les besoins.",

                  "Cette progression permet de tester les coopérations avant d’investir dans de nouveaux bâtiments ou équipements.",
                ],
              },
            ],
          },

          {
            type: "examples",

            title: "Exemples de configurations",

            items: [
              {
                title: "Petite commune rurale",

                content:
                  "Maintien ou réouverture d’une école multiniveaux reliée aux associations, aux exploitations agricoles, aux artisans et aux habitants.",
              },

              {
                title: "Territoire disposant d’un lycée professionnel",

                content:
                  "Création de projets communs, de formations courtes, d’ateliers partagés et de parcours de reconversion avec les entreprises locales.",
              },

              {
                title: "Territoire disposant d’un tiers-lieu",

                content:
                  "Transformation du tiers-lieu en espace complémentaire pour la formation numérique, les ateliers, les rencontres et les projets intergénérationnels.",
              },

              {
                title: "Quartier urbain",

                content:
                  "Mise en réseau d’une école, d’un centre social, d’associations, d’entreprises et d’un fablab autour de projets éducatifs et professionnels.",
              },

              {
                title: "Village SCIC complet",

                content:
                  "Création d’un pôle éducatif intégré, relié directement à l’atelier technique, à l’exploitation agricole et aux autres fonctions du village.",
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    6. ORGANISATION
    ======================================================
    */

      {
        id: "organisation",
        title: "Organisation",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Le module peut être porté par un établissement scolaire, une collectivité, une association, une coopérative, un organisme de formation ou un partenariat entre plusieurs structures.",

              "L’organisation pédagogique reste sous la responsabilité de professionnels qualifiés. Les partenaires extérieurs interviennent dans un cadre défini, avec des objectifs précis et une coordination assurée par l’équipe éducative.",

              "La partie scolaire, la formation professionnelle et les activités ouvertes aux habitants peuvent partager certains locaux et équipements, tout en conservant des règles, des horaires et des responsabilités distinctes.",
            ],
          },

          {
            type: "list",

            title: "Principes d’organisation",

            items: [
              "Une équipe enseignante responsable des apprentissages scolaires.",
              "Des groupes adaptés aux âges, aux niveaux et aux besoins.",
              "Des temps communs pour les projets et la coopération.",
              "Un coordinateur pour les relations avec les partenaires territoriaux.",
              "Des professionnels référents pour les activités techniques ou spécialisées.",
              "Une séparation claire entre le temps scolaire et les formations pour adultes.",
              "Des règles précises concernant la sécurité, la responsabilité et l’encadrement.",
              "Une évaluation régulière des apprentissages et des projets.",
            ],
          },

          {
            type: "cards",

            title: "Espaces possibles",

            items: [
              {
                title: "Classes modulables",

                content:
                  "Salles pouvant accueillir du travail individuel, en petits groupes ou des projets communs.",
              },

              {
                title: "Bibliothèque et centre de ressources",

                content:
                  "Livres, documentation, outils numériques et espaces de recherche.",
              },

              {
                title: "Ateliers pédagogiques",

                content:
                  "Espaces adaptés aux sciences, aux arts, au numérique, à la fabrication et à la réparation.",
              },

              {
                title: "Cuisine et laboratoire",

                content:
                  "Apprentissage de l’alimentation, de la transformation et des sciences appliquées.",
              },

              {
                title: "Jardins et espaces extérieurs",

                content:
                  "Observation du vivant, activités physiques, projets agricoles et environnementaux.",
              },

              {
                title: "Salle de formation",

                content:
                  "Accueil des adultes, réunions, conférences et formations professionnelles.",
              },

              {
                title: "Espace petite enfance",

                content:
                  "Accueil adapté aux plus jeunes lorsque les besoins du territoire le justifient.",
              },

              {
                title: "Espace intergénérationnel",

                content:
                  "Rencontres, tutorat, transmission et activités ouvertes aux habitants.",
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    7. IMPACTS
    ======================================================
    */

      {
        id: "impacts",
        title: "Impacts attendus",

        blocks: [
          {
            type: "cards",

            items: [
              {
                title: "Apprentissages",

                content:
                  "Meilleure articulation entre connaissances fondamentales, compréhension et mise en pratique.",
              },

              {
                title: "Autonomie",

                content:
                  "Développement de la capacité à chercher, organiser, coopérer, décider et mener un projet.",
              },

              {
                title: "Orientation",

                content:
                  "Découverte plus progressive et concrète des métiers, des compétences et des parcours possibles.",
              },

              {
                title: "Transmission",

                content:
                  "Préservation des savoir-faire et valorisation des connaissances présentes sur le territoire.",
              },

              {
                title: "Formation",

                content:
                  "Accès facilité à la reconversion, à l’apprentissage et à la formation continue.",
              },

              {
                title: "Emploi",

                content:
                  "Meilleure adéquation entre certaines formations proposées et les besoins économiques locaux.",
              },

              {
                title: "Lien social",

                content:
                  "Renforcement des relations entre les générations, les familles, les écoles, les associations et les professionnels.",
              },

              {
                title: "Attractivité territoriale",

                content:
                  "Maintien des familles, amélioration des services éducatifs et création d’un lieu de vie collectif.",
              },

              {
                title: "Citoyenneté",

                content:
                  "Apprentissage de la coopération, du débat, de la responsabilité et de l’intérêt général.",
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    8. CHIFFRES CLÉS
    ======================================================
    */

      {
        id: "chiffres-cles",
        title: "Chiffres clés",

        blocks: [
          {
            type: "stats",

            items: [
              {
                value: "3 à 5",
                label: "grands niveaux d’apprentissage possibles",
              },

              {
                value: "1 à plusieurs",
                label: "établissements ou structures associés",
              },

              {
                value: "Toute la vie",
                label: "formation initiale et continue",
              },

              {
                value: "Progressif",
                label: "déploiement selon les besoins",
              },

              {
                value: "Mutualisables",
                label: "locaux, ateliers et équipements",
              },
            ],

            note: "Les effectifs, les bâtiments, le nombre d’enseignants et de formateurs ainsi que les investissements dépendent de la population, des structures existantes et des fonctions retenues.",
          },

          {
            type: "notice",

            content:
              "La version membre détaillera les scénarios d’effectifs, les besoins en locaux, les postes éducatifs et techniques, les équipements, le fonctionnement annuel, les partenariats et les phases de déploiement.",
          },
        ],
      },

      /*
    ======================================================
    9. ARTICULATION
    ======================================================
    */

      {
        id: "articulation",
        title: "Articulation avec les autres modules",

        blocks: [
          {
            type: "links",

            items: [
              {
                label: "Atelier technique territorial",

                content:
                  "Découverte des métiers, projets de fabrication et de réparation, stages, apprentissage et formation professionnelle.",

                url: "/prototype1",
              },

              {
                label: "Exploitation agricole polyculture-élevage",

                content:
                  "Éducation à l’alimentation, sciences du vivant, projets agricoles, transformation, expérimentation et découverte des métiers.",

                url: "/prototype2",
              },

              {
                label: "Village SCIC territorial",

                content:
                  "Mutualisation des locaux, des services, de la gouvernance, des équipements et des relations avec les habitants et les partenaires.",

                url: "/prototype4",
              },
            ],
          },

          {
            type: "quote",

            content:
              "L’école peut fonctionner comme un établissement autonome, compléter les structures éducatives existantes ou devenir le pôle de formation et de transmission d’un écosystème territorial plus large.",
          },
        ],
      },

      /*
    ======================================================
    10. CONCLUSION
    ======================================================
    */

      {
        id: "conclusion",
        title: "Conclusion",

        blocks: [
          {
            type: "conclusion",

            content:
              "L’École multiniveaux et pôle de transmission proposée par CAP2032 n’est pas un modèle scolaire unique. Elle constitue un cadre adaptable permettant de relier les apprentissages fondamentaux, les projets concrets, la découverte des métiers, la formation professionnelle et la transmission intergénérationnelle. Elle peut être créée entièrement, compléter une école existante ou organiser la coopération entre plusieurs structures éducatives et territoriales.",
          },
        ],
      },
    ],

    memberAccess: {
      label: "Accéder à la version détaillée",

      url: "/membre/prototype/3",

      description:
        "La version membre présente l’organisation pédagogique, les groupes d’âge, les besoins humains, les locaux, les équipements, le calendrier, le fonctionnement annuel, les partenariats et les différents scénarios d’adaptation territoriale.",
    },

    navigation: {
      previous: {
        label: "Exploitation agricole polyculture-élevage",
        url: "/prototype/2",
      },

      list: {
        label: "Liste des prototypes",
        url: "/pilier3",
      },

      next: {
        label: "Village SCIC territorial",
        url: "/prototype/4",
      },
    },
  },

  /*
========================================================
MODULE INTÉGRATEUR 4
VILLAGE SCIC TERRITORIAL
========================================================
*/

  4: {
    slug: "village-scic-territorial",

    title: "Village SCIC territorial",

    image: "/action/module4.png",

    subtitle:
      "Relier les ressources existantes et construire progressivement un écosystème territorial coopératif.",

    intro: `
Le Village SCIC territorial constitue le module d’intégration de l’ensemble.

Il peut prendre la forme d’un projet global conçu dès l’origine pour réunir l’atelier technique territorial, l’exploitation agricole polyculture-élevage, l’école multiniveaux et les fonctions communes nécessaires à leur fonctionnement.

Il peut également relier des structures déjà présentes : ressourcerie, exploitation agricole, établissement de formation, tiers-lieu, association, coopérative, entreprise locale, service technique ou équipement public.

Enfin, il peut combiner ces deux logiques : partir des ressources existantes, identifier les fonctions manquantes, puis créer progressivement les modules nécessaires pour compléter l’écosystème territorial.

Le Village SCIC n’est donc pas un modèle figé à reproduire à l’identique. Il constitue un cadre d’assemblage adaptable, permettant à chaque territoire de construire une organisation cohérente à partir de ses besoins, de ses compétences, de ses équipements et de son histoire.
  `,

    structure: [
      "Constat",
      "Objectif",
      "Principe",
      "Les trois scénarios de déploiement",
      "Organisation",
      "Gouvernance",
      "Impacts",
      "Chiffres clés",
      "Articulation",
      "Conclusion",
    ],

    sections: [
      /*
    ======================================================
    1. CONSTAT
    ======================================================
    */

      {
        id: "constat",
        title: "Constat",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "De nombreux territoires disposent déjà d’entreprises, d’associations, d’exploitations agricoles, d’établissements scolaires, de services publics, de tiers-lieux ou de structures de l’économie sociale et solidaire.",

              "Pourtant, ces acteurs fonctionnent souvent séparément, avec leurs propres contraintes, leurs propres équipements et leurs propres réseaux. Les complémentarités existent, mais elles sont rarement organisées à l’échelle du territoire.",

              "Dans le même temps, certains besoins restent insuffisamment couverts : emploi local, transformation alimentaire, réparation, formation, logement, mobilité, services de proximité ou accompagnement des publics fragiles.",

              "Le problème n’est donc pas toujours l’absence de ressources. Il réside souvent dans leur dispersion, leur cloisonnement et l’absence d’une structure capable de les relier dans une trajectoire commune.",
            ],
          },

          {
            type: "list",

            items: [
              "Fragmentation entre les acteurs économiques, sociaux, éducatifs et institutionnels.",
              "Faible mutualisation des équipements, des compétences et des fonctions administratives.",
              "Difficulté à transformer les initiatives locales en stratégie territoriale cohérente.",
              "Dépendance à des fournisseurs, prestataires et chaînes logistiques éloignés.",
              "Perte progressive de certaines activités productives et de services de proximité.",
              "Difficulté à créer des parcours reliant formation, activité et emploi durable.",
              "Multiplication de projets isolés qui peinent à atteindre une taille économique suffisante.",
              "Accès complexe au financement pour les projets collectifs ou hybrides.",
              "Rigidité de certains dispositifs publics et marchés insuffisamment adaptés aux petites structures locales.",
              "Sous-utilisation de bâtiments, de terrains, d’équipements et de compétences déjà présents.",
              "Manque de coordination entre les politiques agricoles, économiques, sociales, éducatives et écologiques.",
            ],
          },

          {
            type: "quote",

            content:
              "Un territoire peut disposer de nombreuses ressources sans former pour autant un système cohérent.",
          },
        ],
      },

      /*
    ======================================================
    2. OBJECTIF
    ======================================================
    */

      {
        id: "objectif",
        title: "Objectif",

        blocks: [
          {
            type: "encadre",

            title: "Objectif du prototype",

            content: [
              {
                subtitle: "Ce que le Village SCIC fait réellement",

                paragraphs: [
                  "Le Village SCIC organise les complémentarités entre les ressources, les activités et les acteurs d’un territoire.",

                  "Il permet de mutualiser certaines infrastructures, de créer les fonctions manquantes et d’établir des relations économiques durables entre les modules opérationnels.",

                  "Il relie la production, la formation, l’emploi, les services, l’habitat et la gouvernance dans une même trajectoire territoriale.",
                ],

                items: [
                  "Cartographier les ressources déjà présentes.",
                  "Identifier les fonctions manquantes.",
                  "Relier les structures qui peuvent coopérer.",
                  "Mutualiser les équipements et les fonctions communes.",
                  "Créer progressivement les nouvelles activités nécessaires.",
                  "Organiser des débouchés locaux et des échanges entre modules.",
                  "Associer salariés, habitants, collectivités et partenaires à la gouvernance.",
                ],
              },

              {
                subtitle: "Ce que le Village SCIC n’est pas",

                paragraphs: [
                  "Ce n’est pas un lotissement écologique regroupant quelques services partagés.",

                  "Ce n’est pas une communauté fermée cherchant à fonctionner en dehors du système économique, juridique ou institutionnel existant.",

                  "Ce n’est pas non plus une structure unique destinée à absorber toutes les entreprises, associations ou initiatives locales.",
                ],

                items: [
                  "Il ne remplace pas les acteurs existants.",
                  "Il ne centralise pas toutes les décisions.",
                  "Il n’impose pas une organisation identique à tous les territoires.",
                  "Il ne cherche pas l’autarcie.",
                  "Il ne crée de nouvelles activités que lorsqu’un besoin réel n’est pas couvert.",
                  "Il ne confond pas coopération et disparition de l’autonomie des partenaires.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    3. PRINCIPE
    ======================================================
    */

      {
        id: "principe",
        title: "Principe général",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Le Village SCIC repose sur une logique d’assemblage territorial. Les modules techniques, agricoles et éducatifs peuvent être créés ensemble, mais ils peuvent aussi fonctionner séparément ou être constitués à partir de structures existantes.",

              "Le territoire commence par établir une cartographie de ses ressources : activités économiques, bâtiments, foncier, compétences, établissements de formation, associations, services publics, besoins sociaux et débouchés.",

              "Cette cartographie permet de distinguer les fonctions déjà couvertes, celles qui pourraient être mieux reliées et celles qui doivent être créées.",

              "Le Village SCIC organise ensuite des coopérations concrètes : contrats, achats communs, équipements partagés, logistique, formation, services administratifs, approvisionnement, commercialisation ou projets d’investissement.",

              "L’objectif n’est pas de rendre le territoire indépendant de tout échange extérieur, mais de renforcer sa capacité à répondre localement à une partie de ses besoins essentiels et à mieux résister aux perturbations.",
            ],
          },

          {
            type: "resume",

            title: "Les principes du module intégrateur",

            items: [
              "Partir du réel et des ressources existantes.",
              "Relier avant de recréer.",
              "Compléter uniquement les fonctions manquantes.",
              "Mutualiser sans uniformiser.",
              "Maintenir l’autonomie des partenaires.",
              "Construire progressivement.",
              "Organiser des interdépendances productives.",
              "Développer la robustesse plutôt que rechercher l’autarcie.",
            ],
          },
        ],
      },

      /*
    ======================================================
    4. LES TROIS SCÉNARIOS DE DÉPLOIEMENT
    ======================================================
    */

      {
        id: "scenarios-deploiement",
        title: "Les trois scénarios de déploiement",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Le Village SCIC peut prendre des formes très différentes selon les ressources et le niveau de coopération déjà présents.",

              "Trois scénarios principaux permettent de couvrir la majorité des situations territoriales.",
            ],
          },

          {
            type: "activities",

            items: [
              {
                category: "Scénario 1",

                title: "Créer un projet global",

                paragraphs: [
                  "Le territoire dispose d’un site, d’un foncier ou d’un bâtiment permettant de concevoir dès l’origine un ensemble cohérent.",

                  "Les trois modules opérationnels, les fonctions communes et la gouvernance sont alors développés dans une trajectoire planifiée.",
                ],

                items: [
                  "Atelier technique territorial",
                  "Exploitation agricole polyculture-élevage",
                  "École multiniveaux et pôle de transmission",
                  "Maison commune",
                  "Fonctions administratives",
                  "Logements éventuels",
                  "Production énergétique",
                  "Espaces collectifs",
                ],
              },

              {
                category: "Scénario 2",

                title: "Relier les structures existantes",

                paragraphs: [
                  "Le territoire dispose déjà de la plupart des fonctions nécessaires : exploitation agricole, ressourcerie, école, tiers-lieu, artisans, associations ou coopératives.",

                  "Le Village SCIC ne crée pas de nouveaux équipements importants. Il organise les relations, les mutualisations et les projets communs.",
                ],

                items: [
                  "Convention ou gouvernance commune",
                  "Achats groupés",
                  "Services administratifs partagés",
                  "Logistique mutualisée",
                  "Projets de formation communs",
                  "Réponse collective aux marchés",
                  "Investissements coordonnés",
                ],
              },

              {
                category: "Scénario 3",

                title: "Relier puis compléter",

                paragraphs: [
                  "Le territoire dispose de plusieurs briques, mais certaines fonctions restent absentes ou insuffisantes.",

                  "La démarche commence par relier les acteurs existants, puis crée progressivement les modules ou équipements manquants.",
                ],

                items: [
                  "Diagnostic territorial",
                  "Mise en réseau des acteurs",
                  "Identification des besoins non couverts",
                  "Création d’un atelier ou d’un service manquant",
                  "Déploiement par étapes",
                  "Évaluation avant chaque nouvel investissement",
                ],
              },
            ],
          },

          {
            type: "quote",

            content:
              "Le Village SCIC peut être un lieu, un réseau organisé ou une combinaison des deux.",
          },
        ],
      },

      /*
    ======================================================
    5. ORGANISATION
    ======================================================
    */

      {
        id: "organisation",
        title: "Organisation",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "L’organisation du Village SCIC dépend du scénario retenu. Dans un projet intégré, plusieurs fonctions peuvent être réunies sur un même site. Dans un territoire déjà équipé, elles peuvent rester réparties entre différents lieux et différentes structures.",

              "La structure commune prend en charge uniquement les fonctions qu’il est pertinent de mutualiser. Les activités productives conservent leurs responsables, leurs équipes, leurs comptes et leurs obligations propres.",

              "La coordination générale permet néanmoins d’organiser les échanges entre les modules, de planifier les investissements et de représenter l’ensemble auprès des partenaires publics et financiers.",
            ],
          },

          {
            type: "list",

            title: "Fonctions communes possibles",

            items: [
              "Accueil et information.",
              "Gestion administrative et comptable.",
              "Recherche de financements.",
              "Achats et appels d’offres.",
              "Communication et commercialisation.",
              "Logistique et véhicules partagés.",
              "Gestion des bâtiments et de l’énergie.",
              "Formation et ressources humaines.",
              "Systèmes numériques mutualisés.",
              "Relations avec les collectivités et les partenaires.",
              "Évaluation des impacts.",
            ],
          },

          {
            type: "cards",

            title: "Composantes possibles du Village SCIC",

            items: [
              {
                title: "Atelier technique",

                content:
                  "Réparation, reconditionnement, fabrication, maintenance et rénovation.",
              },

              {
                title: "Pôle agricole",

                content:
                  "Production, transformation, conservation et restauration collective.",
              },

              {
                title: "Pôle éducatif",

                content:
                  "École, formation professionnelle, reconversion et transmission.",
              },

              {
                title: "Maison commune",

                content:
                  "Accueil, gouvernance, réunions, services partagés et vie collective.",
              },

              {
                title: "Habitat",

                content:
                  "Logements permanents, temporaires, intergénérationnels ou liés à la formation selon les besoins.",
              },

              {
                title: "Énergie et infrastructures",

                content:
                  "Production locale, rénovation, récupération de chaleur, eau et gestion des déchets.",
              },

              {
                title: "Services territoriaux",

                content:
                  "Mobilité, alimentation, numérique, services aux personnes ou santé selon les partenariats présents.",
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    6. GOUVERNANCE
    ======================================================
    */

      {
        id: "gouvernance",
        title: "Gouvernance",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Le statut de Société coopérative d’intérêt collectif permet d’associer plusieurs catégories d’acteurs autour d’un projet commun d’utilité territoriale.",

              "La gouvernance doit garantir un équilibre entre les salariés, les structures opérationnelles, les collectivités, les partenaires, les habitants et les financeurs.",

              "Elle ne doit toutefois pas devenir une assemblée permanente incapable de décider. Les orientations stratégiques relèvent de la gouvernance collective, tandis que la gestion quotidienne reste confiée à des responsables clairement identifiés.",
            ],
          },

          {
            type: "cards",

            title: "Collèges possibles",

            items: [
              {
                title: "Salariés et professionnels",

                content:
                  "Personnes directement engagées dans les activités productives, éducatives ou administratives.",
              },

              {
                title: "Structures opérationnelles",

                content:
                  "Coopératives, associations, exploitations, entreprises ou établissements partenaires.",
              },

              {
                title: "Collectivités publiques",

                content:
                  "Communes, intercommunalités, région ou autres institutions participant au projet.",
              },

              {
                title: "Habitants et usagers",

                content:
                  "Citoyens, bénéficiaires, familles, bénévoles et membres du territoire.",
              },

              {
                title: "Partenaires et financeurs",

                content:
                  "Fondations, investisseurs citoyens, entreprises partenaires ou organismes de financement.",
              },
            ],
          },

          {
            type: "list",

            title: "Principes de gouvernance",

            items: [
              "Une représentation équilibrée des différentes catégories d’acteurs.",
              "Aucun collège ne dispose seul de la majorité absolue.",
              "Des responsabilités opérationnelles clairement définies.",
              "Des décisions stratégiques prises collectivement.",
              "Une transparence sur les comptes, les résultats et les impacts.",
              "Une évaluation régulière des coopérations.",
              "La possibilité d’intégrer progressivement de nouveaux partenaires.",
              "Des mécanismes de médiation en cas de conflit.",
            ],
          },

          {
            type: "quote",

            content:
              "La coopération ne supprime pas la responsabilité individuelle ; elle organise les responsabilités dans un cadre commun.",
          },
        ],
      },

      /*
    ======================================================
    7. IMPACTS
    ======================================================
    */

      {
        id: "impacts",
        title: "Impacts attendus",

        blocks: [
          {
            type: "cards",

            items: [
              {
                title: "Emploi",

                content:
                  "Création et consolidation d’activités locales productives, techniques, agricoles, éducatives et de services.",
              },

              {
                title: "Économie locale",

                content:
                  "Augmentation de la part de valeur produite, transformée et dépensée sur le territoire.",
              },

              {
                title: "Mutualisation",

                content:
                  "Réduction de certains coûts grâce au partage des équipements, des locaux et des fonctions communes.",
              },

              {
                title: "Formation",

                content:
                  "Création de parcours reliant apprentissage, reconversion, activité réelle et emploi.",
              },

              {
                title: "Cohésion sociale",

                content:
                  "Renforcement des relations entre habitants, professionnels, institutions et générations.",
              },

              {
                title: "Services de proximité",

                content:
                  "Maintien ou création de fonctions devenues fragiles ou absentes sur le territoire.",
              },

              {
                title: "Robustesse",

                content:
                  "Diversification des activités, des compétences, des fournisseurs et des débouchés.",
              },

              {
                title: "Transition écologique",

                content:
                  "Réemploi, circuits plus courts, sobriété matérielle, production locale et mutualisation.",
              },

              {
                title: "Démocratie territoriale",

                content:
                  "Participation des acteurs locaux aux choix d’investissement et aux orientations stratégiques.",
              },

              {
                title: "Attractivité",

                content:
                  "Amélioration des conditions d’accueil des familles, des professionnels, des porteurs de projets et des personnes en formation.",
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    8. CHIFFRES CLÉS
    ======================================================
    */

      {
        id: "chiffres-cles",
        title: "Chiffres clés",

        blocks: [
          {
            type: "stats",

            items: [
              {
                value: "3",
                label: "modules opérationnels principaux",
              },

              {
                value: "3",
                label: "scénarios de déploiement",
              },

              {
                value: "1 ou plusieurs",
                label: "sites associés",
              },

              {
                value: "Progressif",
                label: "déploiement par étapes",
              },

              {
                value: "Variable",
                label: "investissement selon l’existant",
              },

              {
                value: "Territorial",
                label: "périmètre de gouvernance",
              },
            ],

            note: "Le coût, les effectifs et les surfaces varient fortement selon que le Village SCIC est créé entièrement, repose sur un réseau existant ou complète progressivement des fonctions manquantes.",
          },

          {
            type: "encadre",

            title: "Ordres de grandeur du projet global",

            content: [
              {
                subtitle: "Hypothèse de référence",

                paragraphs: [
                  "Le chiffrage élaboré précédemment pour un Village SCIC complet constitue une hypothèse de référence et non un montant applicable à tous les territoires.",
                ],

                items: [
                  "Investissement initial indicatif : environ 3 millions d’euros.",
                  "Effectif cible : 30 à 50 salariés-associés.",
                  "Chiffre d’affaires en régime de croisière : environ 800 000 euros.",
                  "Point mort indicatif : quatrième ou cinquième année.",
                  "Montée en charge progressive sur plusieurs exercices.",
                ],
              },

              {
                subtitle: "Répartition financière initialement envisagée",

                items: [
                  "40 % : État et collectivités.",
                  "40 % : fonds européens, fondations et partenaires.",
                  "20 % : épargne citoyenne et apports coopératifs.",
                ],
              },
            ],
          },

          {
            type: "notice",

            content:
              "La version membre distinguera le scénario global, le scénario en réseau et le scénario hybride. Elle détaillera les investissements, les effectifs, les recettes et les charges propres à chaque module ainsi que les économies permises par la mutualisation.",
          },
        ],
      },

      /*
    ======================================================
    9. ARTICULATION
    ======================================================
    */

      {
        id: "articulation",
        title: "Articulation avec les autres modules",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Le Village SCIC constitue le module intégrateur. Il ne remplace pas les trois autres prototypes : il organise leurs complémentarités et leurs fonctions communes.",

              "Chaque module peut exister de manière autonome. Leur regroupement n’est pertinent que lorsqu’il améliore réellement leur fonctionnement, leur viabilité ou leur utilité territoriale.",
            ],
          },

          {
            type: "links",

            items: [
              {
                label: "Atelier technique territorial",

                content:
                  "Entretien des bâtiments et des équipements, réparation, fabrication, reconditionnement et soutien aux autres activités.",

                url: "/prototype1",
              },

              {
                label: "Exploitation agricole polyculture-élevage",

                content:
                  "Production alimentaire, transformation, restauration, entretien des espaces et coopération avec les agriculteurs du territoire.",

                url: "/prototype2",
              },

              {
                label: "École multiniveaux et pôle de transmission",

                content:
                  "Formation initiale, reconversion, transmission des compétences et accompagnement des parcours.",

                url: "/prototype3",
              },
            ],
          },

          {
            type: "encadre",

            title: "Une articulation ouverte",

            content: [
              {
                subtitle:
                  "Des briques supplémentaires peuvent rejoindre l’écosystème",

                paragraphs: [
                  "Selon les besoins locaux, le Village SCIC peut également coopérer avec une maison de santé, une structure d’habitat, un service de mobilité, une entreprise énergétique, une association culturelle, un établissement médico-social ou tout autre acteur utile au territoire.",

                  "Ces partenaires ne deviennent pas nécessairement membres d’une structure unique. Ils peuvent participer par des conventions, des contrats, des investissements communs ou des projets partagés.",
                ],
              },
            ],
          },

          {
            type: "quote",

            content:
              "Le Village SCIC ne vaut pas par le nombre de structures qu’il rassemble, mais par la qualité des relations qu’il organise entre elles.",
          },
        ],
      },

      /*
    ======================================================
    10. CONCLUSION
    ======================================================
    */

      {
        id: "conclusion",
        title: "Conclusion",

        blocks: [
          {
            type: "conclusion",

            content:
              "Le Village SCIC territorial proposé par CAP2032 n’est ni un modèle fermé ni un projet à reproduire mécaniquement. Il constitue une méthode d’assemblage permettant de partir des ressources existantes, de relier les acteurs, de mutualiser certaines fonctions et de créer progressivement les briques manquantes. Il peut prendre la forme d’un projet intégré, d’un réseau territorial ou d’une organisation hybride. Sa finalité est de transformer une juxtaposition d’initiatives en un écosystème productif, coopératif et robuste.",
          },
        ],
      },
    ],

    memberAccess: {
      label: "Accéder à la version détaillée",

      url: "/membre/prototype/4",

      description:
        "La version membre présente les scénarios de gouvernance, le diagnostic territorial, les flux entre les modules, les investissements, les effectifs, les financements, la montée en charge, les risques et les indicateurs de suivi.",
    },

    navigation: {
      previous: {
        label: "École multiniveaux et pôle de transmission",
        url: "/prototype/3",
      },

      list: {
        label: "Liste des prototypes",
        url: "/pilier3",
      },

      next: null,
    },
  },
};
