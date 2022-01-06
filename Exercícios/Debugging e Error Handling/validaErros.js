function validaErro(array,numero){
    try {
        if (!array && !numero) throw new ReferenceError("Parâmetros não enviados!");
        if (typeof array !== 'object') throw new TypeError("Array não é um objeto!");
        if (typeof numero !== 'number') throw new TypeError("Número não é do tipo 'number'!");
        if (array.length != numero) throw new RangeError("Dimensão do array (" + array.length + ") não corresponde ao número enviado (" + numero + ")!");
    }
    catch (err) {
        if (err instanceof ReferenceError) {
            console.log('ReferenceError');
        } else if (err instanceof TypeError) {
            console.log('TypeError');
        } else if (err instanceof RangeError) {
            console.log('RangeError');
        } else {
            console.log('Outro erro.');
        }
        console.log(err.stack);
    }
}

console.log(validaErro([0,2,4,6,8], 3));