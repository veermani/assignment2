// //#Source https://bit.ly/2neWfJ2
// const matches = (obj, source) =>
//   Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
// console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
// console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
// console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false



// two distinct object never be equal until and unless the refence of 
// of two will not pointing same

var a={
name:"veermani"  
}
var b={
  name:"veermani" 

}
console.log(a==b);
console.log(a===b);

var a=b;

console.log(a==b);
console.log(a===b);
