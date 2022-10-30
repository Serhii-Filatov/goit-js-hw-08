
import _ from 'lodash';

const lodash = _; 
let valuesForm = {};
let formObj = localStorage.getItem('feedback-form-state');

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea'),
}

if (formObj) {
    const dataFromStorage = JSON.parse(formObj)

    writeValuesForm(dataFromStorage);
}

function writeValuesForm(dataFromStorage) {        
    const {
        email,
        message,
    } = dataFromStorage;

    if (dataFromStorage.hasOwnProperty('email')) {
        refs.email.value = email;
        valuesForm.email = email;
    }

    if (dataFromStorage.hasOwnProperty('message')) {
        refs.message.value = message;
        valuesForm.message = message;
    }    
}

const onInputWrite = (event) => {
    const atrName = event.target.getAttribute('name');

    if (atrName === "email") {
        valuesForm.email = event.target.value;
    }
    
    if (atrName === "message") {
        valuesForm.message = event.target.value;
    }

    formObj = JSON.stringify(valuesForm);
    localStorage.setItem("feedback-form-state", formObj);
}

const onButtonClick = (event) => {
    event.preventDefault(); 
    console.log(valuesForm)

    localStorage.clear();   
    refs.email.value = '';
    refs.message.value = '';
    valuesForm = {};
}

refs.form.addEventListener('input', lodash.throttle(onInputWrite, 500));

refs.form.addEventListener('submit', onButtonClick);