const Request = require('supertest');
const Expect = require('expect');

const App = require('./server').app;

describe('Server Tests', ()=>{
    it("Should return hello world response", (done)=>{
        Request(App)
            .get('/')
            .expect(200)
            .expect((res)=>{
                res.body = 'hello world';
            })
            .end(done);
    });
});
