const Engineer = require('../lib/Engineer');

const engineer = new Engineer('Peter', 'Quill', 69, 'starlord@gotg.com', 'StarLord');

test('creates a new engineer', () => {
    expect(engineer.firstName).toBe('Peter');
    expect(engineer.lastName).toBe('Quill');
    expect(engineer.id).toBe(69);
    expect(engineer.email).toBe('starlord@gotg.com');
    expect(engineer.gitHub).toBe('StarLord');
});

test('gets engineer name', () => {
    expect(engineer.getName()).toEqual(expect.stringContaining(`${engineer.firstName} ${engineer.lastName}`));
});

test('gets engineer id', () => {
    expect(engineer.getId()).toEqual(engineer.id);
});

test('gets engineer email', () => {
    expect(engineer.getEmail()).toEqual(engineer.email);
});

test('gets engineer GitHub', () => {
    expect(engineer.getGitHub()).toEqual(engineer.gitHub);
});

test('gets engineer role', () => {
    expect(engineer.getRole()).toBe('Engineer');
});