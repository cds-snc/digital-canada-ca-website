---
layout: blog
title: 'AI Answers: Enterprise-scale trial for Canada.ca'
description: >-
  CDS explores AI Answers: an AI-powered chat agent service delivering simple, accurate responses from official GC websites.
author: 'Lisa Fast, Senior AI/UX Architect & Researcher, Canada.ca, Consultant'
date: '2025-12-17T13:15:22'
image: https://articles.alpha.canada.ca/uploads/sites/25/2025/12/Ai_2025_Blog_Post_EN-1-scaled.jpg
image-alt: A person holding a smartphone displaying a Canada.ca webpage titled “AI Answers,” which offers answers to Canada.ca questions using an AI service.
thumb: https://articles.alpha.canada.ca/uploads/sites/25/2025/12/Ai_2025_Blog_Post_EN-1-scaled.jpg
tags: ["AI","Testing"]
translationKey: blog-ai-answers
---

<p>Every day, thousands of people turn to the Government of Canada (GC) seeking help with essential services. Many cannot call or visit government offices during business hours, making effective online self-service critical.&nbsp;</p>



<p>The <a href="https://design.canada.ca/common-design-patterns/page-feedback.html" target="_blank" rel="noreferrer noopener">GC Feedback tool</a> is being used by many teams to improve their <a href="http://canada.ca" target="_blank" rel="noreferrer noopener">Canada.ca</a> content and services. The tool captures over 3,000 daily questions and answers from people navigating immigration applications, employment benefits, tax account management, and more. <strong>While GC teams continue to improve </strong><a href="http://canada.ca" target="_blank" rel="noreferrer noopener"><strong>Canada.ca</strong></a><strong>, these improvements alone cannot fully address the challenge of helping people navigate the vast array of GC web content and services.</strong></p>



<p><strong>This summer, CDS tested a new approach: </strong><a href="https://ai-answers.alpha.canada.ca/en" target="_blank" rel="noreferrer noopener"><strong>AI Answers</strong></a>. It’s an AI-based service that provides people with short, plain-language responses (sourced exclusively from GC websites, with authoritative links to guide users to their next steps). <strong>This blog highlights the AI Answers trial results, including key findings and what we learned.</strong></p>



<h2 class="wp-block-heading"><strong>What we tested:</strong></h2>



<ul class="wp-block-list">
<li>On the <a href="https://www.canada.ca/en/government/sign-in-online-account.html" target="_blank" rel="noreferrer noopener">Canada.ca Sign in page</a>, we ran a 19-day trial inviting users to try the new AI Answers service (from June 18 to 26 and July 15 to 25, 2025).&nbsp;</li>



<li>The concept was straightforward: let users ask questions in their own words and receive accurate, government-sourced answers instantly.
<ul class="wp-block-list">
<li><strong>Answers are sourced exclusively from Canada.ca, gc.ca, and authorized federal government URLs. </strong><strong>Any questions that contain personal identifying information are blocked to protect the user&#8217;s privacy.</strong></li>
</ul>
</li>
</ul>


<img loading="lazy" decoding="async" width="1009" height="698" src="https://articles.alpha.canada.ca/uploads/sites/25/2025/12/Sign-In.jpg" alt="Screenshot of the Government of Canada online account sign-in page showing the login options and a pop up inviting users to try the new AI Answers Service." class="wp-image-3393" style="max-width: 100%;height: auto;" srcset="https://articles.alpha.canada.ca/uploads/sites/25/2025/12/Sign-In.jpg 1009w, https://articles.alpha.canada.ca/uploads/sites/25/2025/12/Sign-In-300x208.jpg 300w, https://articles.alpha.canada.ca/uploads/sites/25/2025/12/Sign-In-768x531.jpg 768w" sizes="auto, (max-width: 1009px) 100vw, 1009px" />


<p style="font-size:13px">Alt-text: Screenshot of the Government of Canada online account sign-in page showing the login options and a pop up inviting users to try the new AI Answers Service.</p>



<details class="wp-block-details is-layout-flow wp-block-details-is-layout-flow"><summary>The technical approach</summary>
<p>Our model-independent architecture used Azure Canada GPT 4.1 with department-specific prompts for 10 institutions: CIRNAC, CRA, ESDC, FIN, HC, IRCC, ISC, PHAC, PSPC, and TBS.&nbsp;</p>



<p>Since web content changes frequently, the system uses search and downloads specific pages to answer questions, rather than pre-scraping web content. This AI system relies on information provided on GC websites (<a href="https://ai-answers.alpha.canada.ca/en/about">learn more about AI Answers</a>).&nbsp;</p>



<p>The AI Answers product team built a detailed agentic system (users &#8216;chat with a specialized agent) prompt to make sure that answers are clear, concise, and helpful. We built in both human expert evaluation and AI scoring systems, with blocking of personal identifying information to protect user privacy.&nbsp;</p>
</details>



<h2 class="wp-block-heading"><strong>Trial participation:</strong></h2>



<ul class="wp-block-list">
<li><strong>Trial participation exceeded our expectations: 1,227 user sessions, spanning 32 departments, with questions covering 120+ government tasks. </strong><a href="https://design.canada.ca/survey/writing-tasks.html#what-is-a-task" target="_blank" rel="noreferrer noopener">Tasks are what people come to the content to do</a>: That can mean getting answers, like learning about a subject, or performing a transaction, like applying for a program.</li>
</ul>



<p><strong>The question distribution revealed user priorities:</strong></p>



<ul class="wp-block-list">
<li><strong>42% (635 questions) on IRCC services:</strong> immigration, work permits, and visas.</li>



<li><strong>25% (377 questions) on ESDC services: </strong>My Service Canada Account sign-in and registration, employment insurance, CPP, and job searches.</li>



<li><strong>22% (332 questions) on CRA services:</strong> account access, and tax and business questions.</li>



<li>Even less-commonly used government services generated multiple questions per topic across many departments, suggesting broad user interest in AI-assisted government interactions.</li>
</ul>


<img loading="lazy" decoding="async" width="679" height="1024" src="https://articles.alpha.canada.ca/uploads/sites/25/2025/12/AI-Answers-679x1024.png" alt="" class="wp-image-3396" style="max-width: 100%;height: auto;" srcset="https://articles.alpha.canada.ca/uploads/sites/25/2025/12/AI-Answers-679x1024.png 679w, https://articles.alpha.canada.ca/uploads/sites/25/2025/12/AI-Answers-199x300.png 199w, https://articles.alpha.canada.ca/uploads/sites/25/2025/12/AI-Answers-768x1159.png 768w, https://articles.alpha.canada.ca/uploads/sites/25/2025/12/AI-Answers.png 824w" sizes="auto, (max-width: 679px) 100vw, 679px" />


<p style="font-size:13px">Alt-text: Screenshot of the AI Answers service page. The page explains that the tool can help users find answers to their questions about Canada.ca services and information.</p>



<h2 class="wp-block-heading"><strong>4 key findings:</strong></h2>



<ol class="wp-block-list">
<li><strong>Accuracy that meets enterprise standards</strong>: We achieved a 95% accuracy rate on English questions and 94% on French. This was verified through an expert evaluation of 800 trial questions, completed with GC departments and agency partners.This consistency across both official languages is rare in AI applications, where French typically shows 20% higher error rates.</li>



<li><strong>Users found genuine value</strong>: 88% of user feedback was positive. Importantly, 22% of feedback respondents said they no longer needed to call government offices or visit in person, while 52% reported saving time on searching and reading.</li>



<li><strong>Unexpected breadth of use</strong>: Despite launching from a <a href="https://www.canada.ca/en/government/sign-in-online-account.html" target="_blank" rel="noreferrer noopener">sign-in page</a>, 50% of questions were related to the top 20 government services identified in the <a href="https://design.canada.ca/survey/" target="_blank" rel="noreferrer noopener">GC Task Success Survey</a>. Users asked about everything from work permits, to Contributions to the Canada Pension Plan (CPP) benefits, to tax account access. This revealed a strong demand for AI help across the full spectrum of government services.</li>



<li><strong>Multilingual capability</strong>: Beyond English and French, the system handled questions in 19 other languages, representing 8.4% of all queries. While accuracy was lower for these languages, we&#8217;ve since implemented translation and search improvements.</li>
</ol>



<h2 class="wp-block-heading"><strong>What we learned:</strong></h2>



<ul class="wp-block-list">
<li><strong>Short queries need different handling</strong>: In June, 12% of questions were just 1-2 words, requiring clarification. We addressed this in July by blocking very short queries, providing instruction on effective use and offering a search alternative.</li>



<li><strong>Length limits matter</strong>: We reduced the maximum question length from 400 to 260 characters after finding longer questions were often confusing or included attempts to manipulate the system.</li>



<li><strong>Content gaps become visible</strong>: GC partners are now addressing online content gaps and errors that user questions had revealed, turning AI interactions into a diagnostic tool for service improvement.</li>



<li><strong>Safety measures work</strong>: Despite concerns about AI risks, expert reviewers found no harmful responses were given, and no attempts to manipulate the system were successful during the trial.</li>
</ul>



<h2 class="wp-block-heading"><strong>Why this matters:</strong></h2>



<ul class="wp-block-list">
<li><strong>This trial demonstrates that enterprise-scale AI assistance can work across the full breadth of GC services, while maintaining accuracy and safety standards.&nbsp;</strong>
<ul class="wp-block-list">
<li>The product&#8217;s flexible, chat agent-based design makes it scalable and ready for future AI needs.&nbsp;</li>
</ul>
</li>



<li><strong>More importantly, it shows we can meet users where they are by providing immediate, accurate assistance right on </strong><a href="http://canada.ca"><strong>Canada.ca</strong></a><strong>.&nbsp;</strong>
<ul class="wp-block-list">
<li>This saves time and reduces the need for phone calls and office visits, allowing those service channels to focus on people’s more complex service needs.&nbsp;</li>



<li>For a digital government, that&#8217;s not just a technical upgrade, but a meaningful service improvement for people using government services every day.&nbsp;</li>
</ul>
</li>
</ul>



<h2 class="wp-block-heading"><strong>Next steps!</strong></h2>



<ul class="wp-block-list">
<li>We have made improvements to AI-crafted search queries and translation, while expanding testing across additional Canada.ca pages. The goal is to make sure that people receive the latest, most accurate information possible, no matter which language they use.
<ul class="wp-block-list">
<li><strong>Improvement examples</strong>:
<ul class="wp-block-list">
<li>Translating questions that are not in English or French into English before searching (the AI uses the search results to help it find up-to-date information).</li>



<li>&nbsp;Another improvement is to transform the users question into a shorter search query</li>
</ul>
</li>
</ul>
</li>



<li>We&#8217;re also exploring integrating custom departmental tools and evaluating potential applications for call-centre agents and social media teams.</li>
</ul>



<h2 class="wp-block-heading"><strong>Want to learn more?</strong>&nbsp;</h2>



<p>In the near future, our team will publish a few blog posts about the design, safety, and operations of AI Answers to give you deeper insight into this experimental service. We hope that our work helps AI development teams across the public sector deploy safe and effective applications.&nbsp;</p>



<p><a href="https://us15.campaign-archive.com/home/?u=729a207773f7324e217a1d945&amp;id=eb357181d2" target="_blank" rel="noreferrer noopener"><strong>Subscribe to the CDS newsletter for updates on our work</strong></a><strong>! </strong>You can also <a href="https://ai-answers.alpha.canada.ca/en" target="_blank" rel="noreferrer noopener">visit the AI Answers trial site</a> or explore how we&#8217;re building user-centered digital services at <a href="https://digital.canada.ca/"></a><a href="http://digital.canada.ca" target="_blank" rel="noreferrer noopener">digital.canada.ca</a>.</p>



<p></p>

