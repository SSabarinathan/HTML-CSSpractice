// //var,const,let
// // const name = "Sabari";
// // const dob = "09/03/2001";

// // var msg = "my self " + name + " born on " + dob;

// // console.log(msg);
// // alert(msg);
// // //another eg
// // let num1 = 33;
// // let num2 = 8;

// // let result = num1 + num2;
// // console.log(result);

// // //datatype
// var firstname = "Preethi";
// let age = 22;
// let boolean = true;
// let some = undefined;
// let nothing = null;

// //object
// let person = {
// name: "david",
// age: "22",
// native: "thanjavur",
// company: "zoho",
// friends: { newfrd: "david", oldfrd: "diva" },
// };

// person.age = "25";
// //dot notation
// console.log(person.friends.newfrd);
// //bracket notation
// console.log(person["company"]);

// //arrays
// let favcompany = ["zoho", "kissflow", "guvi", "tcs"];
// favcompany[5] = "cts"; //add
// favcompany.push("hcl"); //using push

// console.log(favcompany.pop());
// console.log(favcompany.join("*"));
// console.log(favcompany.shift()); //returns the first element
// console.log(favcompany.unshift("newmicrosoft"));
// console.log(favcompany.sort()); //sort
// console.log(favcompany.reverse());
// console.log(favcompany[2]);
// console.log(favcompany.length); //length
// console.log(favcompany[favcompany.length - 1]); //get last array
// console.log(favcompany);
// //concatinate arrays
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// let mychildrens = myGirls.concat(myBoys);
// console.log(mychildrens);

// //functions
// function username(name) {
// let msg = "Hi iam " + name + " from tamilnadu";
// console.log(msg);
// }
// username("divakarprabhu");

// //another eg function
// function add(num1, num2) {
// console.log(num1 + num2);
// }
// add(12, 8);
// //another eg function
// function add(num1, num2) {
// return num1 + num2;
// }
// console.log(add(4, 3));
// //another eg function
// let x = operation(2, 4);
// console.log(x);
// function operation(a, b) {
// return a + b;
// }

// //increment,decrement--arthimetic operator
// number1 = 3;
// number2 = 4;
// console.log(++number1);

// //comparison operators

// x = 5;
// console.log(x < 5);
// console.log(x > 5);
// console.log(x <= 5);
// console.log(x >= 5);
// console.log(x === 5);
// console.log(x !== 5);

// console.log("2" < 7);
// console.log("david" < "aravindh");
// console.log(true == 1);

// //equality operator

// console.log(1 === 1);
// console.log(1 === "1");

// //ternary operator
// let man_age = 22;
// let type = man_age > 18 ? "adult" : "child";
// console.log(type);

// //logical operator with non boolen values
// let usercolor = undefined;
// let defaultcolor = "green";
// let currentcolor = usercolor || defaultcolor;
// console.log("color status " + currentcolor);
// //another eg
// let mark = true;
// let rank = !true;
// console.log(mark && rank);

// //betwise operator basic workflow

// const readpermission = 4;
// const writepermission = 2;
// const executepermission = 1;

// let mypermission = 0; //tem variable

// mypermission = mypermission | readpermission | writepermission;

// let message = mypermission & readpermission ? "yes" : "no"; //terinary operator

// console.log(message);

// //operator precedences

// let y = 2 + 5 * 10;
// console.log(y);

// let X = (2 + 5) * 10;
// console.log(X);

// //if-else conditional statement

// //single code is normal use ,but multiple code giving{ open and close}

// let weather = "hot";
// if (weather === "cold") {
// console.log("weather is cold");
// } else {
// console.log("weather is hot");
// }
// //another eg

// let car = false;
// let bike = false;

// if (car || bike) {
// console.log("i want car");
// } else {
// console.log("i want bike");
// }
// //conditional statement

// let time = new Date().getHours();
// if (time < 13) {
// currect_timing = "good morning";
// } else if (time < 17) {
// currect_timing = "good afternoon";
// } else {
// currect_timing = "good evening";
// }
// console.log(currect_timing);

// //if -->hours is between 12am(0)to 1pm(13)-->Good morning
// // Else if -->hours is between 1pm(13)to 5pm(17)-->Good afternoon
// //Else -->hours is between 5pm(17)to 12am(0)-->Good evening
// let hrs = new Date();
// let hour = hrs.getHours();

// if (hour >= 0 && hour <= 13) {
// console.log("Good morning");
// } else if (hour >= 13 && hour <= 17) {
// console.log("Good afternoon");
// } else {
// console.log("Good evening");
// }

// //eg
// let zoho = true;
// let hcl = false;
// if (zoho || hcl) {
// console.log("working in zoho");
// } else {
// console.log("i did't get the job");
// }
// //switch syntax
// /*switch (condition) {
// case 1:
// console.log("1");
// case 2:
// console.log("2");
// default:
// console.log("default behavior");
// }*/

// //switch case condition

// let grade = "S";

// switch (grade) {
// case "S":
// console.log("super grade");
// break;
// case "A":
// case "B": //using multiple cases
// console.log("Excellent grade");
// break;

// case "E":
// console.log("Just pass!");
// break;
// case "U":
// console.log("Fail");
// break;
// default:
// console.log("unknown grade");
// }

// //another eg
// let marks = 56;

// switch (true) {
// case marks > 90:
// console.log("super grade");
// break;

// case marks > 50:
// console.log("pass");
// break;

// case marks < 50:
// console.log("file!");
// break;

// default:
// console.log("unknown grade");
// }
// //importantswitchcase
// switch (new Date().getDay()) {
// case 0:
// console.log("sunday");
// break;
// case 1:
// console.log("monday");
// break;
// case 2:
// console.log("tuesday");
// break;
// case 3:
// console.log("wednesday");
// break;
// case 4:
// console.log("thusday");
// break;
// case 5:
// console.log("friday");
// break;
// case 6:
// console.log("saturday");
// break;
// }

// //for loop

// for (var i = 1; i <= 5; i++) {
// console.log("some" + i);
// }
// //find odd or even using loop

// for (var i = 0; i <= 5; i++) {
// if (i % 2 !== 0) {
// console.log("odd number", i);
// }
// }

// //reverse the number
// for (i = 5; i >= 0; i--) {
// console.log("reverse" + i);
// }
// //reverse and finding add number
// for (i = 5; i >= 0; i--) {
// if (i % 2 !== 0) {
// console.log("reverseodd" + i);
// }
// }

// //while loop
// let a = 10;
// while (a >= 1) {
// if (a % 2 !== 0) {
// console.log(a);
// }
// a--;
// }
// //do-while
// let b = 0;
// do {
// console.log(b);
// b++;
// } while (b <= 5);

// //for in loop
// let Bike = { david: "ninja", aravindh: "ktm", bala: "dukati" };

// for (let key in Bike) {
// console.log(key + ": ", Bike[key]);
// }

// //another eg
// let color = ["red", "green", "blue"];
// for (let key in color) {
// console.log(color[key]);
// }
// //for of
// let letters = ["a", "b", "c", "d"];
// for (let charters of letters) {
// console.log(charters);
// }
// //infine loop
// /*for (;;) {
// console.log("this is infine loop");
// }*/

// //oops--object is a instent of a class,class contains variables and methods
// let print = function () {
// firstname = "david";
// function printname() {
// return "myself" + firstname;
// }
// console.log(printname());
// };
// const test = new print();

// //oops concept it has two types function calling

// let nick_name = "david";
// let his_age = 22;
// let interested = ["learning", "programing", "peaceful"];
// let roll = {
// david: "frontend",
// diva: "python developer",
// aravindh: "fullstack developer",
// };

// //first type
// function access() {
// let msg = "myself " + nick_name + " iam interested in " + interested;
// console.log(msg);
// }
// access();

// //second type is advanced method using (``)this symbol
// function greet() {
// let tell = `myself ${nick_name} iam interested in ${interested} `;
// console.log(tell);
// }
// greet();

// //another eg (oops)concept

// let man = {
// name: "david",
// age: "22",
// native: "thanjavur",
// company: "zoho",
// friends: { newfrd: "david", oldfrd: "diva" },
// greeting: function () {
// //inside calling function
// let message = `myname is ${this.name},iam from ${this.native}, myoffice name is ${this.company}`;
// console.log(message);
// },
// };
// man.greeting();

// //factory function-->it means multiple timeing printing a person etc..

// function createperson(name) {
// return {
// name: name,
// greeting: function () {
// //inside calling function
// let message = `myname is ${this.name}`;
// console.log(message);
// },
// };
// }

// let divakar = createperson("divakar");
// let aravindh = createperson("aravindh");
// let arun = createperson("arun");
// divakar.greeting();
// aravindh.greeting();
// arun.greeting();

// //constructer function --first word capital

// /*function People(name) {
// this.name = name;
// this.invite = function () {
// console.log(`myself ${this.name}`);
// };
// }
// let People = new People("aravindh");
// People.invite();*/

// //dynamic object

// const company = {
// david: "zoho",
// };
// company.aravindh = "microsoft";
// company.shake = "hcl";
// delete company.shake; //we can also delete
// console.log(company);

// //constrecter property in object

// let Name = new String("david");
// let Age = new Number(3);
// let isAlive = new Boolean(true);
// console.log(Name, Age, isAlive);

// //another method
// function car1(carname, model, price) {
// this.carname = carname;
// this.model = model;
// this.price = price;
// this.printcarname = function () {
// alert(
// "carname:" +
// this.carname +
// " " +
// "model:" +
// this.model +
// " " +
// "price:" +
// this.price
// );
// };
// }
// var carproperty = new car1("bmw", 321, "7lack");
// console.log(carproperty);
// carproperty.printcarname();

// //primitive type

// let cart = 5;
// function updatecart(cart) {
// cart++; //local scope
// }

// updatecart(cart);
// console.log("carts available:" + cart);

// //references type

// let cartobj = {
// value: 5,
// };
// function updatecart(cart) {
// cart.value++;
// }
// updatecart(cartobj);
// console.log("carts available", cartobj);

// //enumerating properties

// //get keys only
// const user = {
// newname: "divakar",
// work: "developer",
// getkeys() {
// console.log(`my name is ${this.newname}`);
// },
// };
// for (let key in user) {
// console.log(key + ":", user[key]);
// }

// //
// //cloning a js object
// let newman = {
// name: "divakar",
// work() {
// `myself ${this.name}`;
// },
// };
// let ans = {
// ...newman, //using spread(...) function
// };
// console.log(ans);

// //date object

// const now = new Date();
// now.setFullYear(2023); //set the year,date,day,etc
// console.log(now);
// console.log(now.getDay());
// console.log(now.getFullYear());

// //custamized date
// let anothernow = new Date(1999, 12, 6);
// console.log(anothernow.getMonth());

// //adding element in array
// let newarray = ["apple", "orange", "grapes"];
// newarray[3] = "avacodo";
// //push
// newarray.push("banana"); //adding last
// //unshift--adding first
// newarray.unshift("staberry");
// console.log(newarray);
// //splice

// newarray.splice(2, 0, "jackfruits", "freshfruites");

// //finding element js in array

// const colors = ["red", "green", "blue", "orange", "red"];
// console.log(colors.indexOf("red"));
// console.log(colors.lastIndexOf("red"));
// console.log(colors.indexOf("blue") !== -1); //yes or no
// console.log(colors.includes("green"));//yes or no

// //finding element in js referances array

// const order=[]


// let person = {
//     name: "david",
//     age: "22",
//     native: "thanjavur",
//     company: "zoho",
//     friends: { newfrd: "david", oldfrd: "diva" },
//     };


// person.age = "25";
// //dot notation
// console.log(person.friends.newfrd);
// //bracket notation
// console.log(person["company"]);

    