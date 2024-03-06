'use strict';


import modal from './modules/modal';
import closeModal from './modules/closeModal';
import topMenu from './modules/topMenu';
import toTop from './modules/toTop';
import accordeon from './modules/accordeon';
import topSlider from './modules/topSlider';
import swiperCarousel from './modules/swiperCarousel';
import sendForm from './modules/sendForm';


modal();
closeModal('.modal-callback');
topMenu();
toTop();
accordeon();
topSlider();
swiperCarousel();
sendForm({ attibuteForm: '[name="form-callback"]' });