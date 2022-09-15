/* 
--var vs. let vs. const--
var = allows you to change values
    - For the most part, won't really use
let = Also used for changing variables
    - Get used to using this one
const = WILL NOT CHANGE

*/

let x = 123;
let y = []; 

//Functions
/* 
    Both functions return the same thing except coolArrow is a variable
    and the other is a function
*/

function coolFunction() {
    return false; 
}

const coolArrowFunction = () => false; 

/* 
--Objects--

A series of key-value pairs
    hi = Key
    hello = Value

    coolNum = Key
    123 = Value

coolObject is a variable that stores these key-value pairs in it

*/ 

const coolObject = {
    hi: "hello",
    coolNum: 123,
    coolArray: [], 
}

/* 
--Arrays--

The easiest way to pass data and stuff
    - Kinda like json

This array has two objects in it; Inside the object are key value pairs 
*/

const coolJSON = [
    {
        hi: "hi",
    },
    {
        hi: "hello",
    },
    coolObject
]; 

//By running this function -- hi()--, you can pull specific data from an object
function hi() {
    return coolObject.coolNum; 
}