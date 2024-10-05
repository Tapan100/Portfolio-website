// Smooth Scrolling for Navigation Links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation for Contact Form
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.querySelector('input[placeholder="Your Name"]');
    let email = document.querySelector('input[placeholder="Your Email"]');
    let message = document.querySelector('textarea[placeholder="Your Message"]');
    let valid = true;

    if (name.value.trim() === '') {
        alert('Please enter your name.');
        name.focus();
        valid = false;
    } else if (email.value.trim() === '') {
        alert('Please enter your email.');
        email.focus();
        valid = false;
    } else if (!validateEmail(email.value)) {
        alert('Please enter a valid email address.');
        email.focus();
        valid = false;
    } else if (message.value.trim() === '') {
        alert('Please enter your message.');
        message.focus();
        valid = false;
    }

    if (valid) {
        alert('Message sent successfully!');
        this.reset(); // Clear the form
    }
});

// Email Validation Function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Dynamic Year in Footer
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear();
    document.querySelector('footer p').appendChild(yearSpan);
});
