// Menú móvil
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', false);
}));

// Año del pie de página
document.getElementById('year').textContent = new Date().getFullYear();

// Validación básica del formulario de contacto
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
form.addEventListener('submit', e => {
  e.preventDefault();
  const { nombre, correo, mensaje } = form.elements;
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.value);
  if (!nombre.value.trim() || !emailOk || !mensaje.value.trim()) {
    msg.className = 'form__msg error';
    msg.textContent = 'Completa todos los campos con un correo válido.';
    return;
  }
  msg.className = 'form__msg ok';
  msg.textContent = '¡Gracias! Te responderemos pronto.';
  form.reset();
});
