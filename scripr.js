//alert('js carregado');

var btnMenu = document.querySelector(".btnMenu");
var menu = document.querySelector(".menu");

btnMenu.addEventListener("click", function () {
  menu.classList.toggle("menu-open");
  btnMenu.classList.toggle("x");
});

menu.addEventListener("click", function () {
  menu.classList.remove(menu - open);
  menu.classList.remove("x");
});

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;
      let message = document.getElementById("message").value;

      let whatsappMessage = `Nome: ${name}%0AEmail: ${email}%0ATelefone: ${phone}%0AMensagem: ${message}`;
      let whatsappUrl = `https://5521974866272?text=${whatsappMessage}`;

      window.open(whatsappUrl, "_blank");
    });
});
