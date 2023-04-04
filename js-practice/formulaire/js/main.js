const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    verifyForm()
})

function verifyForm() {
    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const password = document.querySelector('#password')
    const confirmPassword = document.querySelector('#confirm-password')
    removeMessageError()
    if (!name.value) {
        setMessageError(name, 'Veuillez remplir le champ')
    }
    if (!email.value) {
        setMessageError(email, 'Veuillez remplir le champ')
    } else if (isEmailValid(email.value)) {
        setMessageError(email, 'Email invalid')
    }

    if (!password.value || !confirmPassword.value) {
        setMessageError(password, 'Veuillez remplir le champ')

    } else if (password.value !== confirmPassword) {
        setMessageError(password, 'Les mots de passe ne correspondent pas')
    }
}

function setMessageError(element, errorMessage) {
    const span = document.createElement('span')
    span.innerText = errorMessage
    span.classList.add('error-message')
    element.parentElement.append(span)
}

function isEmailValid(email) {

}

function removeMessageError() {
    const messages = document.querySelectorAll('.error-message')
    messages.forEach((message) => {
        message.remove()
    })
}