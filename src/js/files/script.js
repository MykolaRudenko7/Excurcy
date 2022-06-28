// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// burger:
//отримуєм бургер
const burger = document.querySelector('.header__burger');
// отримуємo батьківський елемент
const header = burger.closest(".header");

if (burger) {
	burger.addEventListener("click", function (e) {
		if (header) {
			header.classList.toggle('open-burger')
		}
	});
}
