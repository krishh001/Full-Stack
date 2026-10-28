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