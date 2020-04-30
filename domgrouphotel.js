document.getElementById("hotelName").innerText = "DOM Hotel";
document.getElementById("slogan").innerText = "Where guest can CODE all night";

let hotel = {
  availableRooms: [
    [101, 102, 103, 104],
    [201, 202, 203, 204],
    [301, 302, 303],
    [401, 402],
  ],
  roomTypes: ["Single", "Double", "King", "Queen"],
  roomRates: [300, 350, 450, 550],
  bookedRooms: [],

  completeBookedRoomsArrays: function () {
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

  unBookSelectedRoom: function () {
    let selectedRoom = parseInt(
      document.getElementById("unBookedSelect").value
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
    this.updateBookedRooms();
  },

  updateAvailableRooms: function () {
    let dropDown = "<select id='availableSelect'>";

    for (let i = 0; i < this.availableRooms.length; i++) {
      for (let j = 0; j < this.availableRooms[i].length; j++) {
        dropDown =
          dropDown +
          `<option value='${this.availableRooms[i][j]}'>${this.availableRooms[i][j]}</option>`;
      }
    }
    dropDown = dropDown + "</select>";
    document.getElementById("dropDownAvailable").innerHTML = dropDown;
  },

  updateBookedRooms: function () {
    let dropDown = "<select id='unBookedSelect'>";

    for (let i = 0; i < this.bookedRooms.length; i++) {
      for (let j = 0; j < this.bookedRooms[i].length; j++) {
        dropDown =
          dropDown +
          `<option value='${this.bookedRooms[i][j]}'>${this.bookedRooms[i][j]}</option>`;
      }
    }
    dropDown = dropDown + "</select>";
    document.getElementById("dropDownBooked").innerHTML = dropDown;
  },
};

hotel.updateAvailableRooms();
hotel.updateBookedRooms();
hotel.completeBookedRoomsArrays();
console.log(document.getElementById("dropDownAvailable").innerText);
