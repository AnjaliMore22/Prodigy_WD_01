document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        const title = document.getElementById('title');

        // Change navbar color on scroll
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
