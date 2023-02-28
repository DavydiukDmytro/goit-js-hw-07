const refs = {
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('button[data-create]'),
  buttonDestroy: document.querySelector('button[data-destroy]'),
  boxesAdd: document.querySelector('#boxes')
}; 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  let markup = '';
  for (let i = 1; i < amount + 1; i += 1){
    markup += `<div style="background-color: ${getRandomHexColor()}; width: ${30 + i * 10}px; height: ${30 + i * 10}px"></div>`;
  }
  refs.boxesAdd.innerHTML = markup;
};

const destroyBoxes = () => {
  refs.boxesAdd.innerHTML = '';
};

refs.buttonCreate.addEventListener('click', event => createBoxes(Number(refs.input.value)));
refs.buttonDestroy.addEventListener('click', destroyBoxes);