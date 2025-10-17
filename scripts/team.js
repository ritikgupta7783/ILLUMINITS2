document.addEventListener('DOMContentLoaded', function() {
    // =======================
    // Mobile menu toggle
    // =======================
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // =======================
    // Batch selection functionality
    // =======================
    const batchTabs = document.querySelectorAll('.batch-tab');
    const teamSections = document.querySelectorAll('.team-section');
    
    batchTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const batch = this.getAttribute('data-batch');
            
            // Remove active class from all tabs
            batchTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all team sections
            teamSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected batch sections
            document.getElementById(`core-${batch}`).classList.add('active');
            document.getElementById(`tech-${batch}`).classList.add('active');
            
            // Trigger animations for the new content
            animateTeamMembers();
        });
    });

    // =======================
    // Animation for team members
    // =======================
    function animateTeamMembers() {
        const teamCards = document.querySelectorAll('.team-card');
        
        teamCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    // =======================
    // Smooth scrolling for nav links
    // =======================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.length > 1) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // =======================
    // Animation on scroll (fade-in)
    // =======================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Initialize animations
    animateTeamMembers();
});