'use strict';

import { openModal } from './helpers';

const openMobileMenu = () => {
    const mobileMenuButton = document.querySelector('.mob-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuClose = mobileMenu.querySelector('.mobile-menu-close');


    mobileMenuButton.addEventListener('click', (e) => {
        if (e.target.closest('.mob-menu-btn')) {
            mobileMenu.style.right = `${0}px`;
        }
    });

    mobileMenu.addEventListener('click', (e) => {
        if (e.target.closest('.mobile-menu-close')) {
            mobileMenu.style.right = `${-400}px`;
        } else if (e.target.closest('.callback-btn')) {
            openModal('.modal-callback', 'active');
            mobileMenu.style.right = `${-400}px`;
        }
    });
};

export default openMobileMenu;