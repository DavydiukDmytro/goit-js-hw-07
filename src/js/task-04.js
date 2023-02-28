const refs = {
    counter: document.querySelector('#value'),
    buttonDecrement: document.querySelector('button[data-action="decrement"]'),
    buttonIncrement: document.querySelector('button[data-action="increment"]'),
}

let counterValue = Number(refs.counter.textContent);

const decrementCounter = () => {
    counterValue -= 1;
    refs.counter.textContent = counterValue;
};
const incrementCounter = () => {
    counterValue += 1;
    refs.counter.textContent = counterValue;
};

refs.buttonDecrement.addEventListener("click", decrementCounter);
refs.buttonIncrement.addEventListener("click", incrementCounter);
