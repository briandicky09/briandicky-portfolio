gsap.registerPlugin(ScrollTrigger);

const heroImages = gsap.utils.toArray('img');
const loader = document.querySelector('.hero-section .loader-progress');
const updateProgress = (instance) => {
  if (loader && heroImages.length > 0) {
    loader.textContent = `${Math.round(instance.progressedCount * 100 / heroImages.length)}%`;
  }
};

const main = () => {
  document.body.style.overflow = 'auto';

  gsap.to(document.querySelector('.hero-section .loader'), { autoAlpha: 0, duration: 0.5 });
  gsap.to('.mouse-follower-sp', { textContent: 'explore' });

  gsap.utils.toArray('.hero-section section').forEach((section, index) => {
    const w = section.querySelector('.hero-section .wrapper');
    if (!w) return;
    const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    gsap.fromTo(w, { x }, {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        start: '-=600px bottom',
        end: 'bottom top',
        scrub: 0.5,
        markers: false
      }
    });
  });
};

imagesLoaded(heroImages).on('progress', updateProgress).on('always', main);
