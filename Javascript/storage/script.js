const jsonData = {
  title: "IPhone 17",
  description: "very good phone is deep beetroot Color",
  button1: "₹25000",
  button2: "buynow",
};

const dataReadyToStore = JSON.stringify(jsonData);

localStorage.setItem("myNewData", dataReadyToStore);
localStorage.setItem("myName", "krishna verma");
localStorage.setItem("Your Name", "pushkar vats");

const getLSData = localStorage.getItem("myName");

localStorage.removeItem("Your Name");

// document.querySelector("body").appendChild((document.createElement("div").innerText = getLSData));

//                     ^
//                     |

const DIV = document.createElement("div");
DIV.innerText = getLSData;

const BODY = document.querySelector("body");
BODY.appendChild(DIV);

//password hide 

function PasswordVisibility() {
  const IN = document.getElementById("myPassword");
  const BN = document.getElementById("PasswordControl");

  if (BN.innerHTML === `<i class="bi bi-eye"></i>`) {
    IN.type = "text";
    BN.innerHTML = `<i class="bi bi-eye-slash"></i>`;
  } else {
    IN.type = "password";
    BN.innerHTML = `<i class="bi bi-eye"></i>`;
  }
}