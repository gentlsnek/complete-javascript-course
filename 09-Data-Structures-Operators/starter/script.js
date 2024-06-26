'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex){
        return  [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderDelivery: function (obj){
    console.log(obj);
  }
};


/*
const arr = [2,3,4];

const a = arr[0];
const b = arr[1];
const c = arr[2];


const [x,y,z] = arr;


console.log(x , y, z);
console.log(arr);



let [main, ,secondary] = restaurant.categories;

console.log(main, secondary);


//to switch variables

[secondary, main] = [main, secondary];

console.log(main,  secondary);/.


*/
/*

console.log(restaurant.order(2, 0));


const[startercourse, maincourse] = restaurant.order(2,1);


console.log(startercourse, maincourse);


const {name, openingHours, categories} = restaurant;

//console.log(name, openingHours, categories);

const{name: restaurantName,openingHours: hours, categories: tags} = restaurant;

console.log(restaurantName, hours, tags);


const{menu = [], starters = []} = restaurant;

console.log(menu, starters);

//nested hours



const {fri: {open : o, close : c}} = openingHours;

console.log( o , c );

const {thu} = openingHours;
console.log(thu);
console.log(restaurant.openingHours.fri);

*/

const arr =  [7, 8, 9];


const newArr = [4, 5, ...arr];


console.log(newArr);

const newMenue = [ ...restaurant.mainMenu, 'gnocci'];

console.log(newMenue);


const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(menu);

//iiterables are arrays strings maps sets but not objects;


const str = 'erwin';

const strA = [...str];
console.log(strA);

