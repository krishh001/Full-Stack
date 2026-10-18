// const headingText = document.getElementById("heading").innerText;
// const paraText = document.getElementById("studentmessage").textContent;
// const buttonText = document.getElementById("coursebutton").innerHTML;

// console.log(headingText);
// console.log(paraText);
// console.log(buttonText);

const headingText = document.getElementById("heading");
const paraText = document.getElementById("studentmessage");
const buttonText = document.getElementById("coursebutton");

console.log(headingText.innerHTML);
console.log(paraText.innerText);
console.log(buttonText.textContent);

headingText.innerHTML = "krishna"
paraText.innerText = "saurabh";
buttonText.textContent = "go";

function UpdateMyName(){
  const myName = document.getElementById("myName").value.trim();
  paraText.innerText = paraText.innerText + "!!" + myName;
}

//imagechange
const pic = document.getElementById("somePicture");

pic.src = "./draw.png";
pic.alt = "jellyfish";

//changing id and type
function change(){
  const myNameInput = document.getElementById("myName");

  myNameInput.id = "myFullName";
  myNameInput.type = "password";
  myNameInput.name = "FullName";

  pic.setAttribute("src", "./neon.png");
  pic.setAttribute("alt", "Neon");
}

//inline css through js
headingText.style.color = "red";
headingText.style.backgroundColor = "blue";

// const body = document.querySelector("body");

// console.log(body);

// console.log();


