// spread operator
const numbers = [1,2,3,4,5,];
const allNumbers = [...numbers,6,7,8,9,10];

console.log(allNumbers);

// rest oerator

function sum (...number) {
    return number.reduce((total,num)=> total + num,0);
}

// console.log(sum([20,30,40,60]));

console.log(sum(20,30,40,60));