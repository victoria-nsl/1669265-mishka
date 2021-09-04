'use strict';
const navigationMain = document.querySelector('.main-navigation');
const navigationToggle = navigationMain.querySelector('.main-navigation__toggle');

const buttonsOrder = document.querySelectorAll('.button-modal');
const PopupSize = document.querySelector('.modal-size');
const formPopupSize = document.querySelector('.modal-size__form');

const slides = document.querySelectorAll(".feedback__item");
const buttonBack = document.querySelector('.feedback__toggle--back');
const buttonForward = document.querySelector('.feedback__toggle--forward');

// Кнопка, навигация в планшетной, мобильной версии
navigationMain.classList.remove('main-navigation--nojs');

navigationToggle.addEventListener('click', () => {
  if (navigationMain.classList.contains('main-navigation--closed')) {
    navigationMain.classList.remove('main-navigation--closed');
    navigationMain.classList.add('main-navigation--opened');
    return
  }
  navigationMain.classList.add('main-navigation--closed');
  navigationMain.classList.remove('main-navigation--opened');
})

/*Открытие окна "Добавить размер" по клику на кнопку "Заказать",
иконку корзинки на странице Каталога и его закрытие */

if (document.querySelector(".modal-size")) {

  const openPopup = () => {
    formPopupSize.classList.add("modal-size__show");
    PopupSize.classList.add("modal-size-overlay__show");

    document.addEventListener("keydown", onDocumentEscKeydown);
    PopupSize.addEventListener("click", onClickPopupSize);
  }

  const closePopup = () => {
    if (PopupSize.classList.contains("modal-size-overlay__show") /*&& formPopupSize.classList.contains("modal-size__show")*/) {
      formPopupSize.classList.remove("modal-size__show");
      PopupSize.classList.remove("modal-size-overlay__show");

      document.removeEventListener("keydown", onDocumentEscKeydown);
      PopupSize.removeEventListener("click", onClickPopupSize);
    }
  }

  const onClickButtonOrder = (evt) => {
    evt.preventDefault();
    openPopup();
  };

  const onClickPopupSize = (evt) => {
    if(evt.target.matches("div"))
    closePopup();
  };

  const onDocumentEscKeydown = (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      closePopup();
    }
  }

  buttonsOrder.forEach((buttonOrder) => {
    buttonOrder.addEventListener("click", onClickButtonOrder);
  });

}

//Слайдер Отзывы
if (document.querySelector(".feedback")) {

  let slideIndex = 1;

  const showSlides = (numberSlide) => {
    if (numberSlide > slides.length) {
      slideIndex = 1
    }
    if (numberSlide < 1) {
      slideIndex = slides.length
    }
    slides.forEach ((slide) =>  {
      if (slide.classList.contains("feedback__item--current")) {
        slide.classList.remove("feedback__item--current");
      }
    })
    slides[slideIndex-1].classList.add("feedback__item--current");
  }

  const onClickButtonForwarde = () => {
    showSlides(slideIndex += 1);
  }

  const onClickButtonBack = () => {
    showSlides(slideIndex -= 1);
  }

  buttonBack.addEventListener("click", onClickButtonBack);
  buttonForward.addEventListener("click", onClickButtonForwarde);

}
