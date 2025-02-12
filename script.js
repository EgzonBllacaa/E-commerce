// remove banner

const exit = document.getElementById("exit");

exit.addEventListener("click", () => {
  const banner = document.querySelector(".banner");
  banner.style.display = "none";
});

// Show more or less btn

const btnView = document.querySelectorAll(".btn-view");
const btnShowLess = document.querySelectorAll(".btn-show-less");

btnView.forEach((button, index) => {
  let currentView = 4;

  const itemsContainer = button.closest(".items");
  let boxes = [
    ...itemsContainer.querySelectorAll(".container .items .card-wrapper .card"),
  ];

  boxes.forEach((box, i) => {
    box.style.display = i < 4 ? "inline-block" : "none";
  });
  button.addEventListener("click", () => {
    // Show the next 4 boxes
    for (let i = currentView; i < currentView + 4 && i < boxes.length; i++) {
      boxes[i].style.display = "inline-block";
    }
    currentView += 4;

    // If all boxes are visible, toggle buttons
    if (currentView >= boxes.length) {
      button.style.display = "none"; // Hide "Show More"
      btnShowLess[index].style.display = "inline-block"; // Show "Show Less"
    }
  });

  btnShowLess[index].style.display = "none";

  btnShowLess[index].addEventListener("click", () => {
    boxes.forEach((box, i) => {
      box.style.display = i < 4 ? "inline-block" : "none";
    });
    currentView = 4; // Reset currentView

    button.style.display = "inline-block"; // Show "Show More"
    btnShowLess[index].style.display = "none"; // Hide "Show Less"
  });
});

// Text Animation

function isElementInViewPort(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const texts = document.querySelectorAll(".text");
window.addEventListener("scroll", () => {
  texts.forEach((text) => {
    if (isElementInViewPort(text)) {
      text.classList.add("animate");
    }
  });
});
// setTimeout(() => {
//   const texts = document.querySelectorAll(".text");
//   texts.forEach((text, index) => {
//     setTimeout(() => {
//       text.classList.add("animate");
//     }, index * 1000);
//   });
// }, 1000);

// SwiperJs
const swiper = new Swiper(".swiper", {
  // Swiper configuration
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    358: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});
// Email Validation

const email = document.querySelector(".email");
const error = document.querySelector(".error");
const submit = document.querySelector(".submit");

const errorHandler = () => {
  error.classList.add("show");
  email.classList.add("show");
  error.textContent = "Your email is not valid";
};
const successHandler = () => {
  error.classList.remove("show");
  error.textContent = "";
  // Show modal not alert it looks more proffesional
  alert("Email is verified");
  email.value = "";
};

const emailValidation = () => {
  let emailValue = email.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    errorHandler();
    return false;
  } else {
    successHandler();
    return true;
  }
};

submit.addEventListener("click", (event) => {
  event.preventDefault();
  const isValid = emailValidation();
  if (isValid) {
    console.log("form submitted");
  } else {
    console.log("email validation failed");
  }
});
