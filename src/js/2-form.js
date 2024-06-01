const formData = {
    email: '',
    message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const localStorageKey = 'feedback-form-state';


window.addEventListener('DOMContentLoaded', () => {
    const savedData = loadFromLS(localStorageKey);
    if (savedData) {
 formData.email = savedData.email;
        formData.message = savedData.message;
        emailInput.value = savedData.email || '';
        messageTextarea.value = savedData.message || '';
        
    }
});


form.addEventListener('input', (event) => {
    if (event.target.name === 'email') {
        formData.email = event.target.value.trim();
    } else if (event.target.name === 'message') {
        formData.message = event.target.value.trim();
    }
    saveToLS(localStorageKey, formData);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (emailInput.value === '' || messageTextarea.value === '' ) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);

    localStorage.removeItem(localStorageKey);
    formData.email = '';
    formData.message = '';
    form.reset();
});


function saveToLS(localStorageKey, formData) {
    const jsonData = JSON.stringify(formData);
    localStorage.setItem(localStorageKey, jsonData);
}

function loadFromLS(localStorageKey) {
    const json = localStorage.getItem(localStorageKey);
    try {
        return JSON.parse(json);
    } catch {
        return null;
    }
}

