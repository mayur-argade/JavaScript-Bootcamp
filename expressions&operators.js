// 6 types of operator

// Assignment operator
var x = 5
var y= 5
console.log("is x and y are equal"+ x==y );
console.log("is x and y are equal" +(x==y));

// arithmetic operator
// addition subtration division multiplication modulus 

// increment and decrement operator

// comparison operator
//  A comparison operator compares its operand
var a = 1
var b = 1

// Equal (==)
console.log(a==b);

// Not Equal (!=)
console.log(a!=b);

//Greater than (>)  Greater than equal to(>=) less than(<) less than equal to(<=)

// logical oprator ==> logical operator are typically used with Boolean (Logical) values;
//  when they are used they return a Boolean Value.

var a= 30;
var b= -20

// Logical AND (&&)
// true if all the expressions are true otherwise false
console.log(a>b && a>100);

// Logical OR (||)
// true atleast one expression is true
console.log(a>b || a>100);
console.log(a<b || a>100);

// // Logical NOT (!)
// // true-> false and false-> true
// console.log(a>b || a>100);
// console.log(!((a<b) || (a>100)));
console.log(!true);


// String concatenation (operators)
// the concatenation operator (+) concatenated two string values together.
// returning another string that is the union of the two operand strings.

console.log("hello world");
console.log("hello " + "world");
// it is giving in result a single string

// conditional operator
//  expression is combination of operator and operand


// challange 
 var num1= 3**3 //--> 3*3*3
 var num2=3**5 //--> 3*3*3*3*3


//  write a program to swap number
// write a program to swap number without using third variable


// what is difference between == and ===
var dif1= 5;
var dif2="5"

// == only checks value
console.log(dif1==dif2);

//=== checks value and type of operator
console.log(dif1===dif2);