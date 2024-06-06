const myDate= new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

const myCreatedDate= new Date(2024,4,5)
console.log(myCreatedDate.toLocaleString());

let myTime= Date.now()
console.log(myTime);

console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now())/1000);

