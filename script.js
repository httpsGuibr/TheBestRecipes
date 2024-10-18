// Script básico para futuras interações, como efeitos em navegação
document.addEventListener("DOMContentLoaded", function() {
    console.log("Página carregada!");
});

let currentIndex = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

// Função para alterar slide automaticamente
function autoSlide() {
    currentIndex = (currentIndex + 1) % dots.length;
    updateSlide();
}

// Função para ir para o slide atual
function currentSlide(index) {
    currentIndex = index;
    updateSlide();
}

// Função para atualizar a imagem e a bolinha ativa
function updateSlide() {
    const slideWidth = document.querySelector('.slider').offsetWidth;
    slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Iniciar o slider automático a cada 2 segundos
let slideInterval = setInterval(autoSlide, 2000);

// Parar o slider ao clicar em uma bolinha
dots.forEach(dot => dot.addEventListener('click', () => {
    clearInterval(slideInterval);
    slideInterval = setInterval(autoSlide, 2000); // Reiniciar o slider após clique
}));

// Definir o primeiro slide como ativo ao carregar a página
updateSlide();
