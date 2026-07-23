---
layout: blog
title: 'What we’re learning from GC Notify’s API users and what it means for our roadmap'
description: >-
  Research with 7 federal API users, including teams at SSC, PSC, Global Affairs, and CRA, on how they use GC Notify’s API, and what they want next.
author: 'Kat Hutton (Design Researcher, GC Notify)'
date: '2026-07-23T14:03:37'
image: https://articles.alpha.canada.ca/uploads/sites/25/2026/07/Blog-on-GC-Notify-API-research_Blog_Post_EN-2.jpg
image-alt: Icons related to researching an API integration for sending timed messages.
thumb: https://articles.alpha.canada.ca/uploads/sites/25/2026/07/Blog-on-GC-Notify-API-research_Blog_Post_EN-2.jpg
tags: ["GC Notify","Research"]
translationKey: blog-api-research-notify
---

<p class="has-background" style="background-color:#b3e4fb"><strong>One of our </strong><a href="https://digital.canada.ca/about/" target="_blank" rel="noreferrer noopener"><strong>goals at CDS</strong></a><strong> is to empower public servants to deliver digital services. </strong><a href="https://notification.canada.ca/home" target="_blank" rel="noreferrer noopener"><strong>GC Notify</strong></a><strong> is a Platform product built for exactly that</strong>: a self-serve notification service for sending emails and texts to GC teams and members of the public. Many teams integrate GC Notify’s Application Programming Interface (API) to send email or text notifications automatically, saving time (<a href="https://documentation.notification.canada.ca/en/" target="_blank" rel="noreferrer noopener">see API guidance</a>).</p>



<p>I’m <a href="https://www.linkedin.com/in/kathutton/" target="_blank" rel="noreferrer noopener">Kat Hutton</a>, UX researcher on GC Notify’s product team and part of CDS’ Platform Client Experience (CX) team. I conduct research on GC Notify’s usability and gather insights to ensure our services are easy to use and meet our clients’ needs. The best part of my work is speaking with GC Notify users and learning how they use it in practice for GC digital service delivery.&nbsp;</p>



<p><strong>Recently, the GC Notify product team has started new research that looks at how our clients use the API and what opportunity areas exist to improve the API experience.</strong></p>



<div class="wp-block-group has-background" style="background-color:#b3e4fb"><div class="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
<p><strong>What we found, in short:</strong></p>



<ol class="wp-block-list">
<li><strong>Two clear groups exist across API-using teams:</strong> “Innovators” and “Enablers” are federal teams who manage their own clients or partners, build custom integrations, and actively help colleagues adopt GC Notify. These users are doing more than using the product; they&#8217;re spreading it.</li>



<li><strong>The next API improvement teams are asking for is template management:</strong> Right now, templates have to be created and updated on the GC Notify website. Several teams asked whether they could manage templates directly through the API, to streamline coordination with their clients.</li>
</ol>
</div></div>



<h2 class="wp-block-heading"><strong>Insight 1: ‘Innovator’ and ‘Enabler’ archetypes amongst API users</strong></h2>



<p>We’ve found that among API-users, those who manage clients and/or business partners of their own belong to a significant group that we’ve called the ‘Innovators’ and ‘Enablers’. This group’s applications of GC Notify differ from users whose services focus solely on their own end-recipients and who don’t manage client or partner experiences.</p>



<p class="has-background" style="background-color:#b3e4fb"><strong>“The nature of work that we do is suggesting technology solutions to our clients. We’ve shown GC Notify to a number of clients now. It provides a really great service that we are continuing to expand the use of, as we have more cases that we need to do.”&nbsp; </strong>– Senior Advisor, Shared Services Canada</p>



<p>We spoke with ‘Enablers’ and ‘Innovators’ who have built customizations for their use of GC Notify and have created their own onboarding material for their business partners. In doing so, these users were able to better streamline and develop unique processes for GC Notify and, in turn, have helped familiarize more public servants with GC Notify.</p>



<p class="has-background" style="background-color:#b3e4fb"><strong>“I understand how we use the templates and how we<strong>’</strong>ve gone about putting them in place. In terms of maintenance, there really isn’t much. It<strong>’</strong>s so simple, really. They read the documentation [we created] and off and running they went. It<strong>’</strong>s really easy.” </strong>– Project Lead, Public Service Commission of Canada</p>



<p>While ‘Innovators’ and ‘Enablers’ are adept at using GC Notify, their business partners may not be. This study also highlights that we may be relying on our users more than we know to fill communication gaps.</p>



<h2 class="wp-block-heading"><strong>Insight 2: Managing templates via API</strong></h2>



<p class="has-background" style="background-color:#b3e4fb"><strong>“We’d love to see a feature for updating the templates without going on the website. We want to decrease the amount of manual labour required for things as much as possible.<strong>”</strong> </strong>– Senior Advisor, Shared Services Canada</p>



<p>The ‘Innovator’ and ‘Enabler’ API-users in this study rely on specific processes to coordinate between their own Developer and Operations (DevOps) teams and the teams of their clients who use GC Notify.&nbsp;</p>



<p>In one case, business partners provide the content for the service’s DevOps team to create the template on GC Notify’s website. In other cases, service teams have advisors who work alongside business partners to draft messages. Some also build their own onboarding materials and integrations that help their business partners create templates themselves on GC Notify’s website.</p>



<p>The ability to manage templates via the API was of interest to these ‘Innovators’ and ‘Enablers’ due to their perceptions that doing so could further streamline their workflows with clients, and potentially reduce human error.</p>



<h2 class="wp-block-heading"><strong>Why we’re focusing on the API now</strong></h2>



<p>Over the past several months, we’ve received an increasing number of API-related support tickets and feature requests from federal teams. Better API support is the next significant area of GC Notify&#8217;s product roadmap, and this research is the start of getting it right.</p>



<details class="wp-block-cds-snc-accordion"><summary>Methodology for initial research phase</summary>
<p><strong>We conducted one-hour-long, in-depth interviews with 7 public servants who manage API integrations for their GC Notify service.</strong></p>



<p><strong>Recruitment criteria:&nbsp;</strong></p>



<ul class="wp-block-list">
<li>High-volume users of GC Notify;&nbsp;</li>



<li>Submitted API-related feedback to our support team; and/or&nbsp;</li>



<li>Inquired about setting up a new API integration.&nbsp;</li>
</ul>



<p><strong>Participant profiles:</strong></p>



<ul class="wp-block-list">
<li><strong>Roles: </strong>2 senior advisors, 2 project/team leads, 1 IT analyst/technician, 1 UX researcher, and 1 developer.</li>



<li><strong>All from different GC departments:</strong> <a href="https://digital.canada.ca/2024/07/22/using-gc-notify-to-send-multilingual-updates-to-diverse-communities/" target="_blank" rel="noreferrer noopener">Global Affairs Canada (GAC)</a>, <a href="https://digital.canada.ca/2026/01/15/ripple-effect-part-2-3--co-creating-success-at-dfo-and-cds-gc-notify/" target="_blank" rel="noreferrer noopener">Department of Fisheries and Oceans Canada (DFO)</a>, Shared Services Canada (SSC), Principal Publisher (CENS), <a href="https://digital.canada.ca/2023/12/05/dont-reinvent-the-wheel--how-transport-canada-uses-gc-notify/" target="_blank" rel="noreferrer noopener">Transport Canada (TC)</a>, Canada Revenue Agency (CRA), and Public Service Commission (PSC).</li>
</ul>
</details>



<h2 class="wp-block-heading"><strong>Next steps: Deeper research via survey</strong></h2>



<p>One of the next steps on our GC Notify roadmap is deeper API research. We look forward to conducting more tests of our hypotheses about API user archetypes and their use cases. This research can also help us to improve our product communications and user manuals.&nbsp;</p>



<p>Overall, we’re excited to continue working toward increasing GC Notify’s self-serve capabilities and empowering more public servants to use it!</p>



<div class="wp-block-group has-background" style="background-color:#b3e4fb"><div class="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
<h2 class="wp-block-heading"><strong>Participate in further research and learn more about GC Notify!</strong></h2>



<p><strong>GC Notify API users: </strong>Keep an eye out for the API survey, we’ll reach out to you when we’re conducting our upcoming, deeper phase of research.&nbsp;</p>



<p><strong>In the meantime:</strong></p>



<ul class="wp-block-list">
<li><a href="https://digital.canada.ca/tags/gc-notify/" target="_blank" rel="noreferrer noopener">Browse previous blog topics on GC Notify</a>.</li>



<li><a href="https://notification.canada.ca/newsletter/subscribe" target="_blank" rel="noreferrer noopener">Subscribe to the GC Notify community newsletter</a>: get Platform updates, tips, and best practices straight to your inbox.</li>



<li>For updates on our work: <a href="https://www.linkedin.com/company/cds-snc/" target="_blank" rel="noreferrer noopener">Follow CDS on LinkedIn</a> and <a href="https://us15.campaign-archive.com/home/?u=729a207773f7324e217a1d945&amp;id=eb357181d2" target="_blank" rel="noreferrer noopener">subscribe to the CDS newsletter</a>.</li>
</ul>
</div></div>



<p></p>

