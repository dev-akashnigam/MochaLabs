describe("Hooks Execution Check", function  () {

    before(function  () {
        console.log("Within before()..");
    });

    beforeEach(function  () {
        console.log("Within beforeEach()..");
    });

    it("should pass test1", function  () {
        console.log("Within it() - test1..");
    });

    it("should pass test2", function  () {
        console.log("Within it() - test2..");
    });

    afterEach(function  () {
        console.log("Within afterEach()..");
    });

    after(function  () {
        console.log("Within after()..");
    });
});