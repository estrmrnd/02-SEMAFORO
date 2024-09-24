const img = document.getElementById("img");
const buttons = document.getElementById("buttons");

let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
  stopAutomatic();
  turnOn[event.target.id]();
};

const nextIndex = () => {
  // outro forma de fazer de forma muito mais resumida, o ++ depois da varíavel primeiro atribui e depois adiciona mais um;
  //   quando se usa ternario com arrow function, não é necessário 'chaves {}'

  //   colorIndex = colorIndex < 2 ? ++colorIndex : 0;

  if (colorIndex < 2) {
    colorIndex++;
  } else {
    colorIndex = 0;
  }
};

const changeColor = () => {
  const colors = ["red", "yellow", "green"];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
};

const stopAutomatic = () => {
  clearInterval(intervalId);
};

const turnOn = {
  red: () => (img.src = "./img/vermelho.png"),
  yellow: () => (img.src = "./img/amarelo.png"),
  green: () => (img.src = "./img/verde.png"),
  automatic: () => (intervalId = setInterval(changeColor, 1000)),
};

buttons.addEventListener("click", trafficLight);
