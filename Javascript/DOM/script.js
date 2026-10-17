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