const {expect} = require('chai');

describe("Login Tests", function () {

    it("test case no. 0001", async function () {
        expect(function () {
            console.log("Starting test....");
            let a = 100;
            let b = 0;
            if(b==0) {
                throw new Error("Cannot divide by 0.");
            }
            let c = a / b;
            console.log(c);
            console.log("Finishing test....");
        }).to.throw("divide");
         
    });

});