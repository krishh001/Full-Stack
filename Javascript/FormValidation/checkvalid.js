const Inpform = document.getElementById("fullnameform");

Inpform.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputdata = new FormData(Inpform);

    const fullname = inputdata.get("fullname");

    // if (fullname.includes("_") || fullname.includes("!") || fullname.includes("@") || fullname.includes("#") || fullname.includes("$") || fullname.includes("%") || fullname.includes("&") || fullname.includes("^")) {
    //     document.getElementById("inputError").innerText =
    //         "The full name should not contain special characters.";
    // }
    // else {
    //     document.getElementById("inputError").innerText = "Valid Full Name";
    // }

    // let isvalid = true;
    // for(var i = 0; i<fullname.length; i++){
    //     if((fullname.charAt(i) >= "A" && fullname.charAt(i) >= "Z") || (fullname.charAt(i) >= "a" && fullname.charAt(i) >= "z") || fullname.charAt(i) >= " "){
    //         isvalid = true;
           
    //     }
    //     else{
    //         isvalid = false;
    //         break;
    //     }
    // }
    // console.log(isvalid ? "valid" : "invalid");
    

    // if(/^[A-Za-z ]+$/.test(fullname)){
    //     console.log("valid");
    // }
    // else{
    //     console.log("invalid");
    // }

    console.log(/^[A-Za-z ]+$/.test(fullname) ? "valid" : "invalid");
    
});
