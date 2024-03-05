'use strict';

const sendForm = ({ attibuteForm }) => {
    // Видимость формы для удобства работы
    const overlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.modal-callback');
    overlay.classList.add('active');
    modal.classList.add('active');
    // Видимость формы для удобства работы

    const form = document.querySelector(attibuteForm);
    const nameInput = form.querySelector('[name="fio"]');
    const phoneInput = form.querySelector('[name="tel"]');

    const statusBlock = document.createElement('p');

    const loadMessage = 'Ваша заявка обрабатывается, пожалуйста, подождите.';
    const successMessage = 'Ваша заявка отправлена, мы скоро с Вами свяжется.';
    const errorMessage = 'Ошибка данных, пожалуйста, проверьте формат и правильность введёных данных и попробуйте ещё раз.';
    const validateMessage = 'Введён неверный формат.';

    phoneInput.setAttribute("required", true);

    statusBlock.classList.add('f14');

    const validateForm = () => {
        console.log(form);
    };

    const validateSend = (list) => {
        let name;
        let phone;

        let success = true;

        list.forEach((key) => {
            if (key.name === 'fio') {
                name = /^[а-яА-Я\s]+$/g.test(key.value);

                if (name === false) {
                    key.classList.add('error');
                } else {
                    key.classList.remove('error');
                }

            } else if (key.name === 'tel') {
                phone = /[\d\-\+\(\)^]/.test(key.value);

                if (phone === false) {
                    key.classList.add('error');
                } else {
                    key.classList.remove('error');
                }
            }
        });

        if (name === false || phone === false) {
            success = false;
        }

        list.forEach((input) => {
            // Проверка навешивания класса на форму. Должна быть отдельная функция и отдельный обработчик события допустим input, которая и будет реализовать навешивание класса и валидацию заполнения
            // if (!input.classList.contains('success')) {
            //     success = false;
            // }
        });

        return success;
    };

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            // return fetch('./server.php', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadMessage;
        statusBlock.style.color = '#333333';

        form.append(statusBlock);

        formData.forEach((value, key) => {
            formBody[key] = value;
        });

        if (validateSend(formElements)) {
            sendData(formBody).
                then((data) => {
                    statusBlock.textContent = successMessage;
                    statusBlock.style.color = '#2fab6d';

                    nameInput.value = '';
                    phoneInput.value = '';

                    setTimeout(() => {
                        statusBlock.remove();
                    }, 5000);
                })
                .catch((errir) => {
                    statusBlock.textContent = errorMessage;
                    statusBlock.style.color = '#ff493a';
                });
        } else {
            statusBlock.textContent = validateMessage;
            statusBlock.style.color = '#ff493a';
        }
    };

    validateForm();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        submitForm();
    });
};

export default sendForm;