var numAleatorio = Math.floor(Math.random()*100)+1;

var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');

var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

var contagemPalpite = 1;
var reset;


function conferirPalpite(){
    var palpiteUsuario = Number(campoPalpite.value);
    if(contagemPalpite === 1){
        palpites.textContent = 'Palpites anteriores: ';
    }
    palpites.textContent += palpiteUsuario + ' ';
    if(palpiteUsuario===numAleatorio){
        ultimoResultado.textContent = 'Parabéns! Você aceetou!';
        ultimoResultado.style.backgroundColor = 'green';
        baixoOuAlto.textContent = '';
        fimDojogo();
    }else if(contagemPalpite === 10){
        ultimoResultado.textContent = '!!! FIM DE JOGO !!!';
        baixoOuAlto.textContent = '';
        fimDojogo();
    }else {
        ultimoResultado.textContent = 'Errado!';
        ultimoResultado.style.backgroundColor = 'red';
        if(palpiteUsuario < numAleatorio){
            baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
        }else if(palpiteUsuario > numAleatorio) {
            baixoOuAlto.textContent = 'Seu palpite está muito alto!';
        }
    }
    contagemPalpite++;
    campoPalpite.value = '';
    campoPalpite.focus();
    
}
    envioPalpite.addEventListener('click', conferirPalpite);


function fimDojogo(){
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    reset = document.createElement('button');
    reset.textContent = 'Iniciar novo jogo';
    document.body.appendChild(reset);
    reset.addEventListener('click', resetJogo);
}

function resetJogo(){
    contagemPalpite = 1;
    var resetParas = document.querySelectorAll('.resultadoParas p');
    for(var i = 0; i < resetParas.length; i++){
        resetParas[i].textContent = '';
    }
    reset.parentNode.removeChild(reset);

    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = '';
    campoPalpite.focus();

    ultimoResultado.style.backgroundColor = 'white';
    numAleatorio = Math.floor(Math.random()*100)+1;

}
