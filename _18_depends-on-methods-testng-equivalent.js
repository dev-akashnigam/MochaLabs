describe("Main Test Suite", function () {

    it("Test A", async function () {
        console.log("Starting test case A");
        await new Promise((resolve) => {
            setTimeout(resolve, 3*1000);
        });
        console.log("Finishing test case A");
    });

    describe("Nested Suite", function () {

        before(async function () {
            console.log("Starting test case B");
            await new Promise((resolve) => {
                setTimeout(resolve, 3*1000);
            });
            console.log("Finishing test case B");
        });

        it("Test C", async function () {
            console.log("Starting test case C");
            await new Promise((resolve) => {
                setTimeout(resolve, 3*1000);
            });
            console.log("Finishing test case C");
        });
    });

    it("Test D", async function () {
        console.log("Starting test case D");
        await new Promise((resolve) => {
            setTimeout(resolve, 3*1000);
        });
        console.log("Finishing test case D");
    });
});