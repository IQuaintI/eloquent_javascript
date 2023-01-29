//Chapter 4: Data Structures: Objects and Arrays//

//Data Sets//

//JavaScript uses arrays to store ordered collections of data// // //Arrays are written as a list of values, separated by commas, enclosed in square brackets//
let array = [1, 2, 3, 4, 5];

//The values in an array are called elements// // //The elements of an array can be accessed using their position, which is called an index//
console.log(array[2]); //Returns 3//
console.log(array.length); //Returns 5// // //The length property tells you how many elements are in the array//

//The last element in the array is always array.length - 1// // //Arrrays are zero-based, meaning the first element is at position 0 therefore negative numbers work in reverse//
console.log(array[array.length - 1]); //Returns 5// //
console.log(array[3 - 1]); //Returns 3// // //Starts at 0, not 1 which means the third variable is 4. Then 1 is subtracted leaving three//

// // //

//Properties//

//Properties are bits of information that are associated with a value// // //The type property tells you what type of value it is//
console.log(typeof 4.5); //Returns number// // //typeof is a unary operator that produces a string value naming the type of the value you give it//
console.log(typeof "x"); //Returns string//
//
console.log(string.length); //Returns 1// // //The length property is a property of the string value// // //The length property is a property of the string value//
//
console.log(Math.max(2, 4)); //Returns 4// // //Math.max is a function that takes any number of arguments and returns the largest one//
console.log(Math.min(2, 4) + 100); //Returns 102// // //Math.min is a function that takes any number of arguments and returns the smallest one//

//Null and Undefined do not have properties//
console.log(null.length); //Returns error//
console.log(undefined.length); //Returns error//

//The two main ways to access properties are with a dot and with square brackets//
//Bracket notation can be used on values with special characters in their names//
//Everything in a square bracket is seen a single grouping// // //Multiple brackets just goes to the most 'inner' bracket and attemps to locate that//

let color = {
  red: "red",
  blue: "blue",
  green: "green",
};

let sizes = {
  small: "small",
  medium: "medium",
  large: "large",
};

//Bracket notation vs dot notation//
console.log(color.red); //Returns red// // // Dot notation is easier to read// // //This calls the property 'red' of the object 'color'//
console.log(color["red"]); //Returns red// // //This calls the property 'red' of the object 'color'//
//
console.log(sizes.blue); //Returns undefined// // //This calls the property 'blue' of the object 'sizes'// // //This returns undefined as there is no property 'blue' in the object 'sizes'//
console.log(sizes["large"]); //Returns large// // //This calls the property 'large' of the object 'sizes'//
console.log(color[red[blue]]); //Returns undefined// // //This calls the property 'red' of the object 'color'// // //This calls the property 'blue' of the object 'red'// // //This returns undefined as there is no property 'blue' in the object 'red'//

// // //

//Methods//

//Methods are properties that contain functions//
let string = "hello";
console.log(string.toUpperCase()); //Returns HELLO// // //The toUpperCase method is called on the string value//
//
let sequence = [1, 2, 3];
seqeuence.pop(); //Returns 3// // //The pop method removes the last value in an array and returns it//
sequence.push(4); //Returns 4// // //The push method adds values to the end of an array and returns it//

// // //

//Stack//

//A stack is a data structure that allows you to add and remove elements//

// // //

//Objects//

//Objects are values that hold other values//
let stats = {
  name: "John",
  age: 30,
  height: 6.5,
  favoriteColor: "blue",
  events: ["running", "swimming", "cycling"],
};

console.log(stats.name); //Returns John//
console.log(starts.age); //Returns 30//
console.log(stats.height); //Returns 6.5//
console.log(stats.favoriteColor); //Returns blue//
console.log(stats.events); //Returns ["running", "swimming", "cycling"]//

//Reading a property that does not exist will return u "undefined"//
//Property bindings are like tentacles where one value can be reached from many different places//

//The "delete" operator can be used to remove a property from an object//
//The "in" operator can be used to check if a property exists in an object//

let anObject = { left: 1, right: 2 };
delete anObject.left; //Returns true//
console.log(anObject.left); //Returns undefined//
console.log("left" in anObject); //Returns false//
console.log("right" in anObject); //Returns true//

//The "in" operator can be used to check if a property exists in an object//
//The object still has the property in the first example, then it gets deleted in the second, which returns undefined in the third//

//The "Object.keys" function returns an array of the properties in an object//
console.log(stats.keys); //Returns ["name", "age", "height", "favoriteColor", "events"]//
console.log(anObject.keys); //Returns ["right"]// // // "left" got deleted

//Object.assign can be used to copy all properties from one object to another//
let objectA = {
  a: 1,
  b: 8,
  c: 9,
};

let objectB = {
  b: 3,
  c: 4,
};

console.log(objectA); //Returns {a: 1, b: 8, c: 9}//

Object.assign(objectA, objectB); // Copies all properties from objectB to objectA//

console.log(objectA); //Returns {a: 1, b: 3, c: 4}//

//Arrays are objects that are specialized to hold sequences of values//
console.log(typeof []); //Returns object//

// // //

//Mutability//

//Values such as numbers, strings, and booleans are immutable/ // //They can be mixed and matched but not altered//
//Objects and arrays are mutable//

let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

//object1 and object2 share the same object but object3 does not share the same object but it does share the same variable//
console.log(object1 == object2); //Returns true//
console.log(object1 == object3); //Returns false//

//Bindings can be changeable or constant but this is different from changing their values//
//The "const" keyword can be used to create a constant binding//
//The 'let' keyword can be used to create a changeable binding//

const score = {
  visitor: 0,
  home: 0,
};

//The individual properties of an object can be changed//
//The object itself can be changed//
score.visitor = 1; //This is allowed//
score = { visitor: 1, home: 1 }; //This is not allowed//

//
//This is a shorthand for creating an object//
//Declare an array and then use the "push" method to add values to the array//

let journal = [];

function addEntry(events, squirrel) {
  journal.push({ events, squirrel });
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(
  [
    "work",
    "ice cream",
    "cauliflower",
    "lasagna",
    "touched tree",
    "brushed teeth",
  ],
  false
);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

console.log(journal); //Returns the journal array//

// // //

//Correlation//

//Correlation is a measure of how closely two things are related//
//Correlation is a number between -1 and 1// // // -1 means that the values are perfectly negatively correlated// // // 1 means that the values are perfectly positively correlated// // // 0 means that the values are not correlated at all//
//-1 means that if one is true, the other is false// // // 1 means that if one is true, the other is true// // // 0 means that if one is true, the other is neither true or false//

//"phi coefficient" is a measure of correlation between two boolean variable//

