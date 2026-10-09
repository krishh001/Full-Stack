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

//switch

console.log("1. check balance");
console.log("2. withdraw money");
console.log("3. mini statement");
console.log("4. Pin change");
console.log("5. deposit cash");
console.log("6. exit");

let choice=4;

switch(choice){
    case 1:{
        console.log("please check your balance");
        break;
    }
    case 2:{
        console.log("please collect your cash");
        break;
    }
    case 3:{
        console.log("please find your transaction below");
        break;
    }
    case 4:{
        console.log("Enter your new Pin");
        break;
    }
    case 5:{
        console.log("Put your Cash into Machine");
        break;
    }
    case 6:{
        console.log("Thank you for");
        break;
    }
    default:{
        console.log("wrong choice");
    }
}

choice = 3;

if(choice === 1){
    console.log("please check your balance");
}
else if(choice === 2){
    console.log("please collect your cash");
}
else if(choice === 3){
    console.log("please find your transaction below");
}
else if(choice === 4){
    console.log("Enter your new Pin");
}
else if(choice === 5){
    console.log("Put your Cash into Machine");
}
else if(choice === 6){
    console.log("Thank you for");
}
else{
    console.log("wrong choice");
}