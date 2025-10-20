const buttonOpen = document.querySelector('.btn--menu');
const navBar = document.querySelector('.header nav');

const showMenu = event =>{
  buttonOpen.classList.toggle('open')
  navBar.classList.toggle('show--menu')
}
buttonOpen.addEventListener('click',showMenu)