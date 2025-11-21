<<<<<<< HEAD
/* 
   Theme: Futuristic Glassmorphism
   Author: Antigravity
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Hamburger Animation
        hamburger.classList.toggle('toggle');
        
        // Animate Links
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    // Close mobile menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
            links.forEach(l => l.style.animation = '');
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Elements to animate
    const animateElements = document.querySelectorAll('.section-title, .about-text, .stat-card, .skill-category, .timeline-item, .project-card, .achievement-card, .contact-content');
    
    animateElements.forEach(el => {
        el.classList.add('fade-element');
        observer.observe(el);
    });

    // Typing Effect for Hero
    const heroSpan = document.querySelector('.hero-title span');
    if(heroSpan) {
        const text = heroSpan.innerText;
        heroSpan.innerText = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroSpan.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing after a slight delay
        setTimeout(typeWriter, 1000);
    }
});
=======
/* 
   Theme: Futuristic Glassmorphism
   Author: Antigravity
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Hamburger Animation
        hamburger.classList.toggle('toggle');
        
        // Animate Links
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    // Close mobile menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
            links.forEach(l => l.style.animation = '');
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Elements to animate
    const animateElements = document.querySelectorAll('.section-title, .about-text, .stat-card, .skill-category, .timeline-item, .project-card, .achievement-card, .contact-content');
    
    animateElements.forEach(el => {
        el.classList.add('fade-element');
        observer.observe(el);
    });

    // Typing Effect for Hero
    const heroSpan = document.querySelector('.hero-title span');
    if(heroSpan) {
        const text = heroSpan.innerText;
        heroSpan.innerText = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroSpan.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing after a slight delay
        setTimeout(typeWriter, 1000);
    }
});
>>>>>>> c05511acc97e0442f25024939121e39939eb56a1
