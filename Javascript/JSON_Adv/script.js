const ob = {
    name: "krishna",
    branch: "CSE",
    college: "JNCT",
    year: 3,
    sem: 5
};

console.log(ob);
console.log(Object.keys(ob));
console.log(Object.values(ob));
console.log(Object.entries(ob));



function Sum(...n){
    return n.reduce((result = 0, num) => (result += num));
}

const answer = Sum(2, 3, 4, 5, 6, 7, 8, 9);

console.log(answer);
