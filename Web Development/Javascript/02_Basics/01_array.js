// array
// arrays in js are resizable and can be of mixed data type
// array in js in array-copy-operation creates a **shallow copies**

const myArr = [0, 1, 2, 3,  4, 5]
const myHeros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr[0]);

// array methods

// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop()    // last value in array will be removed
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));  

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// console.log(typeof myArr);     // objetcs
// console.log(typeof newArr);    // string 


// slices, splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)     // original array in not manipulated

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)    // original array is manipulated 
console.log("C", myArr);
console.log(myn2);



