// ========================================
// AUL - Almaty Urban Lab
// Main JavaScript File
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ========================================
    // Mobile Navigation Toggle
    // ========================================
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    
    // Toggle mobile menu
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
    
    
    // ========================================
    // Smooth Scrolling for Navigation Links
    // ========================================
    navItems.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Only handle internal links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const navHeight = document.querySelector('.nav').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    
    // ========================================
    // Scroll-based Navigation Background
    // ========================================
    const nav = document.querySelector('.nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add shadow on scroll
        if (currentScroll > 100) {
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    
    // ========================================
    // Intersection Observer for Fade-in Animations
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply fade-in animation to sections
    const animatedElements = document.querySelectorAll(
        '.about, .project-item, .approach-item, .team-member, .contact'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
    
    
    // ========================================
    // Project Item Hover Effects
    // ========================================
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        const projectInfo = item.querySelector('.project-info');
        const projectImage = item.querySelector('.project-image');
        
        item.addEventListener('mouseenter', () => {
            projectInfo.style.backgroundColor = 'var(--graphite)';
        });
        
        item.addEventListener('mouseleave', () => {
            projectInfo.style.backgroundColor = 'var(--concrete)';
        });
    });
    
    
    // ========================================
    // Parallax Effect for Hero Section
    // ========================================
    const heroImage = document.querySelector('.hero-image img');
    
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (scrolled < window.innerHeight) {
                heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        });
    }
    
    
    // ========================================
    // Active Navigation Link on Scroll
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.style.color = 'var(--graphite)';
                    navLink.style.fontWeight = '600';
                } else {
                    navLink.style.color = 'var(--concrete)';
                    navLink.style.fontWeight = '400';
                }
            }
        });
    });
    
    
    // ========================================
    // Lazy Loading for Images
    // ========================================
    const images = document.querySelectorAll('img[src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.6s ease';
                
                img.onload = () => {
                    img.style.opacity = '1';
                };
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    
    // ========================================
    // Contact Link Interactions
    // ========================================
    const contactLinks = document.querySelectorAll('.contact-link');
    
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    
    // ========================================
    // Team Member Hover Effects
    // ========================================
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        const photo = member.querySelector('.team-photo');
        
        member.addEventListener('mouseenter', () => {
            photo.style.transform = 'scale(1.05)';
            photo.style.transition = 'transform 0.4s ease';
        });
        
        member.addEventListener('mouseleave', () => {
            photo.style.transform = 'scale(1)';
        });
    });
    
    
    // ========================================
    // Smooth Page Load Animation
    // ========================================
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
    
    
    // ========================================
    // Approach Items Sequential Animation
    // ========================================
    const approachItems = document.querySelectorAll('.approach-item');
    
    const approachObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.2 });
    
    approachItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        approachObserver.observe(item);
    });
    
    
    // ========================================
    // Console Welcome Message
    // ========================================
    console.log('%c AUL — Almaty Urban Lab ', 'background: #121212; color: #D9CBB3; font-size: 16px; padding: 10px;');
    console.log('%c Архитектура × Урбанизм × Исследования ', 'background: #2C2C2C; color: #F2F2F2; font-size: 12px; padding: 5px;');
    
});


// ========================================
// Performance Optimization
// ========================================

// Debounce function for scroll events
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll events if needed
window.addEventListener('scroll', debounce(() => {
    // Optimized scroll handler
}));
