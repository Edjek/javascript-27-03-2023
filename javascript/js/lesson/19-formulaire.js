const formLogin = document.querySelector('#form-login');

formLogin.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(formLogin);
    const name = formData.get('name');
    const email = formData.get('email');

    
});
