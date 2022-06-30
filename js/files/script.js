// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// burger:

// отримую батьківський елемент:
const header = document.querySelector(".header");
// прослуховую документ:
document.addEventListener('click', burger);

function burger(e) {
	if (e.target.closest('.header__burger')) {
		header.classList.toggle('open-burger');
	} else {
		header.classList.remove('open-burger');
	}
};