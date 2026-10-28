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
