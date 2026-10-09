
//hoisting        (addition function)

sum(5,5);

function sum(a, b){
    let c = a + b;
    console.log(c);
}

sum(5,10);

function sum_with_d(x, y = 10) {
    console.log(x+y);
}
sum_with_d(7);  //17
sum_with_d(8, 20);   //28

function calculate(a, b, c) {
    return a+b-c;
}
let answer = calculate(5, 6, 7);
console.log(answer);  //4

                   //function expression

const greet=function() {
    console.log("welcome to the javascript");
}
greet();


const showStudent = function(name, course) {
    console.log("Student: " + name);
    console.log("Course: " + course);
};

showStudent("Raj", "JavaScript");


const calculateFee = function(fee, months = 1) {
    return fee * months;
};

let totalFee1 = calculateFee(5000);
let totalFee2 = calculateFee(5000, 3);

console.log(totalFee1);
console.log(totalFee2);