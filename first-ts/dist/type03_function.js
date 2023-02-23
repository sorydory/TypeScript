"use strict";
let myFunction;
myFunction = function (x, y) {
    return x + y;
};
let num = myFunction(10, 20);
console.log(num);
function myFunction2(x, y) {
    return x + y;
}
function myFunction3() {
    console.log("hi");
}
let myFunction4;
myFunction4 = function () {
    console.log("hi");
};
let myFunction5 = function (num1, num2) {
    return num1 + num2;
};
function printUser(name, age) {
    return `Hello ${name} age ${age}`;
}
printUser("green");
function showName(name) {
    return `Hello ${name} || 'aaa'`;
}
function showName2(name = "aaa") {
    return `Hello ${name}`;
}
showName("green");
showName();
showName2("green");
showName2();
function addArr(...nums) {
    console.log(nums);
}
addArr(1, 2, 3);
addArr(1, 2, 3, 4, 5, 6, 7, 8);
let yellow = {
    name: "yellow"
};
function printUserName() {
    console.log(this.name);
}
const myFun = printUserName.bind(yellow);
myFun();
function printUserName2(age) {
    console.log(age, this.name);
}
const myFun2 = printUserName2.bind(yellow);
myFun2(30);

