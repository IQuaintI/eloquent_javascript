//Chapter 1: Values, Types, and Operators//

//The \n is how you make text begin on a new line
//Text with a \ indicates that the following character has a special meaning  //Otherwise called 'escaping' the character
console.log("This is the first line\nThis is the second");

//The \t means a tab character //Stays on the same line but spaces it out
console.log("This is the first line\tThis is the second");

//Two backslashes alongside each other collapse and leave only the string value
console.log("This is the first string \\n This would be the second");

//typeof discerns between number and strings
console.log(typeof 4);
// -> number
console.log(typeof "hat");
// -> string

//Uppercase letters are always 'LESS' than lowercase ones//

console.log(1 + 1 == 2 && 10 * 10 > 50);
// -> 'true'

//The ternary operator is the only such operator in the language
console.log(true ? 1 : 2); // A true statement returns the left variable
// -> 1
console.log(false ? 1 : 2); //A false statement returns the right variable
// -> 2

//'Type coercion' is when JS converts the 'wrong' type to the type that it needs to work //This can produce unexpected results
console.log(8 * null); //The 'null' is converted to 0 which returns 0
// -> 0
console.log("5" - 1); //The '5' is converted to a number and then the math is performed
// -> 4
console.log("5" + 1); //The '5 is concatated prior to the math therefore converting the 1 to a '1' (number to string)
// -> 51
console.group(null == undefined); //If both sides of the comparison are 'null' or 'undefined' it returns true
// -> true
console.log(null == 0); //If only one side of the comparison is 'null' or 'undefined' it returns then false
// -> false

//The '===' and '!==' are STRICT comparisons and as such perform NO conversions //USE THESE

//The '||' operator returns the left value if it can be converted into true othrwise it returns the right value
//0, NaN, and an empty string ("") ALWAYS return FALSE and all other values are considered TRUE
//This is called 'short-circuit evaluation;
console.log(null || "user");
// -> 'user'
console.log("Tom" || "user");
// => 'Tom'
//The value on the right is only considered if the first option is FALSE regardless of nature
console.log(true || "one");
// -> true

//The '&&' operator returns the left value if FALSE otherwise it returns the right
console.log(null && "one");
// -> null
console.log("one" && "two");
// -> 'two
