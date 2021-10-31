// // // LET vs VAR vs CONST 

// // var myname = 'Mayur argade'
// // console.log(myname);

// // myname= 'ketan argade'
// // console.log(myname);

// // let myname2 = 'Mayur argade'
// // console.log(myname2);

// // myname2= 'ketan argade'
// // console.log(myname2);


// // // we cannot change value later if we use const
// const myname3 = 'Mayur argade'
// console.log(myname3);

// myname3= 'ketan argade'
// console.log(myname3);


// // var => function scope
// biodata();
// function biodata() {
//     var myfirstname = 'mayur'
//     console.log(myfirstname);
//     if(true){
//         var mylastname= "argade"
//         console.log(" inner "+myfirstname);
//         console.log(" inner "+mylastname);
//     }
//     console.log(" outer "+mylastname);
// }

// // let and const => block scope
// biodata()
// function biodata() {
//     let myfirstname = 'mayur'
//     console.log(myfirstname);
//     if(true){
//         let mylastname= "argade"
//         console.log(" inner "+myfirstname);
//         console.log(" inner "+mylastname);
//     }
//     console.log(" outer "+mylastname);
// }
// // you cannot access variables outside block if you are using let and const
// // thats why inner will run but it will not print outer lastname


// // templete literals (templete string)
// for(let num=1; num<=10; num++)
// {
//     let tableof = 12;
//     let ans = tableof * num;
//     console.log(` ${tableof} * ${num} = ${ans}`);
// }


// default argument
// default funtion parameters allow named parameters to be initialized with default values if no value or undefined is passed
// function multi(a,b=4) {
// return a+b
// }

// console.log(multi(2));

// Far arrow funtion & Traditional function
sum();
function sum() {
    let a=5, b=6;
    let ans= a+b
    console.log(`sum of a and b is ${ans}`);
}

// converting this function into fat arrow function
// in  fat arrow function you have to define first and then call
// we are unding function as a variable
const sum2 = () =>{     //defining funtion
    let a=5, b=7;
    console.log(`sum of a and b is ${a+b}`);
}
sum2();
// if you have only return 1 sentense then no need to write a return 