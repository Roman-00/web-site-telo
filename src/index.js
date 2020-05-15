'use strict';

// Подключение  Полифилов
import "@babel/polyfill";
import 'formdata-polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'es6-promise';
import 'fetch-polyfill';


//Ипортируем наши функции из папки modules
import header from './modules/header';
import popupMenu from './modules/popupMenu';
import scrollDocument from './modules/scrollDocument';
import mainSlider from './modules/mainSlider';

// Вызываем функцию header
header();

// Вызываем функцию popupMenu
popupMenu();

//Вызываем функцию scrollDocument
scrollDocument();

//Вызываем функцию mainSlider
mainSlider();