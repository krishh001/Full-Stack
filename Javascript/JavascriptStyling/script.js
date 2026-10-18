function b1ON(){
    const b1 = document.getElementById("bulb1");
    //inline css
    // b1.style.backgroundColor = "yellow";
    //external css
    b1.classList.add("b1");
}

function b1OFF(){
    const b1 = document.getElementById("bulb1");
    //inline css
    // b1.style.backgroundColor = "white";
    //external css
    b1.classList.remove("b1");
}

function b2ON_OFF(){
    const b2 = document.getElementById("bulb2");
    
    b2.classList.toggle("b2");
}