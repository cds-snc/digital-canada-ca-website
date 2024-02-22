let blogIndex, blogResults;
let blogRows = 6;
let blogListResults = document.getElementById("blog-list-result")
let myBlogLi = document.getElementById("my-blog-li")
let loadMoreBlogButton = document.querySelector("#blog-btn")
let allBlogBtn = document.getElementById("all-btn")
let jsMainNavButton = document.querySelector("#js-mainNavButton")
// let softwareBlogBtn = document.getElementById("software-btn")
// let contentBlogBtn = document.getElementById("content-btn")
let filteredBlogs = [];
const filterObjectCategories = [
    {
        name: "Software Category",
        btnId: "software-btn"
    },
    {
        name: "Content",
        btnId: "content-btn"

    },
    {
        name: "Design",
        btnId: "design-btn"
    },
    {
        name: "Dev",
        btnId: "dev-btn"
    }
]
async function initBlogSearch() {
    try {
        const response = await fetch("/index.json")
        blogIndex = await response.json();
        // console.log(blogIndex)
    } catch (e) {
        console.error(e)
    }

    blogResults = blogIndex.filter(function (el) {
        return el.type == "blog"
    })

    console.log('init blog res')


    renderBlogResults(blogResults)
}

// renderFilteredResults = (btnName, category) => {
//     let filterBtn = document.getElementById(btnName)
//     filterBtn.addEventListener("click", () => {
//         if (filterBtn.getAttribute("button-role") == "secondary") {
//             blogIndex.filter(function (el){
//                 if (el.category == category) {
//                     filteredBlogs.push(el)
//                 }
//             })
//             filterBtn.setAttribute("button-role", "primary")

//         } else {

//             filteredBlogs = filteredBlogs.filter(el => el.category !== category)
//             filterBtn.setAttribute("button-role", "secondary")
//         }

//         renderBlogResults(filteredBlogs)
//         console.log(filteredBlogs)

//         if (filteredBlogs.length === 0) {
//             renderBlogResults(blogResults)
//         }
//     })


// }

function renderFilteredResults(btnName, category) {
    let filterBtn = document.getElementById(btnName)
    let selectedCategory;
    filterBtn.addEventListener("click", () => {
        if (filterBtn.getAttribute("button-role") == "secondary") {
            filteredBlogs = blogIndex.filter(result => {
                if (result.category) {
                    return result.category.includes(category)
                }
            })
            // blogIndex.filter(function (el) {
            //     let elementCategory = el.category

            //     if (elementCategory) {

            //         elementCategory.forEach(function (chosenCategory) {
            //             selectedCategory = chosenCategory
            //             if (selectedCategory == category) {
            //                 filteredBlogs.push(el)
                            
            //             }
            //         })

            //     } 
                

            // })
            filterBtn.setAttribute("button-role", "primary")
        } else {
            filteredBlogs = filteredBlogs.filter(result => !result.category.includes(category))
            filterBtn.setAttribute("button-role", "secondary")
        }
        // console.log('filteredBlogs', filteredBlogs)
        renderBlogResults(filteredBlogs)

        if (filteredBlogs.length === 0) {
            renderBlogResults(blogResults)
        }

    })
}

function initBlogResults() {
    document.addEventListener('DOMContentLoaded', function () {
        initBlogSearch();
    })

    for (var obj of filterObjectCategories) {
        renderFilteredResults(obj.btnId, obj.name)
    }
}
initBlogResults()

function renderBlogResults(blogs) {
    let start = 0;
    let end = start + blogRows;

    let paginatedBlogs = blogs.slice(start, end);
    var blogResultList = ""

    for (let i = 0; i < paginatedBlogs.length; i++) {
        blogResultList += `
        <li class="post">
            <div class="post-container">
                <div class="text-container">
                    <div style="margin-top: 1rem">
                        <a href='${paginatedBlogs[i].href}' class="blog-title">
                            <h2 style="font-size: 2.2rem; font-weight:600;">${paginatedBlogs[i].title}</h2>
                        </a>
                    </div>
                    <div class="date">
                        <span>${dateFormat(paginatedBlogs[i].date)}</span>
                    </div>
                    <div class="author"><span>${paginatedBlogs[i].author}</span></div>
                    <div class="summary"><p>${paginatedBlogs[i].description}</p></div>
                    <gcds-button size="small" button-role="secondary" button-id="read-full-post-btn" type="link" href='${paginatedBlogs[i].href}'>${readFullPostTranslation()}<span style="display: none">: ${paginatedBlogs[i].title}</span> <gcds-icon name="fa-solid fa-chevron-right" size="inherit"></gcds-icon></gcds-button>
                </div>
        </li>`
    }
    blogListResults.innerHTML = blogResultList

}

loadMoreBlogButton.addEventListener("click", () => {
    blogRows += 6
    renderBlogResults(blogResults)
})

allBlogBtn.addEventListener("click", () => {
    filteredBlogs = []
    renderBlogResults(blogResults)
})

// renderFilteredResults = (btnName, category) => {
//     // let filterBtn = document.getElementById(btnName)
//     btnName.addEventListener("click", () => {
//         if (btnName.getAttribute("button-role") == "secondary") {
//             blogIndex.filter(function (el){
//                 if (el.category == category) {
//                     filteredBlogs.push(el)
//                 }
//             })
//             btnName.setAttribute("button-role", "primary")

//         } else {

//             filteredBlogs = filteredBlogs.filter(el => el.category !== category)
//             btnName.setAttribute("button-role", "secondary")
//         }

//         renderBlogResults(filteredBlogs)
//         console.log(filteredBlogs)
//     })

// }


// renderFilteredResults(softwareBlogBtn, "Software Category")
// renderFilteredResults(contentBlogBtn, "Content")


function dateFormat(date) {
    let formattedDate;
    const blogDate = new Date(date)
    if (document.documentElement.lang == 'en') {
        const options = { year: 'numeric', month: 'short', day: 'numeric' }
        formattedDate = blogDate.toLocaleDateString('en-us', options)
    } else if (document.documentElement.lang == 'fr') {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        formattedDate = blogDate.toLocaleDateString('fr-ca', options)
    }

    return formattedDate;
}

function readFullPostTranslation() {

    if (document.documentElement.lang == 'en') {
        return 'Read full post'
    }
    else if (document.documentElement.lang == 'fr') {
        return 'Lire l’intégralité du billet'
    }
}