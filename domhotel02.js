document.getElementById("hotelName").innerText = "The Dom Hotel";
document.getElementById("slogan").innerText = "Sleep Well!";

let domHotel = {
  availableRooms: [[101, 102, 103, 104], [201, 202], [], [401, 402, 403]],
  bookedRooms: [[], [], [], []],
  roomTypes: ["Single", "Double", "Queen", "King"],

  bookRooms: function () {
    this.bookedRooms[0].push(this.availableRooms[0].pop());
    this.updateAvailableRoomsInDom;
  },

  unBookRoom: function () {
    this.availableRooms[0].push(this.bookedRooms[0].pop());
    this.updateAvailableRoomsInDom;
  },

  updateAvailableRoomsInDom: function () {
    dropDown = "<select>";

    for (let i = 0; i < domHotel.availableRooms.length; i++) {
      for (let j = 0; j < domHotel.availableRooms[i].length; j++) {
        dropDown =
          dropDown +
          `<option value'${domHotel.availableRooms[i][j]}'>${domHotel.availableRooms[i][j]}</option>`;
      }
    }
    dropDown = dropDown + "</select>";
    document.getElementById("availableRooms").innerHTML = dropDown;
  },
};

domHotel.updateAvailableRoomsInDom();
domHotel.bookRooms();
domHotel.unBookRoom();
