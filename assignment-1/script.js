 // Get references to the burger menu and navigation links
 const burgerMenu = document.querySelector('.burger-menu');
 const navLinks = document.querySelector('nav ul');

 // Toggle the navigation menu when the burger button is clicked
 burgerMenu.addEventListener('click', () => {
     navLinks.classList.toggle('show-menu');
 });