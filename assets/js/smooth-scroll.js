// Ensure page starts at top and handle smooth scrolling with navbar offset
document.addEventListener('DOMContentLoaded', function() {
  // Scroll to top on page load/refresh
  window.scrollTo(0, 0);
  
  // Handle anchor link clicks with proper offset for fixed navbar
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#home') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navbarHeight = window.innerWidth <= 768 ? 60 : 70;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - navbarHeight - 5; // Minimal spacing
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Handle hash in URL on page load
  if (window.location.hash) {
    setTimeout(function() {
      const hash = window.location.hash;
      const target = document.querySelector(hash);
      if (target) {
        const navbarHeight = window.innerWidth <= 768 ? 60 : 70;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - navbarHeight - 5; // Minimal spacing
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  }
});

