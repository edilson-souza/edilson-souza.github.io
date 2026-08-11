// Efeito simples de console log para simular o estilo de dev do modelo
console.log("%croot@edilsondev:~# Portfólio Carregado com Sucesso!", "color: #7ee787; font-family: monospace; font-size: 14px;");

// Rolagem suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});