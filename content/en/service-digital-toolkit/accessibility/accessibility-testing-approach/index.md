---
date: 2025-02-18
description: Our approach to accessibility testing
layout: sub-topic
title: Our approach to accessibility testing
translationKey: accessibility-testing-approach
---
## About this resource

*This was originally created to help our teams and partners. It is not a complete overview of accessibility, but rather documentation that has been used to help us find alignment and spark conversations about our testing approaches within the Canadian Digital Service (CDS).*

## Automated testing

We regularly test our code for development, design, and content issues. At CDS, we have included automated testing in our continuous integration process.

For automated testing, we use a range of tools, including:

* [accessibilityinsights.io](https://accessibilityinsights.io/) — Open source browser extension from Microsoft.  
* [Axe](https://www.deque.com/axe/) — Open source accessibility engine.  
* [WAVE Toolbar](https://wave.webaim.org/) — Popular free browser extension by WebAim.  
* [Siteimprove](https://siteimprove.com/en-ca/core-platform/integrations/browser-extensions/) — Commercial tool with site-wide accessibility checking and browser extensions.  
* [Google Chrome \- Accessibility Developer Plugin](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en)

**Pa11y / Puppeteer** is a [NodeJS (JavaScript) Library](https://github.com/pa11y/pa11y) for automating Google's Chrome and Chromium Web Browser. The reason we've chosen this library over other tools, such as Selenium, was purely due to ease of use. We also use it to automate certain functions that can be difficult to test for single-page apps and dynamically generated content.

**aXe Core** is an open-source accessibility engine that supports WCAG 2.1 automated test scores. We've chosen to use this as it is robust and open-source, and has a commitment to reducing false positives. It also allows more detailed walk-throughs in the manual testing arena. Google leverages aXe in their Lighthouse tool which is available as a browser and command line tool (CLI) for automated reviews. aXe is also very easy to integrate with Puppeteer, Jira and GitHub.

## Manual testing

We do both automated and manual testing — we miss a lot of problems if we only do automated testing. The latter only currently covers 40% of accessibility issues.

We used an [accessibility checklist created](https://accessibility.18f.gov/checklist/) (this one was created by 18F, the US government's digital agency) to help you test for common accessibility problems, including:

* lack of keyboard accessibility (important because people who use screen readers, voice recognition or have situational, temporary of permanent mobility-related disabilities may rely on using a keyboard to navigate websites)  
* ensure that the content is written in plain language  
* link text that's not descriptive (for example, 'click here' and 'read more' links)  
* lack of colour contrast for text and important graphics or lack of proper controls  
* non-decorative images not having meaningful alt text  
* [Online forms](https://design-system.service.gov.uk/components/) not being marked up correctly, so the right control is associated with the right label

Some browsers have tools that make it easier to find accessibility problems in the Document Object Model (DOM). For example, [accessibility Inspector for Mozilla Firefox](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector), the [accessibility features in Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/accessibility/reference), and the [Accessibility Object Model](https://wicg.github.io/aom/).

## Cross-browser testing

For cross-browser testing, we try to ensure our services work on the following browsers:

* [Chrome](https://www.google.com/chrome)  
* [Firefox](https://www.mozilla.org/firefox/new/)  
* [Microsoft Edge](https://www.microsoft.com/windows/microsoft-edge)  
* [Safari](https://www.apple.com/safari/)

## Adaptive technology audits

At CDS, our platform teams have worked with [Inclusive Design Research Centre \- OCADU](https://idrc.ocadu.ca/consulting/) to run a full accessibility audit of our tools as well as [Fable](https://makeitfable.com/) to go through our product user flows using assistive technology. 

## Examples from our work

* [How we're building GC Forms: Our 4 accessible approaches](https://digital.canada.ca/2023/02/16/how-were-building-gc-forms-our-4-accessible-approaches/)

* [Blog ⋅ digital.canada.ca](https://digital.canada.ca/2023/02/16/how-were-building-gc-forms-our-4-accessible-approaches/)

## Related resources

* [Accessibility in the product lifecycle](https://resources.alpha.canada.ca/resource/a11y-product-lifecycle)  
* [Usability testing](https://resources.alpha.canada.ca/resource/usability-testing)  
* [Triaging accessibility issues](https://resources.alpha.canada.ca/resource/triaging-accessibility-issues)  
* [Our commitment to accessibility and inclusivity](https://resources.alpha.canada.ca/resource/our-commitment)

