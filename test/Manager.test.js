// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("Can set office number via constructor argument", () => {
    const test = 1;
    const manager = new Manager("Sommer", 1, 'sommer@sommer.com', test);

    expect(manager.officeNum).toEqual(test);
});

test('getRole() should return "Manager"', () => {
    const test = 'Manager';
    const manager = new Manager("Sommer", 1, 'sommer@sommer.com', 1);

    expect(manager.getRole()).toBe(test);
});

test("Can get office number via getOffice()", () => {
    const test = 1;
    const manager = new Manager("Sommer", 1, 'sommer@sommer.com',  test);

    expect(manager.getOffice()).toEqual(test);
});
