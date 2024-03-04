'use strict';


// Решение 1 - Start
// В макете на главной странице есть кнопки с классом fancyboxModal, модуль modalToggle перебирает эти кнопки и открывает/закрывает модальное окно, что автоматически решает задачи 1, 5 и 6 из ТЗ.
// import modalToggle from './modules/modalToggle';
// Решение 1 - End

// Решение 2 - Start
// Вынести взаимодействие с модальными окнами отдельно для каждого блока из задачи 1, 5 и 6. Дополнительно использовалась фунеция помощник openModal
import closeModal from './modules/closeModal';
import modalHeader from './modules/modalHeader';
import servicesModal from './modules/servicesModal';
import questModal from './modules/questModal';
// Решение 2 - End

import topMenu from './modules/topMenu';
import toTop from './modules/toTop';
import accordeon from './modules/accordeon';
import topSlider from './modules/topSlider';
import swiperCarousel from './modules/swiperCarousel';



// Решение 1 - Start
// modalToggle('.fancyboxModal', '.modal-callback');
// Решение 1 - End

// Решение 2 - Start
// Модуль закрытия модального окна с указанием класса.
closeModal('.modal-callback');
modalHeader();
servicesModal();
questModal();
// Решение 2 - End

topMenu();
toTop();
accordeon();
topSlider();
swiperCarousel();