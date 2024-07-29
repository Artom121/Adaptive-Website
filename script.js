const navBtn = document.querySelector('#hamburger-nav-btn')
const navMobile = document.querySelector('.nav__hamburger')
navBtn.addEventListener('click', () => {
    navMobile.classList.toggle('hide')
})



let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
console.log(slides)


slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        slides[currentIndex % 3].classList.toggle('hide')
        slides[(currentIndex + 1) % 3].classList.toggle('hide')
        currentIndex += 1
    })
})




let currentIndexBlog = 0;
const slidesBlog = document.querySelectorAll('.slide-blog');


slidesBlog.forEach((slide) => {
    slide.addEventListener('click', () => {
        slidesBlog[currentIndexBlog % 4].classList.toggle('hide')
        slidesBlog[(currentIndexBlog + 1) % 4].classList.toggle('hide')
        currentIndexBlog += 1

    })
})



let currentIndexPhoto = 0;
const slidesPhoto = document.querySelectorAll('.slide-photo');


slidesPhoto.forEach((slide) => {
    slide.addEventListener('click', () => {
        slidesPhoto[currentIndexPhoto % 6].classList.toggle('hide')
        slidesPhoto[(currentIndexPhoto + 1) % 6].classList.toggle('hide')
        currentIndexPhoto += 1

    })
})