// Write a program for converting two arrays into a single array using
// map and iterators (without ‘for’) of Javascript ES6

var a=[1,2,3,4,5];
var b=[6,7,8,9];
var c=b[Symbol.iterator]();
b.map(v=>{


a=[...a,c.next().value];


})
console.log(a);


