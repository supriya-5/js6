// Functions - In order to execute a particular lines of code repetitively, we can allocate them into a function, which can then be called again and again as required. This prevents us writing a piece of code mulitple times. 

//function definition from lines 6-8
//we need to have n no of parameters for n number of arguments passed while calling the functions, so parameters catch the arguments in the sequence they are passed
// function multiply(parameter1, parameter2){
//     console.log("Inside multiply function");
//     //the function body can have more than one line of code.
// }

// //function calling on line 11
// multiply(arg1,arg2);//name of a function followed by open and close parenthesis.
// //while we call a function we pass arguments inside the parenthesis, if we have to pass any values otherwise not necessary to pass arguments. The arguments passed can be one or many separated by commas.

// //arrow function
// const addition = (parameter1, parameter2) => {
//     console.log("add");
// }
// addition(arg1,arg2);

// //function expression
// const subtraction = function (parameter1, parameter2) {
//     console.log("sub");
// }
// subtraction(arg1,arg2);

//without parameters
// function sayHi(){
//     console.log("hi everyone")
//     let a= 4;
//     let b= 5;
//     let result= a+b;
//     console.log(result);
// }
// sayHi();

// //passing argument catch by parameters 
// function sub(e,f){
//     let y= e-f;
//     console.log(y);
// }
// sub(5,2);

// //return
// function muli(i,o){
//     let s= i*o;
//     return s;
// }
// // let value= muli(3*4);
// // console.log(value);

// console.log(muli(3*4)); 
// //inside the console.log we can call a function.. no issuses.. if our function which is called returns some value, then that returned value will also be printed in our console.log.

// //the lexical environment and scope chain

// let i=9; //parent (global)
// function one(){
//     console.log(i); //parent for fn two
//     two();
// function two(){
//  console.log(i); 
//  } //child
// }
// one();

//-------------------------------------------------------

// let m=2;
// const n=2;
// var o=2;
// console.log(m);
// console.log(n);
// console.log(o);
// {
// let m=5;
// const n=5;
// var o=5;
// console.log(m);
// console.log(n);
// console.log(o);
// }
// console.log(m);
// console.log(n);
// console.log(o);