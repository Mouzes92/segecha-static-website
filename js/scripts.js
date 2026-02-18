document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    var mobileMenuButton = document.getElementById('mobile-menu-button');
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Scroll-triggered animations
    var fadeUpObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100');
                fadeUpObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.service-header, .animate-section, .service-content, .service-image, .about-content, .about-image, .team-content, .team-image, .testimonial-card, .stat-card, .advantage-card, .service-card, .animate-header, .detail-item').forEach(function(el) {
        if (el) fadeUpObserver.observe(el);
    });

    // Optional: quote form validation (for static quote page)
    var quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            var required = quoteForm.querySelectorAll('[required]');
            var valid = true;
            required.forEach(function(field) {
                if (!field.value.trim()) {
                    valid = false;
                    field.classList.add('border-red-500');
                } else {
                    field.classList.remove('border-red-500');
                }
            });
            if (!valid) e.preventDefault();
        });
    }
});
