---
layout: blog
title: 'Renforcer la sécurité grâce au projet pilote de processus coordonné de divulgation des vulnérabilités'
description: >-
  L’équipe du SNC décrit son expérience dans le cadre du projet pilote du gouvernement du Canada concernant le processus de divulgation coordonnée des vulnérabilités : le principe, les surprises et les leçons qu’elle en a tirées.
author: 'En collaboration avec le Secrétariat du Conseil du Trésor du Canada (SCT)'
date: '2026-09-01T14:15:45'
image: https://articles.alpha.canada.ca/uploads/sites/25/2026/09/Blog_Post_CVD-1920X1080_FR.png
image-alt: Illustration sur la cybersécurité montrant des ordinateurs portables connectés, des boucliers, des cadenas, une liste de vérification, des symboles de code et une feuille d’érable.
thumb: https://articles.alpha.canada.ca/uploads/sites/25/2026/09/Blog_Post_CVD-1920X1080_FR.png
tags: ["Sécurité","Tests"]
translationKey: blog-cds-cvd-pilot
---

<p>Chaque jour, des chercheurs et chercheuses en sécurité et des personnes malveillantes explorent les systèmes destinés au public, y compris les services gouvernementaux. Quelqu’un finira toujours par trouver un point faible. Ce qui compte, c’est de le trouver en premier.</p>



<p><strong>Le</strong> <a href="https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/securite-confidentialite-ligne/orientations-politiques-matiere-cybersecurite/lignes-directrices-gestion-vulnerabilities.html" target="_blank" rel="noopener"><strong>nouveau programme de processus coordonné de divulgation des vulnérabilités (PCDV) du gouvernement du Canada</strong></a> <strong>offre aux chercheurs et chercheuses externes en sécurité un canal normalisé à l’échelle du GC pour signaler de façon responsable les vulnérabilités aux services du GC participants.</strong></p>



<p>Le programme prévoit des règles de participation claires, des dispositions législatives d’exonération pour la recherche de bonne foi et un système de réception centralisé par le Secrétariat du Conseil du Trésor du Canada (SCT) via la plateforme <a href="https://hackerone.com/tbs-sct?type=team" target="_blank" rel="noopener">HackerOne</a>. De cette manière, les signalements sont acheminés aux bonnes équipes.</p>



<p>Le SCT a validé le programme dans le cadre d’un projet pilote auprès d’un petit groupe de premiers utilisateurs. Le Service numérique canadien (SNC), qui faisait partie des premiers participants, a aidé à tester le flux de travail et a fourni des commentaires pour aider à façonner le programme à l’échelle du GC.</p>



<p>Notre équipe de la sécurité revient sur les leçons tirées de ce projet pilote.</p>



<h2 class="wp-block-heading"><strong>Un défi crucial</strong></h2>



<p>Traditionnellement, les chercheurs et chercheuses n’ont pas de façon définie de signaler les vulnérabilités. De leur côté, les organismes en sont alertés par des voies informelles, ce qui rend les signalements difficiles à valider ou à prendre en compte.</p>



<p>La divulgation responsable des vulnérabilités est essentielle à la cybersécurité moderne. Quand les chercheurs et chercheuses éthiques disposent d’un canal de signalement sécuritaire et structuré, les organismes peuvent identifier, trier et corriger les problèmes avec une supervision adéquate avant que les attaquants ne les exploitent.</p>



<h2 class="wp-block-heading"><strong>Participation au projet pilote</strong></h2>



<ol class="wp-block-list">
<li><strong>Détecter les problèmes plus tôt :</strong><br>Offrir aux chercheurs et chercheuses éthiques un canal sûr, car cela augmente les chances que nous prenions connaissance de vulnérabilités sérieuses avant les attaquants.</li>



<li><strong>Aider à façonner l’approche du GC :</strong><br>Une participation dès les débuts du programme permettait au SNC de fournir une rétroaction concrète au SCT sur le fonctionnement du programme au quotidien.</li>



<li><strong>Donner un exemple concret aux autres ministères :</strong><br>En comptant parmi les premiers organismes à participer au programme, le SNC pouvait démontrer que le PCDV s’intègre aux opérations de sécurité normales.</li>
</ol>



<p>Du point de vue du SCT, la participation du SNC a servi de preuve importante pour le programme :</p>



<p class="has-background" style="background-color:#ebf2fa">« Travailler avec le SNC sur ce projet pilote nous a permis de tester de bout en bout le processus de PCDV du gouvernement du Canada sans nous limiter à un document de planification. Dans l’ensemble, le projet pilote a mis au jour des problèmes d’incidence élevée que les outils traditionnels n’avaient pas encore détectés, y compris des vulnérabilités dont l’atténuation permet d’éviter des pertes estimées à des dizaines de milliers de dollars. Un cas concret comme celui du SNC donne aux futurs ministères une référence réelle lorsqu’ils envisagent de se joindre au programme. » <br>— Po Tea-Duncan, dirigeante principale de la sécurité de l’information (DPSI) du gouvernement du Canada, SCT</p>



<h2 class="wp-block-heading"><strong>Mise en place du projet pilote</strong></h2>



<p>Notre équipe de la sécurité a travaillé en étroite collaboration avec nos équipes de produits, avec l’équipe de l’ingénierie de la fiabilité des sites et avec le SCT pour réaliser les tâches suivantes :</p>



<ul class="wp-block-list">
<li>Déterminer quels actifs publics entreraient en ligne de compte pour le pilote.</li>



<li>Déployer des fichiers security.txt conformes à la norme RFC 9116 dans les domaines participants (il s’agit là de fichiers standard qui indiquent aux chercheurs comment signaler un problème).</li>



<li>Valider les rapports entrants et coordonner les correctifs.</li>



<li>Améliorer nos rôles et responsabilités internes.</li>



<li>Préparer des conseils pour les équipes d’ingénierie.</li>
</ul>



<p>Le SCT a géré la plateforme HackerOne, les communications avec les chercheurs et chercheuses et le tri initial, tandis que le SNC a validé les résultats, évalué le contexte opérationnel, priorisé les mesures correctives et mis en œuvre les correctifs. Cela a permis aux équipes d’ingénierie de se concentrer sur l’amélioration de la sécurité pendant que le SCT assurait la surveillance au niveau du GC.</p>



<h2 class="wp-block-heading"><strong>Apprentissage tout au long du processus</strong></h2>



<p>Le matin suivant l’ouverture du projet pilote aux chercheurs et chercheuses du service public, avant toute annonce officielle, plusieurs équipes de produits ont ouvert les incidents de sécurité après avoir remarqué des activités inattendues contre des services destinés au public. Pendant un court moment, nous n’avons pas su s’il s’agissait d’une action malveillante ou liée au pilote.</p>



<p>Il est vite devenu évident que des chercheurs et chercheuses éthiques avaient commencé à tester les systèmes nouvellement ajoutés au projet pilote. Cette expérience a permis de tester la réponse et la coordination du SNC en cas d’incident au sein des équipes de sécurité, d’ingénierie de la fiabilité des sites et de produits. En quelques heures, nous avions réalisé les actions suivantes :</p>



<ul class="wp-block-list">
<li>Confirmation que l’activité était conforme aux règles de participation au pilote.</li>



<li>Validation du bon fonctionnement de nos mécanismes de surveillance et d’alerte.</li>



<li>Mise à l’essai de nos stratégies internes dans des conditions réalistes.</li>
</ul>



<p>Ce matin-là, nous avons montré que nos équipes étaient prêtes à gérer de futurs signalements. Nous avons également fourni au SCT un aperçu précieux du fonctionnement en conditions réelles du flux de travail lié au PCDV.</p>



<h2 class="wp-block-heading"><strong>Résultats et principaux points à retenir</strong></h2>



<p>Le projet pilote a confirmé que le PCDV constituait fondamentalement une capacité de gouvernance : les processus, les rôles et la prise de décision sont plus importants que les outils de soutien comme HackerOne.</p>



<details class="wp-block-details is-layout-flow wp-block-details-is-layout-flow"><summary><strong>Voici quelques-uns des principaux résultats du SNC :</strong></summary>
<ul class="wp-block-list">
<li><strong>Processus interne reproductible :</strong><br>Nous disposons maintenant d’un processus clair et reproductible pour la réception et la gestion de rapports de vulnérabilité externes, de la réception à la correction et à la clôture.</li>



<li><strong>Amélioration de la coordination entre les équipes :</strong><br>Le projet pilote a renforcé la collaboration entre les équipes de la sécurité, de l’ingénierie, des opérations et des produits avant l’adoption élargie du PCDV du GC.</li>



<li><strong>Sécurité globale renforcée :</strong><br>Les signalements du PCDV ont été intégrés à nos processus existants de gestion des vulnérabilités et d’intervention en cas d’incident, ce qui améliore notre préparation opérationnelle et rend nos services plus résilients.</li>



<li><strong>Preuve que le processus coordonné de divulgation des responsabilités met au jour des problèmes réels ayant une incidence élevée :</strong><br>Les chercheurs et chercheuses ont trouvé un éventail de vulnérabilités qui auraient autrement pu être oubliées, ou dont la découverte ultérieure aurait causé des conséquences plus importantes.</li>



<li><strong>Contribution pratique au programme du GC :</strong><br>Notre expérience a aidé le SCT à peaufiner la terminologie des politiques, les documents d’intégration et les protections opérationnelles pour les futurs participants. </li>
</ul>
</details>



<p>Le projet pilote a dépassé nos attentes. Il a renforcé la collaboration entre les équipes, accru la confiance dans nos processus d’intervention et démontré que le processus coordonné de divulgation des vulnérabilités peut être exécuté dans le cadre des activités quotidiennes sans causer de réelles perturbations.</p>



<h2 class="wp-block-heading"><strong>Bâtir un avenir plus sûr</strong></h2>



<p>Nous disposons maintenant d’un processus plus solide pour traiter les signalements de vulnérabilités et travailler avec la communauté de recherche. Cela est conforme à nos principes de sécurité : repérer les problèmes tôt, les signaler de façon responsable, les trier et les résoudre efficacement.</p>



<p>Une gouvernance prévisible renforce la sécurité des services numériques dont dépend le Canada.</p>



<p>Le SNC prévoit de tirer parti de ces leçons en approfondissant la gestion de la vulnérabilité, en peaufinant les lignes directrices internes, en se préparant pour les signalements futurs et en soutenant l’adoption à l’échelle du GC.</p>



<p>Pour d’autres organismes du GC, le SNC montre que le processus coordonné de divulgation des vulnérabilités peut s’intégrer aux opérations de sécurité existantes, révéler des vulnérabilités ayant une incidence élevée et être mis en œuvre en partenariat avec le SCT.</p>



<p>La divulgation responsable des vulnérabilités fait maintenant partie intégrante de notre environnement de sécurité. En travaillant avec le SCT et la communauté de recherche, nous contribuons à renforcer la sécurité du public.</p>



<div class="wp-block-group has-background" style="background-color:#ebf2fa"><div class="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
<h2 class="wp-block-heading"><strong>En savoir plus et faire connaître l’initiative</strong></h2>



<ul class="wp-block-list">
<li><a href="https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/securite-confidentialite-ligne/orientations-politiques-matiere-cybersecurite/lignes-directrices-gestion-vulnerabilities.html" target="_blank" rel="noopener">Consultez les lignes directrices sur la gestion des vulnérabilités du gouvernement du Canada</a>.</li>



<li><a href="https://www.linkedin.com/posts/tbs-sct_avis-aux-sp%C3%A9cialistes-de-la-cybers%C3%A9curit%C3%A9-activity-7496634889249771522-Uhid?utm_source=share&amp;utm_medium=member_desktop&amp;rcm=ACoAACLT1DMB_YkNONEh_2QnBzeqsbiw5pVFjEw" target="_blank" rel="noopener">Partagez la publication LinkedIn du SCT annonçant le lancement du programme GC CVD</a>.</li>
</ul>
</div></div>

