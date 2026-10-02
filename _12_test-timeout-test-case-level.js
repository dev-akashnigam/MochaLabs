describe("Login Tests", function () {

    it("test case no. 0001", async function () {
        this.timeout(20*1000);
        console.log("Within test case no. 0001");
        await new Promise((resolve) => {
            setTimeout(resolve, 3*1000)
        });
    });

});

describe("Registration Tests", function () {

    it("test case no. 0002", async function () {
        console.log("Within test case no. 0001");
        await new Promise((resolve) => {
            setTimeout(resolve, 3*1000)
        });
    }).timeout(2*1000);

});
