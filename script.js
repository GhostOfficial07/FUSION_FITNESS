let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toogle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Typing Text Script

const typed = new Typed('.multiple-text',{
    strings: ['Physical Fitness', 'Weight Gain', 'strength Training', 'Fat Lose', 'Weight Lifting', 'Running'],
    typeSpeed: 60,
    BackSpeed: 60,
    BackDelay: 1000,
    loop: true,
});