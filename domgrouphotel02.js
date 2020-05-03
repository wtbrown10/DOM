document.getElementById("hotelName").innerText = "The Dom Hotel Yall";
document.getElementById("slogan").innerText = "You Rest While We Work!";

let hotel = {
  availableRooms: [
    [101, 102, 103, 104],
    [201, 202, 203, 204],
    [301, 302, 303],
    [401, 402],
  ],
  roomType: ["Single", "Double", "Queen", "King"],
  priceOfRooms: [200, 250, 350, 450],
  bookedRooms: [],

  completeBookedRoomsArray: function () {
    for (let i = 0; i < this.availableRooms.length; i++) {
      this.bookedRooms.push([]);
    }
  },

  bookSelectedRoom: function () {
    let selectedRoom = parseInt(
      document.getElementById("availableSelect").value
    );
    console.log(selectedRoom);
    for (let i = 0; i < this.availableRooms.length; i++) {
      for (let j = 0; j < this.availableRooms[i].length; j++) {
        if (selectedRoom === this.availableRooms[i][j]) {
          this.bookedRooms[i].push(
            this.availableRooms[i].splice(
              this.availableRooms[i].indexOf(selectedRoom),
              1
            )
          );
        }
      }
    }
    this.updateAvailableRooms();
    this.updateBookedRooms();
  },

  unBookSelectedRooms: function () {
    let selectedRoom = parseInt(document.getElementById("unBookSelect").value);
    console.log(selectedRoom);
    for (let i = 0; i < this.bookedRooms.length; i++) {
      for (let j = 0; j < this.bookedRooms[i].length; j++) {
        if (selectedRoom == this.bookedRooms[i][j]) {
          this.availableRooms[i].push(
            this.bookedRooms[i].splice(
              this.bookedRooms[i].indexOf(this.bookedRooms[i][j]),
              1
            )
          );
        }
      }
    }
    this.updateAvailableRooms();
    this.updateBookedRooms();
  },

  updateAvailableRooms: function () {
    let dropDown = "<select id='availableSelect'>";
    for (let i = 0; i < hotel.availableRooms.length; i++) {
      for (let j = 0; j < hotel.availableRooms[i].length; j++) {
        dropDown =
          dropDown +
          `<option value='${hotel.availableRooms[i][j]}'>${hotel.availableRooms[i][j]}</option>`;
      }
    }
    dropDown = dropDown + "</select>";
    document.getElementById("dropDownAvailable").innerHTML = dropDown;
  },

  updateBookedRooms: function () {
    let dropDown = "<select id='unBookSelect'>";
    for (let i = 0; i < hotel.bookedRooms.length; i++) {
      for (let j = 0; j < hotel.bookedRooms[i].length; j++) {
        dropDown =
          dropDown +
          `<option value='${hotel.bookedRooms[i][j]}'>${hotel.bookedRooms[i][j]}</option>`;
      }
    }
    dropDown = dropDown + "</select>";
    document.getElementById("dropDownUnAvailable").innerHTML = dropDown;
  },
};
hotel.updateAvailableRooms();
hotel.updateBookedRooms();
hotel.completeBookedRoomsArray();
console.log(document.getElementById("dropDownAvailable").innerText);
