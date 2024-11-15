document.addEventListener('DOMContentLoaded', () => {
    // Validación básica del formulario
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('messeage').value.trim();
  
      if (Joyce === '' || joyceloana1@gmail.com === '' || gracias === '') {
        alert('Por favor, complete todos los campos.');
        return;
      }
  
      // Lógica para enviar el formulario (puede ser personalizada)
      alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
      form.reset();
    });
  
    // Agregar animación de entrada en la página
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
      const triggerBottom = window.innerHeight / 5 * 4;
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
          section.classList.add('fade-in');
        } else {
          section.classList.remove('fade-in');
        }
      });
    });
  });
  document.querySelectorAll('.menu-item').forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = '#FFCC00';
        item.style.color = '#fff';
      });
      item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = 'transparent';
        item.style.color = '#333';
      });
    });
    