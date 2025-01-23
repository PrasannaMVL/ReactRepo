// const movies = [
//     {
//       title: "The Dark Knight",
//       genre: "Action",
//       year: 2008,
//       imdbRating: 9.0,
//       actors: ["Christian Bale", "Heath Ledger", "Michael Caine"]
//     },
//     {
//       title: "Inception",
//       genre: "Thriller",
//       year: 2010,
//       imdbRating: 8.8,
//       actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
//     },
//     {
//       title: "Shawshank Redemption",
//       genre: "Drama",
//       year: 1994,
//       imdbRating: 9.3,
//       actors: ["Tim Robbins", "Morgan Freeman"]
//     },
//     {
//       title: "Pulp Fiction",
//       genre: "Crime",
//       year: 1994,
//       imdbRating: 8.9,
//       actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
//     },
//     {
//       title: "The Godfather",
//       genre: "Drama",
//       year: 1972,
//       imdbRating: 9.2,
//       actors: ["Marlon Brando", "Al Pacino"]
//     },
//     {
//       title: "The Matrix",
//       genre: "Action",
//       year: 1999,
//       imdbRating: 8.7,
//       actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
//     },
//     {
//       title: "Forrest Gump",
//       genre: "Drama",
//       year: 1994,
//       imdbRating: 8.8,
//       actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
//     },
//     {
//       title: "The Silence of the Lambs",
//       genre: "Thriller",
//       year: 1991,
//       imdbRating: 8.6,
//       actors: ["Jodie Foster", "Anthony Hopkins"]
//     },
//     {
//       title: "The Shawshank Redemption",
//       genre: "Drama",
//       year: 1994,
//       imdbRating: 9.3,
//       actors: ["Tim Robbins", "Morgan Freeman"]
//     },
//     {
//       title: "The Departed",
//       genre: "Crime",
//       year: 2006,
//       imdbRating: 8.5,
//       actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
//     },
//     {
//       title: "The Prestige",
//       genre: "Mystery",
//       year: 2006,
//       imdbRating: 8.5,
//       actors: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"]
//     },
//     {
//       title: "The Hangover",
//       genre: "Comedy",
//       year: 2009,
//       imdbRating: 7.7,
//       actors: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"]
//     },
//     {
//       title: "Die Hard",
//       genre: "Action",
//       year: 1988,
//       imdbRating: 8.2,
//       actors: ["Bruce Willis", "Alan Rickman"]
//     },
//     {
//       title: "Fight Club",
//       genre: "Drama",
//       year: 1999,
//       imdbRating: 8.8,
//       actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
//     },
//     {
//       title: "Gladiator",
//       genre: "Action",
//       year: 2000,
//       imdbRating: 8.5,
//       actors: ["Russell Crowe", "Joaquin Phoenix"]
//     },
//     {
//       title: "The Social Network",
//       genre: "Biography",
//       year: 2010,
//       imdbRating: 7.7,
//       actors: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"]
//     },
//     {
//       title: "The Shining",
//       genre: "Horror",
//       year: 1980,
//       imdbRating: 8.4,
//       actors: ["Jack Nicholson", "Shelley Duvall"]
//     },
//     {
//       title: "The Departed",
//       genre: "Crime",
//       year: 2006,
//       imdbRating: 8.5,
//       actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
//     },
//     {
//       title: "The Revenant",
//       genre: "Adventure",
//       year: 2015,
//       imdbRating: 8.0,
//       actors: ["Leonardo DiCaprio", "Tom Hardy"]
//     },
//     {
//       title: "The Usual Suspects",
//       genre: "Crime",
//       year: 1995,
//       imdbRating: 8.5,
//       actors: ["Kevin Spacey", "Gabriel Byrne", "Benicio Del Toro"]
//     },
//     {
//       title: "Interstellar",
//       genre: "Sci-Fi",
//       year: 2014,
//       imdbRating: 8.6,
//       actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
//     }
//   ]

//   console.log(movies)

//   //Create a new array containing only the titles of the movies
//   let titles = movies.map(movie=>movie.title)
//   console.log(titles)

//   //Create a new array containing only the movie titles along with their IMDb ratings
//   let ratings = movies.map(({title,imdbRating}) => ({title, imdbRating}))
//   console.log(ratings)

//   //Filter the movies to create an array of thriller movies released after the year 2000
//   let thrillerMovies = movies.filter(movie => movie.genre === 'Thriller').filter(movie => movie.year > 2000)
//   console.log(thrillerMovies)

//   //Filter the movies to create an array of drama movies with IMDb ratings above 8.5
//   let dramaMovies = movies.filter(movie=>movie.genre == 'Drama').filter(movie => movie.imdbRating > 8.5)
//   console.log(dramaMovies)

//   //Filter the movies to create an array of action movies starring Leonardo DiCaprio

//   let actionMovies = movies.filter(movie => movie.genre == 'Action').filter(movie => movie.actors.includes('Leonardo DiCaprio'))
//   console.log(actionMovies)

//   //Chain operations to find all drama movies featuring Christian Bale
//   let christianBaleMovies = movies.filter(movie=>movie.genre === 'Mystery').filter(movie=>movie.actors.includes('Christian Bale'))
//   console.log(christianBaleMovies)

//   //Chain operations to find all drama movies featuring Tim Robbins
//   let timRobbinsMovies = movies.filter(movie=>movie.genre === 'Drama').filter(movie=>movie.actors.includes('Tim Robbins'))
//   console.log(timRobbinsMovies)

//   const numbers = [1,2,3,4,5,6,7,8,9,10]

//   function evenNumbers() {
//     let result = []
//     for(i=1; i<=numbers.length; i++)
//     {
//         if(i%2 === 0) {
//             result.push(i)
//         }
//     }
//     console.log(result)
//   }

//   evenNumbers()

// function filterNumbers(n) {
//     let result = []
//     for(i=1; i<=numbers.length; i++) {
//         if(i%n === 0){
//             result.push(i)
//         }
//     }
//     console.log(result)
// }

// filterNumbers(5)



// function filter(){
//     const array = [1,2,'apple',3,'banana',4,'guava','papaya']
//     let result = []
//     let fruits = []
//     for(let item of array){
//         if(typeof item === 'string'){
//             result.push(item)
//         }
//         else {
//             fruits.push(item)
//         }
//     }
//     console.log(result)
//     console.log(fruits)
//     return 
// }

// filter()

// function filterNumbers(n) {
//     let numbers = []
//     for(let item of n) {
//         if(typeof item === 'number') {
//             numbers.push(item)
//         }
//     }
//     console.log(numbers)
//     return
// }

// filterNumbers([9,'yellow','red'])


// let array = [9,'apple','banana',4,'zebra',3,6,7,'zomato',67546,123,'swiggy','Goa',4250,'tomatoes']
// let numbers = []
// let strings = []
// let evenNumbers = []
// let oddNumbers = []
// let stringWithZ = []
// let moreThanFourLength = []
// let moreThanFourDigits = []
// let patternWithEs = []

// function filterNumbers(input){
    
//     for(let item of input){
//         if(typeof item === 'number') {
//             numbers.push(item)
//         }
//         if(typeof item === 'string'){
//             strings.push(item)
//         }
//         if(item %2 === 0){
//             evenNumbers.push(item)
//         }
//         if(item %2 === 1){
//             oddNumbers.push(item)
//         }
//         if(item.toString().includes('z')) {
//             stringWithZ.push(item)
//         }
//         if(item.length > 4){
//             moreThanFourLength.push(item)
//         }
//         if(typeof item === 'number' && item.toString().length >= 4) {
//             moreThanFourDigits.push(item)
//         }
//         if(item.toString().includes('es')){
//             patternWithEs.push(item)
//         }
//     }
//     return {numbers, strings, evenNumbers, oddNumbers, stringWithZ, moreThanFourLength, moreThanFourDigits,patternWithEs}
// }

// function filterStrings(input){
//     let result = []
//     for(let item of input){
//         if(typeof item === 'string') {
//             result.push(item)
//         }
//     }
//     console.log(result)
//     return result
// }


// const result = filterNumbers(array)
// console.log(numbers)
// console.log(strings)
// console.log(evenNumbers)
// console.log(oddNumbers)
// console.log(stringWithZ)
// console.log(moreThanFourLength)
// console.log(moreThanFourDigits)
// console.log(patternWithEs)

// function filterArray(array, condition) {
//     let result = []
//     for (let item of array) {
//         switch (condition) {
//             case 'number':
//                 if (typeof item === 'number') {
//                     console.log('Item', item)
//                     result.push(item)
//                 }
//                 break
//             case 'string':
//                 if (typeof item === 'string') {
//                     result.push(item)

//                 }
//                 break
//             case 'even':
//                 if (item % 2 === 0) {
//                     result.push(item)

//                 }
//                 break
//             case 'odd':
//                 if (item % 2 === 1) {
//                     result.push(item)
//                 }
//                 break
//             case 'stringWithZ':
//                 if (item.toString().includes('z')) {
//                     result.push(item)
//                 }
//                 break
//             case 'moreThanFourLength':
//                 if (item.length > 4) {
//                     result.push(item)
//                 }
//                 break
//             case 'moreThanFourDigits':
//                 if (typeof item === 'number' && item.toString().length >= 4) {
//                     result.push(item)
//                 }
//                 break
//             case 'patternWithEs':
//                 if (item.toString().includes('es')) {
//                     result.push(item)
//                 }
//                 break
//         }
//     }
//     return result
// }

// let array = [9,'apple','banana',4,'zebra',3,6,7,'zomato',67546,123,'swiggy','Goa',4250,'tomatoes']

// console.log('Numbers', filterArray(array, 'number'))
// console.log('Strings', filterArray(array, 'string'))
// console.log('Even', filterArray(array, 'even'))
// console.log('Odd', filterArray(array, 'odd'))
// console.log('String with z', filterArray(array, 'stringWithZ'))
// console.log('More than four length', filterArray(array, 'moreThanFourLength'))
// console.log('More than four digits', filterArray(array, 'moreThanFourDigits'))
// console.log('Pattern with Es', filterArray(array, 'patternWithEs'))

function filterArr(array,condition) {
    let result = []
    const filters = {
        strings: (item) => typeof item === 'string',
        numbers: (item) => typeof item === 'number',
        even: (item) => typeof item === 'number' && item % 2 === 0,
        odd: (item) => typeof item === 'number' && item % 2 === 1,
        stringWithZ: (item) => typeof item === 'string' &&  item.includes('z'),
        moreThanFourLength: (item) => typeof item === 'string' && item.length > 4,
        moreThanFourDigits: (item) => typeof item === 'number' && item.toString().length > 4,
        patternWithEs: (item) => typeof item === 'string' && item.includes('es')
    }
    for(let item of array) {
        if(filters[condition](item)) {
            result.push(item)
        }
    }
    return result
}

let array = [9,'apple','banana',4,'zebra',3,6,7,'zomato',67546,123,'swiggy','Goa',4250,'tomatoes']
console.log('Numbers', filterArr(array, 'numbers'))
console.log('Strings', filterArr(array, 'strings'))
console.log('Even', filterArr(array, 'even'))
console.log('Odd', filterArr(array, 'odd'))
console.log('String with z', filterArr(array, 'stringWithZ'))
console.log('More than four length', filterArr(array, 'moreThanFourLength'))
console.log('More than four digits', filterArr(array, 'moreThanFourDigits'))
console.log('Pattern with Es', filterArr(array, 'patternWithEs'))