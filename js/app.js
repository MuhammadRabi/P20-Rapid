//scroll to section functionality

// selection the anchor in navbar
let navLinks = document.querySelectorAll(".nav-links a");

// function for regeneration
function scrollToSection(element) {
  element.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      // smooth scroll from each clicked link to section
      document.querySelector(e.target.dataset.link).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

// calling the function with desired target
scrollToSection(navLinks);

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

// filterring image portofolio gallery
const listItems = document.querySelectorAll(".portofolio-filter li");
const allimages = document.querySelectorAll(".porto-image");

function toggleActiveClass(li) {
  listItems.forEach((item) => {
    item.classList.remove("active");
  });
  li.classList.add("active");
}

function toggleMyImages(datasort) {
  allimages.forEach((image) => {
    if (datasort === "filtering-all") {
      image.style.opacity = "1";
    } else {
      datasort === image.dataset.sort
        ? (image.style.opacity = "1")
        : (image.style.opacity = "0.1");
    }
  });
}

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    toggleActiveClass(item);
    toggleMyImages(item.dataset.sort);
  });
});

// swiper carousel

var swiper = new Swiper(".swiper-container", {
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*function toggleimages(dataSort) {
  if (dataSort === "filtering-all") {
    for (let i = 0; i < allimages.length; i++) {
      allimages[i].style.opacity = "1";
    }
  } else {
    for (let i = 0; i < allimages.length; i++)
      allimages[i].dataset.sort === dataSort
        ? (allimages[i].style.opacity = "1")
        : (allimages[i].style.opacity = "0.1");
  }
}

/*for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("click", function () {
    toggleActiveClass(listItems[i]);
    toggleimages(listItems[i].dataset.sort);
  });
}
*/
