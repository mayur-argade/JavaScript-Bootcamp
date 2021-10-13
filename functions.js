// function defination
// block of code to perform a particular task
// before we use a function we have to define it

// the function definition also a function declaration or function statement

// the name of function 
// a list of parameter to the function enclosed in parentheses and separeated by comas/
// the javascript statement that define the function enclosed in curly brackets



// defining function
// function function-name(params) {
    
// }

function sum() {
        var a=10; 
        var b=12;
        var total = a+b;
        console.log(total);
    }

// calling a function
console.log(sum()); 

// function parameter
// function parameter are the names listed in the functions definition

// function arguments
// function arguments atre the real values passed to the function



function sum(a,b) { //this a and b are parameters
    total = a+b;
    console.log(total);
}
sum(10,12)  //this are argument
sum(21,12)



// function expression
// crater a fumction and put it into a variable
var funExp = sum(12,12);

// return keyword
function sum2(a,b) { //this a and b are parameters
return a+b; 
}
var funexp2= sum2(12, 100)
console.log(funexp2);

// anonymous function
// a function expression is similar to and has the same Syntax
// as a function declaration one can define Named
// function expressions (where the name of the expression might)
// be used in the call stack for example
// or "anonymous" funciton expressions

var FunctionExpression = function (a, b) {
    return a+b;
}
console.log(FunctionExpression(12,14));