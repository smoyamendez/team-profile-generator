// Starter file provided by Instructor (03/09/2021) AC

const { it, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const employee = new Employee();
    // you want the type of the instance to be an object... if not then it is false
    expect(typeof(employee)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const test = 'Sommer';
    const employee = new Employee(test);
    // basically saying this.name
    expect(employee.name).toBe(test);
});

test("Can set id via constructor argument", () => {
    const test = 1;
    const employee = new Employee('name', test);
    // need to say it needs to be a number
    expect(employee.id).toBe(test);
});

test("Can set email via constructor argument", () => {
    const test = 'sommer@sommer.com';
    const employee = new Employee('name', 1, test);
    // need to say it needs to be in this email format
    expect(employee.email).toBe(test);
});

test("Can get name via getName()", () => {

});

test("Can get id via getId()", () => {
    // return getId().then()
});

test("Can get email via getEmail()", () => {

});

test("getRole() should return \"Employee\"", () => {

});
