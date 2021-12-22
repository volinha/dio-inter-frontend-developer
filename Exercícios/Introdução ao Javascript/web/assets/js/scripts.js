var btnAdicionar = document.getElementById('adicionar');            //elemento do botão de adicionar
var btnSubtrair = document.getElementById('subtrair');              //elemento do botão de subtrair
var botao = document.getElementsByClassName('botao');

var numeroWrapper = document.getElementById('currentNumber');       //wrapper do span com o número
var numero = 0;                                                     //valor do número

btnAdicionar.addEventListener('click', function () {                //listener para clicks no botão de adicionar
    if(numero < 10){                                                //limita a 10
        numero = numero + 1;
        numeroWrapper.innerHTML = numero;
    }
    // poderia ser feito desabilitando o botão com btnAdicionar.disabled = true, mas esta é uma solução mais simples
    
    if(numero >= 0){
        numeroWrapper.style.color = 'black';
    }
    // se >= 0, altera a cor para a padrão
});

btnSubtrair.addEventListener('click', function () {                 //listener para clicks no botão de subtrair
    if(numero > - 10){                                              //limita a -10
        numero = numero - 1;
        numeroWrapper.innerHTML = numero;
    }
    if(numero < 0){
        numeroWrapper.style.color = 'red';
    }
    // se < 0, altera a cor para vermelho
});