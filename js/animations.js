/* ============================================================
   animations.js — IntersectionObserver reveal
   ============================================================ */
(function () {
  "use strict";

  var entriesObserver = null;

  function revealAllFallback() {
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      el.classList.add("is-revealed");
    });
  }

  function initAnimations() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (!window.IntersectionObserver) {
      revealAllFallback();
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            entry.target.style.removeProperty("--reveal-delay");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    entriesObserver = observer;

    document.querySelectorAll("[data-reveal]").forEach(function (el, i) {
      el.style.setProperty("--reveal-delay", (i % 4) * 80 + "ms");
      observer.observe(el);
    });
  }

  /* Re-observe newly rendered dynamic content (e.g. after filtering) */
  function observeReveal() {
    if (entriesObserver) {
      document.querySelectorAll("[data-reveal]:not(.is-revealed)").forEach(function (el) {
        entriesObserver.observe(el);
      });
    }
  }

  window.AMAnimations = {
    initAnimations: initAnimations,
    observeReveal: observeReveal,
  };
})();