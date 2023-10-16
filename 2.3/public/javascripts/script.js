const btn1 = document.querySelector("#myBtn1");
const btn2 = document.querySelector("#myBtn2");

btn1.addEventListener("click", countclick);
btn1.addEventListener("mouseover",delayedAlert)
btn2.addEventListener("click", clearAlert);
let count = 0;
let timeoutID;
const delayInSeconds = 5;
const delayInMiliSeconds = delayInSeconds * 1000;

function delayedAlert() {

  timeoutID = setTimeout(() => {
    count = 0;
    alert(`You asked for this popup ${delayInSeconds}s ago!`);
  }, delayInMiliSeconds);
  
}
function countclick() {
    count++
    if(count === 10){
        clearAlert();
        alert(`you did it`);
        
    }

}


function clearAlert() {
    count = 0;
  clearTimeout(timeoutID);
}