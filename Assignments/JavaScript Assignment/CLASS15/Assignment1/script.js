                                             //part-1

//Que no.-1 Create a variable named studentName containing a name with extra spaces and inconsistent letter casing, such as " rAHUL shARma ".

const student = "   kRISHNa vERma   ";

//Que no.-2 Use trim() to remove whitespace from both ends and toUpperCase() or toLowerCase() to format the name.
console.log(student.trim());

console.log(student.toUpperCase());
console.log(student.toLowerCase());

//Que no.-3 Create a variable named courseDescription containing a sentence about JavaScript.

const courseDescription = "JavaScript (JS) is a versatile, high-level programming language.";

//Que no.-4 Use charAt() and at() to display selected characters from the sentence.

console.log(courseDescription.charAt(3));
console.log(courseDescription.at(6));

//Que no.-5 Use slice() and substring() to extract different portions of the course description.

console.log(courseDescription.slice(2, 6));
console.log(courseDescription.substring(2, 5));

//Que no.-6 Use indexOf() and lastIndexOf() to find the positions of a word or character.

const student1 = "krishna verma";
console.log(student1.indexOf("verma"));
console.log(student1.lastIndexOf("krishna"));

//Que no.-7 Use includes() to check whether the description contains "JavaScript".

console.log(courseDescription.includes("JavaScript"));

//Que no.-8 Use startsWith() and endsWith() to check the beginning and ending of a sample filename.

console.log(student1.startsWith("krishna"));
console.log(student1.endsWith("kumar"));

                                             //part-2

//Que no.-1 Create a variable named courseMessage containing a sentence in which the word "HTML" appears at least twice.

const courseMessage = "HTML is thestandard markup language, HTML acts as the structural skeleton of a website.";

//Que no.-2 Use replace() to replace the first occurrence of "HTML" with "JavaScript".

console.log(courseMessage.replace("HTML", "JavaScript"));

//Que no.-3 Use replaceAll() to replace the every occurrence of "HTML" with "JavaScript".

console.log(courseMessage.replaceAll("HTML", "JavaScript"));

//Que no.-4 Use toUpperCase() and toLowerCase() to display the message in different letter cases.

console.log(courseMessage.toUpperCase());
console.log(courseMessage.toLowerCase());

//Que no.-5 Create two variables containing a greeting and a student group name, then combine them using concat().

const greeting ="hello";
const groupName ="FRAG";

console.log(greeting.concat(" ", groupName));

//Que no.-6 Use repeat() to generate a separator containing at least five asterisks.

console.log("*".repeat(5));

//Que no.-7 Create a comma-separated string of course names and use split(",") to convert it into an array.

const courseNames = "HTML,JavaScript,React";
console.log(courseNames.split(","));

//Que no.-8 Create a sentence containing several words and use split(" ") to separate it into an array of words.

const About = "Myself Krishna Verma.";
console.log(About.split(" "));

//Que no.-9 Demonstrate trimStart() and trimEnd() on a string containing extra whitespace.

console.log(student.trimStart());
console.log(student.trimEnd());