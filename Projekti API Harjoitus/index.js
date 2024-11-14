let output1 = document.getElementById("v1");
let output2 = document.getElementById("v2");
let output3 = document.getElementById("v3");

function randomPerson() {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results[0]);
      output1.innerHTML = "<img src='" + data.results[0].picture.medium + "'>";

      // Name, First and last
      output1.innerHTML +=
        "<br /><strong>Name: </strong>" +
        data.results[0].name.first +
        " " +
        data.results[0].name.last;

      // Location
      output1.innerHTML +=
        "<br /><strong>Location: </strong>" +
        data.results[0].location.street.name +
        " " +
        data.results[0].location.street.number +
        " " +
        data.results[0].location.postcode +
        "<br /> " +
        data.results[0].location.city +
        ", " +
        data.results[0].location.country;

      // Phone number
      output1.innerHTML +=
        "<br /><strong>Phone Number: </strong>" + data.results[0].phone;

      // Username + Password
      output1.innerHTML +=
        "<br /><strong>Username + Password: </strong>" +
        data.results[0].login.username +
        " " +
        data.results[0].login.password;

      // Birthday
      output1.innerHTML +=
        "<br /><strong>Birthday: </strong>" + data.results[0].dob.date;

      // Email
      output1.innerHTML +=
        "<br /><strong>Birthday: </strong>" + data.results[0].email;
    });
}
