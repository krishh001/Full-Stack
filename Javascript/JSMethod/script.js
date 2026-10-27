//String Methods & Manipulation:-

const str = "krishna verma";

//charAt and at

console.log(str.charAt(3));
console.log(str.at(6));

// const arr = [10, 24, 32, 53, 46, 76, 89, 25, 15];
// console.log(arr.at[2]);
// console.log(arr.charAt[2]);                 not usefull

//slice

const str2 = str.slice(2, 6);
console.log(str2);

//substring

const S_str = str.substring(2, 5);
console.log(S_str);

//indexOf()

const str3 = str.indexOf("verma");
console.log(str3);

//lastIndexOf()

const str4 = str.lastIndexOf("verma");
console.log(str4);

//includes()

const str5 = str.includes("na");
console.log(str5);

//startsWith() and endsWith()

const str6 = str.startsWith("krishna");
const str7 = str.endsWith("kumar");
console.log(str6);
console.log(str7);

//replace()

const str8 = str.replace("verma", "kumar");
console.log(str8);

//replaceAll()

const str9 = str.replaceAll("verma", "kumar");
console.log(str9);

//toUpperCase()

const str10 = str.toUpperCase();
console.log(str10);

//toLowerCase()

const str11 = str.toLowerCase();
console.log(str11);

//trim()

const name = "   Rahul Sharma   ";
console.log(name.trim());

//trimStart() and trimEnd()

const text = "   Hello   ";
console.log(text.trimStart());
console.log(text.trimEnd());

//concat()

const first = "Hello";
const second = "Students";

console.log(first.concat(" ", second));

//repeat()

console.log("Hi ".repeat(3));
console.log("*".repeat(5));

//split()

const subjects = "HTML,JavaScript,React";
console.log(subjects.split(","));


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

//Math Object & Mathematical Operations:-
//Math.max()

const marks4 = [75, 90, 65, 88, 95];
console.log(Math.max(...marks4));

//Math.min()

console.log(Math.min(...marks4));

//Math.round()

console.log(Math.round(4.3));
console.log(Math.round(4.7));
console.log(Math.round(4.5));

//Math.floor()

console.log(Math.floor(4.9));
console.log(Math.floor(4.2));
console.log(Math.floor(-4.2));

//Math.ceil()

console.log(Math.ceil(4.2));
console.log(Math.ceil(4.9));
console.log(Math.ceil(-4.2));

//Math.trunc()

console.log(Math.trunc(4.9));
console.log(Math.trunc(4.2));
console.log(Math.trunc(-4.9));

//Math.PI

const radius = 5;
const area = Math.PI * radius * radius;
console.log(area);
console.log(area.toFixed(2));

//Math.hypot()

const a = 3;
const b = 4;
console.log(Math.hypot(a, b));

//Math.abs()

console.log(Math.abs(-25));
console.log(Math.abs(25));
console.log(Math.abs(-7.5));

//Math.sign()

console.log(Math.sign(25));
console.log(Math.sign(-25));
console.log(Math.sign(0));

//Math.pow()

console.log(Math.pow(2, 3));
console.log(Math.pow(5, 2));

//Math.sqrt()

console.log(Math.sqrt(25));
console.log(Math.sqrt(81));

//Math.cbrt()

console.log(Math.cbrt(27));
console.log(Math.cbrt(64));
console.log(Math.cbrt(-8));

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

//Date Object:-
//new Date()

const today = new Date();
console.log(today);

//toDateString()

const deadline = new Date("2026-11-15T23:59:00");
console.log(deadline.toDateString());

//getFullYear()

const date = new Date("2026-11-15");
console.log(date.getFullYear());

//getMonth()

console.log(date.getMonth());

//getDate()

console.log(date.getDate());

//getDay()

console.log(date.getDay());

//Time getter methods

const date1 = new Date("2026-11-15T14:35:45");
console.log(date1.getHours());
console.log(date1.getMinutes());
console.log(date1.getSeconds());

//toLocaleDateString("en-IN")

console.log(date1.toLocaleDateString("en-IN"));

//setDate()

deadline.setDate(20);
console.log(deadline.toDateString());

//setDate() aur getDate() se reminder date nikalna

const reminder = new Date(deadline);
reminder.setDate(reminder.getDate() - 7);
console.log(reminder.toDateString());

//toISOString()

let date2 = new Date("2026-11-15T23:59:00+05:30");
console.log(date2.toISOString());

//Date Creation & Date Methods:-
//new Date()

const currentDate = new Date();
console.log(currentDate);

//Date.now()

const timestamp = Date.now();
console.log(timestamp);

//Date getter methods

const examDate = new Date(2026, 10, 15);
console.log(examDate.getFullYear());
console.log(examDate.getMonth());
console.log(examDate.getDate());
console.log(examDate.getDay());

//Date object ki copy banana

const copiedDate = new Date(examDate);
copiedDate.setDate(20);
console.log("Original:", examDate.toDateString());
console.log("Copied:", copiedDate.toDateString());

//Setter methods

const date3 = new Date(2026, 10, 15, 10, 30, 0);
date.setFullYear(2027);
date.setHours(14);
date.setMinutes(45);
console.log(date3);

//Reminder date calculate karna

const reminderDate = new Date(examDate);
reminderDate.setDate(reminderDate.getDate() - 7);
console.log(reminderDate.toDateString());

//Date ko readable format mein display karna

const date4 = new Date(2026, 10, 15);
console.log(date4.toDateString());

//toLocaleDateString("en-IN")

console.log(date.toLocaleDateString("en-IN"));

//toISOString()

console.log(date.toISOString());

//Date.parse()

const timestamp1 = Date.parse("2026-11-15T10:00:00Z");
console.log(timestamp);

//Date object valid hai ya invalid, kaise check karein?

function isValidDate(date) {
    return date instanceof Date &&
           !Number.isNaN(date.getTime());
}

const validDate = new Date("2026-11-15");
const invalidDate = new Date("invalid");

console.log(isValidDate(validDate));
console.log(isValidDate(invalidDate));