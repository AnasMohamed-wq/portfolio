/* ============================================================
   nav.js — sticky header, mobile menu, scroll-spy, progress, top
   ============================================================ */
(function () {
  "use strict";

  function initNav() {
    var header = document.getElementById("site-header");
    var toggle = document.getElementById("nav-toggle");
    var links = document.getElementById("nav-links");
    var progressBar = document.getElementById("scroll-progress-bar");
    var backToTop = document.getElementById("back-to-top");
    var navAnchors = links ? links.querySelectorAll('a[href^="#"]') : [];

    function onScroll() {
      var y = window.scrollY || document.documentElement.scrollTop;

      if (header) header.classList.toggle("is-scrolled", y > 24);

      if (backToTop) {
        var visible = y > 480;
        backToTop.hidden = !visible;
        backToTop.classList.toggle("is-visible", visible);
      }

      if (progressBar) {
        var scrollable = document.documentElement.scrollHeight - window.innerHeight;
        var pct = scrollable > 0 ? (y / scrollable) * 100 : 0;
        progressBar.style.width = pct + "%";
      }
    }

    /* Scroll-spy: highlight active section */
    var sectionIds = Array.prototype.map.call(navAnchors, function (a) {
      return a.getAttribute("href");
    }).filter(Boolean);

    function spy() {
      var pos = window.scrollY + 110;
      var current = sectionIds[0];

      sectionIds.forEach(function (id) {
        var el = document.querySelector(id);
        if (el && el.offsetTop <= pos) current = id;
      });

      navAnchors.forEach(function (a) {
        a.setAttribute("aria-current", a.getAttribute("href") === current ? "true" : "false");
      });

      /* Additive: mirror the highlight onto the mobile bottom tab bar */
      document.querySelectorAll("[data-tab]").forEach(function (a) {
        a.setAttribute("aria-current", a.getAttribute("href") === current ? "true" : "false");
      });
    }

    /* toggleMenu(true) opens, toggleMenu(false) closes, no arg toggles */
    function toggleMenu(open) {
      if (!toggle || !links) return;
      var willOpen = typeof open === "boolean" ? open : !links.classList.contains("is-open");
      toggle.setAttribute("aria-expanded", willOpen ? "true" : "false");
      links.classList.toggle("is-open", willOpen);
      document.body.classList.toggle("nav-open", willOpen);
    }

    if (toggle) {
      toggle.addEventListener("click", function () { toggleMenu(); });
    }

    navAnchors.forEach(function (a) {
      a.addEventListener("click", function () { toggleMenu(false); });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") toggleMenu(false);
    });

    if (backToTop) {
      backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scroll", spy, { passive: true });

    onScroll();
    spy();
  }

  window.AMNav = { initNav: initNav };
})();