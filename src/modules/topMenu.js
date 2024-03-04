'use strict';

const topMenu = () => {
    const servicesSection = document.querySelector('.services-section');
    const questSection = document.querySelector('.quest-section');
    const contactsSection = document.querySelector('.contacts-section');

    const menu = document.querySelector('.top-menu');
    const buttons = menu.querySelectorAll('ul > li > a');

    buttons.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            if (index === 0) {
                servicesSection.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                });
            } else if (index === 1) {
                questSection.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                });
            }
            else if (index === 2) {
                contactsSection.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                });
            }
        });
    });
};


export default topMenu;