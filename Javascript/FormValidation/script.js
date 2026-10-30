function login(){
    const un = document.getElementById('username').value.trim();
    const ps = document.getElementById('password').value;

    console.log(un, ps);
    
}

//

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const loginformdata = new FormData(loginForm);

    const UN = loginformdata.get("username");
    const PS = loginformdata.get("password");

    console.log(UN, PS);
    
    loginformdata.forEach((value, key) => console.log(key, ":", value));
    
});

//for long form data:-

const TestFrom = document.getElementById("testform");

const testFromDataJSON = {};
TestFrom.addEventListener("submit", (e) => {
  e.preventDefault();

  const testFromData = new FormData(TestFrom);

  if (testFromData.get("password").length < 8) {
    document.getElementById("passwordError").innerText =
      "Password Must Contain 8 Charcaters";
  }
  if (testFromData.get("password") !== testFromData.get("cfpassword")) {
    document.getElementById("cfPasswordError").innerText = "Password Not Match";
  }

  testFromData.forEach((value, key) => console.log(key, ":", value));
  testFromData.forEach((value, key) => (testFromDataJSON[key] = value));
});

console.log(testFromDataJSON);

//

const someData = {
  name: "Prince Patel",
  age: "21",
  height: 5.6,
};

const JsonToString = JSON.stringify(someData);

console.log(someData);

console.log(JsonToString);

const StringToJson = JSON.parse(JsonToString);

console.log(StringToJson);

var StdName = "Mansi";
var marks = 99;

console.log("Student with Name", StdName, "Scored", marks);

console.log(`Studnet with Name ${StdName} 
  scored ${marks}`);
