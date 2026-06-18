/* No, JavaScript does not have true classes like Java or C++. Instead, it uses something called Prototypes. The class keyword you see in JS is just a beautiful mask.

Here are your copy-pasteable, beginner-friendly notes to completely master this concept:

📝 My Notes: Does JavaScript Really Have Classes?
1. The Core Truth: It’s "Syntactic Sugar"
What is Syntactic Sugar? It means features added to a programming language to make the code sweeter (easier to read and write) for humans, but it doesn't change how the language works under the hood.

The Reality: In 2015, JavaScript introduced the class keyword. It was added purely to make developers coming from languages like Java, Python, or C++ feel comfortable.

When you type class in JavaScript, the V8 engine immediately translates it back into traditional JavaScript functions and prototypes behind the scenes.

2. True OOP vs. JavaScript's Way
True OOP (Java/C++): A Class is a strict blueprint, and objects are instances created copy-by-copy from that blueprint.

JavaScript (Prototypal): There are no real blueprints. Objects just link directly to other objects and borrow behaviors from them. This behavior-sharing system is called Prototypal Inheritance. */

//literal object means literally it is the thing or base unit 
const User = {
    userName: "Saavi";
    
}