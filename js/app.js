//scroll to section functionality
// smooth scroll from each clicked link to section
// selection the anchor in navbar
const navLinks = document.querySelectorAll(".nav-links a");
const navbar = document.getElementById("nav");

function scrollToSection(ele) {
  ele.forEach((link) => {
    // to remove previously active  ele.classList.add("active");

    link.addEventListener("click", (e) => {
      e.preventDefault();
      // make sure to remove any selected nav items
      navLinks.forEach((mylink) => {
        mylink.classList.remove("active");
      });
      link.classList.add("active");

      const navHeight = navbar.getBoundingClientRect().height;
      const element = document.querySelector(e.target.dataset.link);
      let position = element.offsetTop - navHeight;

      window.scrollTo({
        left: 0,
        top: position,
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

// fixed navbar

window.addEventListener("scroll", fixedNav);

function fixedNav() {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  scrollHeight > navHeight
    ? navbar.classList.add("nav-white")
    : navbar.classList.remove("nav-white");
}

/* navbar in small screens */

const navigation = document.querySelector(".nav-links");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", showNav);

function showNav() {
  navigation.classList.toggle("active");
  navToggle.classList.toggle("active");
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

// wow js
new WOW().init();
