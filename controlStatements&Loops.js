// if...else
var statement = false
if (statement==true) {
    console.log("exicute");
}
else{
    console.log("this will exicute");
}

//write a program to check leap year 


// there are 5 falsy values in javascript
// 0, " ", undefined, null, NaN, false** 
// this values will exicute only false statement
if(false){
    console.log("yes");
}else{
    console.log("no");
}



//conditional ternary operator
// conditional ternary operator only operator which takes thress operands
// variablename= (condition)? value1:value2
var age= 17;
(age>=18)?console.log("you are eligible to vote"):console.log("you are not eligible to vote")


// switch statement
var area = "square"
var l=10, b=12, h=5, r=6;
switch(area){
    case 'square' :
    console.log("area of square is "+ (l*l));
    break;

    case 'circle' :
        console.log("area of circle is "+ (3.14*r*r));
    break;
}


// while loop
// creates loop as long as the statement is true
var num=0;
while(num<=10){
    console.log(num);
    num++;
}

// do while loop
var num=20;
do{
    console.log(num);
    num++;
}while(num<=10);

// for loop
for(var i=0; i<=10; i++){
    console.log(i);
}

// writing a loop for table
for(var i=1; i<=10; i++){
    table=8
    ans= table*i
    console.log(table + "*" + i + "=" + ans)  ;
}