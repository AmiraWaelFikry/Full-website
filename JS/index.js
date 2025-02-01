import { myValidation, restMessages } from "./register.js";
import { getCourses, getCourseDetail } from "./courses.js";
import { paymentDetailes, addcard, displayCards } from "./pay.js";
const currentPage = window.location.pathname.split('/').pop();

//In Register : Registeration Validation
if (currentPage==="/") {
  /*
  ====================
  Declerations
  ===================
  */
  console.log(currentPage);
 const form = document.getElementById("regForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const genderGroup = document.getElementById("genderGroup");

  /*
  ====================
  Eventlistners
  ===================
  */
  form.addEventListener(
    "submit",
    (event) => {
      if (!myValidation()) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
    false
  );

  form.addEventListener("reset", () => {
    const inputs = [nameInput, emailInput, passwordInput];
    restMessages(inputs);
  });
  nameInput.addEventListener("click", () => {
    nameInput.classList.remove("is-invalid", "is-valid");
  });

  emailInput.addEventListener("click", () => {
    emailInput.classList.remove("is-invalid", "is-valid");
  });

  passwordInput.addEventListener("click", () => {
    passwordInput.classList.remove("is-invalid", "is-valid");
  });

  genderGroup.addEventListener("click", () => {
    genderGroup.classList.remove("text-danger", "text-success");
  });
}

// In Home : Display the courses
else if (currentPage === "home.html") {
  Swal.fire({
    title: "Welcome   " + localStorage.getItem("username"),
    text: "Hoping always to see you!",
    imageUrl:
      "https://static.vecteezy.com/system/resources/thumbnails/010/925/820/small/colorful-welcome-design-template-free-vector.jpg", // URL to your custom image
    imageWidth: 250,
    imageHeight: 100,
  });
  getCourses();
}

//In Course Detail : Display the clicked course details
else if (currentPage === "course-details.html") {
  const urlParams = new URLSearchParams(window.location.search);
  const cardId = urlParams.get("id");
  getCourseDetail(cardId);
}

//In payment page

else if (currentPage === "payment.html") {
  /*
  ====================
  Declerations
  ===================
  */
  const urlParams = new URLSearchParams(window.location.search);
  const courseName = urlParams.get("name");
  const coursePrice = urlParams.get("price");
  const cardNumInput = document.getElementById("card-number");
  const dateInput = document.getElementById("expire-date");
  const cvvInput = document.getElementById("cvv");
  const cardNameInput = document.getElementById("card-name");
  const addCardBtn = document.getElementById("submit");
  /*
  ====================
  Eventlistners
  ===================
  */
  cardNumInput.addEventListener("click", () => {
    cardNumInput.classList.remove("is-invalid", "is-valid");
  });
  dateInput.addEventListener("click", () => {
    dateInput.classList.remove("is-invalid", "is-valid");
  });
  cvvInput.addEventListener("click", () => {
    cvvInput.classList.remove("is-invalid", "is-valid");
  });
  cardNameInput.addEventListener("click", () => {
    cardNameInput.classList.remove("is-invalid", "is-valid");
  });
  addCardBtn.addEventListener("click", () => {
    addcard(cards);
  });

  /*
=======================
Code
=======================
*/

  let cards = JSON.parse(localStorage.getItem("cards"));
  if (!cards) {
    cards = [];
  }
  displayCards(cards);
  paymentDetailes(courseName, coursePrice);
}
