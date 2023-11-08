let blogIndex, blogResults;
let blogRows = 6;
let blogListResults = document.getElementById("blog-list-result")
let myBlogLi = document.getElementById("my-blog-li")
// let loadMoreBlogButton = document.getElementById("load-more-blog-btn")
let loadMoreBlogButton = document.querySelector("#blog-btn")
let jsMainNavButton = document.querySelector("#js-mainNavButton")
async function initBlogSearch() {
    try {
        const response = await fetch ("/index.json")
        blogIndex = await response.json();
    } catch (e) {
        console.error(e)
    }

    blogResults = blogIndex.filter(function (el){
        return el.type == "blog"
    })

    console.log('blogResults is : ', blogResults)
    renderBlogResults(blogResults)
}

function initBlogResults() {
    document.addEventListener('DOMContentLoaded', function() {
        initBlogSearch();
    })
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
            <div class="row post-container">
                <div class="text-container">
                    <div>
                        <a href='${paginatedBlogs[i].href}' class="blog-title">
                            <h2 style="font-size: 2.2rem; font-weight:600;">${paginatedBlogs[i].title}</h2>
                        </a>
                    </div>
                    <div class="date">
                        ${dateFormat(paginatedBlogs[i].date)}
                    </div>
                    <div class="author">${paginatedBlogs[i].author}</div>
                    <div class="summary">${paginatedBlogs[i].description}</div>
                    <gcds-button size="small" button-id="read-full-post-btn" type="link" href='${paginatedBlogs[i].href}'>${readFullPostTranslation()}<gcds-icon name="fa-solid fa-chevron-right" size="inherit"></gcds-icon></gcds-button>
                </div>
        </li>`
    }
    blogListResults.innerHTML = blogResultList
    
}

loadMoreBlogButton.addEventListener("click", () => {
    blogRows += 6
    renderBlogResults(blogResults)
})

function dateFormat(date) {
    let formattedDate;
    const blogDate = new Date(date)
    if (document.documentElement.lang == 'en') {
        const options = {year: 'numeric', month: 'short', day: 'numeric'}
        formattedDate = blogDate.toLocaleDateString('en-us', options)
    } else if (document.documentElement.lang == 'fr') {
        const options = {year: 'numeric', month: 'long', day: 'numeric'}
        formattedDate = blogDate.toLocaleDateString('fr-ca', options)
    }
    
    return formattedDate;
}

function readFullPostTranslation() {
    let readFullPost;

    if (document.documentElement.lang == 'en') {
        return 'Read full post '
    }
    else if (document.documentElement.lang == 'fr') {
        return 'FR Read full post '
    }
}