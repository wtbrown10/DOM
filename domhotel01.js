document.getElementById("hotelname").innerText = "The Dom Hotel";
document.getElementById("slogan").innerText =
  "we are still working while you rest!";

let domHotel = {
  availableRooms: [[101, 102, 103, 104], [201, 202], [], [401, 402, 403]],
  roomTypes: ["Twin", "Full", "Queen", "King"],
};

let dropDownList = "<select>";

for (let i = 0; i < domHotel.availableRooms.length; i++) {
  for (let j = 0; j < domHotel.availableRooms[i].length; j++) {
    dropDownList =
      dropDownList +
      `<option value='${domHotel.availableRooms[i][j]}'>${domHotel.availableRooms[i][j]}</option>`;
  }
}
dropDownList = dropDownList + "</select>";

document.getElementById("availablerooms").innerHTML = dropDownList;
