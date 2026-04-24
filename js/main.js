/* 
=============================================================
   EwNet Sistemas — main.js
============================================================= 
*/

/* ── Menu mobile ── */
const hamburger = document.querySelector(".hamburger");
const navLinks  = document.querySelector(".nav-links");
const navCta    = document.querySelector(".nav-cta");

hamburger.addEventListener("click", () => {
  const isOpen = navLinks.style.display === "flex";
  navLinks.style.cssText = isOpen
    ? ""
    : "display:flex;flex-direction:column;position:absolute;top:64px;left:0;right:0;background:#fff;padding:20px 5%;border-bottom:1px solid #ebebeb;gap:1rem;z-index:99";
  navCta.style.display = isOpen ? "" : "block";
});

/* Fecha o menu ao clicar em um link */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.style.cssText = "";
    navCta.style.display = "";
  });
});

/* ── Segmentos — toggle ativo ── */
document.querySelectorAll(".seg-card").forEach(card => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".seg-card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
  });
});

/* ── Animação por scroll (IntersectionObserver) ── */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll(".vantagem-card, .seg-card, .sobre-num-box, .sistema-bloco, .dep-card")
  .forEach(el => observer.observe(el));