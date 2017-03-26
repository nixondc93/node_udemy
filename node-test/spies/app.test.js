const Expect = require('expect');
const Rewire = require('rewire');

let app = Rewire('./app.js');

describe('App tests', ()=>{
    let db = {
        saveUser: Expect.createSpy()
    };

    app.__set__('db', db);

    it('Should call the spy correctly', ()=>{
        let spy = Expect.createSpy();
        spy();
        Expect(spy).toHaveBeenCalled();
    });

    it('Should call saveUser with email and password', ()=>{
        let email = 'nixondc93@gmail.com',
            password = 'password';

        app.handleSignUp(email, password);

        Expect(db.saveUser).toHaveBeenCalledWith({email, password}); 
    });
});