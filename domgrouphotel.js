document.getElementById("hotelName").innerText = "DOM Hotel";
document.getElementById("slogan").innerText = "Where guest can CODE all night";

let hotel = {
  availableRooms: [
    [101, 102, 103, 104],
    [201, 202, 203, 204],
    [301, 302, 303, 304],
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
    let dropDown = "<select id='availableSelect'>";

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
