const leftNav = document.querySelector(".left-nav");
const menub = document.querySelector(".menu-b");
const rotateBtn = document.querySelector("#rotate-btn");

leftNav.addEventListener("click", () => {
  menub.classList.toggle("active");
  rotateBtn.classList.toggle("rotate");
});
