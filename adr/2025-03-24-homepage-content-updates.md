# Homepage architecture decision record

## Overview
The homepage architecture should work better for the CDS site because:

  1. Each language's _index.html defines its own sections and product lists
  2. Section titles are defined directly in the language-specific front matter
  3. The lookup system uses the product filenames to find the actual products
  4. We've added debugging to help identify any issues
  5. We have fallbacks for missing products and empty sections
  6. No content is hardcoded in the layouts

  The key advantages of this approach:

  1. Complete flexibility to adjust the order and grouping of products by language
  2. Localized section titles without relying on i18n strings
  3. No dependency on weights, which makes it easier to maintain
  4. Clear organization in the front matter, making it easy to understand the structure

  With this implementation, we can maintain the homepage layout by simply editing the front
  matter in the _index.html files for each language.

Date modified: 2025-03-25