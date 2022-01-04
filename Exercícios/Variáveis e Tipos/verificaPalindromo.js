// solução 1
function verificaPalindromo(string) {
    if(!string) return "String inválida!";

    //split("") separa todas as letras e transforma a string em array
    return string.split("").reverse().join("") === string;
}

//solução 2

function verificaPalindromo2(string) {
    if(!string) return "String inválida!";

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]){
           return false;
        } 
    }
    return true;
}

//extra - verificando strings com espaços e caracteres
//ainda não desenvolvido o regex para caracteres acentuados

function verificaPalindromo3(string) {
    if(!string) return "String inválida!";

    //função replace para remover os espaços, 
    let removeSpace = string.replace(/[^A-Z0-9]/gi, '').toLowerCase();
    return removeSpace.split("").reverse().join("") === removeSpace;
}

console.log(verificaPalindromo3("A Daniela ama a lei? Nada!"))