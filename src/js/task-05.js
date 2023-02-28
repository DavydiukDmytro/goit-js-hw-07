const refs = {
    textInput: document.querySelector('#name-input'),
    output: document.querySelector('#name-output')
}

refs.textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value !== "") {
        refs.output.textContent = event.currentTarget.value;
    } else {
        refs.output.textContent = 'Anonymous';
    }
});