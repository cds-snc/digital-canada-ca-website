---
layout: blog
title: 'Accessible Horizons podcast: GC Forms, functions, and the future of access'
description: >-
  In Episode 6 of Accessible Horizons, we’re talking about building accessibility by default and making government forms exciting (GC Forms). Uncover how GC teams are shifting mindsets, designing with intention, and creating tools that work for everyone.
author: 'Accessibility, Accommodation and Adaptive Computer Technology (AAACT) program and GC Forms teams'
date: '2025-10-27T15:51:42'
image: https://articles.alpha.canada.ca/uploads/sites/25/2025/08/Accessible-Horizon.jpg
image-alt: Icons for a podcast with Accessible Horizons and GC Forms.
thumb: https://articles.alpha.canada.ca/uploads/sites/25/2025/08/Accessible-Horizon.jpg
tags: ["Accessibility","GC Forms","Software development"]
translationKey: blog-gcforms-podcast-aaact
---

<blockquote class="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow">
<p>“We have some folks sign up [for GG Forms] the same day that they publish their first form. Generally, our goal is to help public servants get the data that they need to provide services and benefits to the public&#8230; Basically, if you need to get a Protected B form up, if it needs to be GC-branded, bilingual, and of course accessible, then this will probably be the quickest part of your workflow.”</p>
</blockquote>



<figure class="wp-block-table"><table class="has-background has-fixed-layout" style="background-color:#cec5f8"><tbody><tr><td>Welcome to <a href="https://accessiblehorizons.buzzsprout.com/" target="_blank" rel="noreferrer noopener">Accessible Horizons, a dynamic podcast series</a> hosted by public servants <a href="https://www.linkedin.com/in/nadinecharron/" target="_blank" rel="noreferrer noopener">Nadine Charron</a> and <a href="https://www.linkedin.com/in/luna-bengio-46058633/" target="_blank" rel="noreferrer noopener">Luna Bengio</a>, experts from the <a href="https://www.canada.ca/en/shared-services/services/employees-accessibility/aaact-program.html" target="_blank" rel="noreferrer noopener">Accessibility, Accommodation, and Adaptive Computer Technology (AAACT) Program</a>.&nbsp;<br><br>We explore the latest in digital accessibility, accommodation practices, and adaptive technology. Listen for insightful conversations, expert interviews, and practical tips aimed at making technology more inclusive for everyone.</td></tr></tbody></table></figure>



<p>In Episode 6 of Accessible Horizons, <a href="https://articles.alpha.canada.ca/forms-formulaires/?utm_source=en_blog_gcforms_podcast_aaact&amp;utm_medium=cds_blog&amp;utm_campaign=forms_blogs" target="_blank" rel="noreferrer noopener">the GC Forms team at CDS/ESDC</a> shared thoughts and experiences about building accessibility by default. Uncover how GC teams are shifting mindsets, designing with intention, and creating tools that work for everyone.</p>



<p><strong><a href="https://accessiblehorizons.buzzsprout.com/2451182/episodes/17576832-episode-6-tune-in-forms-functions-and-the-future-of-access" target="_blank" rel="noreferrer noopener">You can listen to the Accessible Horizons&nbsp;podcast Episode 6 (transcript available)</a> and/or read this blog for highlights and key info from the chat.</strong></p>



<div class="wp-block-group has-background is-vertical is-content-justification-stretch is-layout-flex wp-container-core-group-is-layout-b16ad781 wp-block-group-is-layout-flex" style="background-color:#cec5f8">
<h2 class="wp-block-heading has-background" style="background-color:#cec5f8"><strong>Part 1: Accessible by default</strong></h2>



<p class="has-background" style="background-color:#cec5f8">What if accessibility wasn&#8217;t an afterthought, but the starting point?</p>
</div>



<h2 class="wp-block-heading"><strong>Can we start with some introductions?</strong></h2>



<ul class="wp-block-list">
<li><a href="https://www.linkedin.com/in/stevie-ray-talbot-5a330582/" target="_blank" rel="noreferrer noopener"><strong>Stevie-Ray Talbot</strong></a><strong>:</strong> I’m a Senior Product Manager at CDS and I work on the GC Forms team here. </li>



<li><a href="https://www.linkedin.com/in/peterthiessen/" target="_blank" rel="noreferrer noopener"><strong>Peter Thiessen</strong></a><strong>:</strong> I’m also on the GC Forms team. So a little bit about my background, <a href="https://digital.canada.ca/2024/01/30/pair-programming-teaming-up-to-improve-gc-services/?utm_campaign=esdc-edsc-intcomms-24-25&amp;utm_medium=pog&amp;utm_source=blog-gcforms-podcast-aaact&amp;utm_content=pair-programming-blog-en" data-type="link" data-id="https://digital.canada.ca/2024/01/30/pair-programming-teaming-up-to-improve-gc-services/?utm_campaign=esdc-edsc-intcomms-24-25&amp;utm_medium=pog&amp;utm_source=blog-gcforms-podcast-aaact&amp;utm_content=pair-programming-blog-en" target="_blank" rel="noreferrer noopener">I’m a full-stack developer</a>. I worked in the private sector, big and small tech companies and game companies. I was also part of the <a href="https://www.w3.org/WAI/RD/" target="_blank" rel="noreferrer noopener">Web Accessibility Initiative research and development workgroup</a>.</li>
</ul>



<h2 class="wp-block-heading"><strong>What makes GC Forms so accessible and how did you start with the design?</strong></h2>



<p><strong>Pete: Building a GC product accessible by default</strong></p>



<p>I pushed [building accessibility in from the beginning, not trying to make it accessible once built] as one of the developers with a background in accessibility. I know from working in the private sector, doing accessibility at the end is very hard to do (similar to mobile development and other other things that you’re trying to achieve). Some changes might require massive code changes, whereas if you were to do it at the beginning, compliant-end, it’s actually quite small. <strong>The amount of time spent on accessibility compliance is much lower if you build it in from the beginning.&nbsp;</strong></p>



<p><strong>Nadine: I love what you said, it costs so much more [to do accessibility after building] and it goes to the example: would you build a 40ft building and then think of putting in an elevator once your building is done?</strong></p>



<details class="wp-block-cds-snc-accordion"><summary>Stevie-Ray: Importance of offering HTML responses for accessibility</summary>
<p>Coming back to that building accessible by default and by design, in those early days, we did some research with public servants who use assistive technology to understand the output formats that they use. Government often runs on Excel and PDF, but no surprise there. There’s some difficulty with using those programs. We had one public servant who, because of the machine that they had, it would take them five minutes to open up a larger PDF. And then also getting to an Excel file was difficult to navigate.&nbsp;<br><br>So the first data output that we started with was in HTML format. Whatever, whenever you get your data, there will always be a format in HTML that is easier for you to navigate, that works with the assistive technology that you’re using.&nbsp;<br><br>For a few folks in government, they wanted CSV right away. We started with HTML because of that early research that we did as public servants. CSV is also a thing in Excel, but HTML has proven over and over to be the most accessible language to look at different forms and different ways of navigating data.</p>
</details>



<h3 class="wp-block-heading"><strong>Feature by feature accessibility testing</strong></h3>



<p><strong>Nadine:</strong> I would like some more details, because <a href="https://articles.alpha.canada.ca/forms-formulaires/features/?utm_source=en_blog_gcforms_podcast_aaact&amp;utm_medium=cds_blog&amp;utm_campaign=forms_blogs" data-type="link" data-id="https://articles.alpha.canada.ca/forms-formulaires/features/?utm_source=en_blog_gcforms_podcast_aaact&amp;utm_medium=cds_blog&amp;utm_campaign=forms_blogs" target="_blank" rel="noreferrer noopener">one of the things I’ve seen in GC Forms is the ability to use all of the different pieces</a>. You have drop down menus, radio buttons, and modal windows. You have a variety of tools that we can use when you’re asking questions that give you the variety in a form that you’re looking for, whether it’s a yes, no, true or false. </p>



<p>And shout out to our participants from the last podcast, because we actually used GC Forms for our trivia contest. We had over 300 people answer all our questions and we did it on a daily basis through GC Forms.</p>


<img loading="lazy" decoding="async" width="1024" height="394" src="https://articles.alpha.canada.ca/uploads/sites/25/2025/09/Inlineimg_GCForm_Blog_Post_EN-1-1024x394.jpg" alt="The GC Forms team’s process for building new accessible features includes a new feature idea being proposed and the team thinks about accessible design. The feature is then built and automatically tested for accessibility. After, the team does manual accessibility testing to avoid tunnel vision and tests with users to improve." class="wp-image-3256" style="max-width: 100%;height: auto;" srcset="https://articles.alpha.canada.ca/uploads/sites/25/2025/09/Inlineimg_GCForm_Blog_Post_EN-1-1024x394.jpg 1024w, https://articles.alpha.canada.ca/uploads/sites/25/2025/09/Inlineimg_GCForm_Blog_Post_EN-1-300x115.jpg 300w, https://articles.alpha.canada.ca/uploads/sites/25/2025/09/Inlineimg_GCForm_Blog_Post_EN-1-768x295.jpg 768w, https://articles.alpha.canada.ca/uploads/sites/25/2025/09/Inlineimg_GCForm_Blog_Post_EN-1-1536x591.jpg 1536w, https://articles.alpha.canada.ca/uploads/sites/25/2025/09/Inlineimg_GCForm_Blog_Post_EN-1-2048x788.jpg 2048w" sizes="auto, (max-width: 1024px) 100vw, 1024px" />


<details class="wp-block-cds-snc-accordion"><summary>Pete: Our process for building accessible form features&nbsp;</summary>
<ol class="wp-block-list">
<li><strong>New feature idea proposed:</strong> So usually it begins like you mentioned in wireframes. So we have a collaborative tool called Figma. A designer will come up with a new idea for a feature based on product decisions and so on.<br></li>



<li><strong>Team thinking on accessible design:</strong> Then, right from the beginning, myself and other developers start talking about the design. Wherever users struggle, we try to think about the usability and accessibility holistically so we can add comments to the design and start asking what happens if this user clicks here or they get confused by this? Have you thought about this contrast and so on? That really helps because we get the conversation going with the designers and developers.<br></li>



<li><strong>Building and automatic accessibility testing:</strong> When the developers go to start building it, we already know what we’re building. And then once it&#8217;s ready to be tested, we have automated tests that run and look for WCAG conformance 2.1 AA and other things. That runs automatically by default with our build process once it’s ready for testing. <br></li>



<li><strong>Team manual accessibility testing to avoid tunnel vision:</strong> Then manual testing comes in from myself and especially other people on the team that aren’t so close to the feature. Because as a developer, if I build it and stare at it, I will always have tunnel vision. To this point, I will miss a lot of other things, so other people come in and help test, which is very helpful. While that’s going on, I have my own little mental checklist from years of experience. Is everything keyboard navigable? Is this beyond even accessibility, say a touch pointer device for mobile phones: is this click target big enough to actually reach this? Basic stuff like that. Once that’s done, maybe we’ll iterate on the feature a little bit more if we have even new ideas, go back to the design process, look at the Figma, and move forward.<br></li>



<li><strong>User testing and accessibility improvement:</strong> Then when we’re able, we get real users to test our product using the Fable service. They test it, and then give us a score. Based on their feedback, we iterate again on any changes. It’s a consistent loop we have going.<br></li>
</ol>



<p>You may be interested in this blog, “<a href="https://digital.canada.ca/2023/02/16/how-were-building-gc-forms-our-4-accessible-approaches/?utm_campaign=esdc-edsc-intcomms-24-25&amp;utm_medium=pog&amp;utm_source=blog-gcforms-podcast-aaact&amp;utm_content=accessible-approaches-forms-blog-en" data-type="link" data-id="https://digital.canada.ca/2023/02/16/how-were-building-gc-forms-our-4-accessible-approaches/?utm_campaign=esdc-edsc-intcomms-24-25&amp;utm_medium=pog&amp;utm_source=blog-gcforms-podcast-aaact&amp;utm_content=accessible-approaches-forms-blog-en" target="_blank" rel="noreferrer noopener">How we’re building GC Forms: Our 4 accessible approaches</a>”.</p>
</details>



<details class="wp-block-cds-snc-accordion"><summary>Pete: How GC Forms manual testing goes beyond accessibility compliance</summary>
<p>So from a high level, we have the <a href="https://www.w3.org/WAI/test-evaluate/" target="_blank" rel="noreferrer noopener">basic checklist and guidance the W3C provides that anyone can follow to make sure your site is accessible</a>. So as long as we reach those, we’ve sort of got I guess you could say, a step towards conformance.<br><br>Then, of course, <a href="https://www.w3.org/WAI/standards-guidelines/" target="_blank" rel="noreferrer noopener">we also use the WCAG manual</a> to achieve conformance. And that’s great, but<strong> the problem is you can have a website that’s both WCAG conformant and not accessible</strong>.<br><br>For example, there’s a lot of subjective parts of WCAG that are left up to the designer and/or developer to figure out. Alt text is one, link text is another. For example, if all the links say click me, how many users like going through an outline? It’s not very helpful. They really can’t use it without going through and figuring out where each link goes. And some of those links might even have consequences. Like if you click on a link, maybe it submits something (so they might even be afraid they actually cannot use it). There’s a lot of examples like that.<br><br><strong>Luna:</strong> It&#8217;s fantastic because you’ve just given people a glimpse into the fact that adhering to a standard doesn’t mean it makes it accessible. </p>
</details>



<h2 class="wp-block-heading"><strong>Can you tell me a little bit about how your developers learned about accessibility?</strong></h2>



<p><strong>Nadine:</strong> If you look at some of the multimedia or computer science programs, accessibility is not always at the forefront. Can you tell me a little bit about how your developers learned about accessibility? Was it an iterative process, trial by fire, or on the job training? Give us a little bit of details on how somebody becomes so proficient so quickly when it comes to digital accessibility.</p>



<details class="wp-block-cds-snc-accordion"><summary>Stevie-Ray: Professional development Fridays for skill improvement</summary>
<p>So, it’s been about five years that we’ve been developing the product, doing research, and building up the solution. And we didn’t always have a ton of accessibility expertise embedded on the team. <strong>So one of the things that CDS did early on was we allocated Fridays for professional development. We give folks time to dig into topics around accessibility, security, even things that interest them that might improve the product a little bit later.&nbsp;</strong><br><br>Famously, Gmail was made out of these development times out of Google. We’re trying to take a little bit of a similar approach. While we’ve got Pete here today, we’ve got a full team of developers that are all at various stages along this journey and testing manually, whether it’s with VoiceOver or Jaws or NVDA to try and go through and test what they built.<br><br><strong>So it’s a combination of giving people time to study and learn. We ask people to post on our team Slack what they’re researching or learning about on Friday. Essentially, we share the expertise across the team, make it everybody’s responsibility, and give people time to learn more about the topic.</strong></p>
</details>



<p></p>



<h2 class="wp-block-heading has-background" style="background-color:#cec5f8"><strong>Part 2: Forms are us!</strong></h2>



<p></p>



<h2 class="wp-block-heading"><strong>Use cases for GC Forms</strong></h2>



<details class="wp-block-cds-snc-accordion"><summary>How AAACT podcast hosts are using GC Forms for HR</summary>
<p><strong>Nadine:</strong> So let me tell you a little bit about why I use GC forms. One of the first times I’ve used it and it was HR related. So if you’re going to do a talent management appointment or a non advertised process, you have to do a Statement of Merit Criteria (SoMC) and you have to provide justification. And, you know, those old forms of using a table in word, right? Aren’t they horrible?<br><br><strong>Using GC Forms, the HR forms are now completely accessible. I can put a SoMC in there, it’s Protected B, and I can fill out the information that I need and send that off to HR. They can comment right in the form and it makes it so much easier and again completely accessible, which was  fantastic.</strong><br><br><strong>Luna:</strong> HR processes are generally inaccessible and so complex. Having filled out many of those assessments against SoMCs as a manager, I know how long it took me using a screen reader to go through those tables. So this is amazing. <strong>And it’s amazing to think that those who will come after us will have it easier and easier because of initiatives like that.</strong></p>
</details>



<p>You may also be interested in these user stories for GC Forms:</p>



<ul class="wp-block-list">
<li><a href="https://digital.canada.ca/2024/12/12/digital-initiatives-at-cadets-using-gc-notify-amp-gc-forms-to-improve-user-experiences/?utm_campaign=esdc-edsc-intcomms-24-25&amp;utm_medium=pog&amp;utm_source=blog-gcforms-podcast-aaact&amp;utm_content=cadets-products-blog-en" data-type="link" data-id="https://digital.canada.ca/2024/12/12/digital-initiatives-at-cadets-using-gc-notify-amp-gc-forms-to-improve-user-experiences/?utm_campaign=esdc-edsc-intcomms-24-25&amp;utm_medium=pog&amp;utm_source=blog-gcforms-podcast-aaact&amp;utm_content=cadets-products-blog-en" target="_blank" rel="noreferrer noopener">Digital initiatives at Cadets: Using GC Notify &amp; GC Forms to improve user experiences</a></li>



<li><a href="https://digital.canada.ca/2024/06/20/finding-a-truly-bilingual-way-to-collect-data-gc-forms/" target="_blank" rel="noreferrer noopener">Finding a truly bilingual way to collect data: GC Forms</a></li>
</ul>



<h2 class="wp-block-heading"><strong>What does the future hold for GC Forms?</strong></h2>



<details class="wp-block-cds-snc-accordion"><summary>Stevie-Ray: Check out the GC Forms roadmap</summary>
<p>We’re working on a feature that will allow people to add file attachments to their forms. So if an individual needs to append, let’s say a driver’s license or proof of ID or something like that, you’ll be able to get that data via GC forms.<br><br>This fiscal year, we’re looking at improving editing forms after they’ve been published. One of the catches on the product right now is that it’s a little bit difficult to edit a form. Once you’ve published it, you have to take it down and then republish it, which is not ideal.&nbsp;<br><br>Also, a little bit of a drawback right now that we’re looking to fix this fiscal year is creating a way so that teams can manage multiple forms, with different roles for different people.</p>



<p><a href="https://trello.com/b/napn8wCR/gc-forms-strategic-roadmap-en" target="_blank" rel="noreferrer noopener">Check out the GC Forms roadmap</a>!</p>
</details>



<div class="wp-block-group has-background is-vertical is-content-justification-stretch is-layout-flex wp-container-core-group-is-layout-b16ad781 wp-block-group-is-layout-flex" style="background-color:#cec5f8">
<div class="wp-block-group has-background is-vertical is-content-justification-stretch is-layout-flex wp-container-core-group-is-layout-b16ad781 wp-block-group-is-layout-flex" style="background-color:#cec5f8">
<h2 class="wp-block-heading has-background" style="background-color:#cec5f8"><strong>We’re looking for feedback on GC Forms!</strong></h2>
</div>



<p class="has-background" style="background-color:#cec5f8"><strong>Stevie-Ray:</strong> We’d love to get feedback on the <a href="https://articles.alpha.canada.ca/forms-formulaires/?utm_source=en_blog_gcforms_podcast_aaact&amp;utm_medium=cds_blog&amp;utm_campaign=forms_blogs" target="_blank" rel="noreferrer noopener">GC Forms product</a> to help us make it accessible for not just the people filling out forms, but the people building it as well.</p>



<p class="has-background" style="background-color:#cec5f8"><a href="https://forms-formulaires.alpha.canada.ca/en/contact?utm_source=en_blog_gcforms_podcast_aaact&amp;utm_medium=cds_blog&amp;utm_campaign=forms_blogs" target="_blank" rel="noreferrer noopener"><strong>Sign up for the GC Forms mailing list so we can test with public servants</strong></a><strong>.&nbsp;</strong></p>
</div>



<p>“That’s a wrap on <a href="https://accessiblehorizons.buzzsprout.com/2451182/episodes/17576832-episode-6-tune-in-forms-functions-and-the-future-of-access" target="_blank" rel="noreferrer noopener">this episode of Accessible Horizons</a>. We hope you picked up some practical tips along the way. Thanks for tuning in. Together we are building a more inclusive and barrier free public service&#8230; Join us next time for more conversations with your hosts, Nadine Charron and Luna Bengio.”</p>



<p><a href="https://cyberimpact.page/wcgdeuzr/AAACT-newsletters" target="_blank" rel="noreferrer noopener"><strong>Subscribe to the AAACT Now for Accessibility newsletter</strong></a><strong> to get updates on new podcast episodes and </strong><a href="https://us15.campaign-archive.com/home/?u=729a207773f7324e217a1d945&amp;id=eb357181d2" target="_blank" rel="noreferrer noopener"><strong>subscribe to CDS’s newsletter</strong></a><strong> for updates on our products, like GC Forms.</strong></p>



<p></p>

