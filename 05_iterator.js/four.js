const arr = [1, 2, 3, 4, 5, 6]

const values = arr.forEach( (item) => {
    return item
})

console.log(values);    //out =>  undefined  bcauz forEach does not return a new array.
                        //        it simply executes the provided function once for each array element. Therefore, the variable 'values' will be undefined.

/* filter method */
//The filter() method creates a new array with all elements that pass a given test (callback function).
// It does not modify the original array.

const filteredValues = arr.filter( (item) => {
    return item > 3
})

console.log(filteredValues);    //out =>  [4, 5, 6]

const filterNum = []
arr.forEach( (item) => {
    if(item > 3){
        filterNum.push(item)
    }
})

console.log(filterNum);    //out =>  [4, 5, 6]

const books = [
    { title: 'Book 1', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book 2', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book 3', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book 4', genre: 'Science', publish: 1986, edition: 2010 },
    { title: 'Book 5', genre: 'Fiction', publish: 1988, edition: 2012 },
    { title: 'Book 6', genre: 'Non-Fiction', publish: 1995, edition: 2015 },
    { title: 'Book 7', genre: 'History', publish: 2001, edition: 2018 },
    { title: 'Book 8', genre: 'Science', publish: 1983, edition: 2000 },
    { title: 'Book 9', genre: 'Fiction', publish: 1990, edition: 2005 },
    { title: 'Book 10', genre: 'Non-Fiction', publish: 1998, edition: 2011 }
];

const userBooks = books.filter( (bk) => bk.genre === 'Fiction' )
console.log(userBooks);   
//out   => 
// [
//   { title: 'Book 1', genre: 'Fiction', publish: 1981, edition: 2004 },
//   { title: 'Book 5', genre: 'Fiction', publish: 1988, edition: 2012 },
//   { title: 'Book 9', genre: 'Fiction', publish: 1990, edition: 2005 }
// ]


