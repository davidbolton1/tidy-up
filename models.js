const bcrypt = require('bcryptjs');
function createHash(password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}
const userDb = [];
function createUser(username, password) {
    const hash = createHash(password);
    const newUser = {
        username, 
        hash
    };
    console.log(newUser)
    userDb.push(newUser);
}

const db = [];

function all() {
    //return copyOf(db);
    return [ //Return a new array with the contents of 'db' sprinkled
        ...db
    ];
}

function create(name, joyVal) {
    // If you wanted to store on/off let givesJoy = joyVal || 'off''
    // let givesJoy = false;
    // if (joyVal) {
    //     givesJoy = true;
    // }

    // If you want to test if joyVal is truthy
    // if it is, I want true, else I want false
    let givesJoy =  joyVal ? true : false;


    const newItem = {
        name,
        givesJoy
    };
    db.push(newItem);
}

const stuff = {
    all,
    create
}

 const users = {
     create: createUser
//     allUsers,
//     signup,
//     login
 }

module.exports = {
    stuff,
    users
}

/* 
TOP 
user interface
Middle 
controller pulls things/requests
looks at the model layer (that slices/dices data)
Bottom
Database
*/

