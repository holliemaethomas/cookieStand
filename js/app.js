'use strict';

//global variables



var allStores = [];

let hours = ['06:00 ', '07:00 ', '08:00 ', '09:00 ', '10:00 ', '11:00 ', '12:00 ', '13:00 ', '14:00 ', '15:00 ', '16:00 ', '17:00 ', '18:00 '];

 let randomize = function(max, min) {
   return (Math.ceil(Math.random() * (max - min) + min))  
};

let estimatedCustomers = [];

 var container = document.getElementById('storeTable')

// finish this once constructor built 


function Store(maximumCustomer, minimumCustomer, averageSale, location) {
  this.maximumCustomer = maximumCustomer
  this.minimumCustomer = minimumCustomer
  this.averageSale = averageSale
  this.location = location
  this.projectedSales = []
  this.total = 0;
  this.generateProjectedSales();
  allStores.push(this)
}
  
Store.prototype.generateProjectedSales = function () {
for (var i = 0; i < hours.length; i++) {
  var randomCustomerNum = randomize(this.maximumCustomer, this.minimumCustomer);
  var randomAverageSale = Math.ceil(randomCustomerNum * this.averageSale);
  this.projectedSales.push(randomAverageSale);
  this.total += randomAverageSale;
}
}

var makeHeaderRow = function () {
    var headerSpace = document.createElement('tr');
    container.appendChild(headerSpace);
    for (var i = 0; i < hours.length; i++) {
    var timeSlot = document.createElement('td');
    headerSpace.appendChild(timeSlot);
    timeSlot.textContent = hours[i];
  }
}

makeHeaderRow();

var fillTable = function () {
  for (var i = 0; i < allStores.length; i++) {
  var dataSpace = document.createElement('tr')
  .appendChild(dataSpace);
  var dataCell = document.createElement('td');
  dataSpace.appendChild(dataCell);
  for (var i = 0; i > hours.ldataCell.textContent = projectedSales[i] // replace with for loop lloping through hours
  
  
}
}
 fillTable();
let seattle = new Store(65, 23, 6.3, 'Seattle');
let tokiyo = new Store(3, 24, 1.2, 'Tokiyo');
let dubai = new Store(11, 38, 2.3, 'Dubai');
let paris = new Store(2, 16, 4.6, 'Paris');
let lima = new Store (20, 38, 3.2, 'Lima');
 
console.log(seattle)

// 
