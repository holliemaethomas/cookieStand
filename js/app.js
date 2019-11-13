'use strict';

//global variables

var allStores = [];
var inputArea = document.getElementById('input-area');
var storeTable = document.getElementById("store-table");
console.log(storeTable)
var randomNumberGenerator = function (max, min) {
  var projectedCustomers = [];
  for (var i = 0; i < hoursOfOperation.length; i++) {
    projectedCustomers.push(Math.round(Math.random() * (max - min) + min))
  }
  return projectedCustomers;
}

var hoursOfOperation = ['0600:', '0700:', '0800:', '0900:', '1000:', '1100:', '1200:', '1300:', '1400:', '1500:', '1600:', '1700:', '1800:', '1900:']
//global variable

function Store(minimumCustomer, maximumCustomer, averageSale, storeLocation) {
  this.storeLocation = storeLocation
  this.minimumCustomer = minimumCustomer
  this.maximumCustomer = maximumCustomer
  this.averageSale = averageSale
  this.projectedCustomers = randomNumberGenerator(this.maximumCustomer, this.minimumCustomer)
  this.total = 0;
  this.cookiesByHour = [];
  allStores.push(this)
}

Store.prototype.render = function () {
  var row = document.createElement('tr');

  var firstCol = document.createElement('td');
  firstCol.textContent = this.storeLocation
  row.appendChild(firstCol)


  for (var i in hoursOfOperation) {
    var col = document.createElement('td');
    var data = Math.floor(this.projectedCustomers[i] * this.averageSale)
    col.textContent = data
    row.appendChild(col)
    this.total += data
    this.cookiesByHour.push(data);
  }

  var totalCol = document.createElement('td');
  totalCol.textContent = 'total: ' + this.total
  row.appendChild(totalCol)

  storeTable.appendChild(row)
}

function renderAll() {
  console.log('dfsfd', storeTable.childNodes.length)
  for (var i in allStores) {
    allStores[i].render();
  }
}
  

function makeFooterRow() {
  var bottomRow = document.createElement('tr');
  var bottomColumn = document.createElement('td');
  bottomColumn.textContent = 'Hourly Totals '
  bottomRow.appendChild(bottomColumn);
  storeTable.appendChild(bottomRow)

  var hourlyTotal = [];
  for (var i in hoursOfOperation) {
    hourlyTotal.push(0)
    for (var h in allStores) {
      hourlyTotal[i] += allStores[h].cookiesByHour[i]
      // console.log (hourlyTotal)
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
    storeTable.appendChild(topRow);
    topRow.appendChild(headerCol);
    console.log(headerCol)
  }
}



var seattle = new Store(23, 65, 6.3, 'Seattle')

var tokiyo = new Store(3, 24, 1.2, 'Tokiyo')

var paris = new Store(11, 38, 3.7, 'Paris')

var dubai = new Store(20, 38, 2.3, 'Dubai')

var lima = new Store(2, 16, 4.6, 'Lima')


makeHeaderRow();
renderAll();
makeFooterRow();

// // credit on this lab goes to hollie thomas

