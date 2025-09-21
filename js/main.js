// Flying Dust Market Garden - Main JavaScript

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
                    link.classList.remove('border-orange-500');
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

    // Fade in animation on scroll - FIXED
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ensure opacity is set to 1 when adding fade-in class
                entry.target.style.opacity = '1';
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Only observe sections and articles that don't have x-data or x-show attributes (Alpine.js elements)
    document.querySelectorAll('section:not([x-show]), article:not([x-show])').forEach(el => {
        // Don't hide elements that are controlled by Alpine.js
        if (!el.hasAttribute('x-data') && !el.hasAttribute('x-show')) {
            el.style.opacity = '0';
            el.style.transition = 'opacity 0.6s ease-in-out';
            observer.observe(el);
        }
    });

    // Mobile menu close on link click
    const mobileMenuLinks = document.querySelectorAll('.sm\\:hidden a[href^="#"]');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (typeof Alpine !== 'undefined') {
                Alpine.store('mobileMenuOpen', false);
            }
        });
    });

    // Form validation (if contact form is added)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('border-red-500');
                } else {
                    field.classList.remove('border-red-500');
                }
            });

            if (isValid) {
                // Show success message
                showNotification('Thank you for your message! We will get back to you soon.', 'success');
                form.reset();
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    });

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-20 right-4 p-4 rounded-lg shadow-lg z-50 transform transition-all duration-500 ${
            type === 'success' ? 'bg-green-500' :
            type === 'error' ? 'bg-red-500' :
            'bg-blue-500'
        } text-white`;
        notification.textContent = message;
        notification.style.transform = 'translateX(400px)';

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                notification.remove();
            }, 500);
        }, 3000);
    }

    // Lazy loading for images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    // Add loading state to buttons
    document.querySelectorAll('button, .btn').forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('btn-loading')) return;

            // Don't add loading to navigation buttons
            if (this.getAttribute('type') === 'button' && !this.hasAttribute('data-no-loading')) {
                this.classList.add('btn-loading');
                const originalContent = this.innerHTML;
                this.innerHTML = '<span class="loader"></span> Loading...';

                // Reset after 2 seconds (for demo)
                setTimeout(() => {
                    this.innerHTML = originalContent;
                    this.classList.remove('btn-loading');
                    if (typeof lucide !== 'undefined') {
                        lucide.createIcons();
                    }
                }, 2000);
            }
        });
    });

    // Back to top button
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i data-lucide="arrow-up"></i>';
    backToTopButton.className = 'fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-40 transition-all duration-300 opacity-0 pointer-events-none';
    backToTopButton.style.backgroundColor = '#ff990a';
    backToTopButton.style.color = 'white';

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

    // Initialize icons for back to top button
    setTimeout(() => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 100);

    console.log('Flying Dust Market Garden website initialized successfully!');
});