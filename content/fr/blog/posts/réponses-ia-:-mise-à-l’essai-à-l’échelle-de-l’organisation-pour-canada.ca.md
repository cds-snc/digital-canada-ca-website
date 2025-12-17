---
layout: blog
title: 'Réponses IA : Mise à l’essai à l’échelle de l’organisation pour Canada.ca'
description: >-
  Le Service numérique canadien (SNC) explore Réponses IA : un service d’agent conversationnel IA qui fournit des réponses simples et précises à partir du contenu des sites Web officiels du gouvernement.
author: 'Lisa Fast, architecte et chercheuse principale en matière d’IA/EU, Canada.ca, consultante'
date: '2025-12-17T13:15:22'
image: https://articles.alpha.canada.ca/uploads/sites/25/2025/12/Ai_2025_Blog_Post_EN-1-scaled.jpg
image-alt: A person holding a smartphone displaying a Canada.ca webpage titled “AI Answers,” which offers answers to Canada.ca questions using an AI service.
thumb: https://articles.alpha.canada.ca/uploads/sites/25/2025/12/Ai_2025_Blog_Post_EN-1-scaled.jpg
tags: ["IA","Tests"]
translationKey: blog-ai-answers
---

<p>Chaque jour, des milliers de personnes se tournent vers le gouvernement du Canada (GC) pour obtenir de l’aide relativement aux services essentiels. De nombreuses personnes ne peuvent ni téléphoner aux bureaux du gouvernement ni s’y rendre en personne pendant les heures d’ouverture. C’est pourquoi il est essentiel que le libre-service en ligne soit efficace.</p>



<p>L’ <a href="https://conception.canada.ca/configurations-conception-communes/outil-retroaction.html" data-type="link" data-id="https://conception.canada.ca/configurations-conception-communes/outil-retroaction.html" target="_blank" rel="noreferrer noopener">outil Rétroaction GC</a> est utilisé par de nombreuses équipes pour améliorer le contenu et les services qu’elles offrent sur <a href="https://www.canada.ca/fr.html" data-type="link" data-id="https://www.canada.ca/fr.html" target="_blank" rel="noreferrer noopener">Canada.ca</a>. L’outil recueille quotidiennement plus de 3000 questions et réponses de personnes qui parcourent des pages relatives aux demandes d’immigration, aux prestations d’emploi, à la gestion de comptes d’impôt, etc. <strong>Bien que les équipes du GC continuent d’améliorer </strong><a href="https://www.canada.ca/fr.html" data-type="link" data-id="https://www.canada.ca/fr.html" target="_blank" rel="noreferrer noopener"><strong>Canada.ca</strong></a><strong>, ces améliorations ne peuvent à elles seules relever entièrement le défi que représente le fait d’aider les gens à s’y retrouver dans la vaste gamme de contenus et de services Web du GC.</strong></p>



<p><strong>Cet été, le SNC a mis à l’essai une nouvelle approche </strong>: <a href="https://reponses-ia.alpha.canada.ca/fr" target="_blank" rel="noreferrer noopener"><strong>Réponses</strong> <strong>IA</strong></a>. Ce service fondé sur l’IA offre aux utilisateurs des réponses courtes dans un langage clair (dont le contenu provient exclusivement de sites Web du GC, avec des liens fiables qui guident les utilisateurs vers les étapes suivantes). <strong>Ce billet de blogue présente les résultats de la mise à l’essai de </strong><a href="https://reponses-ia.alpha.canada.ca/fr" data-type="link" data-id="https://reponses-ia.alpha.canada.ca/fr" target="_blank" rel="noreferrer noopener"><strong>Réponses IA</strong></a><strong>, y compris les principales constatations et ce que nous avons appris.</strong></p>



<h2 class="wp-block-heading"><strong>Ce que nous avons mis à l’essai</strong></h2>



<ul class="wp-block-list">
<li>Sur la <a href="https://www.canada.ca/fr/gouvernement/ouvrir-session-dossier-compte-en-ligne.html" target="_blank" rel="noreferrer noopener">page d’ouverture de session de Canada.ca</a>, nous avons effectué une mise à l’essai de 19 jours dans le cadre de laquelle nous avons invité les utilisateurs à essayer le nouveau service de Réponses IA (du 18 au 26 juin et du 15 au 25 juillet 2025).</li>



<li>Le concept était simple : permettre aux utilisateurs de poser des questions dans leurs propres mots et de recevoir instantanément des réponses précises dont le contenu provenait de sites Web du gouvernement.
<ul class="wp-block-list">
<li><strong>Le contenu des réponses provient exclusivement de Canada.ca, de sites Web se terminant par « gc.ca » et de sites avec une adresse URL autorisée par le gouvernement fédéral. Toutes les questions qui contiennent des renseignements personnels permettant d’identifier la personne sont bloquées afin de protéger la vie privée de l’utilisateur.</strong></li>
</ul>
</li>
</ul>


<img loading="lazy" decoding="async" width="999" height="697" src="https://articles.alpha.canada.ca/uploads/sites/25/2025/12/FR-SE-CONN.jpg" alt="" class="wp-image-3405" style="max-width: 100%;height: auto;" srcset="https://articles.alpha.canada.ca/uploads/sites/25/2025/12/FR-SE-CONN.jpg 999w, https://articles.alpha.canada.ca/uploads/sites/25/2025/12/FR-SE-CONN-300x209.jpg 300w, https://articles.alpha.canada.ca/uploads/sites/25/2025/12/FR-SE-CONN-768x536.jpg 768w" sizes="auto, (max-width: 999px) 100vw, 999px" />


<p style="font-size:13px">Texte de remplacement : Capture d’écran de la page « Se connecter à un dossier ou un compte en ligne du gouvernement du Canada » montrant les options d’ouverture de session et une fenêtre contextuelle invitant les utilisateurs à essayer le nouveau service de Réponses IA.</p>



<details class="wp-block-details is-layout-flow wp-block-details-is-layout-flow"><summary>L’approche technique</summary>
<p>Notre architecture indépendante du modèle utilise le modèle GPT-4.1 d’Azure Canada avec des invites propres aux ministères pour 10 institutions : RCAANC, ARC, EDSC, FIN, SC, IRCC, SAC, ASPC, SPAC et SCT. </p>



<p>Comme le contenu Web change fréquemment, le système effectue des recherches et télécharge des pages précises pour répondre aux questions, plutôt que d’extraire à l’avance du contenu Web. Ce système d’IA repose sur les renseignements fournis sur les sites Web du GC (<a href="https://reponses-ia.alpha.canada.ca/fr/about" data-type="link" data-id="https://reponses-ia.alpha.canada.ca/fr/about" target="_blank" rel="noreferrer noopener">À propos de Réponses IA</a>).</p>



<p>L’équipe de produit de Réponses IA a mis au point un système d’IA agentive (les utilisateurs clavardent avec un agent spécialisé) avec une invite détaillée pour faire en sorte que les réponses soient claires, concises et utiles. Nous avons intégré des systèmes d’évaluation par des experts humains et des systèmes de notation par l’IA, et avons fait en sorte de bloquer les renseignements personnels permettant d’identifier l’utilisateur afin de protéger sa vie privée.</p>
</details>



<h2 class="wp-block-heading"><strong>Participation à la mise à l’essai</strong></h2>



<ul class="wp-block-list">
<li><strong>Le taux de participation à la mise à l’essai a dépassé nos attentes : 1 227 sessions d’utilisateurs, 32 ministères et des questions portant sur plus de 120 tâches gouvernementales.</strong> <a href="https://conception.canada.ca/sondage/rediger-taches.html#quest-ce-quune-t%C3%A2che" data-type="link" data-id="https://conception.canada.ca/sondage/rediger-taches.html#quest-ce-quune-t%C3%A2che" target="_blank" rel="noreferrer noopener">Une tâche est la raison pour laquelle les utilisateurs consultent le contenu </a>: il peut s’agir d’obtenir des réponses, comme se renseigner sur un sujet, ou d’effectuer une transaction, comme s’inscrire à un programme.</li>
</ul>



<p><strong>La répartition des questions témoigne des priorités des utilisateurs</strong></p>



<ul class="wp-block-list">
<li><strong>42 % (635 questions) concernaient les services d’IRCC</strong> : immigration, permis de travail et visas.</li>



<li><strong>25 % (377 questions) concernaient les services d’EDSC </strong>: connexion et inscription à Mon dossier Service Canada, assurance-emploi, Régime de pensions du Canada et recherche d’emploi.</li>



<li><strong>22 % (332 questions) concernaient les services de l’ARC </strong>: accès au compte et questions liées à l’impôt ou aux entreprises.</li>



<li>Même les services gouvernementaux les moins utilisés ont généré plusieurs questions par sujet, et ce pour de nombreux ministères, ce qui indique que les utilisateurs ont un grand intérêt pour les interactions avec le gouvernement assistées par l’IA.</li>
</ul>


<img loading="lazy" decoding="async" width="764" height="964" src="https://articles.alpha.canada.ca/uploads/sites/25/2025/12/Reponses-IA.png" alt="" class="wp-image-3407" style="max-width: 100%;height: auto;" srcset="https://articles.alpha.canada.ca/uploads/sites/25/2025/12/Reponses-IA.png 764w, https://articles.alpha.canada.ca/uploads/sites/25/2025/12/Reponses-IA-238x300.png 238w" sizes="auto, (max-width: 764px) 100vw, 764px" />


<p style="font-size:13px">Texte de remplacement : Capture d’écran de la page du service Réponses IA. La page explique que l’outil peut aider les utilisateurs à trouver des réponses à leurs questions sur les services et les renseignements offerts sur Canada.ca.</p>



<h2 class="wp-block-heading"><strong>Quatre principales constatations</strong></h2>



<ol class="wp-block-list">
<li><strong>Une exactitude qui répond aux normes organisationnelles </strong>: Nous avons obtenu un taux d’exactitude de 95 % pour les questions en anglais et de 94 % pour les questions en français. L’exactitude des réponses a été vérifiée au moyen d’une évaluation par des experts de 800 questions d’essai, réalisée en collaboration avec les ministères et les organismes partenaires du GC. Cette cohérence entre les deux langues officielles est rare dans les applications d’IA, car le français présente généralement un taux d’erreur plus élevé de 20 %.</li>



<li><strong>Une véritable valeur ajoutée, selon les utilisateurs</strong> : 88 % des commentaires des utilisateurs étaient positifs. Il est important de noter que 22 % des répondants ont déclaré qu’ils n’avaient plus besoin d’appeler les bureaux gouvernementaux ou de s’y rendre en personne, tandis que 52 % ont indiqué qu’ils avaient passé moins de temps à effectuer des recherches et à lire.</li>



<li><strong>Une portée de l’utilisation inattendue </strong>: Même si le service était offert sur une <a href="https://www.canada.ca/fr/gouvernement/ouvrir-session-dossier-compte-en-ligne.html" data-type="link" data-id="https://www.canada.ca/fr/gouvernement/ouvrir-session-dossier-compte-en-ligne.html" target="_blank" rel="noreferrer noopener">page d’ouverture de session</a>, 50 % des questions étaient liées aux 20 principaux services gouvernementaux nommés dans le <a href="https://conception.canada.ca/sondage/index.html" data-type="link" data-id="https://conception.canada.ca/sondage/index.html" target="_blank" rel="noreferrer noopener">Sondage sur la réussite des tâches du GC</a>. Les utilisateurs ont posé des questions sur toutes sortes de sujets, des permis de travail aux cotisations au Régime de pensions du Canada, en passant par l’accès à leur compte d’impôt. Cette mise à l’essai a révélé une forte demande pour de l’aide offerte par l’IA dans l’ensemble des services gouvernementaux.</li>



<li><strong>Une capacité multilingue</strong> : Outre l’anglais et le français, le système a traité des questions dans 19 autres langues. Ces questions représentaient 8,4 % de toutes les requêtes. Le taux d’exactitude était plus faible pour ces langues, mais nous avons depuis apporté des améliorations à la traduction et à la recherche.</li>
</ol>



<h2 class="wp-block-heading"><strong>Ce que nous avons appris</strong></h2>



<ul class="wp-block-list">
<li><strong>Les requêtes courtes doivent être traitées différemment</strong> : En juin, 12 % des questions comptaient seulement un mot ou deux et nécessitaient une clarification. Nous avons remédié à ce problème en juillet en bloquant les requêtes très courtes, en fournissant des instructions sur l’utilisation efficace de l’outil et en proposant une autre option de recherche.</li>



<li><strong>Les limites de longueur sont importantes</strong> : Nous avons réduit la longueur maximale des questions de 400 à 260 caractères après avoir constaté que les questions plus longues prêtaient souvent à confusion ou comportaient des tentatives de manipulation du système.</li>



<li><strong>Les lacunes dans le contenu deviennent visibles</strong> : Les partenaires du GC s’affairent maintenant à combler les lacunes et à corriger les erreurs dans le contenu en ligne que les questions des utilisateurs ont mises en lumière. Les interactions avec l’IA sont donc devenues un outil de diagnostic pour l’amélioration des services.</li>



<li><strong>Les mesures de sécurité fonctionnent </strong>: Malgré les inquiétudes concernant les risques liés à l’IA, les experts ont constaté qu’aucune réponse préjudiciable n’a été donnée et que toutes les tentatives de manipulation du système ont été infructueuses au cours de la mise à l’essai.</li>
</ul>



<h2 class="wp-block-heading"><strong>Pourquoi est-ce important?</strong></h2>



<ul class="wp-block-list">
<li><strong>Cet essai a démontré qu’il est possible d’offrir de l’aide fondée sur l’IA efficace à l’échelle de l’organisation pour l’ensemble des services du GC, tout en respectant les normes d’exactitude et de sécurité.</strong>
<ul class="wp-block-list">
<li>Grâce à une conception flexible et fondée sur un agent conversationnel, le produit est évolutif et prêt à répondre aux besoins futurs en matière d’IA.</li>
</ul>
</li>



<li><strong>Plus important encore, il a montré que nous pouvons répondre aux besoins des utilisateurs là où ils se trouvent en leur fournissant une aide immédiate et précise directement sur </strong><a href="https://www.canada.ca/" data-type="link" data-id="https://www.canada.ca/" target="_blank" rel="noreferrer noopener"><strong>Canada.ca</strong></a><strong>.</strong>
<ul class="wp-block-list">
<li>Ce service fait gagner du temps et réduit le nombre d’appels téléphoniques et de visites aux bureaux, ce qui permet à ces modes de prestation de se concentrer sur les besoins plus complexes des personnes en matière de services.</li>



<li>Pour un gouvernement numérique, il ne s’agit pas seulement d’une mise à niveau technique, mais d’une amélioration considérable des services du gouvernement pour les personnes qui y ont recours tous les jours.</li>
</ul>
</li>
</ul>



<h2 class="wp-block-heading"><strong>Prochaines étapes!</strong></h2>



<ul class="wp-block-list">
<li>Nous avons amélioré la traduction et les requêtes de recherche conçues par l’IA, et avons étendu les essais à d’autres pages de Canada.ca. L’objectif est que les utilisateurs reçoivent les renseignements les plus récents et les plus précis possibles, quelle que soit la langue qu’ils utilisent.
<ul class="wp-block-list">
<li><strong>Voici des exemples d’amélioration</strong> :
<ul class="wp-block-list">
<li>Les questions qui ne sont pas rédigées en anglais ou en français sont traduites en anglais avant que la recherche ne soit effectuée (l’IA utilise les résultats de la recherche pour aider à trouver des renseignements à jour).</li>



<li>Les questions des utilisateurs sont transformées en requêtes de recherche plus courtes.</li>
</ul>
</li>
</ul>
</li>



<li>Nous étudions également la possibilité d’intégrer des outils ministériels personnalisés et évaluons les applications possibles pour les agents des centres d’appel et les équipes des médias sociaux.</li>
</ul>



<h2 class="wp-block-heading"><strong>Vous voulez en savoir plus?</strong></h2>



<p>Notre équipe publiera bientôt quelques billets de blogue sur la conception, la sécurité et les opérations de Réponses IA afin de vous permettre de mieux comprendre ce service expérimental. Nous espérons que notre travail aidera les équipes de développement de l’IA dans tout le secteur public à déployer des applications sûres et efficaces.</p>



<p><a href="https://us15.campaign-archive.com/home/?u=729a207773f7324e217a1d945&amp;id=5fe89f4d28" data-type="link" data-id="https://us15.campaign-archive.com/home/?u=729a207773f7324e217a1d945&amp;id=5fe89f4d28" target="_blank" rel="noreferrer noopener"><strong>Abonnez-vous à l’infolettre du SNC pour recevoir des mises à jour sur notre travail</strong></a><strong> ! </strong>Vous pouvez également <a href="https://reponses-ia.alpha.canada.ca/fr" data-type="link" data-id="https://reponses-ia.alpha.canada.ca/fr" target="_blank" rel="noreferrer noopener">visiter le site de la mise à l’essai de Réponses IA</a> ou explorer comment nous créons des services numériques centrés sur l’utilisateur à <a href="https://numerique.canada.ca/" data-type="link" data-id="https://numerique.canada.ca/" target="_blank" rel="noreferrer noopener">numérique.canada.ca</a>.</p>



<p></p>

