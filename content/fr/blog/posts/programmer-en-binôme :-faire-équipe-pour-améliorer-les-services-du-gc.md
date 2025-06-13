---
layout: blog
title: 'Programmer en binôme : faire équipe pour améliorer les services du GC'
description: >-
  Notre équipe s’est entretenue avec Dave Samojlenko et Pete Thiessen, tous deux de l’équipe de la plateforme du SNC, pour qu’ils nous expliquent leur façon de programmer en binôme pour améliorer Formulaires GC.
author: 'Dave Samojlenko et Pete Thiessen (développeurs de Formulaires GC)'
date: '2024-01-30T13:51:22'
image: https://articles.alpha.canada.ca/uploads/sites/25/2024/01/PairProgramming_011124_Blog-FR.png
image-alt: Deux développeur·euse·s travaillent simultanément sur du code une personne écrit le code pendant que l’autre le révise et le commente en temps réel.
thumb: https://articles.alpha.canada.ca/uploads/sites/25/2024/01/PairProgramming_011124_Blog-FR.png
tags: [""]
translationKey: blog-forms-accessibility-paired
---

<p>Avez-vous déjà fait face à un problème dont la solution n’était pas évidente? Au SNC, les développeur·euse·s de nos produits de plateforme doivent fréquemment travailler de concert pour diagnostiquer et résoudre des problèmes.<br>Notre équipe s’est entretenue avec Dave Samojlenko et Pete Thiessen, tous deux de l’équipe de la plateforme du SNC, pour qu’ils nous expliquent leur façon de programmer en binôme pour améliorer <a href="https://articles.alpha.canada.ca/forms-formulaires/fr/?utm_source=FR_Blog-forms-accessibility-paired&amp;utm_medium=Blog&amp;utm_campaign=forms_blogs" target="_blank" rel="noreferrer noopener">Formulaires</a><a href="https://articles.alpha.canada.ca/forms-formulaires/fr/?utm_source=FR_Blog-forms-accessibility-paired&amp;utm_medium=Blog&amp;utm_campaign=forms_blogs"> GC.</a></p>



<p><strong>Nous vous présentons Dave, Pete et Formulaires GC</strong></p>



<p><strong>Dave</strong> s’est joint au SNC dès les tout débuts, alors que l’organisme n’était qu’une toute petite équipe installée dans une salle de réunion. Il était le premier développeur. Depuis, il a fait un peu de tout&nbsp;: il a aidé à créer et à lancer le premier produit du SNC, a mis en place les mesures de sécurité et l’infrastructure pour notre flotte d’ordinateurs portables, a assuré l’acquisition et la configuration du réseau WiFi dans notre ancien bureau, et a géré les premières versions de nos environnements infonuagiques. Finalement, il a repris le développement à temps plein et est maintenant développeur principal au sein de l’équipe de Formulaires GC, au SNC.</p>



<p><strong>Pete </strong>s’est joint au SNC plus récemment (il y a environ un an et demi). Il travaillait auparavant dans le secteur privé. Aujourd’hui, il est développeur principal d’applications frontales au sein de l’équipe de Formulaires GC, au SNC. Il a également travaillé quelque temps auprès du <a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/fr" target="_blank" rel="noreferrer noopener">groupe de travail du W3C </a>(une initiative pour l’accessibilité du Web), en tant que «&nbsp;spécialiste invité&nbsp;». Lorsqu’il a quitté ce groupe, Pete a emporté avec lui ce qu’il avait appris sur l’accessibilité pour l’appliquer à ses nouveaux projets. Son travail au sein de l’équipe de Formulaires GC porte donc à la fois sur le développement et l’accessibilité.&nbsp;</p>



<p><strong>Formulaires GC</strong> permet aux fonctionnaires de construire des formulaires en ligne sans avoir à écrire une seule ligne de code. Le processus d’élaboration des formulaires et les conseils fournis par l’outil sont conçus pour aider les équipes à répondre aux exigences du gouvernement du Canada (GC), notamment en ce qui a trait à l’accessibilité, au bilinguisme et à la sécurité. Il ne faut qu’une adresse courriel du GC pour commencer à créer des formulaires gratuitement, n’importe quand!&nbsp;</p>



<p>Écoutons maintenant Dave et Pete nous expliquer comment ils travaillent ensemble pour améliorer l’accessibilité de Formulaires GC.&nbsp;&nbsp;&nbsp;</p>



<p><strong>Programmer en binôme&nbsp;: définition et fonctionnement</strong></p>



<p><a href="https://www.btb.termiumplus.gc.ca/tpv2alpha/alpha-eng.html?lang=eng&amp;i=1&amp;srchtxt=pair+programming&amp;index=alt&amp;codom2nd_wet=1#resultrecs" target="_blank" rel="noreferrer noopener">La programmation en binôme</a> est une technique de collaboration où les développeur·euse·s travaillent ensemble sur le même code. On peut la comparer à la collaboration entre une personne conduisant une voiture et la personne passagère. Le ou la «&nbsp;pilote&nbsp;» se concentre sur l’écriture du code, tandis que le ou la «&nbsp;copilote&nbsp;» commente son travail simultanément.&nbsp;&nbsp;</p>



<p>Les copilotes jouant les commentateurs sont souvent agaçants, mais ce n’est pas le cas quand on programme en binôme! Pendant que les pilotes se concentrent sur ce qui se passe dans l’immédiat, les passager·ère·s peuvent envisager les itinéraires alternatifs et avoir un œil sur ce qui se profile à l’horizon. Si les pilotes se butent à un problème, les copilotes peuvent prévoir des solutions potentielles. Cela crée un mécanisme de rétroaction immédiate.</p>



<p>Nous avons observé cette forme de collaboration tout au long de notre carrière. Plusieurs développeur·euse·s l’adoptent sans même s’en rendre compte. Nous avons souvent tendance à aller vers d’autres développeur·euse·s quand nous nous heurtons à un problème difficile à résoudre. Dans un bureau, il est fréquent de voir les développeur·euse·s traîner leur chaise auprès de collègues pour discuter d’un problème et écrire des lignes de code ensemble.</p>



<p><strong>La programmation en binôme pour Formulaires GC&nbsp;</strong></p>



<p>La programmation en binôme permet de tirer parti de l’expertise de chaque développeur·euse. Dans notre cas, l’un de nous avait beaucoup d’expérience dans le codage de l’accessibilité Web et dans le développement de l’accessibilité (Pete), tandis que l’autre avait beaucoup d’expérience dans la configuration et l’exécution de versions logicielles et l’infrastructure de serveur (Dave). La programmation en binôme permet aux développeur·euse·s qui ont des compétences complémentaires de travailler et d’apprendre ensemble.&nbsp;</p>



<p>Dans le contexte de Formulaires GC, nous avons fait appel à la programmation en binôme pour résoudre des problèmes, notamment un défaut d’accessibilité introduit par un nouvel élément de design. Nous avions déjà collaboré de cette façon auparavant, et à un moment donné, nous avons décidé d’appeler notre approche «&nbsp;programmation en binôme&nbsp;». Donc, quand l’un de nous deux a proposé à l’autre de programmer en binôme, nous savions à quoi nous attendre.&nbsp;</p>



<p>En tout, nous avons dû passer 7&nbsp;heures à programmer en binôme une solution pour le défaut d’accessibilité. Nous les avons réparties sur deux jours pour que ce ne soit pas trop intense (quelques heures le matin, quelques heures l’après-midi, puis deux heures le lendemain). Dans notre cas, nous avons conservé nos rôles («&nbsp;pilote&nbsp;» et «&nbsp;copilote&nbsp;») du début à la fin, bien que ce soit tout à fait possible de les inverser!&nbsp; Nous avons aussi fait cela à distance. Donc au lieu de nous installer au même bureau, nous avons utilisé la fonction partage d’écran de Google Meet.&nbsp;</p>



<p>Pour le problème auquel nous étions confrontés, la solution n’était pas évidente. Nous tourner vers la programmation en binôme était donc une excellente façon de voir le problème différemment, de réfléchir à des solutions, puis de les tester. <strong>La programmation en binôme ne s’applique toutefois pas qu’aux problèmes d’accessibilité. Dès qu’on se heurte à des problèmes de codage dont la solution n’est pas simple, cette technique s’avère utile.&nbsp;</strong></p>



<p>Par ailleurs, le télétravail peut nous amener à travailler en vase clos. En tant que développeurs, nous avons tendance à essayer de résoudre les problèmes par nous-mêmes, surtout quand organiser une réunion est plus exigeant que simplement se tirer une chaise près d’un collègue. Heureusement, la technologie a beaucoup évolué ces dernières années, ce qui nous permet de programmer en binôme et à distance de manière plus fluide.&nbsp;</p>



<p>Quant à nos outils, ils sont très simples&nbsp;:&nbsp;</p>



<ul class="wp-block-list">
<li>Google Meet (ou parfois Slack pour les appels d’équipe)</li>



<li><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer noopener">Visual Studio Code</a> (c’est un éditeur de code; n’importe lequel ferait l’affaire)</li>
</ul>



<p>Il existe aussi des outils faits pour ça! Par exemple, <a href="https://code.visualstudio.com/learn/collaboration/live-share" target="_blank" rel="noreferrer noopener">VS Code Live Share</a> ou <a href="https://tuple.app/" target="_blank" rel="noreferrer noopener">Tuple</a> permettent aux développeur·euse·s de travailler sur le même code simultanément et de le modifier en tandem.&nbsp;</p>



<p><strong>Programmer en binôme&nbsp;: pour l’accessibilité et plus encore</strong></p>



<p>D’après notre expérience, la programmation en binôme permet de faire circuler les idées plus efficacement pour solutionner un problème complexe. Grâce à elle, l’équipe a pu améliorer l’accessibilité du produit Formulaires GC. Nous avons pu tester nos idées au fur et à mesure.</p>



<p>Dans notre cas, nous avons été en mesure de cerner le problème, puis d’échanger nos réflexions sur la manière de le résoudre. Ce faisant, l’un pouvait envisager et proposer des idées différentes, et on pouvait également mettre à profit nos compétences distinctes et voir le problème sous un autre angle.&nbsp;</p>



<p>La programmation en binôme, ça rend la résolution de problèmes plaisante! Ça nous a tenus à l’écart des vases clos et permis de travailler ensemble pour réfléchir à des solutions, tout en ayant du plaisir.</p>



<p><strong>Comment programmer en binôme au GC</strong></p>



<p>Nous recommandons d’utiliser la programmation en binôme pour tout problème de codage complexe. De plus, vous n’avez pas à vous limiter aux questions d’accessibilité. Les développeur·euse·s peuvent utiliser cette technique dans l’ensemble de leur travail. Cette approche n’a rien de nouveau&nbsp;: depuis longtemps, les développeur·euse·s reconnaissent l’importance de s’entraider en échangeant conseils et idées. Mais la «&nbsp;programmation en binôme&nbsp;» donne un nom à ce type de collaboration, et elle se révèle plaisante et efficace.&nbsp;&nbsp;</p>



<p><strong>Conseils&nbsp;:</strong></p>



<ol class="wp-block-list">
<li><strong>Considérez les types de personnalité des deux personnes.</strong> Ne forcez pas les choses, ça ne mènera nulle part.&nbsp;</li>



<li><strong>Soyez conscient·e qu’il s’agit d’une activité sociale.</strong> Cela peut rendre certain·e·s développeur·euse·s mal à l’aise. Sachez donc que la programmation en binôme ne convient pas à tout le monde.&nbsp;</li>



<li><strong>Gardez l’esprit ouvert.</strong> Ça peut être intimidant de se faire observer en train de coder. On se demande&nbsp;: «&nbsp;Suis-je trop lent·e? Est-ce que je m’y prends mal? Devrais-je avoir fini de me réviser?&nbsp;» Programmer en binôme nous force à être un peu vulnérables quand on écrit du code, mais c’est à ce moment-là que les idées se mettent à fuser! Il faut respirer profondément, puis s’accorder la possibilité d’enseigner et d’apprendre.&nbsp;</li>



<li><strong>Suivez le cours naturel des choses.</strong> À part les rôles de «&nbsp;pilote&nbsp;» et de «&nbsp;copilote&nbsp;» qui doivent être attribués, le reste peut facilement aller de soi. Faites en sorte que l’interaction reste assez conversationnelle, et inversez les rôles dès que vous le jugez opportun. Si la structure est trop rigide, ça gâche le plaisir!</li>



<li><strong>Connaissez les forces et faiblesses de votre partenaire.</strong> Par exemple, si vous êtes «&nbsp;copilote&nbsp;» et que vous savez que le ou la «&nbsp;pilote&nbsp;» n’est pas capable d’écouter et d’écrire du code en même temps, tenez-en compte lorsque vous donnez vos commentaires.&nbsp;</li>
</ol>



<p><strong>À vous d’essayer!</strong></p>



<p>Envisagez-vous d’utiliser la programmation en binôme pour votre travail? <a href="mailto:cds-snc@servicecanada.gc.ca" target="_blank" rel="noreferrer noopener">Faites-le-nous savoir</a>!</p>



<p>Aimeriez-vous en apprendre davantage sur Formulaires GC? <a href="https://articles.alpha.canada.ca/forms-formulaires/fr/assister-a-une-demonstration-de-produit/?utm_source=Blog+post&amp;utm_medium=Blog+post&amp;utm_campaign=forms_blogs" target="_blank" rel="noreferrer noopener">Inscrivez-vous aujourd’hui à une démo</a>!&nbsp;</p>

