const signInput = document.querySelectorAll(".sign-input");
const placeLabel = document.querySelectorAll(".place-label");

signInput.forEach((el,i)=>{
  el.addEventListener("focusin", () => {
    placeLabel[i].classList.add("place-mounter");
  });
})

signInput.forEach((el,i)=>{
  console.log(el);
  el.addEventListener("focusout", () => {
    (el.value === "") && placeLabel[i].classList.remove("place-mounter");
  });
})

const faqQuestion = document.querySelectorAll(".faq-question");
const plusTimes = document.querySelectorAll(".plus-times");
const faqAnswer = document.querySelectorAll(".faq-answer");

faqQuestion.forEach((faq,i)=>{
  faq.addEventListener("click",()=>{
    plusTimes[i].classList.toggle("plus");
    faqAnswer[i].classList.toggle("open");
  })
})


