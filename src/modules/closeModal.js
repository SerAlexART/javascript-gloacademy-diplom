'use strict';

const closeModal = (modalClass) => {
    const modal = document.querySelector(modalClass);
    const overlay = document.querySelector('.modal-overlay');
    const closeButton = modal.querySelector('.modal-close');

    overlay.addEventListener('click', (e) => {
        if (e.target.closest('.modal-overlay')) {
            overlay.classList.remove('active');
            modal.classList.remove('active');
        }
    });

    closeButton.addEventListener('click', (e) => {
        if (e.target.closest('.modal-close')) {
            overlay.classList.remove('active');
            modal.classList.remove('active');
        }
    });
};

export default closeModal;