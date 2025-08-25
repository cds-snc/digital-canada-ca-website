---
layout: blog
title: 'Standardisation et numérisation des formulaires gouvernementaux au Canada :  Un coup de projecteur du Digital Service Network (DSN)'
description: >-
  Cette étude de cas a initialement été publiée par le Digital Service Network (« réseau des services numériques ») en janvier 2024.
author: 'Stevie-Ray Talbot et Ioana Contu, l’équipe de produit de Formulaires GC'
date: '2024-03-11T11:01:14'
image: https://articles.alpha.canada.ca/uploads/sites/25/2024/02/GC_Form_Impact_Post_FR.jpg
image-alt: Une image montrant comment les utilisateurs peuvent virtuellement fournir des informations par le biais de formulaires GC, sans codage nécessaire et en garantissant la confidentialité.
thumb: https://articles.alpha.canada.ca/uploads/sites/25/2024/02/GC_Form_Impact_Post_FR.jpg
tags: ["Accessibilité","Approche Agile","Formulaires GC"]
translationKey: standardizing-and-digitizing-government-forms-in-canada-a-digital-service-network-spotlight
---

<p><em>Cette étude de cas a initialement été publiée par le Digital Service Network («&nbsp;réseau des services numériques&nbsp;») en janvier&nbsp;2024. <a href="https://beeckcenter.georgetown.edu/wp-content/uploads/2024/01/DSN-Spotlight_GC-Forms_v3.pdf" target="_blank" rel="noreferrer noopener">Lire la version originale </a>(en anglais seulement).&nbsp;&nbsp;</em></p>



<p>Les portraits de la catégorie «&nbsp;Spotlight&nbsp;» (équivalent de «&nbsp;Coup de projecteur&nbsp;») sont de courts profils de projets présentant de passionnants travaux en cours au sein de notre réseau de praticien·ne·s du gouvernement numérique. Ces profils célèbrent les histoires de nos membres, proposent des pistes d’action aux autres professionnel·le·s et mettent en contexte les archives conservées dans la bibliothèque de ressources du DSN.</p>



<p><strong>Contexte&nbsp;</strong></p>



<p>Les formulaires sont un outil fondamental de l’administration publique pour répondre aux besoins du public, leur conception jouant un rôle essentiel dans la manière dont les gens accèdent aux services de l’administration gouvernementale et en font l’expérience. En 2022, le Service numérique canadien (SNC) a donné le coup d’envoi à une initiative visant à produire des formulaires de haute qualité en normalisant le processus des ministères pour la conception et l’élaboration de formulaires. Cet effort se nomme «&nbsp;Formulaires du gouvernement du Canada (GC)&nbsp;», ou «&nbsp;Formulaires&nbsp;GC&nbsp;». Formulaires&nbsp;GC offre à présent aux fonctionnaires la possibilité de produire et de publier facilement des formulaires numériques sécurisés, bilingues et accessibles.&nbsp;</p>



<p>Pour en savoir plus, le Digital Service Network (DSN) du Centre Beeck s’est entretenu avec Stevie-Ray Talbot, gestionnaire de produit principal de Formulaires GC, et avec Ioana Contu, responsable par intérim. En plus de cela, les membres d’équipe Carolyn Connors, Sam Sadasivan et Tim Arney ont présenté leur travail lors de l’évènement <a href="https://beeckcenter.georgetown.edu/reforming-the-form-a-step-toward-more-effective-government/" target="_blank" rel="noreferrer noopener">FormFest 2023 de Code for America</a> et du DSN. Nous avons mis en évidence leurs idées ici. </p>



<p><strong>Développer une vision du produit ancrée dans la recherche sur les utilisateurs&nbsp;</strong></p>



<p>Pendant la pandémie, les opérations gouvernementales et la prestation de services ont rapidement migré en ligne. Au SNC, M.&nbsp;Talbot élaborait des modèles de formulaires JSON (ou «&nbsp;schémas&nbsp;») pour aider les fonctionnaires à répondre aux besoins nouveaux et pressants en matière de formulaires numériques.</p>



<p>Après avoir servi plusieurs ministères en quête de solutions similaires, le SNC a créé l’équipe Formulaires&nbsp;GC afin d’explorer une approche plus normalisée en matière de production de formulaires, en se basant pour ce faire sur les besoins communs en matière de formulaires. «&nbsp;C’était l’occasion de créer un produit unique et de qualité que nous pourrions ensuite déployer encore et encore&nbsp;», a déclaré Stevie-Ray&nbsp;Talbot.&nbsp;</p>



<p>L’équipe a développé pour Formulaires&nbsp;GC une vision enracinée dans la recherche axée sur la découverte&nbsp;:&nbsp;</p>



<p><strong><em>Aider les fonctionnaires à publier rapidement et facilement des formulaires en ligne simples et accessibles pour permettre au public de demander les renseignements, services ou avantages dont il a besoin ou d’y accéder.&nbsp;</em></strong></p>



<p>Pour concrétiser cette vision, l’équipe a élaboré une feuille de route stratégique et misé sur des itérations rapides et tactiques de ses modèles de formulaires afin d’obtenir une rétroaction fréquente et rapide de la part des utilisateur·rice·s au sein du gouvernement.&nbsp;</p>



<p><strong>Stratégie de recherche axée sur la découverte de Formulaires&nbsp;GC&nbsp;</strong></p>



<p>Grâce à sa recherche axée sur la découverte, l’équipe de Formulaires&nbsp;GC a décelé deux facteurs clés qui ont ensuite servi de base à la feuille de route du produit et à la définition de sa portée technique&nbsp;:&nbsp;</p>



<p><strong>1. Classer les formulaires en fonction du type de relation qu’ils établissent entre le gouvernement et les membres du public.</strong> Les recherches axées sur la découverte menées par l’équipe ont permis de discerner deux grandes catégories de formulaires&nbsp;: (1) les formulaires qui créent une relation bilatérale dans laquelle les utilisateur·rice·s du formulaire communiquent des informations au gouvernement et ce dernier répond en offrant un avantage ou un service (par exemple, une demande); et (2) les formulaires qui créent une relation à sens unique dans laquelle les utilisateur·rice·s du formulaire communiquent des informations au gouvernement et le gouvernement utilise ces informations afin d’améliorer un programme (par exemple, une enquête). Très tôt, l’équipe de Formulaires&nbsp;GC a décidé de se concentrer sur la première catégorie, en se focalisant sur une vision du produit axée sur les avantages et la prestation de services.&nbsp;</p>



<p><strong>2. Déterminer le niveau de sécurité requis pour les données recueillies dans un formulaire donné.</strong> En vertu de la <em>Loi sur la protection des renseignements personnels</em>, les formulaires sont tenus de se conformer à des mesures de sécurité telles que l’obtention d’un consentement explicite, l’utilisation des données limitée à des fins explicites et la rétention des données pour des durées limitées. L’équipe a commencé par s’adapter au niveau de sécurité «&nbsp;Protégé A&nbsp;» au sens de la <em>Loi sur la protection des renseignements personnels</em>. Ce niveau comprend des informations telles que des noms et des adresses. Elle a ensuite cherché à s’adapter au niveau de sécurité «&nbsp;Protégé&nbsp;B&nbsp;» (un objectif désormais atteint). Ce niveau correspond à des informations telles que les numéros d’assurance sociale.&nbsp;</p>



<p>La tactique principale de l’équipe a été la livraison rapide de prototypes basiques suivie de tests afin d’obtenir de la rétroaction fréquente de la part des utilisateur·rice·s et de pouvoir constamment déterminer ce qui était le plus souhaitable et le plus faisable pour un produit minimum viable (PMV). Ioana&nbsp;Contu a dirigé l’équipe en mettant fortement l’accent sur la mission donnée et sur le fait qu’améliorer l’expérience de création de formulaires aiderait autant les fonctionnaires que le public.</p>



<p><strong>Le prototypage comme processus de conception itérative.&nbsp;</strong></p>



<p>L’équipe a structuré son travail en courts sprints de conception afin d’obtenir une rétroaction concrète (dite «&nbsp;de terrain&nbsp;») de la part du personnel gouvernemental. Cela a permis de renforcer la stratégie globale de classification des formulaires en fonction de leur complexité, de mettre l’accent sur la sécurité et d’adopter une approche de prototypage en amont et d’itération basée sur la rétroaction des utilisateur·rice·s. En utilisant un schéma JSON basé sur les premiers travaux de Stevie-Ray&nbsp;Talbot, l’équipe a pu s’adapter aux rapides itérations lors des sprints de conception avec un minimum d’expertise en matière de développement.&nbsp;</p>



<p>L’équipe a évalué les résultats de chaque sprint de conception en fonction d’un ensemble de critères de réussite définis en tant que produit minimum viable (PMV)&nbsp;:&nbsp;</p>



<ul class="wp-block-list">
<li><strong>Accessibilité&nbsp;:</strong> L’équipe a d’abord testé les itérations à l’interne, puis avec des fonctionnaires utilisant des technologies d’assistance, et enfin à l’aide d’audits effectués par de tierces parties afin de s’assurer que le produit répondait aux normes d’accessibilité.</li>
</ul>



<ul class="wp-block-list">
<li><strong>Sécurité&nbsp;:</strong> L’équipe des TI a travaillé avec un auditeur externe pour s’assurer que son produit fonctionnait avec un niveau de sécurité «&nbsp;Protégé B&nbsp;».</li>
</ul>



<ul class="wp-block-list">
<li><strong>&nbsp;Bilinguisme&nbsp;:</strong> Le Canada a deux langues officielles&nbsp;: l’anglais et le français. Par conséquent, la <em>Loi sur les langues officielles</em> (LLO) exige que tous les services du gouvernement fédéral soient accessibles dans les deux langues. L’équipe s’est fixé comme objectif de base une traduction précise des fonctionnalités, tant au niveau du sens que de l’intention, tout en minimisant les efforts de la part des utilisateur·rice·s.&nbsp;</li>
</ul>



<ul class="wp-block-list">
<li><strong>Convivialité&nbsp;: </strong>L’équipe a mené des entrevues et des séances de tests à l’interne axées sur la fonctionnalité afin de réduire la charge cognitive liée à l’utilisation du produit. Ce type de test se fait toujours par le biais de tickets de soutien et lors de la mise en service de nouvelles fonctionnalités.&nbsp;</li>
</ul>



<p>Lors de chaque sprint, l’équipe évalue les performances de son produit par rapport à ces indicateurs. «&nbsp;Nous avions besoin des données issues de la première version imparfaite pour pouvoir nous améliorer en vue de la deuxième version&nbsp;», a souligné Ioana&nbsp;Contu en évoquant l’importance de leur approche itérative. Sam&nbsp;Sadasivan est revenue sur ce processus d’apprentissage lors de FormFest et a déclaré&nbsp;: «&nbsp;Il est agréable de savoir que nos processus nous permettent d’évoluer en fonction des besoins changeants de nos utilisateur·rice·s&nbsp;».&nbsp;</p>



<p>L’équipe n’est jamais à court d’idées, mais Stevie-Ray&nbsp;Talbot a souligné qu’elle réussissait en restant fidèle à sa vision dans la mesure de ses capacités. «&nbsp;Une grande partie de mon travail consiste à dire non à l’équipe&nbsp;», a-t-il déclaré en plaisantant. Le groupe est devenu très habile à évaluer les avantages et les inconvénients des nouvelles fonctionnalités potentielles. «&nbsp;Il faut bien comprendre les enjeux auxquels font face les fonctionnaires afin de bâtir un outil qui leur soit véritablement utile&nbsp;», a souligné Ioana&nbsp;Contu.&nbsp;</p>



<p><strong>Répondre aux critères de réussite du PMV grâce à la personnalisation.&nbsp;</strong></p>



<p>L’un des avantages majeurs de l’approche adoptée à l’interne par l’équipe de Formulaires&nbsp;GC pour la conception et le prototypage est qu’elle permet de se concentrer sur une personnalisation approfondie afin de répondre aux besoins des ministères tout en restant fidèle aux paramètres du PVM. Prenons quelques exemples&nbsp;:</p>



<ul class="wp-block-list">
<li><strong>L’accessibilité grâce à la personnalisation&nbsp;:</strong> Les technologies d’assistance sont très variées. Grâce à son processus de test à étapes multiples, l’équipe met en évidence les fonctionnalités inaccessibles. En tant qu’équipe interne, elle possède la capacité d’adapter rapidement le produit lorsque des problèmes d’accessibilité se présentent. Avec plusieurs points de contrôle en place, à la fois manuels et automatisés, en interne et avec des tiers, l’équipe travaille en étroite collaboration avec ses parties prenantes pour répondre à des besoins et exigences sur mesure en matière d’accessibilité.&nbsp;</li>
</ul>



<ul class="wp-block-list">
<li><strong>La convivialité grâce à la personnalisation&nbsp;:</strong> L’équipe a identifié les champs désirables les plus courants dans le cadre de ses recherches, favorisant ainsi un haut niveau de convivialité grâce à des « blocs » personnalisables de champs préconfigurés. Par exemple, le ou la concepteur·rice ajoute tous les champs d’une adresse sous forme de «&nbsp;blocs&nbsp;» facultatifs qui sont automatiquement réunis, de sorte que les utilisateur·rice·s n’ont pas besoin de les ajouter séparément. De plus, les concepteur·rice·s ont besoin de «&nbsp;blocs verrouillés&nbsp;», c’est-à-dire d’éléments que les utilisateur·rice·s créant le formulaire peuvent oublier d’ajouter, mais que la recherche sur les utilisateurs·rice·s a révélés comme étant utiles ou nécessaires pour le ou la répondant·e, comme les déclarations de sécurité ou un message de confirmation après avoir terminé le formulaire. Le «&nbsp;bloc verrouillé&nbsp;» d’avis de confidentialité comprend des conditions générales figurant au bas de chaque formulaire et fournit des informations sur le stockage et la suppression des données. L’approche de l’équipe vis-à-vis des blocs reflète ses efforts pour réduire la charge cognitive des utilisateur·rice·s du générateur de formulaires.&nbsp;</li>
</ul>



<ul class="wp-block-list">
<li><strong>Une prestation bilingue grâce à la personnalisation&nbsp;:</strong> Un travail de personnalisation à l’interne a permis la création de formulaires bilingues. Après avoir réalisé des tests auprès d’utilisateur·rice·s francophones, l’équipe s’est rendu compte que l’outil de changement de langue qui avait été bâti n’était pas la solution la plus efficace. Le générateur de formulaires produisait automatiquement deux versions, l’une en anglais et l’autre en français, mais le bouton permettant de passer d’une version à l’autre n’était pas mis en évidence. Cela conduisait les utilisateur·rice·s à créer inutilement deux formulaires distincts. L’équipe de Formulaires&nbsp;GC a donc adapté l’interface de création de formulaires pour qu’elle affiche les deux langues côte à côte, afin que les utilisateur·rice·s puissent voir leur formulaire dans les deux langues officielles, en temps réel, et au fur et à mesure de sa construction.&nbsp;</li>
</ul>



<ul class="wp-block-list">
<li><strong>Une sécurité accrue grâce à la personnalisation&nbsp;: </strong>La sécurité est une préoccupation centrale pour l’équipe, et la majeure partie du travail de personnalisation est réalisée dans l’optique des exigences de sécurité. Par exemple, en raison des réglementations fédérales, le SNC ne peut conserver les données des répondant·e·s que pour une durée limitée. Afin de se conformer à cette règle, Formulaires&nbsp;GC demande au personnel ministériel de télécharger un fichier CSV des données de leur formulaire et de fournir un code de confirmation indiquant que les données sont prêtes à être supprimées, après quoi Formulaires&nbsp;GC planifie leur suppression. Toutefois, ce processus peut prendre du temps et être une source de confusion pour les ministères, en particulier pour ceux qui traitent d’importants volumes de réponses. L’équipe a testé plusieurs itérations de ce processus, par exemple en supprimant des alertes inutiles et en utilisant un langage plus clair pour expliquer la nécessité de ces étapes. Elle continue d’expérimenter et de personnaliser le produit afin de l’adapter à une utilisation accrue et de conserver sa conformité aux exigences en matière de sécurité.</li>
</ul>



<p><strong>Leçons apprises&nbsp;</strong></p>



<p><strong>Développer une vision commune du produit basée sur les besoins des parties prenantes.</strong> Il est utile d’avoir une vision claire et axée sur les résultats pour partir du bon pied en matière de développement et pour promouvoir l’alignement entre différents groupes de parties prenantes dans le cadre d’initiatives complexes et transversales liées à la prestation de services numériques.&nbsp;<br><strong><br>Créer rapidement un produit en se basant sur cette vision commune et le modifier en se basant sur la rétroaction de véritables utilisateur·rice·s.</strong> L’idée est de mettre en service des prototypes imparfaits du produit pour comprendre ce que veulent les utilisateur·rice·s et où se situent les difficultés, et de se préparer à réagir rapidement en proposant des solutions expérimentales. Les équipes internes peuvent se montrer particulièrement vives dans ce cycle d’itération. Des outils tels que les schémas JSON peuvent favoriser ce type d’itérations rapides et réactives. «&nbsp;Les schémas techniques seront l’un des principaux facteurs qui limiteront ce que vous pouvez réaliser, alors communiquez avec d’autres équipes pour discuter de ce qu’il est possible d’utiliser&nbsp;», a conseillé Stevie-Ray&nbsp;Talbot.&nbsp;</p>



<p><strong>Des itérations basées sur des indicateurs métriques permettant de se rapprocher de cette vision commune. </strong>Les itérations sont plus efficaces et utiles lorsque vous disposez d’un cadre clair et bien défini pour mesurer et évaluer le succès des essais et des expériences de votre équipe.</p>



<p><strong>Ressources et artefacts&nbsp;</strong></p>



<p>Pour voir comment ce travail a été mis en pratique, explorez les ressources suivantes&nbsp;:&nbsp;</p>



<ul class="wp-block-list">
<li><a href="https://articles.alpha.canada.ca/forms-formulaires/fr/modeles/" target="_blank" rel="noreferrer noopener">Modèles de catégories de formulaires de Formulaires GC </a></li>



<li><a href="https://numerique.canada.ca/2023/02/16/comment-nous-concevons-formulaires-gc-nos-quatre-approches-accessibles/" target="_blank" rel="noreferrer noopener">Billet de blogue sur l’accessibilité de Formulaires GC </a></li>



<li><a href="https://numerique.canada.ca/2023/06/29/comment-formulaires-gc-peut-aider-%C3%A0-recueillir-des-donn%C3%A9es-pour-les-services-publics/" target="_blank" rel="noreferrer noopener">Billet de blogue sur un cas d’utilisation de Formulaires GC </a></li>



<li><a href="https://github.com/cds-snc/platform-forms-client" target="_blank" rel="noreferrer noopener">Référentiel GitHub de Formulaires GC</a></li>
</ul>

