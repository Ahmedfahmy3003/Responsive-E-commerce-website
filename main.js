// Header Scroll Color Change
let  header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});


// Menu
let menu = document.querySelector('#nav-icon');
let navbar = document.querySelector('navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// remove scroll bar
window.onscroll = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.remove('active');
}

