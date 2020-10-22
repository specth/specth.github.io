let openNav = function() {
    document.getElementById("mySidenav").style.width = "100%";
}

let closeNav = function() {
    document.getElementById("mySidenav").style.width = "0";
}

let hightlightCurrentPage = function() {
    switch (window.location.pathname) {
        case ("/"):
            document.getElementById("desktop-nav-about").classList.add("active");
            break;
        case ("index.html"):
            document.getElementById("desktop-nav-about").classList.add("active");
            break;
        case ("javascript.html"):
            document.getElementById("desktop-nav-vanilla").classList.add("active");
            break;
        case ("/blog.html"):
            document.getElementById("desktop-nav-blog").classList.add("active");
            break;
        case ("impressum.html"):
            document.getElementById("desktop-nav-impressum").classList.add("active");
            break;
        default:
            document.getElementById("desktop-nav-blog").classList.add("active");
            break;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    hightlightCurrentPage();
});