const myArr= [1,2,3,4,5]

// console.log(myArr)

myArr.push(6)
// console.log(myArr);

myArr.push(3)
// console.log(myArr);

myArr.unshift(5)
console.log(myArr);
// console.log(myArr.shift());
// console.log(myArr);

console.log(myArr.indexOf(8));  //it will return a -1 value as 8 doesn't exist in the array//

const newArray= myArr.join()
// console.log(newArray);
// console.log(typeof(newArray))

console.log("A", myArr)

const myna1 = myArr.slice(1,3)
console.log(myna1);

console.log("B", myArr)
const myna2 = myArr.splice(1,3)

console.log(myna2)
console.log("C",myArr)



