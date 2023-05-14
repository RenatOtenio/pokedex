
const botaoAlterarTema = document.getElementById("botao-alterar-tema")

const body = document.querySelector('body')
const imagemBotaoTrocarTema = document.querySelector('.img-botao')

botaoAlterarTema.addEventListener('click' , () => {
    const modoEscuroEstaAtivo = body.classList.contains('modo-escuro')

    body.classList.toggle('modo-escuro')

    if (modoEscuroEstaAtivo){
        imagemBotaoTrocarTema.setAttribute('src' , './src/img/sun.png')
    } else {
        imagemBotaoTrocarTema.setAttribute('src' , './src/img/moon.png')
    }
})



