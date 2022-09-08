"use strict";
// Basic Datatypes in typescript
let id = 3;
let naming = "typescript testing";
let logic = true;
let anyValue = "jane";
let arrays = [1, 2, 3, 4];
// tuples
let person;
person = [1, "John", true];
// unions
let pid;
pid = "Glory";
// enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// objects
const user = { id: 1, name: "Mary" };
const users = { id: 11, name: "Joshua" };
//function
function addNum(a, b) {
    return a + b;
}
// console.log(id)
// console.log(naming)
// console.log(logic)
// console.log(anyValue)
// console.log(arrays)
// console.log(person)
// console.log(pid)
// console.log(Direction)
// console.log(user)
console.log(addNum(2, 3));
