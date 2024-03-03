'use strict';

const toTop = () => {
    const topSection = document.querySelector('html');
    const headerWrapper = document.querySelector('.header-wrapper');
    const topSlider = document.querySelector('.top-slider');
    const reactionSection = document.querySelector('.services-section');
    const button = document.querySelector('.up');

    let topSliderHeight;
    let headerHeight;
    let reactionSectionTop;

    button.style.display = 'none';

    window.addEventListener('scroll', () => {
        reactionSectionTop = reactionSection.getBoundingClientRect();
        topSliderHeight = topSlider.offsetHeight;
        headerHeight = headerWrapper.offsetHeight;

        if (reactionSectionTop.top <= headerHeight) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });

    button.addEventListener('click', (e) => {
        e.preventDefault();

        topSection.scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    });
};


export default toTop;