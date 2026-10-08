let a=10;
let b=20;
let c="10";
let d="20";

console.log(a==b); //false
console.log(a==c); //true
console.log(a===c); //false
console.log(a!=b); //true
console.log(a!==c); //true

let x=5;
let y=2;
console.log(x%y);

let p=10;
let q=3;
console.log(p/q);

let m=true;
let n=false;
let o=true;

console.log(m && n); //
console.log(m && o);
console.log(n && o);
console.log(m || n);
console.log(m || o);
console.log(n || o);

console.log(!m && o);
console.log(!n && o);
console.log(!m || n);
console.log(!m || o);

console.log(a++); //10
console.log(a--); //11
console.log(a); //10
console.log(b--);
console.log(b);
console.log(--b);

console.log(a>b ? "hello" : "bye");

//if-else

if(a<b){
   console.log("hello");
}
else{
    console.log("by");
}

//loop

for(var i=0; i<5; i++){
    console.log("we are learning js.");
}

var i=0;
while(i<=5){
    console.log("we are learning js.", i+1);
    i++;
}

var i=0;
do{
    console.log("we are learning js.", i+1);
    i++;
}while (i <= 5);