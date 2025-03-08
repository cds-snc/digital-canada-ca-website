[La version française suit.](#---------------------------------------------------------------------)

# Canadian Digital Service website - digital.canada.ca

This is the official website for the Canadian Digital Service. 

Both [digital.canada.ca](http://digital.canada.ca) (English site) and [numerique.canada.ca](http://numerique.canada.ca) (French site) are published from this repository.

**Table of contents:** 
* How to install and run
* Accessibility Testing
* Content Management System (CMS)
    * How to contribute
    * Submitting pull requests

## How to install and run

Powered by [Hugo](https://gohugo.io/) and [GC Design System Components](https://github.com/cds-snc/gcds-components).

1. Clone the repository.

   ```
   git clone https://github.com/cds-snc/digital-canada-ca-website.git
   ```

2. If you do not have Hugo installed on your machine, you will need to install it. We are running on v0.136.0 ([v0.136.0](https://github.com/gohugoio/hugo/releases/tag/v0.136.0)). You can grab the appropriate [tar file here](https://github.com/gohugoio/hugo/releases/tag/v0.136.0), making sure to select the extended version. Then, [follow these instructions for installing it](https://bwaycer.github.io/hugo_tutorial.hugo/tutorials/installing-on-mac/#from-tarball). If you run into permissions issues, [here is a handy article to help fix the permissions](https://codewithhugo.com/catalina-permission-command-line-fix/).

3. Serve:

   ```
   hugo server -D
   ```

The English and French versions will be hosted at [localhost:1313](http://localhost:1313) and [localhost:1314](http://localhost:1314), respectively.

## Accessibility Testing

We have two approaches for running accessibility tests:

### Jest with Axe-core

Run the accessibility tests:
```
npm run a11y:test      # Test all pages
npm run a11y:test:en   # Test only English pages 
npm run a11y:test:fr   # Test only French pages
```

This runs automated accessibility tests on key pages using jest-axe.

### Visual Regression Testing with BackstopJS

Create reference screenshots:
```
npm run backstop:reference      # All pages
npm run backstop:reference:en   # English pages only
npm run backstop:reference:fr   # French pages only
```

Run the tests:
```
npm run backstop:test      # All pages
npm run backstop:test:en   # English pages only
npm run backstop:test:fr   # French pages only
```

This performs visual regression testing and also runs axe-core accessibility tests on each page.

## Content Management System (CMS)
We use [GC Articles](https://github.com/cds-snc/gc-articles) as our content management system (CMS). 

The following forms of content are managed by this CMS:
* Blog posts

## How to contribute

We welcome all contributions, both internal and outside of CDS! Contributions can include fixes for:
* typos
* spelling and grammatical errors
* outdated links and information 

All content should follow [markdown syntax](https://guides.github.com/features/mastering-markdown/).

To contribute, regardless if it is content managed by our CMS or not, please submit a pull request.

### Submitting pull requests

Please tag all pull requests with the `needs-review` label. 

We will do our best to respond within the timeframe of 3 business days and will provide an update once your changes have been made.

## ---------------------------------------------------------------------

# Site Web du Service numérique canadien — numerique.canada.ca

Ceci est le site officiel du Service numérique canadien.

Les sites [digital.canada.ca](http://digital.canada.ca/) (site en anglais) et [numerique.canada.ca](http://numerique.canada.ca/) (site en français) sont tous deux publiés à partir de ce référentiel.

**Table des matières :** 
* Installation et exécution
* Tests d'accessibilité
* Système de gestion de contenu (SGC)
    * Apportez votre contribution
    * Soumettre des demandes de tirage (pull request)

## Installation et exécution

Créé à l’aide de [Hugo](https://gohugo.io/) et des [composants du Système de design GC](https://github.com/cds-snc/gcds-components).

1. Clonez le référentiel.

   ```
   git clone https://github.com/cds-snc/digital-canada-ca-website.git
   ```

2. Installez Hugo sur votre ordinateur, si ce n’est pas déjà fait.

   ```
   brew install hugo
   ```

3. Exécutez le serveur local.

   ```
   hugo server -D
   ```

Les versions française et anglaise seront hébergées à [localhost:1314](http://localhost:1314) et à [localhost:1313](http://localhost:1313), respectivement.

## Tests d'accessibilité

Nous avons deux approches pour exécuter des tests d'accessibilité :

### Jest avec Axe-core

Exécuter les tests d'accessibilité :
```
npm run a11y:test      # Tester toutes les pages
npm run a11y:test:en   # Tester uniquement les pages en anglais 
npm run a11y:test:fr   # Tester uniquement les pages en français
```

Cela exécute des tests d'accessibilité sur des pages clés à l'aide de jest-axe.

### Tests de régression visuelle avec BackstopJS

Créer des captures d'écran de référence :
```
npm run backstop:reference      # Toutes les pages
npm run backstop:reference:en   # Pages en anglais uniquement
npm run backstop:reference:fr   # Pages en français uniquement
```

Exécuter les tests :
```
npm run backstop:test      # Toutes les pages
npm run backstop:test:en   # Pages en anglais uniquement
npm run backstop:test:fr   # Pages en français uniquement
```

Cela effectue des tests de régression visuelle et exécute également des tests d'accessibilité axe-core sur chaque page.

## Système de gestion de contenu (SGC)

Nous utilisons [GC Articles](https://github.com/cds-snc/gc-articles) comme système de gestion de contenu (SGC). 

Nous hébergeons les contenus suivants dans ce SGC :
* Articles de blogue

## Apportez votre contribution

Nous accueillons toutes les contributions internes et externes au SNC! Par contributions, nous entendons des suggestions de correctifs pour les éléments suivants :
* erreurs de frappe
* erreurs d’orthographe ou de grammaire
* liens et renseignements désuets 

Tout contenu doit suivre la [syntaxe Markdown](https://guides.github.com/features/mastering-markdown/).

Pour apporter une contribution, qu’il s’agisse de contenu hébergé dans le SGC ou non, veuillez soumettre une demande de tirage (pull request) dans Github.

## Soumettre des demandes de tirage (pull request)

Veuillez ajouter l’étiquette « `needs-review` » à toute demande de tirage. 

Nous ferons de notre mieux pour y répondre dans les trois jours ouvrables et vous fournir une mise à jour lorsque les changements proposés auront été appliqués.
