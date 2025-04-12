// year, month, day, hours, minutes, seconds, milliseconds

// const currentDate = new Date();     
// console.log(currentDate)

/*
const currentDate = new Date(2024,2,28,12,45,0,0);     
console.log(currentDate)



const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();


console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Day: ${day}`);


console.log(date.toDateString());
console.log(date.toLocaleString());

date.setDate(date.getDate() + 1);
console.log(date)
*/


// ---------- SET INTERVAL ----------------
// used to repeat a function/block of code at a specified interval
// once it hits that interval, it'll start executing

// setInterval(() => console.log(`This function will be executed every 2 seconds.`),2000)   // Arrow function

// ------------- SET TIMEOUT ------------
// after this set time, the code will be executed
// setTimeout(function(){
//     console.log(`This function will be executed after 3 seconds.`);
// },3000)

// ----------- STOP INTERVAL -------------
// Stopping the interval after a particular amount of time has passed
const intervalID = setInterval(function(){
    console.log(`Print every second.`)
},1000)

// Stop interval after 10 secs
setTimeout(function(){
    clearInterval(intervalID);
    console.log(`Interval stopped`)
}, 10000)