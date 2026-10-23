
//using html
function showAlert(){
    alert("Click me Button clicked using html Events");
}

//using js
document.getElementById("clickbutton").addEventListener("click", showAlert2);

function showAlert2(){
    alert("Click me Button clicked using JS Events");
}

//for div give an alert!
// document.getElementById("box").addEventListener("click", showAlert2);
//for div - changeing in inner text
document.getElementById("box").addEventListener("click", () => {
    document.getElementById("box").innerText = "The box was clicked!!"
});





//class work:-

//for button
document.getElementById("Clickbutton").addEventListener("click", showAlert3);

function showAlert3(){
    alert("Welcome to RICR!");
}

//for paragraph
document.getElementById("paragraph").addEventListener("mouseover", () => {
    document.getElementById("paragraph").innerText = "Pointer is over the paragraph!"
});

document.getElementById("paragraph").addEventListener("mouseout", () => {
    document.getElementById("paragraph").innerText = "Move your pointer here."
});

//for div
document.getElementById("Box").addEventListener("click", () => {
    document.getElementById("Box").innerText = "Box clicked!"
});

//for paragraph 2
document.getElementById("paragraph2").addEventListener("mousedown", () => {
    document.getElementById("paragraph2").innerText = "Mouse button pressed!"
});

document.getElementById("paragraph2").addEventListener("mouseup", () => {
    document.getElementById("paragraph2").innerText = "Mouse button released!"
});

//for paragraph 3
document.getElementById("paragraph3").addEventListener("dblclick", () => {
    document.getElementById("paragraph3").innerText = "You double-clicked this paragraph!"
});

//for paragraph 4
document.getElementById("paragraph4").addEventListener("mousemove", () => {
    document.getElementById("paragraph4").innerText = "Mouse pointer is moving over this text!"
});



//for input
document.getElementById("nameSubmit").addEventListener("click", () =>{
    console.log(document.getElementById("fullname").value.trim());
});

document.getElementById("fullname").addEventListener("keydown", (e) =>{
    // e.key === "Enter" ? () =>{
    //     console.log(document.getElementById("fullname").value.trim());
    // }
    // : "";

    // if(e.key === "Enter"){
    //     console.log(document.getElementById("fullname").value.trim());
    // }
    // else{
    // }

    (e.key === "Enter") && console.log(document.getElementById("fullname").value.trim());
});

//form
document.getElementById("loginform").addEventListener("submit", (e) =>{
    // e.preventDefault();
    console.log("Login Don");
    //for hiding data from link we remove e.preventDefault();
});
