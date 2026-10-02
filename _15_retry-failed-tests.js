const {expect} = require('chai')

describe("Login Tests", function () {

    it("test case no. 0001", function () {
        this.retries(2);
        console.log("Within test case no. 0001");
        expect(true).to.be.false;
    });

    it("test case no. 0002", function () {
        console.log("Within test case no. 0002");
        expect(true).to.be.false;
    }).retries(2);

});