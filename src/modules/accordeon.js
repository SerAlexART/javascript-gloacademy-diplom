'use strict';

const accordeon = () => {
    const accordeon = document.querySelector('.accordeon');
    const accordeonElements = accordeon.querySelectorAll('.element');
    const accordeonTitles = accordeon.querySelectorAll('.title');
    const accordeonContents = accordeon.querySelectorAll('.element-content');

    accordeonTitles.forEach((title, indexTitle) => {
        title.addEventListener('click', () => {
            const parentTitle = title.parentElement;

            if (parentTitle.classList.contains('active')) {
                parentTitle.classList.remove('active');
            } else {
                accordeonElements.forEach((element, indexElement) => {
                    element.classList.remove('active');
                    parentTitle.classList.add('active');
                });
            }
        });
    });
};

export default accordeon;