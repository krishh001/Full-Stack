const jsonData = {
    title: "Myphone 16",
    description: "very good phone",
    button1: "250000",
    button2: "buy now",
};

const dataReadyToStore = JSON.stringify(jsonData);

localStorage.setItem("myNewData", dataReadyToStore);
localStorage.setItem("myName", "krishna");
localStorage.setItem("yourName", "rupesh");

const getLSData = localStorage.getItem("myNewData");

localStorage.removeItem("yourName");

// document.querySelector("body").appendChild((document.createElement("div").innerText = getLSData));

//                     ^
//                     |

const DIV = document.createElement("div");
DIV.innerText = getLSData;

const BODY = document.querySelector("body");
BODY.appendChild(DIV);

