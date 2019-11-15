'use strict';

//global variables



var allStores = [];

let hours = ['06:00 ', '07:00 ', '08:00 ', '09:00 ', '10:00 ', '11:00 ', '12:00 ', '13:00 ', '14:00 ', '15:00 ', '16:00 ', '17:00 ', '18:00 '];

 let randomize = function(max, min) {
   return (Math.ceil(Math.random() * (max - min) + min))  
};

let estimatedCustomers = [];

 var container = document.getElementById('storeTable');

// finish this once constructor built 


function Store(maximumCustomer, minimumCustomer, averageSale, location) {
  this.maximumCustomer = maximumCustomer
  this.minimumCustomer = minimumCustomer
  this.averageSale = averageSale
  this.location = location
  this.projectedSales = []
  this.total = 0;
  this.generateProjectedSales();
  // console.log(this.projectedSales);
  allStores.push(this)
  this.tableRow();
}
console.log(allStores);

  
Store.prototype.generateProjectedSales = function () {
for (var i = 1; i < hours.length; i++) {
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

Store.prototype.tableRow = function ()  {
    var dataSpace = document.createElement('tr');
    container.appendChild(dataSpace);
    
    for (var j = 0; j < hours.length; j++) {
      var dataCell = document.createElement('td');
      dataSpace.appendChild(dataCell);
      dataCell.textContent = this.projectedSales[j];
      
    }
  }


    
 
 
var seattle = new Store(65, 23, 6.3, 'Seattle');
// allStores.push(seattle);
var tokiyo = new Store(3, 24, 1.2, 'Tokiyo');
// allStores.push(tokiyo);
var dubai = new Store(11, 38, 2.3, 'Dubai');
// allStores.push(dubai);
var paris = new Store(2, 16, 4.6, 'Paris');
// allStores.push(paris);
var lima = new Store (20, 38, 3.2, 'Lima');
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