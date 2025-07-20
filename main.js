document.addEventListener("DOMContentLoaded", function () {
  // Menu Mobile (só se existir)
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");

  if (menuBtn && navLinks) {
    const menuBtnIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const isOpen = navLinks.classList.contains("open");
      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    });

    navLinks.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    });
  }

  // ScrollReveal config
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".header__btn", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".header__stats", {
    ...scrollRevealOption,
    delay: 2000,
  });

  ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "left",
  });

  ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".about__content .section__description", {
    ...scrollRevealOption,
    delay: 1000,
    interval: 500,
  });

  ScrollReveal().reveal(".about__btn", {
    ...scrollRevealOption,
    delay: 2000,
  });

  ScrollReveal().reveal(".program__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".service__image img", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".service__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".service__list li", {
    ...scrollRevealOption,
    delay: 1000,
    interval: 500,
  });

  ScrollReveal().reveal(".service__btn", {
    ...scrollRevealOption,
    delay: 2500,
  });

  // Swiper init
  const swiper = new Swiper(".swiper", {
    loop: true,
  });

  // Modal de Horários
  window.abrirModal = function (event) {
    event.preventDefault();
    document.getElementById("modalHorarios").style.display = "flex";
  };

  window.fecharModal = function () {
    document.getElementById("modalHorarios").style.display = "none";
  };

  window.onclick = function (event) {
    const modal = document.getElementById("modalHorarios");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});