let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];

// //Fetch first item
// console.log(shoppingList[0])
// console.log(shoppingList[3][2])
// console.log(shoppingList[5])

// //Add carrots to shopping list
// shoppingList.push('carrots')
// console.log(shoppingList)

// //Remove last item from the list
// console.log(shoppingList.length)
// console.log(...shoppingList)
// shoppingList.pop()
// console.log(shoppingList)

//Remove tomatoes and onions and update with cucumbers and Bell peppers
console.log(...shoppingList);
shoppingList[4].splice(1,2,'cucumbers','Bell Peppers')
console.log(shoppingList)

// ////////////////////////////////
// let student = {
//     name: "Amit",
//     age: 20,
//     grade: "A",
//     address: {
//         street: "123 Main St",
//         city: "Anytown",
//         country: "India"
//     }
// };

// //fetch student's name
// console.log(student.name)

// //add new property phone with value
// student.phone = '123-456-7890'
// console.log(student)

// //removing grade
// delete student.grade
// console.log(student)

// //modify student age to 21
// student.age = 21
// console.log(student)

// //conditionals assignment

// let number= -0100000000;
// if(number > 0){
//     console.log('Positive')
// }
// else if(number < 0){
//     console.log('Negative')
// }
// else {
//     console.log('zero')
// }

// //else if
// let score = 60;
// if(score >= 90 && score <=100){
//     console.log('A')
// }
// else if(score >=80 && score <= 89) {
//     console.log('B')
// }
// else if(score >=70 && score <= 79) {
//     console.log('C')
// }
// else if(score >=60 && score <= 69) {
//     console.log('D')
// }
// else if(score < 60) {
//     console.log('F')
// }

// //Truthy , Falsy
// let input = 'Hello'
// if(input){
//     console.log('Truthy')
// }
// else{
//     console.log('Falsy')
// }

//Adding elements to array
// let items = [1, ['milk', 'banana', 'brinjal'], 'India']
// console.log(items)

// items.push('country')
// console.log(items)

// items.unshift('0')
// console.log(items)

// items.splice(2,0,'egg')
// console.log(items)

//Removing elements from array
// items.pop()
// console.log(items)

// items.shift()
// console.log(items)

// items.splice(1,1)
// console.log(items)

// let array = [1,2,3,2,2,3]

// console.log(array.indexOf(2))
// console.log(array.lastIndexOf(2))
// console.log(array.includes(2))
// console.log(array.find(array => array >= 3))
// console.log(array.findIndex(array => array >= 3))




