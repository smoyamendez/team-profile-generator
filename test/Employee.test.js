// Starter file provided by Instructor (03/09/2021) AC

const { it, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const test = 'Sommer';
    const employee = new Employee(test);
    // basically saying this.name
    expect(employee.name).toEqual(test);
});

test("Can set id via constructor argument", () => {
    const test = 1;
    const employee = new Employee('name', test);
    // need to say it needs to be a number
    expect(employee.id).toEqual(test);
});

test("Can set email via constructor argument", () => {
    const test = 'sommer@sommer.com';
    const employee = new Employee('name', 1, test);
    // need to say it needs to be in this email format
    expect(employee.email).toEqual(test);
});

test("Can get name via getName()", () => {
    const test = 'Sommer';
    const employee = new Employee(test);
    expect(employee.getName()).toEqual(test);
});

test("Can get id via getId()", () => {
    const test = 1;
    const employee = new Employee('name', test);
    expect(employee.getId()).toEqual(test);
});

test("Can get email via getEmail()", () => {
    const test = 'sommer@sommer.com';
    const employee = new Employee('name', 1, test);
    expect(employee.getEmail()).toEqual(test);
});

test("getRole() should return \"Employee\"", () => {
    const test = 'Employee';
    const employee = new Employee('name', 1, 'sommer@sommer.com');
    expect(employee.getRole()).toEqual(test);
});

// FIXME: write exception tests? see ACT 15 todo.test.js Line 18-26