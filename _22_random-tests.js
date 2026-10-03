const {expect} = require('chai');

describe("Login Tests", function () {

    it("test case no. 0001", function () {
        console.log("Within test 0001.....")
        expect(true).to.be.true;
    });

    it("test case no. 0002", function () {
        console.log("Within test 0002.....")
        expect(true).to.be.false;
    });

    it.skip("test case no. 0003", function () {
        console.log("Within test 0003.....")
    });

});