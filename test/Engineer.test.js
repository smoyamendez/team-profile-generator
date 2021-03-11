// Starter file provided by Instructor (03/09/2021) AC

const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const test = "username";
    const engineer = new Engineer("Sommer", 1, 'sommer@sommer.com', test);

    expect(engineer.github).toEqual(test);
});

test("getRole() should return \"Engineer\"", () => {
    const test = 'Engineer';
    const engineer = new Engineer("Sommer", 1, 'sommer@sommer.com', 'github');

    expect(engineer.getRole()).toBe(test);
});

test("Can get GitHub username via getGithub()", () => {
    const test = 'username';
    const engineer = new Engineer("Sommer", 1, 'sommer@sommer.com', test);

    expect(engineer.getGithub()).toEqual(test);
});
