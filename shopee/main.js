const logInBtn = document.querySelector('.header__navbar-item--login');
const registerBtn = document.querySelector('.header__navbar-item--register');
const modal = document.querySelector('.modal');
const loginForm = document.querySelector('.auth-form.auth-form--register');

logInBtn.onclick = () =>{
    modal.style.display = 'flex';
    loginForm.style.display = 'flex'
}