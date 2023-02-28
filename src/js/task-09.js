const refs = {
  button: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color'),
  body: document.body
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorChange = () => {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.spanColor.textContent = color;
}

refs.button.addEventListener('click', colorChange);