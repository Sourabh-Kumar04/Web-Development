const myObject = {
   js: 'javascript',
   cpp: 'C++',
   rb: "ruby",
   swift: "swift by apple" 
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
}
for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
}
for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()    // maps are not iterable forin loop
map.set('In', "INDIA")
map.set('USA', "United States of America")
map.set('Fr', "France")

for (const key in map) {
    console.log(map(key));
}

