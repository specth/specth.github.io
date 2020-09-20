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
});