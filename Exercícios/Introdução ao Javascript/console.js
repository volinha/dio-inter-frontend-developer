function returnEvenValues(array) {
    let evenNumbers = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0) {
            evenNumbers.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`)
        }
    }
    console.log('Pares: ', evenNumbers);
}

let array = [1,3,4,5,7,9,10,12];
returnEvenValues(array);