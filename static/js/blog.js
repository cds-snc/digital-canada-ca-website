let blogIndex, blogResults;
let blogRows = 6;
let blogListResults = document.getElementById("blog-list-result");
let myBlogLi = document.getElementById("my-blog-li");
let loadMoreBlogButton = document.querySelector("#blog-btn");
let allBlogBtn = document.getElementById("all-btn");
let jsMainNavButton = document.querySelector("#js-mainNavButton");
// let softwareBlogBtn = document.getElementById("software-btn")
// let contentBlogBtn = document.getElementById("content-btn")
let filteredBlogs = [];
const blogCategories = [
    {
        // Example: ["Ways of working", "GC Digital", "CDS news"],
        Example: ["Ways of working"]
    },
    {
        // Topic: ["Accessibility", "Bilingualism", "Inclusion"],
        Topic: ["Accessibility"]
    },
    {
        // Discipline: ["Research", "Service design", "Content design"],
        Discipline: ["Research", "Service design"]
    },
    {
        // Product: ["GC Forms", "GC Notify", "GC Design System"],
        Product: ["GC Design System"]
    },
];

const container = document.getElementById("categories-div");

let blogCategoryList = "";


function renderBlogCategories() {
    let set = ""
    blogCategories.forEach((category) => {
        const categoryName = Object.keys(category)[0];
        set += `<gcds-fieldset id="${categoryName}" fieldset-id="${categoryName}Fieldset" legend="${categoryName}"></gcds-fieldset>`
    })
    container.innerHTML = set

    blogCategories.forEach((category) => {
        const [key, values] = Object.entries(category)[0]
        let vals = "";
        let fieldset = document.getElementById(key)
        values.forEach((value) => {
            let name = `${key}Fieldset`;
            vals += `<gcds-checkbox id="${formatString(value)}" checkbox-id="${value}" label="${value}" name="${name}" value="${value}"></gcds-checkbox>`;
        })

        fieldset.innerHTML = vals;
    })
}

function formatString(str) {
    // Remove spaces and replace them with "-"
    const formattedStr = str.replace(/\s+/g, '-');
    // Convert the string to lowercase
    const lowercaseStr = formattedStr.toLowerCase();
    return lowercaseStr;
}


async function initBlogSearch() {
    try {
        const response = await fetch("/index.json");
        blogIndex = await response.json();
    } catch (e) {
        console.error(e);
    }

    blogResults = blogIndex.filter(function (el) {
        return el.type == "blog";
    });

    renderBlogResults(blogResults);
}
let selectedCategories = [];
function renderFilteredResults(btnName, category) {
    let filterBtn = document.getElementById(btnName)
    
    
    // filterBtn.addEventListener('change', e => {

    //     if (e.target.checked === true) {
    //         selectedCategories.push(e.target.value)
    //     } 
    //     else if (e.target.checked === false){
            

    //         let indexToRemove = selectedCategories.indexOf(e.target.value)
    //         if (indexToRemove !== -1) {
    //             selectedCategories.splice(indexToRemove, 1)
    //         }
    //     }

    //     filteredBlogs = blogIndex.filter(blog => {
    //         if (blog.category === null) {
    //             return selectedCategories.length === 0;
    //         }
    //         return selectedCategories.some(selectedCategory => {
    //             return blog.category.includes(selectedCategory)
    //         })
    //     })
    //     console.log('FB:', filteredBlogs);
    //     // renderBlogResults(filteredBlogs)
        
    // })

    filterBtn.addEventListener('change', e => {
        if (e.target.checked === true) {
            selectedCategories.push(e.target.value)
        }
        else if (e.target.checked === false) {
            let indexToRemove = selectedCategories.indexOf(e.target.value)
            if (indexToRemove !== -1) {
                selectedCategories.splice(indexToRemove, 1)
            }
        }

        filteredBlogs = blogIndex.filter(blog => {
            if (blog.category === null) {
                return selectedCategories.length === 0;
            }

            if (checkIfCategoriesMatch(blog.category, selectedCategories) === true) {
                return blog
            }
        })
        renderBlogResults(filteredBlogs)
        // console.log(filteredBlogs)
    })

    
}

function checkIfCategoriesMatch(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    const sortedArr1 = arr1.slice().sort();
    const sortedArr2 = arr2.slice().sort();

    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) return false;
    }

    return true;
}


function initBlogResults() {
    document.addEventListener("DOMContentLoaded", function () {
        initBlogSearch();
    });

    renderBlogCategories();



    blogCategories.forEach((category) => {
        const [key, values] = Object.entries(category)[0]
        values.forEach((value) => {
            renderFilteredResults(formatString(value), value)
        })
    })

}
initBlogResults();

function renderBlogResults(blogs) {
    let start = 0;
    let end = start + blogRows;

    let paginatedBlogs = blogs.slice(start, end);
    var blogResultList = "";

    for (let i = 0; i < paginatedBlogs.length; i++) {
        blogResultList += `
        <li class="post">
            <div class="post-container">
                <div class="text-container">
                    <div style="margin-top: 1rem">
                        <a href='${paginatedBlogs[i].href}' class="blog-title">
                            <h2 style="font-size: 2.2rem; font-weight:600;">${paginatedBlogs[i].title
            }</h2>
                        </a>
                    </div>
                    <div class="date">
                        <span>${dateFormat(paginatedBlogs[i].date)}</span>
                    </div>
                    <div class="author"><span>${paginatedBlogs[i].author
            }</span></div>
                    <div class="summary"><p>${paginatedBlogs[i].description
            }</p></div>
                    <gcds-button size="small" button-role="secondary" button-id="read-full-post-btn" type="link" href='${paginatedBlogs[i].href
            }'>${readFullPostTranslation()}<span style="display: none">: ${paginatedBlogs[i].title
            }</span> <gcds-icon name="fa-solid fa-chevron-right" size="inherit"></gcds-icon></gcds-button>
                </div>
        </li>`;
    }
    blogListResults.innerHTML = blogResultList;
}

loadMoreBlogButton.addEventListener("click", () => {
    blogRows += 6;
    renderBlogResults(blogResults);
});

function dateFormat(date) {
    let formattedDate;
    const blogDate = new Date(date);
    if (document.documentElement.lang == "en") {
        const options = { year: "numeric", month: "short", day: "numeric" };
        formattedDate = blogDate.toLocaleDateString("en-us", options);
    } else if (document.documentElement.lang == "fr") {
        const options = { year: "numeric", month: "long", day: "numeric" };
        formattedDate = blogDate.toLocaleDateString("fr-ca", options);
    }

    return formattedDate;
}

function readFullPostTranslation() {
    if (document.documentElement.lang == "en") {
        return "Read full post";
    } else if (document.documentElement.lang == "fr") {
        return "Lire l’intégralité du billet";
    }
}
