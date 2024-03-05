'use strict';

const modalToggle = (buttonClass, modalClass) => {
    const modal = document.querySelector(modalClass);
    const overlay = document.querySelector('.modal-overlay');
    const openButtons = document.querySelectorAll(buttonClass);
    const closeButton = modal.querySelector('.modal-close');

    const toggleClass = () => {
        overlay.classList.toggle('active');
        modal.classList.toggle('active');
    };

    openButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.closest(buttonClass)) {
                toggleClass();
            }
        });
    });

    overlay.addEventListener('click', (e) => {
        toggleClass();
    });

    closeButton.addEventListener('click', (e) => {
        toggleClass();
    });
};

export default modalToggle;