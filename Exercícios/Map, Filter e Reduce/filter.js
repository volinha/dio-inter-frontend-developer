function filtroPares(array) {
    return array.filter(callback);
}

function callback(value) {
    return value % 2 === 0;
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filtroPares(numbers));