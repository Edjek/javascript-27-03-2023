window.addEventListener('load', function () {
    const inputChange = document.querySelector('#input-change')
    const inputInput = document.querySelector('#input-input')
    const spanChange = document.querySelector('#span-change')
    const spanInput = document.querySelector('#span-input')

    // Ecouteur sur inputChange => 'change'
    // spanChange => valeur de inputChange
    inputChange.addEventListener('change', function () {
        spanChange.textContent = inputChange.value
    })

    inputInput.addEventListener('input', function () {
        spanInput.textContent = inputInput.value
    })
})

// DOMContentLoaded
window.addEventListener('DOMContentLoaded ', function () {

})

const body = document.querySelector('body')
body.style.height = '1200px'

// Scroll
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {

    }
})

