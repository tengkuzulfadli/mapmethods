//Saturday To Do List
//8am: Walk the dogs
//12pm: Lunch
//3pm Watch a movie

//Create a new Map() and add each to-do as a key-value pair
const saturday = new Map();

saturday.set(8, 'Walk the dogs');
saturday.set(12, 'Lunch');
saturday.set(3, 'Watch a movie');

//How do we get the value associated with the 12 key --> using .get() method
const noon = saturday.get(12);
console.log("What am I doing at 12pm on saturday?", noon);

//How do we get the value associated with the 9 key --> using .get() method
const nine = saturday.get(9);
console.log("What am I doing at 9 am on saturday?", nine);

//Does our Map have a value associated with 4? --> using .has() method
const hasFour = saturday.has(4);
console.log(hasFour);

//Does our Map have a value associated with 8? --> using .has() method
const hasEight = saturday.has(8);
console.log(hasEight);

//What is the size or our Saturday map? --> using .size method. This method does not contains ()
const saturdaySize = saturday.size;
console.log(`My map size is ${saturdaySize}`);

//Delete the element associated with the key 3 --> using .delete() method and return a boolean
console.log("Did my key-value pair successfully delete - 3?", saturday.delete(3));
//Delete the element associated with the key 10 --> using .delete() method and return a boolean
console.log("Did my key-value pair successfully delete - 10?", saturday.delete(10));
//Clear the entire Saturday map object --> using .clear() method
saturday.clear();
console.log("My current map size is ", saturday.size);

//What is the first key in your saturday Map object --> using keys() method to get the key request on the second var using .next().value method
const saturdayKeys =saturday.keys();
const firstKeys = saturdayKeys.next().value;
console.log(`My first key is ${firstKeys}`);

//What is the second value in your saturday Map object --> using values() method to grab the value, then call next() method before grab the second value
const saturdayValues = saturday.values();
saturdayValues.next();
const secondValues = saturdayValues.next().value;
console.log(`My second value is ${secondValues}`);

//What is the third value in your saturday map --> using entries() method to grab key & value output
const saturdayEntries = saturday.entries();
saturdayEntries.next();
saturdayEntries.next();
const thirdEntry = saturdayEntries.next().value;
console.log(`My third entry is ${thirdEntry}`);

//Using the forEach method, if a key is equal to 12,
//Console the value of the key
saturday.forEach((value, key) => {
    key === 12 ? console.log(`it's time for ${value}`) : null;
});