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
// ----------------------------------------
// 4. ANIMAÇÕES AO ROLAR A PÁGINA
// ----------------------------------------
const elementos = document.querySelectorAll('.animar');

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry, index) {
    if (entry.isIntersecting) {
      // Atraso progressivo para cada elemento
      setTimeout(function () {
        entry.target.classList.add('visivel');
      }, index * 100);
    }
  });
}, { threshold: 0.15 });

elementos.forEach(function (el) {
  observer.observe(el);
});
// ----------------------------------------
// 5. CONTADOR ANIMADO
// ----------------------------------------
const contadores = document.querySelectorAll('.stat-num');

const contadorObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      const el = entry.target;
      const alvo = parseInt(el.getAttribute('data-target'));
      const duracao = 2000; // duração em milissegundos
      const incremento = alvo / (duracao / 16);
      let atual = 0;

      const timer = setInterval(function () {
        atual += incremento;
        if (atual >= alvo) {
          atual = alvo;
          clearInterval(timer);

          // Adiciona o símbolo certo após terminar
          if (alvo === 100) {
            el.textContent = '100%';
          } else if (alvo === 5000) {
            el.textContent = '5k+';
          } else {
            el.textContent = alvo + '+';
          }
        } else {
          el.textContent = Math.floor(atual);
        }
      }, 16);

      contadorObserver.unobserve(el); // roda só uma vez
    }
  });
}, { threshold: 0.5 });

contadores.forEach(function (el) {
  contadorObserver.observe(el);
});
// ----------------------------------------
// 6. BOTÃO VOLTAR AO TOPO
// ----------------------------------------
const voltarTopo = document.getElementById('voltarTopo');

window.addEventListener('scroll', function () {
  if (window.scrollY > 400) {
    voltarTopo.classList.add('visivel');
  } else {
    voltarTopo.classList.remove('visivel');
  }
});

voltarTopo.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
