
const clickCountElement = document.getElementById('clickCount');
const messageElement = document.getElementById('message');

let clickCount = 0;


window.addEventListener('click', updateClickCounterAndMessage);

function updateClickCounterAndMessage() {
  clickCount++;
  clickCountElement.textContent = clickCount;

  if (clickCount >= 5 && clickCount <= 9) {
    messageElement.textContent = "Bravo, bel échauffement !";
  } else if (clickCount >= 10) {
    messageElement.textContent = "Vous êtes passé maître en l'art du clic !";
  } else {
    messageElement.textContent = "";
    
  }
}



