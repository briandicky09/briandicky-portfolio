gsap.registerPlugin(ScrollTrigger);

// scroll progress bar animations --------------------------------------------------------------------------------
gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.5 }
});


// observer ------------------------------------------------------------------------------------------------------
const targets = document.querySelectorAll('.observe-me');
const socialsBar = document.getElementById('socials-bar');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;

      if (el.classList.contains('footer-section')) {
        socialsBar.classList.add("socials-bar-hidden");
      } else if (el.classList.contains('projects-section')) {
        customAlert("Click any project for STAR breakdown!");
        observer.unobserve(el);
      } else if (el.classList.contains('aboutme-section')) {
        customAlert("Hover and see the magic!");
        observer.unobserve(el);
      }

    } else {
      socialsBar.classList.remove("socials-bar-hidden");
    }
  });
}, { threshold: 0.25 });

targets.forEach(target => observer.observe(target));


// social links bar animations -----------------------------------------------------------------------------------
const dock = document.querySelector('.socials-bar');
const icons = document.querySelectorAll('.socials-icon');

const config = {
  defaultSize: 32,
  magnifiedSize: 35,
  defaultMargin: 0.5,
  maxMargin: 6,
  influenceRange: 180,
  enableMagnify: true,
  enableMargin: true,
  animationDuration: 0.2,
  animationEase: "power3.out"
};

if (dock) {
  dock.addEventListener('mousemove', (e) => {
    const rect = dock.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;

    icons.forEach((icon) => {
      const iconRect = icon.getBoundingClientRect();
      const iconX = iconRect.left + iconRect.width / 2 - rect.left;
      const dist = Math.abs(mouseX - iconX);

      let influence = 0;
      if (dist < config.influenceRange) {
        influence = 1 - dist / config.influenceRange;
      }

      const contactSectionSize = config.defaultSize + influence * (config.magnifiedSize - config.defaultSize);
      const contactSectionMargin = config.defaultMargin + influence * (config.maxMargin - config.defaultMargin);

      if (config.enableMagnify) {
        gsap.to(icon, {
          width: contactSectionSize,
          height: contactSectionSize,
          duration: config.animationDuration,
          ease: config.animationEase
        });
      }

      if (config.enableMargin) {
        gsap.to(icon, {
          marginLeft: `${contactSectionMargin}px`,
          marginRight: `${contactSectionMargin}px`,
          duration: config.animationDuration,
          ease: config.animationEase
        });
      }
    });
  });

  dock.addEventListener('mouseleave', () => {
    icons.forEach((icon) => {
      const animations = {};

      if (config.enableMagnify) {
        animations.width = config.defaultSize;
        animations.height = config.defaultSize;
      }
      if (config.enableMargin) {
        animations.marginLeft = `${config.defaultMargin}px`;
        animations.marginRight = `${config.defaultMargin}px`;
      }

      gsap.to(icon, {
        ...animations,
        duration: config.animationDuration,
        ease: config.animationEase
      });
    });
  });
}

// section title animations -----------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const letterConfig = {
    fromSettings: { wght: 1000, opsz: 40 },
    toSettings: { wght: 200, opsz: 9 },
    radius: 100,
    falloff: "linear",
    affectX: true,
    affectY: true,
    trackMouseInside: "body",
    letterClass: ".animate-letters",
  };

  const textElements = document.querySelectorAll(letterConfig.letterClass);
  const animatedLetters = [];

  textElements.forEach(textEl => {
    const container = textEl.closest(".title-container") || textEl;
    const originalText = textEl.textContent.trim();
    textEl.textContent = "";

    [...originalText].forEach(char => {
      const span = document.createElement("span");

      if (char === ' ') {
        span.innerHTML = '&nbsp;';
        span.classList.add("letter-space");
      } else {
        span.textContent = char;
      }

      span.style.display = "inline-block";
      textEl.appendChild(span);
      animatedLetters.push({ span, container });
    });
  });

  let mouseTX = 0, mouseTY = 0;
  document.querySelectorAll(letterConfig.trackMouseInside).forEach(el => {
    el.addEventListener("mousemove", e => {
      mouseTX = e.clientX;
      mouseTY = e.clientY;
    }, { passive: true });
  });

  function getFalloffValue(distance) {
    const norm = Math.min(Math.max(1 - distance / letterConfig.radius, 0), 1);
    switch (letterConfig.falloff) {
      case "exponential": return norm ** 2;
      case "gaussian": return Math.exp(-((distance / (letterConfig.radius / 2)) ** 2) / 2);
      case "linear":
      default: return norm;
    }
  }

  function updateLetters() {
    animatedLetters.forEach(({ span }) => {
      const spanRect = span.getBoundingClientRect();
      const letterX = spanRect.left + spanRect.width / 2;
      const letterY = spanRect.top + spanRect.height / 2;

      let dx = letterConfig.affectX ? letterX - mouseTX : 0;
      let dy = letterConfig.affectY ? letterY - mouseTY : 0;

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > letterConfig.radius) {
        span.style.setProperty('--vfph-wght', letterConfig.fromSettings.wght);
        span.style.setProperty('--vfph-opsz', letterConfig.fromSettings.opsz);
      } else {
        const factor = getFalloffValue(distance);
        const wght = letterConfig.fromSettings.wght + (letterConfig.toSettings.wght - letterConfig.fromSettings.wght) * factor;
        const opsz = letterConfig.fromSettings.opsz + (letterConfig.toSettings.opsz - letterConfig.fromSettings.opsz) * factor;
        span.style.setProperty('--vfph-wght', wght);
        span.style.setProperty('--vfph-opsz', opsz);
      }
    });

    requestAnimationFrame(updateLetters);
  }

  updateLetters();
});
