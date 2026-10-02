describe("Login Tests", function () {

    this.timeout(4*1000);

    it("test case no. 0001", async function () {
        console.log("Within test case no. 0001");
        await new Promise((resolve) => {
            setTimeout(resolve, 3*1000)
        });
    });

    it("test case no. 0002", async function () {
        console.log("Within test case no. 0002");
        await new Promise((resolve) => {
            setTimeout(resolve, 5*1000)
        });
    });

});

describe("Registration Tests", function () {

    it("test case no. 0003", async function () {
        console.log("Within test case no. 0003");
        await new Promise((resolve) => {
            setTimeout(resolve, 3*1000)
        });
    });

    it("test case no. 0004", async function () {
        console.log("Within test case no. 0004");
        await new Promise((resolve) => {
            setTimeout(resolve, 5*1000)
        });
    });

}).timeout(4*1000);