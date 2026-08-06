module.exports = {
  /*
========================================================
MODULE MEMBRE 1
ATELIER TECHNIQUE TERRITORIAL
========================================================
*/

  1: {
    slug: "atelier-technique-territorial",

    title: "Atelier technique territorial",

    image: "/action/module1.png",

    subtitle: "Modèle opérationnel, économique et territorial détaillé.",

    intro: `
L’Atelier technique territorial rassemble des activités de réparation, de reconditionnement, de fabrication, de maintenance et de réemploi adaptées aux besoins d’un bassin de vie.

Il peut être créé comme un pôle complet, se développer à partir d’une ressourcerie, d’un atelier existant, d’un fablab, d’un garage solidaire, d’une entreprise d’insertion, d’un lycée professionnel ou d’un réseau d’artisans.

Le modèle présenté distingue trois niveaux de déploiement selon la taille du territoire, les structures déjà présentes, les débouchés identifiés et les moyens mobilisables.

L’objectif n’est pas de reproduire partout un équipement identique, mais de construire un outil productif proportionné aux besoins réels du territoire.
  `,

    structure: [
      "Diagnostic détaillé",
      "Objectifs opérationnels",
      "Périmètre du module",
      "Activités détaillées",
      "Adaptation territoriale",
      "Organisation humaine",
      "Besoins immobiliers et matériels",
      "Gouvernance",
      "Modèle économique",
      "Chiffrage",
      "Déploiement",
      "Risques et conditions de réussite",
      "Articulation",
      "Indicateurs de suivi",
      "Conclusion",
    ],

    sections: [
      /*
    ======================================================
    1. DIAGNOSTIC DÉTAILLÉ
    ======================================================
    */

      {
        id: "diagnostic-detaille",
        title: "Diagnostic détaillé",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "De nombreux territoires disposent encore de compétences techniques, d’artisans, de services municipaux, d’associations de réemploi, d’entreprises d’insertion ou d’établissements professionnels. Ces ressources restent néanmoins souvent dispersées et peu coordonnées.",

              "Dans le même temps, les habitants, les collectivités, les agriculteurs, les associations et les petites entreprises rencontrent des difficultés croissantes pour faire réparer, entretenir ou adapter leurs équipements.",

              "Une partie importante des objets, machines, matériaux et mobiliers est remplacée avant d’avoir atteint sa fin de vie technique, faute de diagnostic, de pièces, de compétences accessibles ou de modèle économique adapté.",
            ],
          },

          {
            type: "list",

            title: "Difficultés observées",

            items: [
              "Disparition progressive de certains métiers de réparation.",
              "Dépendance à des prestataires éloignés.",
              "Délais importants pour la maintenance et les interventions.",
              "Coût élevé du remplacement des équipements.",
              "Destruction d’objets et de matériaux encore utilisables.",
              "Faible structuration des filières locales de réemploi.",
              "Manque de locaux adaptés aux activités techniques.",
              "Difficulté d’accès aux machines pour les petites structures.",
              "Faible transmission des savoir-faire techniques.",
              "Parcours d’insertion parfois dissociés de commandes économiques réelles.",
              "Marchés publics difficiles d’accès pour les petites structures.",
              "Lots trop importants ou exigences administratives disproportionnées.",
              "Faible prise en compte de la réparabilité et du coût global dans les achats.",
            ],
          },

          {
            type: "encadre",

            title: "Le verrou principal",

            content: [
              {
                subtitle: "Une demande réelle mais dispersée",

                paragraphs: [
                  "Les besoins de réparation, d’entretien et de reconditionnement existent, mais ils sont répartis entre de nombreux clients et plusieurs familles de métiers.",

                  "Pris isolément, chaque besoin paraît parfois insuffisant pour financer un atelier complet. Organisés à l’échelle du territoire, ils peuvent constituer un volume économique stable.",
                ],
              },

              {
                subtitle: "Une offre locale insuffisamment structurée",

                paragraphs: [
                  "Les compétences existent souvent, mais elles ne disposent pas toujours des locaux, des machines, de la logistique ou des fonctions commerciales nécessaires pour répondre collectivement à la demande.",
                ],
              },
            ],
          },

          {
            type: "quote",

            content:
              "La création de l’atelier ne repose pas seulement sur la collecte des déchets, mais sur l’organisation d’un marché local de la réparation, du réemploi et de la maintenance.",
          },
        ],
      },

      /*
    ======================================================
    2. OBJECTIFS OPÉRATIONNELS
    ======================================================
    */

      {
        id: "objectifs-operationnels",
        title: "Objectifs opérationnels",

        blocks: [
          {
            type: "cards",

            items: [
              {
                title: "Réparer",

                content:
                  "Prolonger la durée d’usage des équipements, du mobilier, des appareils et de l’outillage.",
              },

              {
                title: "Reconditionner",

                content:
                  "Diagnostiquer, remettre en état, tester et remettre en circulation des équipements fiables.",
              },

              {
                title: "Produire",

                content:
                  "Fabriquer localement du mobilier, des pièces simples, des aménagements et des équipements adaptés.",
              },

              {
                title: "Entretenir",

                content:
                  "Proposer des contrats de maintenance préventive et corrective aux structures locales.",
              },

              {
                title: "Former",

                content:
                  "Transmettre les compétences par des activités productives et des commandes réelles.",
              },

              {
                title: "Mutualiser",

                content:
                  "Partager certains locaux, équipements, véhicules et fonctions administratives.",
              },

              {
                title: "Réemployer",

                content:
                  "Valoriser les matières, composants et équipements avant leur élimination.",
              },

              {
                title: "Sécuriser",

                content:
                  "Réduire la dépendance du territoire à des fournisseurs ou réparateurs éloignés.",
              },
            ],
          },

          {
            type: "resume",

            title: "Résultats recherchés",

            items: [
              "Créer des emplois techniques locaux.",
              "Réduire les volumes de déchets.",
              "Diminuer le coût global de certains équipements.",
              "Conserver les compétences sur le territoire.",
              "Faciliter les reconversions professionnelles.",
              "Améliorer l’accès des petites structures à la maintenance.",
              "Développer des débouchés économiques durables.",
            ],
          },
        ],
      },

      /*
    ======================================================
    3. PÉRIMÈTRE DU MODULE
    ======================================================
    */

      {
        id: "perimetre-module",
        title: "Périmètre du module",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "L’Atelier technique territorial ne doit pas nécessairement regrouper toutes les activités possibles. Son périmètre est défini après analyse des besoins, des compétences et des structures déjà présentes.",

              "Certaines activités peuvent être internalisées dans la structure. D’autres peuvent être assurées par des artisans ou entreprises partenaires liés par des conventions, des commandes ou des contrats de coopération.",
            ],
          },

          {
            type: "list",

            title: "Familles d’activités possibles",

            items: [
              "Mobilier, menuiserie et travail du bois.",
              "Métallerie, soudure et petite fabrication.",
              "Mécanique, cycles et petit matériel agricole.",
              "Reconditionnement informatique.",
              "Maintenance numérique et assistance locale.",
              "Sensibilisation et prestations de cybersécurité.",
              "Électroménager et récupération de pièces.",
              "Réemploi des matériaux.",
              "Bâtiment, entretien et rénovation.",
              "Logistique, collecte et livraison.",
              "Formation professionnelle et reconversion.",
            ],
          },

          {
            type: "encadre",

            title: "Critères de sélection des activités",

            content: [
              {
                subtitle: "Besoin territorial",

                items: [
                  "Volume de demandes identifiable.",
                  "Absence ou insuffisance de l’offre existante.",
                  "Possibilité de contrats récurrents.",
                ],
              },

              {
                subtitle: "Viabilité technique",

                items: [
                  "Compétences disponibles ou accessibles.",
                  "Locaux adaptés.",
                  "Équipements proportionnés.",
                  "Respect des normes et de la sécurité.",
                ],
              },

              {
                subtitle: "Viabilité économique",

                items: [
                  "Prix de vente compatible avec le marché.",
                  "Volume suffisant pour couvrir les charges.",
                  "Débouchés sécurisables.",
                  "Complémentarité avec les autres activités.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    4. ACTIVITÉS DÉTAILLÉES
    ======================================================
    */

      {
        id: "activites-detaillees",
        title: "Activités détaillées",

        blocks: [
          {
            type: "activities",

            items: [
              {
                category: "Bois et mobilier",

                title: "Réparation, réemploi et fabrication",

                paragraphs: [
                  "L’atelier bois peut réparer, transformer ou fabriquer du mobilier simple à destination des collectivités, écoles, associations, entreprises et habitants.",

                  "Une partie des matières premières peut provenir du démontage, de chantiers, de dons ou de filières locales de réemploi.",
                ],

                items: [
                  "Réparation de mobilier.",
                  "Fabrication de tables, bancs et rangements.",
                  "Aménagement de locaux.",
                  "Réemploi de bois.",
                  "Mobilier scolaire ou collectif.",
                  "Petites séries sur commande.",
                ],
              },

              {
                category: "Métal et mécanique",

                title: "Maintenance et fabrication légère",

                paragraphs: [
                  "Le pôle métal et mécanique répond aux besoins de réparation d’outillage, de cycles, de petites machines et de certains équipements agricoles.",

                  "Il peut également fabriquer ou adapter des pièces simples lorsque les solutions industrielles sont indisponibles ou disproportionnées.",
                ],

                items: [
                  "Soudure et métallerie.",
                  "Réparation de vélos.",
                  "Petite mécanique.",
                  "Maintenance d’outillage.",
                  "Adaptation de matériel.",
                  "Fabrication de supports ou châssis.",
                ],
              },

              {
                category: "Numérique",

                title: "Reconditionnement et services locaux",

                paragraphs: [
                  "Le pôle numérique collecte, diagnostique, répare et reconditionne des ordinateurs, écrans, périphériques et petits équipements.",

                  "Il peut proposer des prestations de maintenance, d’installation, de sauvegarde et de sécurisation aux petites structures locales.",
                ],

                items: [
                  "Diagnostic matériel.",
                  "Remplacement de composants.",
                  "Installation de systèmes.",
                  "Effacement sécurisé des données.",
                  "Vente ou mise à disposition de matériel.",
                  "Maintenance de parcs.",
                  "Sensibilisation à la cybersécurité.",
                  "Services de sauvegarde locale.",
                ],
              },

              {
                category: "Électroménager",

                title: "Diagnostic et remise en circulation",

                paragraphs: [
                  "L’activité porte sur les appareils pour lesquels les pièces, les compétences et les conditions de sécurité rendent la réparation pertinente.",

                  "Les équipements non réparables peuvent fournir des composants réutilisables avant traitement par une filière agréée.",
                ],

                items: [
                  "Diagnostic.",
                  "Réparation.",
                  "Contrôle de sécurité.",
                  "Récupération de pièces.",
                  "Revente avec garantie adaptée.",
                  "Maintenance préventive.",
                ],
              },

              {
                category: "Bâtiment",

                title: "Entretien, rénovation et auto-construction",

                paragraphs: [
                  "Le pôle bâtiment peut initialement participer à l’aménagement des propres locaux du projet.",

                  "Les compétences, l’équipe et les équipements constitués peuvent ensuite être pérennisés pour intervenir sur la maintenance, les petits chantiers, la rénovation énergétique ou le réemploi de matériaux.",
                ],

                items: [
                  "Second œuvre.",
                  "Menuiseries.",
                  "Isolation.",
                  "Petite maçonnerie.",
                  "Maintenance des bâtiments.",
                  "Déconstruction sélective.",
                  "Réemploi de matériaux.",
                  "Auto-rénovation accompagnée.",
                ],
              },

              {
                category: "Logistique",

                title: "Collecte, tri, stockage et livraison",

                paragraphs: [
                  "La viabilité du module dépend fortement de l’organisation des flux entrants et sortants.",

                  "La collecte doit être ciblée afin d’éviter l’accumulation d’équipements sans débouché ou trop coûteux à traiter.",
                ],

                items: [
                  "Collecte sur rendez-vous.",
                  "Apports professionnels.",
                  "Tri initial.",
                  "Gestion des stocks.",
                  "Traçabilité.",
                  "Préparation des commandes.",
                  "Livraison.",
                ],
              },

              {
                category: "Formation",

                title: "Transmission par l’activité réelle",

                paragraphs: [
                  "Les parcours de formation et de reconversion sont intégrés aux ateliers, sous la responsabilité de professionnels qualifiés.",

                  "La production ne doit pas être artificielle : les apprenants participent à des commandes et réalisations réelles, avec des objectifs progressifs.",
                ],

                items: [
                  "Découverte des métiers.",
                  "Formation courte.",
                  "Apprentissage.",
                  "Reconversion.",
                  "Tutorat.",
                  "Validation des acquis.",
                  "Formation à la sécurité.",
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
            type: "paragraphs",

            content: [
              "Le dimensionnement ne doit pas reposer uniquement sur la population administrative. Il doit tenir compte du bassin de vie, de la densité économique, des flux de déchets, des équipements publics, des exploitations agricoles et des activités déjà présentes.",

              "Un petit territoire industriel ou agricole peut avoir davantage de besoins techniques qu’un territoire plus peuplé mais essentiellement résidentiel.",
            ],
          },

          {
            type: "scenarioCards",

            title: "Trois niveaux de déploiement",

            scenarios: [
              {
                id: "petit-territoire",
                title: "Petit territoire",
                population: "1 000 à 5 000 habitants",

                description:
                  "Un atelier concentré sur deux ou trois activités prioritaires, avec réutilisation maximale des locaux et équipements existants.",

                activities: [
                  "Réparation et reconditionnement numérique.",
                  "Cycles, petit outillage ou électroménager.",
                  "Mobilier et petits travaux.",
                  "Collecte limitée et ciblée.",
                ],
              },

              {
                id: "territoire-intermediaire",
                title: "Territoire intermédiaire",
                population: "5 000 à 20 000 habitants",

                description:
                  "Plusieurs ateliers complémentaires regroupés sur un site principal, avec des fonctions administratives, logistiques et commerciales mutualisées.",

                activities: [
                  "Bois et mobilier.",
                  "Métal et mécanique.",
                  "Numérique.",
                  "Électroménager.",
                  "Bâtiment léger.",
                  "Formation.",
                ],
              },

              {
                id: "territoire-etendu",
                title: "Territoire étendu",
                population: "20 000 à 50 000 habitants et plus",

                description:
                  "Pôle technique complet, éventuellement réparti sur plusieurs sites spécialisés et soutenu par une logistique territoriale structurée.",

                activities: [
                  "Ateliers spécialisés.",
                  "Plateforme logistique.",
                  "Contrats importants avec collectivités et entreprises.",
                  "Centre de formation.",
                  "Pôle bâtiment.",
                  "Services numériques mutualisés.",
                ],
              },
            ],
          },

          {
            type: "notice",

            content:
              "Les seuils démographiques constituent des repères de travail. Le diagnostic économique et technique reste prioritaire pour choisir le scénario.",
          },
        ],
      },

      /*
    ======================================================
    6. ORGANISATION HUMAINE
    ======================================================
    */

      {
        id: "organisation-humaine",
        title: "Organisation humaine",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Chaque atelier doit être placé sous la responsabilité d’une personne disposant d’une maîtrise technique réelle du métier concerné.",

              "La formation, l’insertion ou la reconversion ne peuvent compenser l’absence de professionnels expérimentés capables de garantir la qualité, la sécurité et la productivité.",
            ],
          },

          {
            type: "jobs",

            title: "Équipe possible selon le scénario",

            scenarios: [
              {
                id: "petit-territoire",
                title: "Petit territoire",

                items: [
                  {
                    role: "Responsable technique polyvalent",
                    number: "1",
                    status: "Temps plein",
                    mission:
                      "Pilotage des activités, qualité, sécurité et relations clients.",
                  },
                  {
                    role: "Techniciens ou réparateurs",
                    number: "2 à 4",
                    status: "Temps plein ou temps partiel",
                    mission:
                      "Production, réparation, diagnostic et maintenance.",
                  },
                  {
                    role: "Logistique et accueil",
                    number: "1",
                    status: "Temps partiel à temps plein",
                    mission:
                      "Collecte, stocks, accueil, commandes et livraisons.",
                  },
                  {
                    role: "Gestion administrative",
                    number: "0,5 à 1 ETP",
                    status: "Mutualisé",
                    mission: "Comptabilité, facturation, contrats et suivi.",
                  },
                ],
              },

              {
                id: "territoire-intermediaire",
                title: "Territoire intermédiaire",

                items: [
                  {
                    role: "Direction ou coordination",
                    number: "1",
                    status: "Temps plein",
                    mission:
                      "Pilotage économique, partenariats et organisation générale.",
                  },
                  {
                    role: "Responsables d’ateliers",
                    number: "3 à 5",
                    status: "Temps plein",
                    mission:
                      "Pilotage technique de chaque famille d’activités.",
                  },
                  {
                    role: "Techniciens et opérateurs",
                    number: "6 à 14",
                    status: "Temps plein",
                    mission:
                      "Production, réparation, fabrication et reconditionnement.",
                  },
                  {
                    role: "Logistique",
                    number: "2 à 3",
                    status: "Temps plein",
                    mission: "Collecte, stocks, préparation et livraison.",
                  },
                  {
                    role: "Administration et commercial",
                    number: "1 à 2",
                    status: "Temps plein",
                    mission:
                      "Facturation, appels d’offres, suivi des clients et ventes.",
                  },
                  {
                    role: "Formation et accompagnement",
                    number: "1 à 2",
                    status: "Selon partenariats",
                    mission:
                      "Tutorat, parcours de formation et relations avec les organismes.",
                  },
                ],
              },

              {
                id: "territoire-etendu",
                title: "Territoire étendu",

                items: [
                  {
                    role: "Direction générale",
                    number: "1",
                    status: "Temps plein",
                    mission:
                      "Stratégie, finances, partenariats et coordination multisite.",
                  },
                  {
                    role: "Responsables de pôles",
                    number: "5 à 7",
                    status: "Temps plein",
                    mission:
                      "Pilotage technique, économique et humain de chaque activité.",
                  },
                  {
                    role: "Techniciens et opérateurs",
                    number: "15 à 30",
                    status: "Temps plein",
                    mission: "Production et prestations.",
                  },
                  {
                    role: "Logistique et stocks",
                    number: "4 à 7",
                    status: "Temps plein",
                    mission:
                      "Collecte, stockage, traçabilité, préparation et transport.",
                  },
                  {
                    role: "Administration, commerce et marchés publics",
                    number: "3 à 5",
                    status: "Temps plein",
                    mission:
                      "Contrats, facturation, appels d’offres, communication et ventes.",
                  },
                  {
                    role: "Formation et ingénierie pédagogique",
                    number: "2 à 4",
                    status: "Temps plein ou mutualisé",
                    mission:
                      "Organisation des parcours, partenariats et évaluation.",
                  },
                ],
              },
            ],
          },

          {
            type: "encadre",

            title: "Statut des personnes accueillies",

            content: [
              {
                subtitle: "Salariés et salariés-associés",

                paragraphs: [
                  "Ils assurent l’activité productive permanente et peuvent participer à la gouvernance de la structure.",
                ],
              },

              {
                subtitle: "Apprentis et stagiaires",

                paragraphs: [
                  "Ils sont intégrés à des parcours définis et encadrés, sans se substituer aux emplois permanents.",
                ],
              },

              {
                subtitle: "Personnes en reconversion ou insertion",

                paragraphs: [
                  "Elles participent à des activités réelles, avec des objectifs de progression et des débouchés identifiés.",
                ],
              },

              {
                subtitle: "Artisans partenaires",

                paragraphs: [
                  "Ils peuvent intervenir ponctuellement, utiliser certains équipements ou assurer des prestations spécialisées.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    7. BESOINS IMMOBILIERS ET MATÉRIELS
    ======================================================
    */

      {
        id: "besoins-immobiliers-materiels",
        title: "Besoins immobiliers et matériels",

        blocks: [
          {
            type: "scenarioNeeds",

            title: "Besoins selon la taille du territoire",

            scenarios: [
              {
                id: "petit-territoire",
                title: "Petit territoire",

                context:
                  "Atelier de proximité limité à quelques activités, implanté de préférence dans un bâtiment existant.",

                realEstate: [
                  {
                    item: "Atelier principal",
                    need: "300 à 500 m²",
                  },
                  {
                    item: "Stockage et tri",
                    need: "100 à 200 m²",
                  },
                  {
                    item: "Accueil, bureaux et vestiaires",
                    need: "40 à 80 m²",
                  },
                  {
                    item: "Zone extérieure",
                    need: "200 à 500 m²",
                  },
                ],

                equipment: [
                  {
                    item: "Outillage général",
                    need: "Établis, outils portatifs, appareils de mesure et équipements de sécurité.",
                  },
                  {
                    item: "Pôle numérique",
                    need: "Postes de diagnostic, stockage sécurisé, bancs de test et effacement des données.",
                  },
                  {
                    item: "Pôle mécanique ou cycles",
                    need: "Pont ou supports, compresseur, outillage et rangement.",
                  },
                  {
                    item: "Véhicule",
                    need: "1 utilitaire.",
                  },
                  {
                    item: "Manutention",
                    need: "Chariots, transpalettes et rayonnages.",
                  },
                ],
              },

              {
                id: "territoire-intermediaire",
                title: "Territoire intermédiaire",

                context:
                  "Site principal regroupant plusieurs ateliers spécialisés et des fonctions logistiques mutualisées.",

                realEstate: [
                  {
                    item: "Ateliers techniques",
                    need: "700 à 1 200 m²",
                  },
                  {
                    item: "Stockage, tri et pièces",
                    need: "250 à 450 m²",
                  },
                  {
                    item: "Accueil, bureaux et formation",
                    need: "120 à 220 m²",
                  },
                  {
                    item: "Zone logistique extérieure",
                    need: "500 à 1 000 m²",
                  },
                ],

                equipment: [
                  {
                    item: "Atelier bois",
                    need: "Machines fixes, aspiration, établis, stockage bois et outillage.",
                  },
                  {
                    item: "Atelier métal",
                    need: "Postes à souder, découpe, perçage, ventilation et équipements de protection.",
                  },
                  {
                    item: "Atelier numérique",
                    need: "Bancs de diagnostic, stock de pièces, réseau sécurisé et équipements de test.",
                  },
                  {
                    item: "Atelier électroménager",
                    need: "Bancs de test, appareils de mesure, levage et zone de pièces.",
                  },
                  {
                    item: "Véhicules",
                    need: "2 à 3 utilitaires.",
                  },
                  {
                    item: "Manutention et stockage",
                    need: "Gerbeur, transpalettes, rayonnages et zones identifiées.",
                  },
                ],
              },

              {
                id: "territoire-etendu",
                title: "Territoire étendu",

                context:
                  "Pôle technique complet, éventuellement réparti entre un site central et plusieurs ateliers spécialisés.",

                realEstate: [
                  {
                    item: "Ateliers et production",
                    need: "1 500 à 2 500 m²",
                  },
                  {
                    item: "Plateforme logistique",
                    need: "500 à 900 m²",
                  },
                  {
                    item: "Formation et fonctions communes",
                    need: "250 à 450 m²",
                  },
                  {
                    item: "Zones extérieures et circulation",
                    need: "1 500 à 3 000 m²",
                  },
                ],

                equipment: [
                  {
                    item: "Parcs machines spécialisés",
                    need: "Équipement professionnel complet pour chaque pôle retenu.",
                  },
                  {
                    item: "Logistique",
                    need: "Quai, zones de préparation, rayonnages lourds et outils de traçabilité.",
                  },
                  {
                    item: "Flotte de véhicules",
                    need: "3 à 6 véhicules spécialisés ou utilitaires.",
                  },
                  {
                    item: "Numérique",
                    need: "Système de gestion des stocks, suivi des interventions, sauvegarde et cybersécurité.",
                  },
                  {
                    item: "Formation",
                    need: "Salles, équipements pédagogiques et postes d’apprentissage.",
                  },
                ],
              },
            ],

            note: "La réutilisation d’un bâtiment existant peut réduire fortement l’investissement, mais son coût de mise aux normes doit être étudié avant toute décision.",
          },
        ],
      },

      /*
    ======================================================
    8. GOUVERNANCE
    ======================================================
    */

      {
        id: "gouvernance",
        title: "Gouvernance",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Le module peut être porté par une SCIC, une SCOP, une association employeuse, une entreprise d’insertion ou une structure existante élargissant son activité.",

              "Le statut SCIC devient particulièrement pertinent lorsque des salariés, des collectivités, des associations, des entreprises et des habitants participent ensemble au financement ou à la gouvernance.",
            ],
          },

          {
            type: "cards",

            title: "Catégories possibles de sociétaires",

            items: [
              {
                title: "Salariés et techniciens",
                content:
                  "Personnes directement engagées dans les activités productives.",
              },
              {
                title: "Collectivités",
                content:
                  "Communes, intercommunalité ou autres acteurs publics.",
              },
              {
                title: "Entreprises et artisans",
                content:
                  "Partenaires techniques, clients, fournisseurs ou utilisateurs des équipements.",
              },
              {
                title: "Associations et organismes de formation",
                content:
                  "Acteurs du réemploi, de l’insertion, de l’éducation ou de la formation.",
              },
              {
                title: "Habitants et investisseurs citoyens",
                content:
                  "Personnes souhaitant participer au capital ou à la vie coopérative.",
              },
            ],
          },

          {
            type: "list",

            title: "Principes de gouvernance",

            items: [
              "Les responsabilités opérationnelles restent clairement identifiées.",
              "La gouvernance collective fixe les orientations stratégiques.",
              "Aucun collège ne dispose seul d’un pouvoir absolu.",
              "Les résultats économiques et sociaux sont suivis séparément.",
              "Les activités déficitaires sont réévaluées régulièrement.",
              "Les décisions d’investissement sont liées à des débouchés identifiés.",
            ],
          },
        ],
      },

      /*
    ======================================================
    9. MODÈLE ÉCONOMIQUE
    ======================================================
    */

      {
        id: "modele-economique",
        title: "Modèle économique",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Le modèle économique repose sur plusieurs sources de revenus complémentaires. Aucun atelier ne doit dépendre exclusivement de la vente occasionnelle aux particuliers.",

              "Les contrats récurrents avec les collectivités, entreprises, exploitations agricoles, établissements scolaires et structures de l’économie sociale permettent de stabiliser une partie de l’activité.",
            ],
          },

          {
            type: "cards",

            title: "Sources de revenus",

            items: [
              {
                title: "Vente de produits reconditionnés",
                content:
                  "Informatique, mobilier, électroménager, cycles ou équipements réparés.",
              },
              {
                title: "Prestations de réparation",
                content:
                  "Facturation aux particuliers, entreprises, collectivités et associations.",
              },
              {
                title: "Contrats de maintenance",
                content:
                  "Entretien régulier des équipements, bâtiments ou parcs numériques.",
              },
              {
                title: "Fabrication sur commande",
                content:
                  "Mobilier, pièces, aménagements et équipements adaptés.",
              },
              {
                title: "Prestations bâtiment",
                content:
                  "Entretien, rénovation légère et réemploi de matériaux.",
              },
              {
                title: "Formation",
                content:
                  "Financement par les organismes compétents, entreprises ou collectivités.",
              },
              {
                title: "Services numériques",
                content:
                  "Maintenance, installation, sauvegarde et sensibilisation à la cybersécurité.",
              },
              {
                title: "Valorisation des matières",
                content:
                  "Vente de pièces, composants ou matériaux réemployables.",
              },
            ],
          },

          {
            type: "list",

            title: "Principales charges",

            items: [
              "Salaires et charges sociales.",
              "Loyer, remboursement ou amortissement des bâtiments.",
              "Énergie et fluides.",
              "Maintenance des machines.",
              "Achats de pièces et matières.",
              "Véhicules, carburant et assurance.",
              "Traitement des déchets non valorisables.",
              "Assurances et conformité réglementaire.",
              "Logiciels, gestion et communication.",
              "Fonds de roulement lié au stockage.",
            ],
          },

          {
            type: "encadre",

            title: "Équilibre entre mission sociale et activité productive",

            content: [
              {
                paragraphs: [
                  "Les aides à l’emploi, subventions d’investissement et financements de formation peuvent soutenir le lancement ou certaines missions d’intérêt collectif.",

                  "Ils ne doivent toutefois pas masquer durablement l’absence de débouchés économiques pour les activités productives.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    10. CHIFFRAGE
    ======================================================
    */

      {
        id: "chiffrage",
        title: "Chiffrage",

        blocks: [
          {
            type: "scenarioBudget",

            title: "Chiffrage par scénario",

            scenarios: [
              {
                id: "petit-territoire",
                title: "Petit territoire",

                assumptions: [
                  "Réutilisation d’un bâtiment existant.",
                  "Deux à trois activités prioritaires.",
                  "Équipe réduite et polyvalente.",
                  "Collecte limitée et ciblée.",
                  "Montée en charge progressive.",
                ],

                investment: [
                  {
                    item: "Travaux et mise aux normes",
                    low: "150 000 €",
                    high: "300 000 €",
                  },
                  {
                    item: "Machines et outillage",
                    low: "120 000 €",
                    high: "250 000 €",
                  },
                  {
                    item: "Véhicule et logistique",
                    low: "40 000 €",
                    high: "80 000 €",
                  },
                  {
                    item: "Informatique et gestion",
                    low: "20 000 €",
                    high: "40 000 €",
                  },
                  {
                    item: "Stock initial et pièces",
                    low: "30 000 €",
                    high: "60 000 €",
                  },
                  {
                    item: "Fonds de roulement",
                    low: "80 000 €",
                    high: "150 000 €",
                  },
                ],

                totalInvestment: {
                  low: "440 000 €",
                  high: "880 000 €",
                },

                annualOperatingCosts: {
                  low: "280 000 €",
                  high: "520 000 €",
                },

                annualRevenueTarget: {
                  low: "300 000 €",
                  high: "600 000 €",
                },

                jobs: {
                  low: "5",
                  high: "10",
                },

                breakEven:
                  "Point mort envisageable entre la troisième et la cinquième année selon les débouchés sécurisés.",
              },

              {
                id: "territoire-intermediaire",
                title: "Territoire intermédiaire",

                assumptions: [
                  "Quatre à six activités complémentaires.",
                  "Fonctions logistiques et administratives mutualisées.",
                  "Contrats avec collectivités et entreprises.",
                  "Site principal de taille intermédiaire.",
                  "Équipe spécialisée par atelier.",
                ],

                investment: [
                  {
                    item: "Travaux immobiliers",
                    low: "400 000 €",
                    high: "800 000 €",
                  },
                  {
                    item: "Machines et outillage",
                    low: "350 000 €",
                    high: "700 000 €",
                  },
                  {
                    item: "Véhicules et logistique",
                    low: "100 000 €",
                    high: "200 000 €",
                  },
                  {
                    item: "Informatique et gestion",
                    low: "40 000 €",
                    high: "80 000 €",
                  },
                  {
                    item: "Stock initial",
                    low: "80 000 €",
                    high: "150 000 €",
                  },
                  {
                    item: "Fonds de roulement",
                    low: "180 000 €",
                    high: "300 000 €",
                  },
                ],

                totalInvestment: {
                  low: "1 150 000 €",
                  high: "2 230 000 €",
                },

                annualOperatingCosts: {
                  low: "750 000 €",
                  high: "1 450 000 €",
                },

                annualRevenueTarget: {
                  low: "850 000 €",
                  high: "1 650 000 €",
                },

                jobs: {
                  low: "12",
                  high: "25",
                },

                breakEven:
                  "Point mort indicatif entre la quatrième et la cinquième année.",
              },

              {
                id: "territoire-etendu",
                title: "Territoire étendu",

                assumptions: [
                  "Pôle technique complet.",
                  "Plusieurs ateliers ou sites spécialisés.",
                  "Logistique territoriale structurée.",
                  "Marchés publics et privés récurrents.",
                  "Centre de formation associé.",
                ],

                investment: [
                  {
                    item: "Immobilier et travaux",
                    low: "900 000 €",
                    high: "1 600 000 €",
                  },
                  {
                    item: "Machines et outillage",
                    low: "700 000 €",
                    high: "1 200 000 €",
                  },
                  {
                    item: "Véhicules et plateforme logistique",
                    low: "200 000 €",
                    high: "400 000 €",
                  },
                  {
                    item: "Informatique et systèmes de gestion",
                    low: "80 000 €",
                    high: "150 000 €",
                  },
                  {
                    item: "Stock et pièces",
                    low: "150 000 €",
                    high: "300 000 €",
                  },
                  {
                    item: "Fonds de roulement",
                    low: "300 000 €",
                    high: "500 000 €",
                  },
                ],

                totalInvestment: {
                  low: "2 330 000 €",
                  high: "4 150 000 €",
                },

                annualOperatingCosts: {
                  low: "1 650 000 €",
                  high: "3 000 000 €",
                },

                annualRevenueTarget: {
                  low: "1 850 000 €",
                  high: "3 500 000 €",
                },

                jobs: {
                  low: "25",
                  high: "50",
                },

                breakEven:
                  "Point mort indicatif entre la quatrième et la sixième année.",
              },
            ],

            note: "Ces montants sont des hypothèses de travail. Ils devront être recalculés selon le prix du foncier, l’état du bâtiment, les machines déjà disponibles, les activités retenues et les contrats obtenus.",
          },

          {
            type: "encadre",

            title: "Lecture prudente des hypothèses",

            content: [
              {
                subtitle: "Le scénario haut n’est pas un objectif",

                paragraphs: [
                  "Il correspond à un niveau d’équipement plus complet ou à des travaux immobiliers importants.",

                  "Le choix doit être déterminé par les débouchés et non par la volonté de construire immédiatement un pôle complet.",
                ],
              },

              {
                subtitle:
                  "La réutilisation de l’existant change fortement le coût",

                paragraphs: [
                  "Un bâtiment public inutilisé, un atelier déjà équipé ou une ressourcerie opérationnelle peuvent réduire sensiblement l’investissement nécessaire.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    11. DÉPLOIEMENT
    ======================================================
    */

      {
        id: "deploiement",
        title: "Déploiement",

        blocks: [
          {
            type: "timeline",

            title: "Calendrier indicatif",

            items: [
              {
                phase: "Phase 1",
                duration: "3 à 6 mois",
                title: "Diagnostic territorial",

                content:
                  "Cartographier les besoins, les acteurs, les équipements, les bâtiments et les débouchés.",
              },

              {
                phase: "Phase 2",
                duration: "3 à 6 mois",
                title: "Préfiguration",

                content:
                  "Choisir les activités prioritaires, le portage juridique et les premiers partenaires.",
              },

              {
                phase: "Phase 3",
                duration: "6 à 12 mois",
                title: "Sécurisation économique",

                content:
                  "Obtenir les contrats, commandes, financements et engagements nécessaires.",
              },

              {
                phase: "Phase 4",
                duration: "6 à 18 mois",
                title: "Travaux et équipements",

                content:
                  "Rénover les locaux, installer les machines, organiser les flux et recruter l’équipe.",
              },

              {
                phase: "Phase 5",
                duration: "12 à 24 mois",
                title: "Lancement",

                content:
                  "Démarrer les premières activités, tester l’organisation et corriger les écarts.",
              },

              {
                phase: "Phase 6",
                duration: "3 à 5 ans",
                title: "Montée en charge",

                content:
                  "Augmenter progressivement les volumes, les contrats et les activités rentables.",
              },
            ],
          },

          {
            type: "list",

            title: "Règles de déploiement",

            items: [
              "Ne pas investir sans débouchés identifiés.",
              "Commencer par les activités les plus demandées.",
              "Évaluer chaque atelier séparément.",
              "Limiter les stocks sans rotation.",
              "Adapter les recrutements à la montée en charge.",
              "Prévoir une trésorerie suffisante.",
              "Reporter une activité si les compétences ne sont pas disponibles.",
            ],
          },
        ],
      },

      /*
    ======================================================
    12. RISQUES ET CONDITIONS DE RÉUSSITE
    ======================================================
    */

      {
        id: "risques-conditions",
        title: "Risques et conditions de réussite",

        blocks: [
          {
            type: "risks",

            title: "Principaux risques",

            items: [
              {
                risk: "Débouchés insuffisants",
                level: "Élevé",
                response:
                  "Sécuriser des contrats et commandes avant l’investissement.",
              },

              {
                risk: "Surdimensionnement des locaux",
                level: "Élevé",
                response:
                  "Déployer progressivement et privilégier la réutilisation.",
              },

              {
                risk: "Accumulation de stocks invendables",
                level: "Élevé",
                response:
                  "Mettre en place une politique de collecte sélective et un suivi des rotations.",
              },

              {
                risk: "Manque de compétences techniques",
                level: "Élevé",
                response:
                  "Recruter des professionnels expérimentés et organiser la transmission.",
              },

              {
                risk: "Concurrence avec les artisans locaux",
                level: "Moyen",
                response:
                  "Construire le projet avec eux et cibler les besoins non couverts.",
              },

              {
                risk: "Dépendance aux subventions",
                level: "Élevé",
                response:
                  "Séparer les financements d’investissement des revenus d’exploitation.",
              },

              {
                risk: "Complexité excessive",
                level: "Moyen",
                response:
                  "Limiter le nombre d’activités initiales et clarifier les responsabilités.",
              },

              {
                risk: "Qualité insuffisante",
                level: "Élevé",
                response:
                  "Mettre en place des contrôles, procédures et garanties adaptées.",
              },

              {
                risk: "Rigidité des marchés publics",
                level: "Moyen",
                response:
                  "Travailler sur l’allotissement, les clauses de réemploi et les marchés expérimentaux.",
              },

              {
                risk: "Tensions de trésorerie",
                level: "Élevé",
                response:
                  "Prévoir un fonds de roulement suffisant et un suivi mensuel.",
              },
            ],
          },

          {
            type: "encadre",

            title: "Conditions essentielles de réussite",

            content: [
              {
                items: [
                  "Un diagnostic territorial préalable.",
                  "Une équipe technique expérimentée.",
                  "Des contrats récurrents.",
                  "Une gouvernance lisible.",
                  "Un démarrage progressif.",
                  "Une collecte sélective.",
                  "Une comptabilité par activité.",
                  "Une trésorerie suffisante.",
                  "Une coopération avec les artisans et entreprises locales.",
                  "Une évaluation annuelle des activités.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    13. ARTICULATION
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
                  "Maintenance du matériel, fabrication d’outils, rénovation des bâtiments et services numériques.",

                url: "/membre/prototype/2",
              },

              {
                label: "École multiniveaux et pôle de transmission",

                content:
                  "Accueil de projets, découverte des métiers, apprentissage, formation et reconversion.",

                url: "/membre/prototype/3",
              },

              {
                label: "Village SCIC territorial",

                content:
                  "Mutualisation de la gouvernance, des infrastructures, de l’énergie, de la logistique et des fonctions administratives.",

                url: "/membre/prototype/4",
              },
            ],
          },

          {
            type: "encadre",

            title: "Coopérations avec les structures extérieures",

            content: [
              {
                items: [
                  "Artisans et entreprises techniques.",
                  "Ressourceries et recycleries.",
                  "Lycées professionnels et centres de formation.",
                  "Entreprises d’insertion.",
                  "Services techniques des collectivités.",
                  "Exploitations agricoles.",
                  "Bailleurs sociaux.",
                  "Établissements scolaires et médico-sociaux.",
                  "Associations de mobilité ou garages solidaires.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    14. INDICATEURS DE SUIVI
    ======================================================
    */

      {
        id: "indicateurs-suivi",
        title: "Indicateurs de suivi",

        blocks: [
          {
            type: "indicators",

            title: "Indicateurs économiques",

            items: [
              {
                indicator: "Chiffre d’affaires total",
                target: "Progression conforme au plan de charge",
                frequency: "Mensuelle",
              },
              {
                indicator: "Chiffre d’affaires par activité",
                target: "Identifier les pôles viables ou déficitaires",
                frequency: "Mensuelle",
              },
              {
                indicator: "Marge brute",
                target: "Positive par activité mature",
                frequency: "Trimestrielle",
              },
              {
                indicator: "Trésorerie disponible",
                target: "Plusieurs mois de charges fixes",
                frequency: "Mensuelle",
              },
              {
                indicator: "Part de revenus contractuels",
                target: "Progression des revenus récurrents",
                frequency: "Annuelle",
              },
            ],
          },

          {
            type: "indicators",

            title: "Indicateurs opérationnels",

            items: [
              {
                indicator: "Nombre d’équipements collectés",
                target: "Compatible avec les capacités de traitement",
                frequency: "Mensuelle",
              },
              {
                indicator: "Taux de réparation ou réemploi",
                target: "Progression annuelle",
                frequency: "Trimestrielle",
              },
              {
                indicator: "Rotation des stocks",
                target: "Limiter les immobilisations",
                frequency: "Mensuelle",
              },
              {
                indicator: "Délais moyens d’intervention",
                target: "Respect des engagements clients",
                frequency: "Mensuelle",
              },
              {
                indicator: "Taux de retour sous garantie",
                target: "Niveau faible et maîtrisé",
                frequency: "Trimestrielle",
              },
            ],
          },

          {
            type: "indicators",

            title: "Indicateurs sociaux et territoriaux",

            items: [
              {
                indicator: "Emplois créés",
                target: "Conforme au scénario retenu",
                frequency: "Annuelle",
              },
              {
                indicator: "Personnes formées",
                target: "Progression selon les capacités d’encadrement",
                frequency: "Annuelle",
              },
              {
                indicator: "Sorties vers l’emploi",
                target: "Mesurer les parcours durables",
                frequency: "Semestrielle",
              },
              {
                indicator: "Nombre de partenaires locaux",
                target: "Diversification du réseau",
                frequency: "Annuelle",
              },
              {
                indicator: "Achats réalisés localement",
                target: "Augmentation de la part territoriale",
                frequency: "Annuelle",
              },
            ],
          },

          {
            type: "indicators",

            title: "Indicateurs environnementaux",

            items: [
              {
                indicator: "Tonnes réemployées",
                target: "Progression annuelle",
                frequency: "Trimestrielle",
              },
              {
                indicator: "Équipements remis en circulation",
                target: "Suivi par famille de produits",
                frequency: "Mensuelle",
              },
              {
                indicator: "Part de déchets ultimes",
                target: "Réduction progressive",
                frequency: "Annuelle",
              },
              {
                indicator: "Durée d’usage prolongée",
                target: "Estimation documentée",
                frequency: "Annuelle",
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    15. CONCLUSION
    ======================================================
    */

      {
        id: "conclusion",
        title: "Conclusion",

        blocks: [
          {
            type: "conclusion",

            content:
              "L’Atelier technique territorial peut constituer un outil économique structurant, à condition d’être dimensionné à partir des besoins réels, des compétences disponibles et des débouchés sécurisés. Sa robustesse repose moins sur la multiplication des activités que sur leur complémentarité, la qualité du travail réalisé, la maîtrise des stocks et la stabilité des contrats. Il peut fonctionner seul, compléter des structures existantes ou devenir le pôle technique d’un Village SCIC territorial.",
          },
        ],
      },
    ],

    downloads: [
      {
        label: "Télécharger le prototype détaillé en PDF",
        url: "/download/prototype/1",
        format: "PDF",
      },
    ],

    navigation: {
      previous: null,

      list: {
        label: "Liste des prototypes",
        url: "/espace-membre#prototypes",
      },

      next: {
        label: "Exploitation agricole polyculture-élevage",
        url: "/membres/prototype/2",
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
    subtitle: "Modèle productif, économique, humain et territorial détaillé.",
    intro:
      "L’exploitation agricole polyculture-élevage associe production végétale, élevage, transformation, formation et débouchés territoriaux afin de réduire la dépendance à un seul marché ou à une seule production.\n\nElle peut être créée comme une exploitation coopérative complète, accompagner la transmission d’une ferme existante, ou organiser progressivement plusieurs ateliers déjà présents sur un même territoire.\n\nLe modèle repose sur une diversification raisonnée, une intégration partielle de la transformation, des débouchés locaux contractualisés et une transmission organisée des compétences.\n\nL’objectif n’est pas de reproduire partout une exploitation identique, mais de construire un outil agricole adapté aux sols, au climat, aux ressources humaines, aux équipements et aux besoins alimentaires du territoire.",
    structure: [
      "Diagnostic détaillé",
      "Objectifs opérationnels",
      "Fiche technique",
      "Trois scénarios territoriaux",
      "Intégration verticale",
      "Structure productive",
      "Restauration collective et transformation",
      "Verrou de l’abattage de proximité",
      "Organisation humaine",
      "Besoins immobiliers et matériels",
      "Gouvernance",
      "Modèle économique et financement",
      "Calendrier de déploiement",
      "Risques et conditions de réussite",
      "Articulation territoriale",
      "Indicateurs et conclusion",
    ],
    sections: [
      {
        id: "diagnostic-detaille",
        title: "Diagnostic détaillé",
        blocks: [
          {
            type: "paragraphs",
            content: [
              "L’agriculture française conserve un haut niveau de compétence technique, mais de nombreuses exploitations restent fragilisées par la spécialisation, la volatilité des prix, la hausse des intrants, l’endettement et la disparition progressive des outils de transformation de proximité.",
              "La séparation entre production, transformation et distribution a déplacé une part importante de la valeur ajoutée hors des exploitations et parfois hors du territoire. Le producteur supporte le risque climatique, sanitaire et économique, alors que la marge se reconstitue souvent dans les étapes suivantes de la chaîne.",
              "La crise de transmission constitue un deuxième verrou. Des fermes viables disparaissent faute de repreneur, tandis que des candidats à l’installation ne disposent ni du capital, ni du foncier, ni d’un parcours progressif leur permettant d’acquérir les compétences et d’entrer dans la gouvernance.",
              "Le prototype répond à ces fragilités par une architecture qui combine diversification, mutualisation, transformation proportionnée, débouchés contractualisés et formation en situation réelle.",
            ],
          },
          {
            type: "list",
            title: "Fragilités structurelles à traiter",
            items: [
              "Dépendance à un nombre limité de productions et de marchés.",
              "Exposition aux prix mondiaux et aux coûts de l’énergie et des intrants.",
              "Faible captation locale de la valeur de transformation.",
              "Disparition des abattoirs, conserveries et outils logistiques de proximité.",
              "Difficulté d’accès au foncier et au capital pour les nouveaux entrants.",
              "Endettement élevé lors de l’installation ou de la reprise.",
              "Manque de solutions de transmission progressive.",
              "Faible articulation entre production locale et restauration collective.",
              "Pertes et invendus insuffisamment transformés.",
              "Équipements coûteux peu mutualisés entre producteurs.",
              "Saisonnalité de l’emploi et discontinuité des parcours de formation.",
              "Dépendance logistique à des opérateurs éloignés.",
            ],
          },
          {
            type: "encadre",
            title: "Le double verrou",
            content: [
              {
                subtitle: "Produire sans maîtriser la chaîne de valeur",
                paragraphs: [
                  "L’agriculteur supporte l’essentiel du risque productif, mais conserve une part limitée de la valeur finale lorsque la transformation et la distribution sont entièrement externalisées.",
                  "Le prototype relocalise seulement les fonctions qui améliorent réellement le revenu, la qualité, la conservation ou la sécurité des débouchés.",
                ],
              },
              {
                subtitle: "Transmettre sans reproduire l’endettement",
                paragraphs: [
                  "La reprise classique exige souvent un capital important avant même que le nouvel exploitant ait consolidé son expérience et ses marchés.",
                  "Une structure coopérative et un parcours d’apprentissage progressif permettent de dissocier l’accès au métier de l’achat immédiat de tout l’outil de production.",
                ],
              },
            ],
          },
          {
            type: "quote",
            content:
              "La robustesse agricole ne repose pas sur une production unique parfaitement optimisée, mais sur la capacité à répartir les risques, conserver la valeur et organiser la transmission.",
          },
        ],
      },
      {
        id: "objectifs-operationnels",
        title: "Objectifs opérationnels",
        blocks: [
          {
            type: "cards",
            title: "Six fonctions complémentaires",
            items: [
              {
                title: "Diversifier",
                content:
                  "Répartir les risques entre cultures, élevage, transformation et plusieurs débouchés.",
              },
              {
                title: "Sécuriser",
                content:
                  "Contractualiser une partie des ventes avec la restauration collective et les acteurs locaux.",
              },
              {
                title: "Transformer",
                content:
                  "Conserver localement une part plus importante de la valeur ajoutée et valoriser les invendus.",
              },
              {
                title: "Transmettre",
                content:
                  "Former progressivement de futurs exploitants, salariés et associés dans un cadre réel de production.",
              },
              {
                title: "Mutualiser",
                content:
                  "Partager les équipements, la logistique, le laboratoire et certaines compétences spécialisées.",
              },
              {
                title: "Adapter",
                content:
                  "Dimensionner les ateliers en fonction des sols, du climat, des compétences et des besoins du territoire.",
              },
            ],
          },
          {
            type: "resume",
            title: "Finalité du module",
            items: [
              "Créer une exploitation productive, formatrice et transmissible.",
              "Sécuriser un socle de débouchés avant d’augmenter les volumes.",
              "Réduire la dépendance à certains intrants, intermédiaires et marchés volatils.",
              "Conserver la valeur sur le territoire par une transformation et une logistique proportionnées.",
              "Articuler l’exploitation aux autres producteurs et aux trois autres modules de CAP2032.",
            ],
          },
        ],
      },
      {
        id: "fiche-technique",
        title: "Fiche technique",
        blocks: [
          {
            type: "stats",
            title: "Ordres de grandeur du scénario intermédiaire",
            items: [
              {
                value: "40–80 ha",
                label: "Surface indicative selon le territoire",
              },
              {
                value: "2,1 M€",
                label: "Investissement initial indicatif",
              },
              {
                value: "~450 k€",
                label: "Chiffre d’affaires visé en régime de croisière",
              },
              {
                value: "3–4 ans",
                label: "Horizon indicatif du point mort",
              },
            ],
            note: "Ces valeurs sont des hypothèses de travail à recalculer à partir du foncier, des bâtiments, des ateliers et des contrats réellement disponibles.",
          },
          {
            type: "matrix",
            title: "Caractéristiques principales",
            headers: [
              "Dimension",
              "Hypothèse principale",
              "Variante possible",
              "Point de vigilance",
            ],
            rows: [
              [
                "Statut juridique",
                "GAEC ou SCOP agricole",
                "Articulation avec une SCIC ou une foncière",
                "Préserver la gouvernance des exploitants",
              ],
              [
                "Productions",
                "Céréales, maraîchage, élevage, arboriculture",
                "Ateliers adaptés au climat et aux sols",
                "Éviter la diversification excessive",
              ],
              [
                "Organisation humaine",
                "Exploitants associés, salariés, apprenants",
                "Réseau de fermes partenaires",
                "Dimensionner l’équipe aux pics de travail",
              ],
              [
                "Débouchés",
                "Restauration collective et vente directe",
                "Commerces locaux et transformation mutualisée",
                "Contractualiser avant d’investir",
              ],
              [
                "Transformation",
                "Lavage, découpe, conditionnement, conserves simples",
                "Laboratoire mutualisé plus large",
                "Respecter les normes et volumes réels",
              ],
            ],
          },
          {
            type: "notice",
            content:
              "Le prototype doit commencer par l’inventaire des ressources existantes : exploitation à transmettre, foncier public ou privé, bâtiments, matériel, producteurs partenaires, cuisine centrale, laboratoire, transport et compétences disponibles.",
          },
        ],
      },
      {
        id: "scenarios-territoriaux",
        title: "Trois scénarios territoriaux",
        blocks: [
          {
            type: "scenarioCards",
            title: "Trois niveaux de déploiement",
            scenarios: [
              {
                population: "Petit bassin de vie",
                title: "Scénario 1 — Ferme pilote",
                description:
                  "Reprise ou création progressive autour de quelques ateliers prioritaires et de débouchés déjà identifiés.",
                activities: [
                  "15 à 30 hectares selon les productions",
                  "Maraîchage, petites cultures, volailles ou petits ruminants",
                  "Transformation légère ou recours à un laboratoire partenaire",
                  "2 à 4 emplois directs et 1 à 2 apprenants",
                ],
              },
              {
                population: "Territoire intermédiaire",
                title: "Scénario 2 — Exploitation intégrée",
                description:
                  "Exploitation coopérative diversifiée disposant d’un socle de transformation, de stockage et de contrats locaux.",
                activities: [
                  "40 à 80 hectares",
                  "Céréales, légumineuses, maraîchage, élevage et arboriculture",
                  "Laboratoire léger et logistique mutualisée",
                  "6 à 12 emplois directs et 3 à 5 apprenants",
                ],
              },
              {
                population: "Grand bassin ou réseau",
                title: "Scénario 3 — Réseau agricole territorial",
                description:
                  "Plusieurs exploitations autonomes partagent transformation, logistique, commercialisation, formation et gouvernance de filière.",
                activities: [
                  "Plusieurs fermes et ateliers spécialisés",
                  "Laboratoire territorial partagé",
                  "Planification commune avec la restauration collective",
                  "15 à 30 emplois directs ou consolidés et 6 à 12 apprenants",
                ],
              },
            ],
          },
          {
            type: "encadre",
            title: "Le scénario n’est pas une taille imposée",
            content: [
              {
                paragraphs: [
                  "Le choix dépend des structures existantes, du foncier, des compétences, des volumes de restauration collective et de la capacité de gouvernance.",
                  "Une ferme pilote bien reliée à un réseau local peut être plus robuste qu’une grande structure créée sans débouchés ni équipe stabilisée.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "integration-verticale",
        title: "Intégration verticale : conserver la valeur sur le territoire",
        blocks: [
          {
            type: "paragraphs",
            content: [
              "Le modèle agricole dominant sépare fréquemment la production, la transformation et la distribution. Cette organisation peut produire des économies d’échelle, mais elle éloigne une part importante de la valeur ajoutée du producteur et du territoire.",
              "Le prototype propose une intégration sélective : seules les fonctions qui améliorent réellement le revenu, la qualité, la conservation, la logistique ou la sécurité des débouchés sont organisées localement.",
              "La transformation n’a pas vocation à concurrencer tous les opérateurs existants. Elle complète les outils locaux, absorbe certains invendus et adapte les produits aux besoins de la restauration collective.",
            ],
          },
          {
            type: "flows",
            title: "Chaîne de valeur territoriale",
            items: [
              {
                from: "Production",
                to: "Transformation",
                exchanges: [
                  "Légumes",
                  "Céréales et légumineuses",
                  "Viandes et produits animaux",
                  "Fruits",
                  "Invendus valorisables",
                ],
              },
              {
                from: "Transformation",
                to: "Distribution",
                exchanges: [
                  "Produits lavés et découpés",
                  "Conserves",
                  "Soupes et sauces",
                  "Produits conditionnés",
                  "Préparations adaptées aux cuisines",
                ],
              },
              {
                from: "Distribution",
                to: "Territoire",
                exchanges: [
                  "Cantines",
                  "EHPAD",
                  "Établissements de santé",
                  "Marchés",
                  "Vente directe",
                  "Commerces locaux",
                ],
              },
              {
                from: "Territoire",
                to: "Exploitation",
                exchanges: [
                  "Contrats",
                  "Planification des besoins",
                  "Retours qualité",
                  "Capital coopératif",
                  "Compétences et équipements",
                ],
              },
            ],
          },
          {
            type: "quote",
            content:
              "L’objectif n’est pas de tout faire sur la ferme, mais de ne plus abandonner systématiquement les fonctions qui sécurisent le revenu et les débouchés.",
          },
        ],
      },
      {
        id: "structure-productive",
        title: "Structure productive et diversification raisonnée",
        blocks: [
          {
            type: "activities",
            items: [
              {
                category: "Production végétale",
                title: "Céréales et légumineuses",
                content:
                  "Productions intégrées aux rotations, à l’autonomie alimentaire de l’élevage et aux débouchés locaux. Les légumineuses contribuent à réduire les besoins en azote et améliorent la structure des rotations.",
              },
              {
                category: "Production végétale",
                title: "Maraîchage diversifié",
                content:
                  "Légumes de saison en plein champ et sous abri, principalement destinés à la restauration collective, à la vente directe et à la transformation.",
              },
              {
                category: "Élevage",
                title: "Volailles et ruminants",
                content:
                  "Ateliers dimensionnés selon les prairies, les compétences et les débouchés. L’élevage valorise les intercultures, certaines prairies et des coproduits.",
              },
              {
                category: "Arboriculture",
                title: "Vergers et forêt-jardin",
                content:
                  "Implantation progressive adaptée au foncier, aux besoins de diversification et aux références techniques disponibles.",
              },
              {
                category: "Transformation",
                title: "Atelier léger ou laboratoire partagé",
                content:
                  "Lavage, découpe, conditionnement, conserves, soupes et produits simples destinés à prolonger la conservation et valoriser les invendus.",
              },
              {
                category: "Logistique",
                title: "Stockage et livraison",
                content:
                  "Chambres froides, préparation de commandes et tournées mutualisées avec d’autres producteurs ou le Village SCIC.",
              },
            ],
          },
          {
            type: "encadre",
            title: "Une diversification organisée",
            content: [
              {
                paragraphs: [
                  "La diversification ne consiste pas à multiplier sans limite les productions. Chaque atelier doit répondre à une fonction agronomique, économique ou territoriale précise.",
                  "Le nombre d’activités doit rester compatible avec les compétences, le calendrier de travail, les équipements et la capacité réelle de commercialisation.",
                ],
              },
            ],
          },
          {
            type: "list",
            title: "Principes agronomiques",
            items: [
              "Rotations longues et présence de légumineuses.",
              "Autonomie fourragère recherchée lorsque l’élevage est présent.",
              "Valorisation des effluents et des coproduits.",
              "Gestion raisonnée de l’eau et stockage lorsque le contexte le permet.",
              "Suivi pluriannuel de la matière organique et de la structure des sols.",
              "Diversification variétale et adaptation au changement climatique.",
            ],
          },
        ],
      },
      {
        id: "restauration-transformation",
        title: "Restauration collective et laboratoire de transformation",
        blocks: [
          {
            type: "paragraphs",
            content: [
              "La restauration collective constitue un débouché structurant parce qu’elle permet de planifier des volumes, des calendriers et des qualités attendues. Elle ne doit toutefois pas devenir un acheteur unique dont l’exploitation dépendrait entièrement.",
              "Les besoins des cuisines doivent être intégrés dès la conception : formats, régularité des livraisons, lavage, découpe, conservation et contraintes de préparation.",
              "Le laboratoire peut également accueillir les invendus ou surplus d’autres producteurs locaux, sous réserve d’une gouvernance, d’une traçabilité et d’une planification claires.",
            ],
          },
          {
            type: "cards",
            title: "Fonctions du laboratoire",
            items: [
              {
                title: "Préparer",
                content:
                  "Laver, trier, découper et conditionner les produits pour réduire le temps de préparation des cuisines.",
              },
              {
                title: "Conserver",
                content:
                  "Transformer les surplus en soupes, sauces, conserves ou produits surgelés lorsque les volumes le justifient.",
              },
              {
                title: "Mutualiser",
                content:
                  "Accueillir certains volumes d’autres producteurs et partager des équipements coûteux.",
              },
              {
                title: "Planifier",
                content:
                  "Adapter les cultures et les productions aux calendriers de commande de la restauration collective.",
              },
            ],
          },
          {
            type: "encadre",
            title: "Sécuriser sans rigidifier",
            content: [
              {
                items: [
                  "Construire un socle de contrats pluriannuels.",
                  "Conserver des débouchés complémentaires en vente directe et commerces locaux.",
                  "Mutualiser les productions pour sécuriser les volumes et éviter qu’un seul producteur porte toute la contrainte.",
                  "Prévoir des clauses d’ajustement liées aux aléas climatiques et aux variations de coûts.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "abattage-proximite",
        title: "Le verrou critique de l’abattage de proximité",
        blocks: [
          {
            type: "paragraphs",
            content: [
              "La fermeture des abattoirs de proximité limite fortement le développement de l’élevage en circuit court. Elle augmente les distances, les coûts, le temps de transport et la dépendance à des intermédiaires.",
              "La résolution de ce verrou doit précéder toute montée en puissance de l’élevage et de la transformation carnée.",
            ],
          },
          {
            type: "scenarioCards",
            title: "Solutions à étudier selon le territoire",
            scenarios: [
              {
                title: "Maintien ou reprise d’un outil existant",
                description:
                  "Soutenir un abattoir de proximité, organiser sa reprise ou sécuriser son activité avec plusieurs filières locales.",
                activities: [
                  "Diagnostic des volumes",
                  "Gouvernance multi-acteurs",
                  "Plan de modernisation",
                  "Contrats d’utilisation",
                ],
              },
              {
                title: "Atelier réglementé de petite capacité",
                description:
                  "Créer un atelier adapté aux espèces et volumes autorisés, notamment pour certaines volailles ou productions spécifiques.",
                activities: [
                  "Conception sanitaire",
                  "Formation des opérateurs",
                  "Traçabilité",
                  "Gestion des déchets",
                ],
              },
              {
                title: "Équipement mobile ou mutualisé",
                description:
                  "Étudier un outil mobile lorsque les volumes, distances et contraintes réglementaires le rendent pertinent.",
                activities: [
                  "Planification des tournées",
                  "Sites d’accueil agréés",
                  "Maintenance",
                  "Mutualisation inter-exploitations",
                ],
              },
            ],
          },
          {
            type: "risks",
            title: "Risques spécifiques",
            items: [
              {
                risk: "Sous-dimensionnement des volumes",
                level: "Élevé",
                response:
                  "Établir un diagnostic inter-exploitations avant tout investissement.",
              },
              {
                risk: "Complexité réglementaire",
                level: "Élevé",
                response:
                  "Associer dès l’amont les services vétérinaires et les professionnels compétents.",
              },
              {
                risk: "Coût de fonctionnement",
                level: "Moyen",
                response:
                  "Mutualiser l’outil et sécuriser les usages avant le lancement.",
              },
              {
                risk: "Gouvernance fragile",
                level: "Moyen",
                response:
                  "Définir les règles de réservation, de tarification et de responsabilité.",
              },
            ],
          },
        ],
      },
      {
        id: "organisation-humaine",
        title: "Organisation humaine et transmission",
        blocks: [
          {
            type: "jobs",
            title: "Emplois selon les scénarios",
            scenarios: [
              {
                title: "Scénario 1 — Ferme pilote",
                items: [
                  {
                    role: "Exploitants associés",
                    number: "1 à 2",
                    status: "Associés",
                    mission:
                      "Pilotage agronomique, production, commercialisation et gouvernance.",
                  },
                  {
                    role: "Salarié polyvalent",
                    number: "1 à 2",
                    status: "CDI ou saisonnier stabilisé",
                    mission: "Production, entretien, préparation et livraison.",
                  },
                  {
                    role: "Apprenants",
                    number: "1 à 2",
                    status: "Apprentissage ou professionnalisation",
                    mission: "Parcours progressif sur plusieurs ateliers.",
                  },
                ],
              },
              {
                title: "Scénario 2 — Exploitation intégrée",
                items: [
                  {
                    role: "Exploitants associés",
                    number: "2 à 4",
                    status: "Associés",
                    mission:
                      "Pilotage des ateliers et responsabilité économique.",
                  },
                  {
                    role: "Salariés agricoles",
                    number: "3 à 6",
                    status: "CDI et saisonniers",
                    mission:
                      "Continuité des cultures, élevage, transformation et logistique.",
                  },
                  {
                    role: "Responsable transformation",
                    number: "1",
                    status: "CDI ou associé",
                    mission:
                      "Hygiène, planification, production et qualité du laboratoire.",
                  },
                  {
                    role: "Apprenants-compagnons",
                    number: "3 à 5",
                    status: "Apprentissage ou professionnalisation",
                    mission:
                      "Formation en situation réelle et prise de responsabilités progressive.",
                  },
                ],
              },
              {
                title: "Scénario 3 — Réseau territorial",
                items: [
                  {
                    role: "Producteurs partenaires",
                    number: "5 à 15 fermes",
                    status: "Autonomes et coopérateurs",
                    mission:
                      "Planification des volumes et complémentarité des productions.",
                  },
                  {
                    role: "Équipe mutualisée",
                    number: "5 à 10",
                    status: "SCIC, association ou coopérative",
                    mission:
                      "Transformation, logistique, qualité, commercialisation et administration.",
                  },
                  {
                    role: "Apprenants",
                    number: "6 à 12",
                    status: "Parcours multi-sites",
                    mission:
                      "Rotation entre fermes, laboratoire et modules pédagogiques.",
                  },
                ],
              },
            ],
          },
          {
            type: "encadre",
            title: "La transmission comme fonction permanente",
            content: [
              {
                paragraphs: [
                  "La transmission ne doit pas être organisée seulement au moment du départ d’un exploitant.",
                  "Chaque apprenant progresse de l’observation à la responsabilité d’un atelier, puis peut accéder au sociétariat, à une reprise ou à une installation accompagnée.",
                ],
              },
            ],
          },
          {
            type: "quote",
            content:
              "La transmission n’est pas une opération de fin de carrière : elle devient une fonction permanente de l’exploitation.",
          },
        ],
      },
      {
        id: "besoins-materiels",
        title: "Besoins immobiliers et matériels",
        blocks: [
          {
            type: "scenarioNeeds",
            title: "Besoins par niveau de déploiement",
            scenarios: [
              {
                title: "Scénario 1 — Ferme pilote",
                context:
                  "S’appuie au maximum sur une exploitation et des équipements existants.",
                realEstate: [
                  {
                    item: "Foncier",
                    need: "15 à 30 hectares selon les ateliers",
                  },
                  {
                    item: "Bâtiments",
                    need: "Stockage, petit élevage, préparation et vestiaires",
                  },
                  {
                    item: "Eau",
                    need: "Accès sécurisé et stockage adapté au maraîchage",
                  },
                ],
                equipment: [
                  {
                    item: "Matériel agricole",
                    need: "Parc léger et polyvalent, mutualisation des outils lourds",
                  },
                  {
                    item: "Froid",
                    need: "Petite chambre froide",
                  },
                  {
                    item: "Livraison",
                    need: "Véhicule utilitaire ou tournée partagée",
                  },
                ],
              },
              {
                title: "Scénario 2 — Exploitation intégrée",
                context:
                  "Dispose d’ateliers diversifiés, d’un laboratoire léger et d’une logistique propre ou mutualisée.",
                realEstate: [
                  {
                    item: "Foncier",
                    need: "40 à 80 hectares, prairies et terres cultivables",
                  },
                  {
                    item: "Bâtiments",
                    need: "Stockage, élevage, transformation, préparation, pédagogie",
                  },
                  {
                    item: "Laboratoire",
                    need: "Locaux séparés conformes aux normes sanitaires",
                  },
                ],
                equipment: [
                  {
                    item: "Matériel agricole",
                    need: "Tracteurs polyvalents, outils de culture et d’élevage",
                  },
                  {
                    item: "Transformation",
                    need: "Lavage, découpe, cuisson, conditionnement et froid",
                  },
                  {
                    item: "Numérique",
                    need: "Planification, traçabilité, commandes et suivi économique",
                  },
                ],
              },
              {
                title: "Scénario 3 — Réseau territorial",
                context:
                  "Plusieurs fermes conservent leur autonomie et partagent les fonctions coûteuses.",
                realEstate: [
                  {
                    item: "Plateforme",
                    need: "Laboratoire, stockage, quai et espace de préparation",
                  },
                  {
                    item: "Sites partenaires",
                    need: "Fermes et ateliers répartis sur le bassin de vie",
                  },
                  {
                    item: "Formation",
                    need: "Salle ou espace partagé avec l’école et le lycée agricole",
                  },
                ],
                equipment: [
                  {
                    item: "Logistique",
                    need: "Véhicules, caisses, chambres froides et gestion des tournées",
                  },
                  {
                    item: "Transformation",
                    need: "Équipements dimensionnés aux volumes mutualisés",
                  },
                  {
                    item: "Maintenance",
                    need: "Convention avec l’Atelier technique territorial",
                  },
                ],
              },
            ],
            note: "Tout investissement doit être précédé d’un inventaire des bâtiments, machines, véhicules et compétences déjà disponibles.",
          },
          {
            type: "notice",
            content:
              "La priorité est donnée au réemploi, à la rénovation et à la mutualisation avant l’achat de matériel neuf.",
          },
        ],
      },
      {
        id: "gouvernance",
        title: "Gouvernance et protection de l’outil",
        blocks: [
          {
            type: "paragraphs",
            content: [
              "La gouvernance doit protéger l’outil agricole contre la spéculation, garantir la place des exploitants et permettre l’entrée progressive de nouveaux associés.",
              "Le choix entre GAEC, SCOP agricole, société foncière ou articulation avec une SCIC dépendra du foncier, du nombre d’associés, des activités de transformation et des partenaires publics ou citoyens.",
            ],
          },
          {
            type: "governance",
            title: "Répartition indicative des responsabilités",
            colleges: [
              {
                title: "Exploitants et salariés associés",
                votingShare: "50 à 60 %",
                role: "Décisions agronomiques, organisation du travail et investissements productifs.",
                members: [
                  "Exploitants associés",
                  "Salariés devenus sociétaires",
                  "Responsables d’ateliers",
                ],
              },
              {
                title: "Partenaires territoriaux",
                votingShare: "20 à 30 %",
                role: "Débouchés, formation, logistique et articulation avec les politiques locales.",
                members: [
                  "Collectivités",
                  "Établissements de restauration collective",
                  "Lycées agricoles",
                  "Structures de l’ESS",
                ],
              },
              {
                title: "Producteurs et citoyens coopérateurs",
                votingShare: "15 à 25 %",
                role: "Capital patient, complémentarité des productions et ancrage local.",
                members: [
                  "Producteurs partenaires",
                  "Habitants",
                  "Fondations ou finance solidaire",
                ],
              },
            ],
            note: "Les pourcentages sont indicatifs. Aucun collège financier ne doit pouvoir prendre seul le contrôle de l’outil agricole.",
          },
          {
            type: "encadre",
            title: "Protection du foncier et des équipements",
            content: [
              {
                items: [
                  "Dissocier si nécessaire le foncier de l’exploitation.",
                  "Prévoir des clauses anti-spéculatives.",
                  "Définir les conditions d’entrée, de sortie et de transmission dès la création.",
                  "Conserver une majorité de décision aux personnes qui travaillent dans l’outil.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "modele-economique",
        title: "Modèle économique et financement",
        blocks: [
          {
            type: "paragraphs",
            content: [
              "La vente constitue le principal facteur de fragilité d’une exploitation diversifiée. Le modèle repose donc sur la sécurisation d’un socle de débouchés avant l’augmentation des volumes.",
              "Les contrats pluriannuels avec la restauration collective apportent une visibilité minimale, tandis que la vente directe, les marchés, les commerces locaux et la transformation améliorent la marge et réduisent les pertes.",
              "Le financement initial doit privilégier les investissements structurants et limiter autant que possible les annuités qui fragiliseraient les premières années.",
            ],
          },
          {
            type: "scenarioBudget",
            title: "Chiffrage indicatif par scénario",
            scenarios: [
              {
                title: "Scénario 1 — Ferme pilote",
                assumptions: [
                  "Reprise ou location d’un outil existant",
                  "Transformation légère externalisée ou mutualisée",
                  "Débouchés locaux déjà identifiés",
                ],
                investment: [
                  {
                    item: "Reprise, rénovation et foncier",
                    low: "250 k€",
                    high: "600 k€",
                  },
                  {
                    item: "Matériel et irrigation",
                    low: "120 k€",
                    high: "280 k€",
                  },
                  {
                    item: "Froid, préparation et logistique",
                    low: "60 k€",
                    high: "150 k€",
                  },
                  {
                    item: "Fonds de roulement",
                    low: "50 k€",
                    high: "100 k€",
                  },
                ],
                totalInvestment: {
                  low: "480 k€",
                  high: "1,13 M€",
                },
                annualOperatingCosts: {
                  low: "180 k€",
                  high: "300 k€",
                },
                annualRevenueTarget: {
                  low: "220 k€",
                  high: "380 k€",
                },
                jobs: {
                  low: "2",
                  high: "4",
                },
                learners: {
                  low: "1",
                  high: "2",
                },
                breakEven:
                  "Entre la troisième et la cinquième année selon la reprise et les contrats.",
                note: "Le scénario est pertinent lorsque bâtiments, matériel ou foncier sont déjà disponibles.",
              },
              {
                title: "Scénario 2 — Exploitation intégrée",
                assumptions: [
                  "40 à 80 hectares",
                  "Plusieurs ateliers productifs",
                  "Laboratoire léger et contrats de restauration collective",
                ],
                investment: [
                  {
                    item: "Foncier et bâtiments",
                    low: "700 k€",
                    high: "1,0 M€",
                  },
                  {
                    item: "Matériel agricole et élevage",
                    low: "350 k€",
                    high: "550 k€",
                  },
                  {
                    item: "Transformation et froid",
                    low: "350 k€",
                    high: "600 k€",
                  },
                  {
                    item: "Logistique, numérique et fonds de roulement",
                    low: "180 k€",
                    high: "300 k€",
                  },
                ],
                totalInvestment: {
                  low: "1,58 M€",
                  high: "2,45 M€",
                },
                annualOperatingCosts: {
                  low: "320 k€",
                  high: "500 k€",
                },
                annualRevenueTarget: {
                  low: "420 k€",
                  high: "650 k€",
                },
                jobs: {
                  low: "6",
                  high: "12",
                },
                learners: {
                  low: "3",
                  high: "5",
                },
                breakEven:
                  "Objectif autour de la quatrième année avec montée en charge progressive.",
                note: "Le chiffre de 2,1 M€ correspond au milieu de cette fourchette.",
              },
              {
                title: "Scénario 3 — Réseau territorial",
                assumptions: [
                  "Plusieurs fermes partenaires",
                  "Plateforme de transformation et logistique partagée",
                  "Gouvernance multi-acteurs",
                ],
                investment: [
                  {
                    item: "Plateforme et rénovation",
                    low: "900 k€",
                    high: "1,8 M€",
                  },
                  {
                    item: "Transformation et froid",
                    low: "600 k€",
                    high: "1,2 M€",
                  },
                  {
                    item: "Logistique et numérique",
                    low: "250 k€",
                    high: "500 k€",
                  },
                  {
                    item: "Fonds de roulement et ingénierie",
                    low: "200 k€",
                    high: "400 k€",
                  },
                ],
                totalInvestment: {
                  low: "1,95 M€",
                  high: "3,9 M€",
                },
                annualOperatingCosts: {
                  low: "650 k€",
                  high: "1,2 M€",
                },
                annualRevenueTarget: {
                  low: "800 k€",
                  high: "1,5 M€",
                },
                jobs: {
                  low: "15",
                  high: "30",
                },
                learners: {
                  low: "6",
                  high: "12",
                },
                breakEven:
                  "Dépend du volume mutualisé et du taux d’utilisation du laboratoire.",
                note: "Les fermes restent autonomes ; le chiffrage porte surtout sur les fonctions partagées.",
              },
            ],
            note: "Tous les montants sont des ordres de grandeur hors fiscalité fine et doivent être recalculés localement.",
          },
          {
            type: "fundingMix",
            title: "Mix de financement indicatif",
            items: [
              {
                source: "Aides agricoles, État et collectivités",
                share: "30 à 40 %",
                uses: [
                  "Foncier stratégique",
                  "Rénovation",
                  "Eau et adaptation climatique",
                  "Équipements collectifs",
                ],
              },
              {
                source: "Fonds européens, fondations et finance solidaire",
                share: "20 à 35 %",
                uses: [
                  "Transformation",
                  "Formation",
                  "Innovation sociale",
                  "Démarrage du réseau",
                ],
              },
              {
                source: "Capital coopératif et épargne citoyenne",
                share: "15 à 25 %",
                uses: [
                  "Fonds propres",
                  "Foncier collectif",
                  "Trésorerie de lancement",
                ],
              },
              {
                source: "Emprunt ou crédit-bail maîtrisé",
                share: "0 à 25 %",
                uses: [
                  "Matériel directement productif",
                  "Véhicules",
                  "Équipements amortissables",
                ],
              },
            ],
          },
          {
            type: "notice",
            content:
              "L’objectif de faible dette ne doit pas conduire à retarder indéfiniment un investissement rentable. Le niveau d’endettement doit être calibré sur des contrats et des flux de trésorerie prudents.",
          },
        ],
      },
      {
        id: "deploiement",
        title: "Calendrier de déploiement",
        blocks: [
          {
            type: "timeline",
            title: "Montée en charge progressive",
            items: [
              {
                period: "0–6 mois",
                title: "Diagnostic territorial",
                content:
                  "Cartographier le foncier, les fermes à transmettre, les compétences, les débouchés, les outils existants, la restauration collective et les producteurs partenaires.",
              },
              {
                period: "6–12 mois",
                title: "Conception et contractualisation",
                content:
                  "Choisir la structure juridique, le plan agronomique, les contrats, la gouvernance, le financement et les autorisations.",
              },
              {
                period: "Année 1",
                title: "Reprise ou installation",
                content:
                  "Mettre en place l’équipe initiale, les premiers ateliers et les équipements indispensables.",
              },
              {
                period: "Années 2–3",
                title: "Diversification et transformation",
                content:
                  "Développer progressivement le maraîchage, l’élevage, le laboratoire et les contrats.",
              },
              {
                period: "Années 3–5",
                title: "Consolidation",
                content:
                  "Atteindre le régime de croisière, intégrer les apprenants et évaluer les résultats économiques et agronomiques.",
              },
            ],
          },
          {
            type: "deploymentModes",
            title: "Trois modes d’implantation",
            modes: [
              {
                title: "Création complète",
                description:
                  "Créer une exploitation nouvelle lorsque le territoire ne dispose pas de base adaptée.",
                suitableWhen: [
                  "Foncier mobilisable",
                  "Équipe fondatrice stabilisée",
                  "Débouchés contractualisables",
                ],
                components: [
                  "Foncier",
                  "Bâtiments",
                  "Ateliers productifs",
                  "Transformation",
                  "Formation",
                ],
                strengths: [
                  "Cohérence dès la conception",
                  "Équipements adaptés",
                ],
                risks: ["Investissement élevé", "Temps de montée en charge"],
              },
              {
                title: "Reprise-transmission",
                description:
                  "Transformer progressivement une exploitation existante avec le cédant et de futurs associés.",
                suitableWhen: [
                  "Ferme sans repreneur",
                  "Cédant disponible pour transmettre",
                  "Outil partiellement adapté",
                ],
                components: [
                  "Diagnostic de l’existant",
                  "Parcours d’entrée",
                  "Diversification progressive",
                  "Nouvelle gouvernance",
                ],
                strengths: [
                  "Savoirs et clientèle existants",
                  "Investissement parfois réduit",
                ],
                risks: [
                  "Conflits de temporalité",
                  "Matériel ou bâtiments inadaptés",
                ],
              },
              {
                title: "Réseau de fermes",
                description:
                  "Mutualiser transformation, logistique, contrats et formation entre plusieurs producteurs autonomes.",
                suitableWhen: [
                  "Tissu agricole encore dense",
                  "Volonté de coopération",
                  "Besoin d’outils communs",
                ],
                components: [
                  "Plateforme partagée",
                  "Planification",
                  "Logistique",
                  "Gouvernance de filière",
                ],
                strengths: ["Respect de l’autonomie", "Volumes sécurisés"],
                risks: [
                  "Coordination complexe",
                  "Taux d’utilisation insuffisant",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "risques",
        title: "Risques et conditions de réussite",
        blocks: [
          {
            type: "risks",
            title: "Matrice des risques",
            items: [
              {
                risk: "Diversification excessive",
                level: "Élevé",
                response:
                  "Limiter les ateliers aux compétences, équipements et débouchés réellement maîtrisables.",
              },
              {
                risk: "Débouchés insuffisants",
                level: "Élevé",
                response:
                  "Contractualiser le socle de ventes avant les investissements de capacité.",
              },
              {
                risk: "Sous-estimation du travail",
                level: "Élevé",
                response:
                  "Construire un calendrier annuel détaillé et dimensionner l’équipe pour les pics.",
              },
              {
                risk: "Dépendance aux subventions",
                level: "Moyen",
                response:
                  "Utiliser les aides pour l’investissement, pas pour masquer durablement un déficit.",
              },
              {
                risk: "Conflits de gouvernance",
                level: "Moyen",
                response:
                  "Définir les responsabilités, règles de décision et conditions de sortie dès l’origine.",
              },
              {
                risk: "Difficultés sanitaires ou réglementaires",
                level: "Élevé",
                response:
                  "Associer les services compétents à la conception des ateliers.",
              },
              {
                risk: "Rupture de transmission",
                level: "Moyen",
                response:
                  "Maintenir en permanence un parcours d’apprentissage et de responsabilisation.",
              },
              {
                risk: "Investissement surdimensionné",
                level: "Élevé",
                response:
                  "Déployer par étapes et utiliser prioritairement les équipements existants.",
              },
              {
                risk: "Aléas climatiques",
                level: "Élevé",
                response:
                  "Diversifier, adapter les variétés, gérer l’eau et maintenir une trésorerie de sécurité.",
              },
            ],
          },
          {
            type: "encadre",
            title: "Conditions préalables",
            content: [
              {
                items: [
                  "Une équipe fondatrice disposant de compétences complémentaires.",
                  "Un diagnostic agronomique et économique du territoire.",
                  "Des débouchés contractualisables avant la montée en charge.",
                  "Une gouvernance écrite et comprise par tous.",
                  "Un calendrier réaliste de travail et d’investissement.",
                  "Un suivi séparé de la rentabilité de chaque atelier.",
                ],
              },
            ],
          },
          {
            type: "quote",
            content:
              "Le prototype ne sera robuste que si les débouchés, l’organisation humaine et le calendrier de travail sont conçus avant les investissements lourds.",
          },
        ],
      },
      {
        id: "articulation",
        title: "Articulation avec les autres modules et le territoire",
        blocks: [
          {
            type: "flows",
            title: "Flux principaux",
            items: [
              {
                from: "Exploitation",
                to: "Restauration collective",
                exchanges: [
                  "Produits frais",
                  "Produits préparés",
                  "Volumes planifiés",
                  "Informations de saisonnalité",
                ],
              },
              {
                from: "Autres producteurs",
                to: "Laboratoire",
                exchanges: [
                  "Invendus",
                  "Compléments de gamme",
                  "Volumes mutualisés",
                  "Savoirs techniques",
                ],
              },
              {
                from: "Atelier technique territorial",
                to: "Exploitation",
                exchanges: [
                  "Maintenance",
                  "Réparation",
                  "Fabrication",
                  "Reconditionnement informatique",
                  "Appui bâtiments",
                ],
              },
              {
                from: "École multi-niveaux",
                to: "Exploitation",
                exchanges: [
                  "Apprenants",
                  "Modules théoriques",
                  "Projets pédagogiques",
                  "Transmission intergénérationnelle",
                ],
              },
              {
                from: "Village SCIC",
                to: "Ensemble du réseau",
                exchanges: [
                  "Gouvernance",
                  "Fonctions support",
                  "Capital patient",
                  "Logistique",
                  "Commercialisation",
                ],
              },
            ],
          },
          {
            type: "links",
            title: "Liens avec les autres modules",
            items: [
              {
                url: "/membres/prototype/1",
                label: "Atelier technique territorial",
                content:
                  "Maintenance des machines, fabrication, réparation, reconditionnement informatique et appui aux bâtiments.",
              },
              {
                url: "/membres/prototype/3",
                label: "École multi-niveaux",
                content:
                  "Formation des apprenants, découverte des métiers et transmission des savoirs.",
              },
              {
                url: "/membres/prototype/4",
                label: "Village SCIC",
                content:
                  "Transformation, stockage, logistique, gouvernance territoriale et mutualisation des fonctions support.",
              },
            ],
          },
          {
            type: "encadre",
            title: "Mutualiser avec les producteurs existants",
            content: [
              {
                paragraphs: [
                  "Le prototype ne doit pas chercher à remplacer les exploitations locales.",
                  "Il peut sécuriser des volumes avec elles, partager un laboratoire, valoriser des invendus et compléter les productions destinées à la restauration collective.",
                ],
              },
            ],
          },
        ],
      },
      {
        id: "indicateurs-conclusion",
        title: "Indicateurs de suivi et conclusion",
        blocks: [
          {
            type: "indicators",
            title: "Tableau de bord",
            items: [
              {
                indicator: "Part des ventes contractualisées",
                target: "Socle couvrant les charges fixes essentielles",
                frequency: "Trimestrielle",
              },
              {
                indicator: "Valeur ajoutée conservée localement",
                target: "Progression annuelle mesurée",
                frequency: "Annuelle",
              },
              {
                indicator: "Dépendance aux intrants extérieurs",
                target: "Réduction progressive selon les ateliers",
                frequency: "Annuelle",
              },
              {
                indicator: "Part des produits transformés",
                target: "Adaptée aux invendus et aux besoins des clients",
                frequency: "Mensuelle",
              },
              {
                indicator: "Apprenants accompagnés",
                target: "3 à 5 par cycle dans le scénario intermédiaire",
                frequency: "Par cycle",
              },
              {
                indicator: "Taux de transmission ou d’installation",
                target: "Suivi à 2 et 5 ans",
                frequency: "Annuelle",
              },
              {
                indicator: "Part des équipements mutualisés",
                target: "Progression sans perte de disponibilité",
                frequency: "Semestrielle",
              },
              {
                indicator: "Résultat économique par atelier",
                target: "Tous les ateliers suivis séparément et consolidés",
                frequency: "Mensuelle",
              },
              {
                indicator: "Qualité agronomique des sols",
                target: "Maintien ou amélioration des indicateurs",
                frequency: "Pluriannuelle",
              },
              {
                indicator: "Part des débouchés locaux",
                target: "Majoritaire sur le socle de production",
                frequency: "Annuelle",
              },
            ],
          },
          {
            type: "notice",
            content:
              "L’évaluation doit distinguer les résultats économiques, agronomiques, sociaux, pédagogiques et territoriaux. Un seul indicateur de rendement ou de chiffre d’affaires ne suffit pas à apprécier la robustesse du modèle.",
          },
          {
            type: "conclusion",
            content:
              "L’exploitation polyculture-élevage ne cherche pas à revenir à une agriculture ancienne ni à reproduire un modèle unique. Elle organise une diversification maîtrisée, une transformation proportionnée, des débouchés territoriaux et une transmission permanente afin de réduire les fragilités économiques et humaines de l’exploitation spécialisée.",
          },
          {
            type: "encadre",
            title: "Principe directeur",
            content: [
              {
                paragraphs: [
                  "Produire, transformer, former et vendre ne sont pas quatre projets séparés.",
                  "Leur articulation constitue le cœur économique et territorial du prototype.",
                ],
              },
            ],
          },
        ],
      },
    ],
    downloads: [
      {
        label: "Télécharger le prototype détaillé en PDF",
        url: "/membre/download/prototype/2",
        format: "PDF",
      },
    ],
    navigation: {
      previous: {
        label: "Atelier technique territorial",
        url: "/membres/prototype/1",
      },
      list: {
        label: "Tous les prototypes",
        url: "/espace-membre#prototypes",
      },
      next: {
        label: "École multi-niveaux et pôle de transmission",
        url: "/membres/prototype/3",
      },
    },
  },

  /*
========================================================
MODULE MEMBRE 3
ÉCOLE MULTINIVEAUX ET PÔLE DE TRANSMISSION
========================================================
*/

  3: {
    slug: "ecole-multiniveaux-pole-transmission",

    title: "École multiniveaux et pôle de transmission",

    image: "/action/module3.png",

    subtitle: "Organisation pédagogique, humaine et territoriale détaillée.",

    intro: `
L’École multiniveaux et pôle de transmission associe enseignement scolaire, pédagogie par projets, découverte des métiers, formation professionnelle, reconversion et transmission intergénérationnelle.

Elle peut être créée sous la forme d’un établissement complet, compléter une école ou un centre de formation existant, ou relier plusieurs structures éducatives, professionnelles et associatives autour de projets communs.

Le modèle distingue trois niveaux de déploiement selon la population, le nombre d’apprenants, les établissements déjà présents et les besoins du territoire.

L’objectif n’est pas de remplacer le système éducatif existant, mais de mieux relier les connaissances fondamentales, les compétences pratiques, les métiers et les ressources humaines du territoire.
  `,

    structure: [
      "Diagnostic détaillé",
      "Objectifs opérationnels",
      "Périmètre du module",
      "Organisation pédagogique",
      "Activités détaillées",
      "Adaptation territoriale",
      "Organisation humaine",
      "Locaux et équipements",
      "Gouvernance",
      "Modèle économique",
      "Chiffrage",
      "Déploiement",
      "Risques et conditions de réussite",
      "Articulation",
      "Indicateurs de suivi",
      "Conclusion",
    ],

    sections: [
      /*
    ======================================================
    1. DIAGNOSTIC DÉTAILLÉ
    ======================================================
    */

      {
        id: "diagnostic-detaille",
        title: "Diagnostic détaillé",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Le système éducatif assure la transmission des connaissances fondamentales, mais il peine parfois à relier les apprentissages scolaires, les compétences pratiques, la compréhension du monde professionnel et les réalités territoriales.",

              "Dans certains territoires ruraux ou périurbains, la diminution du nombre d’élèves entraîne la fermeture ou la fragilisation des écoles, tandis que les centres de formation et les établissements spécialisés s’éloignent des lieux de vie.",

              "Les entreprises, exploitations agricoles, associations et collectivités rencontrent parallèlement des difficultés de recrutement, alors que des personnes en reconversion cherchent des parcours accessibles et adaptés.",

              "Des savoir-faire techniques, agricoles, artisanaux, culturels ou domestiques risquent également de disparaître faute d’espaces organisés de transmission.",
            ],
          },

          {
            type: "list",

            title: "Principales fragilités",

            items: [
              "Fermeture ou fragilisation d’écoles dans les territoires peu peuplés.",
              "Éloignement des collèges, lycées et centres de formation.",
              "Cloisonnement entre enseignement général et formation professionnelle.",
              "Faible articulation entre l’école et les acteurs économiques locaux.",
              "Place insuffisante de l’apprentissage par la pratique.",
              "Orientation parfois tardive ou déconnectée des aptitudes réelles.",
              "Dévalorisation des métiers manuels, techniques, agricoles et artisanaux.",
              "Manque de solutions locales pour les adultes en reconversion.",
              "Difficulté à transmettre certains savoir-faire entre générations.",
              "Isolement des enseignants et formateurs dans les petites structures.",
              "Manque de locaux polyvalents et d’équipements pédagogiques.",
              "Usage du numérique parfois subi plutôt que choisi et maîtrisé.",
              "Faible coordination entre école, familles, associations et professionnels.",
              "Difficulté à financer des projets éducatifs transversaux.",
            ],
          },

          {
            type: "encadre",

            title: "Le verrou principal",

            content: [
              {
                subtitle: "Des ressources éducatives dispersées",

                paragraphs: [
                  "Les enseignants, formateurs, professionnels, associations, parents et habitants disposent de compétences complémentaires, mais celles-ci sont rarement organisées dans un cadre commun.",

                  "Les établissements fonctionnent souvent selon leurs propres contraintes, sans outil territorial capable de coordonner les projets, les locaux et les intervenants.",
                ],
              },

              {
                subtitle: "Une séparation entre apprendre et faire",

                paragraphs: [
                  "Les connaissances théoriques et les activités pratiques sont trop souvent opposées, alors qu’elles peuvent se renforcer mutuellement.",

                  "Le défi consiste à préserver l’exigence académique tout en donnant davantage de sens aux apprentissages.",
                ],
              },
            ],
          },

          {
            type: "quote",

            content:
              "L’enjeu n’est pas de choisir entre savoir et savoir-faire, mais de construire des parcours permettant de comprendre, d’expérimenter et de transmettre.",
          },
        ],
      },

      /*
    ======================================================
    2. OBJECTIFS OPÉRATIONNELS
    ======================================================
    */

      {
        id: "objectifs-operationnels",
        title: "Objectifs opérationnels",

        blocks: [
          {
            type: "cards",

            items: [
              {
                title: "Garantir",

                content:
                  "Assurer l’acquisition des connaissances et compétences fondamentales.",
              },

              {
                title: "Relier",

                content:
                  "Mettre en relation les apprentissages scolaires, les projets et le territoire.",
              },

              {
                title: "Coopérer",

                content:
                  "Organiser des activités communes entre différents âges et niveaux.",
              },

              {
                title: "Orienter",

                content:
                  "Faire découvrir progressivement les métiers, les compétences et les parcours.",
              },

              {
                title: "Former",

                content:
                  "Proposer des formations professionnelles et des parcours de reconversion.",
              },

              {
                title: "Transmettre",

                content:
                  "Faire circuler les savoirs entre professionnels, habitants et générations.",
              },

              {
                title: "Expérimenter",

                content:
                  "Tester et évaluer des méthodes pédagogiques adaptées au territoire.",
              },

              {
                title: "Maintenir",

                content:
                  "Préserver une offre éducative et de formation accessible localement.",
              },
            ],
          },

          {
            type: "resume",

            title: "Résultats recherchés",

            items: [
              "Renforcer la maîtrise des apprentissages fondamentaux.",
              "Développer l’autonomie et la coopération.",
              "Donner davantage de sens aux apprentissages.",
              "Améliorer la découverte des métiers.",
              "Faciliter les reconversions professionnelles.",
              "Préserver les savoir-faire locaux.",
              "Créer des liens entre générations.",
              "Renforcer l’attractivité du territoire.",
            ],
          },
        ],
      },

      /*
    ======================================================
    3. PÉRIMÈTRE DU MODULE
    ======================================================
    */

      {
        id: "perimetre-module",
        title: "Périmètre du module",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Le module peut comprendre une école primaire multiniveaux, un pôle de projets pédagogiques, un centre de ressources, des formations professionnelles et des activités ouvertes aux habitants.",

              "Il n’est pas nécessaire que toutes les fonctions soient implantées dans un même bâtiment. Elles peuvent être réparties entre une école, un tiers-lieu, un lycée professionnel, une exploitation agricole, un atelier technique ou un centre social.",

              "La partie scolaire demeure placée sous la responsabilité de professionnels de l’éducation. Les autres intervenants viennent compléter les apprentissages dans un cadre défini.",
            ],
          },

          {
            type: "list",

            title: "Fonctions possibles",

            items: [
              "École maternelle ou primaire multiniveaux.",
              "Pédagogie par projets.",
              "Centre de documentation et de ressources.",
              "Ateliers scientifiques, artistiques et techniques.",
              "Découverte des métiers.",
              "Formation professionnelle.",
              "Apprentissage et alternance.",
              "Reconversion et formation continue.",
              "Transmission intergénérationnelle.",
              "Accompagnement numérique.",
              "Éducation à l’alimentation et à l’environnement.",
              "Recherche et expérimentation pédagogique.",
              "Conférences, ateliers et événements ouverts au public.",
            ],
          },

          {
            type: "encadre",

            title: "Critères de sélection des fonctions",

            content: [
              {
                subtitle: "Besoins éducatifs",

                items: [
                  "Nombre et âge des élèves.",
                  "Éloignement des établissements.",
                  "Besoins particuliers identifiés.",
                  "Capacité d’accueil existante.",
                ],
              },

              {
                subtitle: "Besoins économiques",

                items: [
                  "Métiers en tension.",
                  "Besoins de reconversion.",
                  "Compétences recherchées par les structures locales.",
                  "Possibilités d’apprentissage ou de stage.",
                ],
              },

              {
                subtitle: "Ressources territoriales",

                items: [
                  "Enseignants et formateurs disponibles.",
                  "Professionnels susceptibles d’intervenir.",
                  "Locaux et équipements existants.",
                  "Associations et partenaires éducatifs.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    4. ORGANISATION PÉDAGOGIQUE
    ======================================================
    */

      {
        id: "organisation-pedagogique",
        title: "Organisation pédagogique",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Le fonctionnement multiniveaux ne signifie pas que tous les élèves suivent les mêmes activités ou progressent au même rythme.",

              "Les apprentissages fondamentaux sont organisés selon les niveaux, avec des temps individuels, en petits groupes et en classe entière.",

              "Les projets communs permettent ensuite de faire travailler ensemble des élèves d’âges différents autour d’une question, d’une réalisation ou d’une recherche.",

              "Les élèves les plus avancés peuvent expliquer certaines notions aux autres, sans devenir responsables de leur enseignement. Cette entraide renforce la compréhension et la coopération.",
            ],
          },

          {
            type: "cards",

            title: "Principes pédagogiques",

            items: [
              {
                title: "Socle fondamental",

                content:
                  "Lecture, écriture, mathématiques, sciences, langues, histoire, arts et citoyenneté.",
              },

              {
                title: "Groupes flexibles",

                content:
                  "Regroupements selon l’âge, le niveau, les besoins ou les projets.",
              },

              {
                title: "Pédagogie par projets",

                content:
                  "Mobilisation de plusieurs disciplines autour d’une réalisation concrète.",
              },

              {
                title: "Coopération",

                content:
                  "Travail collectif, tutorat encadré et responsabilités progressives.",
              },

              {
                title: "Évaluation régulière",

                content:
                  "Suivi des connaissances, des compétences et de la progression.",
              },

              {
                title: "Ouverture territoriale",

                content:
                  "Interventions, visites et projets avec les acteurs locaux.",
              },
            ],
          },

          {
            type: "list",

            title: "Exemple d’organisation hebdomadaire",

            items: [
              "Temps quotidiens consacrés aux apprentissages fondamentaux.",
              "Séquences différenciées par âge ou niveau.",
              "Deux à trois temps de projets interdisciplinaires par semaine.",
              "Activités physiques, artistiques et culturelles.",
              "Ateliers pratiques encadrés.",
              "Temps de lecture, recherche et autonomie.",
              "Bilan collectif et suivi individuel.",
            ],
          },

          {
            type: "encadre",

            title: "Limites à respecter",

            content: [
              {
                items: [
                  "Ne pas remplacer les enseignants par des intervenants extérieurs.",
                  "Ne pas utiliser les élèves comme main-d’œuvre.",
                  "Ne pas orienter trop tôt vers une spécialisation.",
                  "Ne pas négliger les connaissances académiques.",
                  "Ne pas multiplier les projets au détriment des apprentissages.",
                  "Évaluer régulièrement les effets de l’organisation multiniveaux.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    5. ACTIVITÉS DÉTAILLÉES
    ======================================================
    */

      {
        id: "activites-detaillees",
        title: "Activités détaillées",

        blocks: [
          {
            type: "activities",

            items: [
              {
                category: "Enseignement scolaire",

                title: "Apprentissages fondamentaux",

                paragraphs: [
                  "Les contenus scolaires sont organisés selon les programmes, les niveaux et les besoins des élèves.",

                  "Les projets pratiques servent de support ou de prolongement, sans se substituer aux apprentissages structurés.",
                ],

                items: [
                  "Lecture.",
                  "Expression écrite et orale.",
                  "Mathématiques.",
                  "Sciences.",
                  "Histoire et géographie.",
                  "Langues.",
                  "Arts.",
                  "Éducation physique.",
                  "Citoyenneté.",
                ],
              },

              {
                category: "Projets interdisciplinaires",

                title: "Comprendre en réalisant",

                paragraphs: [
                  "Les projets permettent de mobiliser plusieurs disciplines et de produire un résultat visible.",

                  "Ils sont préparés, encadrés et évalués par l’équipe éducative.",
                ],

                items: [
                  "Cultiver un jardin pédagogique.",
                  "Construire un objet simple.",
                  "Étudier l’eau ou la biodiversité.",
                  "Créer une exposition.",
                  "Réaliser un journal ou un podcast.",
                  "Programmer un outil numérique.",
                  "Organiser un événement.",
                ],
              },

              {
                category: "Découverte des métiers",

                title: "Observer le travail réel",

                paragraphs: [
                  "Les élèves découvrent des métiers variés, leurs contraintes, leurs compétences et leur utilité sociale.",

                  "Cette découverte reste progressive et n’enferme pas les élèves dans un choix précoce.",
                ],

                items: [
                  "Rencontres avec des professionnels.",
                  "Visites d’entreprises et d’exploitations.",
                  "Démonstrations de savoir-faire.",
                  "Stages d’observation.",
                  "Ateliers encadrés.",
                  "Projets communs.",
                ],
              },

              {
                category: "Formation professionnelle",

                title: "Développer des compétences opérationnelles",

                paragraphs: [
                  "Le pôle peut accueillir ou coordonner des formations courtes et des parcours qualifiants en lien avec des établissements agréés.",

                  "Les contenus sont construits à partir de besoins réels et de débouchés identifiés.",
                ],

                items: [
                  "Agriculture et alimentation.",
                  "Réparation et maintenance.",
                  "Bâtiment et rénovation.",
                  "Numérique.",
                  "Logistique.",
                  "Services aux personnes.",
                  "Économie coopérative.",
                ],
              },

              {
                category: "Reconversion",

                title: "Accompagner les changements de parcours",

                paragraphs: [
                  "Les adultes peuvent découvrir plusieurs métiers, tester leurs aptitudes et suivre des formations adaptées.",

                  "Les mises en situation sont encadrées et reliées à des objectifs professionnels précis.",
                ],

                items: [
                  "Bilans de compétences.",
                  "Immersions.",
                  "Modules de formation.",
                  "Tutorat.",
                  "Validation des acquis.",
                  "Accompagnement à l’emploi.",
                  "Création d’activité.",
                ],
              },

              {
                category: "Transmission intergénérationnelle",

                title: "Faire circuler les savoirs",

                paragraphs: [
                  "Des habitants, retraités, artisans, agriculteurs, techniciens ou artistes peuvent transmettre une compétence dans un cadre organisé.",

                  "Leur intervention complète le travail des enseignants et formateurs.",
                ],

                items: [
                  "Mémoire locale.",
                  "Jardinage.",
                  "Cuisine.",
                  "Artisanat.",
                  "Réparation.",
                  "Lecture.",
                  "Musique et arts.",
                  "Culture scientifique.",
                ],
              },

              {
                category: "Numérique",

                title: "Comprendre et maîtriser les outils",

                paragraphs: [
                  "Le numérique est utilisé comme un outil de recherche, de création et de communication.",

                  "Le module développe également l’esprit critique, la protection des données et la compréhension des risques.",
                ],

                items: [
                  "Recherche documentaire.",
                  "Programmation.",
                  "Création multimédia.",
                  "Cybersécurité.",
                  "Protection des données.",
                  "Réparation et reconditionnement.",
                  "Éducation aux médias.",
                ],
              },

              {
                category: "Recherche pédagogique",

                title: "Documenter et évaluer",

                paragraphs: [
                  "Les expérimentations doivent être conduites avec méthode et évaluées sur plusieurs années.",

                  "Les résultats sont partagés avec les équipes éducatives, les collectivités et les partenaires.",
                ],

                items: [
                  "Organisation multiniveaux.",
                  "Travail coopératif.",
                  "Pédagogie par projets.",
                  "Lien école-territoire.",
                  "Évaluation par compétences.",
                  "Usage raisonné du numérique.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    6. ADAPTATION TERRITORIALE
    ======================================================
    */

      {
        id: "adaptation-territoriale",
        title: "Adaptation territoriale",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "La taille du module ne dépend pas uniquement de la population. Elle doit prendre en compte les établissements existants, les distances de déplacement, le nombre d’enfants, les besoins de formation et les ressources humaines disponibles.",

              "Un petit territoire peut disposer d’une école complète, tandis qu’un territoire plus peuplé peut préférer mettre en réseau plusieurs établissements.",
            ],
          },

          {
            type: "scenarioCards",

            title: "Trois niveaux de déploiement",

            scenarios: [
              {
                id: "petit-territoire",
                title: "Petit territoire",
                population: "1 000 à 5 000 habitants",

                description:
                  "École multiniveaux de proximité et pôle de transmission léger, s’appuyant sur les structures et intervenants existants.",

                activities: [
                  "Une à trois classes multiniveaux.",
                  "Projets avec les acteurs locaux.",
                  "Bibliothèque ou centre de ressources partagé.",
                  "Ateliers intergénérationnels.",
                  "Formations ponctuelles pour adultes.",
                ],
              },

              {
                id: "territoire-intermediaire",
                title: "Territoire intermédiaire",
                population: "5 000 à 20 000 habitants",

                description:
                  "Établissement structuré ou réseau éducatif regroupant plusieurs classes, ateliers et formations.",

                activities: [
                  "École multiniveaux.",
                  "Ateliers scientifiques, techniques et artistiques.",
                  "Pôle de découverte des métiers.",
                  "Formations professionnelles.",
                  "Reconversion et formation continue.",
                  "Partenariats avec entreprises et associations.",
                ],
              },

              {
                id: "territoire-etendu",
                title: "Territoire étendu",
                population: "20 000 à 50 000 habitants et plus",

                description:
                  "Campus territorial ou réseau coordonné de plusieurs établissements, lieux de formation et ateliers.",

                activities: [
                  "Plusieurs établissements partenaires.",
                  "Centre de formation.",
                  "Plateaux techniques.",
                  "Orientation et reconversion.",
                  "Recherche pédagogique.",
                  "Réseau d’entreprises et de lieux de stage.",
                ],
              },
            ],
          },

          {
            type: "notice",

            content:
              "Les seuils démographiques sont indicatifs. Le dimensionnement doit être fondé sur le nombre réel d’apprenants et les ressources éducatives déjà présentes.",
          },
        ],
      },

      /*
    ======================================================
    7. ORGANISATION HUMAINE
    ======================================================
    */

      {
        id: "organisation-humaine",
        title: "Organisation humaine",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "La qualité du module dépend d’abord de l’équipe éducative et de sa capacité à coordonner les différents intervenants.",

              "La multiplication des activités ne doit pas entraîner une surcharge des enseignants. Une fonction spécifique de coordination territoriale devient nécessaire dès que le nombre de partenaires augmente.",
            ],
          },

          {
            type: "jobs",

            title: "Équipe possible selon le scénario",

            scenarios: [
              {
                id: "petit-territoire",
                title: "Petit territoire",

                items: [
                  {
                    role: "Enseignants",
                    number: "2 à 4",
                    status: "Temps plein",
                    mission:
                      "Apprentissages scolaires, suivi des élèves et projets.",
                  },
                  {
                    role: "Accompagnement éducatif",
                    number: "1 à 2",
                    status: "Temps plein ou partiel",
                    mission:
                      "Petite enfance, inclusion, temps périscolaires et soutien.",
                  },
                  {
                    role: "Coordination territoriale",
                    number: "0,5 à 1 ETP",
                    status: "Mutualisé",
                    mission:
                      "Relations avec les intervenants, associations et professionnels.",
                  },
                  {
                    role: "Intervenants spécialisés",
                    number: "Selon projets",
                    status: "Vacations ou partenariats",
                    mission: "Arts, sciences, métiers, sport et transmission.",
                  },
                  {
                    role: "Administration et entretien",
                    number: "1 à 2 ETP",
                    status: "Mutualisé",
                    mission: "Accueil, gestion, restauration et maintenance.",
                  },
                ],
              },

              {
                id: "territoire-intermediaire",
                title: "Territoire intermédiaire",

                items: [
                  {
                    role: "Direction pédagogique",
                    number: "1",
                    status: "Temps plein",
                    mission:
                      "Pilotage pédagogique et coordination de l’établissement.",
                  },
                  {
                    role: "Enseignants",
                    number: "6 à 12",
                    status: "Temps plein",
                    mission: "Enseignement, suivi et projets.",
                  },
                  {
                    role: "Accompagnants éducatifs",
                    number: "3 à 6",
                    status: "Temps plein ou partiel",
                    mission:
                      "Inclusion, petite enfance, soutien et périscolaire.",
                  },
                  {
                    role: "Coordination des projets",
                    number: "1 à 2",
                    status: "Temps plein",
                    mission: "Partenariats, ateliers, stages et événements.",
                  },
                  {
                    role: "Formateurs professionnels",
                    number: "2 à 5",
                    status: "Temps plein ou vacations",
                    mission: "Formation, reconversion et plateaux techniques.",
                  },
                  {
                    role: "Administration et services",
                    number: "3 à 6",
                    status: "Temps plein",
                    mission:
                      "Accueil, gestion, restauration, entretien et logistique.",
                  },
                ],
              },

              {
                id: "territoire-etendu",
                title: "Territoire étendu",

                items: [
                  {
                    role: "Direction générale",
                    number: "1",
                    status: "Temps plein",
                    mission:
                      "Stratégie éducative, finances et coordination du réseau.",
                  },
                  {
                    role: "Responsables pédagogiques",
                    number: "2 à 4",
                    status: "Temps plein",
                    mission:
                      "Coordination des différents niveaux et établissements.",
                  },
                  {
                    role: "Enseignants",
                    number: "15 à 30",
                    status: "Temps plein",
                    mission: "Enseignement scolaire et projets.",
                  },
                  {
                    role: "Accompagnants",
                    number: "6 à 12",
                    status: "Temps plein ou partiel",
                    mission:
                      "Inclusion, soutien, vie scolaire et petite enfance.",
                  },
                  {
                    role: "Formateurs et responsables de plateaux",
                    number: "6 à 12",
                    status: "Temps plein ou vacations",
                    mission: "Formation professionnelle et reconversion.",
                  },
                  {
                    role: "Orientation et accompagnement",
                    number: "2 à 4",
                    status: "Temps plein",
                    mission: "Parcours, stages, emploi et reconversion.",
                  },
                  {
                    role: "Administration et services",
                    number: "6 à 12",
                    status: "Temps plein",
                    mission:
                      "Gestion, accueil, restauration, maintenance et logistique.",
                  },
                ],
              },
            ],
          },

          {
            type: "encadre",

            title: "Rôle des intervenants extérieurs",

            content: [
              {
                paragraphs: [
                  "Les professionnels et habitants peuvent intervenir ponctuellement ou régulièrement, mais toujours dans un cadre défini par l’équipe pédagogique.",

                  "Les compétences pédagogiques, la sécurité et la protection des mineurs doivent rester prioritaires.",
                ],
              },

              {
                items: [
                  "Convention précisant les objectifs.",
                  "Vérification des qualifications nécessaires.",
                  "Présence d’un professionnel éducatif.",
                  "Préparation et évaluation de l’intervention.",
                  "Respect des règles de sécurité.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    8. LOCAUX ET ÉQUIPEMENTS
    ======================================================
    */

      {
        id: "locaux-equipements",
        title: "Locaux et équipements",

        blocks: [
          {
            type: "scenarioNeeds",

            title: "Besoins selon la taille du territoire",

            scenarios: [
              {
                id: "petit-territoire",
                title: "Petit territoire",

                context:
                  "École de proximité et activités partagées dans des bâtiments existants.",

                realEstate: [
                  {
                    item: "Salles de classe",
                    need: "2 à 4 salles de 50 à 70 m²",
                  },
                  {
                    item: "Bibliothèque et ressources",
                    need: "50 à 100 m²",
                  },
                  {
                    item: "Salle polyvalente",
                    need: "80 à 150 m²",
                  },
                  {
                    item: "Atelier pédagogique",
                    need: "50 à 100 m²",
                  },
                  {
                    item: "Restauration et services",
                    need: "100 à 200 m²",
                  },
                  {
                    item: "Espaces extérieurs",
                    need: "1 000 à 3 000 m²",
                  },
                ],

                equipment: [
                  {
                    item: "Mobilier pédagogique",
                    need: "Tables modulables, rangements, tableaux et espaces de lecture.",
                  },
                  {
                    item: "Numérique",
                    need: "Postes partagés, réseau sécurisé et outils audiovisuels.",
                  },
                  {
                    item: "Atelier",
                    need: "Outillage léger, sciences, arts et fabrication simple.",
                  },
                  {
                    item: "Extérieurs",
                    need: "Jardin, espaces sportifs et zones d’observation.",
                  },
                ],
              },

              {
                id: "territoire-intermediaire",
                title: "Territoire intermédiaire",

                context:
                  "Établissement complet avec ateliers, formations et espaces ouverts au territoire.",

                realEstate: [
                  {
                    item: "Salles d’enseignement",
                    need: "8 à 14 salles",
                  },
                  {
                    item: "Bibliothèque et centre de ressources",
                    need: "150 à 300 m²",
                  },
                  {
                    item: "Ateliers spécialisés",
                    need: "250 à 500 m²",
                  },
                  {
                    item: "Salles de formation",
                    need: "150 à 300 m²",
                  },
                  {
                    item: "Restauration et fonctions communes",
                    need: "300 à 600 m²",
                  },
                  {
                    item: "Espaces extérieurs",
                    need: "3 000 à 8 000 m²",
                  },
                ],

                equipment: [
                  {
                    item: "Matériel pédagogique",
                    need: "Équipement complet des classes et espaces collaboratifs.",
                  },
                  {
                    item: "Plateaux techniques",
                    need: "Sciences, numérique, cuisine, arts et fabrication.",
                  },
                  {
                    item: "Numérique",
                    need: "Réseau, serveurs, postes, logiciels et cybersécurité.",
                  },
                  {
                    item: "Restauration",
                    need: "Cuisine, salle à manger et équipements adaptés.",
                  },
                ],
              },

              {
                id: "territoire-etendu",
                title: "Territoire étendu",

                context:
                  "Campus territorial ou réseau de plusieurs sites coordonnés.",

                realEstate: [
                  {
                    item: "Salles et établissements",
                    need: "Plusieurs bâtiments ou sites associés",
                  },
                  {
                    item: "Centre de formation",
                    need: "500 à 1 000 m²",
                  },
                  {
                    item: "Plateaux techniques",
                    need: "700 à 1 500 m²",
                  },
                  {
                    item: "Centre de ressources",
                    need: "300 à 600 m²",
                  },
                  {
                    item: "Administration et accompagnement",
                    need: "250 à 500 m²",
                  },
                  {
                    item: "Espaces extérieurs",
                    need: "8 000 à 20 000 m² ou sites répartis",
                  },
                ],

                equipment: [
                  {
                    item: "Plateaux professionnels",
                    need: "Équipements adaptés aux filières de formation retenues.",
                  },
                  {
                    item: "Système numérique",
                    need: "Gestion multisite, ressources partagées et visioconférence.",
                  },
                  {
                    item: "Mobilité",
                    need: "Navettes ou véhicules pour relier les sites et partenaires.",
                  },
                  {
                    item: "Recherche et évaluation",
                    need: "Outils de suivi, documentation et production de ressources.",
                  },
                ],
              },
            ],

            note: "Les bâtiments scolaires existants, tiers-lieux, bibliothèques et équipements sportifs peuvent réduire fortement les besoins immobiliers.",
          },
        ],
      },

      /*
    ======================================================
    9. GOUVERNANCE
    ======================================================
    */

      {
        id: "gouvernance",
        title: "Gouvernance",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "La gouvernance doit distinguer clairement les responsabilités pédagogiques, administratives et territoriales.",

              "Les enseignants et responsables éducatifs conservent la maîtrise des apprentissages. Les collectivités, associations, familles et professionnels participent aux orientations et aux projets sans intervenir dans les décisions pédagogiques quotidiennes.",
            ],
          },

          {
            type: "cards",

            title: "Acteurs de la gouvernance",

            items: [
              {
                title: "Équipe éducative",
                content:
                  "Responsable des contenus, des méthodes et du suivi des élèves.",
              },
              {
                title: "Collectivités",
                content:
                  "Responsables des locaux, services et orientations territoriales.",
              },
              {
                title: "Familles et usagers",
                content:
                  "Participation aux projets, aux retours d’expérience et à la vie du lieu.",
              },
              {
                title: "Professionnels et associations",
                content:
                  "Partenaires des projets, formations et activités de transmission.",
              },
              {
                title: "Organismes de formation",
                content:
                  "Responsables des certifications et parcours professionnels.",
              },
            ],
          },

          {
            type: "list",

            title: "Principes de gouvernance",

            items: [
              "Autonomie pédagogique des professionnels.",
              "Responsabilités administratives clairement identifiées.",
              "Participation des familles sans confusion des rôles.",
              "Conventions avec les partenaires extérieurs.",
              "Évaluation régulière des projets.",
              "Transparence sur les coûts et les résultats.",
              "Protection des données et des mineurs.",
              "Médiation en cas de conflit.",
            ],
          },
        ],
      },

      /*
    ======================================================
    10. MODÈLE ÉCONOMIQUE
    ======================================================
    */

      {
        id: "modele-economique",
        title: "Modèle économique",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Le financement de la partie scolaire relève principalement des cadres publics habituels. Les activités de formation professionnelle, de reconversion, d’accueil et de transmission peuvent mobiliser d’autres financements.",

              "Le partage des locaux et équipements permet de réduire les coûts lorsque les usages scolaires, professionnels et associatifs sont organisés sur des horaires différents.",
            ],
          },

          {
            type: "cards",

            title: "Sources de financement et de revenus",

            items: [
              {
                title: "Financement public scolaire",
                content:
                  "Enseignement, fonctionnement, locaux et services selon les compétences institutionnelles.",
              },
              {
                title: "Formation professionnelle",
                content:
                  "Financements liés aux parcours, certifications et organismes compétents.",
              },
              {
                title: "Apprentissage",
                content:
                  "Financement des formations en alternance et des plateaux techniques.",
              },
              {
                title: "Reconversion",
                content:
                  "Parcours financés par les dispositifs d’emploi et de formation.",
              },
              {
                title: "Mise à disposition d’espaces",
                content:
                  "Accueil de formations, conférences et événements compatibles avec la mission.",
              },
              {
                title: "Partenariats",
                content:
                  "Contributions de collectivités, fondations, entreprises et associations.",
              },
              {
                title: "Mutualisation",
                content:
                  "Partage des équipements, fonctions administratives et services.",
              },
            ],
          },

          {
            type: "list",

            title: "Principales charges",

            items: [
              "Salaires et charges des équipes.",
              "Entretien et fonctionnement des bâtiments.",
              "Restauration scolaire.",
              "Matériel pédagogique.",
              "Équipements techniques.",
              "Numérique et cybersécurité.",
              "Transport et mobilité.",
              "Intervenants spécialisés.",
              "Formation continue des équipes.",
              "Assurances et conformité.",
              "Administration et coordination.",
            ],
          },

          {
            type: "encadre",

            title: "Une mutualisation à encadrer",

            content: [
              {
                paragraphs: [
                  "Le partage des bâtiments et équipements peut réduire certains coûts, mais il nécessite une organisation rigoureuse des horaires, des responsabilités et de la maintenance.",

                  "Les activités ouvertes au public ne doivent pas perturber le fonctionnement scolaire.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    11. CHIFFRAGE
    ======================================================
    */

      {
        id: "chiffrage",
        title: "Chiffrage",

        blocks: [
          {
            type: "scenarioBudget",

            title: "Chiffrage par scénario",

            scenarios: [
              {
                id: "petit-territoire",
                title: "Petit territoire",

                assumptions: [
                  "Réutilisation d’une école ou d’un bâtiment existant.",
                  "Deux à quatre classes ou groupes.",
                  "Pôle de transmission léger.",
                  "Ateliers mutualisés avec les structures locales.",
                  "Déploiement progressif.",
                ],

                investment: [
                  {
                    item: "Travaux et mise aux normes",
                    low: "200 000 €",
                    high: "500 000 €",
                  },
                  {
                    item: "Mobilier pédagogique",
                    low: "50 000 €",
                    high: "100 000 €",
                  },
                  {
                    item: "Numérique",
                    low: "40 000 €",
                    high: "90 000 €",
                  },
                  {
                    item: "Ateliers et équipements",
                    low: "60 000 €",
                    high: "150 000 €",
                  },
                  {
                    item: "Espaces extérieurs",
                    low: "30 000 €",
                    high: "100 000 €",
                  },
                  {
                    item: "Fonds de lancement",
                    low: "60 000 €",
                    high: "120 000 €",
                  },
                ],

                totalInvestment: {
                  low: "440 000 €",
                  high: "1 060 000 €",
                },

                annualOperatingCosts: {
                  low: "350 000 €",
                  high: "700 000 €",
                },

                annualRevenueTarget: {
                  low: "50 000 €",
                  high: "150 000 €",
                },

                jobs: {
                  low: "5",
                  high: "10",
                },

                learners: {
                  low: "30",
                  high: "80",
                },

                note: "Les recettes propres ne financent qu’une partie du fonctionnement ; l’enseignement scolaire reste principalement financé par les dispositifs publics.",
              },

              {
                id: "territoire-intermediaire",
                title: "Territoire intermédiaire",

                assumptions: [
                  "Établissement complet ou réseau éducatif structuré.",
                  "Plusieurs classes et ateliers.",
                  "Formations professionnelles et reconversion.",
                  "Fonctions administratives mutualisées.",
                  "Partenariats réguliers avec les acteurs locaux.",
                ],

                investment: [
                  {
                    item: "Immobilier et rénovation",
                    low: "800 000 €",
                    high: "2 000 000 €",
                  },
                  {
                    item: "Mobilier et salles",
                    low: "150 000 €",
                    high: "300 000 €",
                  },
                  {
                    item: "Numérique",
                    low: "100 000 €",
                    high: "220 000 €",
                  },
                  {
                    item: "Ateliers et plateaux techniques",
                    low: "250 000 €",
                    high: "600 000 €",
                  },
                  {
                    item: "Restauration et services",
                    low: "150 000 €",
                    high: "400 000 €",
                  },
                  {
                    item: "Espaces extérieurs",
                    low: "100 000 €",
                    high: "250 000 €",
                  },
                  {
                    item: "Fonds de lancement",
                    low: "150 000 €",
                    high: "300 000 €",
                  },
                ],

                totalInvestment: {
                  low: "1 700 000 €",
                  high: "4 070 000 €",
                },

                annualOperatingCosts: {
                  low: "1 000 000 €",
                  high: "2 200 000 €",
                },

                annualRevenueTarget: {
                  low: "200 000 €",
                  high: "600 000 €",
                },

                jobs: {
                  low: "15",
                  high: "30",
                },

                learners: {
                  low: "100",
                  high: "300",
                },

                note: "Les recettes proviennent principalement de la formation professionnelle, de l’apprentissage et des activités complémentaires.",
              },

              {
                id: "territoire-etendu",
                title: "Territoire étendu",

                assumptions: [
                  "Campus territorial ou réseau multisite.",
                  "École, formation professionnelle et reconversion.",
                  "Plateaux techniques spécialisés.",
                  "Centre de ressources et accompagnement.",
                  "Partenariats institutionnels importants.",
                ],

                investment: [
                  {
                    item: "Immobilier et sites",
                    low: "2 500 000 €",
                    high: "6 000 000 €",
                  },
                  {
                    item: "Mobilier et aménagements",
                    low: "300 000 €",
                    high: "700 000 €",
                  },
                  {
                    item: "Numérique et réseau multisite",
                    low: "250 000 €",
                    high: "600 000 €",
                  },
                  {
                    item: "Plateaux techniques",
                    low: "700 000 €",
                    high: "1 800 000 €",
                  },
                  {
                    item: "Restauration et services",
                    low: "400 000 €",
                    high: "1 000 000 €",
                  },
                  {
                    item: "Mobilité et logistique",
                    low: "200 000 €",
                    high: "500 000 €",
                  },
                  {
                    item: "Fonds de lancement",
                    low: "300 000 €",
                    high: "600 000 €",
                  },
                ],

                totalInvestment: {
                  low: "4 650 000 €",
                  high: "11 200 000 €",
                },

                annualOperatingCosts: {
                  low: "2 500 000 €",
                  high: "5 500 000 €",
                },

                annualRevenueTarget: {
                  low: "600 000 €",
                  high: "1 800 000 €",
                },

                jobs: {
                  low: "35",
                  high: "70",
                },

                learners: {
                  low: "300",
                  high: "1 000",
                },

                note: "Le financement associe enseignement public, formation professionnelle, apprentissage, reconversion et mutualisation territoriale.",
              },
            ],

            note: "Ces montants sont des hypothèses CAP2032. Ils doivent être recalculés selon les bâtiments, les effectifs, les équipements existants et les compétences institutionnelles.",
          },

          {
            type: "encadre",

            title: "Lecture des hypothèses",

            content: [
              {
                subtitle: "Les recettes propres ne financent pas toute l’école",

                paragraphs: [
                  "La partie scolaire relève d’un service d’intérêt général et ne doit pas être évaluée comme une entreprise commerciale.",

                  "Les recettes concernent principalement la formation professionnelle, l’apprentissage, la reconversion et certaines activités complémentaires.",
                ],
              },

              {
                subtitle: "L’existant réduit fortement l’investissement",

                paragraphs: [
                  "La réutilisation d’une école, d’un centre de formation, d’une bibliothèque ou d’un tiers-lieu peut éviter la création d’un nouveau bâtiment.",
                ],
              },

              {
                subtitle: "Les plateaux techniques doivent être mutualisés",

                paragraphs: [
                  "Les équipements spécialisés peuvent être partagés avec l’atelier technique, l’exploitation agricole ou les établissements professionnels voisins.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    12. DÉPLOIEMENT
    ======================================================
    */

      {
        id: "deploiement",
        title: "Déploiement",

        blocks: [
          {
            type: "timeline",

            title: "Calendrier indicatif",

            items: [
              {
                phase: "Phase 1",
                duration: "3 à 6 mois",
                title: "Diagnostic éducatif",

                content:
                  "Identifier les effectifs, les besoins, les structures, les locaux et les compétences disponibles.",
              },

              {
                phase: "Phase 2",
                duration: "6 à 12 mois",
                title: "Préfiguration pédagogique",

                content:
                  "Définir les groupes, les activités, les partenaires et les responsabilités.",
              },

              {
                phase: "Phase 3",
                duration: "6 à 12 mois",
                title: "Cadre juridique et financement",

                content:
                  "Sécuriser les autorisations, les financements, les locaux et les conventions.",
              },

              {
                phase: "Phase 4",
                duration: "6 à 18 mois",
                title: "Travaux et recrutement",

                content:
                  "Adapter les bâtiments, installer les équipements et constituer l’équipe.",
              },

              {
                phase: "Phase 5",
                duration: "1 à 2 ans",
                title: "Lancement progressif",

                content:
                  "Démarrer les premières classes, projets et formations.",
              },

              {
                phase: "Phase 6",
                duration: "3 à 5 ans",
                title: "Évaluation et extension",

                content:
                  "Mesurer les résultats, corriger l’organisation et développer les fonctions pertinentes.",
              },
            ],
          },

          {
            type: "list",

            title: "Règles de déploiement",

            items: [
              "Commencer par les besoins les mieux identifiés.",
              "Associer les enseignants dès la conception.",
              "Ne pas multiplier les projets simultanément.",
              "Tester avant d’investir dans de nouveaux locaux.",
              "Prévoir du temps de coordination.",
              "Évaluer les apprentissages fondamentaux.",
              "Séparer les usages scolaires et publics.",
              "Former les équipes aux nouvelles méthodes.",
            ],
          },
        ],
      },

      /*
    ======================================================
    13. RISQUES ET CONDITIONS DE RÉUSSITE
    ======================================================
    */

      {
        id: "risques-conditions",
        title: "Risques et conditions de réussite",

        blocks: [
          {
            type: "risks",

            title: "Principaux risques",

            items: [
              {
                risk: "Affaiblissement des apprentissages fondamentaux",
                level: "Élevé",
                response:
                  "Maintenir des temps structurés et évaluer régulièrement les acquis.",
              },

              {
                risk: "Surcharge des enseignants",
                level: "Élevé",
                response:
                  "Créer une fonction de coordination et limiter le nombre de projets.",
              },

              {
                risk: "Confusion des responsabilités",
                level: "Élevé",
                response:
                  "Définir clairement les rôles des enseignants, familles et intervenants.",
              },

              {
                risk: "Intervenants insuffisamment préparés",
                level: "Moyen",
                response:
                  "Préparer les contenus, vérifier les compétences et encadrer les activités.",
              },

              {
                risk: "Investissement immobilier excessif",
                level: "Élevé",
                response:
                  "Réutiliser les bâtiments et déployer progressivement.",
              },

              {
                risk: "Manque d’effectifs",
                level: "Élevé",
                response:
                  "Dimensionner le projet sur le bassin de vie et organiser un réseau.",
              },

              {
                risk: "Dépendance à quelques partenaires",
                level: "Moyen",
                response:
                  "Diversifier les intervenants et formaliser les conventions.",
              },

              {
                risk: "Usage excessif du numérique",
                level: "Moyen",
                response:
                  "Définir une doctrine d’usage raisonné et protéger les données.",
              },

              {
                risk: "Formation sans débouchés",
                level: "Élevé",
                response:
                  "Construire les parcours avec les employeurs et structures locales.",
              },

              {
                risk: "Complexité administrative",
                level: "Élevé",
                response:
                  "Clarifier le portage juridique et les responsabilités institutionnelles.",
              },
            ],
          },

          {
            type: "encadre",

            title: "Conditions essentielles de réussite",

            content: [
              {
                items: [
                  "Une équipe éducative stable et expérimentée.",
                  "Un projet pédagogique clairement formalisé.",
                  "Des apprentissages fondamentaux prioritaires.",
                  "Une coordination territoriale dédiée.",
                  "Des partenariats encadrés.",
                  "Des locaux adaptés et sûrs.",
                  "Une montée en charge progressive.",
                  "Une formation continue des équipes.",
                  "Une évaluation indépendante.",
                  "Une association réelle des familles et usagers.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    14. ARTICULATION
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
                  "Découverte des métiers, fabrication, réparation, apprentissage et reconversion.",

                url: "/membre/prototype/1",
              },

              {
                label: "Exploitation agricole polyculture-élevage",

                content:
                  "Sciences du vivant, alimentation, agriculture, transformation et expérimentation.",

                url: "/membre/prototype/2",
              },

              {
                label: "Village SCIC territorial",

                content:
                  "Mutualisation des locaux, des services, de la gouvernance et des relations territoriales.",

                url: "/membre/prototype/4",
              },
            ],
          },

          {
            type: "encadre",

            title: "Coopérations extérieures",

            content: [
              {
                items: [
                  "Écoles, collèges et lycées.",
                  "Lycées professionnels et agricoles.",
                  "Centres de formation.",
                  "Universités et laboratoires de recherche.",
                  "Entreprises et artisans.",
                  "Associations culturelles et sportives.",
                  "Bibliothèques et tiers-lieux.",
                  "Structures sociales et médico-sociales.",
                  "Collectivités et services publics.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    15. INDICATEURS DE SUIVI
    ======================================================
    */

      {
        id: "indicateurs-suivi",
        title: "Indicateurs de suivi",

        blocks: [
          {
            type: "indicators",

            title: "Indicateurs pédagogiques",

            items: [
              {
                indicator: "Maîtrise de la lecture et de l’écriture",
                target: "Progression conforme ou supérieure aux objectifs",
                frequency: "Trimestrielle",
              },
              {
                indicator: "Compétences mathématiques",
                target: "Progression par niveau",
                frequency: "Trimestrielle",
              },
              {
                indicator: "Autonomie dans le travail",
                target: "Progression documentée",
                frequency: "Semestrielle",
              },
              {
                indicator: "Capacité de coopération",
                target: "Amélioration observée",
                frequency: "Semestrielle",
              },
              {
                indicator: "Décrochage et absentéisme",
                target: "Réduction",
                frequency: "Mensuelle",
              },
            ],
          },

          {
            type: "indicators",

            title: "Indicateurs de formation et d’orientation",

            items: [
              {
                indicator: "Personnes formées",
                target: "Conforme aux capacités du module",
                frequency: "Annuelle",
              },
              {
                indicator: "Taux de réussite aux certifications",
                target: "Progression annuelle",
                frequency: "Annuelle",
              },
              {
                indicator: "Accès à l’emploi ou à la formation",
                target: "Suivi des parcours durables",
                frequency: "Semestrielle",
              },
              {
                indicator: "Stages et immersions",
                target: "Diversification des métiers découverts",
                frequency: "Annuelle",
              },
              {
                indicator: "Employeurs partenaires",
                target: "Développement du réseau",
                frequency: "Annuelle",
              },
            ],
          },

          {
            type: "indicators",

            title: "Indicateurs territoriaux et sociaux",

            items: [
              {
                indicator: "Élèves accueillis localement",
                target: "Maintien ou progression",
                frequency: "Annuelle",
              },
              {
                indicator: "Intervenants du territoire",
                target: "Diversification maîtrisée",
                frequency: "Annuelle",
              },
              {
                indicator: "Projets intergénérationnels",
                target: "Développement progressif",
                frequency: "Annuelle",
              },
              {
                indicator: "Satisfaction des familles",
                target: "Niveau élevé et stable",
                frequency: "Annuelle",
              },
              {
                indicator: "Utilisation des locaux",
                target: "Mutualisation sans perturbation scolaire",
                frequency: "Trimestrielle",
              },
            ],
          },

          {
            type: "indicators",

            title: "Indicateurs économiques",

            items: [
              {
                indicator: "Coût annuel par apprenant",
                target: "Suivi par scénario",
                frequency: "Annuelle",
              },
              {
                indicator: "Coût des projets",
                target: "Respect des budgets",
                frequency: "Trimestrielle",
              },
              {
                indicator: "Part des équipements mutualisés",
                target: "Progression sans baisse de qualité",
                frequency: "Annuelle",
              },
              {
                indicator: "Financements de formation mobilisés",
                target: "Diversification",
                frequency: "Annuelle",
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    16. CONCLUSION
    ======================================================
    */

      {
        id: "conclusion",
        title: "Conclusion",

        blocks: [
          {
            type: "conclusion",

            content:
              "L’École multiniveaux et pôle de transmission doit être conçue comme une architecture éducative adaptable et non comme un modèle scolaire figé. Sa réussite repose sur la solidité des apprentissages fondamentaux, la qualité de l’équipe éducative, la progressivité des projets et la clarté des responsabilités. Elle peut fonctionner comme une école de proximité, compléter des établissements existants ou constituer le pôle éducatif et de formation d’un Village SCIC territorial.",
          },
        ],
      },
    ],

    downloads: [
      {
        label: "Télécharger le prototype détaillé en PDF",
        url: "/download/prototype/3",
        format: "PDF",
      },
    ],

    navigation: {
      previous: {
        label: "Exploitation agricole polyculture-élevage",
        url: "/membres/prototype/2",
      },

      list: {
        label: "Liste des prototypes",
        url: "/espace-membre#prototypes",
      },

      next: {
        label: "Village SCIC territorial",
        url: "/membres/prototype/4",
      },
    },
  },

  /*
========================================================
MODULE MEMBRE 4
VILLAGE SCIC TERRITORIAL
========================================================
*/

  4: {
    slug: "village-scic-territorial",

    title: "Village SCIC territorial",

    image: "/action/module4.png",

    subtitle:
      "Architecture territoriale, gouvernance et modèle économique consolidé.",

    intro: `
Le Village SCIC territorial constitue le module d’intégration de CAP2032.

Il peut être conçu comme un projet global réunissant dès l’origine l’Atelier technique territorial, l’Exploitation agricole polyculture-élevage, l’École multiniveaux et les fonctions communes nécessaires à leur fonctionnement.

Il peut également relier des structures déjà présentes sans les absorber : exploitations agricoles, ressourceries, entreprises, établissements de formation, associations, tiers-lieux, services publics ou équipements collectifs.

Enfin, il peut suivre une trajectoire hybride : organiser d’abord les coopérations entre les acteurs existants, puis créer progressivement les fonctions manquantes.

Le Village SCIC peut donc être un lieu unique, un réseau territorial réparti sur plusieurs sites ou une combinaison des deux. Son dimensionnement dépend du bassin de vie, des ressources existantes, des besoins non couverts et du niveau de mutualisation recherché.
  `,

    structure: [
      "Diagnostic territorial",
      "Objectifs opérationnels",
      "Méthode d’assemblage",
      "Les trois scénarios de déploiement",
      "Organisation générale",
      "Gouvernance de la SCIC",
      "Flux entre les modules",
      "Besoins immobiliers et infrastructures",
      "Modèle économique consolidé",
      "Chiffrage",
      "Financement",
      "Calendrier de déploiement",
      "Risques et conditions de réussite",
      "Impacts et indicateurs",
      "Conclusion",
    ],

    sections: [
      /*
    ======================================================
    1. DIAGNOSTIC TERRITORIAL
    ======================================================
    */

      {
        id: "diagnostic-territorial",
        title: "Diagnostic territorial",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "De nombreux territoires disposent déjà d’activités économiques, d’associations, d’exploitations agricoles, d’établissements scolaires, de services publics, de bâtiments disponibles et de compétences techniques.",

              "Ces ressources restent cependant souvent dispersées. Elles fonctionnent selon leurs propres contraintes, disposent de peu d’outils de coordination et mutualisent rarement leurs équipements, leurs achats, leur logistique ou leurs besoins de formation.",

              "Dans le même temps, certains besoins demeurent insuffisamment couverts : réparation, transformation alimentaire, formation, mobilité, logement, services de proximité, accompagnement des publics fragiles ou accès à des équipements professionnels.",

              "Le diagnostic doit donc identifier simultanément ce qui existe, ce qui fonctionne, ce qui pourrait être relié et ce qui manque réellement.",
            ],
          },

          {
            type: "list",

            title: "Éléments à cartographier",

            items: [
              "Entreprises, artisans et activités productives.",
              "Exploitations agricoles et outils de transformation.",
              "Établissements scolaires et centres de formation.",
              "Associations, coopératives et structures d’insertion.",
              "Services publics et équipements collectifs.",
              "Bâtiments vacants ou sous-utilisés.",
              "Foncier agricole, économique et constructible.",
              "Compétences professionnelles disponibles.",
              "Besoins de recrutement et de formation.",
              "Flux de déchets, matières et équipements.",
              "Achats des collectivités et établissements publics.",
              "Besoins alimentaires de la restauration collective.",
              "Ressources énergétiques et capacités de production locale.",
              "Mobilité, logement et accès aux services.",
              "Épargne locale et acteurs susceptibles d’investir.",
            ],
          },

          {
            type: "encadre",

            title: "Le diagnostic ne doit pas partir d’un modèle préconçu",

            content: [
              {
                subtitle: "Identifier les ressources existantes",

                paragraphs: [
                  "La première étape consiste à reconnaître les acteurs, compétences et infrastructures déjà présents.",

                  "Une ressourcerie, une école, un lycée agricole, une ferme, un atelier municipal ou un tiers-lieu peuvent constituer les premières briques du système.",
                ],
              },

              {
                subtitle: "Identifier les relations possibles",

                paragraphs: [
                  "Deux structures peuvent disposer de ressources complémentaires sans avoir besoin de fusionner.",

                  "Une coopération contractuelle, un équipement partagé ou une commande commune peuvent suffire à créer une première interdépendance productive.",
                ],
              },

              {
                subtitle: "Identifier les fonctions manquantes",

                paragraphs: [
                  "La création d’une nouvelle activité n’intervient qu’après avoir vérifié que le besoin n’est pas déjà couvert ou qu’il ne peut pas l’être par une structure existante.",
                ],
              },
            ],
          },

          {
            type: "quote",

            content:
              "Le Village SCIC ne commence pas par la construction d’un lieu, mais par la compréhension du territoire.",
          },
        ],
      },

      /*
    ======================================================
    2. OBJECTIFS OPÉRATIONNELS
    ======================================================
    */

      {
        id: "objectifs-operationnels",
        title: "Objectifs opérationnels",

        blocks: [
          {
            type: "cards",

            items: [
              {
                title: "Relier",

                content:
                  "Organiser des coopérations durables entre les acteurs présents.",
              },

              {
                title: "Compléter",

                content:
                  "Créer uniquement les fonctions qui manquent au territoire.",
              },

              {
                title: "Mutualiser",

                content:
                  "Partager les équipements, les locaux, les achats et certaines fonctions.",
              },

              {
                title: "Produire",

                content:
                  "Développer des activités locales répondant à des besoins réels.",
              },

              {
                title: "Former",

                content:
                  "Relier les parcours éducatifs, professionnels et les emplois disponibles.",
              },

              {
                title: "Sécuriser",

                content:
                  "Réduire certaines dépendances et diversifier les fournisseurs et débouchés.",
              },

              {
                title: "Financer",

                content:
                  "Mobiliser l’épargne locale et les financements publics ou privés.",
              },

              {
                title: "Gouverner",

                content:
                  "Associer les acteurs dans un cadre collectif sans diluer les responsabilités.",
              },
            ],
          },

          {
            type: "resume",

            title: "Résultats recherchés",

            items: [
              "Créer ou consolider des emplois locaux.",
              "Augmenter la valeur produite et conservée sur le territoire.",
              "Réduire les coûts de certaines fonctions mutualisées.",
              "Améliorer la coordination entre production, formation et services.",
              "Faciliter les parcours d’insertion et de reconversion.",
              "Mobiliser les bâtiments et équipements sous-utilisés.",
              "Renforcer les filières alimentaires et techniques locales.",
              "Améliorer la robustesse économique et sociale du bassin de vie.",
            ],
          },
        ],
      },

      /*
    ======================================================
    3. MÉTHODE D’ASSEMBLAGE
    ======================================================
    */

      {
        id: "methode-assemblage",
        title: "Méthode d’assemblage",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "La méthode d’assemblage permet de passer d’une juxtaposition d’initiatives à un écosystème territorial organisé.",

              "Elle ne cherche pas à réunir juridiquement tous les acteurs dans une seule structure. Elle distingue les fonctions qui nécessitent une gouvernance commune, celles qui peuvent être contractualisées et celles qui doivent rester autonomes.",

              "Le processus doit être progressif. Chaque nouvelle coopération ou activité est évaluée avant d’étendre le périmètre.",
            ],
          },

          {
            type: "timeline",

            title: "Les étapes de la méthode",

            items: [
              {
                phase: "Étape 1",
                duration: "Diagnostic",
                title: "Cartographier",

                content:
                  "Identifier les ressources, les besoins, les flux, les acteurs et les bâtiments disponibles.",
              },

              {
                phase: "Étape 2",
                duration: "Priorisation",
                title: "Choisir les besoins structurants",

                content:
                  "Repérer les fonctions dont l’absence fragilise plusieurs acteurs simultanément.",
              },

              {
                phase: "Étape 3",
                duration: "Coopération",
                title: "Relier les structures",

                content:
                  "Tester des achats communs, contrats, formations, équipements ou projets partagés.",
              },

              {
                phase: "Étape 4",
                duration: "Préfiguration",
                title: "Créer une gouvernance légère",

                content:
                  "Installer une structure de coordination et définir les responsabilités.",
              },

              {
                phase: "Étape 5",
                duration: "Investissement",
                title: "Créer les fonctions manquantes",

                content:
                  "Déployer les nouvelles activités seulement lorsque les débouchés et financements sont sécurisés.",
              },

              {
                phase: "Étape 6",
                duration: "Évaluation",
                title: "Mesurer et ajuster",

                content:
                  "Suivre les résultats économiques, sociaux, territoriaux et environnementaux.",
              },
            ],
          },

          {
            type: "list",

            title: "Principes d’assemblage",

            items: [
              "Relier avant de recréer.",
              "Mutualiser uniquement ce qui apporte un avantage réel.",
              "Maintenir l’autonomie opérationnelle des modules.",
              "Formaliser les engagements de chaque partenaire.",
              "Séparer les comptes des différentes activités.",
              "Évaluer chaque nouvel investissement.",
              "Prévoir des règles d’entrée et de sortie.",
              "Construire la confiance par des réalisations concrètes.",
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
            type: "deploymentModes",

            title: "Trois modes de constitution",

            modes: [
              {
                id: "projet-global",
                title: "Scénario 1 — Créer un projet global",

                description:
                  "Le territoire dispose d’un site, d’un foncier et d’un groupe d’acteurs permettant de concevoir dès l’origine un ensemble cohérent.",

                suitableWhen: [
                  "Peu de structures existantes peuvent remplir les fonctions prévues.",
                  "Un site important est disponible.",
                  "Les financements initiaux peuvent être mobilisés.",
                  "Les besoins et débouchés sont clairement identifiés.",
                ],

                components: [
                  "Atelier technique territorial.",
                  "Exploitation agricole polyculture-élevage.",
                  "École multiniveaux et pôle de transmission.",
                  "Maison commune.",
                  "Locaux administratifs.",
                  "Espaces de formation.",
                  "Logements éventuels.",
                  "Énergie et infrastructures.",
                ],

                strengths: [
                  "Cohérence conçue dès l’origine.",
                  "Mutualisation immobilière importante.",
                  "Identité commune forte.",
                  "Flux internes plus faciles à organiser.",
                ],

                risks: [
                  "Investissement initial élevé.",
                  "Complexité de lancement.",
                  "Risque de surdimensionnement.",
                  "Temps long avant la pleine activité.",
                ],
              },

              {
                id: "reseau-existant",
                title: "Scénario 2 — Relier les structures existantes",

                description:
                  "Le territoire dispose déjà de la plupart des fonctions. Le projet organise la coopération sans créer un site nouveau important.",

                suitableWhen: [
                  "Les acteurs sont nombreux mais peu coordonnés.",
                  "Les bâtiments et équipements existent déjà.",
                  "Les investissements disponibles sont limités.",
                  "Les premières coopérations peuvent être rapidement testées.",
                ],

                components: [
                  "Convention de coopération.",
                  "Coordination commune.",
                  "Achats groupés.",
                  "Réponse collective aux marchés.",
                  "Logistique partagée.",
                  "Formation mutualisée.",
                  "Communication commune.",
                ],

                strengths: [
                  "Investissement limité.",
                  "Démarrage plus rapide.",
                  "Valorisation des ressources existantes.",
                  "Respect de l’autonomie des structures.",
                ],

                risks: [
                  "Gouvernance plus diffuse.",
                  "Engagement inégal des partenaires.",
                  "Équipements dispersés.",
                  "Difficulté à construire une identité commune.",
                ],
              },

              {
                id: "scenario-hybride",
                title: "Scénario 3 — Relier puis compléter",

                description:
                  "Le territoire dispose de plusieurs briques, mais certaines fonctions restent absentes ou insuffisantes.",

                suitableWhen: [
                  "Une partie des acteurs est déjà organisée.",
                  "Certains maillons stratégiques manquent.",
                  "Le projet souhaite limiter les investissements initiaux.",
                  "La trajectoire peut être construite progressivement.",
                ],

                components: [
                  "Mise en réseau des acteurs.",
                  "Fonctions administratives partagées.",
                  "Diagnostic des manques.",
                  "Création progressive d’équipements.",
                  "Intégration de nouveaux modules.",
                  "Investissements par phases.",
                ],

                strengths: [
                  "Équilibre entre rapidité et cohérence.",
                  "Investissements ajustés aux besoins.",
                  "Possibilité de tester avant de développer.",
                  "Adaptation continue au territoire.",
                ],

                risks: [
                  "Trajectoire plus longue.",
                  "Complexité de coordination.",
                  "Risque de perdre la vision d’ensemble.",
                  "Dépendance à la continuité politique.",
                ],
              },
            ],
          },

          {
            type: "matrix",

            title: "Croisement avec la taille du territoire",

            headers: [
              "Taille",
              "Projet global",
              "Réseau existant",
              "Scénario hybride",
            ],

            rows: [
              [
                "Petit territoire",
                "Un site compact réunissant deux ou trois fonctions principales.",
                "Coordination légère entre quelques structures.",
                "Réseau local complété par un atelier ou un équipement manquant.",
              ],
              [
                "Territoire intermédiaire",
                "Site structuré intégrant les trois modules.",
                "Réseau de plusieurs acteurs et équipements.",
                "Réseau existant renforcé par une plateforme ou un pôle commun.",
              ],
              [
                "Territoire étendu",
                "Plusieurs sites coordonnés dans une même architecture.",
                "Réseau territorial multisite.",
                "Constellation de pôles existants et nouveaux équipements structurants.",
              ],
            ],
          },

          {
            type: "quote",

            content:
              "Le bon scénario n’est pas le plus ambitieux, mais celui qui correspond aux ressources, aux besoins et à la capacité réelle de coopération du territoire.",
          },
        ],
      },

      /*
    ======================================================
    5. ORGANISATION GÉNÉRALE
    ======================================================
    */

      {
        id: "organisation-generale",
        title: "Organisation générale",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "L’organisation doit distinguer la coordination territoriale, les fonctions mutualisées et les activités opérationnelles.",

              "La structure commune ne doit pas gérer directement toutes les activités si cela n’apporte aucun avantage. Elle prend en charge les fonctions qu’il est pertinent de partager.",

              "Chaque module conserve une direction opérationnelle, des objectifs, une comptabilité analytique et des responsabilités propres.",
            ],
          },

          {
            type: "cards",

            title: "Niveaux d’organisation",

            items: [
              {
                title: "Coordination stratégique",

                content:
                  "Vision territoriale, partenariats, investissements et relations institutionnelles.",
              },

              {
                title: "Fonctions communes",

                content:
                  "Administration, comptabilité, achats, communication, numérique, ressources humaines et financement.",
              },

              {
                title: "Modules opérationnels",

                content:
                  "Atelier technique, exploitation agricole et pôle éducatif.",
              },

              {
                title: "Partenaires associés",

                content:
                  "Entreprises, associations et services coopérant sans être intégrés à la gestion quotidienne.",
              },

              {
                title: "Habitants et usagers",

                content:
                  "Participation au capital, à certains projets et aux orientations générales.",
              },
            ],
          },

          {
            type: "list",

            title: "Fonctions mutualisables",

            items: [
              "Comptabilité et gestion.",
              "Recherche de financements.",
              "Gestion des ressources humaines.",
              "Communication et commercialisation.",
              "Achats groupés.",
              "Réponse aux marchés publics.",
              "Logistique et véhicules.",
              "Maintenance des bâtiments.",
              "Énergie et systèmes numériques.",
              "Formation transversale.",
              "Accueil et relations avec le public.",
              "Évaluation des impacts.",
            ],
          },

          {
            type: "encadre",

            title: "Ce qui ne doit pas être inutilement centralisé",

            content: [
              {
                items: [
                  "Les décisions techniques propres à chaque métier.",
                  "La gestion quotidienne des équipes opérationnelles.",
                  "Les relations commerciales spécifiques à une activité.",
                  "Les responsabilités réglementaires propres à chaque module.",
                  "Les choix agronomiques, pédagogiques ou techniques spécialisés.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    6. GOUVERNANCE DE LA SCIC
    ======================================================
    */

      {
        id: "gouvernance-scic",
        title: "Gouvernance de la SCIC",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Le statut de Société coopérative d’intérêt collectif permet d’associer plusieurs catégories d’acteurs autour d’un projet territorial commun.",

              "La gouvernance doit garantir une représentation équilibrée tout en conservant une capacité réelle de décision.",

              "Les orientations stratégiques sont collectives. La direction exécutive reste responsable de la mise en œuvre et de la gestion quotidienne.",
            ],
          },

          {
            type: "governance",

            title: "Collèges de sociétaires possibles",

            colleges: [
              {
                title: "Salariés et professionnels",
                votingShare: "30 à 40 %",

                members: [
                  "Salariés-associés.",
                  "Responsables des modules.",
                  "Professionnels directement engagés.",
                ],

                role: "Représenter les personnes qui assurent quotidiennement les activités.",
              },

              {
                title: "Structures opérationnelles",
                votingShare: "20 à 30 %",

                members: [
                  "Exploitations agricoles.",
                  "Associations.",
                  "Coopératives.",
                  "Entreprises partenaires.",
                  "Établissements de formation.",
                ],

                role: "Représenter les organisations participant à l’écosystème.",
              },

              {
                title: "Collectivités et institutions",
                votingShare: "15 à 25 %",

                members: [
                  "Communes.",
                  "Intercommunalité.",
                  "Région.",
                  "Établissements publics.",
                ],

                role: "Garantir l’articulation avec les politiques territoriales.",
              },

              {
                title: "Habitants et usagers",
                votingShare: "10 à 20 %",

                members: [
                  "Habitants sociétaires.",
                  "Familles.",
                  "Usagers.",
                  "Bénévoles.",
                ],

                role: "Représenter les besoins et l’implication citoyenne.",
              },

              {
                title: "Partenaires financiers",
                votingShare: "5 à 15 %",

                members: [
                  "Fondations.",
                  "Investisseurs citoyens.",
                  "Financeurs solidaires.",
                  "Entreprises partenaires.",
                ],

                role: "Participer au financement sans contrôler seul la structure.",
              },
            ],

            note: "La répartition exacte doit être adaptée au projet. Aucun collège ne doit pouvoir imposer seul les décisions stratégiques.",
          },

          {
            type: "list",

            title: "Instances possibles",

            items: [
              "Assemblée générale des sociétaires.",
              "Conseil coopératif ou conseil d’administration.",
              "Comité exécutif.",
              "Comités propres à chaque module.",
              "Comité financier.",
              "Comité d’éthique et de médiation.",
              "Conseil des habitants ou usagers.",
            ],
          },

          {
            type: "encadre",

            title: "Principes de décision",

            content: [
              {
                items: [
                  "Décisions stratégiques soumises à la gouvernance collective.",
                  "Gestion quotidienne confiée à la direction.",
                  "Budgets séparés par module.",
                  "Investissements évalués selon leur utilité et leur viabilité.",
                  "Publication régulière des résultats.",
                  "Procédures de prévention des conflits d’intérêts.",
                  "Mécanismes de médiation.",
                  "Révision périodique des règles de gouvernance.",
                ],
              },
            ],
          },

          {
            type: "quote",

            content:
              "La gouvernance coopérative doit partager le pouvoir sans supprimer la responsabilité.",
          },
        ],
      },

      /*
    ======================================================
    7. FLUX ENTRE LES MODULES
    ======================================================
    */

      {
        id: "flux-modules",
        title: "Flux entre les modules",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Le Village SCIC devient réellement systémique lorsque les modules échangent des biens, des services, des compétences et des ressources.",

              "Ces flux doivent être formalisés et valorisés économiquement. Une prestation interne gratuite et non comptabilisée peut masquer le coût réel d’une activité.",
            ],
          },

          {
            type: "flows",

            title: "Principaux flux possibles",

            items: [
              {
                from: "Atelier technique",
                to: "Exploitation agricole",

                exchanges: [
                  "Maintenance du matériel.",
                  "Fabrication d’outils.",
                  "Réparation des bâtiments.",
                  "Services numériques.",
                ],
              },

              {
                from: "Exploitation agricole",
                to: "École et pôle de transmission",

                exchanges: [
                  "Produits alimentaires.",
                  "Supports pédagogiques.",
                  "Accueil de projets et formations.",
                  "Découverte des métiers.",
                ],
              },

              {
                from: "École et pôle de transmission",
                to: "Atelier technique",

                exchanges: [
                  "Apprentis et personnes en formation.",
                  "Projets pédagogiques.",
                  "Formation continue.",
                  "Documentation des pratiques.",
                ],
              },

              {
                from: "Atelier technique",
                to: "École et pôle de transmission",

                exchanges: [
                  "Entretien des équipements.",
                  "Plateaux techniques.",
                  "Intervenants professionnels.",
                  "Matériel reconditionné.",
                ],
              },

              {
                from: "Fonctions communes",
                to: "Tous les modules",

                exchanges: [
                  "Administration.",
                  "Comptabilité.",
                  "Communication.",
                  "Ressources humaines.",
                  "Financement.",
                  "Logistique.",
                ],
              },

              {
                from: "Tous les modules",
                to: "Territoire",

                exchanges: [
                  "Produits.",
                  "Services.",
                  "Emplois.",
                  "Formation.",
                  "Commandes.",
                  "Coopérations.",
                ],
              },
            ],
          },

          {
            type: "list",

            title: "Règles de gestion des flux",

            items: [
              "Définir les prestations internes.",
              "Établir des tarifs ou clés de répartition.",
              "Éviter les transferts opaques entre activités.",
              "Suivre les coûts réels.",
              "Formaliser les engagements de volumes et délais.",
              "Évaluer les économies permises par la mutualisation.",
              "Préserver la liberté de recourir à un fournisseur extérieur lorsque nécessaire.",
            ],
          },
        ],
      },

      /*
    ======================================================
    8. BESOINS IMMOBILIERS ET INFRASTRUCTURES
    ======================================================
    */

      {
        id: "besoins-immobiliers-infrastructures",
        title: "Besoins immobiliers et infrastructures",

        blocks: [
          {
            type: "scenarioNeeds",

            title: "Besoins selon la taille du territoire",

            scenarios: [
              {
                id: "petit-territoire",
                title: "Petit territoire",

                context:
                  "Projet compact ou réseau léger s’appuyant principalement sur les bâtiments existants.",

                realEstate: [
                  {
                    item: "Maison commune et administration",
                    need: "150 à 300 m²",
                  },
                  {
                    item: "Ateliers techniques",
                    need: "300 à 700 m²",
                  },
                  {
                    item: "Bâtiments agricoles et transformation",
                    need: "500 à 1 200 m²",
                  },
                  {
                    item: "École et formation",
                    need: "400 à 900 m²",
                  },
                  {
                    item: "Stockage et logistique",
                    need: "150 à 350 m²",
                  },
                  {
                    item: "Foncier mobilisé",
                    need: "10 à 40 hectares selon le volet agricole",
                  },
                ],

                equipment: [
                  {
                    item: "Énergie",
                    need: "Rénovation, production solaire et pilotage des consommations.",
                  },
                  {
                    item: "Numérique",
                    need: "Réseau partagé, serveurs, sauvegarde et gestion.",
                  },
                  {
                    item: "Mobilité",
                    need: "1 à 3 véhicules partagés.",
                  },
                  {
                    item: "Espaces communs",
                    need: "Salles de réunion, restauration et accueil.",
                  },
                ],
              },

              {
                id: "territoire-intermediaire",
                title: "Territoire intermédiaire",

                context:
                  "Site structuré ou constellation de plusieurs sites proches avec fonctions communes consolidées.",

                realEstate: [
                  {
                    item: "Maison commune et administration",
                    need: "300 à 600 m²",
                  },
                  {
                    item: "Pôle technique",
                    need: "800 à 1 500 m²",
                  },
                  {
                    item: "Pôle agricole et transformation",
                    need: "1 500 à 3 500 m²",
                  },
                  {
                    item: "Pôle éducatif",
                    need: "1 500 à 3 000 m²",
                  },
                  {
                    item: "Logistique et stockage",
                    need: "400 à 900 m²",
                  },
                  {
                    item: "Foncier mobilisé",
                    need: "30 à 120 hectares",
                  },
                ],

                equipment: [
                  {
                    item: "Énergie",
                    need: "Production locale, rénovation, stockage et récupération de chaleur.",
                  },
                  {
                    item: "Numérique",
                    need: "Infrastructure partagée, gestion des données et cybersécurité.",
                  },
                  {
                    item: "Mobilité",
                    need: "3 à 6 véhicules, navette ou solutions mutualisées.",
                  },
                  {
                    item: "Espaces collectifs",
                    need: "Restauration, accueil, salles et événements.",
                  },
                ],
              },

              {
                id: "territoire-etendu",
                title: "Territoire étendu",

                context:
                  "Réseau multisite comprenant plusieurs pôles opérationnels et une plateforme de coordination territoriale.",

                realEstate: [
                  {
                    item: "Coordination territoriale",
                    need: "500 à 1 000 m²",
                  },
                  {
                    item: "Pôles techniques",
                    need: "1 500 à 3 500 m²",
                  },
                  {
                    item: "Pôles agricoles et alimentaires",
                    need: "3 000 à 8 000 m²",
                  },
                  {
                    item: "Campus éducatif et formation",
                    need: "3 000 à 7 000 m²",
                  },
                  {
                    item: "Plateforme logistique",
                    need: "800 à 2 000 m²",
                  },
                  {
                    item: "Foncier agricole associé",
                    need: "100 à 300 hectares ou plus",
                  },
                ],

                equipment: [
                  {
                    item: "Énergie",
                    need: "Réseau de production et pilotage multisite.",
                  },
                  {
                    item: "Numérique",
                    need: "Infrastructure territoriale, services mutualisés et centre de supervision.",
                  },
                  {
                    item: "Mobilité",
                    need: "Flotte mutualisée et liaisons entre les différents sites.",
                  },
                  {
                    item: "Logistique",
                    need: "Plateforme de préparation, stockage et distribution.",
                  },
                ],
              },
            ],

            note: "Les besoins sont très différents selon qu’il s’agit d’un projet global, d’un réseau existant ou d’un scénario hybride. La priorité doit rester la réutilisation des infrastructures disponibles.",
          },

          {
            type: "encadre",

            title: "Habitat et logements",

            content: [
              {
                paragraphs: [
                  "Le logement peut être intégré au projet lorsqu’il répond à un besoin identifié : accueil de salariés, apprentis, familles, personnes âgées ou porteurs de projets.",

                  "Il ne doit pas transformer le Village SCIC en opération immobilière autonome déconnectée des activités productives.",
                ],
              },

              {
                items: [
                  "Logements temporaires pour apprentis et stagiaires.",
                  "Habitat intergénérationnel.",
                  "Logements liés à l’installation professionnelle.",
                  "Réhabilitation de bâtiments existants.",
                  "Accès organisé aux logements du parc local.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    9. MODÈLE ÉCONOMIQUE CONSOLIDÉ
    ======================================================
    */

      {
        id: "modele-economique-consolide",
        title: "Modèle économique consolidé",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Le Village SCIC n’est pas une activité économique unique. Il consolide plusieurs modules disposant chacun de leurs propres recettes, charges et investissements.",

              "La structure commune peut percevoir des contributions des modules en échange des fonctions mutualisées. Elle peut également porter certains actifs ou contrats communs.",

              "La consolidation ne doit pas masquer les difficultés d’une activité. Chaque module doit rester suivi séparément.",
            ],
          },

          {
            type: "cards",

            title: "Sources de revenus consolidées",

            items: [
              {
                title: "Activités techniques",
                content:
                  "Réparation, reconditionnement, fabrication, maintenance et bâtiment.",
              },

              {
                title: "Activités agricoles",
                content:
                  "Production, transformation, restauration collective et vente.",
              },

              {
                title: "Formation",
                content:
                  "Apprentissage, formation professionnelle et reconversion.",
              },

              {
                title: "Fonctions mutualisées",
                content:
                  "Contributions administratives, logistiques, numériques et immobilières.",
              },

              {
                title: "Prestations territoriales",
                content:
                  "Contrats avec collectivités, entreprises et établissements.",
              },

              {
                title: "Mise à disposition",
                content: "Locaux, équipements, salles et services partagés.",
              },

              {
                title: "Énergie",
                content:
                  "Économies, autoconsommation et éventuelle vente de surplus.",
              },

              {
                title: "Financements de mission",
                content:
                  "Aides liées à la formation, à l’insertion, au réemploi ou à l’expérimentation.",
              },
            ],
          },

          {
            type: "list",

            title: "Principales charges communes",

            items: [
              "Direction et coordination.",
              "Administration et comptabilité.",
              "Recherche de financements.",
              "Communication et commercialisation.",
              "Ressources humaines.",
              "Entretien des espaces communs.",
              "Systèmes numériques.",
              "Assurances.",
              "Énergie et fluides communs.",
              "Logistique partagée.",
              "Remboursement ou amortissement des investissements.",
            ],
          },

          {
            type: "encadre",

            title: "Comptabilité analytique",

            content: [
              {
                items: [
                  "Un budget propre à chaque module.",
                  "Un budget séparé pour les fonctions communes.",
                  "Des clés de répartition documentées.",
                  "Une facturation interne lorsque nécessaire.",
                  "Un suivi des investissements par activité.",
                  "Une identification claire des subventions.",
                  "Une consolidation annuelle transparente.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    10. CHIFFRAGE
    ======================================================
    */

      {
        id: "chiffrage",
        title: "Chiffrage",

        blocks: [
          {
            type: "scenarioBudget",

            title: "Chiffrage consolidé selon la taille du territoire",

            scenarios: [
              {
                id: "petit-territoire",
                title: "Petit territoire",

                assumptions: [
                  "Réutilisation importante des bâtiments existants.",
                  "Deux ou trois fonctions principales.",
                  "Équipe commune réduite.",
                  "Déploiement progressif.",
                  "Projet global compact ou scénario hybride.",
                ],

                investment: [
                  {
                    item: "Coordination et maison commune",
                    low: "150 000 €",
                    high: "400 000 €",
                  },
                  {
                    item: "Atelier technique",
                    low: "400 000 €",
                    high: "850 000 €",
                  },
                  {
                    item: "Module agricole",
                    low: "750 000 €",
                    high: "1 600 000 €",
                  },
                  {
                    item: "École et formation",
                    low: "350 000 €",
                    high: "900 000 €",
                  },
                  {
                    item: "Énergie et numérique",
                    low: "150 000 €",
                    high: "400 000 €",
                  },
                  {
                    item: "Logistique et espaces communs",
                    low: "100 000 €",
                    high: "300 000 €",
                  },
                  {
                    item: "Fonds de roulement consolidé",
                    low: "250 000 €",
                    high: "500 000 €",
                  },
                ],

                totalInvestment: {
                  low: "2 150 000 €",
                  high: "4 950 000 €",
                },

                annualOperatingCosts: {
                  low: "1 000 000 €",
                  high: "2 000 000 €",
                },

                annualRevenueTarget: {
                  low: "800 000 €",
                  high: "1 800 000 €",
                },

                jobs: {
                  low: "18",
                  high: "35",
                },

                breakEven:
                  "Équilibre consolidé envisageable entre la quatrième et la septième année selon la part de financement public des fonctions éducatives.",
              },

              {
                id: "territoire-intermediaire",
                title: "Territoire intermédiaire",

                assumptions: [
                  "Trois modules opérationnels structurés.",
                  "Site principal ou plusieurs sites proches.",
                  "Transformation et logistique mutualisées.",
                  "Contrats publics et privés réguliers.",
                  "Fonctions communes consolidées.",
                ],

                investment: [
                  {
                    item: "Coordination et fonctions communes",
                    low: "400 000 €",
                    high: "900 000 €",
                  },
                  {
                    item: "Atelier technique",
                    low: "1 000 000 €",
                    high: "2 000 000 €",
                  },
                  {
                    item: "Pôle agricole",
                    low: "2 000 000 €",
                    high: "4 500 000 €",
                  },
                  {
                    item: "Pôle éducatif",
                    low: "1 500 000 €",
                    high: "3 500 000 €",
                  },
                  {
                    item: "Énergie et numérique",
                    low: "500 000 €",
                    high: "1 200 000 €",
                  },
                  {
                    item: "Logistique et espaces communs",
                    low: "300 000 €",
                    high: "800 000 €",
                  },
                  {
                    item: "Fonds de roulement consolidé",
                    low: "600 000 €",
                    high: "1 100 000 €",
                  },
                ],

                totalInvestment: {
                  low: "6 300 000 €",
                  high: "14 000 000 €",
                },

                annualOperatingCosts: {
                  low: "3 000 000 €",
                  high: "6 000 000 €",
                },

                annualRevenueTarget: {
                  low: "2 500 000 €",
                  high: "5 500 000 €",
                },

                jobs: {
                  low: "50",
                  high: "100",
                },

                breakEven:
                  "Équilibre consolidé indicatif entre la cinquième et la huitième année.",
              },

              {
                id: "territoire-etendu",
                title: "Territoire étendu",

                assumptions: [
                  "Réseau multisite.",
                  "Plusieurs pôles opérationnels.",
                  "Plateforme territoriale de transformation et logistique.",
                  "Campus de formation.",
                  "Contrats structurants à l’échelle intercommunale.",
                ],

                investment: [
                  {
                    item: "Coordination territoriale",
                    low: "800 000 €",
                    high: "1 800 000 €",
                  },
                  {
                    item: "Pôles techniques",
                    low: "2 000 000 €",
                    high: "4 000 000 €",
                  },
                  {
                    item: "Pôles agricoles et alimentaires",
                    low: "4 500 000 €",
                    high: "10 000 000 €",
                  },
                  {
                    item: "Campus éducatif et formation",
                    low: "4 000 000 €",
                    high: "9 000 000 €",
                  },
                  {
                    item: "Énergie et numérique",
                    low: "1 200 000 €",
                    high: "3 000 000 €",
                  },
                  {
                    item: "Logistique territoriale",
                    low: "800 000 €",
                    high: "2 000 000 €",
                  },
                  {
                    item: "Fonds de roulement consolidé",
                    low: "1 200 000 €",
                    high: "2 500 000 €",
                  },
                ],

                totalInvestment: {
                  low: "14 500 000 €",
                  high: "32 300 000 €",
                },

                annualOperatingCosts: {
                  low: "7 000 000 €",
                  high: "14 000 000 €",
                },

                annualRevenueTarget: {
                  low: "6 000 000 €",
                  high: "13 000 000 €",
                },

                jobs: {
                  low: "120",
                  high: "230",
                },

                breakEven:
                  "Équilibre consolidé indicatif entre la sixième et la dixième année.",
              },
            ],

            note: "Ces montants sont des hypothèses CAP2032 consolidées. Ils ne doivent pas être additionnés automatiquement aux chiffrages des trois modules : ils les regroupent et intègrent les fonctions communes.",
          },

          {
            type: "deploymentCostComparison",

            title: "Effet du mode de déploiement sur l’investissement",

            items: [
              {
                mode: "Projet global",
                investmentImpact: "Élevé",
                explanation:
                  "Création ou rénovation importante des bâtiments, équipements et infrastructures.",
              },

              {
                mode: "Réseau existant",
                investmentImpact: "Faible à modéré",
                explanation:
                  "Investissement principalement consacré à la coordination, au numérique, à la logistique et aux équipements partagés.",
              },

              {
                mode: "Scénario hybride",
                investmentImpact: "Modéré et progressif",
                explanation:
                  "Investissements concentrés sur les fonctions réellement manquantes.",
              },
            ],
          },

          {
            type: "encadre",

            title: "Référence initiale de 3 millions d’euros",

            content: [
              {
                paragraphs: [
                  "Le premier chiffrage CAP2032 retenait environ 3 millions d’euros pour un Village SCIC complet.",

                  "Cette enveloppe reste compatible avec un petit territoire utilisant largement des bâtiments, équipements et partenaires existants.",

                  "Elle devient insuffisante lorsqu’il faut créer simultanément les trois modules, les bâtiments, les infrastructures et le fonds de roulement.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    11. FINANCEMENT
    ======================================================
    */

      {
        id: "financement",
        title: "Financement",

        blocks: [
          {
            type: "paragraphs",

            content: [
              "Le financement doit distinguer les infrastructures d’intérêt collectif, les investissements productifs et le fonds de roulement.",

              "Les subventions publiques peuvent financer les fonctions territoriales, éducatives ou environnementales. Les activités marchandes doivent toutefois disposer d’un modèle économique propre.",
            ],
          },

          {
            type: "fundingMix",

            title: "Répartition indicative du financement initial",

            items: [
              {
                source: "État et collectivités",
                share: "25 à 40 %",

                uses: [
                  "Infrastructures.",
                  "Réhabilitation de bâtiments.",
                  "Équipements collectifs.",
                  "Formation et expérimentation.",
                ],
              },

              {
                source: "Fonds européens et programmes publics",
                share: "15 à 30 %",

                uses: [
                  "Développement rural.",
                  "Transition écologique.",
                  "Innovation sociale.",
                  "Formation.",
                ],
              },

              {
                source: "Fondations et finance solidaire",
                share: "10 à 20 %",

                uses: [
                  "Amorçage.",
                  "Expérimentation.",
                  "Missions sociales.",
                  "Ingénierie.",
                ],
              },

              {
                source: "Emprunts",
                share: "15 à 30 %",

                uses: [
                  "Équipements productifs.",
                  "Bâtiments générant des revenus.",
                  "Véhicules.",
                ],
              },

              {
                source: "Épargne citoyenne et capital coopératif",
                share: "10 à 20 %",

                uses: [
                  "Capital social.",
                  "Fonds propres.",
                  "Investissements territoriaux.",
                ],
              },

              {
                source: "Apports des partenaires",
                share: "Variable",

                uses: [
                  "Bâtiments.",
                  "Machines.",
                  "Foncier.",
                  "Compétences.",
                  "Mise à disposition.",
                ],
              },
            ],
          },

          {
            type: "list",

            title: "Principes financiers",

            items: [
              "Ne pas financer le fonctionnement courant par des subventions d’investissement.",
              "Prévoir un fonds de roulement suffisant.",
              "Adapter la durée des emprunts à la durée de vie des actifs.",
              "Séparer le portage immobilier des activités lorsque cela est pertinent.",
              "Mobiliser l’épargne citoyenne sans promettre de rendement irréaliste.",
              "Évaluer la capacité de remboursement de chaque module.",
              "Conditionner les investissements lourds à des contrats ou débouchés.",
              "Prévoir des réserves pour la maintenance et le renouvellement.",
            ],
          },

          {
            type: "encadre",

            title: "Trois véhicules financiers possibles",

            content: [
              {
                subtitle: "La SCIC opérationnelle",

                paragraphs: [
                  "Elle porte les activités, les salariés, certains équipements et les fonctions communes.",
                ],
              },

              {
                subtitle: "La foncière territoriale",

                paragraphs: [
                  "Elle peut acheter, rénover et louer les bâtiments ou le foncier aux activités opérationnelles.",
                ],
              },

              {
                subtitle: "Le fonds citoyen territorial",

                paragraphs: [
                  "Il permet de mobiliser l’épargne locale sous une forme encadrée et transparente.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    12. CALENDRIER DE DÉPLOIEMENT
    ======================================================
    */

      {
        id: "calendrier-deploiement",
        title: "Calendrier de déploiement",

        blocks: [
          {
            type: "timeline",

            title: "Trajectoire indicative",

            items: [
              {
                phase: "Phase 1",
                duration: "6 à 12 mois",
                title: "Diagnostic et mobilisation",

                content:
                  "Cartographier le territoire, réunir les acteurs et sélectionner les premières priorités.",
              },

              {
                phase: "Phase 2",
                duration: "6 à 12 mois",
                title: "Préfiguration",

                content:
                  "Tester des coopérations, définir la gouvernance et élaborer le modèle économique.",
              },

              {
                phase: "Phase 3",
                duration: "6 à 18 mois",
                title: "Création juridique et financement",

                content:
                  "Constituer la SCIC, sécuriser les fonds et formaliser les engagements.",
              },

              {
                phase: "Phase 4",
                duration: "12 à 24 mois",
                title: "Premiers investissements",

                content:
                  "Créer les fonctions communes et lancer les activités prioritaires.",
              },

              {
                phase: "Phase 5",
                duration: "2 à 4 ans",
                title: "Montée en charge",

                content:
                  "Stabiliser les modules, les flux, les contrats et la gouvernance.",
              },

              {
                phase: "Phase 6",
                duration: "4 à 7 ans",
                title: "Extension",

                content:
                  "Créer les fonctions manquantes et intégrer de nouveaux partenaires.",
              },

              {
                phase: "Phase 7",
                duration: "7 à 10 ans",
                title: "Stabilisation et essaimage",

                content:
                  "Évaluer le modèle, documenter les résultats et accompagner d’autres territoires.",
              },
            ],
          },

          {
            type: "list",

            title: "Ordre recommandé",

            items: [
              "Commencer par une coopération concrète.",
              "Créer la coordination commune.",
              "Sécuriser les premiers débouchés.",
              "Investir dans les fonctions partagées.",
              "Déployer les modules manquants.",
              "Consolider les flux économiques.",
              "Étendre seulement après évaluation.",
            ],
          },
        ],
      },

      /*
    ======================================================
    13. RISQUES ET CONDITIONS DE RÉUSSITE
    ======================================================
    */

      {
        id: "risques-conditions",
        title: "Risques et conditions de réussite",

        blocks: [
          {
            type: "risks",

            title: "Principaux risques",

            items: [
              {
                risk: "Projet trop large dès le lancement",
                level: "Élevé",
                response:
                  "Commencer par quelques fonctions prioritaires et planifier les extensions.",
              },

              {
                risk: "Gouvernance paralysante",
                level: "Élevé",
                response:
                  "Séparer les orientations stratégiques de la gestion opérationnelle.",
              },

              {
                risk: "Absence de débouchés",
                level: "Élevé",
                response:
                  "Sécuriser les contrats avant les investissements productifs.",
              },

              {
                risk: "Surinvestissement immobilier",
                level: "Élevé",
                response: "Réutiliser les bâtiments et développer par phases.",
              },

              {
                risk: "Dépendance aux subventions",
                level: "Élevé",
                response:
                  "Construire un modèle économique propre à chaque activité.",
              },

              {
                risk: "Doubles emplois avec les acteurs locaux",
                level: "Élevé",
                response:
                  "Cartographier l’existant et associer les structures concernées.",
              },

              {
                risk: "Transferts financiers opaques",
                level: "Élevé",
                response: "Mettre en place une comptabilité analytique.",
              },

              {
                risk: "Tensions entre les modules",
                level: "Moyen",
                response:
                  "Formaliser les prestations, tarifs et responsabilités.",
              },

              {
                risk: "Épuisement des porteurs",
                level: "Élevé",
                response: "Professionnaliser rapidement la coordination.",
              },

              {
                risk: "Changement politique local",
                level: "Moyen",
                response:
                  "Diversifier les partenaires et formaliser les engagements de long terme.",
              },

              {
                risk: "Perte de la vision systémique",
                level: "Moyen",
                response:
                  "Maintenir des objectifs communs et une évaluation consolidée.",
              },

              {
                risk: "Fermeture excessive du système",
                level: "Moyen",
                response: "Conserver des échanges et partenariats extérieurs.",
              },
            ],
          },

          {
            type: "encadre",

            title: "Conditions essentielles de réussite",

            content: [
              {
                items: [
                  "Un diagnostic territorial partagé.",
                  "Une première coopération concrète et visible.",
                  "Des porteurs expérimentés.",
                  "Une direction opérationnelle compétente.",
                  "Une gouvernance lisible.",
                  "Une comptabilité séparée par activité.",
                  "Des débouchés sécurisés.",
                  "Une montée en charge progressive.",
                  "Un fonds de roulement suffisant.",
                  "Une relation de confiance avec les acteurs existants.",
                  "Une évaluation indépendante.",
                  "Une trajectoire pluriannuelle stable.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    14. IMPACTS ET INDICATEURS
    ======================================================
    */

      {
        id: "impacts-indicateurs",
        title: "Impacts et indicateurs",

        blocks: [
          {
            type: "cards",

            title: "Impacts attendus",

            items: [
              {
                title: "Économie locale",
                content:
                  "Augmentation de la valeur produite, transformée et dépensée sur le territoire.",
              },

              {
                title: "Emploi",
                content:
                  "Création et consolidation d’emplois productifs et de services.",
              },

              {
                title: "Formation",
                content:
                  "Meilleure articulation entre apprentissage, reconversion et emploi.",
              },

              {
                title: "Alimentation",
                content:
                  "Développement de filières locales de production et de transformation.",
              },

              {
                title: "Réemploi",
                content:
                  "Allongement de la durée de vie des équipements et matériaux.",
              },

              {
                title: "Services",
                content: "Maintien ou création de fonctions de proximité.",
              },

              {
                title: "Cohésion",
                content:
                  "Renforcement des liens entre habitants, professionnels et institutions.",
              },

              {
                title: "Robustesse",
                content:
                  "Diversification des activités, compétences, fournisseurs et débouchés.",
              },

              {
                title: "Démocratie",
                content:
                  "Participation des acteurs aux orientations territoriales.",
              },
            ],
          },

          {
            type: "indicators",

            title: "Indicateurs économiques",

            items: [
              {
                indicator: "Chiffre d’affaires consolidé",
                target: "Progression conforme à la trajectoire",
                frequency: "Mensuelle",
              },
              {
                indicator: "Résultat par module",
                target: "Identifier les activités viables ou fragiles",
                frequency: "Trimestrielle",
              },
              {
                indicator: "Part de revenus récurrents",
                target: "Augmentation progressive",
                frequency: "Annuelle",
              },
              {
                indicator: "Valeur ajoutée locale",
                target: "Progression annuelle",
                frequency: "Annuelle",
              },
              {
                indicator: "Trésorerie consolidée",
                target: "Plusieurs mois de charges",
                frequency: "Mensuelle",
              },
            ],
          },

          {
            type: "indicators",

            title: "Indicateurs territoriaux",

            items: [
              {
                indicator: "Structures partenaires",
                target: "Développement maîtrisé du réseau",
                frequency: "Annuelle",
              },
              {
                indicator: "Achats mutualisés",
                target: "Économies documentées",
                frequency: "Annuelle",
              },
              {
                indicator: "Marchés remportés collectivement",
                target: "Progression",
                frequency: "Annuelle",
              },
              {
                indicator: "Bâtiments réutilisés",
                target: "Priorité à l’existant",
                frequency: "Annuelle",
              },
              {
                indicator: "Flux économiques entre modules",
                target: "Développement sans dépendance excessive",
                frequency: "Trimestrielle",
              },
            ],
          },

          {
            type: "indicators",

            title: "Indicateurs humains et sociaux",

            items: [
              {
                indicator: "Emplois créés ou consolidés",
                target: "Conforme au scénario retenu",
                frequency: "Annuelle",
              },
              {
                indicator: "Personnes formées",
                target: "Progression selon les capacités",
                frequency: "Annuelle",
              },
              {
                indicator: "Sorties vers l’emploi",
                target: "Suivi des parcours durables",
                frequency: "Semestrielle",
              },
              {
                indicator: "Sociétaires actifs",
                target: "Participation réelle",
                frequency: "Annuelle",
              },
              {
                indicator: "Satisfaction des partenaires",
                target: "Niveau élevé et stable",
                frequency: "Annuelle",
              },
            ],
          },

          {
            type: "indicators",

            title: "Indicateurs environnementaux",

            items: [
              {
                indicator: "Matières réemployées",
                target: "Progression annuelle",
                frequency: "Trimestrielle",
              },
              {
                indicator: "Part d’alimentation locale",
                target: "Augmentation progressive",
                frequency: "Annuelle",
              },
              {
                indicator: "Énergie produite localement",
                target: "Progression selon les sites",
                frequency: "Mensuelle",
              },
              {
                indicator: "Consommation énergétique",
                target: "Réduction par unité d’activité",
                frequency: "Annuelle",
              },
              {
                indicator: "Surface agricole diversifiée",
                target: "Progression planifiée",
                frequency: "Annuelle",
              },
            ],
          },

          {
            type: "encadre",

            title: "Évaluer les effets systémiques",

            content: [
              {
                paragraphs: [
                  "Les résultats ne doivent pas être évalués uniquement module par module.",

                  "Il faut également mesurer les économies de mutualisation, les emplois indirects, les achats locaux, les parcours de formation, les services maintenus et la capacité collective à répondre à une perturbation.",
                ],
              },
            ],
          },
        ],
      },

      /*
    ======================================================
    15. CONCLUSION
    ======================================================
    */

      {
        id: "conclusion",
        title: "Conclusion",

        blocks: [
          {
            type: "conclusion",

            content:
              "Le Village SCIC territorial ne constitue ni un modèle immobilier ni une structure destinée à absorber toutes les initiatives locales. Il représente une méthode d’assemblage permettant de partir des ressources existantes, d’organiser leurs complémentarités et de créer progressivement les fonctions manquantes. Il peut être déployé sous la forme d’un projet global, d’un réseau de structures existantes ou d’un scénario hybride. Sa réussite dépend moins de sa taille que de la qualité de son diagnostic, de sa gouvernance, de ses débouchés et des relations économiques durables établies entre les modules.",
          },
        ],
      },
    ],

    downloads: [
      {
        label: "Télécharger le prototype détaillé en PDF",
        url: "/download/prototype/4",
        format: "PDF",
      },
    ],

    navigation: {
      previous: {
        label: "École multiniveaux et pôle de transmission",
        url: "/membres/prototype/3",
      },

      list: {
        label: "Liste des prototypes",
        url: "/espace-membre#prototypes",
      },

      next: null,
    },
  },
};
