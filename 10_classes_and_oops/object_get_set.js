// 1. We create a plain Object Literal called 'User'. 
// It acts as our "blueprint" or "prototype" for other objects.
const User = {
    // These are standard properties, using the underscore convention 
    // to signal they are "private" and shouldn't be touched directly.
    _email: "Saavi@doc.com",
    _password: "abc",

    // 2. THE GETTER: Defined right inside the object.
    // It acts like a property but works like a function.
    get email() {
        return this._email.toUpperCase();
    },

    // THE SETTER: Defined right inside the object.
    // This catches assignments (e.g., tea.email = "new@doc.com")
    // and saves the value to the hidden '_email' property.
    set email(value) {
        this._email = value;
    }
};

// 3. PROTOTYPAL INHERITANCE
// Object.create(User) makes a brand NEW, EMPTY object called 'tea'.
// It also links 'tea' to 'User' behind the scenes via the Prototype Chain.
// (Note: Object.create() requires an argument. If you pass nothing, it throws an error. 
// If you want an object with NO linked prototype, you use Object.create(null)).
const tea = Object.create(User);

// 4. THE ACCESS
// We ask for 'tea.email'. 'tea' is empty, so JS looks up the prototype chain 
// to 'User', finds the getter, and runs it. The getter looks for '_email', 
// finds "Saavi@doc.com", capitalizes it, and returns it.
console.log(tea.email);     // Output: SAAVI@DOC.COM