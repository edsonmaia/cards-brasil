console.log('Cards dos Brasil')
    
let cards = document.querySelector('.cards')

fetch('jogadores-brasil.json')
.then(resposta => resposta.json())
.then(dados => dados.forEach( (jogador, indice) => {
    // console.log(jogador)

    // criar um card padrao
    let card = document.createElement('div')
    card.classList.add('card')
    console.log(card)

    // colocar cada card dentro da div cards
    cards.appendChild(card)

    // preencher os dados de cada jogador
    card.innerHTML = `
    <span class="posicaoP">${jogador.posicao}</span>
    <span class="posicaoG">${jogador.posicao}</span>
    <img class="escudo" src="images/escudos/${jogador.escudo}.png" alt="" />
    <img class="jogador" src="images/jogadores/${jogador.foto}.png" alt="" />
    <h3 class="nomeJogador">${jogador.nome}</h3>
    <h4 class="numero">${jogador.numero}</h4>
    `
})
)
