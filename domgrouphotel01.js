document.getElementById("hotelName").innerText = "The Group Hotel";
document.getElementById("slogan").innerText = "We have the best beds";

let hotel = {
  availableRooms: [
    [101, 102, 103, 104],
    [201, 202, 203, 204],
    [301, 302, 303],
    [401, 402],
  ],
  roomTypes: ["Single", "Double", "Queen", "King"],
  roomRates: [300, 350, 400, 500],
  bookedRooms: [],

  completedRoomsArray: function () {
    for (let i = 0; 0 < this.availableRooms.length; i++) {
      this.bookedRooms.push([]);
    }
  },

  updateAvailableRooms: function () {
    let dropDown = "<select id='";
  },
};
