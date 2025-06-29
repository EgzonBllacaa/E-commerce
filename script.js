// Remove banner
const exit = document.getElementById("exit");
exit.addEventListener("click", () => {
  const banner = document.querySelector(".banner");
  banner.style.display = "none";
});

// Api fake Store
const search = document.getElementById("search");
search.addEventListener("input", async () => {
  console.log(2);
  const query = search.value;
  if (query.length > 2) {
    try {
      const response = await fetch(`https://fakestoreapi.in/api/products`);
      const data = await response.json();
      console.log(data);
      setTimeout(() => {
        displayProducts(data.products.slice(0, 4));
      }, 1500);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }
});

function displayProducts(products) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  if (products.length == 0) {
    resultsContainer.innerHTML = `<p>No products found</p>`;
  }
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    productElement.innerHTML = `
    <h3>${product.title}</h3>
    <p>$${product.price}</p>
    <a href="${product.url} target="_blank"">View Product</a>
    `;
    resultsContainer.appendChild(productElement);
  });
}

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
    for (let i = currentView; i < currentView + 4 && i < boxes.length; i++) {
      boxes[i].style.display = "inline-block";
    }
    currentView += 4;

    if (currentView >= boxes.length) {
      button.style.display = "none";
      btnShowLess[index].style.display = "inline-block";
    }
  });

  btnShowLess[index].style.display = "none";

  btnShowLess[index].addEventListener("click", () => {
    boxes.forEach((box, i) => {
      box.style.display = i < 4 ? "inline-block" : "none";
    });
    currentView = 4;

    button.style.display = "inline-block";
    btnShowLess[index].style.display = "none";
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

// SwiperJs for the slider
const swiper = new Swiper(".swiper", {
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
  },
});

// Email Validation
const email = document.querySelector(".email");
const error = document.querySelector(".error");
const submit = document.querySelector(".submit");

// Error Handler
const errorHandler = () => {
  error.classList.add("show");
  email.classList.add("show");
  error.textContent = "Your email is not valid";
};
// Success Handler
const successHandler = () => {
  error.classList.remove("show");
  error.textContent = "";
  // Modal Success
  const modal = document.querySelector(".modal");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
  modal.innerHTML = `<p>Your email ${email.value} has been sent successfully.</p> <img class="close" src="assets/images/icons/close.png" alt="">`;
  setTimeout(() => {
    const closeBtn = document.querySelector(".modal .close");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "scroll";
        console.log("Modal closed");
      });
    } else {
      console.log("Close button not found");
    }
  }, 100);
  email.value = "";
};

// Validation
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
