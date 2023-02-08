import './pages/index.css';
import Inputmask from "../inputmask.es6.js";

const headerCall = document.querySelector('.header__call');
const footerCall = document.querySelector('.footer__call');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
const popupForm = document.forms["popup-form"];
const learnMore = document.querySelectorAll('.technologies__block');

//функция открытия попапов
function openPopup() {
  popup.classList.add('popup_opened');
	// burgerButton.classList.remove('header__burger-btn_active');
	// headerBurger.classList.remove('header__burger-type_active');
  document.addEventListener('keydown', closePopupEsc);
  popupForm.reset();
};

//закрытие попапа
const closePopup = function () {
  const popupOpened = document.querySelector('.popup_opened');
  if (popupOpened) {
    popupOpened.classList.remove('popup_opened');
  }
  document.removeEventListener('keydown', closePopupEsc);
};

//закрытие попапа нажатием Esc
const closePopupEsc = function (event) {
  if(event.key === "Escape") {
		closePopup();
  };
};

//закрытие попапа кликом на оверлей 
const closePopupClickOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
};

//обработчики событий
headerCall.addEventListener('click', openPopup);
// getConsultBurger.addEventListener('click', openPopup);
footerCall.addEventListener('click', openPopup);
closeButton.addEventListener('mousedown', closePopup);
popup.addEventListener('mousedown', closePopupClickOverlay);
learnMore.forEach(el => {
	el.addEventListener("click", openPopup);
});

//маска телефона
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

// выделение активного меню
window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (window.innerWidth > 768) {
		document.querySelectorAll('.section').forEach((el, i) => {
			if (el.offsetTop - document.querySelector('.header__links').clientHeight <= scrollDistance) {
				document.querySelectorAll('.header__links a').forEach((el) => {
					if (el.classList.contains('header__ref_active')) {
						el.classList.remove('header__ref_active');
					}
				});

				document.querySelectorAll('.header__ref')[i].classList.add('header__ref_active');
			}
		});
	}
});

//отправка формы
document.getElementById("popup-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "service_yrbmh46";
  const templateID = "template_yha8z6g";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      document.querySelector(".popup__input").value = "";
      callPopup.classList.remove('popup_opened');
      thanksPopup.classList.add('popup_opened');
    },
    (err) => {
      alert(JSON.stringify(err));
    }
  );
});

document.getElementById("main__unit").addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "service_yrbmh46";
  const templateID = "template_yha8z6g";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      document.querySelector(".main__input").value = "";
      thanksPopup.classList.add('popup_opened');
    },
    (err) => {
      alert(JSON.stringify(err));
    }
  );
});

document.getElementById("consultation__form").addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "service_yrbmh46";
  const templateID = "template_yha8z6g";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      document.querySelector("#name").value = "";
      document.querySelector("#email").value = "";
      document.querySelector("#message").value = "";
      thanksPopup.classList.add('popup_opened');
    },
    (err) => {
      alert(JSON.stringify(err));
    }
  );
});
