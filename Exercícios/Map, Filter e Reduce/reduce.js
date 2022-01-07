const somaArray = function (array) {
    return array.reduce(function (prev, curr) {
        return prev + curr;
    }, 0)
}

const array = [1, 2, 3, 4, 5, 6];

console.log(somaArray(array))