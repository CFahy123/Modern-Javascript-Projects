const map1 = new Map();

//Set Keys
const key1 = 'a string',
    key2 = {},
    key3 = function () { };


map1.set(key1, 'Value of Key 1');
map1.set(key2, 'Value of Key 2');
map1.set(key3, 'Value of Key 3');

// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Size of map
console.log(map1.size);

// // looping key values
// for ([key, value] of map1) {
//     console.log(`${key} = ${value}`)
// }

// looping keys
for (let key of map1.keys()) {
    console.log(`${key}`)
}


