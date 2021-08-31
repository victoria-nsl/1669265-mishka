'use strict';
const navigationMain = document.querySelector('.main-navigation');
const navigationToggle = navigationMain.querySelector('.main-navigation__toggle');

const buttonsOrder = document.querySelectorAll('.button-modal');
const overlayPopupSize = document.querySelector('.modal-size__overlay');
const formPopupSize = document.querySelector('.modal-size__form');

// Кнопка, навигация в планшетной, мобильной версии
navigationMain.classList.remove('main-navigation--nojs');

navigationToggle.addEventListener('click', () => {
  if (navigationMain.classList.contains('main-navigation--closed')) {
    navigationMain.classList.remove('main-navigation--closed');
    navigationMain.classList.add('main-navigation--opened');
  } else {
    navigationMain.classList.add('main-navigation--closed');
    navigationMain.classList.remove('main-navigation--opened');
  }
})

/*Открытие окна "Добавить размер" по клику на кнопку "Заказать",
иконку корзинки на странице Каталога и его закрытие */

if (document.querySelector(".modal-size")) {

  buttonsOrder.forEach((buttonOrder) => {
    buttonOrder.addEventListener("click", (evt) => {
      evt.preventDefault();
      formPopupSize.classList.add("modal-size__show");
      overlayPopupSize.classList.add("modal-size-overlay__show");
    });
  });

  const closePopup = () => {
    if (overlayPopupSize.classList.contains("modal-size-overlay__show") && formPopupSize.classList.contains("modal-size__show")) {
      formPopupSize.classList.remove("modal-size__show");
      overlayPopupSize.classList.remove("modal-size-overlay__show");
    }
  }

  overlayPopupSize.addEventListener("click", (evt) => {
    evt.preventDefault();
    closePopup();
  });


  window.addEventListener("keydown", (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      closePopup();
    }
  });
}
