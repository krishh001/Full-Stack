const H = document.createElement("h2");

const P = document.createElement("p");

const B = document.createElement("button");

H.classList.add("text-info");
H.textContent = "Sub Heading";

P.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quo sed voluptatibus sint nesciunt reprehenderit rerum accusamus blanditiis libero officia et velit repellat quos ut, impedit fugit error quasi quae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quo sed voluptatibus sint nesciunt reprehenderit rerum accusamus blanditiis libero officia et velit repellat quos ut, impedit fugit error quasi quae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus quo sed voluptatibus sint nesciunt reprehenderit rerum accusamus blanditiis libero officia et velit repellat quos ut, impedit fugit error quasi quae!";

B.classList.add("btn", "btn-primary");
B.innerText = "Submit";

const div = document.getElementById("task1");
//appendChild
div.appendChild(H);
div.appendChild(P);
div.appendChild(B);

//append
H.append(" welcome");

//remove
console.log(H.innerText);

H.remove("innerText");

//dynamic list
const arr = ["saurabh", "ritanshu", "krishna", "krish", "rupesh", "rupa", "pushkar", "gyanu"];

const List = document.createElement("ol");

arr.forEach((item) => {
    const l = document.createElement("li");
    l.textContent = item;
    List.appendChild(l);
});

document.getElementById("myList").appendChild(List);
