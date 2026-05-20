// Input:
// [
//   { name: 'John', age: 20 },
//   { name: 'Sam', age: 20 },
//   { name: 'Ram', age: 25 }
// ]
// Output:
// {
// 20: [
//     { name: 'John', age: 20 },
//     { name: 'Sam', age: 20 }
//   ],
// 25: [
//     { name: 'Ram', age: 25 }
//   ]
// }
const an = {
    name: "abi"
}
const values = [
    { name: 'John', age: 20 },
    { name: 'Sam', age: 20 },
    { name: 'Ram', age: 25 }
]

console.log(Object.hasOwn(an, "name"))
let c = {}
let arr = []
values.forEach(element => {

    if (Object.hasOwn(c, element.age)) {
        arr.push(element)
    } else {
        arr = [element]

    } c[element.age] = arr


});
console.log(c);



