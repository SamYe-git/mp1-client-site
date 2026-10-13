// Toggles the mobile navigation menu open/closed.
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
});

// Moves the home hero background down slowly while scrolling (gentle parallax).
document.addEventListener("DOMContentLoaded", function () {
  var hero = document.querySelector(".hero--home");
  var media = hero && hero.querySelector(".hero-media");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var ticking = false;

  if (!media) {
    return;
  }

  function update() {
    ticking = false;
    if (reduceMotion.matches) {
      media.style.removeProperty("--hero-shift");
      return;
    }
    // The media layer extends 20% above the hero, so the shift is capped there.
    var maxShift = hero.offsetHeight * 0.2;
    var shift = Math.min(Math.max(window.scrollY * 0.2, 0), maxShift);
    media.style.setProperty("--hero-shift", shift + "px");
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  if (reduceMotion.addEventListener) {
    reduceMotion.addEventListener("change", requestUpdate);
  }
  update();
});
