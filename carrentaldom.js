document.getElementById("carRentalName").innerText = "JS Car Rentals";
document.getElementById("slogan").innerText = "We Have The Best Cars!";

// document.getElementById("Cars").innerText = "Nissan";
// document.getElementById("Cars").innerText = "Camry";
// document.getElementById("boomselector").innerH

/* <select id="cars">
        <option value="Nissan">Nissan</option>
        <option value="Camry">Camry</option>
        <option value="Civic">Civic</option>
        <option value="Audi">Audi</option>
      </select> */

let rentalCars = ["Nissan", "Camry", "Civic", "Audi"];
let dropDownList = "<select id='cars'>";
for (let i = 0; i < rentalCars.length; i++) {
  dropDownList =
    dropDownList + `<option value="${rentalCars[i]}">${rentalCars[i]}</option>`;
}
dropDownList = dropDownList + "</select>";

document.getElementById("boomselector").innerHTML = dropDownList;
