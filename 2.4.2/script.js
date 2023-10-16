const trafficLight = document.getElementById('trafficLight');
const colors = ['red', 'orange', 'green'];
let currentColorIndex = 0;

startTrafficLight();

function startTrafficLight() {
  setInterval(changeColor, 2000); 
}

function changeColor() {
  const lights = trafficLight.children;

  
  lights[currentColorIndex].classList.remove('active');
  lights[currentColorIndex].classList.add('white');

  
  currentColorIndex = (currentColorIndex + 1) % colors.length;

 
  lights[currentColorIndex].classList.remove('white');
  lights[currentColorIndex].classList.add(colors[currentColorIndex]);
}





