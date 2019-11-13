'use strict';

// Global functions and variables

function randomizeIt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// credit for randomizeIt to stackoverflow

let hoursOfOperation = [
"06:00", "07:00", "08:00", "09:00", 
"10:00", "12:00", "13:00", "14:00",
"15:00", "16:00", "17:00", "18:00"
]


let allStores = [];

var tableLocation = document.getElementById('table')
var projectedCustomers = [];
var randomizeIt = function (min, max) {
for (var i = 0; i < hoursOfOperation.length; i++){
  projectedCustomers.push(Math.round(Math.random() * (max - min) + min))
} return projectedCustomers;
}
// / end global

function Store (minimumCustomer, maximumCustomer, averageSale, storeLocation) {
  this.minimumCustomer = minimumCustomer,
  this.maximumCustomer = maximumCustomer, 
  this.averageSale = averageSale,
  this.storeLocation = storeLocation,
  this.projectedCustomers = randomizeIt(minimumCustomer, maximumCustomer)
  this.total = 0; 
  this.cookiesByHour = [];
  allStores.push(this) 
}

Store.prototype.render = function () {
  var row = document.createElement('tr');
  var firstCol = document.createElement('td');
  firstcol.textContent = this.storeLocation
  row.appendChild(firstCol)

  for (var i in hoursOfOperation) {
    var totalCol = document.createElement('td')
    totalCol.textContent = `total   ${this.total}`
    row.appendChild(totalCol)

    tableLocation.appendChild(row);
  }
}
function renderAll() {
for (var i in allStores){
  allStores[i].render();
}
}

function makeFooterRow() {
  var bottomRow = document.createElement('tr');
  var bottomColumn = document.createElement('td');
  bottomColumn.textContent = 'Hourly Totals '
  bottomRow.appendChild(bottomColumn);
  tableLocation.appendChild(bottomRow)

  var hourlyTotal = [];
  for (var i in hoursOfOperation) {
    hourlyTotal.push(0)
    for (var h in allStores) {
      hourlyTotal[i] += allStores[h].cookiesByHour[i]
      console.log (hourlyTotal)
    }
    var hourlyTotalColumn = document.createElement('td')
    hourlyTotalColumn.textContent = hourlyTotal[i];
    bottomRow.appendChild(hourlyTotalColumn)
  }

}
var makeHeaderRow = function () {
  var textBox = document.createElement('th')
  var topRow = document.createElement('tr');
  textBox.textContent = 'Hours Of Operation'
  topRow.appendChild(textBox)
  for (var q in hoursOfOperation) {
    var headerCol = document.createElement('th');
    headerCol.textContent = hoursOfOperation[q];
    tableLocation.appendChild(topRow);
    topRow.appendChild(headerCol);
    console.log(headerCol)
  }
}
renderAll();
makeFooterRow();
makeHeaderRow();

var seattle = new Store(6, 20, 3, seattle);
var tokiyo = new Store(3, 9, 2, tokiyo);
var dubai = new Store(4, 8, 1, dubai);
var paris = new Store(11, 8, 2, paris);
var lima = new Store( 4, 20, 3, lima); 

// some credit on this lab goes to hollie thomas
