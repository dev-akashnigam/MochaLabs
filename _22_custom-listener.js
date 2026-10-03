class MyReporter {
    constructor(runner) {

        runner.on("start", () => {
            console.log("Execution started");
        });

        runner.on("test", test => {
            console.log("Test started:", test.title);
        });

        runner.on("pass", test => {
            console.log("Test passed:", test.title);
        });

        runner.on("fail", (test, error) => {
            console.log("Test failed:", test.title);
        });

        runner.on("pending", test => {
            console.log("Test skipped:", test.title);
        });

        runner.on("end", () => {
            console.log("Execution finished");
        });
    }
}

module.exports = MyReporter;