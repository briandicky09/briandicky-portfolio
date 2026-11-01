// Brian 2026 Interactive Portfolio Script for Brian Dicky Vanka Andaraneva
(function () {
  'use strict';

  // 1. STAR Project Data (Strictly from Brian's actual portfolio)
  const PROJECTS = {
    pusatkos: {
      title: 'PUSATKOS',
      meta: 'Web Application · 2026 · Javatekno Mitra Solusi',
      image: 'assets/images/project-previews/pusatkos-cover-landscape.png?v=4',
      repo: 'https://github.com/briandicky09/PUSATKOS',
      stack: ['Laravel 12', 'PHP 8.2', 'Blade', 'Bootstrap', 'MySQL'],
      situation: 'Boarding house (kos) seekers, property owners, and tenants needed a unified platform to discover verified listings, manage room bookings, and handle rental invoicing.',
      task: 'Engineer a multi-role boarding house discovery and rental management web application in Laravel 12 and PHP 8.2.',
      action: 'Implemented modular MVC architecture, role-based routing, and MySQL database integration supporting three distinct roles: public visitors, kos owners (CRUD listings, reviews, statistics, notifications), and customers (room bookings and digital invoices).',
      result: 'Delivered a structured multi-role web platform connecting property discovery, owner analytics dashboards, and digital booking workflows.'
    },
    tanggapin: {
      title: 'Tanggapin',
      meta: 'Web Application · 2026',
      image: 'assets/images/project-previews/tanggapin-cover-landscape.png?v=4',
      repo: 'https://github.com/briandicky09/tanggapin',
      stack: ['Laravel 13', 'React 19', 'Inertia.js', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'PHP 8.3'],
      situation: 'Schools often manage student records, attendance alerts, counseling cases, parent communication, and tuition tracking across disconnected tools.',
      task: 'Build an integrated school operational and decision-making platform with early-warning risk detection and multi-role access.',
      action: 'Developed the full-stack application using Laravel 13, React 19, Inertia.js, TypeScript, and Tailwind CSS for six user roles (Super Admin, Principal, BK Counselor, Homeroom Teacher, Cashier, Parents) with automated academic/attendance risk alerts, incident checklists, and BOS financial validation.',
      result: 'Unified student risk monitoring, counseling case workflows, parent communication, and school financial tracking into one cohesive ecosystem.'
    },
    olara: {
      title: 'OLARA',
      meta: 'Web Application · 2026',
      image: 'assets/images/project-previews/olara-cover-landscape.png?v=4',
      repo: 'https://github.com/briandicky09/olara',
      stack: ['Laravel 13', 'PHP 8.3', 'Tailwind CSS v4', 'Vite', 'Midtrans Snap', 'SQLite / MySQL'],
      situation: 'Household recyclable waste collection lacked convenient material valuation, doorstep pickup coordination, and transparent reward tracking.',
      task: 'Develop a smart circular waste management and eco-wellness platform integrating AI waste scanning and digital payments.',
      action: 'Built an AI scanner for recyclable material detection with real-time value estimation, doorstep pickup fleet scheduling (Eco Bike, Tosa, Van Box), a circular raw material marketplace, Midtrans Snap payment integration, and eco-points wallet analytics.',
      result: 'Created an end-to-end circular waste platform linking AI material scanning, logistics dispatch, digital rewards, and carbon footprint tracking.'
    },
    sipemma: {
      title: 'SIPEMMA',
      meta: 'Web Application · 2026',
      image: 'assets/images/project-previews/sipemma-cover-landscape.png?v=4',
      repo: 'https://github.com/briandicky09/food-order',
      stack: ['Laravel 13', 'PHP 8.3', 'Tailwind CSS v4', 'Flowbite', 'Google Gemini AI', 'SQLite / MySQL', 'Vite'],
      situation: 'Restaurant operations require fast cashier order processing, accurate tax calculation, inventory synchronization, and actionable sales insights.',
      task: 'Build a modern Point of Sale (POS) and restaurant management web application with AI-assisted business analytics.',
      action: 'Engineered an interactive cashier workflow with real-time cart, Dine-In table selection and Take-Away support, automatic 10% PB1 tax calculation, digital receipt printing, menu CRUD with inventory tracking, KPI dashboards, and a Google Gemini AI assistant.',
      result: 'Streamlined cashier checkout, automated inventory and PB1 tax calculations, and integrated AI-powered culinary business recommendations.'
    },
    nalar: {
      title: 'Nalar',
      meta: 'Web Application · 2026',
      image: 'assets/images/project-previews/nalar-cover-landscape.png?v=4',
      repo: 'https://github.com/briandicky09/nalar-ai-learning-companion',
      stack: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      situation: 'University students studying dense lecture PDFs often struggle to pinpoint conceptual gaps and receive tailored explanations.',
      task: 'Create an AI-powered personalized learning companion and interactive study workspace.',
      action: 'Built the web application using Next.js (App Router), React 19, TypeScript, Tailwind CSS, and Framer Motion to extract lecture PDFs, diagnose conceptual comprehension weaknesses, and deliver adaptive private-tutor guidance.',
      result: 'Delivered a responsive, interactive AI study workspace that transforms static lecture materials into guided, concept-focused learning sessions.'
    },
    vehicletax: {
      title: 'Vehicle Tax',
      meta: 'Desktop App · 2026',
      image: 'assets/images/project-previews/vehicle-tax-cover-landscape.png?v=4',
      repo: 'https://github.com/briandicky09/vehicle-tax-calculator',
      stack: ['Java', 'Swing', 'C++', 'Qt Creator', 'Qt Widgets'],
      situation: 'Calculating Indonesian PKB and SWDKLLJ vehicle taxes manually is error-prone without structured owner and vehicle records.',
      task: 'Build a desktop application implementing object-oriented PKB and SWDKLLJ tax calculation and record management.',
      action: 'Implemented the application across Java Swing and C++ Qt Widgets with automatic tax breakdown calculation, owner and vehicle registries, transaction history, search/edit/delete workflows, and file-based persistence.',
      result: 'Produced a reliable cross-implementation desktop suite automating vehicle tax computation and persistent record management.'
    }
  };

  // 1.5 Lenis Smooth Scrolling & Scroll Position Restoration
  let lenisInstance = null;
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  if (typeof Lenis !== 'undefined') {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
    });

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      lenisInstance.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenisInstance.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }

  // Save current scroll position continuously to sessionStorage
  const saveScrollPosition = () => {
    try {
      sessionStorage.setItem('portfolio_scrollY', String(window.scrollY || window.pageYOffset || 0));
    } catch (e) {}
  };

  window.addEventListener('scroll', saveScrollPosition, { passive: true });
  window.addEventListener('beforeunload', saveScrollPosition);

  // Restore scroll position on refresh so the user stays exactly where they were
  const navEntry = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
  const isReload = navEntry ? navEntry.type === 'reload' : (performance.navigation && performance.navigation.type === 1);

  // If page was reloaded, clear any lingering anchor hash to prevent browser/script from jumping to #about
  if (isReload && window.location.hash) {
    if (history.replaceState) {
      history.replaceState(null, document.title, window.location.pathname + window.location.search);
    }
  }

  const restoreScrollPosition = () => {
    try {
      const saved = sessionStorage.getItem('portfolio_scrollY');
      if (saved !== null) {
        const top = parseFloat(saved);
        if (!isNaN(top) && top >= 0) {
          if (lenisInstance) {
            lenisInstance.scrollTo(top, { immediate: true });
          } else {
            window.scrollTo(0, top);
          }
          requestAnimationFrame(() => {
            if (lenisInstance) {
              lenisInstance.scrollTo(top, { immediate: true });
            } else {
              window.scrollTo(0, top);
            }
            if (typeof ScrollTrigger !== 'undefined') {
              ScrollTrigger.refresh();
            }
          });
        }
      }
    } catch (e) {}
  };

  // Run restoration on load
  if (isReload) {
    restoreScrollPosition();
    window.addEventListener('DOMContentLoaded', restoreScrollPosition);
    window.addEventListener('load', restoreScrollPosition);
  } else if (window.location.hash) {
    // If external navigation with hash, scroll to target once then clean hash
    const initialTarget = document.querySelector(window.location.hash);
    if (initialTarget) {
      setTimeout(() => {
        scrollToTarget(initialTarget);
        if (history.replaceState) {
          history.replaceState(null, document.title, window.location.pathname + window.location.search);
        }
      }, 300);
    }
  }

  // Smooth Scroll Helper for Anchors
  function scrollToTarget(targetEl) {
    if (!targetEl) return;
    if (lenisInstance) {
      lenisInstance.scrollTo(targetEl, {
        offset: -40,
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else {
      const header = document.querySelector('header');
      const headerOffset = header ? header.offsetHeight : 0;
      const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - (headerOffset + 20);
      window.scrollTo({
        top: Math.max(0, targetPos),
        behavior: 'smooth'
      });
    }
  }

  // Bind smooth scroll to all anchor links pointing to on-page hash
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();

        // Close mobile menu if open
        const mobileDrawer = document.getElementById('mobile-menu-drawer');
        const mobileBtn = document.getElementById('mobile-menu-btn');
        if (mobileDrawer && !mobileDrawer.classList.contains('translate-x-full')) {
          mobileDrawer.classList.add('translate-x-full');
          mobileDrawer.classList.remove('translate-x-0');
          if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
        }

        scrollToTarget(target);

        // Clean URL so refreshing never locks into a specific hash like #about
        if (history.replaceState) {
          history.replaceState(null, document.title, window.location.pathname + window.location.search);
        }
      }
    });
  });

  // 2. Theme Toggle with Circular Clip-Path View Transition (Brian Style)
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    const syncThemeIcon = (isDark) => {
      const sunIcon = document.getElementById('theme-icon-sun');
      const moonIcon = document.getElementById('theme-icon-moon');
      if (sunIcon) sunIcon.classList.toggle('hidden', !isDark);
      if (moonIcon) moonIcon.classList.toggle('hidden', isDark);
    };

    // Initialize from storage or default dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      syncThemeIcon(false);
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      syncThemeIcon(true);
    }

    let isTransitioning = false;
    themeBtn.addEventListener('click', () => {
      if (isTransitioning) return;
      isTransitioning = true;

      const rect = themeBtn.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const isCurrentlyDark = document.documentElement.classList.contains('dark');
      const isGoingToLight = isCurrentlyDark;

      const performThemeChange = () => {
        if (isGoingToLight) {
          document.documentElement.classList.remove('dark');
          document.documentElement.classList.add('light');
          localStorage.setItem('theme', 'light');
          syncThemeIcon(false);
        } else {
          document.documentElement.classList.remove('light');
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
          syncThemeIcon(true);
        }
      };

      if (!document.startViewTransition) {
        performThemeChange();
        isTransitioning = false;
        return;
      }

      document.documentElement.classList.add(isGoingToLight ? 'vt-to-light' : 'vt-to-dark');

      const transition = document.startViewTransition(() => {
        performThemeChange();
      });

      transition.ready.then(() => {
        if (isGoingToLight) {
          // Dark to Light: dark mode contracts / shrinks into the logo
          document.documentElement.animate(
            {
              clipPath: [
                `circle(${endRadius}px at ${x}px ${y}px)`,
                `circle(0px at ${x}px ${y}px)`
              ]
            },
            {
              duration: 650,
              easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
              pseudoElement: '::view-transition-old(root)',
              fill: 'forwards'
            }
          );
        } else {
          // Light to Dark: dark mode expands from the logo outward
          document.documentElement.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`
              ]
            },
            {
              duration: 650,
              easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
              pseudoElement: '::view-transition-new(root)',
              fill: 'forwards'
            }
          );
        }
      });

      transition.finished.finally(() => {
        isTransitioning = false;
        document.documentElement.classList.remove('vt-to-light', 'vt-to-dark');
      });
    });
  }

  // 3. Mobile Navigation Drawer
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  if (mobileBtn && mobileDrawer) {
    let menuOpen = false;
    const toggleMenu = () => {
      menuOpen = !menuOpen;
      mobileBtn.setAttribute('aria-expanded', String(menuOpen));
      if (menuOpen) {
        mobileDrawer.classList.remove('translate-x-full');
        mobileDrawer.classList.add('translate-x-0');
      } else {
        mobileDrawer.classList.add('translate-x-full');
        mobileDrawer.classList.remove('translate-x-0');
      }
    };
    mobileBtn.addEventListener('click', toggleMenu);
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (menuOpen) toggleMenu();
      });
    });
  }

  // 4. Hero Interactive Card Stack Cycling
  const stackCards = Array.from(document.querySelectorAll('.hero-stack-card'));
  if (stackCards.length === 3) {
    let order = [0, 1, 2];
    const positions = [
      { zIndex: 3, transform: 'translateX(calc(0cqw + 0%)) translateY(-50%)', overlay: 0 },
      { zIndex: 2, transform: 'translateX(calc(-50cqw + 50%)) translateY(-50%)', overlay: 0.35 },
      { zIndex: 1, transform: 'translateX(calc(-100cqw + 100%)) translateY(-50%)', overlay: 0.45 }
    ];

    const applyStackOrder = () => {
      order.forEach((cardIdx, posIdx) => {
        const card = stackCards[cardIdx];
        const pos = positions[posIdx];
        card.style.zIndex = String(pos.zIndex);
        card.style.transform = pos.transform;
        const overlay = card.querySelector('.stack-card-overlay');
        if (overlay) overlay.style.opacity = String(pos.overlay);
      });
    };

    document.querySelectorAll('.hero-stack-next').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        order.push(order.shift());
        applyStackOrder();
      });
    });

    // Touch swipe & background card tap support for mobile/tablet
    const heroCardStack = document.getElementById('hero-card-stack');
    if (heroCardStack) {
      let touchStartX = 0;
      let touchStartY = 0;
      heroCardStack.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches.length === 1) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
        }
      }, { passive: true });

      heroCardStack.addEventListener('touchend', (e) => {
        if (e.changedTouches && e.changedTouches.length === 1) {
          const dx = e.changedTouches[0].clientX - touchStartX;
          const dy = e.changedTouches[0].clientY - touchStartY;
          if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
            if (dx < 0) {
              order.push(order.shift());
            } else {
              order.unshift(order.pop());
            }
            applyStackOrder();
          }
        }
      }, { passive: true });
    }

    stackCards.forEach((card, idx) => {
      card.addEventListener('click', (e) => {
        if (order[0] !== idx && !e.target.closest('a, button')) {
          while (order[0] !== idx) {
            order.push(order.shift());
          }
          applyStackOrder();
        }
      });
    });
  }

  // 5. Work Section Cursor-Following Preview Card
  const floatingPreview = document.getElementById('work-floating-preview');
  const previewImages = Array.from(document.querySelectorAll('.work-preview-img'));
  const workRows = Array.from(document.querySelectorAll('.work-row-item'));

  if (floatingPreview && workRows.length > 0) {
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    let isHoveringWork = false;
    let rafId = null;

    const updatePreviewPosition = () => {
      currentX += (mouseX - currentX) * 0.16;
      currentY += (mouseY - currentY) * 0.16;
      const boxWidth = 320;
      const boxHeight = 180;
      let posX = currentX + 24;
      if (posX + boxWidth > window.innerWidth - 16) {
        posX = currentX - boxWidth - 24;
      }
      let posY = currentY - (boxHeight / 2);
      if (posY < 16) posY = 16;
      if (posY + boxHeight > window.innerHeight - 16) posY = window.innerHeight - boxHeight - 16;
      floatingPreview.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
      if (isHoveringWork) {
        rafId = requestAnimationFrame(updatePreviewPosition);
      }
    };

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });

    workRows.forEach(row => {
      row.addEventListener('mouseenter', (e) => {
        const targetId = row.getAttribute('data-preview-target');
        currentX = e.clientX;
        currentY = e.clientY;
        floatingPreview.style.opacity = '1';
        floatingPreview.style.scale = '1';
        previewImages.forEach(img => {
          if (img.getAttribute('data-preview-id') === targetId) {
            img.style.opacity = '1';
            img.style.scale = '1';
            img.style.filter = 'blur(0px)';
            img.style.zIndex = '2';
          } else {
            img.style.opacity = '0';
            img.style.scale = '1.1';
            img.style.filter = 'blur(10px)';
            img.style.zIndex = '1';
          }
        });
        if (!isHoveringWork) {
          isHoveringWork = true;
          rafId = requestAnimationFrame(updatePreviewPosition);
        }
      });

      row.addEventListener('mouseleave', () => {
        isHoveringWork = false;
        floatingPreview.style.opacity = '0';
        floatingPreview.style.scale = '0.8';
        if (rafId) cancelAnimationFrame(rafId);
      });
    });
  }

  // 5b. Selected Work "Show More / Show Less" Collapsible Toggle
  const workToggleBtn = document.getElementById('work-toggle-btn');
  const workMoreCollapse = document.getElementById('work-more-collapse');
  const workToggleLabel = document.getElementById('work-toggle-label');
  if (workToggleBtn && workMoreCollapse) {
    workToggleBtn.addEventListener('click', () => {
      const isExpanded = workMoreCollapse.getAttribute('data-expanded') === 'true';
      const nextState = !isExpanded;
      workMoreCollapse.setAttribute('data-expanded', String(nextState));
      workMoreCollapse.setAttribute('aria-hidden', String(!nextState));
      workToggleBtn.setAttribute('aria-expanded', String(nextState));
      if (workToggleLabel) {
        workToggleLabel.textContent = nextState ? 'Show less projects' : 'Show more projects (3)';
      }
      if (nextState && typeof gsap !== 'undefined') {
        const extraRows = workMoreCollapse.querySelectorAll('.work-row-item');
        gsap.fromTo(
          extraRows,
          { y: 32, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.55, stagger: 0.08, ease: 'power3.out', overwrite: 'auto' }
        );
      }
      setTimeout(() => {
        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh();
        }
      }, 560);
    });
  }

  // 6. Project Detail Page Navigation & Interactive Hero Carousel
  const SLUG_MAP = {
    pusatkos: '/work/pusatkos/',
    tanggapin: '/work/tanggapin/',
    olara: '/work/olara/',
    sipemma: '/work/sipemma/',
    nalar: '/work/nalar/',
    vehicletax: '/work/vehicle-tax/'
  };

  document.querySelectorAll('[data-open-project]').forEach(el => {
    el.addEventListener('click', (e) => {
      const key = el.getAttribute('data-open-project');
      if (SLUG_MAP[key]) {
        e.preventDefault();
        window.location.href = SLUG_MAP[key];
      }
    });
  });

  const carouselTrack = document.getElementById('carousel-track');
  const carouselPrev = document.getElementById('carousel-prev');
  const carouselNext = document.getElementById('carousel-next');
  const carouselDots = Array.from(document.querySelectorAll('.carousel-dot'));

  if (carouselTrack && carouselDots.length > 0) {
    let currentSlide = 0;
    const totalSlides = carouselDots.length;

    const goToSlide = (idx) => {
      currentSlide = (idx + totalSlides) % totalSlides;
      carouselTrack.style.transform = `translate3d(-${currentSlide * 100}%, 0, 0)`;
      carouselDots.forEach((dot, i) => {
        const active = i === currentSlide;
        dot.setAttribute('aria-selected', String(active));
        if (active) {
          dot.classList.remove('w-1.5', 'bg-foreground/40', 'hover:bg-foreground/60');
          dot.classList.add('w-6', 'bg-foreground');
        } else {
          dot.classList.remove('w-6', 'bg-foreground');
          dot.classList.add('w-1.5', 'bg-foreground/40', 'hover:bg-foreground/60');
        }
      });
    };

    if (carouselPrev) carouselPrev.addEventListener('click', () => goToSlide(currentSlide - 1));
    if (carouselNext) carouselNext.addEventListener('click', () => goToSlide(currentSlide + 1));
    carouselDots.forEach((dot, i) => {
      dot.addEventListener('click', () => goToSlide(i));
    });
  }

  const shareBtn = document.getElementById('share-project-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      if (navigator.share) {
        navigator.share({ title: document.title, url: window.location.href }).catch(() => {});
      } else {
        navigator.clipboard.writeText(window.location.href);
      }
    });
  }

  // 8. Copy Email Button
  const copyBtn = document.getElementById('copy-email-btn');
  const copyText = document.getElementById('copy-email-text');
  if (copyBtn && copyText) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('briandicky09@gmail.com').then(() => {
        const orig = copyText.textContent;
        copyText.textContent = 'Copied to clipboard!';
        setTimeout(() => { copyText.textContent = orig; }, 2000);
      });
    });
  }

  // 9. Contact Form Submission -> Mailto
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=briandicky09@gmail.com&su=${subject}&body=${body}`, '_blank');
    });
  }

  // 10. React Bits <ShinyText /> Component Integration
  const initShinyText = () => {
    const EASINGS = {
      linear: t => t,
      smooth: t => 0.5 - Math.cos(Math.PI * t) / 2,
      snappy: t => (t < 0.5 ? 16 * Math.pow(t, 5) : 1 - Math.pow(-2 * t + 2, 5) / 2)
    };
    const FALLOFF = [0, 0.2, 0.4, 0.6, 0.8, 1];
    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
    let paint = null;

    const parseColor = value => {
      if (typeof document === 'undefined') return null;
      if (!paint) paint = document.createElement('canvas').getContext('2d');
      if (!paint) return null;
      paint.fillStyle = '#000000';
      paint.fillStyle = value;
      const resolved = String(paint.fillStyle);
      if (resolved.startsWith('#')) {
        return [1, 3, 5].map(i => parseInt(resolved.slice(i, i + 2), 16)).concat(1);
      }
      const parts = resolved.match(/[\d.]+/g);
      if (!parts || parts.length < 3) return null;
      return [Number(parts[0]), Number(parts[1]), Number(parts[2]), parts.length > 3 ? Number(parts[3]) : 1];
    };

    const blend = (from, to, amount) => {
      const channel = (a, b) =>
        Math.round(Math.pow(Math.pow(a / 255, 2.2) * (1 - amount) + Math.pow(b / 255, 2.2) * amount, 1 / 2.2) * 255);
      const alpha = from[3] * (1 - amount) + to[3] * amount;
      if (alpha <= 0) return 'rgba(0, 0, 0, 0)';
      const weigh = (a, b) => (a * from[3] * (1 - amount) + b * to[3] * amount) / alpha;
      const r = from[3] === to[3] ? channel(from[0], to[0]) : Math.round(weigh(from[0], to[0]));
      const g = from[3] === to[3] ? channel(from[1], to[1]) : Math.round(weigh(from[1], to[1]));
      const b = from[3] === to[3] ? channel(from[2], to[2]) : Math.round(weigh(from[2], to[2]));
      return `rgba(${r}, ${g}, ${b}, ${Math.round(alpha * 1000) / 1000})`;
    };

    document.querySelectorAll('.shiny-text').forEach(root => {
      const isLight = () => document.documentElement.classList.contains('light');
      const getSettings = () => ({
        color: isLight() ? '#555555' : (root.getAttribute('data-shiny-color') || '#b5b5b5'),
        shineColor: isLight() ? '#000000' : (root.getAttribute('data-shiny-shine') || '#ffffff'),
        speed: Math.max(0.1, parseFloat(root.getAttribute('data-shiny-speed') || '2')),
        delay: Math.max(0, parseFloat(root.getAttribute('data-shiny-delay') || '0')),
        angle: parseFloat(root.getAttribute('data-shiny-angle') || '120'),
        shineWidth: clamp(parseFloat(root.getAttribute('data-shiny-width') || '40'), 2, 200),
        softness: clamp(parseFloat(root.getAttribute('data-shiny-softness') || '0.8'), 0, 1),
        bands: clamp(Math.round(parseFloat(root.getAttribute('data-shiny-bands') || '1')), 1, 3),
        glow: clamp(parseFloat(root.getAttribute('data-shiny-glow') || '0'), 0, 1),
        sign: (root.getAttribute('data-shiny-direction') || 'left') === 'right' ? 1 : -1,
        ease: EASINGS[root.getAttribute('data-shiny-easing') || 'smooth'] || EASINGS.smooth,
        trigger: root.getAttribute('data-shiny-trigger') || 'loop',
        yoyo: root.getAttribute('data-shiny-yoyo') === 'true',
        followPointer: root.getAttribute('data-shiny-follow') === 'true',
        pauseOnHover: root.getAttribute('data-shiny-pause') === 'true',
        disabled: root.getAttribute('data-shiny-disabled') === 'true'
      });

      const state = {
        pos: null,
        vel: 0,
        phase: 'idle',
        from: 0,
        to: 0,
        start: 0,
        duration: 1,
        resume: 0,
        flip: false,
        inside: false,
        target: 0,
        visible: true,
        seen: false,
        colors: ''
      };

      let base = null;
      let shine = null;
      let raf = 0;
      let timer = 0;
      let last = 0;

      const extent = s => s.shineWidth / 2 + (s.bands - 1) * s.shineWidth * 1.3 + 2;
      const entry = s => (s.sign > 0 ? -extent(s) : 100 + extent(s));
      const exit = s => (s.sign > 0 ? 100 + extent(s) : -extent(s));

      const gradient = (pos, fill, s) => {
        const half = s.shineWidth / 2;
        const core = half * (1 - s.softness);
        const fade = half - core;
        const stops = [];
        for (let band = 0; band < s.bands; band++) {
          const center = pos - s.sign * band * s.shineWidth * 1.3;
          const strength = 1 - band * 0.28;
          for (const side of [-1, 1]) {
            for (const f of FALLOFF) {
              const at = center + side * (core + fade * (1 - f));
              const amount = f * f * (3 - 2 * f) * strength;
              stops.push([at, amount]);
            }
          }
        }
        stops.sort((a, b) => a[0] - b[0]);
        const list = stops.map(([at, amount]) => `${blend(fill, shine, amount)} ${at.toFixed(2)}%`);
        return `linear-gradient(${s.angle}deg, ${blend(fill, shine, 0)} 0%, ${list.join(', ')}, ${blend(fill, shine, 0)} 100%)`;
      };

      const draw = s => {
        const key = `${s.color}|${s.shineColor}`;
        if (key !== state.colors) {
          state.colors = key;
          base = parseColor(s.color);
          shine = parseColor(s.shineColor);
        }
        if (!base || !shine || state.pos === null || s.disabled) {
          root.style.backgroundImage = `linear-gradient(${s.color}, ${s.color})`;
          return;
        }
        root.style.backgroundImage = gradient(state.pos, base, s);
      };

      const sweep = (from, to, now, s) => {
        const span = Math.abs(exit(s) - entry(s)) || 1;
        state.phase = 'sweep';
        state.from = from;
        state.to = to;
        state.start = now;
        state.duration = s.speed * 1000 * Math.max(0.15, Math.abs(to - from) / span);
      };

      const wake = () => {
        if (raf) return;
        window.clearTimeout(timer);
        timer = 0;
        last = performance.now();
        raf = requestAnimationFrame(tick);
      };

      const tick = now => {
        raf = 0;
        const s = getSettings();
        last = now;
        if (s.disabled) {
          state.pos = null;
          state.phase = 'idle';
          draw(s);
          return;
        }
        if (state.phase === 'idle') {
          if (s.trigger === 'loop' && state.visible) {
            state.flip = false;
            sweep(entry(s), exit(s), now, s);
          } else {
            draw(s);
            return;
          }
        }
        if (state.phase === 'wait') {
          if (s.trigger !== 'loop' || !state.visible) {
            state.phase = 'idle';
            state.pos = null;
            draw(s);
            return;
          }
          if (now < state.resume) {
            timer = window.setTimeout(wake, Math.max(16, state.resume - now));
            return;
          }
          const from = s.yoyo && state.flip ? exit(s) : entry(s);
          const to = s.yoyo && state.flip ? entry(s) : exit(s);
          sweep(from, to, now, s);
        }
        if (state.phase === 'sweep') {
          if (s.pauseOnHover && state.inside) {
            state.resume = clamp((now - state.start) / state.duration, 0, 1);
            state.phase = 'paused';
            draw(s);
            return;
          }
          const raw = clamp((now - state.start) / state.duration, 0, 1);
          state.pos = state.from + (state.to - state.from) * s.ease(raw);
          draw(s);
          if (raw < 1) {
            raf = requestAnimationFrame(tick);
            return;
          }
          if (s.trigger === 'loop' && state.visible) {
            if (s.yoyo) state.flip = !state.flip;
            if (s.delay > 0) {
              state.phase = 'wait';
              state.resume = now + s.delay * 1000;
              timer = window.setTimeout(wake, s.delay * 1000);
            } else {
              const from = s.yoyo && state.flip ? exit(s) : entry(s);
              const to = s.yoyo && state.flip ? entry(s) : exit(s);
              sweep(from, to, now, s);
              raf = requestAnimationFrame(tick);
            }
            return;
          }
          state.phase = 'idle';
          state.pos = null;
        }
      };

      draw(getSettings());
      wake();
    });
  };
  initShinyText();

  // 11. React Bits <Dither /> Component Integration
  const initHeroDither = () => {
    const container = document.getElementById('hero-dither-bg');
    if (!container) return;
    const canvas = container.querySelector('.dither-canvas');
    if (!canvas) return;

    const MODES = { bayer: 0, bayer4: 1, bayer2: 2, halftone: 3, lines: 4, crosshatch: 5, noise: 6, none: 7 };
    const EFFECTS = { erase: 0, reveal: 1, ripple: 2 };
    const MAX_TRAIL = 16;
    const MAX_RIPPLES = 4;
    const MAX_PALETTE = 8;
    const INTRO_SECONDS = 1.8;
    const RIPPLE_SECONDS = 1.6;

    const VERTEX = `#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`;

    const WAVE_FRAGMENT = `#version 300 es
precision highp float;
precision highp int;
uniform vec2 uResolution;
uniform float uCell;
uniform float uTime;
uniform float uWaveSpeed;
uniform float uWaveFrequency;
uniform float uWaveAmplitude;
uniform float uScale;
uniform float uContrast;
uniform float uBrightness;
uniform int uEffect;
uniform float uRadius;
uniform float uStrength;
uniform vec3 uTrail[${MAX_TRAIL}];
uniform int uTrailCount;
uniform vec4 uRipples[${MAX_RIPPLES}];
uniform int uRippleCount;
uniform float uIntro;
uniform float uReach;
out vec4 outColor;

vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 fade(vec2 t) { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }

float cnoise(vec2 P) {
  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
  Pi = mod289(Pi);
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0;
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x, gy.x);
  vec2 g10 = vec2(gx.y, gy.y);
  vec2 g01 = vec2(gx.z, gy.z);
  vec2 g11 = vec2(gx.w, gy.w);
  vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
  g00 *= norm.x;
  g01 *= norm.y;
  g10 *= norm.z;
  g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fadeXY = fade(Pf.xy);
  vec2 nx = mix(vec2(n00, n01), vec2(n10, n11), fadeXY.x);
  return 2.3 * mix(nx.x, nx.y, fadeXY.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amp = 1.0;
  for (int i = 0; i < 4; i++) {
    value += amp * abs(cnoise(p));
    p *= uWaveFrequency;
    amp *= uWaveAmplitude;
  }
  return value;
}

float pattern(vec2 p) {
  vec2 p2 = p - uTime * uWaveSpeed;
  return fbm(p + fbm(p2));
}

void main() {
  vec2 corner = (gl_FragCoord.xy - 0.5) * uCell;
  vec2 uv = corner / uResolution - 0.5;
  uv.x *= uResolution.x / uResolution.y;

  float touch = 0.0;
  for (int i = 0; i < ${MAX_TRAIL}; i++) {
    if (i >= uTrailCount) break;
    vec3 point = uTrail[i];
    float reach = uRadius * mix(0.55, 1.0, point.z);
    touch = max(touch, point.z * (1.0 - smoothstep(0.0, reach, length(uv - point.xy))));
  }

  vec2 warp = vec2(0.0);
  float ring = 0.0;
  for (int i = 0; i < ${MAX_RIPPLES}; i++) {
    if (i >= uRippleCount) break;
    vec4 ripple = uRipples[i];
    vec2 delta = uv - ripple.xy;
    float dist = length(delta);
    float life = clamp(ripple.z / ${RIPPLE_SECONDS.toFixed(2)}, 0.0, 1.0);
    float wave = exp(-pow((dist - ripple.z * 0.9) / 0.07, 2.0)) * (1.0 - life) * (1.0 - life) * ripple.w;
    warp += (dist > 0.0001 ? delta / dist : vec2(0.0)) * wave * 0.035;
    ring += wave;
  }

  if (uEffect == 2 && touch > 0.0) {
    vec3 head = uTrail[0];
    vec2 delta = uv - head.xy;
    float dist = length(delta);
    warp += (dist > 0.0001 ? delta / dist : vec2(0.0)) * sin(dist / max(uRadius, 0.001) * 16.0 - uTime * 7.0) * 0.04 * touch * uStrength;
  }

  float f = pattern((uv + warp) / uScale);
  if (uEffect == 0) f -= 0.5 * touch * uStrength;
  if (uEffect == 1) f += 0.5 * touch * uStrength;
  f += ring * 0.55;
  f = (f - 0.5) * uContrast + 0.5 + uBrightness;
  float show = clamp((uIntro * uReach - length(uv)) / 0.45, 0.0, 1.0);
  float v = clamp(f, 0.0, 1.0) * show * show * (3.0 - 2.0 * show);
  outColor = vec4(floor(v * 255.0) / 255.0, fract(v * 255.0), 0.0, 1.0);
}`;

    const DITHER_FRAGMENT = `#version 300 es
precision highp float;
precision highp int;
uniform sampler2D uField;
uniform ivec2 uFieldSize;
uniform float uCellDevice;
uniform int uMode;
uniform float uColorNum;
uniform vec3 uWave;
uniform vec3 uBackground;
uniform vec3 uPalette[${MAX_PALETTE}];
uniform int uPaletteCount;
uniform float uTransparent;
out vec4 outColor;

const float bayer8[64] = float[64](
  0.0 / 64.0, 48.0 / 64.0, 12.0 / 64.0, 60.0 / 64.0, 3.0 / 64.0, 51.0 / 64.0, 15.0 / 64.0, 63.0 / 64.0,
  32.0 / 64.0, 16.0 / 64.0, 44.0 / 64.0, 28.0 / 64.0, 35.0 / 64.0, 19.0 / 64.0, 47.0 / 64.0, 31.0 / 64.0,
  8.0 / 64.0, 56.0 / 64.0, 4.0 / 64.0, 52.0 / 64.0, 11.0 / 64.0, 59.0 / 64.0, 7.0 / 64.0, 55.0 / 64.0,
  40.0 / 64.0, 24.0 / 64.0, 36.0 / 64.0, 20.0 / 64.0, 43.0 / 64.0, 27.0 / 64.0, 39.0 / 64.0, 23.0 / 64.0,
  2.0 / 64.0, 50.0 / 64.0, 14.0 / 64.0, 62.0 / 64.0, 1.0 / 64.0, 49.0 / 64.0, 13.0 / 64.0, 61.0 / 64.0,
  34.0 / 64.0, 18.0 / 64.0, 46.0 / 64.0, 30.0 / 64.0, 33.0 / 64.0, 17.0 / 64.0, 45.0 / 64.0, 29.0 / 64.0,
  10.0 / 64.0, 58.0 / 64.0, 6.0 / 64.0, 54.0 / 64.0, 9.0 / 64.0, 57.0 / 64.0, 5.0 / 64.0, 53.0 / 64.0,
  42.0 / 64.0, 26.0 / 64.0, 38.0 / 64.0, 22.0 / 64.0, 41.0 / 64.0, 25.0 / 64.0, 37.0 / 64.0, 21.0 / 64.0
);

const float bayer4[16] = float[16](
  0.0 / 16.0, 8.0 / 16.0, 2.0 / 16.0, 10.0 / 16.0,
  12.0 / 16.0, 4.0 / 16.0, 14.0 / 16.0, 6.0 / 16.0,
  3.0 / 16.0, 11.0 / 16.0, 1.0 / 16.0, 9.0 / 16.0,
  15.0 / 16.0, 7.0 / 16.0, 13.0 / 16.0, 5.0 / 16.0
);

const float bayer2[4] = float[4](0.0 / 4.0, 2.0 / 4.0, 3.0 / 4.0, 1.0 / 4.0);

float threshold(vec2 cell) {
  if (uMode == 1) {
    ivec2 c = ivec2(mod(cell, 4.0));
    return bayer4[c.y * 4 + c.x];
  }
  if (uMode == 2) {
    ivec2 c = ivec2(mod(cell, 2.0));
    return bayer2[c.y * 2 + c.x];
  }
  if (uMode == 3) {
    vec2 r = vec2(cell.x + cell.y, cell.x - cell.y) * 0.70710678 / 4.0;
    return clamp(length(fract(r) - 0.5) * 1.41421356, 0.0, 0.999);
  }
  if (uMode == 4) {
    return abs(fract(cell.y / 4.0) - 0.5) * 2.0 * 0.999;
  }
  if (uMode == 5) {
    float a = abs(fract((cell.x + cell.y) / 6.0) - 0.5) * 2.0;
    float b = abs(fract((cell.x - cell.y) / 6.0) - 0.5) * 2.0;
    return min(a, b) * 0.999;
  }
  if (uMode == 6) {
    return fract(52.9829189 * fract(dot(cell, vec2(0.06711056, 0.00583715))));
  }
  if (uMode == 7) {
    return 0.25;
  }
  ivec2 c = ivec2(mod(cell, 8.0));
  return bayer8[c.y * 8 + c.x];
}

vec3 toSrgb(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

void main() {
  vec2 cell = floor(gl_FragCoord.xy / uCellDevice);
  vec4 sampleValue = texelFetch(uField, clamp(ivec2(cell), ivec2(0), uFieldSize - 1), 0);
  float f = sampleValue.r + sampleValue.g / 255.0;
  float t = threshold(cell) - 0.25;

  if (uPaletteCount > 1) {
    float n = float(uPaletteCount);
    float v = f + t / (n - 1.0);
    v = clamp(v - mix(0.2, 0.0, smoothstep(0.45, 0.8, v)), 0.0, 1.0);
    int index = int(floor(v * (n - 1.0) + 0.5));
    outColor = vec4(toSrgb(uPalette[index]), 1.0);
    return;
  }

  float levels = max(uColorNum, 1.01) - 1.0;
  if (uTransparent > 0.5) {
    float v = f + t / levels;
    v = clamp(v - mix(0.2, 0.0, smoothstep(0.45, 0.8, v)), 0.0, 1.0);
    float a = floor(v * levels + 0.5) / levels;
    outColor = vec4(toSrgb(uWave) * a, a);
    return;
  }

  float base = dot(uBackground, vec3(0.2126, 0.7152, 0.0722));
  vec3 offset = (uWave - vec3(base)) * f + t / levels;
  float luminance = dot(uBackground + offset, vec3(0.2126, 0.7152, 0.0722));
  offset -= mix(0.2, 0.0, smoothstep(0.45, 0.8, luminance));
  bool rising = dot(uWave, vec3(0.2126, 0.7152, 0.0722)) >= base;
  float lower = rising ? 0.0 : -max(uBackground.r, max(uBackground.g, uBackground.b));
  float upper = rising ? 1.0 - min(uBackground.r, min(uBackground.g, uBackground.b)) : 0.0;
  offset = floor(clamp(offset, lower, upper) * levels + 0.5) / levels;
  outColor = vec4(toSrgb(uBackground + offset), 1.0);
}`;

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    const compile = (gl, type, source) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
      gl.deleteShader(shader);
      return null;
    };

    const link = (gl, fragmentSource) => {
      const vertex = compile(gl, gl.VERTEX_SHADER, VERTEX);
      const fragment = compile(gl, gl.FRAGMENT_SHADER, fragmentSource);
      const program = gl.createProgram();
      if (!vertex || !fragment || !program) return null;
      gl.attachShader(program, vertex);
      gl.attachShader(program, fragment);
      gl.bindAttribLocation(program, 0, 'aPosition');
      gl.linkProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        gl.deleteProgram(program);
        return null;
      }
      const uniforms = {};
      const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
      for (let i = 0; i < count; i++) {
        const info = gl.getActiveUniform(program, i);
        if (info) uniforms[info.name.replace('[0]', '')] = gl.getUniformLocation(program, info.name);
      }
      return { program, uniforms };
    };

    const toLinear = value => (value <= 0.04045 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4));

    const settings = {
      waveSpeed: parseFloat(container.getAttribute('data-wave-speed') || '0.05'),
      waveFrequency: parseFloat(container.getAttribute('data-wave-frequency') || '3'),
      waveAmplitude: parseFloat(container.getAttribute('data-wave-amplitude') || '0.3'),
      waveColor: container.getAttribute('data-wave-color') || '#bcbcbc',
      backgroundColor: container.getAttribute('data-bg-color') || '#120f17',
      colorNum: Math.max(2, parseFloat(container.getAttribute('data-color-num') || '4')),
      pixelSize: Math.max(1, parseFloat(container.getAttribute('data-pixel-size') || '2')),
      disableAnimation: false,
      enableMouseInteraction: true,
      mouseRadius: Math.max(0.001, parseFloat(container.getAttribute('data-mouse-radius') || '0.3')),
      mode: MODES[container.getAttribute('data-dither-mode') || 'bayer'] ?? 0,
      palette: [],
      scale: 1,
      contrast: 1,
      brightness: 0,
      effect: EFFECTS[container.getAttribute('data-mouse-effect') || 'erase'] ?? 0,
      mouseStrength: 1,
      trail: 0.5,
      clickRipple: true,
      intro: true,
      dpr: undefined
    };

    const gl = canvas.getContext('webgl2', {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      depth: false,
      stencil: false
    });
    if (!gl) return;

    const wave = link(gl, WAVE_FRAGMENT);
    const dither = link(gl, DITHER_FRAGMENT);
    if (!wave || !dither) return;

    const buffer = gl.createBuffer();
    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const field = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, field);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    const framebuffer = gl.createFramebuffer();

    const probe = document.createElement('canvas').getContext('2d', { willReadFrequently: true });
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const cache = new Map();
    const toColor = value => {
      if (Array.isArray(value)) return [0, 1, 2].map(i => clamp(Number(value[i]) || 0, 0, 1));
      const key = String(value);
      if (cache.has(key)) return cache.get(key);
      let rgb = [0, 0, 0];
      if (probe) {
        probe.clearRect(0, 0, 1, 1);
        probe.fillStyle = '#000000';
        probe.fillStyle = key;
        probe.fillRect(0, 0, 1, 1);
        const [r, g, b] = probe.getImageData(0, 0, 1, 1).data;
        rgb = [r, g, b].map(channel => toLinear(channel / 255));
      }
      cache.set(key, rgb);
      return rgb;
    };

    const view = { width: 1, height: 1, ratio: 1, cell: 1, cellCss: 1, cols: 1, rows: 1 };
    const pointer = { x: 0, y: 0, inside: false, set: false };
    const trailPoints = [];
    const ripples = [];
    const trailData = new Float32Array(MAX_TRAIL * 3);
    const rippleData = new Float32Array(MAX_RIPPLES * 4);
    const paletteData = new Float32Array(MAX_PALETTE * 3);
    const state = {
      time: 0,
      hx: 0,
      hy: 0,
      presence: 0,
      reveal: settings.intro && !reduce ? 0 : 1
    };
    let raf = 0;
    let last = 0;
    let visible = true;

    const allocate = () => {
      const s = settings;
      view.cell = Math.max(1, Math.round(s.pixelSize * view.ratio));
      view.cellCss = view.cell / view.ratio;
      view.cols = Math.max(1, Math.ceil(canvas.width / view.cell));
      view.rows = Math.max(1, Math.ceil(canvas.height / view.cell));
      gl.bindTexture(gl.TEXTURE_2D, field);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, view.cols, view.rows, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, field, 0);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    };

    const toUv = (x, y) => {
      const aspect = view.width / view.height;
      return [(x / view.width - 0.5) * aspect, -(y / view.height - 0.5)];
    };

    const render = () => {
      const s = settings;
      const expected = Math.max(1, Math.round(s.pixelSize * view.ratio));
      if (expected !== view.cell) allocate();

      let trailCount = 0;
      for (let i = 0; i < trailPoints.length && trailCount < MAX_TRAIL; i++) {
        const point = trailPoints[i];
        if (point.weight <= 0.01) continue;
        trailData.set([point.x, point.y, point.weight], trailCount * 3);
        trailCount++;
      }
      let rippleCount = 0;
      for (let i = ripples.length - 1; i >= 0 && rippleCount < MAX_RIPPLES; i--) {
        rippleData.set([ripples[i].x, ripples[i].y, ripples[i].age, 1], rippleCount * 4);
        rippleCount++;
      }

      const eased = s.intro && !reduce ? state.reveal * state.reveal * (3 - 2 * state.reveal) : 1;

      gl.bindVertexArray(vao);
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.viewport(0, 0, view.cols, view.rows);
      gl.useProgram(wave.program);
      const w = wave.uniforms;
      gl.uniform2f(w.uResolution, canvas.width / view.ratio, canvas.height / view.ratio);
      gl.uniform1f(w.uCell, view.cellCss);
      gl.uniform1f(w.uTime, state.time);
      gl.uniform1f(w.uWaveSpeed, s.waveSpeed);
      gl.uniform1f(w.uWaveFrequency, s.waveFrequency);
      gl.uniform1f(w.uWaveAmplitude, s.waveAmplitude);
      gl.uniform1f(w.uScale, s.scale);
      gl.uniform1f(w.uContrast, s.contrast);
      gl.uniform1f(w.uBrightness, s.brightness);
      gl.uniform1i(w.uEffect, s.effect);
      gl.uniform1f(w.uRadius, s.mouseRadius);
      gl.uniform1f(w.uStrength, s.mouseStrength);
      gl.uniform3fv(w.uTrail, trailData);
      gl.uniform1i(w.uTrailCount, trailCount);
      gl.uniform4fv(w.uRipples, rippleData);
      gl.uniform1i(w.uRippleCount, rippleCount);
      gl.uniform1f(w.uIntro, eased);
      gl.uniform1f(w.uReach, 0.5 * Math.hypot(view.width / view.height, 1) + 0.45);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(dither.program);
      const d = dither.uniforms;
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, field);
      gl.uniform1i(d.uField, 0);
      gl.uniform2i(d.uFieldSize, view.cols, view.rows);
      gl.uniform1f(d.uCellDevice, view.cell);
      gl.uniform1i(d.uMode, s.mode);
      gl.uniform1f(d.uColorNum, s.colorNum);
      gl.uniform3fv(d.uWave, toColor(s.waveColor));
      const transparent = s.backgroundColor === 'transparent';
      gl.uniform3fv(d.uBackground, transparent ? [0, 0, 0] : toColor(s.backgroundColor));
      gl.uniform1f(d.uTransparent, transparent ? 1 : 0);
      s.palette.forEach((value, index) => paletteData.set(toColor(value), index * 3));
      gl.uniform3fv(d.uPalette, paletteData);
      gl.uniform1i(d.uPaletteCount, s.palette.length);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const frame = now => {
      raf = 0;
      if (!visible || document.hidden) return;
      const s = settings;
      const dt = last ? clamp((now - last) / 1000, 0.0005, 0.05) : 1 / 60;
      last = now;
      if (!s.disableAnimation && !reduce) state.time += dt;

      const engaged = s.enableMouseInteraction && pointer.inside && !reduce;
      state.presence += ((engaged ? 1 : 0) - state.presence) * (1 - Math.exp(-dt / (engaged ? 0.12 : 0.35)));
      if (pointer.set) {
        const [tx, ty] = toUv(pointer.x, pointer.y);
        const follow = 1 - Math.exp(-dt / 0.06);
        const moved = Math.hypot(tx - state.hx, ty - state.hy);
        state.hx += (tx - state.hx) * follow;
        state.hy += (ty - state.hy) * follow;
        const decay = Math.exp(-dt / (0.08 + s.trail * 0.7));
        trailPoints.forEach(point => {
          point.weight *= decay;
        });
        const head = trailPoints[0];
        if (!head || Math.hypot(head.x - state.hx, head.y - state.hy) > 0.012 || moved > 0.012) {
          trailPoints.unshift({ x: state.hx, y: state.hy, weight: state.presence });
        } else {
          head.x = state.hx;
          head.y = state.hy;
          head.weight = state.presence;
        }
        if (s.trail <= 0.001) trailPoints.length = Math.min(trailPoints.length, 1);
        while (
          trailPoints.length > MAX_TRAIL ||
          (trailPoints.length > 1 && trailPoints[trailPoints.length - 1].weight < 0.01)
        ) {
          trailPoints.pop();
        }
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].age += dt;
        if (ripples[i].age >= RIPPLE_SECONDS) ripples.splice(i, 1);
      }

      if (!s.intro || reduce) state.reveal = 1;
      else if (state.reveal < 1) state.reveal = Math.min(1, state.reveal + dt / INTRO_SECONDS);

      render();
      const busy =
        !s.disableAnimation ||
        state.reveal < 1 ||
        ripples.length > 0 ||
        state.presence > 0.002 ||
        trailPoints.some(point => point.weight > 0.01);
      if (busy && !reduce) raf = requestAnimationFrame(frame);
      else last = 0;
    };

    const wake = () => {
      if (!raf && visible && !document.hidden) raf = requestAnimationFrame(frame);
    };

    const resize = () => {
      const s = settings;
      const width = Math.max(1, container.clientWidth);
      const height = Math.max(1, container.clientHeight);
      const ratio = Math.min(s.dpr || window.devicePixelRatio || 1, 2);
      view.width = width;
      view.height = height;
      canvas.width = Math.max(1, Math.round(width * ratio));
      canvas.height = Math.max(1, Math.round(height * ratio));
      view.ratio = canvas.width / width;
      allocate();
      render();
      wake();
    };

    const locate = event => {
      const rect = container.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.inside = pointer.x >= 0 && pointer.y >= 0 && pointer.x <= rect.width && pointer.y <= rect.height;
      if (pointer.inside && !pointer.set) {
        const [x, y] = toUv(pointer.x, pointer.y);
        state.hx = x;
        state.hy = y;
        pointer.set = true;
      }
    };

    const onPointerMove = event => {
      locate(event);
      wake();
    };

    const onPointerDown = event => {
      const s = settings;
      locate(event);
      if (!pointer.inside || !s.clickRipple || reduce) return;
      const [x, y] = toUv(pointer.x, pointer.y);
      ripples.push({ x, y, age: 0 });
      if (ripples.length > MAX_RIPPLES) ripples.shift();
      wake();
    };

    const onPointerUp = event => {
      if (event.pointerType !== 'mouse') pointer.inside = false;
    };

    const onPointerLeave = () => {
      pointer.inside = false;
    };

    const onVisibility = () => {
      last = 0;
      wake();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    const intersection = new IntersectionObserver(entries => {
      visible = entries.some(entry => entry.isIntersecting);
      if (visible) {
        last = 0;
        wake();
      }
    });
    intersection.observe(container);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    window.addEventListener('pointercancel', onPointerUp, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPointerLeave);
    document.addEventListener('visibilitychange', onVisibility);
    resize();
  };
  initHeroDither();

  // 12. React Bits <LiquidChrome /> Component Integration
  const initLiquidChrome = () => {
    const container = document.getElementById('work-liquid-chrome') || document.querySelector('.liquid-chrome');
    if (!container) return;
    const canvas = container.querySelector('.liquid-chrome__canvas') || container.querySelector('canvas');
    if (!canvas) return;

    const PIXEL_BUDGET = 2.4e6;
    const SIM_CELL = 4;
    const SIM_STEP = 1 / 120;

    const VERTEX = `#version 300 es
const vec2 corners[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
void main() {
  gl_Position = vec4(corners[gl_VertexID], 0.0, 1.0);
}`;

    const SIM = `#version 300 es
precision highp float;
uniform sampler2D uState;
uniform vec2 uSize;
uniform vec4 uStroke;
uniform vec2 uImpulse;
out vec4 fragColor;

float segment(vec2 p, vec2 a, vec2 b) {
  vec2 ab = b - a;
  float t = clamp(dot(p - a, ab) / max(dot(ab, ab), 1e-4), 0.0, 1.0);
  return length(p - a - ab * t);
}

void main() {
  vec2 texel = 1.0 / uSize;
  vec2 uv = gl_FragCoord.xy * texel;
  vec2 state = texture(uState, uv).rg;
  vec2 around =
    texture(uState, uv - vec2(texel.x, 0.0)).rg +
    texture(uState, uv + vec2(texel.x, 0.0)).rg +
    texture(uState, uv - vec2(0.0, texel.y)).rg +
    texture(uState, uv + vec2(0.0, texel.y)).rg -
    4.0 * state;
  float next = state.r + (state.r - state.g) * 0.982 + 0.3 * around.r + 0.08 * (around.r - around.g);
  next *= 0.998;
  if (uImpulse.x != 0.0) {
    float d = segment(gl_FragCoord.xy, uStroke.xy, uStroke.zw) / uImpulse.y;
    next += uImpulse.x * exp(-d * d);
  }
  fragColor = vec4(next, state.r, 0.0, 1.0);
}`;

    const SLOPE = `#version 300 es
precision highp float;
uniform sampler2D uState;
uniform vec2 uSize;
out vec4 fragColor;

void main() {
  vec2 texel = 1.0 / uSize;
  vec2 uv = gl_FragCoord.xy * texel;
  float left = texture(uState, uv - vec2(texel.x, 0.0)).r;
  float right = texture(uState, uv + vec2(texel.x, 0.0)).r;
  float down = texture(uState, uv - vec2(0.0, texel.y)).r;
  float up = texture(uState, uv + vec2(0.0, texel.y)).r;
  fragColor = vec4((right - left) * 0.5, (up - down) * 0.5, 0.0, 1.0);
}`;

    const CHROME = `#version 300 es
precision highp float;
uniform vec2 uResolution;
uniform float uUnit;
uniform float uTime;
uniform float uAmplitude;
uniform vec2 uFrequency;
uniform float uDetail;
uniform float uSharpness;
uniform float uDepth;
uniform float uPresence;
uniform vec3 uTint;
uniform vec2 uShift;
uniform float uRoughness;
uniform float uExposure;
uniform float uLight;
uniform sampler2D uSlope;
uniform vec2 uSlopeSize;
uniform float uRipple;
out vec4 fragColor;

vec2 slopeAt(vec2 uv) {
  vec2 st = uv * uSlopeSize - 0.5;
  vec2 i = floor(st);
  vec2 f = st - i;
  vec2 f2 = f * f;
  vec2 f3 = f2 * f;
  vec2 w0 = (-f3 + 3.0 * f2 - 3.0 * f + 1.0) / 6.0;
  vec2 w1 = (3.0 * f3 - 6.0 * f2 + 4.0) / 6.0;
  vec2 w2 = (-3.0 * f3 + 3.0 * f2 + 3.0 * f + 1.0) / 6.0;
  vec2 w3 = f3 / 6.0;
  vec2 g0 = w0 + w1;
  vec2 g1 = w2 + w3;
  vec2 h0 = (i - 0.5 + w1 / g0) / uSlopeSize;
  vec2 h1 = (i + 1.5 + w3 / g1) / uSlopeSize;
  vec2 a = texture(uSlope, vec2(h0.x, h0.y)).rg;
  vec2 b = texture(uSlope, vec2(h1.x, h0.y)).rg;
  vec2 c = texture(uSlope, vec2(h0.x, h1.y)).rg;
  vec2 d = texture(uSlope, vec2(h1.x, h1.y)).rg;
  return g0.y * (g0.x * a + g1.x * b) + g1.y * (g0.x * c + g1.x * d);
}

float lamp(vec2 p, vec2 center, vec2 size, float soft) {
  vec2 grown = size + soft;
  vec2 q = (p - center) / grown;
  q *= q;
  float d = sqrt(sqrt(dot(q, q)));
  float edge = soft / min(grown.x, grown.y);
  float shape = (1.0 - smoothstep(1.0 - edge, 1.0 + edge, d)) * (1.0 - 0.45 * d * d);
  return shape * size.x * size.y / (grown.x * grown.y);
}

vec3 studio(vec3 r, float blur) {
  vec2 p = r.xy / max(r.z + 1.0, 0.05);
  p += uShift * smoothstep(0.3, 1.0, length(p));
  float radius = length(p);
  float soft = 0.008 + blur;
  vec2 dir = p / max(radius, 1e-3);
  float key = lamp(p, vec2(-0.25, 0.42), vec2(0.3, 0.12), soft);
  float side = lamp(p, vec2(0.48, 0.12), vec2(0.06, 0.3), soft);
  float ground = lamp(p, vec2(-0.1, -0.55), vec2(0.45, 0.06), soft);
  float rise = smoothstep(-1.0, 1.0, dir.y);
  if (uLight > 0.5) {
    float edge = 0.008 + blur * 0.8;
    float lobe = smoothstep(0.15, 0.85, 0.5 + 0.5 * sin(atan(dir.y, dir.x) * 2.0 + 0.9));
    float tone = mix(2.4, 0.95, smoothstep(0.5 - edge, 1.0 + edge, radius));
    tone = mix(tone, 0.02, smoothstep(0.98 - edge, 1.12 + edge, radius));
    tone = mix(tone, mix(0.03, 0.3, lobe) * (0.8 + 0.4 * rise), smoothstep(1.15 - edge, 1.3 + edge, radius));
    float width = 0.035 + edge;
    tone += 2.4 * exp(-pow((radius - 1.4) / width, 2.0)) * min(1.0, 0.06 / width) * (0.6 + 0.4 * rise);
    return vec3(tone) * (1.0 - 0.5 * side) * (1.0 - 0.3 * ground) + 0.8 * key;
  }
  float width = 0.015 + soft * 2.0;
  float rim = exp(-abs(radius - 1.0) / width) * 0.031 / width * (0.8 + smoothstep(-0.5, 0.8, p.y));
  float band = 1.0 - 0.95 * smoothstep(1.04 - soft, 1.12 + soft, radius);
  float wall = smoothstep(1.25, 1.55, radius) * (0.6 + 0.4 * rise);
  float streak = smoothstep(0.2, 0.8, 0.5 + 0.5 * sin(atan(dir.y, dir.x) * 3.0 + 0.6));
  vec3 color = vec3(0.004, 0.004, 0.005) + 0.02 * smoothstep(-0.4, 0.6, p.y);
  color += vec3(1.0, 0.97, 0.94) * key * 4.0 + vec3(0.9, 0.95, 1.0) * side * 3.0 + ground * 1.2;
  color += vec3(1.0, 0.98, 0.95) * rim;
  color *= band;
  return color + vec3(mix(0.45, 1.8, streak)) * wall;
}

vec3 shade(vec2 slope, vec3 v, float blur, vec3 f0) {
  float steep = length(slope);
  slope *= 3.0 * tanh(steep / 3.0) / max(steep, 1e-6);
  vec3 n = normalize(vec3(-slope, 1.0));
  vec3 r = reflect(v, n);
  float facing = clamp(dot(n, -v), 0.0, 1.0);
  return studio(r, blur) * (f0 + (1.0 - f0) * pow(1.0 - facing, 5.0));
}

vec3 aces(vec3 x) {
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  vec2 uv = (2.0 * frag - uResolution) / uUnit;
  vec2 p = uv;
  vec2 rowX = vec2(1.0, 0.0);
  vec2 rowY = vec2(0.0, 1.0);
  float amplitude = uAmplitude * uPresence;
  for (float i = 1.0; i < 9.0; i++) {
    if (i > uDetail) break;
    float a = amplitude / i;
    float soften = exp(0.3 - 0.3 * i);
    float argX = i * uFrequency.x * p.y + uTime;
    p.x += a * cos(argX);
    rowX -= a * sin(argX) * i * uFrequency.x * soften * rowY;
    float argY = i * uFrequency.y * p.x + uTime;
    p.y += a * cos(argY);
    rowY -= a * sin(argY) * i * uFrequency.y * soften * rowX;
  }
  float phase = uTime - p.x - p.y;
  vec2 field = -(rowX + rowY);
  float density = max(length(field), 1e-3);
  vec2 across = field / density;
  float k = uSharpness;
  float sn = sin(phase);
  float cs = cos(phase);
  float th = tanh(k * sn);
  float bevel = (1.0 - th * th) / tanh(k);
  float fade = smoothstep(3.0, 9.0, 3.14159 * uUnit / density);
  float weight = uDepth * uPresence * fade;
  vec2 slope = k * cs * bevel * weight * across + slopeAt(frag / uResolution) * uRipple;
  vec2 sweep = -k * bevel * (sn + 2.0 * k * cs * cs * th) * weight * density * 2.0 / uUnit * across;
  vec2 stepX = dFdx(slope);
  vec2 stepY = dFdy(slope);
  vec2 crease = dot(stepX, stepX) > dot(stepY, stepY) ? stepX : stepY;
  if (dot(crease, crease) > dot(sweep, sweep)) sweep = crease;
  float bend = length(sweep);
  float alpha = smoothstep(0.0, 0.1, length(slope));
  vec3 f0 = mix(vec3(1.0), uTint, smoothstep(0.05, 0.6, length(slope))) * 0.92;
  vec3 v = normalize(vec3(uv * 0.08, -1.0));
  float blur = uRoughness * 0.35;
  vec3 light;
  if (bend < 0.01) {
    light = shade(slope, v, blur + bend * 0.5, f0);
  } else {
    light = vec3(0.0);
    for (float t = -0.375; t < 0.4; t += 0.25) {
      light += shade(slope + sweep * t, v, blur + bend * 0.15, f0);
    }
    light *= 0.25;
  }
  vec3 color = pow(aces(light * uExposure), vec3(1.0 / 2.2));
  float grain = fract(52.9829189 * fract(dot(frag, vec2(0.06711056, 0.00583715))));
  color += (grain - 0.5) / 255.0;
  fragColor = vec4(clamp(color, 0.0, 1.0) * alpha, alpha);
}`;

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    const parseColor = value => {
      if (Array.isArray(value)) return [0, 1, 2].map(index => clamp(Number(value[index]) || 0, 0, 1));
      const text = String(value || '').trim();
      const hex = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(text);
      if (hex) {
        const full = hex[1].length === 3 ? hex[1].replace(/./g, digit => digit + digit) : hex[1];
        return [0, 2, 4].map(index => parseInt(full.slice(index, index + 2), 16) / 255);
      }
      const rgb = /^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)/i.exec(text);
      if (rgb) return [rgb[1], rgb[2], rgb[3]].map(channel => clamp(parseFloat(channel) / 255, 0, 1));
      return [1, 1, 1];
    };

    const compile = (gl, type, source) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const link = (gl, fragmentSource) => {
      const vertex = compile(gl, gl.VERTEX_SHADER, VERTEX);
      const fragment = compile(gl, gl.FRAGMENT_SHADER, fragmentSource);
      const program = vertex && fragment ? gl.createProgram() : null;
      if (!vertex || !fragment || !program) {
        if (vertex) gl.deleteShader(vertex);
        if (fragment) gl.deleteShader(fragment);
        return null;
      }
      gl.attachShader(program, vertex);
      gl.attachShader(program, fragment);
      gl.linkProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return null;
      }
      const uniforms = {};
      const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
      for (let index = 0; index < count; index++) {
        const info = gl.getActiveUniform(program, index);
        if (info) uniforms[info.name] = gl.getUniformLocation(program, info.name);
      }
      return { program, uniforms };
    };

    const rawColor = container.getAttribute('data-color') || '#ffffff';
    const settings = {
      tint: parseColor(rawColor).map(channel => Math.pow(channel, 2.2)),
      speed: Math.max(0, parseFloat(container.getAttribute('data-speed') || '0.2')),
      amplitude: clamp(parseFloat(container.getAttribute('data-amplitude') || '0.3'), 0, 2),
      frequency: [
        Math.max(0.1, parseFloat(container.getAttribute('data-frequency-x') || '3')),
        Math.max(0.1, parseFloat(container.getAttribute('data-frequency-y') || '3'))
      ],
      detail: clamp(Math.round(parseFloat(container.getAttribute('data-detail') || '4')), 1, 8),
      thickness: clamp(parseFloat(container.getAttribute('data-thickness') || '1'), 0.25, 4),
      depth: Math.max(0, parseFloat(container.getAttribute('data-depth') || '1')),
      roughness: clamp(parseFloat(container.getAttribute('data-roughness') || '0.3'), 0, 1),
      exposure: Math.max(0, parseFloat(container.getAttribute('data-exposure') || '1')),
      interactive: container.getAttribute('data-interactive') !== 'false',
      rippleStrength: Math.max(0, parseFloat(container.getAttribute('data-ripple-strength') || '1')),
      rippleSize: clamp(parseFloat(container.getAttribute('data-ripple-size') || '1'), 0.2, 4),
      tilt: Math.max(0, parseFloat(container.getAttribute('data-tilt') || '1')),
      intro: container.getAttribute('data-intro') !== 'false',
      light: container.getAttribute('data-light-mode') === 'true',
      maxRatio: clamp(parseFloat(container.getAttribute('data-max-dpr') || '2'), 0.5, 3)
    };

    const gl = canvas.getContext('webgl2', {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: 'high-performance'
    });
    const chrome = gl ? link(gl, CHROME) : null;
    if (!gl || !chrome) return;
    const fluid = Boolean(gl.getExtension('EXT_color_buffer_float'));
    const sim = fluid ? link(gl, SIM) : null;
    const slope = fluid ? link(gl, SLOPE) : null;

    const vao = gl.createVertexArray();
    const grid = { width: 1, height: 1 };
    const targets = [];
    let slopeTarget = null;
    let current = 0;
    let unit = 1;
    const pointer = { x: 0, y: 0, inside: false, ready: false, nx: 0, ny: 0 };
    const view = { yaw: 0, pitch: 0, vyaw: 0, vpitch: 0 };
    const strokes = [];
    let time = Math.random() * 40;
    let presence = settings.intro ? 0 : 1;
    let energy = 0;
    let accumulator = 0;
    let raf = 0;
    let last = 0;
    let visible = true;
    let pageVisible = document.visibilityState !== 'hidden';
    let lost = false;

    const makeTarget = (w, h) => {
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RG16F, w, h, 0, gl.RG, gl.HALF_FLOAT, null);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      const framebuffer = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      return { texture, framebuffer };
    };

    const dropTarget = target => {
      if (!target) return;
      gl.deleteTexture(target.texture);
      gl.deleteFramebuffer(target.framebuffer);
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const cssWidth = Math.max(1, rect.width);
      const cssHeight = Math.max(1, rect.height);
      const ratio = Math.min(
        window.devicePixelRatio || 1,
        settings.maxRatio,
        Math.sqrt(PIXEL_BUDGET / (cssWidth * cssHeight))
      );
      const width = Math.max(1, Math.round(cssWidth * ratio));
      const height = Math.max(1, Math.round(cssHeight * ratio));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      unit = Math.min(width, height);
      if (!fluid || !sim || !slope) return;
      const gridWidth = clamp(Math.round(cssWidth / SIM_CELL), 16, 512);
      const gridHeight = clamp(Math.round(cssHeight / SIM_CELL), 16, 512);
      if (gridWidth === grid.width && gridHeight === grid.height && targets.length) return;
      targets.forEach(dropTarget);
      targets.length = 0;
      dropTarget(slopeTarget);
      Object.assign(grid, { width: gridWidth, height: gridHeight });
      targets.push(makeTarget(gridWidth, gridHeight), makeTarget(gridWidth, gridHeight));
      slopeTarget = makeTarget(gridWidth, gridHeight);
    };

    const simulate = steps => {
      if (!sim || !slope || !slopeTarget) return;
      gl.useProgram(sim.program);
      gl.viewport(0, 0, grid.width, grid.height);
      gl.uniform2f(sim.uniforms.uSize, grid.width, grid.height);
      gl.activeTexture(gl.TEXTURE0);
      gl.uniform1i(sim.uniforms.uState, 0);
      for (let step = 0; step < steps; step++) {
        const stroke = step === 0 ? strokes.shift() : null;
        if (stroke) {
          gl.uniform4f(sim.uniforms.uStroke, stroke.ax, stroke.ay, stroke.bx, stroke.by);
          gl.uniform2f(sim.uniforms.uImpulse, stroke.strength, stroke.radius);
        } else {
          gl.uniform2f(sim.uniforms.uImpulse, 0, 1);
        }
        const source = targets[current];
        const destination = targets[1 - current];
        gl.bindTexture(gl.TEXTURE_2D, source.texture);
        gl.bindFramebuffer(gl.FRAMEBUFFER, destination.framebuffer);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        current = 1 - current;
      }
      gl.useProgram(slope.program);
      gl.uniform2f(slope.uniforms.uSize, grid.width, grid.height);
      gl.uniform1i(slope.uniforms.uState, 0);
      gl.bindTexture(gl.TEXTURE_2D, targets[current].texture);
      gl.bindFramebuffer(gl.FRAMEBUFFER, slopeTarget.framebuffer);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const render = s => {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, canvas.width, canvas.height);
      const u = chrome.uniforms;
      gl.useProgram(chrome.program);
      gl.uniform2f(u.uResolution, canvas.width, canvas.height);
      gl.uniform1f(u.uUnit, unit);
      gl.uniform1f(u.uTime, time);
      gl.uniform1f(u.uAmplitude, s.amplitude);
      gl.uniform2f(u.uFrequency, s.frequency[0], s.frequency[1]);
      gl.uniform1f(u.uDepth, s.depth);
      gl.uniform1f(u.uDetail, s.detail);
      gl.uniform1f(u.uSharpness, 5 / (3 * s.thickness));
      gl.uniform1f(u.uPresence, 1 - Math.pow(1 - presence, 3));
      gl.uniform3fv(u.uTint, s.tint);
      gl.uniform2f(u.uShift, view.yaw, view.pitch);
      gl.uniform1f(u.uRoughness, s.roughness);
      gl.uniform1f(u.uExposure, s.exposure);
      gl.uniform1f(u.uLight, s.light ? 1 : 0);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, slopeTarget ? slopeTarget.texture : null);
      gl.uniform1i(u.uSlope, 0);
      gl.uniform2f(u.uSlopeSize, grid.width, grid.height);
      gl.uniform1f(u.uRipple, slopeTarget ? s.rippleStrength * 2.2 : 0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const frame = now => {
      raf = 0;
      if (lost) return;
      const s = settings;
      const dt = clamp((now - last) / 1000 || 0, 0, 0.05);
      last = Math.max(last, now);
      time += dt * s.speed;
      presence = Math.min(1, presence + dt / 1.8);

      const hovering = s.interactive && pointer.inside;
      const reach = s.tilt;
      const targetYaw = (hovering ? pointer.nx * 0.35 : 0.22 * Math.sin(time * 1.3)) * reach;
      const targetPitch = (hovering ? -pointer.ny * 0.28 : 0.16 * Math.sin(time * 0.9 + 1.7)) * reach;
      const stiffness = 36;
      const damping = 2 * Math.sqrt(stiffness) * 0.95;
      view.vyaw += ((targetYaw - view.yaw) * stiffness - view.vyaw * damping) * dt;
      view.vpitch += ((targetPitch - view.pitch) * stiffness - view.vpitch * damping) * dt;
      view.yaw += view.vyaw * dt;
      view.pitch += view.vpitch * dt;

      gl.bindVertexArray(vao);
      if (slopeTarget) {
        accumulator += dt;
        const steps = Math.min(4, Math.floor(accumulator / SIM_STEP));
        accumulator -= steps * SIM_STEP;
        if (steps > 0) {
          simulate(steps);
          energy = Math.max(0, energy * Math.pow(0.982, steps));
        }
      }
      render(s);

      const settling =
        Math.abs(view.vyaw) + Math.abs(view.vpitch) > 1e-4 ||
        Math.abs(targetYaw - view.yaw) + Math.abs(targetPitch - view.pitch) > 1e-4;
      const busy = s.speed > 0 || presence < 1 || settling || energy > 0.002 || strokes.length > 0;
      if (busy && visible && pageVisible) raf = requestAnimationFrame(frame);
    };

    const wake = () => {
      if (raf || lost || !visible || !pageVisible) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const toGrid = (clientX, clientY) => {
      const rect = container.getBoundingClientRect();
      return {
        x: ((clientX - rect.left) / rect.width) * grid.width,
        y: (1 - (clientY - rect.top) / rect.height) * grid.height,
        nx: ((clientX - rect.left) / rect.width) * 2 - 1,
        ny: ((clientY - rect.top) / rect.height) * 2 - 1,
        inside: clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom
      };
    };

    const push = (stroke, s) => {
      if (!slopeTarget || !s.interactive) return;
      strokes.push(stroke);
      if (strokes.length > 6) strokes.shift();
      energy = 1;
    };

    const onPointerMove = event => {
      const s = settings;
      const spot = toGrid(event.clientX, event.clientY);
      pointer.nx = clamp(spot.nx, -1, 1);
      pointer.ny = clamp(spot.ny, -1, 1);
      pointer.inside = spot.inside;
      if (spot.inside && pointer.ready) {
        const travel = Math.hypot(spot.x - pointer.x, spot.y - pointer.y);
        if (travel > 0.25) {
          push(
            {
              ax: pointer.x,
              ay: pointer.y,
              bx: spot.x,
              by: spot.y,
              strength: -Math.min(0.45, 0.04 + travel * 0.045) * s.rippleSize,
              radius: 4 * s.rippleSize
            },
            s
          );
        }
      }
      pointer.x = spot.x;
      pointer.y = spot.y;
      pointer.ready = spot.inside;
      wake();
    };

    const onPointerDown = event => {
      const s = settings;
      const spot = toGrid(event.clientX, event.clientY);
      if (!spot.inside) return;
      push(
        { ax: spot.x, ay: spot.y, bx: spot.x, by: spot.y, strength: -1.6 * s.rippleSize, radius: 6 * s.rippleSize },
        s
      );
      wake();
    };

    const onLeave = () => {
      pointer.inside = false;
      pointer.ready = false;
      wake();
    };

    const onPointerUp = event => {
      if (event.pointerType !== 'mouse') onLeave();
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });
    window.addEventListener('pointerup', onPointerUp, { passive: true });
    window.addEventListener('pointercancel', onPointerUp, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeave);

    const onLost = event => {
      event.preventDefault();
      lost = true;
      cancelAnimationFrame(raf);
      raf = 0;
    };
    canvas.addEventListener('webglcontextlost', onLost);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      wake();
    });
    resizeObserver.observe(container);

    const intersection = new IntersectionObserver(entries => {
      visible = entries.some(entry => entry.isIntersecting);
      wake();
    });
    intersection.observe(container);

    const onVisibility = () => {
      pageVisible = document.visibilityState !== 'hidden';
      wake();
    };
    document.addEventListener('visibilitychange', onVisibility);

    resize();
    wake();
  };
  initLiquidChrome();

  // 13. React Bits <AnimatedContent /> (GSAP + ScrollTrigger)
  const ensureAnimatedContentAttributes = () => {
    const autoTargets = [
      { selector: '#hero > div:first-of-type', distance: 60, duration: 0.8, trigger: 'mount' },
      { selector: '#hero > div:nth-of-type(2)', distance: 80, duration: 0.85, delay: 0.12, stagger: 0.1, trigger: 'mount' },
      { selector: '#about > div.relative.z-10', distance: 100, duration: 0.8, stagger: 0.08, threshold: 0.1 },
      { selector: '#work > div:first-of-type', distance: 80, duration: 0.8, threshold: 0.1 },
      { selector: '#work [aria-label="Work showcase images"]', distance: 100, duration: 0.8, stagger: 0.06, threshold: 0.1 },
      { selector: '#work-list', distance: 80, duration: 0.8, stagger: 0.08, threshold: 0.1 },
      { selector: '.waves-banner-section', distance: 80, duration: 0.8, threshold: 0.1 },
      { selector: '#experience-heading', distance: 80, duration: 0.8, threshold: 0.1 },
      { selector: '#experience [role="list"]', distance: 100, duration: 0.8, stagger: 0.08, threshold: 0.1 },
      { selector: '#qualifications-heading', distance: 80, duration: 0.8, threshold: 0.1 },
      { selector: '#qualifications > .grid > div:first-child', distance: 100, duration: 0.8, stagger: 0.08, threshold: 0.1 },
      { selector: '#qualifications > .grid > div:last-child', distance: 100, duration: 0.8, stagger: 0.1, threshold: 0.1 },
      { selector: '#contact-heading', distance: 80, duration: 0.8, threshold: 0.1 },
      { selector: '#contact > .grid', distance: 100, duration: 0.8, stagger: 0.12, threshold: 0.1 },
      { selector: 'footer[role="contentinfo"] > div:nth-of-type(2)', distance: 60, duration: 0.8, stagger: 0.08, threshold: 0.1 },
      { selector: 'footer[role="contentinfo"] > div:nth-of-type(3)', distance: 80, duration: 0.9, threshold: 0.05 }
    ];

    autoTargets.forEach((cfg) => {
      const el = document.querySelector(cfg.selector);
      if (el && !el.hasAttribute('data-animated-content')) {
        el.setAttribute('data-animated-content', '');
        if (cfg.distance !== undefined) el.dataset.distance = String(cfg.distance);
        if (cfg.duration !== undefined) el.dataset.duration = String(cfg.duration);
        if (cfg.delay !== undefined) el.dataset.delay = String(cfg.delay);
        if (cfg.stagger !== undefined) el.dataset.stagger = String(cfg.stagger);
        if (cfg.threshold !== undefined) el.dataset.threshold = String(cfg.threshold);
        if (cfg.trigger !== undefined) el.dataset.trigger = cfg.trigger;
      }
    });
  };

  const loadScript = (src) =>
    new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });

  const initAnimatedContent = async () => {
    try {
      if (typeof gsap === 'undefined') {
        await loadScript('/assets/js/gsap.min.js');
      }
      if (typeof ScrollTrigger === 'undefined') {
        await loadScript('/assets/js/ScrollTrigger.min.js');
      }
    } catch (e) {
      return;
    }

    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    if (lenisInstance && !lenisInstance.__gsapSynced) {
      lenisInstance.__gsapSynced = true;
      lenisInstance.on('scroll', ScrollTrigger.update);
    }

    ensureAnimatedContentAttributes();

    const WIPES = {
      up: ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'],
      down: ['inset(0% 0% 100% 0%)', 'inset(0% 0% 0% 0%)'],
      left: ['inset(0% 0% 0% 100%)', 'inset(0% 0% 0% 0%)'],
      right: ['inset(0% 100% 0% 0%)', 'inset(0% 0% 0% 0%)']
    };

    const elements = document.querySelectorAll('[data-animated-content]');
    elements.forEach((el) => {
      if (el.dataset.acInitialized === 'true') return;
      el.dataset.acInitialized = 'true';

      const distance = el.dataset.distance !== undefined ? parseFloat(el.dataset.distance) : 100;
      const direction = el.dataset.direction || 'vertical';
      const reverse = el.dataset.reverse === 'true';
      const duration = el.dataset.duration !== undefined ? parseFloat(el.dataset.duration) : 0.8;
      const ease = el.dataset.ease || 'power3.out';
      const initialOpacity = el.dataset.initialOpacity !== undefined ? parseFloat(el.dataset.initialOpacity) : 0;
      const animateOpacity = el.dataset.animateOpacity !== 'false';
      const scale = el.dataset.scale !== undefined ? parseFloat(el.dataset.scale) : 1;
      const blur = el.dataset.blur !== undefined ? parseFloat(el.dataset.blur) : 0;
      const rotate = el.dataset.rotate !== undefined ? parseFloat(el.dataset.rotate) : 0;
      const tilt = el.dataset.tilt !== undefined ? parseFloat(el.dataset.tilt) : 0;
      const wipe = el.dataset.wipe || undefined;
      const threshold = el.dataset.threshold !== undefined ? parseFloat(el.dataset.threshold) : 0.1;
      const delay = el.dataset.delay !== undefined ? parseFloat(el.dataset.delay) : 0;
      const stagger = el.dataset.stagger !== undefined ? parseFloat(el.dataset.stagger) : 0;
      const staggerFrom = el.dataset.staggerFrom || 'start';
      const trigger = el.dataset.trigger || 'scroll';
      const once = el.dataset.once !== 'false';
      const scrub = el.dataset.scrub === 'true' ? true : (el.dataset.scrub !== undefined ? parseFloat(el.dataset.scrub) : false);
      const disappearAfter = el.dataset.disappearAfter !== undefined ? parseFloat(el.dataset.disappearAfter) : 0;
      const disappearDuration = el.dataset.disappearDuration !== undefined ? parseFloat(el.dataset.disappearDuration) : 0.5;
      const disappearEase = el.dataset.disappearEase || 'power3.in';

      const visibleChildren = Array.from(el.children).filter(
        (child) => !child.classList.contains('sr-only') && !child.classList.contains('work-more-collapse')
      );
      const targets = stagger > 0 && visibleChildren.length > 0 ? visibleChildren : [el];

      const axis = direction === 'horizontal' ? 'x' : 'y';
      const offset = reverse ? -distance : distance;
      const wipeClip = wipe ? WIPES[wipe] : null;
      const uses3D = tilt !== 0;

      if (uses3D) {
        gsap.set(el, { perspective: 800 });
      }

      const fromVars = {
        [axis]: offset,
        scale,
        rotation: rotate,
        opacity: animateOpacity ? initialOpacity : 1
      };
      if (uses3D) {
        fromVars.rotationX = tilt;
        fromVars.transformOrigin = '50% 100%';
      }
      if (blur > 0) fromVars.filter = `blur(${blur}px)`;
      if (wipeClip) fromVars.clipPath = wipeClip[0];

      gsap.set(targets, fromVars);
      gsap.set(el, { visibility: 'visible' });

      const toVars = {
        [axis]: 0,
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration,
        ease,
        overwrite: 'auto'
      };
      if (uses3D) toVars.rotationX = 0;
      if (blur > 0) toVars.filter = 'blur(0px)';
      if (wipeClip) toVars.clipPath = wipeClip[1];
      if (targets.length > 1) {
        toVars.stagger = { each: stagger, from: staggerFrom };
      }

      const tl = gsap.timeline({
        paused: true,
        delay: scrub ? 0 : delay,
        onComplete: () => {
          if (blur > 0) gsap.set(targets, { clearProps: 'filter' });
          if (wipeClip) gsap.set(targets, { clearProps: 'clipPath' });

          if (disappearAfter > 0 && !scrub) {
            const outVars = {
              [axis]: reverse ? distance : -distance,
              scale: 0.8,
              opacity: animateOpacity ? initialOpacity : 0,
              duration: disappearDuration,
              ease: disappearEase
            };
            if (blur > 0) outVars.filter = `blur(${blur}px)`;
            if (targets.length > 1) {
              outVars.stagger = { each: stagger, from: staggerFrom };
            }
            gsap.to(targets, { ...outVars, delay: disappearAfter });
          }
        }
      });

      tl.to(targets, toVars);

      if (scrub) {
        const startPct = (1 - threshold) * 100;
        ScrollTrigger.create({
          trigger: el,
          start: `top ${startPct}%`,
          end: `top ${Math.max(10, startPct - 50)}%`,
          scrub: typeof scrub === 'number' ? scrub : 0.6,
          animation: tl
        });
        return;
      }

      let hasPlayed = false;
      const playAnimation = () => {
        if (hasPlayed && once) return;
        hasPlayed = true;
        tl.play();
      };

      // Observe after scroll restoration settles so only elements actually viewed play,
      // and each element plays strictly once per page load/refresh.
      requestAnimationFrame(() => {
        const observerMarginPct = Math.round(threshold * 100);
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                playAnimation();
                if (once) {
                  io.unobserve(el);
                  io.disconnect();
                }
              } else if (!once && hasPlayed) {
                tl.pause(0);
              }
            });
          },
          {
            root: null,
            rootMargin: `0px 0px -${observerMarginPct}% 0px`,
            threshold: 0.05
          }
        );
        io.observe(el);
      });
    });

    ScrollTrigger.refresh();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimatedContent);
  } else {
    initAnimatedContent();
  }
  window.addEventListener('load', () => {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  });

  // 14. React Bits <FlexCarousel /> (WebGL2 Liquid Lens Carousel for Selected Work)
  const initFlexCarousel = () => {
    const container = document.getElementById('work-flex-carousel');
    if (!container) return;

    const WORK_ITEMS = [
      {
        src: 'assets/images/project-thumbnails/pusatkos-v2.png?v=3',
        alt: 'PUSATKOS — Boarding House Discovery & Rental Management Platform',
        title: 'PUSATKOS',
        subtitle: 'Laravel 12 · PHP 8.2 · MySQL',
        href: '/work/pusatkos/'
      },
      {
        src: 'assets/images/project-thumbnails/tanggapin-v2.png?v=3',
        alt: 'Tanggapin — School Operations & Student Risk Detection Platform',
        title: 'Tanggapin',
        subtitle: 'Laravel 13 · React 19 · Inertia.js',
        href: '/work/tanggapin/'
      },
      {
        src: 'assets/images/project-thumbnails/olara-v2.png?v=3',
        alt: 'OLARA — Smart Circular Waste Management & Eco-Wellness Platform',
        title: 'OLARA',
        subtitle: 'Laravel 13 · Tailwind CSS v4 · Midtrans',
        href: '/work/olara/'
      },
      {
        src: 'assets/images/project-thumbnails/sipemma-v2.png?v=3',
        alt: 'SIPEMMA — Point of Sale & Restaurant Management with Gemini AI',
        title: 'SIPEMMA',
        subtitle: 'Laravel 13 · Google Gemini AI · MySQL',
        href: '/work/sipemma/'
      },
      {
        src: 'assets/images/project-thumbnails/nalar-v2.png?v=3',
        alt: 'Nalar — AI-Powered Personalized Learning Companion',
        title: 'Nalar',
        subtitle: 'Next.js · React 19 · TypeScript',
        href: '/work/nalar/'
      },
      {
        src: 'assets/images/project-thumbnails/vehicle-tax-v2.png?v=3',
        alt: 'Vehicle Tax — PKB & SWDKLLJ Tax Calculator Desktop Suite',
        title: 'Vehicle Tax',
        subtitle: 'Java Swing · C++ Qt Widgets',
        href: '/work/vehicle-tax/'
      }
    ];

    const BEND_PRESETS = {
      liquid: {
        lensWidth: 0.74,
        lensHeight: 1.18,
        tilt: 62,
        roundness: 1,
        bend: 0.34,
        reach: 0.38,
        curl: 'twist',
        dispersion: 0.45,
        liquid: 0,
        followCursor: false
      },
      ribbon: {
        lensWidth: 0.8,
        lensHeight: 0.8,
        tilt: 0,
        roundness: 1,
        bend: 0.34,
        reach: 0.34,
        curl: 'twist',
        dispersion: 0.4,
        liquid: 0,
        followCursor: false
      },
      vortex: {
        lensWidth: 0.7,
        lensHeight: 0.95,
        tilt: 30,
        roundness: 1,
        bend: 0.46,
        reach: 0.3,
        curl: 'twist',
        dispersion: 0.5,
        liquid: 0,
        followCursor: false
      },
      arch: {
        lensWidth: 0.8,
        lensHeight: 0.8,
        tilt: 0,
        roundness: 1,
        bend: 0.3,
        reach: 0.36,
        curl: 'rise',
        dispersion: 0.4,
        liquid: 0,
        followCursor: false
      }
    };

    const FIT_ASPECT = { portrait: 1122 / 1402, showcase: 1122 / 1402, square: 1, landscape: 4 / 3, natural: null };
    const TAPS = 12;
    const PIXEL_BUDGET = 4.5e6;
    const INTRO_DURATION = { rise: 2.1, bloom: 1.6, spin: 2.2, deal: 1.5, fade: 0.35 };

    const wrap = (value, size) => ((((value + size / 2) % size) + size) % size) - size / 2;
    const clamp01 = value => Math.min(Math.max(value, 0), 1);
    const easeOut = value => 1 - Math.pow(1 - clamp01(value), 3);
    const easeOutQuint = value => 1 - Math.pow(1 - clamp01(value), 5);
    const easeInOut = value => {
      const t = clamp01(value);
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const presetName = container.dataset.preset || 'liquid';
    const base = BEND_PRESETS[presetName] || BEND_PRESETS.liquid;
    const settings = {
      intro: container.dataset.intro || 'rise',
      cardHeight: parseFloat(container.dataset.cardHeight || '0.52'),
      gap: parseFloat(container.dataset.gap || '14'),
      radius: parseFloat(container.dataset.radius || '0'),
      fit: container.dataset.fit || 'showcase',
      lensWidth: base.lensWidth,
      lensHeight: base.lensHeight,
      tilt: base.tilt,
      roundness: base.roundness,
      bend: base.bend,
      reach: base.reach,
      curl: base.curl,
      dispersion: base.dispersion,
      liquid: base.liquid,
      followCursor: base.followCursor,
      squeeze: parseFloat(container.dataset.squeeze || '0.2'),
      focusOnClick: container.dataset.focusOnClick !== 'false',
      autoplay: container.dataset.autoplay === 'true',
      interval: parseFloat(container.dataset.interval || '4'),
      captureWheel: container.dataset.captureWheel === 'true'
    };

    container.style.setProperty('--flex-carousel-half', `${Math.min(Math.max(settings.cardHeight, 0.05), 1) * 50}%`);

    const captionEl = container.querySelector('.flex-carousel__caption');
    const titleEl = container.querySelector('.flex-carousel__title');
    const titleTextEl = container.querySelector('.flex-carousel__title-text');
    const subtitleEl = container.querySelector('.flex-carousel__subtitle');
    const countEl = container.querySelector('.flex-carousel__count');
    const reel0 = container.querySelector('.flex-carousel__reel[data-digit-pos="0"]');
    const reel1 = container.querySelector('.flex-carousel__reel[data-digit-pos="1"]');
    const totalEl = container.querySelector('.flex-carousel__total');
    const liveEl = container.querySelector('.flex-carousel__live');
    if (totalEl) totalEl.textContent = String(WORK_ITEMS.length).padStart(2, '0');

    const updateCaptionUI = (idx) => {
      const item = WORK_ITEMS[idx] || WORK_ITEMS[0];
      if (!item) return;
      if (titleTextEl) titleTextEl.textContent = item.title || item.alt || '';
      if (subtitleEl) subtitleEl.textContent = item.subtitle || '';
      if (titleEl) {
        titleEl.style.animation = 'none';
        void titleEl.offsetWidth;
        titleEl.style.animation = '';
      }
      const digits = String(idx + 1).padStart(2, '0');
      if (reel0) reel0.style.transform = `translateY(${-Number(digits[0]) * 10}%)`;
      if (reel1) reel1.style.transform = `translateY(${-Number(digits[1]) * 10}%)`;
      if (liveEl) liveEl.textContent = `${item.title || item.alt}, ${idx + 1} of ${WORK_ITEMS.length}`;
    };

    const canvas = document.createElement('canvas');
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.setAttribute('aria-hidden', 'true');
    container.prepend(canvas);

    const gl = canvas.getContext('webgl2', {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      depth: false
    });
    if (!gl) return;
    gl.clearColor(0, 0, 0, 0);

    const compileShader = (type, src) => {
      const sh = gl.createShader(type);
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(sh));
        gl.deleteShader(sh);
        return null;
      }
      return sh;
    };

    const createProgram = (vsSrc, fsSrc) => {
      const vs = compileShader(gl.VERTEX_SHADER, vsSrc);
      const fs = compileShader(gl.FRAGMENT_SHADER, fsSrc);
      if (!vs || !fs) return null;
      const prog = gl.createProgram();
      gl.attachShader(prog, vs);
      gl.attachShader(prog, fs);
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(prog));
        return null;
      }
      return prog;
    };

    const cardVertex = `#version 300 es
in vec3 position;
in vec2 uv;
uniform vec4 uRect;
uniform vec2 uResolution;
out vec2 vUv;
out vec2 vLocal;
void main() {
  vUv = uv;
  vLocal = vec2(position.x, -position.y) * uRect.zw;
  vec2 px = uRect.xy + vLocal;
  gl_Position = vec4(px.x / uResolution.x * 2.0 - 1.0, 1.0 - px.y / uResolution.y * 2.0, 0.0, 1.0);
}
`;

    // Card Fragment adjusted so every 1:1 project thumbnail fits 100% cleanly inside its frame without edge cropping
    const cardFragment = `#version 300 es
precision highp float;
uniform sampler2D tMap;
uniform vec2 uSize;
uniform vec2 uImage;
uniform float uRadius;
uniform float uAlpha;
uniform float uReady;
uniform float uShift;
uniform float uDpr;
uniform vec3 uPlaceholder;
in vec2 vUv;
in vec2 vLocal;
out vec4 fragColor;

float roundedBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

void main() {
  float r = min(uRadius, min(uSize.x, uSize.y) * 0.5);
  float sd = roundedBox(vLocal, uSize * 0.5, r);
  float mask = clamp(0.5 - sd * uDpr, 0.0, 1.0);
  vec2 local = vLocal / uSize + 0.5;
  float cardAspect = uSize.x / max(uSize.y, 1.0);
  float imageAspect = uImage.x / max(uImage.y, 1.0);
  vec2 scale = imageAspect > cardAspect ? vec2(cardAspect / imageAspect, 1.0) : vec2(1.0, imageAspect / cardAspect);
  vec2 uv = vec2(local.x, 1.0 - local.y);
  uv = (uv - 0.5) * scale + 0.5;
  vec3 image = texture(tMap, clamp(uv, 0.0, 1.0)).rgb;
  vec3 color = mix(uPlaceholder, image, uReady);
  float border = clamp(0.8 - abs(sd + 0.5) * uDpr, 0.0, 1.0) * 0.16;
  color = mix(color, vec3(1.0), border);
  float alpha = mask * uAlpha;
  fragColor = vec4(color * alpha, alpha);
}
`;

    const lensVertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

    const lensFragment = `#version 300 es
precision highp float;
uniform sampler2D tScene;
uniform vec2 uResolution;
uniform float uDpr;
uniform vec2 uCenter;
uniform vec2 uHalf;
uniform float uAngle;
uniform float uExponent;
uniform float uInner;
uniform float uOuter;
uniform float uFlow;
uniform float uCurl;
uniform float uDispersion;
uniform float uStrength;
uniform float uSceneAlpha;
uniform float uFlatZone;
out vec4 fragColor;

void main() {
  vec2 frag = gl_FragCoord.xy / uDpr;
  vec2 uv = frag / uResolution;
  vec2 rel = frag - vec2(uCenter.x, uResolution.y - uCenter.y);
  float ca = cos(uAngle);
  float sa = sin(uAngle);
  vec2 local = vec2(ca * rel.x + sa * rel.y, -sa * rel.x + ca * rel.y);
  vec2 k = max(abs(local) / uHalf, vec2(1e-5));
  float nd = pow(pow(k.x, uExponent) + pow(k.y, uExponent), 1.0 / uExponent);
  vec2 grad = pow(k, vec2(uExponent - 1.0)) * sign(local) / uHalf * pow(nd, 1.0 - uExponent);
  float glen = max(length(grad), 1e-6);
  float edge = (nd - 1.0) / glen;
  vec2 outward = grad / glen;
  vec2 normal = vec2(ca * outward.x - sa * outward.y, sa * outward.x + ca * outward.y);
  vec2 along = vec2(-normal.y, normal.x);

  float t = clamp((edge + uInner) / (uInner + uOuter), 0.0, 1.0);
  float ramp = t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
  float slope = 16.0 * t * t * (1.0 - t) * (1.0 - t);
  float reachX = rel.x / (uResolution.x * 0.5);
  float side = smoothstep(uFlatZone, uFlatZone + 0.24, abs(reachX)) * (uCurl == 0.0 ? sign(reachX) : uCurl);
  float lift = ramp * side * uFlow * uStrength;
  vec2 swirl = along * along.y * side * slope * uFlow * uStrength * 0.35;
  vec2 drift = vec2(0.0, -lift) - swirl;
  vec2 shifted = uv + drift / uResolution;

  vec2 texels = uResolution * uDpr;
  vec2 gx = dFdx(shifted);
  vec2 gy = dFdy(shifted);
  gx *= min(1.0, 3.0 / max(length(gx * texels), 1e-4));
  gy *= min(1.0, 3.0 / max(length(gy * texels), 1e-4));

  vec4 color = textureGrad(tScene, shifted, gx, gy);
  vec2 spread = vec2(0.0, side * slope * uFlow * uStrength) / uResolution * uDispersion;
  float spreadPx = length(spread * texels);
  if (color.a > 0.002 && spreadPx > 0.25) {
    vec3 base = color.rgb / color.a;
    vec3 sumColor = vec3(0.0);
    vec3 sumWeight = vec3(0.0);
    for (int i = 0; i < ${TAPS}; i++) {
      float s = (float(i) + 0.5) / float(${TAPS});
      vec4 c = textureGrad(tScene, shifted + spread * (s - 0.5), gx, gy);
      vec3 w = max(1.0 - abs(vec3(s) - vec3(0.15, 0.5, 0.85)) * 2.6, 0.0) * c.a;
      sumColor += c.rgb * (w / max(c.a, 0.002));
      sumWeight += w;
    }
    vec3 split = mix(base, sumColor / max(sumWeight, vec3(1e-4)), clamp(sumWeight * 2.0, 0.0, 1.0));
    color.rgb = mix(color.rgb, clamp(split, 0.0, 1.0) * color.a, smoothstep(0.25, 1.5, spreadPx));
  }

  fragColor = color * uSceneAlpha;
}
`;

    const cardProg = createProgram(cardVertex, cardFragment);
    const lensProg = createProgram(lensVertex, lensFragment);
    if (!cardProg || !lensProg) return;

    // Plane VAO for cardProgram
    const cardVao = gl.createVertexArray();
    gl.bindVertexArray(cardVao);
    const planePos = new Float32Array([
      -0.5,  0.5, 0,
       0.5,  0.5, 0,
      -0.5, -0.5, 0,
      -0.5, -0.5, 0,
       0.5,  0.5, 0,
       0.5, -0.5, 0
    ]);
    const planeUv = new Float32Array([
      0, 1,
      1, 1,
      0, 0,
      0, 0,
      1, 1,
      1, 0
    ]);
    const posBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
    gl.bufferData(gl.ARRAY_BUFFER, planePos, gl.STATIC_DRAW);
    const cardPosLoc = gl.getAttribLocation(cardProg, 'position');
    if (cardPosLoc >= 0) {
      gl.enableVertexAttribArray(cardPosLoc);
      gl.vertexAttribPointer(cardPosLoc, 3, gl.FLOAT, false, 0, 0);
    }
    const uvBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuf);
    gl.bufferData(gl.ARRAY_BUFFER, planeUv, gl.STATIC_DRAW);
    const cardUvLoc = gl.getAttribLocation(cardProg, 'uv');
    if (cardUvLoc >= 0) {
      gl.enableVertexAttribArray(cardUvLoc);
      gl.vertexAttribPointer(cardUvLoc, 2, gl.FLOAT, false, 0, 0);
    }

    // Fullscreen Triangle VAO for lensProgram
    const lensVao = gl.createVertexArray();
    gl.bindVertexArray(lensVao);
    const triBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, triBuf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const lensPosLoc = gl.getAttribLocation(lensProg, 'position');
    if (lensPosLoc >= 0) {
      gl.enableVertexAttribArray(lensPosLoc);
      gl.vertexAttribPointer(lensPosLoc, 2, gl.FLOAT, false, 0, 0);
    }
    gl.bindVertexArray(null);

    const cardLocs = {
      tMap: gl.getUniformLocation(cardProg, 'tMap'),
      uRect: gl.getUniformLocation(cardProg, 'uRect'),
      uResolution: gl.getUniformLocation(cardProg, 'uResolution'),
      uSize: gl.getUniformLocation(cardProg, 'uSize'),
      uImage: gl.getUniformLocation(cardProg, 'uImage'),
      uRadius: gl.getUniformLocation(cardProg, 'uRadius'),
      uAlpha: gl.getUniformLocation(cardProg, 'uAlpha'),
      uReady: gl.getUniformLocation(cardProg, 'uReady'),
      uShift: gl.getUniformLocation(cardProg, 'uShift'),
      uDpr: gl.getUniformLocation(cardProg, 'uDpr'),
      uPlaceholder: gl.getUniformLocation(cardProg, 'uPlaceholder')
    };

    const lensLocs = {
      tScene: gl.getUniformLocation(lensProg, 'tScene'),
      uResolution: gl.getUniformLocation(lensProg, 'uResolution'),
      uDpr: gl.getUniformLocation(lensProg, 'uDpr'),
      uCenter: gl.getUniformLocation(lensProg, 'uCenter'),
      uHalf: gl.getUniformLocation(lensProg, 'uHalf'),
      uAngle: gl.getUniformLocation(lensProg, 'uAngle'),
      uExponent: gl.getUniformLocation(lensProg, 'uExponent'),
      uInner: gl.getUniformLocation(lensProg, 'uInner'),
      uOuter: gl.getUniformLocation(lensProg, 'uOuter'),
      uFlow: gl.getUniformLocation(lensProg, 'uFlow'),
      uCurl: gl.getUniformLocation(lensProg, 'uCurl'),
      uDispersion: gl.getUniformLocation(lensProg, 'uDispersion'),
      uStrength: gl.getUniformLocation(lensProg, 'uStrength'),
      uSceneAlpha: gl.getUniformLocation(lensProg, 'uSceneAlpha'),
      uFlatZone: gl.getUniformLocation(lensProg, 'uFlatZone')
    };

    // Offscreen RenderTarget
    const targetFbo = gl.createFramebuffer();
    const targetTex = gl.createTexture();
    let targetW = 2;
    let targetH = 2;
    const resizeTarget = (w, h) => {
      targetW = Math.max(2, w);
      targetH = Math.max(2, h);
      gl.bindTexture(gl.TEXTURE_2D, targetTex);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, targetW, targetH, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.bindFramebuffer(gl.FRAMEBUFFER, targetFbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, targetTex, 0);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    };
    resizeTarget(2, 2);

    const anisoExt = gl.getExtension('EXT_texture_filter_anisotropic');

    let slots = [];
    let width = 1;
    let height = 1;
    let dpr = 1;
    let pos = 0;
    let vel = 0;
    let goal = 0;
    let mode = 'spring';
    let wheelAt = 0;
    let raf = 0;
    let last = performance.now();
    let visible = false;
    let alive = true;
    let dirty = true;
    let activeIndex = -1;
    let interactedAt = -Infinity;
    let autoplayAt = performance.now();
    let hasFocus = false;
    let deform = 0;
    let deformVel = 0;
    let layout = null;
    let resnap = true;
    let hover = '';
    let lift = 1;
    let energy = 0;
    let lastPos = 0;
    const lens = { x: 0, y: 0, vx: 0, vy: 0, ready: false };
    const pointer = {
      x: 0,
      y: 0,
      over: false,
      down: false,
      id: -1,
      startX: 0,
      startY: 0,
      startPos: 0,
      dragging: false,
      touch: false,
      samples: []
    };
    const introState = { kind: 'none', t: 0, running: false, done: false, readyAt: performance.now() };
    const focus = { index: -1, pending: -1, t: 0, v: 0, target: 0 };
    let instances = [];

    const setRevealed = (rev) => {
      if (captionEl && rev) captionEl.setAttribute('data-revealed', 'true');
    };
    const setFocusOpen = (open) => {
      if (!countEl) return;
      if (open) countEl.setAttribute('data-hidden', '');
      else countEl.removeAttribute('data-hidden');
    };

    const loadSlot = (item, index) => {
      const glTex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, glTex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([30, 30, 36, 255]));

      const slot = {
        item,
        index,
        texture: glTex,
        aspect: 1,
        loaded: false,
        failed: false,
        ready: 0,
        color: [0.15, 0.15, 0.18],
        image: [1200, 1200]
      };

      const image = new Image();
      image.crossOrigin = 'anonymous';
      image.decoding = 'async';
      image.onload = () => {
        if (!alive) return;
        gl.bindTexture(gl.TEXTURE_2D, glTex);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        if (anisoExt) {
          gl.texParameterf(gl.TEXTURE_2D, anisoExt.TEXTURE_MAX_ANISOTROPY_EXT, 8);
        }
        slot.image = [image.naturalWidth || 1200, image.naturalHeight || 1200];
        slot.aspect = slot.image[0] / slot.image[1];
        slot.loaded = true;
        dirty = true;
        start();
      };
      image.onerror = () => {
        if (!alive) return;
        slot.failed = true;
        dirty = true;
        start();
      };
      image.src = item.src;
      return slot;
    };

    let navigating = false;
    const slots_init = WORK_ITEMS.map(loadSlot);
    slots = slots_init;

    const metrics = (s) => {
      const isMobile = width < 640;
      const isTablet = width >= 640 && width < 1024;
      const cardH = isMobile
        ? Math.max(160, Math.min(height * 0.52, width * 0.58))
        : isTablet
          ? Math.max(200, Math.min(height * 0.50, width * 0.44))
          : Math.max(220, height * 0.48);
      const gapVal = isMobile ? 12 : s.gap;
      const fixed = FIT_ASPECT[s.fit];
      const widths = slots.map(slot => (fixed || slot.aspect) * cardH);
      const centers = [];
      let cursor = 0;
      for (let i = 0; i < widths.length; i++) {
        centers.push(cursor + widths[i] / 2);
        cursor += widths[i] + gapVal;
      }
      container.style.setProperty('--flex-carousel-half', `${(cardH * 0.5).toFixed(1)}px`);
      container.style.setProperty('--flex-carousel-center-y', isMobile ? '42%' : '44%');
      return { cardH, widths, centers, gap: gapVal, loop: Math.max(cursor, 1), isMobile, isTablet };
    };

    const nearest = (m, at) => {
      let best = 0;
      let bestDist = Infinity;
      for (let i = 0; i < m.centers.length; i++) {
        const dist = Math.abs(wrap(m.centers[i] - at, m.loop));
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      }
      return best;
    };

    const snapPoint = (m, at) => {
      const i = nearest(m, at);
      return at + wrap(m.centers[i] - at, m.loop);
    };

    const remap = (from, to, at) => {
      const i = nearest(from, at);
      const offset = wrap(at - from.centers[i], from.loop);
      const cycles = Math.round((at - offset - from.centers[i]) / from.loop);
      return cycles * to.loop + to.centers[i] + offset * (to.widths[i] / from.widths[i]);
    };

    const step = (m, delta) => {
      let at = snapPoint(m, goal);
      let index = nearest(m, at);
      const n = m.centers.length;
      for (let k = 0; k < Math.abs(delta); k++) {
        const next = (index + (delta > 0 ? 1 : n - 1)) % n;
        const distance =
          delta > 0
            ? m.widths[index] / 2 + m.gap + m.widths[next] / 2
            : -(m.widths[next] / 2 + m.gap + m.widths[index] / 2);
        at += distance;
        index = next;
      }
      goal = at;
      mode = 'spring';
      dirty = true;
      start();
    };

    const goTo = (m, index) => {
      const i = ((index % m.centers.length) + m.centers.length) % m.centers.length;
      goal = goal + wrap(m.centers[i] - goal, m.loop);
      mode = 'spring';
      dirty = true;
      start();
    };

    const openFocus = (index) => {
      focus.index = index;
      focus.pending = -1;
      focus.target = 1;
      setFocusOpen(true);
      dirty = true;
      start();
    };

    const closeFocus = () => {
      focus.pending = -1;
      if (focus.target === 0) return false;
      focus.target = 0;
      setFocusOpen(false);
      dirty = true;
      start();
      return true;
    };

    const skipIntro = () => {
      if (introState.running) introState.t = 1;
    };

    const introEffects = () => {
      const t = introState.running ? introState.t : introState.done ? 1 : 0;
      const e = { sceneAlpha: 1, strength: 1, card: null };
      if (!introState.done && !introState.running) {
        e.sceneAlpha = 0;
        e.strength = 0;
        return e;
      }
      if (t >= 1) return e;
      const kind = introState.kind;
      if (kind === 'rise') {
        e.strength = easeInOut((t - 0.3) / 0.65);
        e.card = rel => {
          const delay = Math.min(Math.abs(rel) / (width * 0.6), 1) * 0.34;
          const local = clamp01((t - delay) / 0.6);
          return {
            alpha: clamp01(local * 4),
            x: 0,
            y: (1 - easeOutQuint(local)) * height * 0.62,
            scale: 0.5 + 0.5 * easeInOut((local - 0.18) / 0.82)
          };
        };
      } else if (kind === 'bloom') {
        e.strength = easeInOut((t - 0.2) / 0.8);
        e.card = rel => {
          const delay = Math.min(Math.abs(rel) / (width * 0.6), 1) * 0.25;
          const local = easeOut((t - delay) / 0.55);
          return { alpha: local, x: 0, y: 0, scale: 0.92 + 0.08 * local };
        };
      } else if (kind === 'spin') {
        e.sceneAlpha = easeOut(t / 0.25);
        e.strength = easeOut((t - 0.55) / 0.45);
      } else if (kind === 'deal') {
        e.strength = easeOut((t - 0.45) / 0.5);
        e.card = rel => {
          const spread = Math.min(Math.abs(rel) / (width * 0.6), 1) * 0.3;
          const local = easeOut((t - 0.12 - spread) / 0.5);
          return { alpha: easeOut((t - spread) / 0.12), x: -rel * (1 - local), y: 0, scale: 1 };
        };
      } else {
        e.sceneAlpha = easeOut(t);
        e.strength = easeOut(t);
      }
      return e;
    };

    const beginIntro = (s, m) => {
      const kind = s.intro;
      introState.kind = INTRO_DURATION[kind] ? kind : 'none';
      introState.running = introState.kind !== 'none';
      introState.done = !introState.running;
      introState.t = 0;
      if (introState.done) setRevealed(true);
      if (introState.kind === 'spin') {
        const distance = m.loop * 1.6 + width;
        pos = goal + distance;
        vel = -distance * 3;
        mode = 'spring';
      }
    };

    const resize = () => {
      width = Math.max(1, container.clientWidth);
      height = Math.max(1, container.clientHeight);
      dpr = Math.min(window.devicePixelRatio || 1, 2, Math.sqrt(PIXEL_BUDGET / (width * height)));
      canvas.width = Math.max(2, Math.round(width * dpr));
      canvas.height = Math.max(2, Math.round(height * dpr));
      resizeTarget(canvas.width, canvas.height);
      dirty = true;
      start();
    };

    const frame = (now) => {
      raf = 0;
      if (!alive) return;
      const s = settings;
      const dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000));
      last = now;
      if (!slots.length) {
        if (visible) raf = requestAnimationFrame(frame);
        return;
      }

      const m = metrics(s);
      const n = slots.length;
      let animating = false;

      if (resnap) {
        goal = snapPoint(m, goal);
        pos = goal;
        vel = 0;
        resnap = false;
      } else if (layout && layout.loop !== m.loop) {
        pos = remap(layout, m, pos);
        goal = remap(layout, m, goal);
        pointer.startPos = pos + (pointer.x - pointer.startX);
        animating = true;
      }
      layout = m;

      if (!introState.running && !introState.done && visible) {
        const allSettled = slots.every(slot => slot.loaded || slot.failed);
        if (allSettled || now - introState.readyAt > 3500) {
          goal = snapPoint(m, goal);
          pos = goal;
          beginIntro(s, m);
        }
      }
      if (introState.running) {
        introState.t = Math.min(1, introState.t + dt / (INTRO_DURATION[introState.kind] || 1));
        if (introState.t >= 1) {
          introState.running = false;
          introState.done = true;
          setRevealed(true);
        }
        animating = true;
      }

      if (mode === 'wheel' && now - wheelAt > 150) {
        goal = snapPoint(m, goal);
        mode = 'spring';
      }
      if (!pointer.dragging) {
        const spinning = introState.running && introState.kind === 'spin';
        const stiffness = spinning ? 9 : mode === 'wheel' ? 80 : 55;
        const damping = 2 * Math.sqrt(stiffness);
        const steps = Math.ceil(dt / (1 / 240));
        const h = dt / steps;
        for (let i = 0; i < steps; i++) {
          const acc = stiffness * (goal - pos) - damping * vel;
          vel += acc * h;
          pos += vel * h;
        }
        if (Math.abs(goal - pos) < 0.05 && Math.abs(vel) < 0.5) {
          pos = goal;
          vel = 0;
        } else {
          animating = true;
        }
      } else {
        animating = true;
      }

      if (Math.abs(pos) > m.loop * 8) {
        const shift = Math.round(pos / m.loop) * m.loop;
        pos -= shift;
        goal -= shift;
        pointer.startPos -= shift;
      }

      const current = nearest(m, pos);
      if (current !== activeIndex) {
        activeIndex = current;
        updateCaptionUI(current);
      }

      if (focus.pending >= 0 && mode === 'spring' && Math.abs(goal - pos) < 1.5 && Math.abs(vel) < 30) {
        if (current === focus.pending) openFocus(current);
        else focus.pending = -1;
      }

      if (
        s.autoplay &&
        introState.done &&
        focus.target === 0 &&
        focus.t < 0.01 &&
        !pointer.over &&
        !pointer.down &&
        !hasFocus &&
        mode === 'spring' &&
        Math.abs(goal - pos) < 1 &&
        now - interactedAt > 3000 &&
        now - autoplayAt > s.interval * 1000
      ) {
        autoplayAt = now;
        step(m, 1);
      }
      if (s.autoplay) animating = true;

      const travel = Math.abs(pos - lastPos) / dt;
      lastPos = pos;
      const energyTarget = Math.min(travel / 2600, 1);
      energy += (energyTarget - energy) * (1 - Math.exp(-dt / (energyTarget > energy ? 0.07 : 0.35)));
      if (energy > 0.001) animating = true;
      const liquidAmount = s.liquid;
      const push = Math.max(-1, Math.min(1, vel / 2200));
      const deformStiffness = 120;
      const deformDamping = 2 * Math.sqrt(deformStiffness) * 0.32;
      deformVel += (deformStiffness * (push - deform) - deformDamping * deformVel) * dt;
      deform += deformVel * dt;
      if (Math.abs(deform) > 0.0005 || Math.abs(deformVel) > 0.005) animating = true;

      const focusStiffness = 64;
      focus.v += (focusStiffness * (focus.target - focus.t) - 2 * Math.sqrt(focusStiffness) * focus.v) * dt;
      focus.t += focus.v * dt;
      if (Math.abs(focus.target - focus.t) < 0.0005 && Math.abs(focus.v) < 0.001) {
        focus.t = focus.target;
        focus.v = 0;
      } else {
        animating = true;
      }
      const focusAmount = clamp01(focus.t);
      const focusEase = easeInOut(focusAmount);
      const focusW = focus.index >= 0 && focus.index < n ? m.widths[focus.index] : m.cardH;
      const focusScale = Math.max(1, Math.min(1.22, (height * 0.68) / m.cardH, (width * 0.86) / focusW));
      const nextLift = 1 + (focusScale - 1) * focusEase;
      if (Math.abs(nextLift - lift) > 0.0005) {
        lift = nextLift;
        container.style.setProperty('--flex-carousel-lift', lift.toFixed(4));
      }

      // When a project card finishes zooming in, navigate directly to its project detail page
      if (focus.target === 1 && focus.t >= 0.72 && !navigating && focus.index >= 0 && WORK_ITEMS[focus.index]) {
        navigating = true;
        window.location.href = WORK_ITEMS[focus.index].href;
      }

      const effects = introEffects();

      const homeX = width / 2;
      const homeY = height * (m.isMobile ? 0.44 : 0.46);
      const follow = s.followCursor && pointer.over && !pointer.dragging && !pointer.touch && focus.target === 0;
      const aimX = follow ? pointer.x : homeX;
      const aimY = follow ? pointer.y : homeY;
      if (!lens.ready) {
        lens.x = homeX;
        lens.y = homeY;
        lens.ready = true;
      }
      const lensK = 110;
      const lensC = 2 * Math.sqrt(lensK) * 0.8;
      lens.vx += (lensK * (aimX - lens.x) - lensC * lens.vx) * dt;
      lens.vy += (lensK * (aimY - lens.y) - lensC * lens.vy) * dt;
      lens.x += lens.vx * dt;
      lens.y += lens.vy * dt;
      if (Math.abs(aimX - lens.x) + Math.abs(aimY - lens.y) > 0.2 || Math.abs(lens.vx) + Math.abs(lens.vy) > 0.5)
        animating = true;

      const cardH = m.cardH;
      const effLensW = m.isMobile ? 0.86 : s.lensWidth;
      const effLensH = m.isMobile ? 1.25 : s.lensHeight;
      const effBend = m.isMobile ? 0.20 : s.bend;
      const effDispersion = m.isMobile ? 0.22 : s.dispersion;
      const effRadius = m.isMobile ? (s.radius ?? 0) : (s.radius ?? 0);
      let halfW = (effLensW * width) / 2;
      let halfH = (effLensH * width) / 2;
      const squash = Math.abs(deform) * liquidAmount;
      halfW *= 1 + squash * 0.16;
      halfH *= 1 - squash * 0.08;
      const lensX = lens.x - deform * 14 * liquidAmount;

      for (let i = 0; i < n; i++) {
        const slot = slots[i];
        if (slot.loaded && slot.ready < 1) {
          slot.ready = Math.min(1, slot.ready + dt / 0.45);
          animating = true;
        }
      }

      const waiting = !introState.done;
      if (dirty || animating || pointer.dragging) {
        dirty = false;
        instances = [];

        const shrink = 1 - clamp01(s.squeeze) * energy;
        const draws = [];
        for (let i = 0; i < n; i++) {
          const w = m.widths[i];
          const baseRel = wrap(m.centers[i] - pos, m.loop);
          for (let k = -3; k <= 3; k++) {
            const rel = baseRel + k * m.loop;
            if (Math.abs(rel) - w / 2 > width + 40) continue;
            const fx = effects.card ? effects.card(rel) : null;
            let x = homeX + rel + (fx ? fx.x : 0);
            let scale = shrink * (fx ? fx.scale : 1);
            let alpha = fx ? fx.alpha : 1;
            if (focusAmount > 0) {
              if (i === focus.index && Math.abs(rel) < w) {
                scale *= 1 + (focusScale - 1) * focusEase;
              } else {
                const order = Math.min(Math.abs(rel) / width, 1) * 0.25;
                const part = easeInOut(focusAmount * 1.25 - order);
                x += Math.sign(rel) * part * width * 0.7;
                alpha *= 1 - part;
              }
            }
            const cw = w * scale;
            if (alpha <= 0.001 || x + cw / 2 < -40 || x - cw / 2 > width + 40) continue;
            draws.push({ i, rel, x, y: homeY + (fx ? fx.y : 0), cw, ch: cardH * scale, alpha });
          }
        }
        draws.sort((a, b) => Math.abs(b.rel) - Math.abs(a.rel));

        // Pass 1: Render cards into offscreen targetFbo
        gl.bindFramebuffer(gl.FRAMEBUFFER, targetFbo);
        gl.viewport(0, 0, targetW, targetH);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.useProgram(cardProg);
        gl.bindVertexArray(cardVao);
        gl.uniform2f(cardLocs.uResolution, width, height);
        gl.uniform1f(cardLocs.uDpr, dpr);
        gl.uniform1f(cardLocs.uRadius, effRadius);
        gl.uniform1i(cardLocs.tMap, 0);

        for (const draw of draws) {
          const slot = slots[draw.i];
          gl.activeTexture(gl.TEXTURE0);
          gl.bindTexture(gl.TEXTURE_2D, slot.texture);
          gl.uniform4f(cardLocs.uRect, draw.x, draw.y, draw.cw + 2, draw.ch + 2);
          gl.uniform2f(cardLocs.uSize, draw.cw, draw.ch);
          gl.uniform2f(cardLocs.uImage, slot.image[0], slot.image[1]);
          gl.uniform1f(cardLocs.uAlpha, draw.alpha);
          gl.uniform1f(cardLocs.uReady, slot.ready);
          gl.uniform1f(cardLocs.uShift, Math.max(-1, Math.min(1, draw.rel / (width * 0.75))));
          gl.uniform3f(cardLocs.uPlaceholder, slot.color[0], slot.color[1], slot.color[2]);
          gl.drawArrays(gl.TRIANGLES, 0, 6);

          instances.push({
            index: draw.i,
            x0: draw.x - draw.cw / 2,
            x1: draw.x + draw.cw / 2,
            y0: draw.y - draw.ch / 2,
            y1: draw.y + draw.ch / 2
          });
        }

        // Pass 2: Render liquid lens distortion to screen
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.disable(gl.BLEND);
        gl.useProgram(lensProg);
        gl.bindVertexArray(lensVao);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, targetTex);
        gl.generateMipmap(gl.TEXTURE_2D);
        gl.uniform1i(lensLocs.tScene, 0);
        gl.uniform2f(lensLocs.uResolution, width, height);
        gl.uniform1f(lensLocs.uDpr, dpr);
        gl.uniform2f(lensLocs.uCenter, lensX, lens.y);
        gl.uniform2f(lensLocs.uHalf, Math.max(halfW, 1), Math.max(halfH, 1));
        gl.uniform1f(lensLocs.uAngle, (s.tilt * Math.PI) / 180);
        gl.uniform1f(lensLocs.uExponent, 2 + Math.pow(1 - clamp01(s.roundness), 1.5) * 10);
        const spanW = Math.max(halfW, 1);
        const spanH = Math.max(halfH, 1);
        const inner = Math.max(4, s.reach * (spanW + spanH) * 0.5);
        gl.uniform1f(lensLocs.uInner, inner);
        gl.uniform1f(lensLocs.uOuter, inner * 1.6);
        const rawFlow = effBend * (spanW + spanH) * 0.45;
        const maxSafeFlow = Math.max(14, (Math.min(homeY, height - homeY) - cardH * 0.5 - 18) / 1.22);
        gl.uniform1f(lensLocs.uFlow, Math.min(rawFlow, maxSafeFlow));
        gl.uniform1f(lensLocs.uCurl, s.curl === 'rise' ? 1 : s.curl === 'fall' ? -1 : 0);
        gl.uniform1f(lensLocs.uDispersion, effDispersion * 0.12 * (1 + Math.abs(deform) * liquidAmount * 1.2));
        gl.uniform1f(lensLocs.uStrength, effects.strength * (1 - focusEase));
        gl.uniform1f(lensLocs.uSceneAlpha, effects.sceneAlpha);
        const flatZone = (cardH * 0.51) / Math.max(width * 0.5, 1);
        gl.uniform1f(lensLocs.uFlatZone, flatZone);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        gl.bindVertexArray(null);
      }

      let nextHover = '';
      if (pointer.over && !pointer.dragging && introState.done && s.focusOnClick) {
        const hit = instances.find(
          inst => pointer.x >= inst.x0 && pointer.x <= inst.x1 && pointer.y >= inst.y0 && pointer.y <= inst.y1
        );
        if (focus.target > 0) nextHover = 'close';
        else if (hit) nextHover = 'open';
      }
      if (nextHover !== hover) {
        hover = nextHover;
        if (hover) container.setAttribute('data-hover', hover);
        else container.removeAttribute('data-hover');
      }

      if (visible && (animating || waiting || dirty || pointer.down)) {
        raf = requestAnimationFrame(frame);
      }
    };

    const start = () => {
      if (raf || !visible || !alive) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const localPoint = e => {
      const rect = container.getBoundingClientRect();
      return [e.clientX - rect.left, e.clientY - rect.top];
    };

    const onPointerDown = e => {
      if (e.button !== undefined && e.button > 0) return;
      skipIntro();
      const [x, y] = localPoint(e);
      pointer.down = true;
      pointer.id = e.pointerId;
      pointer.touch = e.pointerType === 'touch';
      pointer.startX = x;
      pointer.startY = y;
      pointer.x = x;
      pointer.y = y;
      pointer.startPos = pos;
      pointer.dragging = false;
      pointer.samples = [{ x, t: performance.now() }];
      interactedAt = performance.now();
      if (Math.abs(vel) > 40) {
        goal = pos;
        vel = 0;
      }
      dirty = true;
      start();
    };

    const onPointerMove = e => {
      const [x, y] = localPoint(e);
      pointer.x = x;
      pointer.y = y;
      pointer.over = true;
      if (pointer.down && e.pointerId === pointer.id) {
        const dx = x - pointer.startX;
        const dy = y - pointer.startY;
        const slop = pointer.touch ? 10 : 5;
        if (!pointer.dragging) {
          if (pointer.touch && Math.abs(dy) > slop && Math.abs(dy) > Math.abs(dx)) {
            pointer.down = false;
            return;
          }
          if (Math.abs(dx) > slop) {
            pointer.dragging = true;
            pointer.startX = x;
            pointer.startPos = pos;
            closeFocus();
            try {
              container.setPointerCapture(e.pointerId);
            } catch {}
            container.setAttribute('data-dragging', '');
          }
        }
        if (pointer.dragging) {
          pos = pointer.startPos - (x - pointer.startX);
          goal = pos;
          vel = 0;
          const now = performance.now();
          pointer.samples.push({ x, t: now });
          while (pointer.samples.length > 2 && now - pointer.samples[0].t > 100) pointer.samples.shift();
        }
      }
      dirty = true;
      start();
    };

    const onPointerUp = e => {
      if (!pointer.down || e.pointerId !== pointer.id) return;
      pointer.down = false;
      container.removeAttribute('data-dragging');
      const s = settings;
      const m = metrics(s);
      interactedAt = performance.now();
      if (pointer.dragging) {
        pointer.dragging = false;
        const now = performance.now();
        const first = pointer.samples[0];
        const lastSample = pointer.samples[pointer.samples.length - 1];
        let velocity = 0;
        if (first && lastSample && lastSample.t > first.t && now - lastSample.t < 70) {
          velocity = -((lastSample.x - first.x) / (lastSample.t - first.t)) * 1000;
        }
        vel = velocity;
        const landing = snapPoint(m, pos + velocity * 0.32);
        goal = landing;
        if (Math.abs(velocity) > 400 && Math.abs(landing - pos) < 1) step(m, velocity > 0 ? 1 : -1);
        mode = 'spring';
        start();
        return;
      }
      if (closeFocus()) return;
      const [x, y] = localPoint(e);
      const hit = instances.find(inst => x >= inst.x0 && x <= inst.x1 && y >= inst.y0 && y <= inst.y1);
      if (!hit) return;
      if (hit.index === activeIndex && Math.abs(goal - pos) < 2) {
        if (s.focusOnClick) openFocus(hit.index);
      } else {
        const rel = (hit.x0 + hit.x1) / 2 - width / 2;
        goal = snapPoint(m, pos + rel);
        mode = 'spring';
        if (s.focusOnClick) focus.pending = hit.index;
        start();
      }
    };

    const onPointerLeave = () => {
      pointer.over = false;
      dirty = true;
      start();
    };

    const onPointerCancel = () => {
      pointer.down = false;
      pointer.dragging = false;
      container.removeAttribute('data-dragging');
      goal = snapPoint(metrics(settings), pos);
      mode = 'spring';
      start();
    };

    const onWheel = e => {
      if (e.ctrlKey) return;
      let dx = e.deltaX;
      let dy = e.deltaY;
      if (e.shiftKey && Math.abs(dx) < Math.abs(dy)) {
        dx = dy;
        dy = 0;
      }
      const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? height : 1;
      const horizontal = Math.abs(dx) > Math.abs(dy);
      if (!horizontal && !settings.captureWheel) return;
      e.preventDefault();
      skipIntro();
      interactedAt = performance.now();
      if (closeFocus()) return;
      const delta = Math.max(-120, Math.min(120, (horizontal ? dx : dy) * unit));
      goal += delta * 1.25;
      mode = 'wheel';
      wheelAt = performance.now();
      start();
    };

    const onKeyDown = e => {
      const m = metrics(settings);
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        skipIntro();
        closeFocus();
        interactedAt = performance.now();
        step(m, 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        skipIntro();
        closeFocus();
        interactedAt = performance.now();
        step(m, -1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        closeFocus();
        goTo(m, 0);
      } else if (e.key === 'End') {
        e.preventDefault();
        closeFocus();
        goTo(m, slots.length - 1);
      } else if (e.key === 'Escape') {
        if (closeFocus()) e.preventDefault();
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (closeFocus() || activeIndex < 0) return;
        if (settings.focusOnClick) openFocus(activeIndex);
      }
    };

    container.addEventListener('pointerdown', onPointerDown);
    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerup', onPointerUp);
    container.addEventListener('pointerleave', onPointerLeave);
    container.addEventListener('pointercancel', onPointerCancel);
    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('keydown', onKeyDown);
    container.addEventListener('focus', () => { hasFocus = true; });
    container.addEventListener('blur', () => { hasFocus = false; });
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) start();
    });
    window.addEventListener('pageshow', () => {
      navigating = false;
      focus.target = 0;
      focus.t = 0;
      focus.v = 0;
      focus.pending = -1;
      setFocusOpen(false);
      dirty = true;
      start();
    });

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        dirty = true;
        start();
      }
    }, { threshold: 0.08 });
    intersectionObserver.observe(container);

    resize();
  };
  initFlexCarousel();
})();
