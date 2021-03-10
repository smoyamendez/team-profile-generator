// Starter file provided by Instructor (03/09/2021) AC

const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const test = "school";
    const intern = new Intern("Sommer", 1, 'sommer@sommer.com', test);

    expect(intern.school).toEqual(test);
});

test("getRole() should return \"Intern\"", () => {
    const test = 'Intern';
    const intern = new Intern("Sommer", 1, 'sommer@sommer.com', 'school');

    expect(intern.getRole()).toBe(test);
});

test("Can get school via getSchool()", () => {
    const test = 'school';
    const intern = new Intern("Sommer", 1, 'sommer@sommer.com', test);

    expect(intern.getSchool()).toEqual(test);
});
