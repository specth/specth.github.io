let resizeBlogPostImage = () => {
    let blog__entries = document.getElementsByClassName("blogPreview");
    let blog__images = document.getElementsByClassName("blogImage");
    let imagesHeight = [];

    if (window.innerWidth > 768) {
        for (entry of blog__entries) {
            let height = entry.clientHeight - 50;
            imagesHeight.push(height)
        }

        for (let i = 0; i < imagesHeight.length; i++) {
            blog__images[i].style.height = imagesHeight[i] + "px";
        }
    } else if (blog__images[0].clientHeight != 150) {
        for (image of blog__images) {
            image.style.height = "150px";
        }
    }
}

let createBlogPostShortDescription = () => {
    let blog__posts = document.getElementsByClassName("shortDescription");
    let blog__links = document.querySelectorAll("div h2 a");

    for (let i = 0; i < blog__posts.length; i++) {
        link = blog__links[i].getAttribute("href");
        shortDescription = blog__posts[i].innerText.substr(0, 245);

        blog__posts[i].innerHTML = shortDescription + "\u2026 <a href='" + link + "'>[mehr]</a>";
    }
}

window.addEventListener("load", () => {
    createBlogPostShortDescription();
    resizeBlogPostImage();

    window.addEventListener("resize", () => {
        resizeBlogPostImage();
    });
});