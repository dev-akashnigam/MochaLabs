const {expect} = require('chai');

describe("Login Tests", function () {

    beforeEach(function () {
        console.log("Starting beforeEach()..");
        expect(true).to.be.false;
        console.log("Finishing beforeEach()..");
    });

    it("test case no. 0001", async function () {
        console.log("Starting test case no. 0001");
        await new Promise((resolve) => {
            setTimeout(resolve, 3*1000)
        });
        console.log("Finishing test case no. 0001");
    });

    afterEach(function () {
        console.log("Starting afterEach()..");
        console.log("Finishing afterEach()..");
    });

});