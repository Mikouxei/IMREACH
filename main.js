/* -------------------------- HEADER (FLOAT) -------------------------- */

const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  header.classList.toggle("float", window.scrollY > 80);
});

/* -------------------------- MENU ICON -------------------------- */
function xmenu(x) {
  x.classList.toggle("change");
  document.querySelector(".navlist").classList.toggle("active");
}

/* -------------------------- NAVIGATION LINK-------------------------- */
const navLinks = document.querySelectorAll(".navlist a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  document.querySelectorAll("section").forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});

/* -------------------------- GRADIENT MOUSE POINTER -------------------------- */
const cursor = document.querySelector('.gradient');

document.addEventListener('mousemove', function(e) {
  cursor.style.left = (e.clientX - 250) + "px";
  cursor.style.top = (e.clientY - 250) + "px";
});


/* -------------------------- CUSTOM CURSOR -------------------------- */
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {

  cursorDot.style.left = e.clientX + "px";
  cursorDot.style.top = e.clientY + "px";
  
  cursorOutline.animate({
    left: e.clientX + "px",
    top: e.clientY + "px"
  }, {duration: 500, fill: "forwards"});
});
