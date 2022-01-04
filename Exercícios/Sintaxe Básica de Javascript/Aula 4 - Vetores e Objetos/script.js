// o que são vetores/arrayys

//declaração
let array = ['string', 1, true, ['arrayinterno'], ['outroarray', 'segundo item'], ['array3']];
//console.log(array);

/* //forEach
array.forEach(function(item, indice){console.log(item, indice)}) */

/* //push
array.push('novo item push'); */

/* //pop
array.pop(); */

/* //shift
array.shift(); */

/* //unshift
array.unshift('unshift'); */

/* //indexOf
console.log(array.indexOf(true)); */

/* //splice
array.splice(0, 3); */

/* //slice
let novoArray = array.slice(0,3)
console.log(novoArray) */

//declaração de atributos
let objeto = {
    string: 'string',
    numero: 1,
    boolean: true,
    array: ["array"],
    objetoInterno: {
        objInterno: true,
        substring: 'substring'
    }
}

console.log(objeto.objetoInterno)

//desestruturação
/* var string = objeto.string;
console.log(string);

var numero = objeto.numero;
console.log(numero); */

var { string, boolean } = objeto;
console.log(string, boolean)