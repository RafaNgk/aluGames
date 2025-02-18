let quantidadeJogosAlugados = 0;

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
  
    if(imagem.classList.contains('dashboard__item__img--rented')) {
        prompt('Tem certeza que deseja devolver este jogo?');
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        quantidadeJogosAlugados ++;
    }
    
    console.log(quantidadeJogosAlugados);
}
