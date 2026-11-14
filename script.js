'use strict';

// Substitua pelo seu endereço de e-mail para ativar o formulário.
const EMAIL_DESTINO = 'marcelosantosguaruja@gmail.com';

// Alternância de tema com preferência salva no navegador.
const themeButton = document.getElementById('themeToggle');
try {
  if (localStorage.getItem('portfolio-theme') === 'light') {
    document.body.classList.add('light-theme');
  }
} catch (error) {
  // O site continua funcionando se o armazenamento estiver indisponível.
}
function updateThemeButton() {
  if (!themeButton) return;
  const light = document.body.classList.contains('light-theme');
  themeButton.firstChild.textContent = light ? '🌙 ' : '☀️ ';
  themeButton.setAttribute('aria-pressed', String(light));
  themeButton.setAttribute('aria-label', light ? 'Ativar tema escuro' : 'Ativar tema claro');
}
updateThemeButton();
if (themeButton) {
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    try {
      localStorage.setItem('portfolio-theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
    } catch (error) { /* Preferência apenas nesta visita. */ }
    updateThemeButton();
  });
}

// Filtro dinâmico dos seis projetos.
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-item');
const emptyProjects = document.getElementById('emptyProjects');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filterButtons.forEach(other => {
      const active = other === button;
      other.classList.toggle('active', active);
      other.setAttribute('aria-pressed', String(active));
    });
    let count = 0;
    projects.forEach(project => {
      const show = category === 'todos' || project.dataset.category === category;
      project.hidden = !show;
      if (show) count++;
    });
    if (emptyProjects) emptyProjects.hidden = count > 0;
  });
});

// Animação de entrada ao rolar a página.
const revealElements = document.querySelectorAll('.reveal');
const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => element.classList.add('visible'));
}

// Formulário estático: abre o programa de e-mail do visitante.
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const status = document.getElementById('formStatus');
    contactForm.classList.add('was-validated');
    if (!contactForm.checkValidity()) {
      if (status) status.textContent = 'Revise os campos destacados antes de continuar.';
      return;
    }
    if (!EMAIL_DESTINO.trim()) {
      if (status) status.textContent = 'Configure EMAIL_DESTINO no arquivo script.js para habilitar o envio.';
      return;
    }
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const body = `Nome: ${nome}\nE-mail: ${email}\n\n${mensagem}`;
    const mailto = `mailto:${EMAIL_DESTINO}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(body)}`;
    if (status) status.textContent = 'Abrindo seu aplicativo de e-mail. Confirme o envio por lá.';
    window.location.href = mailto;
  });
}

// Ano atualizado automaticamente no rodapé.
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Fecha o menu responsivo após escolher uma seção.
document.querySelectorAll('#navbarLinks .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('navbarLinks');
    if (menu && menu.classList.contains('show') && window.bootstrap) {
      window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
