'use strict';

import { animate } from './helpers';


const servicesCarousel = () => {
    // const header = document.querySelector('.header');
    const overlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.modal-callback');
    const fancyButtons = document.querySelectorAll('.fancyboxModal');
    const buttonClose = document.querySelector('.modal-close');

    const toggleClass = () => {
        overlay.classList.toggle('active');
        modal.classList.toggle('active');
    };

    fancyButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            // console.log(e.target);
            if (e.target.closest('.fancyboxModal')) {
                e.preventDefault();
                // console.log(e);
                toggleClass();
            }
        });
    });

    overlay.addEventListener('click', () => {
        toggleClass();
    });

    buttonClose.addEventListener('click', () => {
        toggleClass();
    });
};

export default servicesCarousel;