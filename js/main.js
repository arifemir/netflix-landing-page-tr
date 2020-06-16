const signInput = document.querySelector(".sign-input");
const placeLabel = document.querySelector(".place-label");

signInput.addEventListener("focusin", () => {
  placeLabel.classList.add("place-mounter");
});

signInput.addEventListener("focusout",()=>{
  (signInput.value === "") && placeLabel.classList.remove("place-mounter");
})

const faqQuestion = document.querySelectorAll(".faq-question");
const plusTimes = document.querySelectorAll(".plus-times");


faqQuestion.forEach((faq,i)=>{
  faq.addEventListener("click",()=>{
    plusTimes[i].classList.toggle("plus");
  })
})


