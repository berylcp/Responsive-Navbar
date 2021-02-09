const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li');

    burger.addEventListener('click', () => {
        // Toggle nav
        nav.classList.toggle('navActive');

        // Animate links
        navLinks.forEach((link, index) => {
            // link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1}s`;
            }
        });

        // Burger animations
        burger.classList.toggle('toggle');
    });
}

navSlide();