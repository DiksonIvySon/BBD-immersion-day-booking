let submit = document.querySelector("button");
let json_data;
let data;

let getData = () => {
  console.log(`json ${json_data}`);
};

const updateDom = () => {
  const formCard = document.querySelector(".main-form");
  const successfulCard = document.querySelector(".successful-rsvp");
  formCard.style.display = "none";
  successfulCard.style.display = "block";
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

  getData();
  updateDom();
};

console.log(`jason ${json_data}`);
