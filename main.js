document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu_btn");
  const navLinks = document.getElementById("nav_links");
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuBtnIcon.className = isOpen
      ? "ri-close-line"
      : "ri-menu-4-line";
  });
});