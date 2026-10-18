let text = document.querySelector("h1").innerText;
console.log(text + " krishna");


// in form
function submit(){
    console.log("submit button clicked");

    const nm = document.querySelector("#fullname").value.trim();
    // const em = document.querySelector("#email").value;
    //agar sirf id ko select karna ho to
    const el = document.getElementById("email").value.trim();
    const pm = document.getElementById("phone").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const gd = document.getElementById("gender").value.trim();

    console.log("full name : ", nm);
    // console.log("email : ", em);
    console.log("email : ", el);
    console.log("phone : ", pm);
    console.log("DOB : ", dob);
    console.log("Gender : ", gd);
}

function submit2() {
  const formData = [];

  document.querySelectorAll("input, select").forEach((item) => {
    formData.push(item.value.trim());
  });

  const fieldName = [];
  document.querySelectorAll("input, select").forEach((item) => {
    fieldName.push(item.name);
  });

  for (var i = 0; i < fieldName.length; i++) {
    console.log(fieldName[i] + " : " + formData[i]);
  }
}

//traversing
const coursediv = document.getElementById("course");
console.log(coursediv);

const heading = document.querySelector("h2");
console.log(heading);

console.log(heading.parentElement.firstElementChild);
console.log(heading.parentElement.children);
console.log(heading.parentElement.lastElementChild);