//Number Methods:-
//Number.parseInt()

const marks = "85.75";
console.log(Number.parseInt(marks));

//Number.parseFloat()

const fee = "1250.75";
console.log(Number.parseFloat(fee));

//Number.isInteger()

console.log(Number.isInteger(50));
console.log(Number.isInteger(50.5));

//Number.isFinite()

console.log(Number.isFinite(100));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite("100"));

//Number.isSafeInteger()

console.log(Number.isSafeInteger(100));
console.log(Number.isSafeInteger(9007199254740992));

//toFixed()

const fee1 = 1250.5;
console.log(fee1.toFixed(2));
console.log(fee1.toFixed(0));

//toLocaleString("en-IN")

const fee2 = 1250000;
console.log(fee2.toLocaleString("en-IN"));

//toPrecision()

const marks1 = 85.678;
console.log(marks1.toPrecision(3));
console.log(marks1.toPrecision(5));

//toExponential()

const marks2 = 12500;
console.log(marks2.toExponential());
console.log(marks2.toExponential(2));

//toString()

const marks3 = 85;
const result = marks3.toString();
console.log(result);
console.log(typeof result);