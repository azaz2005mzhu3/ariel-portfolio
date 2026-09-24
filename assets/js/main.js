// Mobile nav toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav__toggle");
  const links = document.querySelector(".nav__links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Highlight the current page in the nav
  const currentPage = document.body.dataset.page;
  if (currentPage) {
    document.querySelectorAll(`.nav__links a[data-page="${currentPage}"]`).forEach((link) => {
      link.classList.add("is-active");
    });
  }
});
