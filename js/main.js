const signInput = document.querySelector(".sign-input");
const placeLabel = document.querySelector(".place-label");

signInput.addEventListener("focusin", () => {
  placeLabel.classList.add("place-mounter");
});

signInput.addEventListener("focusout",()=>{
  (signInput.value === "") && placeLabel.classList.remove("place-mounter");
})

const faqQuestion = document.querySelector(".faq-question");
const plusTimes = document.querySelector(".plus-times");

faqQuestion.addEventListener("click", () => {
  plusTimes.classList.toggle('plus');
})