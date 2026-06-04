(function () {
  var whatsappUrl = "https://wa.me/526462865241";
  var whatsappMessage = "?text=Hola%20Juan%20Carlos%2C%20quiero%20iniciar%20un%20proyecto%20web%20o%20de%20datos.";
  var links = document.querySelectorAll("[data-whatsapp-link]");
  var menu = document.querySelector("[data-menu]");
  var toggle = document.querySelector(".menu-toggle");
  var year = document.querySelector("[data-current-year]");

  links.forEach(function (link) {
    link.setAttribute("href", whatsappUrl + whatsappMessage);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  });

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (menu && toggle) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
})();
