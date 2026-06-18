/* Now that you know how the old, clunky XMLHttpRequest works, you are ready for Promises. Promises were introduced to JavaScript to make fetching data much cleaner and easier to read.

📝 My Notes: JavaScript Promises
1. What is a Promise?
In JavaScript, a Promise is exactly what it sounds like in real life: it is a guarantee that something will happen in the future. It is an object that represents the eventual completion (or failure) of a background task, like an API request.

The Real-World Analogy: Imagine you go to a fast-food counter and order a burger. The cashier doesn't give you the burger instantly. Instead, they give you a receipt with an order number.
That receipt is a Promise. You don't have the food yet, but you have a guarantee that in a few minutes, you will either get your burger, or you will get an apology because they ran out of buns.


2. The 3 States of a Promise
Just like the XMLHttpRequest had ready states (1, 2, 3, 4), a Promise has exactly three possible states it can be in:

Pending: You are holding the receipt. You are waiting. The background task (like fetching GitHub data) is still running.

Fulfilled (Resolved): Success! Your order number is called. You got your burger (or your API data).

Rejected: Failure! The cashier calls your number and says the oven caught on fire. The operation failed (maybe your internet went down, or the API URL was typed wrong).


3. Why are Promises better than XMLHttpRequest?
With XMLHttpRequest, you had to write messy code checking if(xhr.readyState == 4) inside a clunky function. Promises give us a much cleaner way to handle success and failure using two magical keywords: .then() and .catch().*/


/* 📝 Short Note: Q and Bluebird
What they are: Early, third-party JavaScript libraries used to handle background tasks.

Why they existed: Before 2015, JavaScript didn't have built-in Promises. Developers suffered from messy, deeply nested code known as "Callback Hell." Q and Bluebird were created to fix this by introducing the .then() and .catch() syntax.

Why we don't use them now: In 2015 (ES6), JavaScript officially added native Promises directly into the language. Because we can now just write new Promise() out of the box, Q and Bluebird are outdated and only found in old legacy code.

Summary: They are the historical third-party grandfathers of the modern JavaScript Promise. */

// ==========================================
// APPROACH 1: Storing a Promise in a Variable
// ==========================================

// 1. We create a Promise and hold it inside the variable 'promiseOne'.
// The Promise takes a callback function with two parameters: resolve and reject.
const promiseOne = new Promise( function(resolve, reject) {
    
    // setTimeout is used here to fake a background task (like downloading data) that takes 1 second (1000ms)
    setTimeout(function() {
        console.log("Async task is completed"); 
        
        // CRUCIAL STEP: resolve() is the connector. 
        // Calling resolve() changes the Promise state to 'Fulfilled' and fires off the .then() block below. 
        // If you forget to call resolve(), the .then() block will NEVER run.
        resolve();
    }, 1000)

});

// 2. Consuming the Promise
// The .then() listens specifically for the resolve() above. It waits patiently until resolve() is triggered.
promiseOne.then(function() {
    console.log('Promise consumed');
});


// ==========================================
// APPROACH 2: Direct Chaining (No Variable)
// ==========================================

// 1. We create the Promise, but instead of saving it to a variable, we attach .then() directly to the end of it.
new Promise(function(resolve, reject) {
    
    // Notice we are using the modern ES6 Arrow Function '() =>' here instead of 'function()'
    setTimeout(() => {
        console.log("Async task 2 is completed");
        
        // Again, we must call resolve() to let the attached .then() know it's time to run
        resolve(); 
    }, 1000)

// 2. We chain .then() directly to the closing bracket of the Promise object
}).then(() => {
    console.log("Async 2 resolved");
});



// // 1. We create the promise with resolve and reject ready to be used
// const coffeeOrder = new Promise(function(resolve, reject) {
    
//     let machineIsWorking = true; // Let's pretend this is our API check
    
//     if (machineIsWorking) {
//         // This triggers the .then() below
//         resolve("Here is your Cappuccino! ☕"); 
//     } else {
//         // This triggers the .catch() below
//         reject("Machine is broken! ❌"); 
//     }
// });

// // 2. We consume the promise using .then() and .catch()
// coffeeOrder
//     .then(function(coffeeData) {
//         // This ONLY runs if resolve() was called
//         console.log(coffeeData); 
//     })
//     .catch(function(errorMessage) {
//         // This ONLY runs if reject() was called
//         console.log(errorMessage); 
//     });



/*📝 My Notes: resolve, reject, and .then()
Think of a Promise like ordering a coffee at a cafe. You place your order, and the barista gives you a receipt (the Promise). You are now waiting.

1. resolve() = "Success! Here is your data."
What it is: A function that lives inside the Promise creation block.

What it does: You trigger resolve() when your background task (like fetching an API) finishes perfectly. It changes the Promise's state from 'Pending' to 'Fulfilled'. You can also pass your data inside it, like resolve(myApiData).

The Cafe Analogy: The barista calls your name and hands you your perfect cup of coffee.

2. reject() = "Failure! Something went wrong."
What it is: The other function that lives inside the Promise creation block.

What it does: You trigger reject() when your task fails (e.g., the URL was wrong, or the internet dropped). It changes the Promise's state from 'Pending' to 'Rejected'. You usually pass an error message inside it, like reject("Network error").

The Cafe Analogy: The barista calls your name and tells you the espresso machine exploded.

3. .then() = "What to do next if it succeeds."
What it is: A method that you attach to the outside of the Promise.

What it does: It is a listener. It waits patiently. If (and ONLY if) resolve() is triggered, the .then() block automatically runs and catches the data so you can print it or use it on your webpage.

(Note: To catch a reject(), you use its twin method called .catch()). */


//Here’s the short definition you wanted:

// resolve → used inside a Promise to mark it as successful and send back a value.

// .then → used on the Promise to receive that value and run code with it.

// 👉 In one line:
// resolve produces the result, .then consumes it.


// ================================================================
// PASSING DATA THROUGH RESOLVE
// ================================================================

// 1. Create a promise that fetches or creates user data after 1 second
const promiseThree = new Promise(function(resolve, reject) {

    setTimeout(() => {
        
        // CONCEPT: resolve() is not just a trigger; it can also carry data!
        // Here, we are passing a JavaScript object containing user information directly into resolve().
        resolve({
            userNme: "Saavi", // Note: This is a custom key name (with a typo 'userNme'), which is totally fine!
            email: "Saavi@Tarun.com",
        });
        
    }, 1000);
});

// 2. Consuming the promise and catching the data
// CONCEPT: The function inside .then() takes an argument/parameter (we named it 'user').
// This 'user' parameter automatically becomes a "bucket" that holds whatever object was passed inside resolve() above.
promiseThree.then(function(user) {
    
    // Now that 'user' holds our object, we can use dot notation to print the entire object or specific fields.
    // This line digs inside the object and extracts just the email value.
    console.log(user.email); // Outputs: Saavi@Tarun.com
    
});


// ================================================================
// PROMISE CHAINING, .CATCH(), AND .FINALLY()
// ================================================================

const promiseFour = new Promise(function(resolve, reject) {
    
    setTimeout(() => {
        // We are faking an error state here. 
        // Try changing this to 'false' later to watch the .catch() block run!
        const error = true; 
        
        // (Note: Usually, if there is an error, developers call reject. 
        // But following your exact code logic here:)
        if(error) {
            resolve({userName: "TS.infinity"});
        } else {
            reject("ERROR-404 NOT FOUND"); 
        }
    }, 1000)
});

/*Promise Chaining, handling errors with .catch(), and using .finally(). */

// 1. THE FIRST .then()
// This catches the full object {userName: "TS.infinity"} passed from resolve()
promiseFour.then(function(user) {
    const username = user.userName;

    // CONCEPT: PROMISE CHAINING
    // You don't have to do everything in one block. 
    // Whatever value you 'return' here gets sent directly into the NEXT .then()
    return username; 

// 2. THE SECOND .then()
// The parameter here (I named it 'returnedUsername') acts as a bucket 
// that catches whatever was 'returned' from the block directly above it.
}).then(function(returnedUsername) {
    
    // This will print: "TS.infinity"
    console.log(returnedUsername);
    
// 3. THE .catch() BLOCK
// If reject() was called up top, JavaScript skips ALL the .then() blocks 
// and jumps straight down here to handle the error.
}).catch(function(err) {
    
    // This will print: "ERROR-404 NOT FOUND" (if error was set to false)
    console.log(err);
    
// 4. THE .finally() BLOCK
// Think of this as the ultimate cleanup crew. It DOES NOT CARE if the promise 
// was resolved or rejected. It will ALWAYS run at the very end, no matter what.
}).finally(function() {
    
    console.log("Finally either resolve or reject is done");
    
});



// ================================================================
// ASYNC / AWAIT AND TRY / CATCH (The Modern Way)
// ================================================================

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function() {
        // Faking a network request success/failure state
        const error = true; 
        
        // (Note: Usually if 'error = true', developers call reject. 
        // But following your exact code logic here:)
        if(error) {
            resolve({lang: "JavaScript", passKey: 123});
        } else {
            reject("ERROR_ hell Nahhh!!!");
        }
    }, 1000)
});


// 1. THE 'ASYNC' KEYWORD
// Putting 'async' in front of a function tells JavaScript: 
// "Hey, this function is going to handle background tasks (Promises), so be prepared to wait."
async function promiseFiveConsume() {
    
    // 2. THE TRY / CATCH BLOCK
    // Because we are no longer using the .catch() method, we must handle errors manually.
    // We put our successful code inside 'try'. If a reject() fires, it immediately jumps to 'catch'.
    try {
        
        // 3. THE 'AWAIT' KEYWORD (The Magic!)
        // 'await' completely replaces the need for .then() chaining. 
        // It pauses the code right here, waiting patiently for 'promiseFive' to finish.
        // Once resolved, it takes the data and dumps it directly into the 'response' variable.
        const response = await promiseFive;
        
        // This runs ONLY after the await line finishes.
        // Prints: { lang: 'JavaScript', passKey: 123 }
        console.log(response);
        
    } catch (err) {
        
        // If the Promise triggers reject(), JavaScript aborts the 'try' block 
        // and safely catches the error here.
        console.log(err);
        
    }
}

// 4. Calling the function to kick off the whole process
promiseFiveConsume();


/*  📝 My Notes: The Modern fetch() API with Async/Await
1. What is fetch()?
fetch() is modern JavaScript's built-in tool for making network requests. It completely replaces the old XMLHttpRequest.

The beautiful thing about fetch() is that it returns a Promise by default. This means you don't have to wrap it in a new Promise() block yourself; it is ready to use with async/await or .then() right out of the box.

2. The "Two Await" Rule (Crucial Concept)
When using fetch(), you almost always need two await keywords. Why?

Await 1: await fetch(...) waits for the network to connect and download the raw response headers.

Await 2: await response.json() waits for that raw data to be fully translated into a readable JavaScript Object. (Yes, translating the data takes time, so .json() is actually a Promise too!)*/


// ================================================================
// THE MODERN FETCH() API WITH ASYNC/AWAIT
// ================================================================

// 1. We declare an async function because we are doing background network tasks
async function getUsers() {
    
    // 2. We use try/catch to gracefully handle any network errors (like a dropped WiFi connection)
    try {
        
        // 3. THE FIRST AWAIT (The Network Request)
        // We tell JavaScript to pause and wait for fetch() to grab the data from GitHub.
        // Once it arrives, it is stored in the 'response' variable.
        const response = await fetch("https://api.github.com/users/hiteshchoudhary");
        
        // 4. THE SECOND AWAIT (The JSON Conversion)
        // The 'response' we got above is raw and unreadable (like this.responseText in XHR).
        // We use .json() to convert it into a JavaScript object. 
        // IMPORTANT: .json() takes time to run, so it returns a Promise. We MUST 'await' it!
        const data = await response.json();
        
        // 5. Success! We now have a clean JavaScript object we can read.
        console.log(data);
        // Try this to see just the follower count: console.log(data.followers);
        
    } catch (error) {
        
        // If the fetch fails, it skips the rest of the try block and lands here.
        console.log("E :-", error);
        
    }
}

// 6. Calling the function to kick off the entire process
getUsers();



// ================================================================
// FETCHING DATA USING .THEN() PROMISE CHAINING
// ================================================================

// 1. We initiate the network request.
// fetch() automatically returns a Promise, so we can chain .then() right onto it.
fetch("https://api.github.com/users/tarunsagarjaiswal")

// 2. THE FIRST .then() -> Catching the raw response
.then((response) => {
    
    // The 'response' we get back is raw network data, not a readable object yet.
    // We use .json() to translate it. 
    // CRUCIAL: Because .json() takes time, it creates its own Promise. 
    // We MUST use the 'return' keyword so this new Promise is passed down the chain!
    return response.json();
    
})

// 3. THE SECOND .then() -> Catching the translated data
// The 'converted' parameter acts as a bucket to catch whatever was 'returned' above.
.then((converted) => {
    
    // Success! We now have the fully readable JavaScript object.
    console.log(converted);
    
})

// 4. THE .catch() -> Handling any errors
// If the fetch fails (e.g., bad URL, no internet), it skips both .then() blocks 
// and lands straight down here.
.catch((error) => {
    
    console.log("Something went wrong:", error);
    
});