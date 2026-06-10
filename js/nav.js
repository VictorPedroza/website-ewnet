/* =============================================================
   nav.js — Menu mobile, hambúrguer e dropdown
   ============================================================= */

const hamburger = document.querySelector(".hamburger");
const nav       = document.querySelector("nav");
const navLinks  = document.querySelector(".nav-links");
const navCta    = document.querySelector(".nav-cta");
const dropdown  = document.querySelector(".dropdown");
const toggleBtn = document.querySelector(".dropdown-toggle");

// Definição do breakpoint padrão do seu projeto (900px)
const MOBILE_BREAKPOINT = 900;

function closeMenu() {
  nav?.classList.remove("menu-open");
  hamburger?.classList.remove("active");
  hamburger?.setAttribute("aria-expanded", "false");
  navLinks?.classList.remove("open");
  navCta?.classList.remove("open");
  dropdown?.classList.remove("active");
  toggleBtn?.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  const isOpen = nav?.classList.toggle("menu-open");
  hamburger?.classList.toggle("active", Boolean(isOpen));
  hamburger?.setAttribute("aria-expanded", String(Boolean(isOpen)));
  navLinks?.classList.toggle("open", Boolean(isOpen));
  navCta?.classList.toggle("open", Boolean(isOpen));
}

// Abre/fecha menu ao clicar no hambúrguer
hamburger?.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

// Fecha o menu automaticamente ao redimensionar para desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > MOBILE_BREAKPOINT) {
    closeMenu();
  }
});

// Fecha o menu ao clicar fora dele
document.addEventListener("click", (e) => {
  if (!nav?.contains(e.target)) {
    closeMenu();
  }
});

// Lida com cliques nos elementos do menu (links e botões)
navLinks?.addEventListener("click", (e) => {
  const target = e.target;
  const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
  const isDropdownToggle = target.classList.contains("dropdown-toggle") || target.closest(".dropdown-toggle");

  // Se for mobile e o usuário clicar em "Segmentos"
  if (isMobile && isDropdownToggle) {
    e.preventDefault();
    const isDropdownActive = dropdown?.classList.toggle("active");
    toggleBtn?.setAttribute("aria-expanded", String(isDropdownActive));
    return;
  }

  // Se clicar em qualquer link normal (que não seja o abrir/fechar do dropdown)
  if (target.tagName === "A") {
    closeMenu();
  }
});

export { closeMenu };