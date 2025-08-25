---
layout: blog
title: 'Standardizing and Digitizing Government Forms in Canada: A Digital Service Network Spotlight'
description: >-
  This case study was originally published by the Digital Service Network in January 2024.
author: 'Stevie-Ray Talbot and Ioana Contu, GC Forms Team'
date: '2024-03-11T11:01:14'
image: https://articles.alpha.canada.ca/uploads/sites/25/2024/02/GC_Form_Impact_Post_EN.jpg
image-alt: An image showcasing how users can virtually provide information via GC forms, no coding required and privacy guaranteed.
thumb: https://articles.alpha.canada.ca/uploads/sites/25/2024/02/GC_Form_Impact_Post_EN.jpg
tags: ["Accessibility","Agile","GC Forms"]
translationKey: standardizing-and-digitizing-government-forms-in-canada-a-digital-service-network-spotlight
---

<p><em>This case study was originally published by the Digital Service Network in January 2024. <a href="https://beeckcenter.georgetown.edu/wp-content/uploads/2024/01/DSN-Spotlight_GC-Forms_v3.pdf" target="_blank" rel="noreferrer noopener"> Read the original version </a>.&nbsp;&nbsp;</em></p>



<p>DSN Spotlights are short-form project profiles that feature exciting work happening across our network of digital government practitioners. Spotlights celebrate our members’ stories, lift up actionable takeaways for other practitioners, and put the artifacts we host in the DSN Resource Library in context.</p>



<p><strong>Background&nbsp;</strong></p>



<p>Forms are a foundational tool of government to serve the public’s needs, with form design playing a critical role in how people access and experience government services. In 2022, the Canadian Digital Service (CDS) kick started an effort to deliver high quality forms by standardizing ministries’ form design and development process. This effort is named “Government of Canada (GC) Forms,” or “GC Forms.” GC Forms now offers public servants the ability to easily produce and publish secure, bilingual, and accessible digital forms.&nbsp;</p>



<p>To learn more, the Beeck Center’s Digital Service Network (DSN) spoke with GC Forms’ Senior Product Manager Stevie-Ray Talbot and Acting Head Ioana Contu. Additionally, team members Carolyn Connors, Sam Sadasivan, and Tim Arney presented their work at DSN and <a href="https://beeckcenter.georgetown.edu/reforming-the-form-a-step-toward-more-effective-government/" target="_blank" rel="noreferrer noopener">Code for America’s FormFest 2023</a>; we’ve highlighted their insights here.&nbsp;</p>



<p><strong>Developing a product vision rooted in user research</strong>&nbsp;</p>



<p>During the pandemic, government operations and service delivery rapidly moved online. At CDS, Talbot was crafting JSON form templates (aka “schemas”) to help government staff meet new and pressing needs for digital forms.</p>



<p>After serving multiple departments looking for similar solutions, CDS assembled the GC Forms team to explore a more standardized approach to form building rooted in shared forms needs. “This was an opportunity to create a quality product once that we could then deploy many times over,” Talbot shared.&nbsp;</p>



<p>Rooted in discovery research, GC Forms developed a product vision:&nbsp;</p>



<p><strong><em>Help government quickly and easily create simple, accessible online forms that the public can use to apply to or access the information, services, or benefits they need.</em></strong>&nbsp;</p>



<p>To achieve this vision, the team developed a strategic roadmap and tactically delivered rapid iterations of form templates to get frequent and rapid feedback from government users.&nbsp;</p>



<p><strong>GC Forms discovery research strategy</strong>&nbsp;</p>



<p>Through their discovery research, the GC Forms team identified two key factors that would serve as the foundation for a product roadmap and establish their technical scope:&nbsp;</p>



<p><strong>1. Classifying forms based on the kind of relationship they establish between government and members of the public</strong>. The team’s discovery research helped them identify two broad categories of forms: (1) forms that create a two-way relationship where the form user shares information with the government and the government responds with a benefit or service (e.g., an application); or (2) forms that create a one-way relationship where the form user shares information with the government and the government uses that information to improve a program (e.g., a survey). Early on, the GC Forms team decided to focus on the first category, homing in on a product vision that focused on benefits and service provision.&nbsp;</p>



<p><strong>2. Determining the level of security required for the data being collected in a given form.</strong> Under Canada’s Federal Privacy Act, forms must legally comply with security measures like obtaining express consent, only using the data for express purposes, and holding data for limited lengths of time. The team began by supporting “Protected A” level of security under the Privacy Act, which includes information like names and addresses. The team aimed for (and now can) support “Protected B” security for information like social insurance numbers.&nbsp;</p>



<p>After grounding themselves in these two key factors, the team’s primary tactic was to quickly deliver and test basic prototypes to receive frequent user feedback and continuously identify what was most desirable and feasible for a minimum viable product (MVP). Contu helmed the team with a strong mission orientation, emphasizing that improving the form-building experience would help public servants and constituents alike.</p>



<p><strong>Prototyping as an iterative design process</strong>&nbsp;</p>



<p>The team structured their work in short design sprints to get on-the-ground user feedback from government employees. This supported the overall strategy of form classification based on complexity, a focus on security, and an approach of early prototyping and iteration based on user feedback. By using a JSON schema based on Talbot’s early work, the team could be responsive to quick iterations across design sprints with minimal development expertise.&nbsp;</p>



<p>The team evaluated the outcomes of each design sprint against a set of success metrics defined as an MVP:&nbsp;</p>



<ul class="wp-block-list">
<li><strong>Accessibility:</strong> The team first tested iterations in-house, then with public servants who use assistive technologies, and finally with third-party audits to ensure the product met accessibility standards.</li>
</ul>



<ul class="wp-block-list">
<li><strong>Security:</strong> The IT team worked with an external auditor to ensure their product operated with a Protected B level of security.</li>
</ul>



<ul class="wp-block-list">
<li><strong>&nbsp;Bilingualism:</strong> Canada has two official languages—English and French. As such, the Official Languages Act (OLA) requires all federal government services be provided bilingually. The team held a basic requirement that translating features should be accurate in both meaning and intention with minimal user effort.&nbsp;</li>
</ul>



<ul class="wp-block-list">
<li><strong>Usability: </strong>The team conducted interviews and in-house testing sessions for functionality to reduce the cognitive load of using the product. This kind of testing continues today through support tickets and when introducing new features.&nbsp;</li>
</ul>



<p>With each sprint, the team evaluated how their product performed against these metrics. “We needed the data from the imperfect first iteration in order to improve when we got to the second iteration,” Contu stressed when discussing the importance of their iterative approach. Sadasivan reflected on this learning process during FormFest, sharing that “It’s good to know we have processes that allow for change as our users’ needs inevitably change.”&nbsp;</p>



<p>The team is never short on ideas, but Talbot emphasized that they succeed by remaining steadfast in their vision with the capacity they have. “A lot of my job is saying no to the team,” Talbot joked. They have become highly adept at assessing the pros and cons of potential new features. “You have to understand what the challenges of a public servant are in order to build a tool that is actually useful for them,” Contu noted.&nbsp;</p>



<p><strong>Meeting MVP metrics through customization</strong>&nbsp;</p>



<p>A major affordance of the GC Forms team’s in-house approach to building and prototyping is that it enables them to focus on deep customization to meet departments’ needs while remaining committed to their MVP metrics. Examples include:</p>



<ul class="wp-block-list">
<li><strong>Customizing for accessibility:</strong> Assistive technologies are highly varied. The team’s multi-step testing process brings inaccessible features to their attention, and as an in-house team, they have the ability to adapt the product quickly as these issues come to the fore. With multiple checkpoints in place—manual and automated, in-house and with third parties—the team works intimately with its stakeholders to meet custom accessibility needs and requirements.&nbsp;</li>
</ul>



<ul class="wp-block-list">
<li><strong>Customizing for usability:</strong> The team identified commonly desired fields in their research, promoting high levels of usability with customizable “blocks” of packaged fields. For example, the builder adds all fields of an address together as optional “blocks” that are automatically joined together so the user is not required to add them separately. Additionally, the builder requires “locked blocks”—elements that the user building the form may forget to add but that user research revealed as useful or necessary for the respondent, like security statements or a post-completion confirmation message. The privacy notice “locked block” includes terms and conditions in the footer of each form with information about data retention and disposal. The team’s approach to blocks captures their efforts to reduce cognitive load for users of the form builder.&nbsp;</li>
</ul>



<ul class="wp-block-list">
<li><strong>Customizing for bilingual delivery:</strong> In-house customization work allowed for bilingual form creation. After testing with French-speaking users, the team realized that the “language toggle” tool they built wasn’t the most effective solution. While the form builder automatically produced two versions—one in English and one in French—the toggle that allowed the user to switch their view between each version was not salient. This led users to unnecessarily create separate forms. The GC Forms team responded by altering the builder’s interface to a side-byside view of translations so that users can simultaneously view their form across languages in real time as they build.&nbsp;</li>
</ul>



<ul class="wp-block-list">
<li><strong>Customizing for security: </strong>Security is top of mind for the team, and much of their customization work is shaped through the lens of security requirements. For instance, due to federal regulations, CDS can only hold respondent data for limited periods of time. To comply, GC Forms requires department staff to download a CSV of their form data and provide a confirmation code indicating the data are ready for deletion, after which GC Forms schedules deletion. However, this process can be time-consuming and confusing for departments, particularly those handling large volumes of responses. The team has experimented with iterations to this process, like removing unnecessary alerts and using more plain language to clarify why these steps are required of users. They continue to experiment and customize the product to support an increased use and maintain compliance with security requirements.</li>
</ul>



<p><strong>Lessons learned&nbsp;</strong></p>



<p><strong>Develop a shared product vision based on stakeholder needs.</strong> A clear, outcome-oriented vision helps ensure that development gets off on the right foot and serves as a tool to promote alignment across various stakeholder groups in complex, cross-cutting digital delivery initiatives.&nbsp;<br><br><strong>Deliver early based on that shared vision and iterate based on feedback from real users.</strong> Launch imperfect, prototyped versions of your product to understand what users want and where challenges lie, and be prepared to respond quickly with experimental solutions. In-house teams can be particularly nimble in this cycle of iteration. Tools like JSON schemas can support this kind of rapid and responsive iteration. “Tech schema is going to be one of your main limiting factors to what you can do, so connect with other teams to talk about what to use,” Talbot advised.&nbsp;</p>



<p><strong>Ground iteration in metrics that help drive toward that shared vision. </strong>Iteration is most effective and efficient when you have a clear, well-defined framework to measure and evaluate the success of the iterations and experiments your team undertakes.</p>



<p><strong>Resources and artifacts</strong>&nbsp;</p>



<p>To see how this work was put into practice, explore the following assets:&nbsp;</p>



<ul class="wp-block-list">
<li><a href="https://articles.alpha.canada.ca/forms-formulaires/templates/">GC Forms Form Category Templates </a></li>



<li><a href="https://digital.canada.ca/2023/02/16/how-were-building-gc-forms-our-4-accessible-approaches/" target="_blank" rel="noreferrer noopener">GC Forms accessibility blog post&nbsp;</a></li>



<li><a href="https://digital.canada.ca/2023/06/29/how-gc-forms-can-help-collect-data-for-public-services/" target="_blank" rel="noreferrer noopener">GC Forms “use-case” blog post&nbsp;</a></li>



<li><a href="https://github.com/cds-snc/platform-forms-client" target="_blank" rel="noreferrer noopener">GC Forms GitHub repository</a></li>
</ul>

