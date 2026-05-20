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

const values = [
    { name: 'John', age: 20 },
    { name: 'Sam', age: 20 },
    { name: 'Ram', age: 25 }
]

const b = values.filter(item => {
    if (item.age === 20) {
        let a = item.age
        return item
    }
})

const c = values.filter(item => {
    if (item.age === 25) {
        let a = item.age
        return item
    }
})


console.log(b)
console.log(c)



console.log("{20:", b, "25:", c, "}")

