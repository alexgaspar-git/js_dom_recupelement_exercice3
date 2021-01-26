//1

let lastDiv = document.getElementsByTagName('div')[2];
let lastDivFirstEl = lastDiv.firstElementChild;
console.log(lastDivFirstEl);

//2

let lastDivLastEl = lastDiv.lastElementChild;
console.log(lastDivLastEl);

//3

let fpLastDiv = lastDiv.getElementsByTagName('p')[0];
let i = fpLastDiv.lastElementChild
console.log(i);

//4

let lpLastDiv = lastDiv.getElementsByTagName('p')[1];
let b = lpLastDiv.lastElementChild
console.log(b);

//5 

console.log(i.parentElement);

//6

console.log(b.parentElement);

//7

console.log(lastDiv.firstElementChild.nextElementSibling);