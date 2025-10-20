let blogIndex, blogResults;
let blogRows = 6;
let blogListResults = document.getElementById("blog-list-result")
let myBlogLi = document.getElementById("my-blog-li")
let loadMoreBlogButton = document.querySelector("#blog-btn")
let jsMainNavButton = document.querySelector("#js-mainNavButton")
let lang = document.documentElement.lang
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
            <div class="post-container">
                <div class="text-container">
                    <div style="margin-top: 1rem">
                      <h2 style="font-size: 2.2rem; font-weight:600;">
                        <a href='${ paginatedBlogs[ i ].href }' class="blog-title">
                          ${ paginatedBlogs[ i ].title }
                        </a>
                      </h2>
                    </div>
                    <div class="date">
                        <span>${ dateFormat( paginatedBlogs[ i ].date ) }</span>
                    </div>
                    <div class="author">
                        <span>${ paginatedBlogs[ i ].author }</span>
                    </div>
                    <div class="summary">
                        <p>${ paginatedBlogs[ i ].description }</p> 
                    </div>
                    <gcds-button size="small" button-role="secondary" button-id="read-full-post-btn" type="link" href='${ paginatedBlogs[ i ].href }'>${ readFullPostTranslation() }
                        <gcds-sr-only tag="span">: ${ paginatedBlogs[ i ].title }</gcds-sr-only>
                        <gcds-icon name="chevron-right" | size="inherit"></gcds-icon>
                    </gcds-button>
                    ${ paginatedBlogs[ i ].tags && paginatedBlogs[ i ].tags.length > 0 ? `
                    <div class="tags">
                        <p><b>Topics:</b>&nbsp;
                        ${ paginatedBlogs[ i ].tags.map( tag => `<a href="/tags/${tag.toLowerCase().replace( /\s+/g, '-' )}/" class="tag">${tag}</a>` ).join( ', ' )}
                        </p>
                    </div>
                     ` : '' }
                </div>
            </div>
        </li>`
    }
    blogListResults.innerHTML = blogResultList
    
}

loadMoreBlogButton.addEventListener( "click", () => {
    blogRows += 6
    renderBlogResults( blogResults )
})

function dateFormat( date ) {
    let formattedDate;
    const blogDate = new Date( date )
    if ( document.documentElement.lang == 'en' ) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' }
        formattedDate = blogDate.toLocaleDateString( 'en-us', options )
    } else if ( document.documentElement.lang == 'fr' ) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        formattedDate = blogDate.toLocaleDateString( 'fr-ca', options )
    }

    return formattedDate;
}

function readFullPostTranslation() {
    let readFullPost;

    if ( document.documentElement.lang == 'en' ) {
        return 'Read full post'
    }
    else if ( document.documentElement.lang == 'fr' ) {
        return 'Lire l’intégralité du billet'
    }
}