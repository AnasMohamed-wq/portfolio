/* ============================================================
   animations.js — IntersectionObserver reveal
   ============================================================ */
(function () {
  "use strict";

  var entriesObserver = null;

  function revealAllFallback() {
    document.querySelectorAll("[data-reveal]").forEach(function (el) {
      el.classList.add("is-revealed");
      el.style.removeProperty("--reveal-delay");
    });
  }

  /* Reveal anything already inside the viewport (used as a failsafe so
     content is never left invisible if an observer callback goes missing). */
  function revealInViewport() {
    if (!document.querySelectorAll) return;
    document.querySelectorAll("[data-reveal]:not(.is-revealed)").forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        el.classList.add("is-revealed");
        el.style.removeProperty("--reveal-delay");
      }
    });
  }

  function initAnimations() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      /* no animations: never leave content hidden */
      revealAllFallback();
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
      { threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    entriesObserver = observer;

    document.querySelectorAll("[data-reveal]").forEach(function (el, i) {
      el.style.setProperty("--reveal-delay", (i % 4) * 80 + "ms");
      observer.observe(el);
    });

    /* Failsafe: nothing may remain invisible past ~1.5s */
    window.setTimeout(revealInViewport, 1500);
    window.addEventListener("pageshow", revealInViewport);
  }

  /* Re-observe newly rendered dynamic content (e.g. after filtering) */
  function observeReveal() {
    if (!entriesObserver) {
      revealAllFallback();
      return;
    }
    document.querySelectorAll("[data-reveal]:not(.is-revealed)").forEach(function (el) {
      el.style.removeProperty("--reveal-delay");
      entriesObserver.observe(el);
    });
  }

  window.AMAnimations = {
    initAnimations: initAnimations,
    observeReveal: observeReveal,
  };
})();