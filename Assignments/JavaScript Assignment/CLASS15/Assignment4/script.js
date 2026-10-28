//Random Number Generation:-
//Math.random()

console.log(Math.random());

//Random decimal between 0 and 1

const num = Math.random();
console.log(num);

//Random integer from 1 to 10

const num1 = Math.floor(Math.random() * 10) + 1;
console.log(num1);

//formula:  Math.floor(Math.random() * (max - min + 1)) + min

//Random integer between 20 and 50

const num2 = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
console.log(num2);

//Random integer from 5 to 15, excluding 15

const num3 = Math.floor(Math.random() * (15 - 5)) + 5;
console.log(num3);

//Random decimal between 10 and 20

const num4 = Math.random() * (20 - 10) + 10;
console.log(num4);