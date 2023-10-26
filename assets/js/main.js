/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button');
const searchClose = document.getElementById('search-close');
const searchContent = document.getElementById('search-content');

if (searchButton) {
    searchButton.addEventListener('click', () => {
        searchContent.classList.add('show-search');
    });
};

if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchContent.classList.remove('show-search');
    });
};

/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button');
const loginClose = document.getElementById('login-close');
const loginontent = document.getElementById('login-content');

if (loginButton) {
    loginButton.addEventListener('click', () => {
        loginontent.classList.add('show-login');
    });
};

if (loginClose) {
    loginClose.addEventListener('click', () => {
        loginontent.classList.remove('show-login');
    });
};

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
}

window.addEventListener('scroll', shadowHeader);

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
});

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
});

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    breakpoints: {
        1150: {
            slidesPerView: 3,
        }
    }
});

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        }
    }
});

/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
