// primitive data types
var myname = "mayur argade"
var myage = 25;
var iammayur= true;


console.log(myname);
console.log(typeof(myname));
console.log(typeof(myage));
console.log(typeof(iammayur));


// challange 2
console.log(10+ "20");
console.log(9 - "5");  //bug
console.log("Java" + "Script");
console.log(" " + " ");
console.log(" "+ 0);
console.log("mayur" - "argade");
console.log(true + true);
console.log(true + false);
console.log(false + true);
console.log(false - true);

//interview question
//  difference between null vs undefined

var iamuseless = null
var iamstandby;
console.log(iamuseless);
console.log(typeof(iamuseless)); //gives object as a output 2nd bug

console.log(iamstandby);


// what is NaN (not a number)
// NaN is a property of the global object.
// In other words it is a variable in global scope
// the initial value of Nan is Not_a_Number

var myno= 987654321;    //is it not a number--> no it is number then it will give false
var myname= "mayur argade"

console.log(isNaN(myno));
console.log(isNaN(myname));
