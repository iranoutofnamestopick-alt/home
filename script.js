// JavaScript for Ian's Introduction Page

document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const toggleIcon = document.querySelector('.toggle-icon');
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark-mode');
        toggleIcon.textContent = '☀️';
    }
    
    // Toggle dark mode
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            toggleIcon.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleIcon.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });

    // Add animation to profile image
    const profileImage = document.querySelector('.profile-image');
    profileImage.addEventListener('click', function() {
        this.classList.toggle('pulse');
        setTimeout(() => {
            this.classList.remove('pulse');
        }, 1000);
    });

    // Add current year to footer
    const currentYear = new Date().getFullYear();
    document.querySelector('footer p').textContent = `© ${currentYear} Ian. All rights reserved.`;

    // Add skill tags dynamically
    const additionalSkills = ['MongoDB', 'Express', 'Python', 'Figma'];
    const skillsContainer = document.querySelector('.skills');
    
    additionalSkills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        skillTag.style.opacity = '0';
        skillsContainer.appendChild(skillTag);
        
        // Fade in effect
        setTimeout(() => {
            skillTag.style.transition = 'opacity 0.5s ease';
            skillTag.style.opacity = '1';
        }, 100);
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add a simple typing effect to the About Me section
function typeEffect() {
    const text = "Hello! I'm Ian, a passionate web developer and designer with a keen eye for detail and a love for creating beautiful, functional websites.";
    const aboutMeP = document.querySelector('section:nth-child(2) p:first-child');
    
    // Only run if we haven't already
    if (aboutMeP && !aboutMeP.classList.contains('typed')) {
        aboutMeP.textContent = '';
        aboutMeP.classList.add('typed');
        
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                aboutMeP.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 30);
    }
}

// Run typing effect when About Me section is in view
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', function() {
    const aboutMeSection = document.querySelector('section:nth-child(2)');
    if (aboutMeSection && isInViewport(aboutMeSection)) {
        typeEffect();
    }
});

// Check on initial load too
window.addEventListener('load', function() {
    const aboutMeSection = document.querySelector('section:nth-child(2)');
    if (aboutMeSection && isInViewport(aboutMeSection)) {
        typeEffect();
    }
});