'use strict';

//Ипортируем наши функции из папки modules
import header from './modules/header';
import popupMenu from './modules/popupMenu';
import scrollDocument from './modules/scrollDocument';
import mainSlider from './modules/mainSlider';
import servicesSlider from './modules/servicesSlider';
import sliderGallery from './modules/sliderGallery';
import calc from './modules/calc';
import validationForms from './modules/validationForms';
import sendForms from './modules/sendForms';

// Вызываем функцию header
header();

// Вызываем функцию popupMenu
popupMenu();

//Вызываем функцию scrollDocument
scrollDocument();

//Вызываем функцию mainSlider
mainSlider();

//Вызываем функцию отправки формы 
sendForms();

//Вызываем функцию валидации
validationForms();

//Вызов функции слайдер в блоке srvices
servicesSlider();

// Вызов функции слайдер в галерее
sliderGallery();

//Вызов функции калькулятор
calc();