// let a=10;
// b=20;
// let b;
// console.log(a+b);

var a=20;
b=10;
var b;
console.log(a+b);
console.log(a+c);

var c=30;

function abc(){
    console.log("I am function ABC");
}
abc();
def();
let x=10;
y=20;
console.log(x+y);

function def(){
    console.log("I am function DEF");
}

let prince = "patel";                                          //global variable
function empire(){
    console.log("prince of this empire is", prince);
    let princess="unknow";                                     //local variable
    console.log("but the princess is", princess);
}
empire();
console.log("princess of prince", prince);
console.log("is", princess);

