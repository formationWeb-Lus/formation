// année dans footer
document.querySelectorAll('[id^=year]').forEach(el => el.textContent = new Date().getFullYear());

// SIMPLE reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) e.target.classList.add('in-view');
  });
}, {threshold: 0.12});
reveals.forEach(r => obs.observe(r));

// Parallax elements (data-speed)
const parallaxEls = document.querySelectorAll('.parallax');
window.addEventListener('scroll', () => {
  const top = window.scrollY;
  parallaxEls.forEach(el => {
    const speed = parseFloat(el.dataset.speed || 0.12);
    el.style.transform = `translateY(${top * speed}px)`;
  });
});

// Badge floating parallax (subtle)
document.querySelectorAll('.floating').forEach(el => {
  el.style.transition = 'transform .25s linear';
  window.addEventListener('mousemove', (ev) => {
    const r = el.getBoundingClientRect();
    const dx = (ev.clientX - (r.left + r.width/2)) / 200;
    const dy = (ev.clientY - (r.top + r.height/2)) / 200;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  });
});

// Modal controls (maquette)
function openQuote(){ 
  const modal = document.getElementById('modal');
  if(!modal) return alert('Modal non disponible sur cette page');
  modal.setAttribute('aria-hidden','false');
}
function closeModal(){
  const modal = document.getElementById('modal');
  if(!modal) return;
  modal.setAttribute('aria-hidden','true');
}
function submitForm(e){
  e.preventDefault();
  alert('Maquette : formulaire soumis (pas d\'envoi réel).');
  // reset fields if present
  if(e.target && e.target.reset) e.target.reset();
}

// Accessibility: esc close modal
window.addEventListener('keydown', (ev) => {
  if(ev.key === 'Escape') closeModal();
});

// Simple nav highlight (optional)
const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach(a => {
  if(a.href === location.href || location.href.includes(a.getAttribute('href'))) {
    a.classList.add('active');
  }
});
