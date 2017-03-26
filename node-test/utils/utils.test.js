const Utils = require('./utils');
const Expect = require('expect');


describe('Utils', ()=>{
    it("should add two numbers", ()=>{
    let res = Utils.add(10,10);

    Expect(res).toBe(20).toBeA('number');

    // if(res !== 20){
    //     throw new Error(`Value is incorrect. Got ${res}, should've gotten 20`);
    // }
    });

    it('should square a number', ()=>{
        let res = Utils.square(10);

        Expect(res).toBe(100).toBeA('number');

        // if(res !== 100){
        //     throw new Error(`Value is incorrect. Got ${res}, should've gotten 100`);
        // }
    });

    it('should add First and Last name to User Obj', ()=>{
        let res = Utils.setName({}, "Derry Nixon");

        Expect(res).toInclude({
            firstName: "Derry",
            lastName: "Nixon"
        });

    });


    it("should async add two numbers", (done)=>{
        let res = Utils.ascynAdd(10,10, (sum)=>{
            Expect(sum).toBeA('number').toBe(20);
            done();
        });
        
    });
});

