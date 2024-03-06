'use strict';

import { openModal } from './helpers';

const modal = () => {

    const modalHeader = () => {
        const button = document.querySelector('.header > .callback-btn');

        button.addEventListener('click', (e) => {
            e.preventDefault();

            openModal('.modal-callback', 'active');
        });
    };

    const servicesModal = () => {
        const servicesCarousel = document.querySelector('.services-carousel');

        servicesCarousel.addEventListener('click', (e) => {
            if (e.target.closest('.fancyboxModal')) {
                e.preventDefault();

                openModal('.modal-callback', 'active');
            }
        });
    };

    const questModal = () => {
        const questSection = document.querySelector('.quest-section');

        questSection.addEventListener('click', (e) => {
            if (e.target.closest('.button-services')) {
                e.preventDefault();

                openModal('.modal-callback', 'active');
            }
        });
    };

    modalHeader();
    servicesModal();
    questModal();
};

export default modal;