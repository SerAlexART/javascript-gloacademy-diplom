'use strict';

import { animate } from './helpers';


const modalCallback = () => {
    // const header = document.querySelector('.header');
    const overlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.modal-callback');
    const callbackButtons = document.querySelectorAll('.callback-btn');
    const buttonClose = document.querySelector('.modal-close');

    const toggleClass = () => {
        overlay.classList.toggle('active');
        modal.classList.toggle('active');
    };

    callbackButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            // console.log(e.target);
            if (e.target.closest('.callback-btn')) {
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

export default modalCallback;