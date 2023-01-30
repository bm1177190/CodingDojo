// var x = 1

// var myname = "my name is Brandpn";

// var isBrandon = true;

// var b = null

// console.log(b)


// var x = 25;
// if (x < 50) {    
//     console.log("bigger than 50");
// }
// else {    
//     console.log("smaller than 50");
// }
// because x is not greater than 50, the second print statement, "smaller than 50", is the only line that will execute


// var x = 25;
// if (x > 100) {    
//     console.log("bigger than 100");
// }
// else if (x > 50) {    
//     console.log("bigger than 50");
// }
// else if(x >= 25) {
//     console.log("bigger than 25");
// }
// else {    
//     console.log("small number");
// }
// because the first statement is not true, but the second statement is true, it will print "bigger than 50" to our console.  However, it won't even try to check our else if(x > 25) or else statements because it has already found something in the chain that is true.

// for (var num = 10; num > 0; num--) {
//     console.log(num);
// }

// for loop is used when you want to repeat code a certain NUMBER of times
//for(start, conditional, increment){
    //DO THIS CODE
//}

//let num = 0
//while(condition){
    //DO THIS CODE
    //incriment goes here
//}

//repeat code until some CONDITION is met
// var num = 10
// while (num > 0){
//     console.log(num)
//     num--
// }

// function cake(){
//     for (var num = 10; num > 0; num--) {
//             console.log(num);
//         }
//     console.log("==================================")
// }

// function hello(fave_number){
//     console.log("Hello Brandon! Your favorite number is " + fave_number)
//     let new_number = fave_number - 5;
//     return new_number
// }

// let x = hello(5)

// console.log(x)

let names = ["Brandon", " Antoine", "Anna", "Desiree", "Tommy", "Alexander"]
let numbers = [5,7,15,17]
let baseball = ["Yankees", "Dodgers", "Mets", "Red Sox"]
let  things = ["Pizza", 3.14, "Computers", true]

// console.log(names[0] + " loves " + things[0])

for (var num = 0;num < names.length;num++){
    console.log(names[num])
}
