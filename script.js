document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        // sticky navbar on scroll script
        var navbar = document.querySelector('.navbar');
        if (window.scrollY > 20) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
        
        // scroll-up button show/hide script
        var scrollUpBtn = document.querySelector('.scroll-up-btn');
        if (window.scrollY > 500) {
            scrollUpBtn.classList.add("show");
        } else {
            scrollUpBtn.classList.remove("show");
        }
    });

    // slide-up script
    var scrollUpBtn = document.querySelector('.scroll-up-btn');
    scrollUpBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        // removing smooth scroll on slide-up button click
        document.documentElement.style.scrollBehavior = "auto";
    });

    var menuLinks = document.querySelectorAll('.navbar .menu li a');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // applying smooth scroll on menu items click
            document.documentElement.style.scrollBehavior = "smooth";
        });
    });

    // toggle menu/navbar script
    var menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', function() {
        var menu = document.querySelector('.navbar .menu');
        menu.classList.toggle("active");
        this.querySelector('i').classList.toggle("active");
    });

    // owl carousel script
    var carousel = document.querySelector('.carousel');
    if (carousel) {
        var owl = new OwlCarousel(carousel, {
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items: 1,
                    nav: false
                },
                600:{
                    items: 2,
                    nav: false
                },
                1000:{
                    items: 3,
                    nav: false
                }
            }
        });
    }

    // copyright date
    const element = document.querySelector('.fa-copyright');
    element.textContent = " " + new Date().getFullYear();
});