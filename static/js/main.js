// main.js
document.addEventListener("DOMContentLoaded", function() {
  const imagePaths = document.getElementById("image-paths");
  const iconCloseSrc = imagePaths.dataset.closeSrc;
  const iconHamburgerSrc = imagePaths.dataset.hamburgerSrc;

  const menuBtn = document.querySelector(".menu-btn");

  menuBtn.addEventListener("click", () => {
      const menu = document.querySelector(".nav-links");
      const icon = menuBtn.querySelector("img");
      menu.classList.toggle("active");
      if (menu.classList.contains("active")) {
          icon.src = iconCloseSrc;
          document.body.style.overflow = "hidden";
      } else {
          icon.src = iconHamburgerSrc;
          document.body.style.overflow = "auto";
      }
  });
});
