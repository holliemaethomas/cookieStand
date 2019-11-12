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
  min : 23,
  max : 65,
  average: 6.3,
 salesPerHour : [],
 generateHourlySales: function () {
   for (var i = 0; i < hoursOfOperation.length; i++) {
     var cookiesAtThis = Math.floor(randomizeIt(this.min, this.max) * this.average) 
     this.salesPerHour.push(cookiesAtThis)
   }
 }
}
seattle.generateHourlySales();
console.log(seattle.salesPerHour)



var storeSales = seattle.sales;

 var putItHere = document.getElementById("listBox1")
 var ul = document.createElement('ul')
 putItHere.appendChild(ul)

for (var i = 0; i < hoursOfOperation.length; i++) {
  var li = document.createElement('li');
  li.textContent = ` Seattle ${hoursOfOperation[i]} estimated cookie sales ${seattle.salesPerHour[i]}`;
  ul.appendChild(li)
}
}

function tokiyoStore(){
  var tokiyo = {
    min : 3,
    max : 24,
    average: 1.2,
   salesPerHour : [],
   generateHourlySales: function () {
     for (var i = 0; i < hoursOfOperation.length; i++) {
       var cookiesAtThis = Math.floor(randomizeIt(this.min, this.max) * this.average) 
       this.salesPerHour.push(cookiesAtThis)
     }
   }
  }
  tokiyo.generateHourlySales();
  console.log(tokiyo.salesPerHour)
  var storeSales = tokiyo.sales;
   var putItHere = document.getElementById("listBox2")
   var ul = document.createElement('ul')
   putItHere.appendChild(ul)
  
  for (var i = 0; i < hoursOfOperation.length; i++) {
    var li = document.createElement('li');
    li.textContent = `Tokiyo ${hoursOfOperation[i]} estimated cookie sales ${tokiyo.salesPerHour[i]}`;
    ul.appendChild(li)
  }
  }

  function dubaiStore(){
    var dubai = {
      min : 11,
      max : 38,
      average: 3.7,
     salesPerHour : [],
     generateHourlySales: function () {
       for (var i = 0; i < hoursOfOperation.length; i++) {
         var cookiesAtThis = Math.floor(randomizeIt(this.min, this.max) * this.average) 
         this.salesPerHour.push(cookiesAtThis)
       }
     }
    }
    dubai.generateHourlySales();
    console.log(dubai.salesPerHour)
    var storeSales = dubai.sales;
     var putItHere = document.getElementById("listBox3")
     var ul = document.createElement('ul')
     putItHere.appendChild(ul)
    
    for (var i = 0; i < hoursOfOperation.length; i++) {
      var li = document.createElement('li');
      li.textContent = `Dubai ${hoursOfOperation[i]} estimated cookie sales ${dubai.salesPerHour[i]}`;
      ul.appendChild(li)
    }
    }

    function parisStore(){
      var paris = {
        min : 20,
        max : 38,
        average: 2.3,
       salesPerHour : [],
       generateHourlySales: function () {
         for (var i = 0; i < hoursOfOperation.length; i++) {
           var cookiesAtThis = Math.floor(randomizeIt(this.min, this.max) * this.average) 
           this.salesPerHour.push(cookiesAtThis)
         }
       }
      }
      paris.generateHourlySales();
      console.log(paris.salesPerHour)
      var storeSales = paris.sales;
       var putItHere = document.getElementById("listBox4")
       var ul = document.createElement('ul')
       putItHere.appendChild(ul)
      
      for (var i = 0; i < hoursOfOperation.length; i++) {
        var li = document.createElement('li');
        li.textContent = `Paris ${hoursOfOperation[i]} estimated cookie sales ${paris.salesPerHour[i]}`;
        ul.appendChild(li)
      }
      }

      function limaStore(){
        var lima = {
          min : 2,
          max : 16,
          average: 4.6,
         salesPerHour : [],
         generateHourlySales: function () {
           for (var i = 0; i < hoursOfOperation.length; i++) {
             var cookiesAtThis = Math.floor(randomizeIt(this.min, this.max) * this.average) 
             this.salesPerHour.push(cookiesAtThis)
           }
         }
        }
        lima.generateHourlySales();
        console.log(lima.salesPerHour)
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
        
        console.log(total)
        ul.appendChild(liTotal)
        
        }

        

  seattleStore();
  tokiyoStore();
  dubaiStore();
  parisStore();
  limaStore();
