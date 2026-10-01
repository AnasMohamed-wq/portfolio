/* ============================================================
   main.js — entry point: boot render, nav, modal, filters, animations
   ============================================================ */
(function () {
  "use strict";

  var AM = window.AMComponents;
  var AMNav = window.AMNav;
  var AMModal = window.AMModal;
  var AMAnimations = window.AMAnimations;

  function initFilters() {
    var activeFilter = "all";

    function applyFilter(filter) {
      activeFilter = filter;
      AM.renderProjectFilters(activeFilter, applyFilter);
      AM.filterProjects(activeFilter);
      AMAnimations.observeReveal();
    }

    var showAll = document.querySelector("[data-show-all]");
    if (showAll) {
      showAll.addEventListener("click", function () { applyFilter("all"); });
    }

    AM.renderProjectFilters(activeFilter, applyFilter);
  }

  /* Toast helper (available for future interactions that need a notice) */
  function showToast(message, duration) {
    var toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    requestAnimationFrame(function () { toast.classList.add("is-visible"); });
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(function () {
      toast.classList.remove("is-visible");
      setTimeout(function () { toast.hidden = true; }, 260);
    }, duration || 2600);
  }

  function boot() {
    if (boot._done) return;
    boot._done = true;

    /* Each module initialises independently so one failure never blanks
       the rest of the site (modules already guard on missing DOM nodes). */
    try { AM.renderAll(); } catch (err) { console.error("renderAll:", err); }
    try { AMNav.initNav(); } catch (err) { console.error("initNav:", err); }
    try { AMModal.initModal(); } catch (err) { console.error("initModal:", err); }
    try { initFilters(); } catch (err) { console.error("initFilters:", err); }
    try { AMAnimations.initAnimations(); } catch (err) { console.error("initAnimations:", err); }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

  window.AM = { showToast: showToast };
})();