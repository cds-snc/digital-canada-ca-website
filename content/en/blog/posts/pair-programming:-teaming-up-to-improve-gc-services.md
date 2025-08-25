---
layout: blog
title: 'Pair Programming: Teaming up to improve GC services'
description: >-
  We sat down with Dave Samojlenko and Pete Thiessen from CDS’s Platform team to learn more about how they’re collaborating using pair programming to improve GC Forms.
author: 'Dave Samojlenko and Pete Thiessen (Developers on GC Forms)'
date: '2024-01-30T13:51:22'
image: https://articles.alpha.canada.ca/uploads/sites/25/2024/01/PairProgramming_011124_Blog.png
image-alt: Two developers collaborating on code at the same time. one is writing while the other is reviewing and providing real-time feedback.
thumb: https://articles.alpha.canada.ca/uploads/sites/25/2024/01/PairProgramming_011124_Blog.png
tags: ["Agile","GC Forms","Open source"]
translationKey: blog-forms-accessibility-paired
---

<p>Have you ever faced a problem that didn’t have an obvious solution? At CDS, developers working on our platform products regularly need to work together to troubleshoot and address challenges.<br>We sat down with Dave Samojlenko and Pete Thiessen from CDS&#8217;s Platform team to learn more about how they&#8217;re collaborating using pair programming to improve <a href="https://articles.alpha.canada.ca/forms-formulaires/?utm_source=EN_Blog-forms-accessibility-paired&amp;utm_medium=Blog&amp;utm_campaign=forms_blogs" target="_blank" rel="noreferrer noopener">GC Forms.</a></p>



<p><strong>Meet Dave, Pete, and GC Forms</strong></p>



<p><strong>Dave</strong> joined CDS at the very beginning, when it was just a small team in a boardroom and he was the first developer at the organization. Since then, he has done a little bit of everything: from helping to build and launch CDS&#8217;s first product, to setting up security and infrastructure around our fleet of laptops, to procuring and configuring the WiFi network at our former office, to managing some early iterations of our cloud environments. Eventually, he came back to developing full time and is now a senior developer with the CDS GC Forms team.</p>



<p><strong>Pete</strong> joined CDS pretty recently (about a year and a half ago), and before that he worked in the private sector. He is currently a senior front end developer with the CDS GC Forms team. He also spent some time working with the <a href="https://www.w3.org/WAI/fundamentals/accessibility-intro/" target="_blank" rel="noreferrer noopener">W3C working group</a> (a web accessibility initiative), as an “invited expert”. When Pete eventually left this group, he took what he had learned about accessibility with him as he worked on new projects. His work on the GC Forms team focuses both on development and accessibility.&nbsp;</p>



<p><strong>GC Forms</strong> enables public servants to build online forms themselves with no coding required. The form-building flow and guidance is tailored to help teams meet Government of Canada (GC) requirements; including compliance with accessibility, bilingualism, and security requirements. You can get started with your GC email address, and build forms anytime for free!&nbsp;</p>



<p>Let’s dive in to hear from Dave and Pete about how they’re working together to improve the accessibility of GC forms.&nbsp;&nbsp;&nbsp;</p>



<p><strong>Pair programming: What it is and how it works</strong></p>



<p><a href="https://www.btb.termiumplus.gc.ca/tpv2alpha/alpha-eng.html?lang=eng&amp;i=1&amp;srchtxt=pair+programming&amp;index=alt&amp;codom2nd_wet=1#resultrecs" target="_blank" rel="noreferrer noopener">Pair programming</a> is a form of collaboration between developers where they work together on the same code. It’s similar to when one person is driving a car and the other person is sitting in the passenger seat. The “driver” focuses on the coding, while the “observer” provides real-time feedback.&nbsp;</p>



<p>In the case of pair programming, backseat driving is a good thing! While the driver is focused on what is immediately happening, the person in the passenger seat can look at potential routes and keep an eye out for what is coming up ahead. If the driver gets stuck, the observer can think ahead and provide potential solutions. This creates an immediate feedback mechanism.</p>



<p>We’ve come across this form of collaboration throughout our careers. In fact, many developers do it without even thinking about it. We often gravitate towards other developers when we face a problem we can’t solve. In an office environment, it’s not uncommon to see developers bring their chairs over to their coworkers’ desks to discuss a problem and collaborate on code writing.</p>



<p><strong>Pair programming for GC Forms&nbsp;</strong></p>



<p>Pair programming allows for different developers to use their various areas of expertise. In our case, one of us had a lot of experience in web accessibility coding and accessibility development (Pete), whereas the other had a lot of experience with configuring and running software builds and server infrastructure (Dave). Pair programming creates space for developers with complementary skill sets to work and learn together.&nbsp;</p>



<p>Within the GC Forms context, we’ve used pair programming to solve problems, such as an underlying accessibility issue with a new design feature. We had both been working together on issues before, and at some point we decided to call what we were doing pair programming. So when one of us approached the other and asked whether we could do some pair programming, it set our expectations about what we would be doing and how.&nbsp;</p>



<p>Altogether, we spent around 7 hours pair programming a solution for the accessibility issue. We split it up over a couple days so it wasn’t too intense (a few hours in the morning, a couple more in the afternoon, and a couple the next day). In our case, we stuck to the same roles (“driver” and “observer”) the whole time. However, you can always switch roles if you want! We also did pair programming remotely. Instead of sitting at the same desk, we used the screen sharing function on Google Meet.&nbsp;</p>



<p>There wasn’t an obvious accessible solution to our problem, and when this happens pair programming is a great way to get a different perspective and brainstorm/test solutions. <strong>However, pair programming isn’t only a tool for solving accessibility problems. Anywhere you run into coding problems that don’t have straightforward solutions is an opportunity to use this process.&nbsp;</strong></p>



<p>Working remotely, developers can get siloed. We have a tendency to try and solve problems on our own, especially when it takes a little more effort to intentionally set meetings instead of just being able to pull up a chair in an office. Luckily, tech has evolved a lot over the last few years, which allows for remote pair programming to be more seamless.&nbsp;</p>



<p>As far as tools go, we kept it very simple:&nbsp;</p>



<ul class="wp-block-list">
<li>Google Meet (or sometimes Slack Huddles)</li>



<li><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer noopener">Visual Studio Code</a> (this is just a code editor, any code editor will do)</li>
</ul>



<p>Other tools do exist! Tools like <a href="https://code.visualstudio.com/learn/collaboration/live-share" target="_blank" rel="noreferrer noopener">VS Code Live Share</a> or <a href="https://tuple.app/" target="_blank" rel="noreferrer noopener">Tuple</a> allow for developers to work on the same code at the same time, allowing them both to modify the code in tandem.</p>



<p><strong>Pair programming: Accessibility and beyond</strong></p>



<p>We have found that pair programming creates a more efficient means of going back and forth with ideas and testing for a solution to a complex problem, and it’s benefited the GC Forms team in improving the accessibility of the product. It allowed us to test as we went.</p>



<p>In our case, we were able to recognize the problem and share our thought processes on how we could potentially fix it. This allowed our partner to think through things differently and provide their own ideas, as well as allowing people to play to their skill sets and look at problems from a different perspective.&nbsp;</p>



<p>Pair programming makes finding solutions to problems fun! It stopped us from being siloed, and allowed us to work together and talk through solutions, while having fun doing it.</p>



<p><strong>How can GC teams use pair programming?</strong></p>



<p>We recommend using pair programming for any coding issue that doesn&#8217;t have a simple solution. It also doesn’t have to be used only within the accessibility context, so developers can use it throughout their coding work. This isn’t a new concept. For years, developers have recognized the importance of helping and sharing tips and ideas, but pair programming puts a name to this collaboration, and allows for developers to do it in a fun and efficient way.&nbsp;</p>



<p><strong>Tips:</strong></p>



<ol class="wp-block-list">
<li><strong>Be mindful when pairing personalities.</strong> Don’t force it, otherwise it won’t work.&nbsp;</li>



<li><strong>Know it’s a social activity.</strong> Some developers aren’t comfortable with this. So be aware that pair programming is not for everyone.&nbsp;</li>



<li><strong>Stay open-minded.</strong> It can be scary having someone watch you code. You start thinking “Am I too slow?” “Am I doing it wrong?” “Should I still be self-editing?”. Pair programming forces you to be a bit vulnerable when it comes to code writing, but that is when the ideas start flowing! Take a deep breath and allow yourself to teach and be taught.&nbsp;</li>



<li><strong>Keep things organic.</strong> Aside from assigning the “driver” and “observer” roles, everything else can be pretty organic. Keep the interaction fairly conversational and switch roles whenever it feels right. If you make it too rigid, then it takes away the fun!</li>



<li><strong>Be aware of your coworkers’ strengths and weaknesses.</strong> For example, if you are the observer, but you know that the driver can’t listen to talking and type/code at the same time, keep that in mind when giving feedback.&nbsp;</li>
</ol>



<p><strong>Give it a try!</strong></p>



<p>Are you thinking about using pair programming in your own work? <a href="mailto:cds-snc@servicecanada.gc.ca" target="_blank" rel="noreferrer noopener">Let us know!</a><br>Interested in learning more about GC Forms? <a href="https://articles.alpha.canada.ca/forms-formulaires/register-for-a-demo/?utm_source=EN_Blog-forms-accessibility-paired&amp;utm_medium=Blog+post&amp;utm_campaign=forms_blogs" target="_blank" rel="noreferrer noopener">Register for a demo today</a>!</p>

