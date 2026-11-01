document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const name = document.getElementById("nameInput").value.trim();
        const email = document.getElementById("emailInput").value.trim();
        const message = document.getElementById("messageInput").value.trim();

        if (!name || !email || !message) {
            customAlert("Please fill all required fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            customAlert("Please enter a valid email address.");
            return;
        }

        const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.open(`mailto:briandicky09@gmail.com?subject=${subject}&body=${body}`, "_self");

        customAlert("Opening email client to send your message!");
        form.reset();
    });
});
