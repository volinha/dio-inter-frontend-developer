const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

const valoresUnicos = new Set(array);

const valoresUnicosFunction = (array) => 
{
    return new Set(array);
};

console.log(valoresUnicos);
console.log(valoresUnicosFunction(array));
