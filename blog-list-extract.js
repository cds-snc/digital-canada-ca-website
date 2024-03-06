var fs = require('fs');

const XLSX = require('xlsx');
// const markdownContent = fs.readFileSync('./content/en/blog/posts/5-tips-to-make-your-presentations-sparkle.md', 'utf8')
let newBlogIndex, newBlogResults;

async function initBlog() {
    try {
        const response = await fetch ("https://numerique.canada.ca/index.json")
        newBlogIndex = await response.json();
        
    } catch (e) {
        console.error(e)
    }
    

    newBlogResults = newBlogIndex.filter(function (el){
        return el.type == "blog"
    })
    
    return newBlogResults
}

async function extractToList() {
    // let blogList = initBlog().then((res) => {
    //     return res
    // })
    let newBlogData = [];
    let blogList = await initBlog();
    blogList.forEach(blog => {
        // console.log(blog.title)
        const extractedData = {
            title: blog.title,
            description: blog.description,
            date: blog.date,
            url: `https://numerique.canada.ca/${blog.href}`
        }
        
        newBlogData.push(extractedData)
    })
    const ws = XLSX.utils.json_to_sheet(newBlogData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, 'extracted_blog_data_fr.xlsx');
}

extractToList()

// console.log(initBlog())

function markdownFileToObject(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const [frontMatterContent, markdownContent] = fileContent.split('---').slice(1);
    // console.log('frontmatter', frontMatterContent)
    const frontMatterFields = {};
    frontMatterContent.trim().split('\n').forEach(line => {
        const [key, value] = line.split(':').map(part => part.trim());
        frontMatterFields[key] = value;
    });
    
    let obj = frontMatterFields
    const [key, value] = Object.entries(obj)[3]
    obj.description = key
    delete obj[key]
    
    // console.log(obj)

    const extractedData = {
        title: obj.title,
        description: obj.description,
        author: obj.author,
        date: obj.date
    }

    return extractedData

    
}

// markdownFileToObject('./content/en/blog/posts/5-tips-to-make-your-presentations-sparkle.md')

// function getAllPosts() {
//     const frontMatters = [];
//     files.forEach(file => {
//         console.log('file', file)
//         frontMatters.push(markdownFileToObject(`./content/en/blog/posts/${file}`))
//     })

//     return frontMatters
// }

// console.log(markdownFileToObject('./content/en/blog/posts/5-tips-to-make-your-presentations-sparkle.md'))


// const ws = XLSX.utils.json_to_sheet(getAllPosts());
// const wb = XLSX.utils.book_new();
// XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

// XLSX.writeFile(wb, 'extracted_data_en.xlsx');