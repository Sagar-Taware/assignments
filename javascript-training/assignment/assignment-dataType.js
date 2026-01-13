/***********primitive data types****************/
//1.Number
let num=103;
console.log(typeof num);

let floatNum=76.77;
console.log(typeof floatNum);

//2. string
let statement="test";
console.log(typeof statement);
let statement1='test';
console.log(typeof statement1);

//3.boolean
let condition1=true;
let condition2=false;
console.log(typeof condition1);
console.log(typeof condition2);

//4.undefined
let value;
console.log(typeof value);

//5.null data type
let nullvar=null;
console.log(typeof nullvar);

/************** Non Primitive Data Type ***********************/
//1.Object Key and value pair
let empdetails={
firstName:"Sagar",
lastName:"Taware",
mobileNumber:9762939358,
address:{
roomNumber:26,
block:'C',
societyName:"shanthi garden",
cityName:"Hyderabad",
pinCode:500076
}
}

console.log(typeof empdetails.address);
console.log(empdetails.address);
console.log(typeof empdetails.address.cityName);
console.log(empdetails.address.cityName);


// Array ==> Collection of dataset

let fruits=["mango",40,"banana",'apple',"grapes",10,20,true];
console.log(typeof fruits[0]);
console.log(fruits[1]);
console.log(fruits[7]);


//Map

let empMap=new Map();
empMap.set("firstName","sagar");
empMap.set("condition",true);
empMap.set('mobileNumber',9762939358);
empMap.set("lastName",'taware');

console.log(empMap.get("firstName"));
console.log(empMap.get("lastName"));
console.log(empMap.get('mobileNumber'));

//set==> collection of unique value of data set

let stdDetails=new Set();
stdDetails.add(10);
stdDetails.add(20)
stdDetails.add(30)
stdDetails.add(40)
stdDetails.add(20)
stdDetails.add(20)
stdDetails.delete(30)

console.log(stdDetails.size)

console.log(stdDetails);


//Symbol data type==> symbol represent unique identifire
let cityofOrigin = Symbol();
let prodinfo={
prdName:"mobile",
price:799,
[cityofOrigin]:"china"
}

console.log(prodinfo);

//function==> wherever something dynamically changing we are written it 
//Generally it is kind of block of code written to perform cirtain actions

function launchTheApplication(browserName, url){
console.log("Launch the Browser:" + browserName);
console.log("Nevigate to url:" + url);
console.log("Application Launch Successfully");
}

launchTheApplication("chrome", "www.google.com");


//date ===>It will represent data and time in js

let currentTime=new Date();
console.log(currentTime.getFullYear);
console.log(currentTime.getDate);
console.log(currentTime.getTime);
console.log(currentTime.setHours);
console.log(currentTime.getMinutes);


