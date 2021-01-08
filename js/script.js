
const errorValue = document.getElementById('error');
const email = document.getElementById('email');
const submit = document.getElementById('submit');

const checkEmailField = () => {
    email.style.borderColor = "";
    errorValue.style.visibility = "hidden";
    if (!email.value) {
        errorValue.style.visibility = "visible";
        email.style.borderColor = "#FF0000";
        errorValue.textContent = "Whoops! It looks like you forgot to add your email";
        return;
    }
    if (email.value.length < 5 || !email.value.includes('@')) {
        errorValue.style.visibility = "visible";
        email.style.borderColor = "#FF0000";
        errorValue.textContent = "Please provide a valid email address";
    }

}

submit.addEventListener('click', checkEmailField);

