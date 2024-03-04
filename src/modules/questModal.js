'use strict';

import { animate, openModal } from './helpers';


const questModal = () => {
    const questSection = document.querySelector('.quest-section');

    questSection.addEventListener('click', (e) => {
        if (e.target.closest('.button-services')) {
            e.preventDefault();

            openModal('.modal-callback', 'active');
        }
    });
};

export default questModal;