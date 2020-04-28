document.getElementById("hotelName").innerText = "The Dom Hotel";
document.getElementById("slogan").innerText = "Sleep Well!";

let domHotel = {
  availableRooms: [[101, 102, 103, 104], [201, 202], [], [401, 402, 403]],
  bookedRooms: [[], [], [], []],
  roomTypes: ["Single", "Double", "Queen", "King"],
  currentRoomBooked: [],
  currentFloorBooked: [],

  bookRooms: function () {
    this.availableRooms[this.currentFloorBooked].splice(
      this.availableRooms[this.currentFloorBooked].indexOf(
        this.currentRoomBooked
      ),
      1
    );
    this.bookedRooms[this.currentFloorBooked].push(this.currentRoomBooked);
    this.updateAvailableRoomsInDom();
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

function selectRoom(floor, roomNum) {
  let floorNumber = floor - 1;
  if (domHotel.availableRooms[floorNumber].includes(roomNum)) {
    domHotel.currentRoomBooked = roomNum;
    domHotel.currentFloorBooked = floorNumber;
    domHotel.bookRooms();
  } else {
    console.log(`Room #${roomNum} is unavailable!`);
  }
}

domHotel.updateAvailableRoomsInDom();
selectRoom(1, 102);
