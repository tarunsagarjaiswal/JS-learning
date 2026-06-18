// In JavaScript, Date is the built‑in object for working with dates and times.

// 📘 Common Methods
// Method	Example	Output
// getFullYear()        d.getFullYear()	         2026
// getMonth()         	d.getMonth()	         5 (June, since months are 0‑indexed)
// getDate()         	d.getDate()	             9
// getDay()         	d.getDay()	             2 (Tuesday, 0 = Sunday)
// getHours()         	now.getHours()	         e.g. 22
// getMinutes()         now.getMinutes()	     e.g. 46
// getSeconds()         now.getSeconds()	     e.g. 30
// getTime()         	d.getTime()	             milliseconds since Jan 1, 1970


//new just initializes an object using its constructor.

let myDate = new Date();      //This is called object initialization using a constructor function.  
let arr = new Array();         // Array object


// console.log(myDate);    //output =>  2026-06-09T17:21:49.732Z
// console.log(myDate.toString());  //output =>  Tue Jun 09 2026 17:24:53 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());     //output =>  Tue Jun 09 2026
// console.log(myDate.toISOString());    //output =>   2026-06-09T17:27:48.753Z
// console.log(myDate.toJSON());         //output =>   2026-06-09T17:27:48.753Z
// console.log(myDate.toLocaleDateString());   //output =>    6/9/2026
// console.log(myDate.toLocaleString());          //output =>   6/9/2026, 5:32:11 PM

// console.log(typeof myDate);        //output  =>  object


//Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date
// let myCreatedDate = new Date(2051,13,33)    //format starts printing month as 1 when we write 0 and we also add more in it like time as the format is ac=bove commented.
// console.log(myCreatedDate.toLocaleString());    //output =>  3/4/2052, 12:00:00 AM,  it increment the year as month is 13 and also increment the month as date is 33.


// let myCreatedDate = new Date(2026, 4, 3, 3, 5,34)
// console.log(myCreatedDate.toLocaleString());    //output =>  5/3/2026, 3:05:34 AM

// let myCreatedDate = new Date("2025-04-5")
// console.log(myCreatedDate.toLocaleString());         //output =>   4/5/2025, 12:00:00 AM



//In JavaScript, a timestamp usually refers to the number of milliseconds since January 1, 1970, 00:00:00 UTC (the Unix epoch).  helpful when u design quizs, poles,room booking queue creation or any competition type stuff.

// let myCreatedDate = new Date("04-24-2026")  //mm dd yyyy
// let myTimeStamp = Date.now();
// console.log(myTimeStamp);       //output =>     1781027941665  in milli sec from January 1, 1970 till now.
// console.log(myCreatedDate.getTime());       //output =>     1776988800000ms

// console.log(Math.floor(Date.now()/1000));       //gives output as date in second



let newDate = new Date();
console.log(newDate.getDate() + 1);     //out => 10
console.log(newDate.getDay());      //out =>  2 --> means tuesday

newDate.toLocaleString('default', {
    weekday: "long",
    dateStyle: "full"
})










 