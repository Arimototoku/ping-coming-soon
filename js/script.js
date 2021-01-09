
const errorValue = document.getElementById('error');
const email = document.getElementById('email');
const submit = document.getElementById('submit');

const setErrorMessage = message => {
    errorValue.style.visibility = "visible";
    email.style.borderColor = "#FF0000";
    errorValue.textContent = message;       
}  

const checkClientWidth = () => {
    if (window.innerWidth < 570) {
        submit.style.marginTop = '40px';
        errorValue.style.position = 'relative';
        errorValue.style.bottom = '90px';
    }
}

const resetErrorValue = () => {
    email.style.borderColor = '';
    errorValue.style.visibility = '';
    submit.style.marginTop = '40px';
    errorValue.style.position = '';
    errorValue.style.bottom = '';
}

const checkEmailField = () => {
    resetErrorValue();
    checkClientWidth();
    if (!email.value) {
        setErrorMessage("Whoops! It looks like you forgot to add your email");
        return;
    }
    if (email.value.length < 5 || !email.value.includes('@')) {
        setErrorMessage("Please provide a valid email address");
    }

}

submit.addEventListener('click', checkEmailField);

console.log(window.innerWidth);
