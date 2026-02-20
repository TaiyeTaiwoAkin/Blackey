// ========================================
// BLACKEY — Homepage Interactivity
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    // ---------- Navbar scroll effect + Hero parallax ----------
    const navbar = document.getElementById('navbar');
    const heroImg = document.getElementById('heroImg');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        navbar.classList.toggle('scrolled', scrollY > 20);

        // Parallax: move hero image at 40% of scroll speed
        if (heroImg && scrollY < window.innerHeight) {
            heroImg.style.transform = `translateY(${scrollY * 0.4}px)`;
        }
    });

    // ---------- Mobile nav toggle ----------
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    // Close mobile nav when a link is clicked
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    // ---------- Search tab switching ----------
    const searchTabs = document.querySelectorAll('.search-tab');
    const searchForms = document.querySelectorAll('.search-form');

    searchTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;

            searchTabs.forEach(t => t.classList.remove('active'));
            searchForms.forEach(f => f.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(`form-${target}`).classList.add('active');
        });
    });

    // ---------- Horizontal scroll controls ----------
    document.querySelectorAll('.scroll-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const track = document.getElementById(btn.dataset.target);
            const scrollAmount = 300;
            const direction = btn.dataset.dir === 'left' ? -scrollAmount : scrollAmount;
            track.scrollBy({ left: direction, behavior: 'smooth' });
        });
    });

    // ---------- Swap button (flights) ----------
    document.querySelectorAll('.swap-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const row = btn.closest('.form-row');
            const inputs = row.querySelectorAll('input[type="text"]');
            if (inputs.length >= 2) {
                const temp = inputs[0].value;
                inputs[0].value = inputs[1].value;
                inputs[1].value = temp;
            }
        });
    });

    // ---------- Smooth reveal on scroll ----------
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all cards and sections for reveal animation
    const revealElements = document.querySelectorAll(
        '.dest-card, .deal-card, .category-card, .value-card, .exp-card'
    );
    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // ---------- Newsletter form ----------
    const ctaForm = document.querySelector('.cta-form');
    if (ctaForm) {
        ctaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = ctaForm.querySelector('input[type="email"]');
            if (input.value) {
                input.value = '';
                const btn = ctaForm.querySelector('button');
                const originalText = btn.textContent;
                btn.textContent = 'Subscribed!';
                btn.style.background = '#2E7D32';
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                }, 2500);
            }
        });
    }

    // ---------- Set default dates ----------
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);

    const formatDate = (d) => d.toISOString().split('T')[0];

    document.querySelectorAll('input[type="date"]').forEach((input, i) => {
        if (i % 2 === 0) {
            input.value = formatDate(today);
        } else {
            input.value = formatDate(nextWeek);
        }
    });
});

// ---------- CSS for scroll reveal (injected) ----------
const style = document.createElement('style');
style.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(24px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .reveal.revealed {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
