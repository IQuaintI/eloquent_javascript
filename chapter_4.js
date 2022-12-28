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

class house {
  constructor(color, size, rooms) {
    color = color;
    this.size = size;
    this.rooms = rooms;
  }
}

let myHouse = new house("red", "small", 6);

console.log(myHouse.color); //Returns undefined//
console.log(myHouse.rooms); //Returns 6//
