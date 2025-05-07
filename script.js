// Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Animate highlights on load
window.addEventListener('DOMContentLoaded', () => {
  const highlights = document.querySelectorAll('.highlight');
  highlights.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(40px)';
    setTimeout(() => {
      el.style.transition = 'all 0.7s cubic-bezier(.77,0,.18,1)';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, 300 + i * 200);
  });
}); 