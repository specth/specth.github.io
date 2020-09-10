function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function hightlightCurrentPage() {
    switch (window.location.pathname) {
        case ("/index.html"):
            document.getElementById("desktop-nav-about").classList.add("active");
            break;
        case ("/javascript.html"):
            document.getElementById("desktop-nav-vanilla").classList.add("active");
            break;
        case ("/blog.html"):
            document.getElementById("desktop-nav-blog").classList.add("active");
            break;
        case ("/impressum.html"):
            document.getElementById("desktop-nav-impressum").classList.add("active");
            break;
        default:
            break;
    }
    console.log(window.location.pathname);
}

document.addEventListener("DOMContentLoaded", function() {
    hightlightCurrentPage();
});