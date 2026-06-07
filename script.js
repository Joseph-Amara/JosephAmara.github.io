// 1. Dynamic Header (adds a slight shadow to the nav bar when you scroll down)
const header = document.getElementById('main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 2. Scroll Reveal Elements (makes projects fade and slide up as you scroll to them)
const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.1, // Triggers when 10% of the element is visible on the screen
    rootMargin: "0px 0px -50px 0px" 
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        // Add the 'active' class to trigger the CSS animation
        entry.target.classList.add('active');
        
        // Stop observing the element once it has been revealed
        observer.unobserve(entry.target); 
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});