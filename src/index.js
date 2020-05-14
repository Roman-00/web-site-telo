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

header();