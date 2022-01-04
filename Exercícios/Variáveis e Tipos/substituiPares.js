function substituiPares(array) {
    if(array.some(isNaN)) return ("Array deve conter somente números!");
    if(!array) return ("Array inválido!");
    if(!array.length) ("Array inválido!");

    for(let i = 0; i < array.length; i++){
        if(array[i] === 0) {
            console.log("Já é zero!")
        } else if (array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0.`)
            array[i] = 0;
        }
    }
    return array;
}

console.log(substituiPares([0, 1, 2, 3, 4, 5, 6, 7, 8]));