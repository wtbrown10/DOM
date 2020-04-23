document.getElementById("storename").innerText = "Will Cellphone Emporium";
document.getElementById("slogan").innerText = "We are one call away!";
document.getElementById("sales").innerText = "Phones on sale today";

let cellPhoneNames = [
  "Iphone 11",
  "Galaxy s20",
  "Google Pixal 4",
  "OnePlus 8 Pro",
];

let dropDown = "<select id='cellphones'>";

for (let i = 0; i < cellPhoneNames.length; i++) {
  dropDown =
    dropDown +
    `<option value='${cellPhoneNames[i]}'>${cellPhoneNames[i]}</option>`;
}
dropDown = dropDown + "</select>";

document.getElementById("cellphones").innerHTML = dropDown;
