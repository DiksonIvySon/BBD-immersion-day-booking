let submit = document.querySelector("button");
let json_data;

let getData = () => {
  console.log(`json ${json_data}`);
};

submit.addEventListener("click", function (e) {
  e.preventDefault();

  let firstName = document.querySelector("#fname").value;
  let lastName = document.querySelector("#lname").value;
  let email = document.querySelector("#email").value;
  let cellphone = document.querySelector("#cellphone").value;

  let data = {
    firstName,
    lastName,
    email,
    cellphone,
  };

  json_data = JSON.stringify(data);

  getData();

  fetch("/save", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: json_data,
  })
    .then((response) => {
      if (response.ok) {
        console.log("Data saved successfully");
      } else {
        console.error("Error saving data");
      }
    })
    .catch((error) => {
      console.error("Fetch error: ", error);
    });
});

console.log(`json ${json_data}`);
