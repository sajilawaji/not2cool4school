// const groceries = [
//     "apples", "mixed veggies", "chicken", "chipotle in adobo", "tortillas"] groceries,[0]//'apples'


// //object = describe 

// const apple = [

//     type: "pink lady",
//     quantity: 10,
//     readyToEat: true,
// ]

// const studentA = [


// ]

// for (let i  = 0;) i < groceries.length; i++) {
// //console.log ("I need" + groceries[i])
// console.log ('I need ${groceries[i]}')

// }



// const students = []


// //accessing elements in an array

// const favoriteMovies = ["matilda", "spirited away","home alone"]

// let firstMovies = favoriteMovies [0]
// console.log(firstMovie)
// console.log(favoriteMovies.length)



// // let myName = 'Sajdah'
// // 
// // // myName[0] //"S" - just a collection of characters - gives you the first letter of your name
// // 

// //this part is populating an array by index
// movies[1] = "Batman"
// movies[movies, length] = "";




// // favoriteMovies[10] ="Shrek"
// // 
// // console.log(favoriteMovies)
// // 
// // console.log(favoriteMoviesmovies[5]);





// //following along the perscholas files 

// console.log (movies); //['Caddyshack', 'Batman', 'Scarface', 'The Count of Monte Cristo', emptyyy etc, - the example list on slack]


// favoriteMovies.length = 50

// console.log (favoriteMoives)


// for (let i =0; i < favoriteMovies.length)
// 
// 
// favoriteMovies[0]//EEAAO
// favoriteMovies[1]//Spirited Away
// favoriteMovies[2]//The Game
// 
// let firstMovie = favoriteMovies [0]
//console.log(firstMovie)
// console.log(favoriteMoives.length)
// 
//favoriteMovies [10] = 'Shrek'
// 
//console.log(favoriteMovies[5])
// 
// favoriteMovies.length = 50
// 


//Concat 



// let yourMovies = ['Caddyshack', 'Interstellar', 'Scarface,'];

// let myMovies = ['Batman', 'The Count of Monte Cristo', 'Shrek'];

// letourMovies = yourMovies.concat(myMovies)

// console.log(ourMovies)



//Join

// let movieString = myMovies.join('')
// console.log('${moiveString} all walk into a bar')
// 
//push and unshift 
// myMovies.push('Trading places', 'Antitrust')
// 
// 
//console.log()
// 
// ourMovies.unshift('interstellar', 'Harry Potter');
// console.log(ourMovies)




//pop() and shift() (removing elements from the array)

// ourMovies.pop()
// console.log(ourMovies)
// ourMovies.pop()
// console.log(ourMovies)
// ourMovies.shift()
// consolge.log(ourMovies)

//Reverese()

// let movies = ['Caddyshack', 'Interstellar', 'Trading Places']
// 
// console.log(movies.reverse())
// 
// flat()
// 
// let numArray = [
// 
// [1,2,3],
// [4,5,6],
// [7,8,9],
// 
// console.log(numArray[1][1])
// 
// ]
// 


let numArray = [

    [1, 2, 3],
    [4, 5, 6],
    [


        [7, 8, 9],
        [10, 11, 12],
        [13, 14, 16],
    ],

];


console.log(numArray.flat());



// object - describe
// 
// const = {
// 
// type: "pink lady",
// quantity: "10",
// readyToEat: true,
// 
// }

// let movies = ['Shrek', 'Caddyshack', 'Batman', 'Interstellar', 'Scarface', 'Spaceballs', 'Alien', 'The Count of Monte Cristo', 'Avatar the Last Airbender'];
// 
// movies.forEach ( (m, i) => {
// 
// 
// console.log(m, i)
// })
// 
// for(let movie of movies) {
// if(movie === 'The Last Airbender') break;
// console.log(movie)
// 
// }
// 
// 
// 
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 
// numbers.forEach( (number)) => {
// 
// console.log(number + 2)
// })
// 
// 

//let movies = [ 'Spaceballs', 'The Sting', 'Alien' ];
//let moviesCopy = [...movies];

//unfinsihed

//continue here and adjust the index to add and check the console using the web inspector tool

//javascript objects - sabrun or any student is the example

// cont sabrun = {
// 
// hairColor: 'black',
// hasHeadphones: true,
// doCode: () => [ console.log ('typing code...')]
// 
// age: 1000, 
// interest: ['football', 'wrestling'],
// aceTheCat: {
// 
// age: 'baby',
// color: 'orange'
// name: 'Ace'
// 
// }
// 
// }
// 

// const vehicle = {
// 
// color: "blue", 
// hp: 4000, 
// year:1989, 
// "active registration": true
// 
// }
// 
// console.log(vehicle.color)
// console.log(vehicle.hp)
// console.log(vehicle.year)
// console.log(vehicle['active registration'])
// 
// vehicle.color = 'red'
// vehicle.make = 'Audi'
// vehicle ['active registration'] = false 

//delete vehicle ['active registration]

// console.log(vehicle)
// 
// for(const key in vehicle) {
// console.log(vehicle[key])
// }
// 
// 


//class task
// const todolist = { thinkaboutlastmonth, planfortherestofthisprogram, organizemylife, update myresume, cleanthecar, returntheumbrella, 


// }

// constMagnolia = {

// // color: "gray and mixed with black, brown, orange, and white",
// eyes:"green",
// age: "one year old or so",
// self: "beautiful",
// personality: "lovely",
// heart: "adorable",
// tendencies:"likes to play",
// // quirks: "will bite your ankle if you try her",



// }


//console.log(mogwai goes here - the code goes above particularily )


const obj = {

    salutation: 'hi',
    count: 4

}


if (obj.salutation) {

    console.log('ok')

} else {

    console.log('this key does not exist')
}

//conditional  or if statement 
if (obj.salutation === 'hi') {

    console.log('okay')
}


//loop

for (let i = 0; i < obj.count; i++) {

    console.log(i)

}