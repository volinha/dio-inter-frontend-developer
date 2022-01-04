function compara(n1, n2) {
    let iguais = 'não são';

    if(n1 === n2){
        iguais = 'são';
    }

    let soma = n1 + n2;

    let comparaDez = 'menor';
    let comparaVinte = 'menor';

    if(soma > 20){
        comparaDez = 'maior';
        comparaVinte = 'maior';
    }

    if(soma > 10){
        comparaDez = 'maior'
    }

    return `Os números ${n1} e ${n2} ${iguais} iguais. Sua soma é ${soma}, que é ${comparaDez} que 10 e ${comparaVinte} que 20.`
}

console.log(compara(9,9));
