let createBlogPostShortDescription = () => {
    let blog__posts = document.getElementsByClassName("shortDescription");
    let blog__links = document.querySelectorAll("div h2 a");

    for (let i = 0; i < blog__posts.length; i++) {
        link = blog__links[i].getAttribute("href");
        shortDescription = blog__posts[i].innerText.substr(0, 245);

        blog__posts[i].innerHTML = shortDescription + "\u2026 <a href='" + link + "'>[mehr]</a>";
    }
}

let alignColumnHeight = () => {
    let blog__rows = document.getElementsByClassName("row");
    console.log(blog__rows)

    // substract number of rows by 1 to exclude footer row
    for(let i = 0; i < blog__rows.length - 1; i++) {
        let rowHeight = blog__rows[i].clientHeight - 60;
        let rowColumns = blog__rows[i].querySelectorAll(".shadow")

        for(let i = 0; i < rowColumns.length; i++) {
            console.log(rowColumns[i]);
            rowColumns[i].style.height = rowHeight + "px";
        }
    }
}

window.addEventListener("load", () => {
    alignColumnHeight();
});

// Ugly method to resize when browser width changes.
var resizeId;
window.addEventListener('resize', function() {
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 100);
});

function doneResizing(){
    location.reload();
}

window.addEventListener("load", () => {
    createBlogPostShortDescription();
});