const mocha = require("mocha");

const mochaObj = new mocha({
    timeout: 20000,
    grep: "username"
});

mochaObj.addFile("./_14_using-test-runner.js");

mochaObj.run();