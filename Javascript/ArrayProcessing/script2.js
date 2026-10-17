const Students = ["saurabh", "rupesh", "krishna", "pushkar"];

//includes
console.log(Students.includes("krishna"));

if(Students.includes("krishna")){
    console.log("play something");
}
else{
    console.log("study something");
}

//Array method chaining
//normal method
const numbers = [2, 5, 8, 11, 14];

const filteredNumbers = numbers.filter((number) => number > 5);
const doubledNumbers = filteredNumbers.map((number) => number * 2);

console.log(doubledNumbers);

//chaining
const methodchaining = numbers.filter((number) => number > 5).map((number) => number * 2);
console.log(methodchaining);

const res = numbers.filter((numbers) => numbers<=5).includes(8);
console.log(res);

//reduce

const data =[2, 5, 8, 11, 14, 7, 1, 3, 9, 12, 17, 15];
let sum = 0;
sum = data.reduce((sum, item) => (sum = sum + item));
// sum = data.reduce((sum=0, item) => (sum += item));            reduce kr k code aise v likh sakte hn
//(sum += item) ka matlab { 
//                          return sum += item 
//                        }
console.log(sum);

