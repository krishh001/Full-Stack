                                             //part-1

//Que no.-1 Create variables for a student's score, course fee, and attendance percentage using numeric values.

const score = 85.75;
const fee = 12994394;
const attendence = 80.2;

//Que no.-2 Use toString() to convert the student's score into a string and display its data type using typeof.

console.log(score.toString());
console.log(typeof score);

//Que no.-3 Use toLocaleString("en-IN") to format a large course fee according to Indian number-formatting conventions.

console.log(fee.toLocaleString("en-IN"));

//Que no.-4 Use toLocaleString() with the currency option and "INR" to display the fee as Indian currency.

const Fee = fee.toLocaleString("en-IN", {
  style: 'currency',
  currency: 'INR'
});
console.log(Fee); 

//Que no.-5 Use toFixed(2) to display a percentage with exactly two decimal places.

console.log(attendence.toFixed(2));

//Que no.-6 Use toPrecision() to format a numeric value using a specified number of significant digits.

console.log(score.toPrecision(3));

//Que no.-7 Use toExponential() to display a large numeric value in exponential notation.

console.log(fee.toExponential());
console.log(fee.toExponential(2));

                                             //part-2

//Que no.-1 Create variables containing an integer score, a decimal score, a numeric string, NaN, and Infinity.

const integerScore = 95;
const decimalScore = 88.5;
const numericString = "42";
const notANumber = NaN;
const infiniteValue = Infinity;

//Que no.-2 Use Number.isInteger() to check whether selected values are integers.

console.log(Number.isInteger(integerScore));

//Que no.-3 Use Number.isNaN() and Number.isFinite() to check the appropriate numeric conditions.

console.log(Number.isNaN(integerScore));
console.log(Number.isFinite(integerScore));

//Que no.-4 Use Number.isSafeInteger() to check a regular integer and Number.MAX_SAFE_INTEGER.

console.log(Number.isSafeInteger(integerScore));

const maxSafeInteger = Number.MAX_SAFE_INTEGER;
const isMaxSafe = Number.isSafeInteger(maxSafeInteger);

console.log(isMaxSafe);

//Que no.-5 Create numeric text values such as "85.75", "120px", and "hello".

const numericvalue = "85.75";
const numerictextvalue = "120px";
const text = "hello";

//Que no.-6 Use Number.parseInt() and Number.parseFloat() to parse these text values.

console.log(Number.parseInt(numericvalue));
console.log(Number.parseInt(numerictextvalue));
console.log(Number.parseInt(text));

console.log(Number.parseFloat(numericvalue));
console.log(Number.parseFloat(numerictextvalue));
console.log(Number.parseFloat(text));

//Que no.-7 Display the parsing results, including cases that return NaN.

//Que no.-8 Add comments explaining why "85" as a string does not pass Number.isInteger() and why parsing a numeric prefix does not guarantee that the entire input is valid.

const num = "85";

// "85" is a string, not a number.
// Number.isInteger() only accepts numeric values.
console.log(Number.isInteger(num)); // false

