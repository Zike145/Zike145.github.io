// Adicionar uma pequena animação ao rolar a página
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('bg-dark-custom');
    } else {
        header.classList.remove('bg-dark-custom');
    }
});
