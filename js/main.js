let nav = document.querySelector(".nav-links");
let navToggle = document.querySelector(".nav-toogle");
navToggle.addEventListener("click", function () {
  nav.classList.toggle("show-links");
});

//sctoll
const scrollLinks = document.querySelectorAll(".scroll-link");


scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
   
    e.preventDefault();
    nav.classList.remove("show-links");
    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let = position = element.offsetTop - 62;
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});
