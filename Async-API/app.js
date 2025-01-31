// async function userInfo() {
//     let response = await fetch('https://randomuser.me/api')
//     let data = response.json()
//     let userData = document.getElementById('data')
//     userData.innerText()
//     console.log(data)
// }

// let isRobot = {name: 'John', age:25}
// function sample() {
//     console.log('It is function')
// }
// let isRobot = sample
// console.log(isRobot)
// isRobot = 'James'
// console.log(isRobot)

function test(data) {
    let a = 10;
    console.log(data)
    return a
}

function sample(counter,test) {
    let value = test
    console.log('Value is ',value)
    // counter = counter + 1
    return value('Hello')
}
let counter = 0
counter = counter + 1
console.log(counter)
counter = sample(0,test)
console.log(counter)
// counter = counter + 1
// console.log(counter)
// console.log(sample())

// const {
//     aeJob,
//     planName,
//     pssInformation,
//     status,
//     dateCreated,
//     invoice,
//     comments,
//     fileUploads,
//     jobId,
//     customerId,
//     zipcode,
//     cityState,
//     jobSquareFeet,
//     dateOfSLA,
//     addOnServices,
// } = action.payload

const payload = {
    aeJob : action.payload.aeJob,
    planName : action.payload.planName,
    pssInformation : action.payload.pssInformation
}

console.log(payload.aeJob)