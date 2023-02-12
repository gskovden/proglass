import './pages/index.css';
import Inputmask from "../inputmask.es6.js";

const popups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.popup__close-button');
const callPopup = document.querySelector('#callPopup');
const thanksPopup = document.querySelector('#thanksPopup');
const headerCall = document.querySelector('.header__call');
const footerCall = document.querySelector('.footer__call');
const learnMore = document.querySelectorAll('.technologies__block');
const burgerButton = document.querySelector('.header__burger-btn');
const headerBurgerType = document.querySelector('.header__burger-type');
const footer = document.querySelector('.footer');
const copyright = document.querySelector('.copyright');
const sections = document.querySelectorAll('.section');
const contacts = document.querySelector('.contacts');
const main = document.querySelector('.main');
const politics = document.querySelector('.politics');
const technologies = document.querySelector('.technologies');
const consultation = document.querySelector('.consultation');
const cases = document.querySelector('.cases');
const headerBlock = document.querySelector('.header__block');
const burgerItem = document.querySelectorAll('.header__burger-item');
const headerConsult = document.querySelector('.header__consult-burger');
const burgerLink = document.querySelectorAll('.header__link');

//функция открытия попапов
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
};

//открытие попапа консультации
function openCallPopup() {
  openPopup(callPopup);
}

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

//маска телефона
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

// выделение активного меню
window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;

	if (window.innerWidth > 768) {
		sections.forEach((el, i) => {
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

//валидация инпута
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const inputEmail = document.querySelector('input[type="email"]');

function isEmailValid(value) {
 	return EMAIL_REGEXP.test(value);
}

function onInput() {
	if (isEmailValid(inputEmail.value)) {
		inputEmail.classList.remove('consultation__input_wrong');
	} else {
    inputEmail.classList.add('consultation__input_wrong');
  }
}

//бургер меню
function burger() {	
  burgerButton.classList.toggle('header__burger-btn_active');
  headerBurgerType.classList.toggle('header__burger-type_active');
  footer.classList.toggle('footer_hidden');
  copyright.classList.toggle('copyright_hidden');
  burgerItem.forEach((el) => {
    el.classList.toggle('header__burger-item_active');
  })
  if (headerBlock) {
    headerBlock.classList.toggle('header__block_hidden');
  }
  if (contacts) {
    contacts.classList.toggle('contacts_hidden');
  }
  if (consultation) {
    consultation.classList.toggle('consulation_hidden');
  }
  if (main) {
    main.classList.toggle('main_hidden');
  }
  if (technologies) {
    technologies.classList.toggle('technologies_hidden');
  }
  if (politics) {
    politics.classList.toggle('politics_hidden');
  }
  if (cases) {
    cases.classList.toggle('cases_hidden');
  }
}

//закрытие бургера
function burgerClose() {
  headerBurgerType.classList.remove('header__burger-type_active');
  burgerButton.classList.remove('header__burger-btn_active');
  footer.classList.remove('footer_hidden');
  copyright.classList.remove('copyright_hidden');
  if (headerBlock) {
    headerBlock.classList.remove('header__block_hidden');
  }
  if (contacts) {
    contacts.classList.remove('contacts_hidden');
  }
  if (consultation) {
    consultation.classList.remove('consulation_hidden');
  }
  if (main) {
    main.classList.remove('main_hidden');
  }
  if (cases) {
    cases.classList.remove('cases_hidden');
  }
  if (technologies) {
    technologies.classList.remove('technologies_hidden');
  }
  if (politics) {
    politics.classList.remove('politics_hidden');
  }
}

//обработчики событий
closeButtons.forEach((item) => 
  item.addEventListener('click', () => closePopup(item.closest('.popup')))
);
popups.forEach((item) => item.addEventListener('click', closePopupClickOverlay));
headerCall.addEventListener('click', openCallPopup);
footerCall.addEventListener('click', openCallPopup);
headerConsult.addEventListener('click', openCallPopup);
learnMore.forEach(el => {
	el.addEventListener("click", openCallPopup);
});
burgerLink.forEach(el => {
	el.addEventListener("click", burgerClose);
});
burgerButton.addEventListener('click', burger);

//отправка формы
document.getElementById("popup-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "service_lhiod5p";
  const templateID = "template_0l21ig7";

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

  const serviceID = "service_lhiod5p";
  const templateID = "template_0l21ig7";

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

  const serviceID = "service_lhiod5p";
  const templateID = "template_0l21ig7";

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
