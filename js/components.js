/* ============================================================
   components.js — renders all sections from the AMData layer
   ============================================================ */
(function () {
  "use strict";

  var data = window.AMData;
  var personal = data.personal;
  var skills = data.skills;
  var projects = data.projects;
  var projectFilters = data.projectFilters;
  var experience = data.experience;
  var education = data.education;
  var services = data.services;
  var social = data.social;

  /* ---------- icons: minimal inline SVG set (Lucide-style) ---------- */
  var ICONS = {
    code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
    layout: '<rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
    server: '<rect x="2" y="2" width="20" height="8" rx="2"></rect><rect x="2" y="14" width="20" height="8" rx="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
    monitor: '<rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
    plug: '<path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><line x1="3" y1="12" x2="21" y2="12"></line>',
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line>',
    rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path>',
    book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
    briefcase: '<rect x="2" y="7" width="20" height="14" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
    box: '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><line x1="12" y1="22" x2="12" y2="12"></line>',
    card: '<rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line>',
    activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
    graduation: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path>',
    search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle>',
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v1.5A5.5 5.5 0 0 1 16 8z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
  };

  function icon(name, size) {
    size = size || 20;
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (ICONS[name] || "") + "</svg>"
    );
  }

  var SKILL_ICONS = {
    languages: "code",
    frontend: "layout",
    backend: "server",
    fullstack: "layers",
    desktop: "monitor",
    apis: "plug",
    databases: "database",
    architecture: "cpu",
    devops: "rocket",
    testing: "shield",
    methodologies: "book",
  };

  var SERVICE_ICONS = {
    "custom-web-apps": "code",
    "backend-systems": "server",
    "rest-apis": "plug",
    "business-systems": "briefcase",
    "inventory-systems": "box",
    "pos-systems": "card",
    "healthcare-systems": "activity",
    "school-systems": "graduation",
    "database-design": "database",
    "system-analysis": "search",
    "software-architecture": "cpu",
  };

  var CONTACT_LINKS = [
    { icon: "mail", label: "Email", value: social.email, href: social.emailHref, external: false },
    { icon: "phone", label: "Phone / WhatsApp", value: social.phone, href: social.whatsappHref, external: true },
    { icon: "linkedin", label: "LinkedIn", value: social.linkedin, href: social.linkedinHref, external: true },
    { icon: "github", label: "GitHub", value: social.github, href: social.githubHref, external: true },
    { icon: "pin", label: "Location", value: social.location, href: null, external: false },
  ];

  function projectCardHTML(p) {
    var statusClass = p.statusType === "in-progress" ? "in-progress" : "completed";
    return (
      '<article class="project-card">' +
      '<div class="project-card__top">' +
      '<div><h3 class="project-card__title">' + p.title + "</h3>" +
      '<p class="project-card__type">' + p.type + "</p></div>" +
      '<span class="project-card__status project-card__status--' + statusClass + '">' + p.status + "</span>" +
      "</div>" +
      '<p class="project-card__desc">' + p.description + "</p>" +
      '<div class="project-card__tech">' +
      p.technologies.map(function (t) { return '<span class="project-tech">' + t + "</span>"; }).join("") +
      "</div>" +
      '<div class="project-card__footer">' +
      '<span class="project-card__domain">' + p.domain + "</span>" +
      '<button type="button" class="btn-details" data-project-id="' + p.id + '">View Details →</button>' +
      "</div></article>"
    );
  }

  /* ---------- About ---------- */
  function renderAbout() {
    var summary = document.querySelector("[data-about-summary]");
    if (summary) summary.textContent = personal.summary;

    var text = document.querySelector("[data-about-text]");
    if (text) {
      text.innerHTML = personal.about.map(function (p) { return "<p>" + p + "</p>"; }).join("");
    }

    var domains = document.querySelector("[data-about-domains]");
    if (domains) {
      domains.innerHTML = personal.domains.map(function (d) { return "<li>" + d + "</li>"; }).join("");
    }
  }

  /* ---------- Skills ---------- */
  function renderSkills() {
    var grid = document.querySelector("[data-skills]");
    if (!grid) return;

    grid.innerHTML = skills.map(function (cat) {
      var ic = SKILL_ICONS[cat.id] || "code";
      return (
        "<li class=\"skill-card\">" +
        '<h3 class="skill-card__title">' +
        '<span class="skill-card__icon">' + icon(ic, 18) + "</span>" +
        cat.title +
        "</h3>" +
        '<div class="skill-card__chips">' +
        cat.items.map(function (s) { return '<span class="skill-chip">' + s + "</span>"; }).join("") +
        "</div></li>"
      );
    }).join("");
  }

  /* ---------- Project filters ---------- */
  function renderProjectFilters(activeFilter, onFilter) {
    var container = document.querySelector("[data-project-filters]");
    if (!container) return;

    container.innerHTML = projectFilters.map(function (f) {
      return (
        '<button type="button" class="filter-btn' +
        (f.id === activeFilter ? " is-active" : "") +
        '" data-filter="' + f.id + '" aria-pressed="' + (f.id === activeFilter ? "true" : "false") + '">' +
        f.label + "</button>"
      );
    }).join("");

    container.querySelectorAll("[data-filter]").forEach(function (btn) {
      btn.addEventListener("click", function () { onFilter(btn.dataset.filter); });
    });
  }

  /* ---------- Projects ---------- */
  function filterProjects(activeFilter) {
    var grid = document.querySelector("[data-projects]");
    var empty = document.querySelector("[data-projects-empty]");
    var emptyActions = document.querySelector("[data-projects-empty-actions]");
    if (!grid || !empty || !emptyActions) return;

    var filtered =
      activeFilter === "all" ? projects : projects.filter(function (p) { return p.filters.indexOf(activeFilter) !== -1; });

    grid.innerHTML = filtered.map(projectCardHTML).join("");

    var hasResults = filtered.length > 0;
    grid.toggleAttribute("hidden", !hasResults);
    empty.hidden = hasResults;
    emptyActions.hidden = hasResults;
  }

  /* ---------- Experience ---------- */
  function renderExperience() {
    var container = document.querySelector("[data-experience]");
    if (!container) return;

    container.innerHTML = experience.map(function (job) {
      return (
        '<li class="timeline-item">' +
        '<div class="timeline-card">' +
        '<div class="timeline-card__head">' +
        '<h3 class="timeline-card__title">' + job.title + "</h3>" +
        '<span class="timeline-card__period">' + job.period + "</span>" +
        "</div>" +
        '<p class="timeline-card__meta">' + job.employment + " — " + job.location + "</p>" +
        '<p class="timeline-card__summary">' + job.summary + "</p>" +
        '<div class="timeline__groups">' +
        job.groups.map(function (g) {
          return (
            '<div class="timeline-group">' +
            '<h4 class="timeline-group__title">' + g.title + "</h4>" +
            '<ul class="timeline-group__list" role="list">' +
            g.items.map(function (i) { return "<li>" + i + "</li>"; }).join("") +
            "</ul></div>"
          );
        }).join("") +
        "</div></div></li>"
      );
    }).join("");
  }

  /* ---------- Services ---------- */
  function renderServices() {
    var grid = document.querySelector("[data-services]");
    if (!grid) return;

    grid.innerHTML = services.map(function (s) {
      return (
        '<li class="service-card">' +
        '<span class="service-card__icon">' + icon(SERVICE_ICONS[s.id] || "code", 20) + "</span>" +
        '<h3 class="service-card__title">' + s.title + "</h3>" +
        '<p class="service-card__desc">' + s.description + "</p>" +
        '<div class="service-card__tech">' +
        s.technologies.map(function (t) { return "<span>" + t + "</span>"; }).join("") +
        "</div>" +
        '<a class="service-card__cta" href="#contact">Start a project →</a>' +
        "</li>"
      );
    }).join("");
  }

  /* ---------- Why work with me ---------- */
  function renderWhy() {
    var grid = document.querySelector("[data-why]");
    if (!grid) return;

    grid.innerHTML = personal.whyWorkWithMe.map(function (item, i) {
      return (
        '<li class="why-item"><div>' +
        '<p class="why-item__num">0' + (i + 1) + "</p>" +
        '<h3 class="why-item__title">' + item.title + "</h3>" +
        '<p class="why-item__text">' + item.text + "</p>" +
        "</div></li>"
      );
    }).join("");
  }

  /* ---------- Education ---------- */
  function renderEducation() {
    var container = document.querySelector("[data-education]");
    if (!container || !education.length) return;

    var edu = education[0];
    container.innerHTML =
      '<div class="education__head">' +
      '<h3 class="education__degree">' + edu.degree + "</h3>" +
      '<span class="education__year">' + edu.year + "</span>" +
      "</div>" +
      '<p class="education__meta">' + edu.university + " — " + edu.location + "</p>" +
      '<h4 class="education__coursework-title">Relevant Coursework</h4>' +
      '<div class="education__coursework">' +
      edu.coursework.map(function (c) { return "<span>" + c + "</span>"; }).join("") +
      "</div>";
  }

  /* ---------- Contact ---------- */
  function renderContact() {
    var grid = document.querySelector("[data-contact-links]");
    if (!grid) return;

    grid.innerHTML = CONTACT_LINKS.map(function (c) {
      var inner =
        '<span class="contact-card__icon">' + icon(c.icon, 20) + "</span>" +
        "<div>" +
        '<span class="contact-card__label">' + c.label + "</span>" +
        '<span class="contact-card__value">' + c.value + "</span>" +
        "</div>";

      var wrapper = c.href
        ? '<a href="' + c.href + '"' + (c.external ? ' target="_blank" rel="noopener noreferrer"' : "") + ' class="contact-card">' + inner + "</a>"
        : '<div class="contact-card">' + inner + "</div>";

      return "<li>" + wrapper + "</li>";
    }).join("");
  }

  /* ---------- Footer ---------- */
  function renderFooter() {
    var socialList = document.querySelector("[data-footer-social]");
    if (socialList) {
      socialList.innerHTML =
        '<li><a href="' + social.githubHref + '" target="_blank" rel="noopener noreferrer">GitHub</a></li>' +
        '<li><a href="' + social.linkedinHref + '" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>' +
        '<li><a href="' + social.emailHref + '">Email</a></li>';
    }

    var copyright = document.querySelector("[data-copyright]");
    if (copyright) {
      copyright.textContent = "© " + new Date().getFullYear() + " Anas Mohammed Idris Mohammed. All rights reserved.";
    }
  }

  /* ---------- Public API ---------- */
  function renderAll() {
    renderAbout();
    renderSkills();
    filterProjects("all");
    renderExperience();
    renderServices();
    renderWhy();
    renderEducation();
    renderContact();
    renderFooter();
  }

  window.AMComponents = {
    renderAll: renderAll,
    renderProjectFilters: renderProjectFilters,
    filterProjects: filterProjects,
    icon: icon,
  };
})();