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
      ele.forEach((mylink) => {
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
  navLinks.forEach((mylink) => {
    mylink.classList.remove("active");
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

let accordionHeaders = document.querySelectorAll(".accordion-item-header");

accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener("click", () => {
    let activeAccordionHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    // if another accordion body is open and not the one I click, it will be closed.
    if (activeAccordionHeader && activeAccordionHeader !== accordionHeader) {
      activeAccordionHeader.classList.toggle("active");
      activeAccordionHeader.nextElementSibling.style.maxHeight = 0;
    }

    // expanding and collapsing accordion on click
    const accordionItemBody = accordionHeader.nextElementSibling;
    accordionHeader.classList.toggle("active");
    if (accordionHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

// filtering image portofolio gallery
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

AOS.init();

// increasing stats number

let nums = document.querySelectorAll(".why-choose-us span");
let section = document.querySelector(".why-choose-us");
let started = false; // Function Started ? No

window.addEventListener("scroll", () => {
  if (window.scrollY >= section.offsetTop - 300) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
});

function startCount(el) {
  let goal = el.dataset.stats;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
