document.getElementById("hotelName").innerText = "The Dom Hotel";
document.getElementById("slogan").innerText = "Hope you sleep well!";

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

  selectAvailableRoom: function () {
    let selectedRoom = parseInt(
      document.getElementById("selectAvailable").value
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
    this.updateUnBookedRooms();
  },

  selectBookedRoom: function () {
    let selectedRoom = parseInt(
      document.getElementById("selectUnBooked").value
    );
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
    this.updateUnBookedRooms();
  },

  updateAvailableRooms: function () {
    let dropDown = "<select id='selectAvailable'>";
    for (let i = 0; i < this.availableRooms.length; i++) {
      for (let j = 0; j < this.availableRooms[i].length; j++) {
        dropDown =
          dropDown +
          `<option value'${this.availableRooms[i][j]}'>${this.availableRooms[i][j]}</option>`;
      }
    }
    dropDown = dropDown + "</select>";
    document.getElementById("dropDownAvailable").innerHTML = dropDown;
  },

  updateUnBookedRooms: function () {
    let dropDown = "<select id='selectUnBooked'>";
    for (let i = 0; i < this.bookedRooms.length; i++) {
      for (let j = 0; j < this.bookedRooms[i].length; j++) {
        dropDown =
          dropDown +
          `<option value'${this.bookedRooms[i][j]}'>${this.bookedRooms[i][j]}</option>`;
      }
    }
    dropDown = dropDown + "</select>";
    document.getElementById("dropDownUnBooked").innerHTML = dropDown;
  },
};

hotel.updateAvailableRooms();
hotel.updateUnBookedRooms();
hotel.completeBookedRoomsArray();
