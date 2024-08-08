let submit = document.querySelector("button");
let json_data;
let data;

const updateDom = () => {
  const formCard = document.querySelector(".main-form");
  const successfulCard = document.querySelector(".successful-rsvp");
  formCard.style.display = "none";
  successfulCard.style.display = "block";
};

const returnToMainFrom = () => {
  const formCard = document.querySelector(".main-form");
  const successfulCard = document.querySelector(".successful-rsvp");
  formCard.style.display = "block";
  successfulCard.style.display = "none";

  document.querySelector("#fname").value = "";
  document.querySelector("#lname").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#cellphone").value = "";
};

const saveData = () => {
  let firstName = document.querySelector("#fname").value;
  let lastName = document.querySelector("#lname").value;
  let email = document.querySelector("#email").value;
  let cellphone = document.querySelector("#cellphone").value;

  data = {
    firstName,
    lastName,
    email,
    cellphone,
  };
  json_data = JSON.stringify(data);

  updateDom();
};

