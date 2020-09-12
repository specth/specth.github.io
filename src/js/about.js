let hideImageOverlay = function() {
    let aboutMeImageOverlay = document.querySelector("#about-me-image h2");
    let aboutMeImage = document.getElementById("about-me-image");

    aboutMeImage.onmouseover = function() {
        aboutMeImageOverlay.style.opacity = "0";
    };
    aboutMeImage.onmouseout = function() {
        aboutMeImageOverlay.style.opacity = "1";
    }
}

window.addEventListener("load", () => {
    hideImageOverlay();
});