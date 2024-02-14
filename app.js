//Function Declarations

function sayHello(name) {
console.log('Hello ${name}')

}

sayHello("Rockelle") // call the function

//Function Expression

const sayGoodbye = function (name) {
console.log('Goodbye ${name}');


}


sayGoodbye("Corey")

//Arrow Function



const sayHowdy = (name) => {

    console.log('Howdy ${name}')
}

sayHowdy ('Alpha')

// EXCERSISE

function areBotheven(n1, n2) {
return !(n1 % 2) && !(n2 % 2)
}


