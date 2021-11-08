/* 
A partire da un array di numeri, genera un secondo array con le potenze al quadrato di ogni numero.
Es: [1, 2, 3, 4, 5] => [1, 4, 9, 16, 25]
*/

const number = [];
const size = Math.floor(Math.random() * 10) + 1;
console.log(size);

for(let i = 0; i < size; i++) {
    number[i] = Math.floor(Math.random() * 10) + 1;
}

console.table(number);

const square = number.map((element) => {
    return element * element;
});

console.table(square);