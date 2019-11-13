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
// /////////////////////////////////////////////

let LocationData = document.createElement('table')

// This is my constructor function, it constructs store objects 

function Store (customerMin, customerMax, averagePurchase, location) {
  this.customerMin = customerMin,
  this.customerMax = customerMax,
  this.averagePurchase = averagePurchase,
  this.Storelocation = 'location',
  this.averagePurchase = averagePurchase, 
  this.expectedCustomers = randomizeIt(this.customerMax, this.customerMin),
  this.hourlyTotal = 0,
  this.dailyTotal = 0,
  allStores.push(this)
}

// this is my render function it takes inforation from the store object and renders it in a table
Store.prototype.render = function() {
  let tableRow = document.createElement('tr')
  let firstTableColumn = document.createElement('td')
  tableColumn.textContent = this.storeLocation
  tableRow.appendChild(firstTableColumn)
  for (var i = 0; i < hoursOfOperation.length; i++) {
    let column = document.createElement('td')
    column.textContent = this.expectedCustomers
    tableRow.appendChild(column)
    this.hourlytotal = this.expectedCustomers * this.estimatedPurchases
  
  }
}


let seattle = new Store(23, 65, 6.3, 'Seattle' )