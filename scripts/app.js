window.onload = () => {
  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });

  // Close the menu when switching to desktop view
  window.addEventListener("resize", function () {
    const desktopBreakpoint = 768;

    if (window.innerWidth >= desktopBreakpoint) {
      // If we're in desktop view, ensure mobile menu is closed
      menu_btn.classList.remove("is-active");
      mobile_menu.classList.remove("is-active");
    }
  });
};
