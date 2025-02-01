import { inputValidation, restMessages } from "./register.js";

/*
=====================
Declerations
====================
*/
const cardNumInput = document.getElementById("card-number");
const dateInput = document.getElementById("expire-date");
const cvvInput = document.getElementById("cvv");
const cardNameInput = document.getElementById("card-name");

/*
=====================
Main Functions
====================
*/

//payment validation
function payValidation() {
  //Rejex
  const cardNumberRejex = /^\d{16}$/;
  const expireDateRejex = /^(0[1-9]|1[0-2])\/\d{4}$/;
  const cvvRejex = /^\d{4}$/;
  const cardNameRejex = /^[A-Za-z\s\-]+$/;

  let isValid = true;

  //check card number
  let numValid = inputValidation(
    cardNumInput,
    cardNumberRejex,
    "card number",
    "Please enter a valid 16-digit card number."
  );
  //check expire date
  let edateValid = inputValidation(
    dateInput,
    expireDateRejex,
    "expire date",
    "Please enter a valid expiration date in MM/YYYY format"
  );
  //check cvv
  let cvvValid = inputValidation(
    cvvInput,
    cvvRejex,
    "cvv",
    "Please enter a valid 4-digit CVV."
  );
  // check card name
  let nameValid = inputValidation(
    cardNameInput,
    cardNameRejex,
    "name",
    "Only letters, spaces, and hyphens are allowed."
  );
  if (!numValid || !edateValid || !cvvValid || !nameValid) {
    isValid = false;
  }

  return isValid;
}

//Add card
export function addcard(cards) {
  if (payValidation()) {
    const inputs = [cardNumInput, dateInput, cvvInput, cardNameInput];
    const card = {
      cnum: cardNumInput.value,
      edate: dateInput.value,
      cvv: cvvInput.value,
      cname: cardNameInput.value,
    };
    cards.push(card);
    localStorage.setItem("cards", JSON.stringify(cards));
    displayCards(cards);
    restMessages(inputs);
  }
}

//DisplayCards

export function displayCards(cards) {
  const savedCards = document.getElementById("saved-cards");
  if (cards.length === 0) {
    savedCards.innerHTML = `<p>No added Cards</p>`;

    return;
  } else {
  }
  let cardsItems = "";
  for (const cardItem of cards) {
    cardsItems += cardComponent(cardItem);
  }
  savedCards.innerHTML = cardsItems;

  savedCards.addEventListener("click", (event) => {
    if (event.target && event.target.matches("button#approved")) {
      Swal.fire({
        title: "Good job!",
        text: "You will Join the course soon",
        icon: "success",
      });
    }
  });
  savedCards.addEventListener("click", (event) => {
    if (event.target && event.target.matches("#delete")) {
      const card = event.target.closest("div#credid-card-container");
      const cardIndex = Array.from(savedCards.children).indexOf(card);
      if (cardIndex !== -1) {
        deleteCard(cards, cardIndex);
      }
    }
  });
}

//Delete card

function deleteCard(cards, cardIndex) {
  cards.splice(cardIndex, 1);
  localStorage.setItem("cards", JSON.stringify(cards));
  displayCards(cards);
}

/*
=====================
Helping functions
====================
*/

// course details in payement page
export function paymentDetailes(name, price) {
  const details = document.getElementById("details");
  details.innerHTML = `<p class="mb-0">
      <span class="fw-bold">Product:</span
      ><span class="c-green">: ${name}</span>
      </p>
      <p class="mb-0">
          <span class="fw-bold">Price:</span>
          <span class="c-green">${price}</span>
      </p> `;
}

//Card component
function cardComponent(cardItem) {
  return `<div id="credid-card-container" class="col-lg-4 mb-lg-0 mb-3">
    <div id="credit-card" class="card p-3">
        <div class="img-box">
            <img src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png" alt="">
        </div>
        <div class="number">
            <label class="fw-bold" >************${cardItem.cnum.slice(
              -4
            )}</label>
        </div>
        <div class="d-flex align-items-center justify-content-between">
            <small><span class="fw-bold">Expiry date:</span><span>${
              cardItem.edate
            }</span></small>
            <small><span class="fw-bold">Name:</span><span>${
              cardItem.cname
            }</span></small>
        </div>

        <div class="delete-or-pay d-flex align-items-center justify-content-around w-50">
         <i id="delete" class="fa-solid fa-trash text-danger fs-5 p-2 rounded bg-white border border-danger"></i>
        <button id="approved" class="btn btn-success">Make Payment</button>
        </div>
    </div>
</div>`;
}
