// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.querySelector('.site-nav');
navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => siteNav.classList.remove('open'));
});

// Workshop gallery lightbox
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img alt="">';
document.body.appendChild(lightbox);
const lightboxImg = lightbox.querySelector('img');

document.querySelectorAll('.w-item img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
  });
});
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) lightbox.classList.remove('open');
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') lightbox.classList.remove('open');
});

// Quote form -> WhatsApp deep link
const quoteForm = document.getElementById('quoteForm');
quoteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(quoteForm);
  const name = data.get('name') || '';
  const company = data.get('company') || '';
  const phone = data.get('phone') || '';
  const cargo = data.get('cargo') || '';
  const message = data.get('message') || '';

  const lines = [
    `Quote request — Eneya Logistics`,
    `Name: ${name}`,
    company ? `Company: ${company}` : null,
    `Phone: ${phone}`,
    `Cargo type: ${cargo}`,
    message ? `Details: ${message}` : null
  ].filter(Boolean).join('\n');

  const url = `https://wa.me/260977608157?text=${encodeURIComponent(lines)}`;
  window.open(url, '_blank', 'noopener');
});
