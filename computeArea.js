//calling functions excercise
//areBothEven function accepts two arguments - accepts two arguments - ensure both inputs are numbers, due to time constraints - we will prioritze error handling code to learn MERN Full Stack Development as they stated 
//returnKeyword returns the result of the expression


//The following is Dickson's code shared in class it is not complete in this copy but it is available  in the section below 



//The area of a rectangle with a width of _ and a height of _is_square units. 

// function computeArea(width, height) {

// const computeArea = width * height;
// 
// }
// 
// 
// function planetHasWater = (planet) => {
// 
// const sanitize_planet = planet[0].toUpperCase() + planet.slice(1). 
// 
// }
// ..incomplete - add more here for finality.


//This section is on invoking functions - known as "iffy" but spelled as an acronym iife  or immediately invoked function expression as seen below 

// (function () {

// your code here...
// })();
// 


//Trying to Follow Along - The Instructors stopped recording. 


// function hoist() {
    // // console.log(x); //outputs undefined, not a ReferenceError
// }
// let x = 25;
// console.log(screenX)
// 
// let x = 5 //global
// 
// { 
// 
    // let y = 6 
    // console.log(x)
// }
// 
// console.log(y)
// 



//Explaining a global scope vs a local scope 

//also its best not to rely on hoisting as a rule of thumb - don't rely on hoisting at all - at let and const will not enable hoisting only var "will" - don't use it "I don't use it at all"  - Instructor Ariel Stitt - its superrrr dangerous so avoid it in Per Scholas 



//from my pov: I will avoid hoisting until i fully undestand it to save time and be more efficient -- 


// let x = 5
// 
// {
// 
    // console.log(x) //can still access x
    // let x = 6
// }
// 

// we can put a function inside a function if its relevant - see the open account example 



//Group assignment below - answer questions 

let numArray = [
    { value: 10 },
    { value: 20 },
    { value: 0 },
    { value: -10 }, 
    { value: 15 }, 
    { value: 28 }, 
    { value: -1000 },
    { value: 42 },
    { value: 7 }
];

function returnEven(array) {
    let newArray = [];

    array.forEach((element) => {
        if (element.value % 2 == 0) {
            newArray.push(element);
        }
    });

    return newArray;
}

let newArray = returnEven(numArray);

newArray[0].value += 10;

numArray[3].value = 67;

let myEvenValue = newArray[1].value;
myEvenValue /= 2;