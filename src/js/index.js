const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const botaoEsconderProjetos = document.querySelector('.btn-esconder-projetos'); 
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao(botaoMostrarProjetos);
    mostrarBotao(botaoEsconderProjetos); 
});

botaoEsconderProjetos.addEventListener('click', () => { 
    esconderMaisProjetos();
    esconderBotao(botaoEsconderProjetos);
    mostrarBotao(botaoMostrarProjetos); 
});

function esconderBotao(botao) {
    botao.classList.add("remover");
}

function mostrarBotao(botao) {
    botao.classList.remove("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

function esconderMaisProjetos() { 
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.remove('ativo');
    });
}
