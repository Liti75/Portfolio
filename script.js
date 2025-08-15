document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Dark Mode Toggle Logic
    const themeToggleBtn = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        body.classList.add('dark-mode');
        themeToggleBtn.innerHTML = '☀️';
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.innerHTML = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleBtn.innerHTML = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });

    // Contact form submission logic
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", async function (e) {
            e.preventDefault();

            const formData = new FormData(form);

           
            const scriptURL = "https://script.google.com/macros/s/AKfycbyfCS-r85vn_-_nzCEF6sz5OGXo2NNrp0Lx02BWSquynIebRwCxZAYuBtZHpDemoC9exQ/exec";

            // Show "Sending..." popup instantly
            const sendingModal = new bootstrap.Modal(document.getElementById("sendingModal"));
            sendingModal.show();

            try {
                const response = await fetch(scriptURL, {
                    method: "POST",
                    body: formData
                });

                sendingModal.hide(); // Hide "Sending..." once done

                if (response.ok) {
                    form.reset();
                    const modal = new bootstrap.Modal(document.getElementById("successModal"));
                    modal.show();
                } else {
                    alert("Oops! Something went wrong. Please try again later.");
                }
            } catch (error) {
                sendingModal.hide();
                alert("Failed to send message: " + error.message);
            }
        });
    }
});
