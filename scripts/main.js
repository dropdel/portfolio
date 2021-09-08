const menuButton = document.querySelector(".menu-button");
const navMenu = document.querySelector(".nav-menu");
let menuOpen = false;
menuButton.addEventListener("click", () => {
  if (!menuOpen) {
    menuButton.classList.add("open");
    navMenu.classList.add("open");
    menuOpen = true;
  } else {
    menuButton.classList.remove("open");
    navMenu.classList.remove("open");
    menuOpen = false;
  }
});

const navMenuItem = document.querySelectorAll(".nav-menu a");
for (let item of navMenuItem) {
  item.addEventListener("click", () => {
    resetButtonAndMenu();
  });
}
function resetButtonAndMenu() {
  menuButton.classList.remove("open");
  navMenu.classList.remove("open");
}
