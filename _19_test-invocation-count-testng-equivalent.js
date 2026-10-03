describe("Login Tests", function () {

    it("test case no. 0001", async function () {
        console.log("Starting test case no. 0001");
        await new Promise((resolve) => {
            setTimeout(resolve, 3*1000)
        });
        console.log("Finishing test case no. 0001");
    });

    for(let i=0; i<5; i++) {
        it("test case no. 0002", async function () {
            console.log("Starting test case no. 0002");
            await new Promise((resolve) => {
                setTimeout(resolve, 3*1000)
            });
            console.log("Finishing test case no. 0002");
        });
    }

    it("test case no. 0003", async function () {
        console.log("Starting test case no. 0003");
        await new Promise((resolve) => {
            setTimeout(resolve, 6*1000)
        });
        console.log("Finishing test case no. 0003");
    });

});