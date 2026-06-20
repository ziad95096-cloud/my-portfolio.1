document.addEventListener('DOMContentLoaded', function () {

    // ----- 1. SMOOTH SCROLLING (for any anchor links) -----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ----- 2. FADE‑IN ANIMATION ON SCROLL (Intersection Observer) -----
    const cards = document.querySelectorAll('.service-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionally unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px'
    });

    cards.forEach(card => observer.observe(card));

    // Also reveal any cards that are already visible on load
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const winHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < winHeight - 100) {
            card.classList.add('visible');
            observer.unobserve(card);
        }
    });

    // ----- 3. CLICK HANDLERS FOR CONTACT LINKS -----
    const whatsappLink = document.getElementById('whatsapp-link');
    if (whatsappLink) {
        whatsappLink.addEventListener('click', function (e) {
            e.preventDefault();
            // Replace with your WhatsApp number (country code + number without +)
            const phone = '96893888353';
            window.open(`https://wa.me/${phone}`, '_blank');
        });
    }

    const instagramLink = document.getElementById('instagram-link');
    if (instagramLink) {
        instagramLink.addEventListener('click', function (e) {
            e.preventDefault();
            const username = 'qe9';
            window.open(`https://instagram.com/${username}`, '_blank');
        });
    }
});