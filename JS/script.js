// ================= MENU RESPONSIVE =================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// ================= SCROLL ACTIVE =================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY; 
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));

            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) activeLink.classList.add('active');
        }
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // reset menu
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// ================= SCROLL REVEAL =================
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .projets-box, .Contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


// ================= TYPE JS =================
const typed = new Typed('.multiple-text', {
    strings: ['Développeur web | Mobile', 'Designer', 'Assistant Virtuel'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// ================= MODALS =================

// ouvrir modal
document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        let modalId = btn.getAttribute('data-modal');
        document.getElementById(modalId).classList.add('show');
    });
});

// fermer modal bouton X
document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal').classList.remove('show');
    });
});

// fermer en cliquant dehors
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', e => {
        if (e.target === modal) modal.classList.remove('show');
    });
});


// ================= SLIDER IMAGE (NEXT / PREV + ZOOM) =================
document.querySelectorAll(".slider").forEach(slider => {
    const images = slider.querySelectorAll(".slide");
    let index = 0;

    const showImage = (i) => {
        images.forEach(img => {
            img.classList.remove("active");
            img.classList.remove("zoomed");
        });
        images[i].classList.add("active");
    };

    const nextBtn = slider.querySelector(".next");
    const prevBtn = slider.querySelector(".prev");

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => {
            index = (index + 1) % images.length;
            showImage(index);
        });

        prevBtn.addEventListener("click", () => {
            index = (index - 1 + images.length) % images.length;
            showImage(index);
        });
    }

    // zoom image
    images.forEach(img => {
        img.addEventListener("click", () => {
            img.classList.toggle("zoomed");
        });
    });

    showImage(index);
});


// ================= PROGRESS BAR =================
document.addEventListener("DOMContentLoaded", () => {
    const progresses = document.querySelectorAll(".skill-progress");

    progresses.forEach(bar => {
        const value = bar.getAttribute("data-progress");
        bar.style.width = value + "%";
    });
});