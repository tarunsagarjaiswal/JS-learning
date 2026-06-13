/************for-each loop **************/

// The forEach() method is an array method used to execute a function once for each element in the array.
//SYNTAX :-
/*
array.forEach(function(element, index, array) {
  // code block
});

element → current item

index → position of the item

array → the whole array (optional)
*/

const arr = ['CPP', 'Ruby', 'Java', 'Swift', 'JS'];

//we dont give the fxn name in for-each loop bcauz it is an call back fxn
arr.forEach( function (item) {
    console.log(item);      //out   =>  CPP Ruby Java Swift JS
    
}) 

arr.forEach( (item) => {
    console.log(item);      //out   =>  CPP Ruby Java Swift JS
    
}) 

function printMe(item) {
    console.log(item);   
}

//we have to pass the refernce of the fxn.
arr.forEach(printMe)    //out   =>  CPP Ruby Java Swift JS

const arrObj =[
    {
        language: "JavaScript",
        file:   "JS",
    },
    {
        language: "Ruby",
        file:   "RB",
    },
    {
        language: "python",
        file:   "py",
    },
]

arrObj.forEach( (item) => {
    console.log(item.language);     //out   =>  JavaScript Ruby python
})