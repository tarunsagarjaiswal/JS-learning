/*The fetch() API

Formal Definition
fetch() is a modern, built-in JavaScript Web API that provides an interface for fetching resources asynchronously across a network. It allows web browsers to make HTTP requests to servers to retrieve (GET) or send (POST/PUT) data without requiring a full page reload. It is the modern successor to the older XMLHttpRequest (XHR) object.

Core Characteristics
Promise-Based Architecture:
Unlike older callback-based APIs, fetch() relies entirely on JavaScript Promises. When a fetch() request is initiated, it immediately returns a Promise that will eventually resolve to a Response object representing the server's reply.

Asynchronous Execution:
fetch() operates in the background (within the Microtask Queue via the Event Loop). It does not block or freeze the rest of the JavaScript code while waiting for the server to respond.

Default Behavior:
By default, if no additional configuration is provided, fetch() always performs an HTTP GET request.


The Two-Step Resolution Process
Working with fetch() requires understanding that the data retrieval happens in two distinct asynchronous phases:

Phase 1: The Network Response (await fetch(...))
The initial Promise resolves as soon as the browser connects to the server and receives the HTTP headers. At this point, the actual body of the data (the payload) has not fully downloaded yet.

Phase 2: Data Parsing (await response.json())
To read the data, a parsing method must be called on the Response object (most commonly .json()). Because extracting and translating a data stream takes time, this parsing method returns a second Promise that must also be awaited.



Configuration and Methods

While fetch defaults to a simple GET request, it accepts an optional second argument—an options object—to customize the request for advanced server interactions:

Property,           Definition,                                                                     Common Example
method,             Specifies the HTTP action to perform.,                                          "'GET', 'POST', 'PUT', 'DELETE'"
headers,            Provides meta-information to the server about the request.,                     {'Content-Type': 'application/json'}
body,               The actual payload/data being sent to the server (must be stringified).,            "JSON.stringify({ username: ""Tarun"" })"



The Error Handling "Quirk" (Important Exception)
A critical technical detail about fetch() is how it handles HTTP error status codes (like 404 Not Found or 500 Internal Server Error).

Network Failures: A fetch() Promise will only reject (triggering a .catch() block) if there is a fundamental network failure, such as the internet connection dropping or a DNS lookup failing.

HTTP Errors: If the browser successfully communicates with the server, but the server replies with an error code (e.g., 404), fetch() considers the operation a Success and the Promise will resolve.

The Solution: Developers must manually verify the success of the HTTP request by checking the boolean property response.ok (which is true if the status code is between 200 and 299) before attempting to parse the data.*/




/* 🚀 Why fetch() Wins the Race
JavaScript processes background tasks based on two main factors: Speed and Priority Queues.

1. Speed (The Timer Race): Your setTimeout was explicitly told to wait for 1000ms (1 full second). A fetch() request to a fast server often takes only 200–300ms. It naturally crosses the finish line faster.

2. Priority (The VIP Queue vs. Regular Queue): Even if you set the timer to 0ms, fetch() still wins because of how JavaScript sorts finished tasks:

The VIP Line (Microtask Queue): High priority. Anything Promise-based (fetch(), .then()) waits here.

The Regular Line (Macrotask Queue): Low priority. Older APIs like setTimeout() wait here.

The Golden Rule: The JavaScript Event Loop will always completely empty the VIP Microtask Queue before it allows a single task from the Regular Macrotask Queue to run. */