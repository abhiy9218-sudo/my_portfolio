// Initialize EmailJS with your Public Key (replace with your actual key)
(function() {
    emailjs.init("Zinn5ZmBb8TYbPIlR"); // Replace with your EmailJS Public Key
})();

// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger menu toggle for mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Intersection Observer for fade-in animations
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// Real contact form submission using EmailJS
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Send the form data via EmailJS
    emailjs.sendForm('service_a5mca92', 'template_7ujrj47', this) // Replace with your Service ID and Template ID
        .then(function() {
            alert('Message sent successfully! Thank you for reaching out.');
            document.getElementById('contact-form').reset(); // Reset the form after success
        }, function(error) {
            alert('Failed to send message. Please try again or contact me directly.');
            console.log('EmailJS Error:', error); // Log error for debugging
        });
});
// Typing animation for name
const text = "Hi, I'm Abhishek Yadav"; // Customize with your name
let index = 0;
const speed = 100; // Typing speed in ms
const nameElement = document.querySelector('.text-content h1');

function typeWriter() {
    if (index < text.length) {
        nameElement.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
        index++;
        setTimeout(typeWriter, speed);
    } else {
        nameElement.innerHTML = text; // Remove cursor after typing
    }
}
window.addEventListener('load', typeWriter); // Start on page load
particlesJS('particles-js', {
    particles: {
        number: { value: 50 },
        color: { value: '#00d4ff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: { speed: 2 }
    }
});
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggle.innerHTML = document.body.classList.contains('light-mode') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});
window.addEventListener('load', () => document.body.classList.add('loaded'));