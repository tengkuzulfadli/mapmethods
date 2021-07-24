//Maps: Challenge

//Below is a list of Oscar-winning Best Pictures from the last several years.
// 2020 - "Parasite"
// 2019 - "Green Book"
// 2018 - "The Shape of Water"
// 2017 - "Moonlight"
// 2016 - "Spotlight"
// 2015 - "Birdman"
// 2014 - "12 Years a Slave"
// 2013 - "Argo"

//1. Create a new Map with the Best Pictures list from above.
//Make sure your keys are the year, BUT they can be any format.
const oscar = new Map();
oscar.set(2020, "Parasite");
oscar.set(2019, "Green Book");
oscar.set(2018, "The Shape of Water");
oscar.set(2017, "Moonlight");
oscar.set(2016, "Spotlight");
oscar.set(2015, "Birdman");
oscar.set(2014, "12 Years a Slave");
oscar.set(2013, "Argo");

//2. What film won best picture in 2015?
const oscarWinning = oscar.get(2015);
console.log(`The film won in 2015 is ${oscarWinning}`);

//3. Does this list contain Best Picture from 2010? 2018?
const oscarContain1 = oscar.has(2010);
console.log(`the answer is ${oscarContain1}`);
const oscarContain2 = oscar.has(2018);
console.log(`the answer is ${oscarContain2}`);

//4. How many films are included in this list?
const oscarSize = oscar.size;
console.log(`The oscar awards have ${oscarSize}`);

//5. What is the second key in this movies Map?
const oscarKeys = oscar.keys();
oscarKeys.next();
const secondOscarKeys = oscarKeys.next().value;
console.log(`The second value is ${secondOscarKeys}`);

//6. What is the third value in this movies Map?
const oscarEntries = oscar.entries();
oscarEntries.next();
oscarEntries.next();
const thirdOscar = oscarEntries.next().value;
console.log(`The third value is ${thirdOscar}`);

//7. What is the first set of entries in this movies Map?
const oscarEntries1 = oscar.entries();
const firstEntry = oscarEntries1.next().value;
console.log(`The first entry is ${firstEntry}`);

//8. Loop over the map, and if the movie won Best Picture before 2017,
//log it in the console. Include the year and the movie.
oscar.forEach((value, key) => {
    key <= 2017 ? console.log(`The movies are ${value} on ${key}`) : null;
});

//9. Delete the Best Picture from 2013 from your movies Map.
oscar.delete(2013);
console.log("Delete the best picture", oscar);

//10. Clear your movies Map.
oscar.clear();
console.log(`Current oscar entries are ${oscar.size}`);