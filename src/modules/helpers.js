'use strict';

const slicer = (str, num) => {
    return str.trim().length > num ? str.trim().substring(0, num).trim() + '...' : str.trim();
};

const animate = ({ timing, draw, duration }) => {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
        // timeFraction изменяется от 0 до 1
        let timeFraction = (time - start) / duration;
        if (timeFraction > 1) timeFraction = 1;
        // вычисление текущего состояния анимации
        let progress = timing(timeFraction);

        draw(progress); // отрисовать её

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }

    });
};

const toggleClass = (elementClass, className) => {
    document.querySelector(elementClass).classList.toggle(className);
};

const openModal = (modalClass, nameClass) => {
    const modal = document.querySelector(modalClass);
    const overlay = document.querySelector('.modal-overlay');

    overlay.classList.add(nameClass);
    modal.classList.add(nameClass);
};

const closeModal = (modalClass) => {
    const modal = document.querySelector(modalClass);
    const overlay = document.querySelector('.modal-overlay');

    overlay.classList.remove('.active');
    modal.classList.remove('.active');
};

export { slicer, animate, toggleClass, openModal, closeModal };