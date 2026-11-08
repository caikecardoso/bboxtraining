// main.js - Versão limpa e moderna
document.addEventListener("DOMContentLoaded", () => {
  // ==================== NAVBAR ====================
  const navbar = document.getElementById("navbar");
  
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", handleScroll);

  // ==================== MOBILE MENU ====================
  // const navToggle = document.getElementById("navToggle");
  // const mobileMenu = document.getElementById("mobileMenu");
  // const mobileClose = document.getElementById("mobileClose");

  // navToggle.addEventListener("click", () => {
  //   mobileMenu.classList.add("open");
  //   document.body.style.overflow = "hidden";
  // });

  // mobileClose.addEventListener("click", () => {
  //   mobileMenu.classList.remove("open");
  //   document.body.style.overflow = "visible";
  // });

  // // Fechar menu ao clicar em link
  // document.querySelectorAll(".mobile-link").forEach(link => {
  //   link.addEventListener("click", () => {
  //     mobileMenu.classList.remove("open");
  //     document.body.style.overflow = "visible";
  //   });
  // });

const navToggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileClose = document.getElementById("mobileClose");
const mobileOverlay = document.getElementById("mobileOverlay");

function openMenu() {
  mobileMenu.classList.add("open");
  mobileOverlay.classList.add("open");
  mobileMenu.setAttribute("aria-hidden", "false");
  navToggle.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  mobileMenu.classList.remove("open");
  mobileOverlay.classList.remove("open");
  mobileMenu.setAttribute("aria-hidden", "true");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

navToggle.addEventListener("click", openMenu);
mobileClose.addEventListener("click", closeMenu);
mobileOverlay.addEventListener("click", closeMenu);
document.querySelectorAll(".mobile-link").forEach(l => l.addEventListener("click", closeMenu));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileMenu.classList.contains("open")) closeMenu();
});


  // ==================== MODAL HORÁRIOS ====================
  const modal = document.getElementById("modalHorarios");
  const btnHorarios = document.getElementById("btnHorarios");
  const btnHorariosFooter = document.getElementById("btnHorariosFooter");
  const modalClose = document.getElementById("modalClose");
  const modalOverlay = document.getElementById("modalOverlay");

  function openModal() {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "visible";
  }

  btnHorarios?.addEventListener("click", openModal);
  btnHorariosFooter?.addEventListener("click", openModal);
  modalClose?.addEventListener("click", closeModal);
  modalOverlay?.addEventListener("click", closeModal);

  // Tabs do modal
  document.querySelectorAll(".modal__tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".modal__tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".modal__content").forEach(c => c.classList.remove("active"));
      
      tab.classList.add("active");
      document.getElementById(`tab-${tab.dataset.tab}`).classList.add("active");
    });
  });

  // ==================== REVEAL ANIMATION (Intersection Observer) ====================
  const revealElements = document.querySelectorAll("[data-reveal], [data-reveal-right], [data-reveal-left]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  revealElements.forEach(el => observer.observe(el));
});

// ================ YEAR FOOTER ===================
document.getElementById("year").textContent = new Date().getFullYear();