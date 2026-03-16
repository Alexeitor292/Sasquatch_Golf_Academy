const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const promoBar = document.querySelector(".promo-bar");
const heroSection = document.querySelector(".hero");
const heroVideo = document.querySelector("[data-hero-video]");
const heroPoster = document.querySelector("[data-hero-poster-image]");
const heroLogo = document.querySelector("[data-logo-origin]");
const navLogo = document.querySelector("[data-logo-target]");
const morphLogo = document.querySelector(".logo-morph");
const morphLogoImage = document.querySelector(".logo-morph img");
const storyScene = document.querySelector(".story-scene");
const storyFragments = Array.from(document.querySelectorAll("[data-story-fragment]"));
const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
let heroVideoInitialized = false;
let logoMorphArmed = false;
let morphTicking = false;
let logoMorphStartScrollY = 0;
const logoMorphBounds = {
  start: null,
  end: null,
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function lerp(start, end, progress) {
  return start + (end - start) * progress;
}

function setLogoDockedState(isDocked) {
  document.body.classList.toggle("is-logo-docked", isDocked);
}

function updateHeaderState() {
  const fadeProgress = clamp(window.scrollY / 150, 0, 1);
  const promoProgress = clamp(window.scrollY / 90, 0, 1);
  const promoHeight = promoBar ? promoBar.offsetHeight : 0;
  const promoShift = -(promoHeight * promoProgress);
  const promoOffset = Math.max(0, promoHeight + promoShift);
  document.documentElement.style.setProperty("--header-fade", fadeProgress.toFixed(3));
  document.documentElement.style.setProperty("--promo-shift", `${promoShift.toFixed(2)}px`);
  document.documentElement.style.setProperty("--promo-offset", `${promoOffset.toFixed(2)}px`);
}

function updateStoryScene() {
  if (!storyScene) {
    return;
  }

  if (reduceMotionQuery.matches) {
    storyScene.classList.remove("is-line-reveal");
    storyScene.style.setProperty("--story-shift-x", "0px");
    storyScene.style.setProperty("--story-shift-y", "0px");
    storyScene.style.setProperty("--story-scale", "1.04");
    storyScene.style.setProperty("--story-rotate", "0deg");
    storyScene.style.setProperty("--story-copy-shift", "0px");

    storyFragments.forEach((fragment) => {
      fragment.style.opacity = "1";
      fragment.style.transform = "translate3d(0, 0, 0)";
      fragment.style.filter = "blur(0)";
    });

    return;
  }

  if (storyFragments.length) {
    storyScene.classList.add("is-line-reveal");
  }

  const sceneRect = storyScene.getBoundingClientRect();
  const scrollableDistance = Math.max(storyScene.offsetHeight - window.innerHeight, 1);
  const sceneProgress = clamp((-sceneRect.top) / scrollableDistance, 0, 1);
  const motionProgress = clamp((sceneProgress - 0.05) / 0.95, 0, 1);
  const revealProgress = clamp((sceneProgress - 0.05) / 0.72, 0, 1.16);
  const postHoldProgress = clamp((sceneProgress - 0.82) / 0.18, 0, 1);
  const backgroundShiftX = lerp(lerp(-8, 72, motionProgress), 56, postHoldProgress);
  const backgroundShiftY = lerp(lerp(104, -110, motionProgress), -86, postHoldProgress);
  const backgroundScale = lerp(lerp(1.14, 1.03, motionProgress), 0.94, postHoldProgress);
  const backgroundRotate = lerp(lerp(-0.7, 0.5, motionProgress), 0.15, postHoldProgress);

  storyScene.style.setProperty("--story-shift-x", `${backgroundShiftX.toFixed(2)}px`);
  storyScene.style.setProperty("--story-shift-y", `${backgroundShiftY.toFixed(2)}px`);
  storyScene.style.setProperty("--story-scale", backgroundScale.toFixed(3));
  storyScene.style.setProperty("--story-rotate", `${backgroundRotate.toFixed(2)}deg`);
  storyScene.style.setProperty("--story-copy-shift", "0px");

  const fragmentRevealPlan = [
    { start: 0.17, end: 0.31 },
    { start: 0.40, end: 0.54 },
    { start: 0.63, end: 0.77 },
    { start: 0.86, end: 1.0 },
    { start: 1.08, end: 1.16 },
  ];

  storyFragments.forEach((fragment, index) => {
    const revealWindow = fragmentRevealPlan[index] || fragmentRevealPlan[fragmentRevealPlan.length - 1];
    const fragmentProgress = clamp(
      (revealProgress - revealWindow.start) / Math.max(revealWindow.end - revealWindow.start, 0.001),
      0,
      1
    );
    const opacity = lerp(0.16, 1, fragmentProgress);
    const translateY = lerp(34, 0, fragmentProgress);
    const blur = lerp(12, 0, fragmentProgress);

    fragment.style.opacity = opacity.toFixed(3);
    fragment.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
    fragment.style.filter = `blur(${blur.toFixed(2)}px)`;
  });
}

function initializeHeroVideo() {
  if (!heroSection || !heroVideo || heroVideoInitialized) {
    return;
  }

  heroVideoInitialized = true;

  const videoSource = heroSection.dataset.heroVideoSrc;
  const posterSource = heroSection.dataset.heroPoster;
  const startTime = Number.parseFloat(heroSection.dataset.heroStart || "0");
  const safeStartTime = Number.isFinite(startTime) ? Math.max(0, startTime) : 0;

  if (posterSource) {
    heroVideo.poster = posterSource;

    if (heroPoster) {
      heroPoster.src = posterSource;
    }
  }

  if (videoSource) {
    const source = heroVideo.querySelector("source");

    if (source) {
      source.src = videoSource;
    } else {
      heroVideo.src = videoSource;
    }
  }

  let hasSeekedToStart = safeStartTime === 0;
  let readyShown = false;

  const revealVideo = () => {
    if (readyShown) {
      return;
    }

    readyShown = true;
    heroSection.classList.add("is-video-ready");
  };

  const attemptPlayback = () => {
    const playPromise = heroVideo.play();

    if (playPromise && typeof playPromise.then === "function") {
      playPromise
        .then(() => {
          if (hasSeekedToStart) {
            revealVideo();
          }
        })
        .catch(() => {
          // Keep the poster visible if autoplay is blocked.
        });
    } else if (hasSeekedToStart) {
      revealVideo();
    }
  };

  heroVideo.addEventListener("loadedmetadata", () => {
    if (!safeStartTime || safeStartTime >= heroVideo.duration) {
      hasSeekedToStart = true;
      attemptPlayback();
      return;
    }

    try {
      heroVideo.currentTime = safeStartTime;
    } catch {
      hasSeekedToStart = true;
      attemptPlayback();
    }
  }, { once: true });

  heroVideo.addEventListener("seeked", () => {
    hasSeekedToStart = true;
    attemptPlayback();
  }, { once: true });

  heroVideo.addEventListener("playing", () => {
    if (hasSeekedToStart) {
      revealVideo();
    }
  });

  heroVideo.load();
  attemptPlayback();
}

function measureLogoMorphBounds() {
  if (!heroLogo || !navLogo) {
    return;
  }

  const heroRect = heroLogo.getBoundingClientRect();
  const navRect = navLogo.getBoundingClientRect();

  logoMorphBounds.start = {
    left: heroRect.left,
    top: heroRect.top,
    width: heroRect.width,
    height: heroRect.height,
  };

  logoMorphBounds.end = {
    left: navRect.left,
    top: navRect.top,
    width: navRect.width,
    height: navRect.height,
  };
}

function resetLogoToHeroState() {
  document.body.classList.remove("is-logo-docked", "is-logo-morphing");

  if (!morphLogo) {
    return;
  }

  morphLogo.style.opacity = "0";
  morphLogo.style.width = "0px";
  morphLogo.style.height = "0px";
  morphLogo.style.transform = "translate3d(0, 0, 0)";

  if (morphLogoImage) {
    morphLogoImage.style.transform = "scaleY(1)";
  }
}

function updateLogoMorph() {
  if (!heroLogo || !navLogo || !morphLogo) {
    return;
  }

  if (!logoMorphArmed || window.scrollY < logoMorphStartScrollY) {
    logoMorphArmed = false;
    logoMorphStartScrollY = 0;
    logoMorphBounds.start = null;
    setLogoDockedState(false);
    resetLogoToHeroState();
    return;
  }

  if (!logoMorphBounds.start || !logoMorphBounds.end) {
    measureLogoMorphBounds();
  }

  if (!logoMorphBounds.start || !logoMorphBounds.end) {
    return;
  }

  const startRect = logoMorphBounds.start;
  const endRect = logoMorphBounds.end;
  const travelDistance = clamp(window.innerHeight * 0.26, 140, 260);
  const reducedMotion = reduceMotionQuery.matches;
  const effectiveScroll = Math.max(0, window.scrollY - logoMorphStartScrollY);
  const progress = reducedMotion
    ? (effectiveScroll > 0 ? 1 : 0)
    : clamp(effectiveScroll / travelDistance, 0, 1);
  const revealThreshold = reducedMotion ? 0 : 0.06;

  if (progress <= revealThreshold) {
    document.body.classList.remove("is-logo-morphing");
    setLogoDockedState(false);
    morphLogo.style.opacity = "0";
    morphLogo.style.width = "0px";
    morphLogo.style.height = "0px";
    morphLogo.style.transform = "translate3d(0, 0, 0)";

    if (morphLogoImage) {
      morphLogoImage.style.transform = "scaleY(1)";
    }

    return;
  }

  if (progress >= 1) {
    document.body.classList.remove("is-logo-morphing");
    setLogoDockedState(true);
    morphLogo.style.opacity = "0";
    morphLogo.style.width = "0px";
    morphLogo.style.height = "0px";
    morphLogo.style.transform = "translate3d(0, 0, 0)";

    if (morphLogoImage) {
      morphLogoImage.style.transform = "scaleY(1)";
    }

    return;
  }

  const left = lerp(startRect.left, endRect.left, progress);
  const top = lerp(startRect.top, endRect.top, progress);
  const width = lerp(startRect.width, endRect.width, progress);
  const height = lerp(startRect.height, endRect.height, progress);

  setLogoDockedState(false);
  document.body.classList.add("is-logo-morphing");
  morphLogo.style.width = `${width}px`;
  morphLogo.style.height = `${height}px`;
  morphLogo.style.opacity = "1";
  morphLogo.style.transform = `translate3d(${left}px, ${top}px, 0)`;

  if (morphLogoImage) {
    const verticalBoost = 1 + (Math.sin(progress * Math.PI) * 0.06);
    morphLogoImage.style.transform = `scaleY(${verticalBoost.toFixed(3)})`;
  }
}

function queueLogoMorph() {
  if (morphTicking) {
    return;
  }

  morphTicking = true;
  window.requestAnimationFrame(() => {
    updateHeaderState();
    updateStoryScene();
    updateLogoMorph();
    morphTicking = false;
  });
}

function armLogoMorph(measureCurrentBounds = false) {
  if (logoMorphArmed) {
    return;
  }

  if (measureCurrentBounds) {
    measureLogoMorphBounds();
  }

  logoMorphArmed = true;
  logoMorphStartScrollY = window.scrollY;
  queueLogoMorph();
}

function closeNav() {
  if (!header || !navToggle) {
    return;
  }

  header.classList.remove("is-open");
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
}

function toggleNav() {
  if (!header || !navToggle) {
    return;
  }

  const isOpen = header.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

if (navToggle) {
  navToggle.addEventListener("click", toggleNav);
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});

window.addEventListener("scroll", () => {
  const morphActivationOffset = 20;

  if (!logoMorphArmed && window.scrollY >= morphActivationOffset) {
    // Capture the start position only after a small amount of real scrolling
    // so the morph begins from the logo's live on-screen position.
    armLogoMorph(true);
  }

  queueLogoMorph();
}, { passive: true });

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    closeNav();
  }

  logoMorphArmed = false;
  logoMorphStartScrollY = 0;
  logoMorphBounds.start = null;
  logoMorphBounds.end = null;
  measureLogoMorphBounds();
  queueLogoMorph();
});

if (typeof reduceMotionQuery.addEventListener === "function") {
  reduceMotionQuery.addEventListener("change", queueLogoMorph);
} else if (typeof reduceMotionQuery.addListener === "function") {
  reduceMotionQuery.addListener(queueLogoMorph);
}

if ("scrollRestoration" in window.history && !window.location.hash) {
  window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
}

window.addEventListener("load", () => {
  initializeHeroVideo();
  measureLogoMorphBounds();
  queueLogoMorph();
});

initializeHeroVideo();
measureLogoMorphBounds();
resetLogoToHeroState();
queueLogoMorph();
