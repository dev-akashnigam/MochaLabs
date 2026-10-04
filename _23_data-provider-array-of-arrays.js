const data = [
    ["Akash Nigam", "Seattle"],
    ["Abhijeet Singh Bundela", "Chitrakoot"],
    ["Ashish Kumar", "Varanasi"],
    ["Himanshu", "Chinhat"]
];

describe("Login Tests", function () {

    data.forEach(function ([fullName, city]) {
        it("test case no. 0001", function () {
            console.log("Within test 0001.....");
            console.log(`Welcome Mr. ${fullName} from ${city}`);
        });
    });

});