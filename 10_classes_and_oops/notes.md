-the default behaviour of JS is prototypal behaviour.

-Objects link to objects: Instead of traditional classes, JS objects inherit directly from parent objects via a hidden link called the Prototype Chain.

-Reading looks up the chain: If you ask for a property the object doesn't have, JS automatically checks the parent, then the grandparent, until it finds it or hits null.

-Writing stays local: If you add or change a property, it only updates the specific object you are touching. It never modifies the parent.

-this is the caller: When a method runs, this is always the object before the dot, even if the method was found way up the chain.

-Classes are a disguise: The modern class keyword is just syntax sugar. Under the hood, it’s still just objects linking to objects.