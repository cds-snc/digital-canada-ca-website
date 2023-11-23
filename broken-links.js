const fs = require("fs");
const filesEN = fs.readdirSync('./content/en/blog/posts/')
const filesFR = fs.readdirSync('./content/fr/blog/posts/')
let enBlogs = []
let enSet = new Set();
let frSet = new Set();
const enBrokenLinks = ['/careers/', '/coaching-and-advice/', '/product-suite/', '/our-values/', '/cppd-research/', '/guides/', '/website-usability-testing/', '/phonetic-alphabet/', '/covid-alert-research-signup/', '/a11y/', '/partnerships/', '/interaction-designers/', '/content-designers/', '/service-designers/', '/visual-designers/', '/files/', '/roadmap-2025/', '/join-our-team/', '/meet-the-team/', '/beginning-the-conversation/', '/senior-procurement-advisor/', '/legal/', '/careers/positions/']
const frBrokenLinks = ['/suite-de-produits/', '/encadrement-et-conseil/', '/a11y/', '/feuille-de-route-2025/', '/guides/', '/inscription-recherche-alerte-covid/', '/nos-valeurs/', '/test-d-utilisabilite-du-site-web/', '/commencement-de-la-conversation/', '/concepteurs-dinteraction/', '/concepteurs-de-contenu/', '/concepteurs-de-services/', '/concepteurs-visuels/', '/feuille-de-route-2025/', '/partenariats/', '/lexique-du-langage-inclusif/', '/rencontrez-lequipe/', '/careers/positions/', '/transparence/']

// test("UUID in correct format EN", () => {
//   filesEN.forEach((element) => {
//     let data = fs.readFileSync(
//       `./content/en/careers/positions/${element}`,
//       "utf8"
//     );
//     if (archFalse.test(data)) {
//       const found = data.match(UUIDRegex);
//       expect(found).not.toBeNull();
//     }
//   });
// });

filesEN.forEach((element) => {
    let data = fs.readFileSync(`./content/en/blog/posts/${element}`, "utf8")
    enBrokenLinks.forEach((el) => {
        if (data.includes(el)) {
            // enBlogs.push(element)
            enSet.add(element)
        }
    })
})

filesFR.forEach((element) => {
    let data = fs.readFileSync(`./content/fr/blog/posts/${element}`, "utf8")
    frBrokenLinks.forEach((el) => {
        if (data.includes(el)) {
            frSet.add(element)
        }
    })
})

console.log(enSet)
console.log(frSet)

// fs.readFile('./content/en/blog/posts/-‘a-percentage-of-perfection’:-incident-management-at-cds.md', 'utf8' , function (err, data) {
//     if (err) throw err;
//     if (data.includes('coaching-and-advice')) {
//         console.log('data is: ', data)
//     }
// })
