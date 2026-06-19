class User {
    constructor(userName) {
        this.userName = userName;
    }

    logMe() {
        console.log(`USERNAME IS :- userName`);
    
    }

    //by using static keyword this fxn cant be accessed by the object which are instanciated by this class.
    static createID() {
        //supose this fxn creates new ID when a person sign's up
        return 1234;
    }
};

const userOne = new User("Saavi");
console.log(userOne.createID());        //out => userOne.createID is not a function
