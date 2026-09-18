const __nav = document.getElementById('nav');
if(__nav){
  window.addEventListener('scroll', () => { __nav.classList.toggle('scrolled', window.scrollY > 20); });
}
const __revealEls = document.querySelectorAll('.reveal');
const __io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); __io.unobserve(e.target); } });
}, { threshold: 0.12 });
__revealEls.forEach(el => __io.observe(el));
