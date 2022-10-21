// Traveller Count
// traveller-data = user-number

var plusElement = document.querySelector(".plus");
plusElement.addEventListener("click", increaseCounter);

var minusElement = document.querySelector(".minus");
minusElement.addEventListener("click", decreaseCounter);

var travellerCounter = 0;

function increaseCounter() {
  if (travellerCounter < 4) {
    travellerCounter = travellerCounter + 1;
    console.log("Amount of Travellers = ", travellerCounter);
  }
  setCounter(travellerCounter);
}

function decreaseCounter() {
  if (travellerCounter > 0) {
    travellerCounter = travellerCounter - 1;
    console.log("Amount of Travellers = ", travellerCounter);
  }
  setCounter(travellerCounter);
}

function getCounter() {
  var counter = document.querySelector(".traveller-data").value;
}

function setCounter(num) {
  document.querySelector(".traveller-data").value = num;
}

// Amount of Travellers = travellerCounter

function arrivalData() {
  var arrivalDate = document.querySelector(".arrival-date").value;
  console.log("You are arriving on = ", arrivalDate);
  var nights = document.querySelector(".nights-staying").value;
  console.log("You are staying = ", nights, "nights");

  if ((travellerCounter = 1 && nights > 0 && nights < 6)) {
    document.querySelector(".hostel-check").classList.add("check-valid");
  }

  if (
    travellerCounter > 0 &&
    travellerCounter < 5 &&
    nights > 1 &&
    nights < 16
  ) {
    document.querySelector(".house-check").classList.add("check-valid");
  }

  if (
    travellerCounter > 0 &&
    travellerCounter < 3 &&
    nights < 0 &&
    nights < 6
  ) {
    document.querySelector(".hotel-check").classList.add("check-valid");
  }

  if (
    travellerCounter > 1 &&
    travellerCounter < 5 &&
    nights < 2 &&
    nights > 11
  ) {
    document.querySelector(".motel-check").classList.add("check-valid");
  }

  var hotelCost = 157;
  var hostelCost = 30;
  var motelCost = 90;
  var houseCost = 240;

  console.log("Hotel Cost = ", hotelCost);
  console.log("Hostel Cost = ", hostelCost);
  console.log("Motel Cost = ", motelCost);
  console.log("House Cost = ", houseCost);
}

// Traveller Count
// traveller-data = user-number

var accommodationCost = 0;

var plusElement = document.querySelector(".plus");
plusElement.addEventListener("click", increaseCounter);

var minusElement = document.querySelector(".minus");
minusElement.addEventListener("click", decreaseCounter);

var travellerCounter = 0;

function increaseCounter() {
  if (travellerCounter < 4) {
    travellerCounter = travellerCounter + 1;
    console.log("Amount of Travellers = ", travellerCounter);
  }
  setCounter(travellerCounter);
}

function decreaseCounter() {
  if (travellerCounter > 0) {
    travellerCounter = travellerCounter - 1;
    console.log("Amount of Travellers = ", travellerCounter);
  }
  setCounter(travellerCounter);
}

function getCounter() {
  var counter = document.querySelector(".traveller-data").value;
}

function setCounter(num) {
  document.querySelector(".traveller-data").value = num;
}

var accomType = "";
var accomSelect;

// Variable Costs

// Change button link
function changeHostel() {
  var link = document.querySelector(".direct");
  link.getAttribute("href");
  link.setAttribute("href", "#hostel");
  console.log(link);
  accomType = "Hostel";
  console.log("Accommodation type = ", accomType);
  var accommodationCost = 30 * nights;
  globalThis.accommodationCost;
}

function changeHouse() {
  var link = document.querySelector(".direct");
  link.getAttribute("href");
  link.setAttribute("href", "#house");
  console.log(link);
  accomType = "House";
  console.log("Accommodation type = ", accomType);
  var accommodationCost = 240 * nights;
  globalThis.accommodationCost;
}

function changeHotel() {
  var link = document.querySelector(".direct");
  link.getAttribute("href");
  link.setAttribute("href", "#hotel");
  console.log(link);
  accomType = "Hotel";
  console.log("Accommodation type = ", accomType);
  var accommodationCost = 157 * nights;
  globalThis.accommodationCost;
}

function changeMotel() {
  var motelHighlight = true;
  var link = document.querySelector(".direct");
  link.getAttribute("href");
  link.setAttribute("href", "#motel");
  console.log(link);
  accomType = "Motel";
  console.log("Accommodation type = ", accomType);
  var accommodationCost = 90 * nights;
  globalThis.accommodationCost;
}

// Hostels
function selectAnchorLodge() {
  accomSelect = "Anchor Lodge";
  console.log("Seleted Accommodation = ", accomSelect);
}

// Houses
function selectBlueHaven() {
  accomSelect = "Blue Haven";
  console.log("Seleted Accommodation = ", accomSelect);
}

function selectKotareCottage() {
  accomSelect = "Kotare Cottage";
  console.log("Seleted Accommodation = ", accomSelect);
}

// Hotels
function selectSoverignPier() {
  accomSelect = "Soverign Pier";
  console.log("Seleted Accommodation = ", accomSelect);
}

function selectBeachsideResort() {
  accomSelect = "Beachside Resort";
  console.log("Seleted Accommodation = ", accomSelect);
}

// Motels
function selectHaheiResort() {
  accomSelect = "Hahei Beach Resort";
  console.log("Seleted Accommodation = ", accomSelect);
}

function selectBeachsideResort() {
  accomSelect = "Beachside Resort";
  console.log("Seleted Accommodation = ", accomSelect);
}

// Meal Options Selection

var englishBreakfastTotal = 0;
var lunchMenuTotal = 0;
var wineSpecialTotal = 0;
var inclusiveDinnerTotal = 0;
var setCourseTotal = 0;

var mealSelect = "";

function englishBreakfastSelected() {
  mealSelect = "English Breakfast";
  console.log("Selected Meal Option = ", mealSelect);

  englishBreakfastTotal = 19 * travellerCounter;
  console.log(englishBreakfastTotal);
  globalThis.englishBreakfastTotal;
}

function lunchMenuSelected() {
  mealSelect = "Lunch Menu Items";
  console.log("Selected Meal Option = ", mealSelect);

  lunchMenuTotal = 22 * travellerCounter;
  console.log(lunchMenuTotal);
  globalThis.lunchMenuTotal;
}

function wineLunchSelected() {
  mealSelect = "Wine Special";
  console.log("Selected Meal Option = ", mealSelect);

  wineSpecialTotal = 50;
  console.log(wineSpecialTotal);
  globalThis.wineSpecialTotal;
}

function inclusiveDinnerSelected() {
  mealSelect = "Inclusive Dinner";
  console.log("Selected Meal Option = ", mealSelect);

  inclusiveDinnerTotal = 26 * travellerCounter;
  console.log(inclusiveDinnerTotal);
  globalThis.inclusiveDinnerTotal;
}

function setCourseSelected() {
  mealSelect = "Dinner Set Course";
  console.log("Selected Meal Option = ", mealSelect);

  setCourseTotal = 65 * travellerCounter;
  console.log(setCourseTotal);
  globalThis.setCourseTotal;
}

var mealTotal = 0;

// Find total meal selection cost
function mealSelectionTotal() {
  var mealTotal =
    englishBreakfastTotal +
    lunchMenuTotal +
    wineSpecialTotal +
    inclusiveDinnerTotal +
    setCourseTotal;
  console.log("Total meal cost = ", mealTotal);

  document.querySelector(".selected-meal-costs").innerHTML = mealTotal;

  displayData(mealTotal);

  return mealTotal;
}

var hotelCost = 157;
var hostelCost = 30;
var motelCost = 90;
var houseCost = 240;
var accomTotal = 0;

function displayData(mealTotal) {
  var nights = document.querySelector(".nights-staying").value;

  var totalCost = 0;

  console.log(accomSelect);

  // Anchor Lodge
  if (accomSelect == "Anchor Lodge") {
    var accomTotal = nights * hostelCost;
    document.querySelector(".selected-accommodation-cost").innerHTML =
      accomTotal;
    totalCost = accomTotal + mealTotal;
    document.querySelector(".total-cost").innerHTML = totalCost;
  }

  if (accomSelect == "Blue Haven") {
    var accomTotal = nights * houseCost;
    document.querySelector(".selected-accommodation-cost").innerHTML =
      accomTotal;
    totalCost = accomTotal + mealTotal;
    document.querySelector(".total-cost").innerHTML = totalCost;
  }

  if (accomSelect == "Kotare Cottage") {
    var accomTotal = nights * houseCost;
    document.querySelector(".selected-accommodation-cost").innerHTML =
      accomTotal;
    totalCost = accomTotal + mealTotal;
    document.querySelector(".total-cost").innerHTML = totalCost;
  }

  if (accomSelect == "Soverign Pier") {
    var accomTotal = nights * hotelCost;
    document.querySelector(".selected-accommodation-cost").innerHTML =
      accomTotal;
    totalCost = accomTotal + mealTotal;
    document.querySelector(".total-cost").innerHTML = totalCost;
  }

  if (accomSelect == "Beachside Resort") {
    var accomTotal = nights * hotelCost;
    document.querySelector(".selected-accommodation-cost").innerHTML =
      accomTotal;
    totalCost = accomTotal + mealTotal;
    document.querySelector(".total-cost").innerHTML = totalCost;
  }

  if (accomSelect == "Hahei Beach Resort") {
    var accomTotal = nights * motelCost;
    document.querySelector(".selected-accommodation-cost").innerHTML =
      accomTotal;
    totalCost = accomTotal + mealTotal;
    document.querySelector(".total-cost").innerHTML = totalCost;
  }

  if (accomSelect == "Beachside Resort") {
    var accomTotal = nights * motelCost;
    document.querySelector(".selected-accommodation-cost").innerHTML =
      accomTotal;
    totalCost = accomTotal + mealTotal;
    document.querySelector(".total-cost").innerHTML = totalCost;
  }
}

function userInfo() {
  var userName = document.querySelector(".name").value;
  var userPhone = document.querySelector(".phone").value;
  var userEmail = document.querySelector(".email").value;

  console.log(userName, userPhone, userEmail);
  document.querySelector(".users-name").innerHTML = userName;
  document.querySelector(".users-phone").innerHTML = userPhone;
  document.querySelector(".users-email").innerHTML = userEmail;
  return userName;
}
// User Costs`
