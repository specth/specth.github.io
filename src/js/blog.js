window.addEventListener("load", () => {
    let blog__posts = document.getElementsByClassName("shortDescription");

    for (post of blog__posts) {
        post.innerText = post.innerText.substr(0, 200) + "\u2026";
    }

    /*  
        let blog__entries = document.getElementsByClassName("blogPreview");
        let blog__images = document.getElementsByClassName("blogImage");

        let imagesHeight = [];
        for (entry of blog__entries) {
            let height = entry.clientHeight - 50;
            imagesHeight.push(height)
        }

        for (let i = 0; i < imagesHeight.length; i++) {
            blog__images[i].style.height = imagesHeight[i] + "px";
            console.log(blog__images[i]);
            console.log(imagesHeight[i]);
            console.log(document.getElementsByClassName("blogImage")[i].clientHeight);
        }
    */


});