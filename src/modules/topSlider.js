'use strict';

const topSlider = () => {
    const slider = document.querySelector('.top-slider');
    const slides = slider.querySelectorAll('.item ');

    const timeInterval = 2000;
    let currentSlide = 0;
    let interval;

    const prevSlide = (elems, index, slideClass) => {
        elems[index].classList.remove(slideClass);
    };

    const nextSlide = (elems, index, slideClass) => {
        elems[index].classList.add(slideClass);
    };

    const autoSlide = () => {
        prevSlide(slides, currentSlide, 'top-slider--active');
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        nextSlide(slides, currentSlide, 'top-slider--active');
    };

    const startSlide = (timer = 3000) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.item')) {
            stopSlide(timeInterval);
        }
    }, true);

    slider.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.item')) {
            startSlide(timeInterval);
        }
    }, true);


    startSlide();
};

export default topSlider;