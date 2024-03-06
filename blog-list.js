var fs = require('fs');
const path = require('path')
var files = fs.readdirSync('./content/en/blog/posts/')


// const markdownContent = fs.readFileSync('./content/en/blog/posts/5-tips-to-make-your-presentations-sparkle.md', 'utf8')

// function parseFrontMatter(frontMatterContent) {
//     const frontMatter = {};
//     const lines = frontMatterContent.split('\n');
//     // console.log(frontMatterContent)
//     lines.forEach(line => {
//         // console.log(line)
//         const match = line.match(/^\s*([^:]+):\s*(.*)\s*$/);
//         console.log(match)
//         if (match) {
//             const key = match[1].trim();
//             const value = match[2].trim();
//             if (key === 'title' || key === 'author' || key === 'date' || key === 'description') {
//                 frontMatter[key] = value;
//             }
            
            
//         }
//     });

//     return frontMatter;
// }

// // Function to read Markdown file and extract front matter
// function readMarkdownFrontMatter(filePath) {
//     const fileContent = fs.readFileSync(filePath, 'utf8');
//     const frontMatterEndIndex = fileContent.indexOf('---', 4); // Find the end of front matter
    
//     if (frontMatterEndIndex !== -1) {
//         const frontMatterContent = fileContent.substring(4, frontMatterEndIndex).trim(); // Exclude the ---
//         return parseFrontMatter(frontMatterContent);
//     } else {
//         return null; // No front matter found
//     }
// }

// // console.log('markdownContent', readMarkdownFrontMatter('./content/en/blog/posts/-‘a-percentage-of-perfection’:-incident-management-at-cds.md'));
// // console.log('files', files)
// const frontMatters = [];
// // files.forEach(file => {
// //     // console.log('markdownFile', readMarkdownFrontMatter(`./content/en/blog/posts/${file}`))
// //     frontMatters.push(readMarkdownFrontMatter(`./content/en/blog/posts/${file}`))
// // })

// // console.log(frontMatters)
// const fileContent = fs.readFileSync('./content/en/blog/posts/5-tips-to-make-your-presentations-sparkle.md', 'utf8')

// readMarkdownFrontMatter('./content/en/blog/posts/5-tips-to-make-your-presentations-sparkle.md')

