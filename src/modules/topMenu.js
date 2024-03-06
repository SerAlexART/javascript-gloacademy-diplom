'use strict';

const topMenu = () => {

    const menu = document.querySelector('.top-menu');
    const buttons = menu.querySelectorAll('ul > li > a');

    buttons.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            const linkId = e.target.getAttribute('href');
            const sectionId = document.querySelector(linkId);

            sectionId.scrollIntoView({
                block: "start",
                behavior: "smooth"
            });
        });
    });
};

export default topMenu;