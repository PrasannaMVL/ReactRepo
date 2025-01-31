let array = [
    {
        name:'John',
        age: 25
    },
    {
        name: 'Smith',
        age:40
    },
    {
        name: 'Den',
        age: 52
    },
    {
        name:'Jenny',
        age:34
    }
]

console.log(array)
array.unshift({name:'Anne',age:10})
console.log(array)

let arr=[1,2,3,4,5]
console.log(arr)
arr.push(6)
console.log(arr)
arr.unshift(0)
console.log(arr)
arr.unshift(-2,-1)
console.log(arr)

arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
let newArr = arr.slice(0,2)
console.log(newArr)

let a=[1,2,3]
let b=[4,5,6]
let c = a.concat(b)
console.log(c)