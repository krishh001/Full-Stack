const arr=["Apple", 2.5, 99, "Himachal", "a"];

console.log("with for each");

// arr.forEach((Element)=>{
//   console.log(Element);
// });

var x = arr.forEach((Element)=>{
  if(typeof Element === "number"){
    return Element;
  }
});
console.log("X = ",x);


console.log("with for map");

// arr.map((Element)=>{
//   console.log(Element);
// });

var y = arr.map((Element)=>{
  if(typeof Element === "number"){
    return Element;
  }
});
console.log("Y = ",y);

//filter

const arr2=["Apple", 2.5, 99, "Himachal", "a"];
var f = arr2.filter((item) => item !== 99)
console.log("F = ",f);

//find

var g = arr2.find((item) => item === 99)
console.log("G = ",g);

//find index

var h = arr2.findIndex((item) => item === 99)
console.log("H = ",h);                          //agar array me do same element honge to findIndex first occurence ke index ko return krega

//sort()
//ascending order

const arr3 = [1, 9, 4, 6 ,3 , 2, 7, 6];
var i = arr3.sort();
console.log("I = ",i); 

//descending order

var j = arr3.sort((a, b) => b - a);
console.log("J = ",j); 


