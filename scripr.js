var btnMenu = document.querySelector(".btnMenu");
var menu = document.querySelector(".menu");
var menuItems = document.querySelectorAll(".menu a");

btnMenu.addEventListener("click", function () {
  menu.classList.toggle("menu-open");
  btnMenu.classList.toggle("x");
});

menuItems.forEach(function(item) {
  item.addEventListener("click", function() {
    menu.classList.remove("menu-open");
    btnMenu.classList.remove("x");
  });
});
