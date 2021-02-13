'use strict';

console.log('Hello, this is Mohsin!')

// global variables
const hours = ['6am, '7am', 

var seattle  = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avg: 6.3,
  cookiePerHourArray: [],
  dailyTotal: 0,
  getRandomCust: function (){
    //math.random docs
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  }
  calcCookiesPerHour: function(){
    for (let i = 0; i< hours.length; i++){
    let randomCust = this.getRandomCust();
    console.log(randomCust);
  },
  render: function(){
    this.calcCookiesPerHour();
    console.log('I am in the render method');
  }
};

seattle.render();