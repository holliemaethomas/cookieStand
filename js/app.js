'use strict';

//GLOBAL
var container = document.getElementById('storeTable');

var table = document.createElement('table');

var tableBody = document.createElement('tb');

var dailyTotalArray = [];

var hourlyTotalArray = [];

var allStores = [];

let estimatedCustomers = [];

var globalProjectedSales = [];



let hours = ['06:00 ', '07:00 ', '08:00 ', '09:00 ', '10:00 ', '11:00 ', '12:00 ', '13:00 ', '14:00 ', '15:00 ', '16:00 ', '17:00 '];

let randomize = function (max, min) {
  return (Math.ceil(Math.random() * (max - min) + min))
};

// END GLOBAL 

function Store(maximumCustomer, minimumCustomer, averageSale, location) {
  this.maximumCustomer = maximumCustomer
  this.minimumCustomer = minimumCustomer
  this.averageSale = averageSale
  this.location = location
  this.hourlyProjectedSales = []
  this.dailyTotal = 0
  this.hourlyTotal = 0
  this.hourlyTotalSum = []
  this.generateDailyTotals()
  allStores.push(this)
  this.makeTableBody()

}
console.log(allStores);



// this function generates daily totals
Store.prototype.generateDailyTotals = function () {
  for (var i = 0; i < hours.length; i++) {
    var randomCustomerNum = randomize(this.maximumCustomer, this.minimumCustomer);
    var randomAverageSale = Math.ceil(randomCustomerNum * this.averageSale);
    this.hourlyProjectedSales.push(randomAverageSale);
    this.dailyTotal += randomAverageSale;
  }
  dailyTotalArray.push(this.dailyTotal);
  globalProjectedSales.push(this.hourlyProjectedSales);
};

Store.prototype.makeTableBody = function () {
  container.appendChild(table);
  var tableBody = document.createElement('tbody');
  table.appendChild(tableBody);
  var dataSpace = document.createElement('tr');
  tableBody.appendChild(dataSpace);
  for (var j = 0; j < hours.length; j++) {
    var dataCell = document.createElement('td');
    dataSpace.appendChild(dataCell);
    var content = this.hourlyProjectedSales[j];
    var location = this.location;
    dataCell.textContent = `${content}  `
  };

};

var makeHeaderRow = function () {
  var headerSpace = document.createElement('thead');
  table.appendChild(headerSpace);
  for (var i = 0; i < hours.length; i++) {
    var timeSlot = document.createElement('td');
    headerSpace.appendChild(timeSlot);
    timeSlot.textContent = hours[i];
  };
};
makeHeaderRow();

// var createFooter = function () {
//   var footer = document.createElement('tfoot');
//   table.appendChild(footer);
//   var createSpace = document.createElement('tr');
//   footer.appendChild(createSpace);
//   for (var i = 0; i < hours.length; i++) {
//     var totalCells = document.createElement('td');
//     createSpace.appendChild(totalCells);
//     totalCells.textContent = globalProjectedSales;
//   }
// };


var seattle = new Store(65, 23, 6.3, 'Seattle');
// allStores.push(seattle);
var tokiyo = new Store(3, 24, 1.2, 'Tokiyo');
// allStores.push(tokiyo);
var dubai = new Store(11, 38, 2.3, 'Dubai');
// allStores.push(dubai);
var paris = new Store(2, 16, 4.6, 'Paris');
// allStores.push(paris);
var lima = new Store(20, 38, 3.2, 'Lima');
createFooter();
// allStores.push(lima);

// Store.prototype.fillTable();

// form notes 

// var form = document.getElementById('form');

// AddNewStore.prototype.render = function () {
//   var newStoreData = document.getElementById('dataEntryArea')
// }

// function AddNewStore (maximumCustomer, minimumCustomer, averageSale, location) {

//   this.maximumCustomer = maximumCustomer;
//   this.minimumCustomer = minimumCustomer;
//   this.averageSale = averageSale;
//   this.location = averageSale;
// }

// function submitHandler(event) {
//   event.preventDefault();

//   var newStore = new AddNewStore (event.target.maxCustomers.value)



//   event.target.reset();

// }

// form.addEventListener('submit', submitHandler);