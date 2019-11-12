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
// /////////////////////////////////////////////

function seattleStore(){
  var seattle = {
    min : 6,
    max : 20,
    average: 4.6,
   salesPerHour : [],
   total : 0,
   generateHourlySales: function () {
     for (var i = 0; i < hoursOfOperation.length; i++) {
       var cookiesAtThis = Math.floor(randomizeIt(this.min, this.max) * this.average) 
       this.salesPerHour.push(cookiesAtThis)
     }
   },
   generateTotals: function () {
     for (var i = 0; i < seattle.salesPerHour.length; i++) {
         seattle.total += seattle.salesPerHour[i];   
     }
   }        
  }
  seattle.generateHourlySales();
  seattle.generateTotals();
  var storeSales = seattle.sales;
   var putItHere = document.getElementById("listBox4")
   var ul = document.createElement('ul')
   putItHere.appendChild(ul)
  
  for (var i = 0, total =0; i < hoursOfOperation.length; i++) {
    var li = document.createElement('li');

    
    var liTotal = document.createElement('li')
    li.textContent = `Seattle ${hoursOfOperation[i]} estimated cookie sales ${seattle.salesPerHour[i]}`;
    ul.appendChild(li)
  }     
var appendTotal = document.createElement('li')
li.textContent = `The estimated totals for the Seattle location is ${seattle.total}`
 li.appendChild.appendTotal     
  }


  function tokiyoStore(){
    var tokiyo = {
      min : 3,
      max : 46,
      average: 2.6,
     salesPerHour : [],
     total : 0,
     generateHourlySales: function () {
       for (var i = 0; i < hoursOfOperation.length; i++) {
         var cookiesAtThis = Math.floor(randomizeIt(this.min, this.max) * this.average) 
         this.salesPerHour.push(cookiesAtThis)
       }
     },
     generateTotals: function () {
       for (var i = 0; i < tokiyo.salesPerHour.length; i++) {
           tokiyo.total += tokiyo.salesPerHour[i];   
       }
     }        
    }
    tokiyo.generateHourlySales();
    tokiyo.generateTotals();
    var storeSales = tokiyo.sales;
     var putItHere = document.getElementById("listBox4")
     var ul = document.createElement('ul')
     putItHere.appendChild(ul)
    
    for (var i = 0, total =0; i < hoursOfOperation.length; i++) {
      var li = document.createElement('li');
  
      
      var liTotal = document.createElement('li')
      li.textContent = `Tokiyo ${hoursOfOperation[i]} estimated cookie sales ${tokiyo.salesPerHour[i]}`;
      ul.appendChild(li)
    }     
  var appendTotal = document.createElement('li')
  li.textContent = `The estimated totals for the Tokiyo location is ${tokiyo.total}`
   li.appendChild.appendTotal     
    }

    function dubaiStore(){
      var dubai = {
        min : 3,
        max : 46,
        average: 2.6,
       salesPerHour : [],
       total : 0,
       generateHourlySales: function () {
         for (var i = 0; i < hoursOfOperation.length; i++) {
           var cookiesAtThis = Math.floor(randomizeIt(this.min, this.max) * this.average) 
           this.salesPerHour.push(cookiesAtThis)
         }
       },
       generateTotals: function () {
         for (var i = 0; i < dubai.salesPerHour.length; i++) {
             dubai.total += dubai.salesPerHour[i];   
         }
       }        
      }
      dubai.generateHourlySales();
      dubai.generateTotals();
      var storeSales = dubai.sales;
       var putItHere = document.getElementById("listBox4")
       var ul = document.createElement('ul')
       putItHere.appendChild(ul)
      
      for (var i = 0, total =0; i < hoursOfOperation.length; i++) {
        var li = document.createElement('li');
    
        
        var liTotal = document.createElement('li')
        li.textContent = `Dubai ${hoursOfOperation[i]} estimated cookie sales ${dubai.salesPerHour[i]}`;
        ul.appendChild(li)
      }     
    var appendTotal = document.createElement('li')
    li.textContent = `The estimated totals for the Dubai location is ${dubai.total}`
     li.appendChild.appendTotal     
      }

      function parisStore(){
        var paris = {
          min : 3,
          max : 46,
          average: 2.6,
         salesPerHour : [],
         total : 0,
         generateHourlySales: function () {
           for (var i = 0; i < hoursOfOperation.length; i++) {
             var cookiesAtThis = Math.floor(randomizeIt(this.min, this.max) * this.average) 
             this.salesPerHour.push(cookiesAtThis)
           }
         },
         generateTotals: function () {
           for (var i = 0; i < paris.salesPerHour.length; i++) {
               paris.total += paris.salesPerHour[i];   
           }
         }        
        }
        paris.generateHourlySales();
        paris.generateTotals();
        var storeSales = paris.sales;
         var putItHere = document.getElementById("listBox4")
         var ul = document.createElement('ul')
         putItHere.appendChild(ul)
        
        for (var i = 0, total =0; i < hoursOfOperation.length; i++) {
          var li = document.createElement('li');
      
          
          var liTotal = document.createElement('li')
          li.textContent = `Paris ${hoursOfOperation[i]} estimated cookie sales ${paris.salesPerHour[i]}`;
          ul.appendChild(li)
        }     
      var appendTotal = document.createElement('li')
      li.textContent = `The estimated totals for the Dubai location is ${paris.total}`
       li.appendChild.appendTotal     
        }



      function limaStore(){
        var lima = {
          min : 2,
          max : 16,
          average: 4.6,
         salesPerHour : [],
         total : 0,
         generateHourlySales: function () {
           for (var i = 0; i < hoursOfOperation.length; i++) {
             var cookiesAtThis = Math.floor(randomizeIt(this.min, this.max) * this.average) 
             this.salesPerHour.push(cookiesAtThis)
           }
         },
         generateTotals: function () {
           for (var i = 0; i < lima.salesPerHour.length; i++) {
               lima.total += lima.salesPerHour[i];   
           }
         }        
        }
        lima.generateHourlySales();
        lima.generateTotals();
        var storeSales = lima.sales;
         var putItHere = document.getElementById("listBox4")
         var ul = document.createElement('ul')
         putItHere.appendChild(ul)
        
        for (var i = 0, total =0; i < hoursOfOperation.length; i++) {
          var li = document.createElement('li');
    
          
          var liTotal = document.createElement('li')
          li.textContent = `Lima ${hoursOfOperation[i]} estimated cookie sales ${lima.salesPerHour[i]}`;
          ul.appendChild(li)
        }     
      var appendTotal = document.createElement('li')
      li.textContent = `The estimated totals for the Lima location is ${lima.total}`
       li.appendChild.appendTotal     
        }

        

  seattleStore();
  tokiyoStore();
  dubaiStore();
  parisStore();
  limaStore();
