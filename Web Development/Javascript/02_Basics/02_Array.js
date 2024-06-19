const marvelHeros = ["Thor", "Ironman", "Spiderman" ]
const dcHeros = ["Superman", "Flash", "Batman"]

// console.log("A", marvelHeros);
// console.log("B", dcHeros);

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);  // nested array
// console.log(marvelHeros[3][2]);

// const allHeros = marvelHeros.concat(dcHeros)   // concat return a new array
// console.log(allHeros);

const all_new_Heros = [...marvelHeros, ...dcHeros]    // spread is used here   
// console.log(all_new_Heros);

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_arr.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("Raso-Kumar04"));
console.log(Array.from("Raso-Kumar04"));      // from convert/create non-array into array

console.log(Array.from({name: "Raso-Kumar04"}));    // **Interesting** : gave empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //return a new array from a set of elements