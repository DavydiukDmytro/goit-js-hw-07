const inputRef = document.querySelector('#validation-input');

const chekingInput = (event) => {
    if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
        if (inputRef.classList.contains('invalid')) {
            inputRef.classList.remove('invalid'); 
        }
        inputRef.classList.add('valid');   
    } else {
        if (inputRef.classList.contains('valid')) {
            inputRef.classList.remove('valid'); 
        }
        inputRef.classList.add('invalid');  
    }
};

inputRef.addEventListener('blur', chekingInput);