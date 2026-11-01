const rotateAmplitude = 2; // How much the card tilts
const scaleOnHover = 1.01; // How much the card scales on hover

const brianProjectsData = {
    "project-1": {
        title: "PUSATKOS",
        category: "Web Application",
        year: "2026",
        role: "Fullstack Web Developer",
        image: "assets/images/project-previews/pusatkos-cover-landscape.png?v=4",
        repo: "https://github.com/briandicky09/PUSATKOS",
        summary: "Integrated boarding house discovery and rental management platform with multi-role workflows.",
        stack: ["Laravel 12", "PHP 8.2", "Blade", "Bootstrap", "MySQL"],
        star: {
            situation: "Boarding house seekers and property owners needed a centralized platform to discover listings, manage rooms, and handle digital bookings.",
            task: "Architect and build a fullstack web application supporting three core roles: public visitors, kos owners, and customers.",
            action: "Engineered the platform in Laravel 12, PHP 8.2, Blade, Bootstrap, and MySQL with modular MVC architecture, role-based routing, property CRUD, owner analytics dashboards, and digital booking invoices.",
            result: "Delivered an integrated multi-role web platform streamlining kos discovery, property listing management, and customer room bookings."
        }
    },
    "project-2": {
        title: "Tanggapin",
        category: "Web Application",
        year: "2026",
        role: "Fullstack Web Developer",
        image: "assets/images/project-previews/tanggapin-cover-landscape.png?v=4",
        repo: "https://github.com/briandicky09/tanggapin",
        summary: "School operations, early risk detection, and student case management platform.",
        stack: ["Laravel 13", "React 19", "Inertia.js", "TypeScript", "Tailwind CSS", "Radix UI", "PHP 8.3"],
        star: {
            situation: "Schools needed a connected operational system uniting student records, early warning risk detection, counseling workflows, parent communication, and payment tracking.",
            task: "Develop a multi-role school management platform serving Super Admin, Principal, BK Counselor, Homeroom Teacher, Cashier, and Parents.",
            action: "Built the fullstack system with Laravel 13, React 19, Inertia.js, TypeScript, and Tailwind CSS featuring automated academic and attendance risk alerts, incident checklists, and BOS financial validation.",
            result: "Unified school administration, student counseling, parent communication, and financial validation into a single decision-making ecosystem."
        }
    },
    "project-3": {
        title: "OLARA",
        category: "Web Application",
        year: "2026",
        role: "Fullstack Web Developer",
        image: "assets/images/project-previews/olara-cover-landscape.png?v=4",
        repo: "https://github.com/briandicky09/olara",
        summary: "Smart circular waste management and eco-wellness platform with AI material scanning.",
        stack: ["Laravel 13", "PHP 8.3", "Tailwind CSS v4", "Vite", "Midtrans Snap", "SQLite / MySQL"],
        star: {
            situation: "Household recycling and waste bank operations lacked automated material valuation, doorstep pickup coordination, and digital reward incentives.",
            task: "Build a circular waste management platform integrating AI waste scanning, pickup logistics, a circular marketplace, and e-wallet rewards.",
            action: "Developed the platform in Laravel 13 and Tailwind CSS v4 with an AI recyclable scanner, real-time market value estimation, fleet scheduling (Eco Bike, Tosa, Van Box), Midtrans Snap payments, and carbon analytics.",
            result: "Created an end-to-end circular waste platform connecting AI material detection, doorstep pickup scheduling, and instant eco-points rewards."
        }
    },
    "project-4": {
        title: "Vehicle Tax",
        category: "Desktop App",
        year: "2026",
        role: "Software Developer",
        image: "assets/images/project-previews/vehicle-tax-cover-landscape.png?v=4",
        repo: "https://github.com/briandicky09/vehicle-tax-calculator",
        summary: "Object-oriented desktop application for PKB and SWDKLLJ vehicle tax calculation.",
        stack: ["Java", "Swing", "C++", "Qt Creator", "Qt Widgets"],
        star: {
            situation: "Manual calculation of PKB and SWDKLLJ vehicle taxes and tracking taxpayer records is error-prone and slow.",
            task: "Design and build an object-oriented desktop application for automated tax calculation and owner/vehicle data management.",
            action: "Implemented the application using Java Swing and C++ Qt with automatic PKB/SWDKLLJ calculation breakdowns, transaction history, search/edit/delete CRUD workflows, and file-based persistence.",
            result: "Produced a desktop tax management tool delivering accurate tax breakdowns and persistent vehicle transaction records."
        }
    },
    "project-5": {
        title: "SIPEMMA",
        category: "Web Application",
        year: "2026",
        role: "Fullstack Web Developer",
        image: "assets/images/project-previews/sipemma-cover-landscape.png?v=4",
        repo: "https://github.com/briandicky09/food-order",
        summary: "Modern restaurant Point of Sale (POS) and operations web app with Gemini AI analytics.",
        stack: ["Laravel 13", "PHP 8.3", "Tailwind CSS v4", "Flowbite", "Google Gemini AI", "SQLite / MySQL", "Vite"],
        star: {
            situation: "Restaurant operations required a unified digital POS system combining live cashier checkout, inventory tracking, and actionable business insights.",
            task: "Develop a modern POS and restaurant management platform with integrated AI business analytics.",
            action: "Built the platform in Laravel 13, PHP 8.3, and Tailwind CSS v4 with a real-time cashier cart, Dine-In/Take-Away workflows, 10% PB1 tax calculation, receipt printing, menu/inventory CRUD, and a Google Gemini AI assistant.",
            result: "Delivered an end-to-end restaurant operations platform uniting real-time checkout with AI-driven culinary sales and promotional analysis."
        }
    },
    "project-6": {
        title: "Nalar",
        category: "Web Application",
        year: "2026",
        role: "Frontend / Fullstack Developer",
        image: "assets/images/project-previews/nalar-cover-landscape.png?v=4",
        repo: "https://github.com/briandicky09/nalar-ai-learning-companion",
        summary: "AI-powered personalized academic learning companion for university students.",
        stack: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"],
        star: {
            situation: "University students often struggle to digest dense lecture PDFs and pinpoint gaps in their conceptual understanding.",
            task: "Create an AI-powered learning companion that extracts academic PDFs and delivers adaptive tutoring.",
            action: "Built the web application with Next.js (App Router), React 19, TypeScript, Tailwind CSS, and Framer Motion featuring an interactive study workspace, PDF extraction, weakness detection, and adaptive tutor guidance.",
            result: "Delivered an interactive academic workspace that transforms static lecture materials into personalized, guided study sessions."
        }
    }
};

function openProjectStarModal(projectId) {
    const data = brianProjectsData[projectId];
    if (!data) return;

    const modalEl = document.getElementById("projectStarModal");
    if (!modalEl) return;

    document.getElementById("starModalTitle").textContent = data.title;
    document.getElementById("starModalMeta").textContent = `${data.category} ● ${data.year} ● ${data.role}`;
    const imgEl = document.getElementById("starModalImg");
    imgEl.src = data.image;
    imgEl.alt = data.title;

    document.getElementById("starModalSituation").textContent = data.star.situation;
    document.getElementById("starModalTask").textContent = data.star.task;
    document.getElementById("starModalAction").textContent = data.star.action;
    document.getElementById("starModalResult").textContent = data.star.result;

    const stackContainer = document.getElementById("starModalStack");
    stackContainer.innerHTML = "";
    data.stack.forEach(tech => {
        const span = document.createElement("span");
        span.className = "brian-tag";
        span.textContent = tech;
        stackContainer.appendChild(span);
    });

    const repoBtn = document.getElementById("starModalRepoBtn");
    repoBtn.href = data.repo;

    const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
    bsModal.show();
}

window.openProjectStarModal = openProjectStarModal;

// Loop through all card containers
document.querySelectorAll('.gx-tilted-card-container').forEach(container => {
    const inner = container.querySelector('.gx-tilted-card-inner');
    const caption = container.querySelector('.gx-tilted-card-caption');
    let lastY = 0;

    if (!inner) return;

    inner.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        openProjectStarModal(inner.id);
    });

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotateX = -(offsetY / (rect.height / 2)) * rotateAmplitude;
        const rotateY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        gsap.to(inner, {
            duration: 0.5,
            rotateX: rotateX,
            rotateY: rotateY,
            scale: scaleOnHover,
            ease: "power3.out",
            transformPerspective: 800,
            transformOrigin: "center",
        });

        lastY = offsetY;
    });

    container.addEventListener('mouseleave', () => {
        gsap.to(inner, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 0.5,
            ease: "power3.out"
        });

        if (caption) {
            gsap.to(caption, {
                opacity: 0,
                rotate: 0,
                duration: 0.3,
                ease: "power1.out"
            });
        }
    });

    container.addEventListener('mouseenter', () => {
        lastY = 0;
    });
});
