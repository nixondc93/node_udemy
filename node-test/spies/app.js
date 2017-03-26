const db = require('./db.js');
console.log(db.saveUser({email: "email", password: "123"}));
module.exports.handleSignUp = (email, password)=>{
    console.log('email:', email, "\n");
    db.saveUser({email, password});
};