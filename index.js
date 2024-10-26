/* -------------------------- HEADER (FLOAT) -------------------------- */

const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  header.classList.toggle("float", window.scrollY > 80);
});

/* -------------------------- MENU ICON / NAVIGATION LIST -------------------------- */
function xmenu(x) {
  x.classList.toggle("change");
  document.querySelector(".navlist").classList.toggle("active");
}

/* -------------------------- GRADIENT MOUSE POINTER -------------------------- */
const cursor = document.querySelector('.gradient');

document.addEventListener('mousemove', function(e) {
    cursor.style.left = `${e.clientX - 250}px`;
    cursor.style.top = `${e.clientY - 250}px`; 
});



