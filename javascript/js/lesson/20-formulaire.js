const formLogin = document.querySelector('#form-login');
const errors = document.getElementById('errors');
const success = document.getElementById('success');

formLogin.addEventListener('submit', function (e) {
    e.preventDefault();

    formVerify();
});

function formVerify() {
    
    const formData = new FormData(formLogin);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm-password');
    const errorMessages = [];
    

    if (name === '') {
        setErrorMessage(email, 'Veuillez remplir le champ');
        return false;
    } else if (!isValidEmail(emailValue)) {
        setErrorMessage(email, 'Email non valide');
    }

    if (email === '') {
        setErrorMessage(email, 'Veuillez remplir le champ');
        return false;
    } else if (!isValidEmail(emailValue)) {
        setErrorMessage(email, 'Email non valide');
    }

    if (password === '' && confirmPassword === '') {
        setErrorMessage(password, 'Veuillez remplir tous le champ');
        return false;
    } else if (password !== confirmPassword) {
        setErrorMessage(password, 'Les mots de passe ne correspondent pas');
        return false;
    }
}

function successMessage() {
    if (errorMessages.length > 0) {
        const errorList = document.createElement('ul');
        for (const message of errorMessages) {
            const listItem = document.createElement('li');
            listItem.textContent = message;
            errorList.appendChild(listItem);
        }
        errors.appendChild(errorList);
    } else {
        success.textContent = 'Le formulaire a été soumis avec succès !';
        form.reset();
    
        fetch('/url-du-serveur', {
            method: 'POST',
            body: formData,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erreur lors de l'envoi du formulaire.");
                }
                return response.json();
            })
            .then((data) => {
                // Traitement de la réponse du serveur
                console.log('Le formulaire a été envoyé avec succès.');
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

function setErrorMessage(element, message) {
    const formControl = element.parentElement.querySelector('.form-control');
    formControl.innerHTML = message;
}

function isValidEmail(email) {
    // Validation d'email basique
    return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
}



