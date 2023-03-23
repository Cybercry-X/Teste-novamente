


function atualizar() {

    let musicafundo = document.createElement('audio');
musicafundo.setAttribute('src', 'musica de fundo 2 pagina.mp3');
musicafundo.volume = 0.2;
musicafundo.play();
document.body.appendChild(musicafundo);


}


function clicar() {
 let nome = window.document.getElementById('caixanome').value
 if(nome.length <= 12 && nome.length >= 2) {

    localStorage.nome = nome;
 console.log(localStorage.nome)

 let sombotao = document.createElement('audio')
sombotao.setAttribute('src',  'som do botao.mp3')
sombotao.play();
document.body.appendChild(sombotao)

 
} else {
    alert('[ERRO] nome de usuario muito curto ou vazio!')
}
}
