// Basic Datatypes in typescript
let id: number = 3;
let naming: string = "typescript testing";
let logic: boolean = true;
let anyValue: any = "jane"
let arrays: number[] = [1,2,3,4];

// tuples
let person: [number, string, boolean];
person = [1, "John", true];
// unions
let pid: string | number;
pid = "Glory";
// enums
enum Direction {Up, Down, Left, Right}

// objects
const user: {id: number, name:string} = {id:1, name:"Mary"};
// type
type User = {id: number, name: string}
const users: User = {id: 11, name: "Joshua"};
//function
function addNum(a:number, b:number): number {
    return a+b;
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
console.log(addNum(2,3))




