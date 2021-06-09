const Manager = require('../lib/Manager');

const manager = new Manager('Peter', 'Quill', 69, 'starlord@gotg.com', 12);

test('creates a new manager', () => {
    expect(manager.firstName).toBe('Peter');
    expect(manager.lastName).toBe('Quill');
    expect(manager.id).toBe(69);
    expect(manager.email).toBe('starlord@gotg.com');
    expect(manager.officeNumber).toBe(12);
});

test('gets manager name', () => {
    expect(manager.getName()).toEqual(expect.stringContaining(`${manager.firstName} ${manager.lastName}`));
});

test('gets manager id', () => {
    expect(manager.getId()).toEqual(manager.id);
});

test('gets manager email', () => {
    expect(manager.getEmail()).toEqual(manager.email);
});

test('gets manager office number', () => {
    expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
});

test('gets manager role', () => {
    expect(manager.getRole()).toBe('Manager');
});