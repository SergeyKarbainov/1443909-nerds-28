var Buttonfeedback = document.querySelector(".feedback");
var Popup = document.querySelector(".modal-feedback");
var Form = Popup.querySelector(".feedback-form");
var Close = Popup.querySelector(".modal-close");
var Name = Popup.querySelector(".feedback-name");
var Email = Popup.querySelector(".feedback-email");
var Letter = Popup.querySelector(".feedback-letter");


Buttonfeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
Popup.classList.add("modal-show");
Name.focus();
});

Close.addEventListener("click", function (evt) {
  evt.preventDefault();
Popup.classList.remove("modal-show");
Popup.classList.remove("modal-error");
});

 Feedbackform.addEventListener("submit", function (evt) {
 	  if (!Name.value || !Email.value || !Letter.value) {
  evt.preventDefault();
  Popup.classList.remove("modal-error");
    Popup.offsetWidth = Popup.offsetWidth;
  Popup.classList.add("modal-error");
   } else {
    if (isStorageSupport) {
      localStorage.setItem("feedback", Email.value);
    }
  }
});

 window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (Popup.classList.contains("modal-show")) {
      evt.preventDefault();
      Popup.classList.remove("modal-show");
    }
}
});
         
        
         