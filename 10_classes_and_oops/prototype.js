const myHeros = ['Thor', 'Strange'];

let heroPower = {
    thor: "Hammer",
    spider: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spider}`);
        
    },
}

//directly injecting in object so that its child like array, objects, etc. can use the proto injected method
Object.prototype.saavi = function() {
    console.log("saavi  and tarun");
    
}

myHeros.saavi();    //out => saavi  and tarun
heroPower.saavi();  //out => saavi  and tarun

//injeccting in only Array proto
Array.prototype.tarun = function() {
    console.log("hell Nahh");
    
}

myHeros.tarun();   //otu =>   hell Nahh
// heroPower.tarun();  //it give error bcauz we only injected in the child or array proto.

//protype inheritance

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  //child.__prot__  = parent
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)     //(childObject, parentPrototype)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()    //ChaiAurCode       True length is: 11

"hitesh".trueLength()   //hitesh    True length is: 6

"iceTea".trueLength()   //iceTea  True length is: 6