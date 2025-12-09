// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
});

// Dark mode toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form submission demo
const contactForm = document.querySelector('.contact-form');
if(contactForm){
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Thanks for contacting ProTech Agency! (demo)');
    contactForm.reset();
  });
});
