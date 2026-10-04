const data = [
    {
        "FullName": "Akash Nigam",
        "City": "Seattle"
    },
    {
        "FullName": "Abhijeet Singh Bundela",
        "City": "Chitrakoot"
    },
    {
        "FullName": "Ashish Kumar",
        "City": "Varanasi"
    },
    {
        "FullName": "Himanshu",
        "City": "Chinhat"
    }
];

describe("Login Tests", function () {

    data.forEach(function ({FullName, City}) {
        it("test case no. 0001", function () {
            console.log("Within test 0001.....");
            console.log(`Welcome Mr. ${FullName} from ${City}`);
        });
    });

});