// when we want to store multiple values in one variable then instead of var we will use array
// you can store any typeof variable in one array

// first element==> lower index/ boundary
// last element==> upper index/ boundary

// defining array
var myfriends= ['mayur' , 'rohit', 'vinit', 'sahil' ]
console.log(myfriends);


// 1) transversal of an array

// navigate through an array
console.log(myfriends[3]);

// if we want to check length of the elements of an array
console.log(myfriends.length);

// display last elements
console.log(myfriends[myfriends.length-1]);

// we use looop to navigate
// traditional for loop
var myfriendsnew= ['mayur', 'aditya' , 'rohit', 'vinit', 'sahil' ]
for (let i = 0; i < myfriendsnew.length; i++) {
    const element = myfriendsnew[i];
    console.log(element);
}

// for in loop  => gives index of an array
for(let elements in myfriendsnew){
    console.log(elements);
}

// for of loop =>gives elements
for(let element2 of myfriendsnew){
    console.log(element2);
}

// for each loop using tradional function method
myfriendsnew.forEach(function (eelement, index, array) {
    console.log(`${eelement} index: ${index}= ${array}`);
})

// for each loop using fat arrow method
myfriendsnew.forEach((eelement, index, array)=> {
    console.log(`${eelement} index: ${index}= ${array}`);
})


// searching and filter in an Array
// 😉Array.prototype.indexOf()
 












// how to sort and compare an array
// how to insert add replace and delte elements in array (crud)
// Map() reduce() filter()