// main.js
document.addEventListener("DOMContentLoaded", () => {
  // ==================== NAVBAR ====================
  const navbar = document.getElementById("navbar");

  function handleScroll() {
    if (!navbar) return;
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  }
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });

  // ==================== MENU MOBILE ====================
  const navToggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileClose = document.getElementById("mobileClose");
  const mobileOverlay = document.getElementById("mobileOverlay");

  function openMenu() {
    mobileMenu?.classList.add("open");
    mobileOverlay?.classList.add("open");
    mobileMenu?.setAttribute("aria-hidden", "false");
    navToggle?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    mobileMenu?.classList.remove("open");
    mobileOverlay?.classList.remove("open");
    mobileMenu?.setAttribute("aria-hidden", "true");
    navToggle?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  navToggle?.addEventListener("click", openMenu);
  mobileClose?.addEventListener("click", closeMenu);
  mobileOverlay?.addEventListener("click", closeMenu);
  document
    .querySelectorAll(".mobile-link")
    .forEach((link) => link.addEventListener("click", closeMenu));

  // ==================== MODAL DE HORÁRIOS ====================
  const modal = document.getElementById("modalHorarios");
  const btnHorarios = document.getElementById("btnHorarios");
  const btnHorariosFooter = document.getElementById("btnHorariosFooter");
  const modalClose = document.getElementById("modalClose");
  const modalOverlay = document.getElementById("modalOverlay");

  function openModal() {
    modal?.classList.add("open");
    modal?.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal?.classList.remove("open");
    modal?.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  btnHorarios?.addEventListener("click", openModal);
  btnHorariosFooter?.addEventListener("click", openModal);
  modalClose?.addEventListener("click", closeModal);
  modalOverlay?.addEventListener("click", closeModal);

  // Tabs do modal
  const tabs = document.querySelectorAll(".modal__tab");
  const contents = document.querySelectorAll(".modal__content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.getElementById(`tab-${tab.dataset.tab}`);
      if (!target) return;

      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      tab.classList.add("active");
      target.classList.add("active");
    });
  });

  // ==================== TECLA ESCAPE (menu e modal) ====================
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (mobileMenu?.classList.contains("open")) closeMenu();
    if (modal?.classList.contains("open")) closeModal();
  });

  // ==================== REVEAL AO ROLAR ====================
  const revealElements = document.querySelectorAll(
    "[data-reveal], [data-reveal-right], [data-reveal-left]"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  revealElements.forEach((el) => observer.observe(el));

  // ==================== FORMULÁRIO DE CLÍNICAS ====================
  const WHATSAPP_NUMBER = "5511982306459";
  const clinicForm = document.getElementById("clinicForm");
  const clinicFeedback = document.getElementById("clinicFeedback");

  clinicForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    // Valida campos obrigatórios
    let valid = true;
    clinicForm.querySelectorAll("[required]").forEach((input) => {
      const ok = input.value.trim() !== "";
      input.closest(".form__field").classList.toggle("invalid", !ok);
      if (!ok) valid = false;
    });

    if (!valid) {
      clinicFeedback.textContent = "Preencha os campos obrigatórios (*).";
      clinicFeedback.classList.add("error");
      return;
    }

    const d = new FormData(clinicForm);
    const texto =
      `Olá, Bruno! Quero solicitar uma clínica de Hyrox.\n\n` +
      `Nome: ${d.get("nome").trim()}\n` +
      `Box: ${d.get("box").trim()}\n` +
      `Cidade/UF: ${d.get("cidade").trim()}\n` +
      `WhatsApp: ${d.get("whatsapp").trim()}\n` +
      `Participantes previstos: ${d.get("alunos") || "não informado"}\n` +
      `Data desejada: ${d.get("data").trim() || "não informada"}\n` +
      `Formato: ${d.get("formato")}\n\n` +
      `${d.get("mensagem").trim() || "Sem mensagem adicional."}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`,
      "_blank",
      "noopener"
    );

    clinicFeedback.textContent = "Obrigado! Abrindo o WhatsApp para finalizar o envio.";
    clinicFeedback.classList.remove("error");
    clinicForm.reset();
  });


  // ==================== ANO NO RODAPÉ ====================
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});