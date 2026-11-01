function initFlowingMenu(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const animationDefaults = { duration: 0.6, ease: 'expo' };

  function isMobile() {
    return window.innerWidth <= 768;
  }

  function distMetric(x, y, x2, y2) {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  }

  function findClosestEdge(mouseX, mouseY, width, height) {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  }

  function createMenuItem(item) {
    const wrapper = document.createElement('div');
    wrapper.className = 'flowing-menu__item';

    const link = document.createElement('a');
    link.className = 'flowing-menu__item-link';
    link.href = item.link;
    if (isMobile()) {
      link.textContent = item.text_mobile;
    } else {
      link.textContent = item.text;
    }

    const marquee = document.createElement('div');
    marquee.className = 'flowing-menu__marquee';

    const marqueeInnerWrap = document.createElement('div');
    marqueeInnerWrap.className = 'flowing-menu__marquee-inner-wrap';

    const marqueeInner = document.createElement('div');
    marqueeInner.className = 'flowing-menu__marquee-inner';
    marqueeInner.setAttribute('aria-hidden', 'true');

    // Create 2 spans for seamless scrolling
    for (let i = 0; i < 2; i++) {
      const span = document.createElement('span');
      span.textContent = item.text_hovered;
      marqueeInner.appendChild(span);
    }

    marqueeInnerWrap.appendChild(marqueeInner);
    marquee.appendChild(marqueeInnerWrap);
    wrapper.appendChild(link);
    wrapper.appendChild(marquee);

    let marqueeTween; // To control the scrolling animation

    link.addEventListener('mouseenter', (ev) => {
      const rect = wrapper.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;
      const edge = findClosestEdge(x, y, rect.width, rect.height);

      // Vertical enter animation
      gsap.timeline({ defaults: animationDefaults })
        .set(marquee, { y: edge === 'top' ? '-101%' : '101%' }, 0)
        .set(marqueeInnerWrap, { y: edge === 'top' ? '101%' : '-101%' }, 0)
        .to([marquee, marqueeInnerWrap], { y: '0%' }, 0);

      // Horizontal scrolling
      marqueeTween = gsap.to(marqueeInner, {
        xPercent: -50,
        ease: "linear",
        repeat: -1,
        duration: 10
      });
    });

    link.addEventListener('mouseleave', (ev) => {
      const rect = wrapper.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;
      const edge = findClosestEdge(x, y, rect.width, rect.height);

      // Vertical exit animation
      gsap.timeline({ defaults: animationDefaults })
        .to(marquee, { y: edge === 'top' ? '-101%' : '101%' }, 0)
        .to(marqueeInnerWrap, { y: edge === 'top' ? '101%' : '-101%' }, 0);

      // Smoothly stop scrolling
      if (marqueeTween) {
        marqueeTween.kill();
        gsap.to(marqueeInner, { xPercent: 0, duration: 1, ease: 'power2.out' });
      }
    });

    return wrapper;
  }

  items.forEach(item => {
    container.appendChild(createMenuItem(item));
  });
}

const menuItems = [
  {
    link: '#aboutme-section',
    text: "I'm Brian Dicky ● I'm Brian Dicky",
    text_hovered: "Fullstack Web Developer based in Sidoarjo, East Java ●",
    text_mobile: "Brian Dicky"
  },
  {
    link: '#aboutme-section',
    text: "Fullstack Web Developer ● Fullstack Web Developer",
    text_hovered: "1.5+ years building modern, scalable web applications ●",
    text_mobile: "Fullstack Developer"
  },
  {
    link: '#aboutme-section',
    text: "Clean Code & AI Integration ● Clean Code & AI Integration",
    text_hovered: "PHP, Laravel, React, Next.js, TypeScript, Tailwind & Gemini AI ●",
    text_mobile: "Clean Code & AI"
  },
  {
    link: '#aboutme-section',
    text: "B.Sc. in Informatics ● B.Sc. in Informatics",
    text_hovered: "5th-semester undergraduate at UPN \"Veteran\" Jawa Timur ●",
    text_mobile: "B.Sc. Informatics"
  },
];

const experienceItems = [
  {
    link: '#experience-section',
    text: "Javatekno Mitra Solusi ● Fullstack Dev",
    text_hovered: "Aug 2026 – Present (Intern) ● Built PUSATKOS in Laravel 12 & MySQL ●",
    text_mobile: "Javatekno Mitra Solusi"
  },
  {
    link: '#experience-section',
    text: "Asah by Dicoding (GoTo) ● AI Full-Stack",
    text_hovered: "Aug 2026 – Present ● Fullstack Web Engineering & AI Integration ●",
    text_mobile: "Asah by Dicoding"
  },
  {
    link: '#experience-section',
    text: "Dicoding & DBS Foundation ● Fullstack Dev",
    text_hovered: "Mar 2026 – Jun 2026 ● Multi-module CRUD & Database Integration ●",
    text_mobile: "Coding Camp DBS"
  },
  {
    link: '#experience-section',
    text: "UPN \"Veteran\" Jatim ● Informatics",
    text_hovered: "Undergraduate 5th Semester ● Software Engineering & Web Systems ●",
    text_mobile: "UPN Veteran Jatim"
  },
];

initFlowingMenu(menuItems, 'flowing-menu');
initFlowingMenu(experienceItems, 'experience-menu');
