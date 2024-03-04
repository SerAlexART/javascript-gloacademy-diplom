'use strict';

import { openModal } from './helpers';


const modalHeader = () => {
    const header = document.querySelector('.header');

    header.addEventListener('click', (e) => {
        if (e.target.closest('.callback-btn')) {
            e.preventDefault();

            openModal('.modal-callback', 'active');
        }
    });
};

export default modalHeader;