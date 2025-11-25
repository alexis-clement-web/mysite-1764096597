// Main JavaScript file for Élégance Immobilière

document.addEventListener('DOMContentLoaded', function() {
    // Initialize feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // Schedule visit modal functionality
    const scheduleButtons = document.querySelectorAll('.schedule-visit');
    const scheduleModal = document.getElementById('scheduleModal');
    const modalClose = document.querySelector('.modal-close');
    const modalContent = scheduleModal.querySelector('.transform');
    const visitForm = document.getElementById('visitForm');

    // Open modal
    scheduleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openModal();
        });
    });

    // Close modal
    modalClose.addEventListener('click', closeModal);
    scheduleModal.addEventListener('click', function(e) {
        if (e.target === scheduleModal) {
            closeModal();
        }
    });

    // Form submission
    visitForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(visitForm);
        const property = formData.get('property');
        
        // Show success message
        showSuccessMessage('Votre demande de visite pour ' + property + ' a été envoyée. Nous vous contacterons dans les plus brefs délais.');
        closeModal();
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('luxury-hero');
        if (hero) {
            const parallax = scrolled * 0.5;
            hero.style.transform = `translateY(${parallax}px)`;
        }
    });

    // Luxury hover effects
    initLuxuryHoverEffects();
});

function openModal() {
    const scheduleModal = document.getElementById('scheduleModal');
    const modalContent = scheduleModal.querySelector('.transform');
    
    scheduleModal.classList.remove('hidden');
    scheduleModal.classList.add('flex');
    
    // Trigger animation
    setTimeout(() => {
        scheduleModal.classList.add('show');
    }, 10);
}

function closeModal() {
    const scheduleModal = document.getElementById('scheduleModal');
    const modalContent = scheduleModal.querySelector('.transform');
    
    scheduleModal.classList.remove('show');
    
    setTimeout(() => {
        scheduleModal.classList.add('hidden');
        scheduleModal.classList.remove('flex');
        visitForm.reset();
    }, 300);
}

function showSuccessMessage(message) {
    // Create toast notification
    const toast = document.createElement('div');
    toast.className = 'fixed top-6 right-6 bg-white border border-gray-300 px-6 py-4 rounded-sm shadow-lg transform translate-x-full transition-transform duration-500 z-50';
    toast.innerHTML = `
        <div class="flex items-center">
            <i data-feather="check-circle" class="text-green-600 mr-3"></i>
            <p class="text-gray-800">${message}</p>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 10);
    
    // Replace feather icon
    setTimeout(() => {
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }, 50);
    
    // Remove after delay
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 500);
    }, 4000);
}

function initLuxuryHoverEffects() {
    // Add luxury hover effects to property cards
    const propertyCards = document.querySelectorAll('.property-card');
    
    propertyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Performance optimization
let ticking = false;

function onScroll() {
    if (!ticking) {
        requestAnimationFrame(function() {
            // Update any scroll-dependent elements
            ticking = false;
        });
        ticking = true;
    }
}

window.addEventListener('scroll', onScroll, { passive: true });

// Form validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(phone);
}