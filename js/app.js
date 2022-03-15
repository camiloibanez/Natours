let navLinks = document.querySelectorAll(".navigation__link");
let navToggle = document.querySelector("#navi-toggle");

function uncheckBox() {
    navToggle.checked = !navToggle.checked;
}
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', uncheckBox);
}