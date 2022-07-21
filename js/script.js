let navBar = document.querySelector('.header__navbar');
let navLink = document.querySelector('.header__navbar-link');
let menuBtn = document.querySelector('#menu-btn');
let closeMenuBtn = document.querySelector('#close-btn');

menuBtn.onclick = () =>{
  navBar.classList.add('active');
}

closeMenuBtn.onclick = () =>{
  navBar.classList.remove('active');
};
