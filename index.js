/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

let h1 = document.getElementById("greeting");
let time = handleClick(e);

function greet(string) {
  let time = string.substr(0, 2);
  if (time > 17) {
    return "Good Evening";
  }
  else if (time > 12){
    return "Good Afternoon";
  }
  else {
    return "Good Morning";
  }
}

function displayMessage(string) {
 h1.innerText = string;
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
