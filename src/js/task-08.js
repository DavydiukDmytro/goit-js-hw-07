const refs = {
    form: document.querySelector('.login-form'),
};

const inputAreEmpty = elements => {
    let flag = false;
    elements.forEach(value => {
        if (!flag) {
            if (value === '') {
                flag = true;
            }
        }
    })
    return flag;
};
//1
const formSubmit = (event) => {
    //2
    event.preventDefault();
    //3
    const formData = new FormData(event.currentTarget);
    if (inputAreEmpty(formData)) {
        alert('All fields must be filled!!!');
        return;
    }
    //4
    const formElemrnts = event.currentTarget.elements;

    const email = formElemrnts.email.value;
    const password = formElemrnts.password.value;

    const elementsFormData = {
        email,
        password
    };
    //5
    console.log(elementsFormData);
    refs.form.reset();
};
refs.form.addEventListener('submit', formSubmit);