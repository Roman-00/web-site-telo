!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=323)}({28:function(e,t,n){"use strict";t.a=function(){var e=document.getElementById("callback_form"),t=document.getElementById("free_visit_form"),n=document.querySelectorAll(".popup"),o=document.querySelector(".fixed-gift"),r=document.getElementById("gift"),c=document.querySelector(".clubs-list").querySelector("ul");document.addEventListener("click",(function(i){var l=i.target;if((l.classList.contains("close_icon")||l.classList.contains("overlay")||l.classList.contains("close-btn"))&&n.forEach((function(e){e.style.display="none"})),l.matches(".clubs-list>p")){if(c.hasAttribute("style"))return void c.removeAttribute("style");(c.style.display="none")&&(c.style.display="block")}l.matches(".fixed-gift>img")&&(o.style.display="none",r.style.display="block"),l.classList.contains("open-popup")&&(t.style.display="block"),l.matches(".head-main>.right>.call>.btn")&&(e.style.display="block")}))}},29:function(e,t,n){"use strict";t.a=function(){document.querySelector(".top-menu").querySelector("img");var e=document.querySelector(".popup-menu");document.body.addEventListener("click",(function(t){var n=t.target;n&&n.closest(".menu-button")?e.style.display="flex":!n||"A"!==n.tagName&&n.classList.contains("close-menu-btn>img")||(e.style.display="none")}))}},30:function(e,t,n){"use strict";t.a=function(){var e=document.querySelector(".top-menu"),t=document.querySelector(".wrapper>a");0==window.scrollY&&(t.style.display="none"),document.addEventListener("scroll",(function(){window.scrollY>190&&document.documentElement.clientWidth<768?e.style.position="fixed":e.removeAttribute("style"),window.scrollY<775?t.style.display="none":t.style.display="block"}))}},31:function(e,t,n){"use strict";t.a=function(){var e=document.querySelector(".main-slider"),t=e.querySelectorAll(".slide"),n=0;setInterval((function(){t[n].style.display="none",++n>=t.length&&(n=0),t[n].style.display="flex"}),3e3)}},32:function(e,t,n){"use strict";t.a=function(){var e=document.querySelector(".services-slider"),t=e.querySelectorAll(".slide-services"),n=(document.getElementById("services-left"),document.getElementById("services-right"),0),o=4,r=[],c=function(){t.forEach((function(e,t){t<5&&(e.classList.add("active"),r.push(t))}))};c();var i=function(){t.forEach((function(e){e.classList.remove("active")}))},l=function(){for(var e=0;e<r.length;e++)t[r[e]].classList.add("active")},s=function(){0==n?(i(),r=[],t.forEach((function(e,t){t>4&&(e.classList.add("active"),r.push(t))})),n=5):(n--,r.pop(),r.unshift(n),i(),l())};e.addEventListener("click",(function(e){var t=e.target;e.preventDefault(),t.matches("#services-right, #services-left")&&(t.matches("#services-right")&&(9==o?(i(),r=[],c(),o=4):(o++,r.shift(),r.push(o),i(),l())),t.matches("#services-left")&&s())}))}},323:function(e,t,n){"use strict";n.r(t);var o=n(28),r=n(29),c=n(30),i=n(31),l=n(32),s=n(33),a=n(34),u=n(35),d=n(36);Object(o.a)(),Object(r.a)(),Object(c.a)(),Object(i.a)(),Object(d.a)(),Object(u.a)(),Object(l.a)(),Object(s.a)(),Object(a.a)()},33:function(e,t,n){"use strict";t.a=function(){var e=document.querySelector(".gallery-slider"),t=e.querySelectorAll(".slide"),n=(document.querySelectorAll(".gallery-btn"),document.querySelectorAll(".dot"));t.forEach((function(e,t){0==t?e.style.display="block":0!==t&&(e.style.display="none")}));var o=function(e,t){e[t].style.display="none"},r=function(e,t){e[t].style.display="block"},c=0,i=0,l=function(){o(t,c),++c>=t.length&&(c=0),r(t,c)},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2500;i=setInterval(l,e)};e.addEventListener("click",(function(e){var i=e.target;e.preventDefault(),i.matches(".slider-arrow, .dot")&&(o(t,c),i.matches("#services-right")&&c++,i.matches("#services-left")?c--:i.matches(".dot")&&n.forEach((function(e,t){e===i&&(c=t)})),c>=t.length&&(c=0),c<0&&(c=t.length-1),r(t,c))})),e.addEventListener("mouseover",(function(e){(e.target.matches(".slider-arrow")||e.target.matches(".dot"))&&clearInterval(i)})),e.addEventListener("mouseout",(function(e){(e.target.matches(".slider-arrow")||e.target.matches(".dot"))&&s()})),s(5e3)}},34:function(e,t,n){"use strict";t.a=function(){var e=document.querySelector("#card_order"),t=document.querySelector(".price-message>input"),n=document.querySelector("#price-total"),o={mozaika:[{period:1,price:1999},{period:6,price:9900},{period:9,price:13900},{period:12,price:19900}],schelkovo:[{period:1,price:2999},{period:6,price:14990},{period:9,price:21990},{period:12,price:24990}]};e.addEventListener("change",(function(e){var t=e.target;t.matches(".time>input")&&l(t),t.matches(".club>input")&&c(t)}));var r="mozaika",c=function(e){r=e.value,s()},i=1,l=function(e){i=e.value,s()};t.addEventListener("change",(function(){s()}));var s=function(){var e,c=o[r].find((function(e){return e.period==i}));e="ТЕЛО2020"!=t.value?1:.7,n.textContent=Math.ceil(c.price*e)}}},35:function(e,t,n){"use strict";t.a=function(){document.querySelectorAll("form").forEach((function(e){e.addEventListener("input",(function(e){var t=e.target;"phone"===t.name&&(t.value=t.value.replace(/^[0-9+]{13}$/gi,"")),"name"!==t.name&&"user_message"!==t.name||(t.value=t.value.replace(/[^а-я0-9 ]/gi,""))}))}))}},36:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.a=function(){var e=document.getElementById("thanks"),t=document.querySelector("body"),n=document.createElement("div");n.classList.add("toDel"),n.style.cssText="margin-top: 10px !important",t.addEventListener("submit",(function(t){t.preventDefault();for(var r=t.target,l=r.children,s=r.querySelector(".personal-data"),a=0;a<l.length;a++){if(s)if(0==r.querySelector(".personal-data input").checked){var u=function(){var e=document.createElement("div");return e.classList.add("validator-error"),e.textContent="Необходимо согласиться на обработку данных",s.insertAdjacentElement("beforeend",e),setTimeout((function(){return e.remove()}),2e3),{v:void 0}}();if("object"===o(u))return u.v}}r.appendChild(n),n.innerHTML="\n      <div class=\"send-text\">Идет отправка данных</div>\n      <div class='sk-double-bounce'>\n        <div class='sk-child sk-double-bounce-1'></div>\n        <div class='sk-child sk-double-bounce-2'></div>\n      </div>";var d=r.querySelectorAll("input"),f=r.querySelector("#price-total"),p=new FormData;f&&p.append(f.id,f.textContent),d.forEach((function(e){("text"==e.type||"tel"==e.type||"checkbox"!==e.type&&e.checked)&&p.append(e.name,e.value)})),i(p).then((function(e){if(200!==e.status)throw new Error("status network");n.remove(),c(),r.querySelectorAll("input").forEach((function(e){e.value="",e.checked="",e.classList.remove("success")}))})).catch((function(t){n.remove(),c(),e.querySelector(".form-content").innerHTML='<p>Во время отправки формы возникала ошибка.</p>\n              <button class="btn close-btn">OK</button>',console.error(t)}))}));var r,c=function(){e.style.display="block",e.querySelector(".form-content").innerHTML='<h4>Спасибо!</h4><p>Ваша заявка отправлена.<br>\n      Мы свяжемся с вами в ближайшее время.</p><button class="btn close-btn">OK</button>',e.addEventListener("click",(function(t){var n=t.target;n.closest(".form-content")&&!n.classList.contains("close-btn")||(e.style.display="none")}))};(r=document.createElement("style")).textContent="\n      .validator-error {\n          margin-top: 15px;\n          font-size: 18px;\n          font-family:sans-serif;\n          color: red;\n      }\n      ",document.head.appendChild(r);var i=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:e})}}}});