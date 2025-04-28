

    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });
    
    // Form Submission
    const registrationForm = document.getElementById('registration-form');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const course = document.getElementById('course').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !phone || !course) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Phone validation (simple check for Moroccan numbers)
            const phoneRegex = /^(\+212|0)[5-7]\d{8}$/;
            if (!phoneRegex.test(phone)) {
                alert('Please enter a valid Moroccan phone number (e.g., +212612345678 or 0612345678)');
                return;
            }
            
            // Here you would typically send this data to a server using fetch or AJAX
            // For demonstration, we'll just show an alert
            alert(`Thank you, ${name}!\n\nYour pre-registration for the ${course} package has been received.\n\nWe will contact you at:\nEmail: ${email}\nPhone: ${phone}\n\nwithin 24 hours to confirm your enrollment.`);
            
            // Reset the form
            registrationForm.reset();
            
            // Scroll to top after submission
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Sticky Header on Scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
    
    // Animation on Scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature-card, .service-card, .pricing-card, .testimonial-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animated elements
    document.addEventListener('DOMContentLoaded', function() {
        const animatedElements = document.querySelectorAll('.feature-card, .service-card, .pricing-card, .testimonial-card');
        animatedElements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.5s ease';
        });
        
        // Run once on load
        animateOnScroll();
    });
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Touch scrolling for mobile
document.addEventListener('DOMContentLoaded', function() {
    const instructorsGrid = document.querySelector('.instructors-grid');
    let isDown = false;
    let startX;
    let scrollLeft;
    
    // Mouse/touch events for dragging
    instructorsGrid.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - instructorsGrid.offsetLeft;
        scrollLeft = instructorsGrid.scrollLeft;
    });
    
    instructorsGrid.addEventListener('mouseleave', () => {
        isDown = false;
    });
    
    instructorsGrid.addEventListener('mouseup', () => {
        isDown = false;
    });
    
    instructorsGrid.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - instructorsGrid.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        instructorsGrid.scrollLeft = scrollLeft - walk;
    });
    
    // Touch events for mobile
    instructorsGrid.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - instructorsGrid.offsetLeft;
        scrollLeft = instructorsGrid.scrollLeft;
    }, {passive: true});
    
    instructorsGrid.addEventListener('touchend', () => {
        isDown = false;
    });
    
    instructorsGrid.addEventListener('touchmove', (e) => {
        if(!isDown) return;
        const x = e.touches[0].pageX - instructorsGrid.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        instructorsGrid.scrollLeft = scrollLeft - walk;
    }, {passive: true});
});

