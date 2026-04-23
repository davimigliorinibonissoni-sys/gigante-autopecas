// ===================================
// GIGANTE AUTO PEÇAS — script.js
// ===================================

// ----------------------------------------
// 1. MENU HAMBURGUER (para celular)
// ----------------------------------------
const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.getElementById('navLinks');

menuToggle.addEventListener('click', function () {
  navLinks.classList.toggle('open');
});

// Fecha o menu ao clicar em um link
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');
  });
});


// ----------------------------------------
// 2. FORMULÁRIO DE CONTATO
// ----------------------------------------
const form     = document.getElementById('contatoForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', function (evento) {
  // Pega os valores digitados
  const nome     = document.getElementById('nome').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  // Validação simples
  if (!nome || !mensagem) {
    evento.preventDefault(); // Só bloqueia se tiver campo vazio
    feedback.style.color = '#e74c3c';
    feedback.textContent = 'Por favor, preencha nome e mensagem.';
    return;
  }

  // Se tudo preenchido, deixa o formulário enviar normalmente para o Formspree
  feedback.style.color = '#27ae60';
  feedback.textContent = '✅ Enviando mensagem...';
});  // Limpa o formulário após 2 segundos

// ----------------------------------------
// 3. NAVBAR MUDA AO ROLAR A PÁGINA
// ----------------------------------------
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 24px rgba(0,0,0,0.4)';
  } else {
    navbar.style.boxShadow = '0 2px 16px rgba(0,0,0,0.3)';
  }
});
