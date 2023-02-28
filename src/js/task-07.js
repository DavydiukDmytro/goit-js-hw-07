const refs = {
    inputControl: document.querySelector('#font-size-control'),
    spanText: document.querySelector('#text')
}
const abracadabra = event => {
    refs.spanText.style.fontSize = `${event.currentTarget.value}px`;
};
refs.inputControl.addEventListener("input", abracadabra);