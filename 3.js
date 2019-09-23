
// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects
// into a bunch of variables, as sometimes that’s more convenient. 
// Destructuring also works great with complex functions that
// have a lot of parameters, default values, and so on.

// we have an array with the name and surname
let arr = ["veermani", "Kumar"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

console.log(firstName); // veermani
console.log(surname);  // Kumar
