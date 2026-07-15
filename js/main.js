/**
 * main.js — renders the content from js/constants.js into the page.
 *
 * The HTML ships with empty mount points; this file fills them in on load.
 * You normally shouldn't need to edit this to change content — edit
 * js/constants.js instead. Touch this only to change how things are rendered.
 */
(function () {
  "use strict";

  var data = window.SITE;
  if (!data) {
    console.error("SITE data not found — is js/constants.js loaded first?");
    return;
  }

  // --- Small helpers -------------------------------------------------------

  /** Resolve a colour keyword ("accent") or return the value unchanged. */
  function color(value) {
    return value === "accent" ? data.accentColor : value;
  }

  /** Add alpha to a #rrggbb hex by appending a 2-hex-digit suffix. */
  function withAlpha(hex, alphaHex) {
    return hex + alphaHex;
  }

  /** Add safe new-tab behavior to external HTTP(S) links. */
  function externalLinkAttrs(attrs, href) {
    if (/^https?:\/\//i.test(href || "")) {
      attrs.target = "_blank";
      attrs.rel = "noopener noreferrer";
    }
    return attrs;
  }

  /** Escape text destined for innerHTML. */
  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  /** Create an element with attributes and children. */
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        if (key === "style" || key === "class") {
          node.setAttribute(key, attrs[key]);
        } else {
          node.setAttribute(key, attrs[key]);
        }
      });
    }
    (children || []).forEach(function (child) {
      node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    });
    return node;
  }

  function $(selector, root) {
    return (root || document).querySelector(selector);
  }

  function $$(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  // --- Prepare derived / templated values ----------------------------------

  var accent = data.accentColor;

  // Inject the accent colour so CSS `var(--orange)` picks it up everywhere.
  document.documentElement.style.setProperty("--orange", accent);

  var isAvailable = data.available !== false;

  // Headline: "\n" -> line break, {accent}…{/accent} -> accent-coloured span.
  var headlineHtml = esc(data.headline)
    .replace(/\n/g, "<br/>")
    .replace(
      /\{accent\}([\s\S]*?)\{\/accent\}/g,
      '<span style="color:' + accent + '">$1</span>'
    );

  var introHtml = esc(data.intro).replace("{location}", esc(data.location));
  var projectCount = data.projectGroups.reduce(function (total, group) {
    return total + group.projects.length;
  }, 0);

  var values = {
    name: data.name,
    role: data.role,
    yearsExperience: String(data.yearsExperience),
    focus: data.focus,
    statusLabel: isAvailable ? data.availableLabel : data.unavailableLabel,
    projectCount:
      String(projectCount).padStart(2, "0") + " projects",
    contactHeading: data.contact.heading,
    contactBlurb: data.contact.blurb,
    year: String(new Date().getFullYear()),
  };

  // --- Bind simple text values (data-bind) ---------------------------------

  $$("[data-bind]").forEach(function (node) {
    var key = node.getAttribute("data-bind");
    switch (key) {
      case "headline":
        node.innerHTML = headlineHtml;
        break;
      case "intro":
        node.innerHTML = introHtml;
        break;
      case "contactHeading":
        node.innerHTML = esc(values.contactHeading).replace(/\n/g, "<br/>");
        break;
      case "contactBlurb":
        node.textContent = values.contactBlurb;
        break;
      case "statusDot":
        node.style.background = isAvailable ? "#5eead4" : "#ffd166";
        node.style.boxShadow =
          "0 0 8px " + (isAvailable ? "#5eead4" : "#ffd166");
        break;
      case "emailLink":
        node.textContent = data.email;
        node.setAttribute("href", "mailto:" + data.email);
        break;
      case "cvLink":
        node.setAttribute("href", data.cvLink);
        if (/^https?:\/\//i.test(data.cvLink || "")) {
          node.setAttribute("target", "_blank");
          node.setAttribute("rel", "noopener noreferrer");
        }
        break;
      case "github":
        node.setAttribute("href", data.socials.github);
        break;
      case "linkedin":
        node.setAttribute("href", data.socials.linkedin);
        break;
      case "x":
        node.setAttribute("href", data.socials.x);
        break;
      default:
        if (Object.prototype.hasOwnProperty.call(values, key)) {
          node.textContent = values[key];
        }
    }
  });

  // --- Render list sections (data-list) ------------------------------------

  var renderers = {
    projects: renderProjects,
    skills: renderSkills,
    timeline: renderTimeline,
    engagements: renderEngagements,
  };

  $$("[data-list]").forEach(function (mount) {
    var key = mount.getAttribute("data-list");
    if (renderers[key]) renderers[key](mount);
  });

  function renderProjects(mount) {
    var projectIndex = 0;

    data.projectGroups.forEach(function (group) {
      var section = el("div", { class: "work__group" }, [
        el("h3", { class: "work__group-title" }, [group.title]),
      ]);

      group.projects.forEach(function (p) {
        projectIndex += 1;
        var index = String(projectIndex).padStart(2, "0");

        var chips = p.stack.map(function (tech) {
          return el("span", { class: "chip" }, [tech]);
        });

        var heading = el("div", { class: "work__heading" }, [
          el("h3", { class: "work__name" }, [p.name]),
          el("span", { class: "tag", style: "color:" + p.tagColor }, [p.category]),
        ]);

        var body = el("div", null, [
          heading,
          el("p", { class: "work__desc" }, [p.description]),
          el("div", { class: "chips" }, chips),
        ]);

      var item = el(
        "a",
        externalLinkAttrs({ class: "work__item", href: p.link }, p.link),
          [
            el("div", { class: "work__index" }, [index]),
            body,
            el("div", { class: "work__year" }, [p.year + " ↗"]),
          ]
        );

        section.appendChild(item);
      });

      mount.appendChild(section);
    });
  }

  function renderSkills(mount) {
    data.skillGroups.forEach(function (g) {
      var items = g.items.map(function (name) {
        return el(
          "span",
          {
            class: "skill",
            style:
              "color:" + g.color + ";border:1px solid " + withAlpha(g.color, "33"),
          },
          [name]
        );
      });

      var group = el("div", { class: "toolbox__group" }, [
        el("div", { class: "toolbox__title" }, [g.title]),
        el("div", { class: "toolbox__items" }, items),
      ]);

      mount.appendChild(group);
    });
  }

  function renderTimeline(mount) {
    data.timeline.forEach(function (t) {
      var dot = color(t.dotColor);
      var orgAttrs = {
        class: "timeline__org",
        style: "color:" + dot + ";background:" + withAlpha(dot, "18"),
      };

      if (t.orgLink) {
        orgAttrs.href = t.orgLink;
        orgAttrs.target = "_blank";
        orgAttrs.rel = "noopener noreferrer";
      }

      var org = el(t.orgLink ? "a" : "span", orgAttrs, [t.org]);

      var meta = el("div", { class: "timeline__meta" }, [
        el("span", { class: "timeline__range" }, [t.range]),
        el("h3", { class: "timeline__role" }, [t.role]),
        el("span", { class: "timeline__at" }, ["@"]),
        org,
      ]);

      var highlights = el(
        "ul",
        { class: "timeline__highlights" },
        t.highlights.map(function (highlight) {
          return el("li", null, [highlight]);
        })
      );

      var item = el("div", { class: "timeline__item" }, [
        el("span", { class: "timeline__dot", style: "background:" + dot }),
        meta,
        highlights,
      ]);

      mount.appendChild(item);
    });
  }

  function renderEngagements(mount) {
    data.engagements.forEach(function (e) {
      var card = el("div", { class: "card" }, [
        el("div", { class: "card__tag" }, [e.tag]),
        el("h3", { class: "card__title" }, [e.title]),
        el("p", { class: "card__desc" }, [e.desc]),
      ]);
      mount.appendChild(card);
    });
  }

  // --- Toggle the "Open to" section ----------------------------------------

  if (data.showRates === false) {
    var ratesSection = $("[data-rates]");
    var ratesNav = $("[data-rates-nav]");
    if (ratesSection) ratesSection.remove();
    if (ratesNav) ratesNav.remove();
  }

  // --- Contact form: mailto + success state --------------------------------

  var form = $("#contact-form");
  var success = $("#contact-success");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var message = form.elements.message.value.trim();

      // Open the visitor's mail client pre-filled. On a static site there's no
      // backend, so this is the honest way to "send" a message.
      var subject = encodeURIComponent("Portfolio enquiry from " + name);
      var bodyLines = [message, "", "— " + name + " (" + email + ")"];
      var body = encodeURIComponent(bodyLines.join("\n"));
      window.location.href =
        "mailto:" + data.email + "?subject=" + subject + "&body=" + body;

      // Show the confirmation state.
      form.classList.add("is-hidden");
      if (success) success.classList.remove("is-hidden");
    });
  }
})();
