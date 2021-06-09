const Employee = require("../lib/Employee");

const employee = new Employee('Peter', 'Quill', 69, 'starlord@gotg.com');

test('creates a new employee', () => {
    expect(employee.firstName).toBe('Peter');
    expect(employee.lastName).toBe('Quill');
    expect(employee.id).toBe(69);
    expect(employee.email).toBe('starlord@gotg.com');
});

test('gets employee name', () => {
    expect(employee.getName()).toEqual(expect.stringContaining(`${employee.firstName} ${employee.lastName}`));
});

test('gets employee id', () => {
    expect(employee.getId()).toEqual(employee.id);
});

test('gets employee email', () => {
    expect(employee.getEmail()).toEqual(employee.email);
});

test('gets employee role', () => {
    expect(employee.getRole()).toBe('Employee');
});
