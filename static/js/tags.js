document.addEventListener('DOMContentLoaded', function() {
    
    let tagsLoadMoreBtn = document.querySelector("#tags-blog-btn")
    if (!tagsLoadMoreBtn) {
        console.error("Load more tags button not found");
        return;
    }

    const hiddenPosts = document.querySelectorAll('.hidden-post');
    let currentIndex = 0;
    const postsPerPage = 6;

    function showMorePosts() {
        for (let i = currentIndex; i < currentIndex + postsPerPage; i++) {
            if (hiddenPosts[i]) {
                hiddenPosts[i].classList.remove('hidden-post');
            }
        }
        currentIndex += postsPerPage;

        if (currentIndex >= hiddenPosts.length) {
            tagsLoadMoreBtn.classList.add('fade-out');
            setTimeout(() => {
                tagsLoadMoreBtn.classList.add('fade-out-hidden')
            }, 500)
        }
    }

    tagsLoadMoreBtn.addEventListener("click", () => {
        showMorePosts();
    }
    )
})