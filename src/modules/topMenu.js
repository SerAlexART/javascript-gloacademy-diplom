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
                console.log(e.target.textContent);
                servicesSection.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                });
            } else if (index === 1) {
                console.log(e.target.textContent);
                questSection.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                });
            }
            else if (index === 2) {
                console.log(e.target.textContent);
                contactsSection.scrollIntoView({
                    block: "start",
                    behavior: "smooth"
                });
            }
        });
    });
};


export default topMenu;