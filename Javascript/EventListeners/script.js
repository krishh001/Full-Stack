const showAssBtn = document.getElementById("ShowAssignmentNotification");
const showAttBtn = document.getElementById("ShowAttendenceNotification");
const stopAssBtn = document.getElementById("StopAssignmentNotification");

const assPara = document.getElementById("AssignmentNotification");
const attPara = document.getElementById("AttendenceNotification");

function ShowAssignment(){
    assPara.textContent = "Your Assignment is approaching!";
}
showAssBtn.addEventListener("click", ShowAssignment);

showAttBtn.addEventListener("click", () => {
    attPara.textContent = "Please check your attendence status!";
});

stopAssBtn.addEventListener("click", () => {
    showAssBtn.removeEventListener("click", ShowAssignment);
    assPara.textContent = "Your Assignment Notification is stopped!";
});

//Event Bubbeling

const parent = document.getElementById("outer");
const child = document.getElementById("inner");

parent.addEventListener("click", () => {
    console.log("Parent Clicked!");
});

child.addEventListener("click", () => {
    console.log("Child Clicked!");
});

//Event Capturing

const stip = document.getElementById("EventCapturing");

function view(){
    console.log("view button clicked!");
}

stip.addEventListener("click", view);
document.getElementById("view").addEventListener("click", view);

//Event Delegation
const parentCard = document.getElementById("EventDelegation");

parentCard.addEventListener("click", (e) => {
  //   console.log(e.target.tagName);

  if (e.target.tagName === "DIV") {
    console.log(e.target.textContent);
  }
});