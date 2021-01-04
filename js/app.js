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
