// main.js
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
      document.querySelector('.preloader').style.display = 'none';
    });
  
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('scrolled');
      } else {
        document.querySelector('.navbar').classList.remove('scrolled');
      }
    });
  
    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('active');
      } else {
        backToTopButton.classList.remove('active');
      }
    });
    
    backToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetElement.offsetTop - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Close mobile menu after click
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
          }
        }
      });
    });
  
    // Initialize AOS animation
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  
    // Testimonial carousel
    const testimonialCarousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
      interval: 5000,
      pause: 'hover'
    });
  
    // Hero carousel
    const heroCarousel = new bootstrap.Carousel(document.getElementById('heroCarousel'), {
      interval: 6000,
      pause: 'hover',
      ride: 'carousel'
    });
  });