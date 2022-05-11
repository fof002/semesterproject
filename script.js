document.getElementById("mobile-navigation").addEventListener("click", openMenu);
function openMenu () {
    document.getElementById("dropdown").classList.toggle("active")
}

document.getElementById("mobile-navigation").addEventListener("click", changeIcon);
function changeIcon () {
    document.getElementById("mobile-navigation").classList.toggle("fa-x")
}