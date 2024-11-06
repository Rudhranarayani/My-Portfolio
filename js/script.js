


const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // Adjust this value based on when you want the color to change
        navbar.classList.add('navbar-scroll-effect');
    } else {
        navbar.classList.remove('navbar-scroll-effect');
    }
});