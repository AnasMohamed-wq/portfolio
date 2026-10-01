/* ============================================================
   modal.js — project details modal (ESC, click-outside, focus trap)
   ============================================================ */
(function () {
  "use strict";

  var projects = window.AMData.projects;
  var modal = null;
  var lastFocused = null;

  function getProject(id) {
    return projects.find(function (p) { return p.id === id; });
  }

  function buildContent(p) {
    var sections = [];

    var meta =
      '<div class="modal-title__meta">' +
      (p.domain ? '<span class="modal-tag">' + p.domain + "</span>" : "") +
      (p.type ? '<span class="modal-tag">' + p.type + "</span>" : "") +
      '<span class="modal-tag modal-tag--status">' + p.status + "</span>" +
      "</div>";

    sections.push('<h3 class="modal-title" id="project-modal-title">' + p.title + "</h3>" + meta);

    if (p.description) {
      sections.push(
        '<div class="modal-section"><h4 class="modal-section__title">Description</h4>' +
          '<p class="modal-section__text">' + p.description + "</p></div>"
      );
    }

    if (p.technicalDetails) {
      sections.push(
        '<div class="modal-section"><h4 class="modal-section__title">Technical Details</h4>' +
          '<p class="modal-section__text">' + p.technicalDetails + "</p></div>"
      );
    }

    if (p.role) {
      sections.push(
        '<div class="modal-section"><h4 class="modal-section__title">Role</h4>' +
          '<p class="modal-section__text">' + p.role + "</p></div>"
      );
    }

    if (p.features && p.features.length) {
      sections.push(
        '<div class="modal-section"><h4 class="modal-section__title">Key Features</h4>' +
          '<ul class="modal-list" role="list">' +
          p.features.map(function (f) { return "<li>" + f + "</li>"; }).join("") +
          "</ul></div>"
      );
    }

    if (p.technologies && p.technologies.length) {
      sections.push(
        '<div class="modal-section"><h4 class="modal-section__title">Technologies</h4>' +
          '<div class="modal-tech">' +
          p.technologies.map(function (t) { return "<span>" + t + "</span>"; }).join("") +
          "</div></div>"
      );
    }

    return sections.join("");
  }

  function openProjectModal(id) {
    var project = getProject(id);
    if (!project || !modal) return;

    lastFocused = document.activeElement;
    var content = modal.querySelector("[data-modal-content]");
    content.innerHTML = buildContent(project);

    modal.classList.remove("is-closing");
    modal.hidden = false;
    document.body.classList.add("modal-open");

    var closeBtn = modal.querySelector(".modal__close");
    if (closeBtn) requestAnimationFrame(function () { closeBtn.focus(); });

    document.body.style.overflow = "hidden";
  }

  function closeProjectModal() {
    if (!modal || modal.hidden) return;

    modal.classList.add("is-closing");
    setTimeout(function () {
      modal.hidden = true;
      modal.classList.remove("is-closing");
      document.body.classList.remove("modal-open");
      document.body.style.overflow = "";
      if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
    }, 210);
  }

  function initModal() {
    modal = document.getElementById("project-modal");
    if (!modal) return;

    modal.querySelectorAll("[data-modal-close]").forEach(function (el) {
      el.addEventListener("click", closeProjectModal);
    });

    document.addEventListener("keydown", function (e) {
      if (modal.hidden) return;

      if (e.key === "Escape") {
        closeProjectModal();
        return;
      }

      if (e.key === "Tab") {
        var focusables = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        var first = focusables[0];
        var last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    document.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-project-id]");
      if (btn) openProjectModal(btn.dataset.projectId);
    });
  }

  window.AMModal = {
    initModal: initModal,
    openProjectModal: openProjectModal,
    closeProjectModal: closeProjectModal,
  };
})();