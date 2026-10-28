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