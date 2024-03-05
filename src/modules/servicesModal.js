'use strict';

import { openModal } from './helpers';

const servicesModal = () => {
    const servicesCarousel = document.querySelector('.services-carousel');

    servicesCarousel.addEventListener('click', (e) => {
        if (e.target.closest('.fancyboxModal')) {
            e.preventDefault();

            openModal('.modal-callback', 'active');
        }
    });
};

export default servicesModal;