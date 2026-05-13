export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active", // 👈 CORREGIDO: Coincide con popup.css
};

export const apiConfig = {
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "2360b441-05e9-440f-aa06-74c4efc16857", 
    "Content-Type": "application/json",
  },
};

export const profileEditBtn = document.querySelector(".profile__edit-button");
export const cardAddBtn = document.querySelector(".profile__add-button");
