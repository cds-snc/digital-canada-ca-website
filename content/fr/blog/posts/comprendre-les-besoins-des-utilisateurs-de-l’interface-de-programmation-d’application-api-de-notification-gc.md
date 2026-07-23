---
layout: blog
title: 'Comprendre les besoins des utilisateurs de l’interface de programmation d’application (API) de Notification GC'
description: >-
  Compte rendu des recherches menées auprès de 7 équipes du GC, dont SPC, CFP, Affaires mondiales et l’ARC, sur la façon dont ils utilisent l’API de Notification GC et sur les fonctionnalités qu’elles aimeraient voir à l’avenir.
author: ' Kat Hutton (chercheuse en design, Notification GC)'
date: '2026-07-23T11:47:55'
image: https://articles.alpha.canada.ca/uploads/sites/25/2026/07/Blog-on-GC-Notify-API-research_Blog_Post_FR.jpg
image-alt: 
thumb: https://articles.alpha.canada.ca/uploads/sites/25/2026/07/Blog-on-GC-Notify-API-research_Blog_Post_FR.jpg
tags: ["Notification GC","Recherche"]
translationKey: blog-api-research-notify
---

<p class="has-background" style="background-color:#b3e4fb"><strong>L’un des </strong><a href="https://numerique.canada.ca/a-propos/" target="_blank" rel="noreferrer noopener"><strong>objectifs du SNC</strong></a><strong> consiste à donner aux fonctionnaires les outils nécessaires pour offrir des services numériques. </strong><a href="https://notification.canada.ca/accueil" target="_blank" rel="noreferrer noopener"><strong>Notification GC</strong></a><strong> est un produit de plateforme conçu précisément à cette fin</strong> : un service de notification en libre-service permettant aux équipes du GC d’envoyer des courriels et des messages texte au public et à leurs clientèles. De nombreuses équipes intègrent à leurs produits l’interface de programmation d’application (API) de Notification GC pour envoyer automatiquement des notifications par courriel ou par message texte, ce qui permet de gagner du temps (<a href="https://documentation.notification.canada.ca/fr/" target="_blank" rel="noreferrer noopener">voir le guide sur l’API</a>).</p>



<p>Je m’appelle <a href="https://www.linkedin.com/in/kathutton/" target="_blank" rel="noreferrer noopener">Kat Hutton</a>, chercheuse en expérience utilisateur au sein de Notification GC, et je fais partie de l’équipe de l’expérience client de la plateforme du SNC. Je mène des recherches sur l’utilisabilité de Notification GC, en plus de recueillir des renseignements pour m’assurer que nos services sont faciles à utiliser et répondent aux besoins de notre clientèle. Le meilleur aspect de mon travail, c’est de discuter avec les utilisateurs de Notification GC et d’apprendre comment ils s’en servent concrètement pour la prestation de services numériques au GC. </p>



<p><strong>Récemment, l’équipe de produit de Notification GC a entrepris une nouvelle initiative de recherche portant sur la façon dont notre clientèle utilise l’API et sur les occasions d’améliorer l’expérience de l’API.</strong></p>



<div class="wp-block-group"><div class="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
<div class="wp-block-group has-background" style="background-color:#b3e4fb"><div class="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
<p><strong>Ce que nous avons découvert, en bref&nbsp;:</strong></p>



<ol class="wp-block-list">
<li><strong>Il existe deux groupes distincts parmi les équipes faisant appel à l’API :</strong> Les « innovateurs » et les « catalyseurs ». Ces équipes fédérales gèrent leurs propres clientèles ou partenaires, créent des intégrations personnalisées et aident activement leurs collègues à adopter Notification GC. Ces utilisateurs et utilisatrices ne se contentent pas d’utiliser le produit; ils le propagent.</li>



<li><strong>Parmi les prochaines améliorations à apporter à l’API, les équipes demandent surtout une fonctionnalité de gestion des gabarits :</strong> à l’heure actuelle, les gabarits doivent être créés et mis à jour sur le site Web de Notification GC. Plusieurs équipes ont demandé s’ils pouvaient gérer les gabarits directement par l’intermédiaire de l’API, afin de simplifier la coordination avec leurs clients.</li>
</ol>
</div></div>
</div></div>



<h2 class="wp-block-heading"><strong>Réflexion 1&nbsp;: Archétypes d’«&nbsp;innovateur&nbsp;» et de «&nbsp;catalyseur&nbsp;» parmi les utilisateurs de l’API</strong></h2>



<p>Nous avons constaté que les utilisateurs de l’API qui gèrent eux-mêmes une clientèle ou des partenaires constituent un groupe important que nous avons appelé les «&nbsp;innovateurs&nbsp;» et «&nbsp;catalyseurs&nbsp;». L’utilisation de Notification GC par ce groupe diffère de celle des utilisateurs dont les services se concentrent uniquement sur leurs propres destinataires, ainsi que celle des utilisateurs qui ne gèrent pas l’expérience des clients ou des partenaires.</p>



<p class="has-background" style="background-color:#b3e4fb"><strong>« La nature de notre travail consiste à suggérer des solutions technologiques à notre clientèle. Nous avons fait la démonstration de Notification GC à plusieurs clients maintenant. Le produit offre un excellent service que nous continuons à utiliser à plus grande échelle au fur et à mesure que le nombre de cas augmente. » </strong>— Conseiller principal, Services partagés Canada</p>



<p>Nous avons discuté avec les « innovateurs » et les « catalyseurs » qui ont créé des personnalisations pour leur utilisation de Notification GC et qui ont créé leur propre matériel d’intégration pour leurs partenaires. Ce faisant, ces utilisateurs ont été en mesure de mieux rationaliser et élaborer des processus uniques pour Notification GC. Ainsi, ils ont aidé à familiariser davantage de fonctionnaires avec le produit.</p>



<p class="has-background" style="background-color:#b3e4fb"><strong>« Je comprends comment nous utilisons les gabarits et comment nous les avons mis en place. Quant à l’entretien, il n’y a vraiment pas grand-chose à faire. C’est vraiment très simple. Ils ont lu la documentation [que nous avons créée] et ils se sont lancés avec le produit. Rien de plus simple. » </strong>— Chargée de projet, Commission de la fonction publique du Canada</p>



<p>Bien que les « innovateurs » et les « catalyseurs » soient des experts dans l’utilisation de Notification GC, leurs partenaires ne le sont peut-être pas. Cette étude souligne également que nous sous-estimons peut-être à quel point nous comptons sur nos utilisateurs pour combler certaines lacunes en matière de communication.</p>



<h2 class="wp-block-heading"><strong>Réflexion 2 : Gestion des gabarits au moyen de l’API</strong></h2>



<p class="has-background" style="background-color:#b3e4fb"><strong>« Nous aimerions voir une fonctionnalité qui permet de mettre à jour les gabarits sans passer par le site Web. Nous voulons réduire autant que possible la quantité de tâches manuelles requises. » </strong>— Conseiller principal, Services partagés Canada</p>



<p>Dans cette étude, les « innovateurs » et les « catalyseurs » s’appuient sur des processus établis pour coordonner le travail entre leurs équipes DevOps et les équipes clientes qui utilisent Notification GC.&nbsp;</p>



<p>Dans un des cas étudiés, les partenaires fournissent le contenu à l’équipe DevOps du service qui crée ensuite le gabarit sur le site Web de Notification GC. Dans d’autres cas, les équipes de service ont des conseillers qui travaillent avec les partenaires pour rédiger des messages. Certains créent également leurs propres documents de démarrage et leurs propres intégrations pour aider les partenaires à créer eux-mêmes des gabarits sur le site Web de Notification GC.</p>



<p>La capacité de gérer les gabarits via l’API a suscité l’intérêt de ces «&nbsp;innovateurs&nbsp;» et «&nbsp;catalyseurs&nbsp;», car ils estiment que cela pourrait rationaliser davantage leurs flux de travail avec leur clientèle et réduire potentiellement les erreurs humaines.</p>



<h2 class="wp-block-heading"><strong>Pourquoi nous nous concentrons maintenant sur l’API</strong></h2>



<p>Au cours des derniers mois, nous avons reçu un nombre croissant de tickets de soutien et de demandes de fonctionnalités liées à l’API de la part des équipes fédérales. L’amélioration de l’expérience et de la prise en charge de l’API constitue la prochaine grande priorité de la feuille de route de Notification GC.</p>



<details class="wp-block-cds-snc-accordion"><summary>Méthode de la phase initiale de recherche</summary>
<p><strong>Nous avons mené des entrevues approfondies d’une heure auprès de sept fonctionnaires qui gèrent les intégrations de l’API pour leur service Notification GC.</strong></p>



<p><strong>Critères de recrutement&nbsp;:&nbsp;</strong></p>



<ul class="wp-block-list">
<li>Utilisateurs à volume élevé de Notification GC; </li>



<li>Utilisateurs ayant soumis des commentaires sur l’API à notre équipe de soutien; </li>



<li>Utilisateurs ayant demandé des renseignements sur la configuration d’une nouvelle intégration d’API. </li>
</ul>



<p><strong>Profils des participants&nbsp;:</strong></p>



<ul class="wp-block-list">
<li><strong>Rôles : </strong>2 conseillers principaux, 2 chargés de projet/d’équipe, 1 analyste/technicien en TI, 1 chercheur en expérience utilisateur et 1 développeur.</li>



<li><strong>Chaque participant représentait un différent ministère ou organisme différent du GC :</strong> <a href="https://numerique.canada.ca/2024/07/22/utiliser-notification-gc-pour-envoyer-des-mises-%C3%A0-jour-multilingues-%C3%A0-diverses-communaut%C3%A9s/" target="_blank" rel="noreferrer noopener">Affaires mondiales Canada (AMC)</a>, <a href="https://numerique.canada.ca/2026/01/15/effet-dentra%C3%AEnement-partie-2-de-3--le-succ%C3%A8s-gr%C3%A2ce-%C3%A0-la-collaboration-au-minist%C3%A8re-des-p%C3%AAches-et-des-oc%C3%A9ans-mpo-et-au-service-num%C3%A9rique-canadien-snc-notification-gc/" target="_blank" rel="noreferrer noopener">Pêches et Océans Canada (MPO)</a>, Services partagés Canada (SPC), Éditeur principal, <a href="https://numerique.canada.ca/2023/12/05/pas-la-peine-de-r%C3%A9inventer-la-roue-comment-transports-canada-utilise-notification-gc/" target="_blank" rel="noreferrer noopener">Transports Canada (TC)</a>, Agence du revenu du Canada (ARC) et Commission de la fonction publique (CFP).</li>
</ul>
</details>



<h2 class="wp-block-heading"><strong>Prochaines étapes&nbsp;: Approfondir la recherche au moyen d’un sondage</strong></h2>



<p>L’une des prochaines étapes de notre feuille de route pour Notification GC consiste à approfondir notre recherche sur l’API. Nous sommes impatients de poursuivre la mise à l’épreuve de nos hypothèses quant aux archétypes d’utilisateurs de l’API et leurs cas d’utilisation. Cette recherche nous aidera également à améliorer nos communications relatives aux produits et notre documentation d’utilisation.</p>



<p>Dans l’ensemble, nous sommes heureux de continuer à bonifier les capacités de libre-service de Notification GC et à donner à plus de fonctionnaires les moyens de l’utiliser!</p>



<div class="wp-block-group has-background" style="background-color:#b3e4fb"><div class="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
<h2 class="wp-block-heading"><strong>Participez à nos prochaines activités de recherche et apprenez-en davantage sur Notification GC!</strong></h2>



<p><strong>Utilisateurs de l’API de Notification GC&nbsp;: </strong>Restez à l’affût du sondage sur l’API. Nous communiquerons avec vous lorsque nous mènerons notre prochaine phase de recherche plus approfondie.&nbsp;</p>



<p><strong>Entre-temps&nbsp;:</strong></p>



<ul class="wp-block-list">
<li><a href="https://numerique.canada.ca/tags/notification-gc/" target="_blank" rel="noreferrer noopener">Parcourir les articles de blogue précédents sur Notification GC</a>.</li>



<li><a href="https://notification.canada.ca/newsletter/subscribe" target="_blank" rel="noreferrer noopener">Abonnez-vous à l’infolettre de la communauté Notification GC</a> : recevez des mises à jour, des conseils et des pratiques exemplaires directement dans votre boîte de réception.</li>



<li>Pour des mises à jour sur notre travail : <a href="https://www.linkedin.com/company/cds-snc/" target="_blank" rel="noreferrer noopener">Suivez le SNC sur LinkedIn</a> et <a href="https://us15.campaign-archive.com/home/?u=729a207773f7324e217a1d945&amp;id=5fe89f4d28" target="_blank" rel="noreferrer noopener">abonnez-vous à l’infolettre du SNC</a>.</li>
</ul>
</div></div>



<p></p>

