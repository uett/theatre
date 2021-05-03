// const html = document.querySelector(".html"),
//     topPopup = document.querySelector(".popup-thanks-top-of-the-page");
// const blockPopup = document.querySelector(".achievement"),
//     positionBlock = blockPopup.offsetTop,
//     positionHeightBlock = blockPopup.offsetHeight,
//     centerPopup = document.querySelector(".popup-thanks-center-of-the-page"),
//     closePopup = document.querySelector(
//         ".popup-thanks-center-of-the-page__close-button"
//     );
// console.log(closePopup);
// let iScrolling = 0;
// window.addEventListener("scroll", function () {
//     0 === iScrolling &&
//         window.scrollY >= positionBlock &&
//         window.scrollY <= positionBlock + positionHeightBlock &&
//         ((iScrolling += 1),
//         centerPopup.classList.add("popup-thanks-center-of-the-page--active"));
// }),
//     closePopup.addEventListener("click", function () {
//         centerPopup.classList.remove("popup-thanks-center-of-the-page--active");
//     });


const buttonMenu = document.querySelector(".header__menu-button");
const buttonCloseMenu = document.querySelector(".header__close");
const menu = document.querySelector(".header__list");

buttonMenu.addEventListener("click", function(){
    menu.classList.add("header__list--active")
});
buttonCloseMenu.addEventListener("click", function(){
    menu.classList.remove("header__list--active")
});