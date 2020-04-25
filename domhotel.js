document.getElementById("hotelName").innerText = "The DOM Hotel";
document.getElementById("slogan").innerText =
  "Our Customers are the OBJECTS of our desire (no creepy)";

let domHotel = {
  availableRooms: [[101, 102, 103, 104], [201], [], [401, 402]],
  bookedRooms: [[], [], [], []],
  roomTypes: ["Single", "Double", "Queen", "King"],

  bookRoom: function () {
    this.bookedRooms[0].push(this.availableRooms[0].pop());
    this.updateAvailableRoomsInTheDom();
  },

  updateAvailableRoomsInTheDom: function () {
    let linesOfHtml = "<select>";
    for (let i = 0; i < this.availableRooms.length; i++) {
      for (let j = 0; j < this.availableRooms[i].length; j++) {
        linesOfHtml =
          linesOfHtml +
          `<option value='${this.availableRooms[i][j]}'>${this.availableRooms[i][j]}</option>`;
      }
    }
    linesOfHtml = linesOfHtml + "</select>";
    document.getElementById("AvailRoomList").innerHTML = linesOfHtml;
  },
};

domHotel.updateAvailableRoomsInTheDom();
domHotel.bookRoom();
