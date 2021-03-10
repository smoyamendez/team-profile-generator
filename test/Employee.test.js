// Starter file provided by Instructor (03/09/2021) AC

const { it, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    
});

test("Can set id via constructor argument", () => {

});

test("Can set email via constructor argument", () => {

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
