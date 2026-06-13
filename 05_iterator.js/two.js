const myObj = {
    'JS': "JavaScript",
    'CPP': "C++",
    'RB': "Ruby",
    'Swift': "Swift by Apple",
}

for (const key in myObj) {
    console.log(`${key} shortcut is for ${myObj[key]}`);
}

//out =>
//JS shortcut is for JavaScript
// CPP shortcut is for C++
// RB shortcut is for Ruby
// Swift shortcut is for Swift by Apple

//Use for...in when you need to loop through keys of an object, but prefer for...of
//  for arrays and other iterables.

const language = ['CPP', 'Ruby', 'Java', 'Swift', 'JS'];
for (const key in language) {       
    console.log(language[key]);         //out   =>  CPP Ruby Java Swift JS
    
}

//we cant access the map by for-in loop directly.