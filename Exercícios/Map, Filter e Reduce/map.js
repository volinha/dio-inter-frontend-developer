function mapThis(array, thisArg){
    return array.map(function(valor){
        return this.nota * valor;
    }, thisArg)
}

function mapSemThis(array){
    return array.map(function(valor){
        return valor * 2;
    })
}

const arrayNumeros = [0.2, 0.1, 0.3, 0.5];

const user1 = {
    id: 1,
    nota: 7,
}

const user2 = {
    id: 2,
    nota: 9,
}

const user3 = {
    id: 3,
    nota: 9,
}

const user4 = {
    id: 4,
    nota: 3,
}

console.log('this -> [' + mapThis(arrayNumeros,user1) + ']')
console.log('this -> [' + mapThis(arrayNumeros,user2) + ']')
console.log('this -> [' + mapThis(arrayNumeros,user3) + ']')
console.log('this -> [' + mapThis(arrayNumeros,user4) + ']')

console.log('sem this -> [' + mapSemThis(arrayNumeros) + ']')
