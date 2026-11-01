const techStackTrack1 = [
    { name: "React", img: "assets/icons/stack/react.svg" },
    { name: "Next.js", img: "assets/icons/stack/nextjs.svg" },
    { name: "TypeScript", img: "assets/icons/stack/typescript.svg" },
    { name: "Tailwind CSS", img: "assets/icons/stack/tailwindcss.svg" },
    { name: "JavaScript (ES6+)", img: "assets/icons/stack/javascript.svg" },
    { name: "HTML5", img: "assets/icons/stack/html5.svg" },
    { name: "CSS3", img: "assets/icons/stack/css3.svg" },
    { name: "Bootstrap", img: "assets/icons/stack/bootstrap.svg" },
    { name: "Framer Motion", img: "assets/icons/stack/framermotion.svg" },
    { name: "Responsive Design", img: "assets/icons/stack/css3.svg" },
];

const techStackTrack2 = [
    { name: "Laravel", img: "assets/icons/stack/laravel.svg" },
    { name: "PHP", img: "assets/icons/stack/php.svg" },
    { name: "Inertia.js", img: "assets/icons/stack/react.svg" },
    { name: "MySQL", img: "assets/icons/stack/mysql.svg" },
    { name: "SQLite", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
    { name: "RESTful APIs", img: "assets/icons/stack/javascript.svg" },
    { name: "MVC Architecture", img: "assets/icons/stack/php.svg" },
    { name: "Git", img: "assets/icons/stack/git.svg" },
    { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Google Gemini AI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
    { name: "Vite", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
    { name: "Midtrans Snap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
    { name: "Postman", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Vercel", img: "assets/icons/stack/vercel.svg" },
    { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

function createTechCard({ name, img }) {
    const card = document.createElement("div");
    card.className = "tech-marquee-card";
    card.innerHTML = `
      <img src="${img}" alt="${name}" class="tech-marquee-icon" />
      <span class="tech-marquee-label">${name}</span>
    `;
    return card;
}

function startTechMarquee() {
    const track = document.getElementById("dark-marquee-track");
    const track2 = document.getElementById("dark-marquee-track-2");
    if (!track || !track2) return;

    const cards = techStackTrack1.map(createTechCard);
    const cards2 = techStackTrack2.map(createTechCard);

    for (let i = 0; i < 4; i++) {
        cards.forEach(card => track.appendChild(card.cloneNode(true)));
        cards2.forEach(card => track2.appendChild(card.cloneNode(true)));
    }

    const totalWidth1 = track.scrollWidth / 2 + 10;
    const totalWidth2 = track2.scrollWidth / 2 + 10;

    gsap.to(track, {
        x: -totalWidth1,
        duration: 40,
        ease: "linear",
        repeat: -1,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % totalWidth1)
        }
    });

    gsap.to(track2, {
        x: totalWidth2,
        duration: 45,
        ease: "linear",
        repeat: -1,
        modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % totalWidth2)
        }
    });
}

window.addEventListener("DOMContentLoaded", () => {
    startTechMarquee();
});
