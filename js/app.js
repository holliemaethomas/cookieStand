'use strict';

//GLOBAL
var table = document.getElementById('table')

var form = document.getElementById('inputArea')

form.addEventListener("submit", AddNewStore)

var allStores = [];

var hours = ['06:00 ', '07:00 ', '08:00 ', '09:00 ', '10:00 ', '11:00 ', '12:00 ', '13:00 ', '14:00 ', '15:00 ', '16:00 ', '17:00 '];

let randomize = function (max, min) {
  var averageCustomer = []
  for (var i = 0; i < hours.length; i++) {
  averageCustomer.push(Math.round(Math.random() * (max - min) + min))
} return averageCustomer
}



// END GLOBAL 

function Store(maximumCustomer, minimumCustomer, averageSale, location) {
  this.maximumCustomer = maximumCustomer
  this.minimumCustomer = minimumCustomer
  this.averageSale = averageSale
  this.averageCustomer = randomize(this.maximumCustomer, this.minimumCustomer)
  this.location = location
  this.hourlyProjectedSales = []
  this.total = 0;
  allStores.push(this)

}



Store.prototype.render = function () {
  var row = document.createElement('tr');
  table.appendChild(row)
  var firstCol = document.createElement('td')
  firstCol.textContent = this.location
  row.appendChild(firstCol);
  

  for (var i = 0; i < hours.length; i++) {
    var col = document.createElement('td')
    var data = Math.floor(this.averageCustomer[i] * this.averageSale)
    col.textContent = data

    row.appendChild(col)
    this.total += data
    this.hourlyProjectedSales.push(data)
    table.appendChild.row
  }

  var totalCol = document.createElement('td')
  totalCol.textContent = 'total: ' + this.total
  row.appendChild(totalCol)

}

function renderAll() {
  for (var i in allStores) {
    allStores[i].render()
  }
}

function AddNewStore(event) {
  event.preventDefault();
  var newLocation = event.target.storeLocation.value;
  var newMinimumCustomer = event.target.minimumCustomer.value;
  var newMaximumCustomer = event.target.MaximumCustomer.value;
  var newAverageSale = event.target.averageSale.value;

  new Store(newMaximumCustomers, newMinimumCustomers, newAverageSale,
    newLocation);

  table.innerHTML = '';

  makeHeaderRow();
  renderAll();
  makeFooterRow();
}

function makeFooterRow() {
  var bottomRow = document.createElement('tr');
  table.appendChild(bottomRow)
  var bottomCol = document.createElement('td')

  var hourlyTotal = []
  for (var i in hours) {
    hourlyTotal.push(0)
    for (var h in allStores) {
      hourlyTotal[i] += allStores[h].hourlyProjectedSales[i]
    }
    var hourlyTotalCol = document.createElement('td')
    hourlyTotalCol.textContent = hourlyTotal[i]
    bottomRow.appendChild(hourlyTotalCol)
  }
};

var makeHeaderRow = function () {
  var top = document.createElement('th')
  table.appendChild(top)
  var topContent = document.createElement('tr')
  topContent.textContent = 'Hours of Operation' 
  topContent.appendChild(top)
  for (var m in hours) {
    var headerCol = document.createElement('th');
    headerCol.textContent = hours[m]
    topContent.appendChild(headerCol)
  }
};


var seattle = new Store(65, 23, 6.3, 'Seattle');

var tokiyo = new Store(3, 24, 1.2, 'Tokiyo');

var paris = new Store(2, 16, 4.6, 'Paris');

var lima = new Store(20, 38, 3.2, 'Lima');

makeHeaderRow();
renderAll();
makeFooterRow();

// Used some my previous lab as an example cookie-store

