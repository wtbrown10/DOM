document.getElementById("nameofstore").innerText = "Wills Sneaker Store!";
document.getElementById("slogan").innerText =
  "We 'Will' Have You Running Back In For More!";
document.getElementById("onsale").innerText = "Todays Sales";

let sneakerStore = {
  sneakerNames: [
    "Air Max 95's",
    "Air Presto's",
    "FlyKnit Chukka",
    "Air Command Force",
  ],

  priceOfSneakers: [170, 120, 150, 180],

  sneakerTypes: ["Low Tops", "Mid Tops", "High Tops"],
};

let list = "<select id='sneakers'>";

for (let i = 0; i < sneakerNames.length; i++) {
  list =
    list +
    `<option value="${sneakerStore.sneakerNames[i]}">Nike ${sneakerStore.sneakerNames[i]} $${sneakerStore.priceOfSneakers[i]}</option>`;
}
list = list + "</select>";

document.getElementById("sneakers").innerHTML = list;
