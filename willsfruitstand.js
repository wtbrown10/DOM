document.getElementById("fruitStandName").innerText = "Will's Fruit Stand!";
document.getElementById("slogan").innerText = "Where God Buys His Fruits!";
document.getElementById("fruitsforsale").innerText = "Fruits For The Day";

let fruitNames = [
  "Apples",
  "Grapes",
  "Oranges",
  "Mangos",
  "Strawberries",
  "Watermelons",
];
let priceOfFruit = [0.8, 0.1, 0.75, 0.95, 0.4, 0.25];

let dropDownList = "<select id='fruits'>";

for (let i = 0; i < fruitNames.length; i++) {
  dropDownList =
    dropDownList +
    `<option value="${fruitNames[i]}">${fruitNames[i]} $${priceOfFruit[i]}/lb</option>`;
}

dropDownList = dropDownList + "</select>";
document.getElementById("fruits").innerHTML = dropDownList;
