'use strict';

// console.log('Hello, this is Mohsin!')

// // example from class
// const hours = ['6am, '7am', 

// var seattle  = {
//   name: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avg: 6.3,
//   cookiePerHourArray: [],
//   dailyTotal: 0,
//   getRandomCust: function (){
//     //math.random docs
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   }
//   calcCookiesPerHour: function(){
//     for (let i = 0; i< hours.length; i++){
//     let randomCust = this.getRandomCust();
//     console.log(randomCust);
//   },
//   render: function(){
//     this.calcCookiesPerHour();
//     console.log('I am in the render method');
//   }
// };

// seattle.render();

//Global Variables
let myContainer = document.getElementById('container');
let cookieTable = document.getElementById('cookieTable');
let tableHeader = document.getElementById('tableHeader');
let tableBody = document.getElementById('tableBody');
let tableFooter = document.getElementById('tableFooter');
let totalCookieStands = [];


let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// let seattleList = document.getElementById('Seattle');
// let tokyoList = document.getElementById('Tokyo');
// let dubaiList = document.getElementById('Dubai');
// let parisList = document.getElementById('Paris');
// let limaList = document.getElementById('Lima');


// Constructor
function CookieStand(storeName, minCust, maxCust, avg) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avg = avg;
  this.cookiePerHourArray = [];
  this.dailyTotal = 0;
  totalCookieStands.push(this);
}




// object literal - Seattle
let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avg: 6.3,
  cookiePerHourArray: [],
  dailyTotal: 0,
  randomCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  calcCookiesPerHour: function() {
    for (let i = 0; i < hours.length; i++){
      let randomCust = this.randomCustomersPerHour();
      let hourlyTotal = Math.floor(randomCust * this.avg);
      this.cookiePerHourArray.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
  },
  render: function() {
    this.calcCookiesPerHour();
    for (let i = 0; i <this.cookiePerHourArray.length; i++) {
      let ul = document.createElement('ul');
      ul.textContent = `${hours[i]}: ${this.cookiePerHourArray[i]}`;
      seattleList.appendChild(ul);
    }
    let ul = document.createElement('ul');
    ul.textContent = `Total: ${this.dailyTotal} cookies`;
    seattleList.appendChild(ul);
  }
};

// object literal - Tokyo
let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avg: 1.2,
  cookiePerHourArray: [],
  dailyTotal: 0,
  randomCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  calcCookiesPerHour: function() {
    for (let i = 0; i < hours.length; i++){
      let randomCust = this.randomCustomersPerHour();
      let hourlyTotal = Math.floor(randomCust * this.avg);
      this.cookiePerHourArray.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
  },
  render: function() {
    this.calcCookiesPerHour();
    for (let i = 0; i <this.cookiePerHourArray.length; i++) {
      let ul = document.createElement('ul');
      ul.textContent = `${hours[i]}: ${this.cookiePerHourArray[i]}`;
      tokyoList.appendChild(ul);
    }
    let ul = document.createElement('ul');
    ul.textContent = `Total: ${this.dailyTotal} cookies`;
    tokyoList.appendChild(ul);
  }
};

// object literal - Dubai
let dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avg: 3.7,
  cookiePerHourArray: [],
  dailyTotal: 0,
  randomCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  calcCookiesPerHour: function() {
    for (let i = 0; i < hours.length; i++){
      let randomCust = this.randomCustomersPerHour();
      let hourlyTotal = Math.floor(randomCust * this.avg);
      this.cookiePerHourArray.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
  },
  render: function() {
    this.calcCookiesPerHour();
    for (let i = 0; i <this.cookiePerHourArray.length; i++) {
      let ul = document.createElement('ul');
      ul.textContent = `${hours[i]}: ${this.cookiePerHourArray[i]}`;
      dubaiList.appendChild(ul);
    }
    let ul = document.createElement('ul');
    ul.textContent = `Total: ${this.dailyTotal} cookies`;
    dubaiList.appendChild(ul);
  }
};

// object literal - Paris
let paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avg: 2.3,
  cookiePerHourArray: [],
  dailyTotal: 0,
  randomCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  calcCookiesPerHour: function() {
    for (let i = 0; i < hours.length; i++){
      let randomCust = this.randomCustomersPerHour();
      let hourlyTotal = Math.floor(randomCust * this.avg);
      this.cookiePerHourArray.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
  },
  render: function() {
    this.calcCookiesPerHour();
    for (let i = 0; i <this.cookiePerHourArray.length; i++) {
      let ul = document.createElement('ul');
      ul.textContent = `${hours[i]}: ${this.cookiePerHourArray[i]}`;
      parisList.appendChild(ul);
    }
    let ul = document.createElement('ul');
    ul.textContent = `Total: ${this.dailyTotal} cookies`;
    parisList.appendChild(ul);
  }
};

// object literal - Lima
let lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avg: 4.6,
  cookiePerHourArray: [],
  dailyTotal: 0,
  randomCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  calcCookiesPerHour: function() {
    for (let i = 0; i < hours.length; i++){
      let randomCust = this.randomCustomersPerHour();
      let hourlyTotal = Math.floor(randomCust * this.avg);
      this.cookiePerHourArray.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
  },
  render: function() {
    this.calcCookiesPerHour();
    for (let i = 0; i <this.cookiePerHourArray.length; i++) {
      let ul = document.createElement('ul');
      ul.textContent = `${hours[i]}: ${this.cookiePerHourArray[i]}`;
      limaList.appendChild(ul);
    }
    let ul = document.createElement('ul');
    ul.textContent = `Total: ${this.dailyTotal} cookies`;
    limaList.appendChild(ul);
  }
};

seattle.render();
tokyo.render();
dubai.render;
paris.render;
lima.render();