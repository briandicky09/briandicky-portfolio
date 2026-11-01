gsap.set(".mouse-follower-sp", { marginLeft: 11, marginTop: 22, textContent: "loading" });

let xTo = gsap.quickTo(".mouse-follower-sp", "x", { duration: 0.1, ease: "power3" }),
  yTo = gsap.quickTo(".mouse-follower-sp", "y", { duration: 0.1, ease: "power3" });

let parallax_xTo = gsap.quickTo(".parallax-1 div, .parallax-2 div", "x", { duration: 0.6, ease: "power3" }),
  parallax_yTo = gsap.quickTo(".parallax-1 div, .parallax-2 div", "y", { duration: 0.6, ease: "power3" });

window.addEventListener("mousemove", (e) => {
  let xChange = window.innerWidth / 2 - e.clientX;
  let yChange = window.innerHeight / 2 - e.clientY;
  let xFactor = -40;
  let yFactor = -20;

  parallax_xTo(xChange / xFactor);
  parallax_yTo(yChange / yFactor);

  xTo(e.clientX);
  yTo(e.clientY);
});

// special mouse follower settings -------------------------------------------------------------------------------------
let h_loading = "loading";
let h_default = "explore";
let h_name = "brian dicky";
let h_about = "get to know me";
let h_experience = "career & training";
let h_projects = "selected work";
let h_contact_nav = "say hello";
let h_profile = "github profile";
let h_title_1 = "fullstack web developer";
let h_title_2 = "clean architecture & ai";
let h_title_3 = "scalable web systems";
let h_title_4 = "sidoarjo, east java";
let h_about_section = "about me";
let h_experience_section = "experience";
let h_education_section = "education";
let h_skills_section = "tech stack";
let h_projects_section = "selected work";
let h_project_1 = "pusatkos • laravel 12 & mysql";
let h_project_2 = "tanggapin • laravel 13 & react 19";
let h_project_3 = "olara • ai circular waste platform";
let h_project_4 = "vehicle tax • java swing & c++ qt";
let h_project_5 = "sipemma • pos & gemini ai";
let h_project_6 = "nalar • next.js ai study companion";
let h_contact_section = "get in touch";

function bindFollowerHover(id, enterText, leaveText = h_default) {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener("mouseenter", () => {
    gsap.to(".mouse-follower-sp", { textContent: enterText });
  });
  el.addEventListener("mouseleave", () => {
    gsap.to(".mouse-follower-sp", { textContent: leaveText });
  });
}

bindFollowerHover("navbar-brand", h_name);
bindFollowerHover("navbar-btn-1", h_about);
bindFollowerHover("navbar-btn-exp", h_experience);
bindFollowerHover("navbar-btn-2", h_projects);
bindFollowerHover("navbar-btn-contact", h_contact_nav);
bindFollowerHover("dp-div", h_profile);

bindFollowerHover("scrolling-text-1", h_title_1);
bindFollowerHover("scrolling-text-2", h_title_2);
bindFollowerHover("scrolling-text-3", h_title_3);
bindFollowerHover("scrolling-text-4", h_title_4);

bindFollowerHover("aboutme-section", h_about_section);
bindFollowerHover("experience-section", h_experience_section);
bindFollowerHover("education-section", h_education_section);
bindFollowerHover("projects-section", h_projects_section);
bindFollowerHover("skills-section", h_skills_section);
bindFollowerHover("contact-section", h_contact_section);

bindFollowerHover("project-1", h_project_1, h_projects_section);
bindFollowerHover("project-2", h_project_2, h_projects_section);
bindFollowerHover("project-3", h_project_3, h_projects_section);
bindFollowerHover("project-4", h_project_4, h_projects_section);
bindFollowerHover("project-5", h_project_5, h_projects_section);
bindFollowerHover("project-6", h_project_6, h_projects_section);

bindFollowerHover("github", "github");
bindFollowerHover("email", "email");
bindFollowerHover("linkedin", "linkedin");

const stc1 = document.getElementById("scrolling-text-container-1");
if (stc1) {
  stc1.addEventListener("mouseenter", () => {
    gsap.to(".parallax-1 div", { scale: 1.2, filter: "saturate(3)", duration: 1, ease: "power3" });
  });
  stc1.addEventListener("mouseleave", () => {
    gsap.to(".parallax-1 div", { scale: 1, filter: "saturate(2)", duration: 1, ease: "power3" });
  });
}

const stc2 = document.getElementById("scrolling-text-container-2");
if (stc2) {
  stc2.addEventListener("mouseenter", () => {
    gsap.to(".parallax-2 div", { scale: 1.2, filter: "saturate(2)", duration: 1, ease: "power3" });
  });
  stc2.addEventListener("mouseleave", () => {
    gsap.to(".parallax-2 div", { scale: 1, filter: "saturate(1.5)", duration: 1, ease: "power3" });
  });
}
