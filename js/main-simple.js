// Flying Dust Market Garden - Simplified JavaScript (No fade issues)

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    function highlightNavigation() {
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.style.borderColor = '#ff990a';
                    } else {
                        link.style.borderColor = 'transparent';
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // Simple fade-in on scroll (without disappearing bug)
    const fadeElements = document.querySelectorAll('.fade-on-scroll');

    if (fadeElements.length > 0) {
        const fadeInObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(element => {
            fadeInObserver.observe(element);
        });
    }

    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i data-lucide="arrow-up"></i>';
    backToTopButton.className = 'fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-40 transition-all duration-300';
    backToTopButton.style.backgroundColor = '#ff990a';
    backToTopButton.style.color = 'white';
    backToTopButton.style.opacity = '0';
    backToTopButton.style.pointerEvents = 'none';
    backToTopButton.setAttribute('aria-label', 'Back to top');

    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.pointerEvents = 'auto';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.pointerEvents = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Re-initialize icons for dynamically added elements
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 100);

    // Mobile menu close on link click
    if (typeof Alpine !== 'undefined') {
        document.querySelectorAll('[x-show="mobileMenuOpen"] a[href^="#"]').forEach(link => {
            link.addEventListener('click', () => {
                // This will trigger Alpine to close the menu
                const event = new CustomEvent('close-mobile-menu');
                document.dispatchEvent(event);
            });
        });
    }

    console.log('Flying Dust Market Garden website initialized successfully!');
});