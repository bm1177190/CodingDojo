
------------|-------------
            /
            /
            /


// Snippet 1
function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');

------------|-------------
// Snippet 2
function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);

------------|-------------
            /
            /
            /
// Snippet 3
function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('x is', result);

------------|-------------
// Snippet 4

var num = 15;
console.log(num);
function logAndReturn(num){
   console.log(num);   
   return num;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);








































/* Snippet 10

------------|-------------
    results |19 
      num1  | 2
     num2   | 3
      sum   | 5
            |
            |
*/

// function sumNums(num1, num2) {
//     var sum = num1 + num2;
//     console.log('sum is', sum);
//     return sum;
// }
// //               5                      6                          8
// var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
// console.log('result is', result);
