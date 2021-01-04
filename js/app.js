// scroll to top btn

const scrollToTop = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", showScrollBtn);

function showScrollBtn() {
  if (window.pageYOffset > 200) {
    scrollToTop.classList.add("show-scroll");
  } else {
    scrollToTop.classList.remove("show-scroll");
  }
}

// go up to top 0 when click on scroll to top btn
scrollToTop.addEventListener("click", goUp);

function goUp() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// FAQ section functionality

const questionBox = document.querySelectorAll(".question");

// inside the loop

questionBox.forEach((question) => {
  let answerBtn = question.querySelector(".answer-btns");
  // eventlistener
  answerBtn.addEventListener("click", dropAnswer);

  // function
  function dropAnswer() {
    // loop to close any answer opened when open an answer
    questionBox.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-answer");
      }
    });
    question.classList.toggle("show-answer");
  }
});
