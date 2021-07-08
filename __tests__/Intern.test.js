const Intern = require('../lib/Intern');

const intern = new Intern('Peter', 'Quill', '69', 'starlord@gotg.com', 'Ravager U');

test('creates a new intern', () => {
    expect(intern.firstName).toBe('Peter');
    expect(intern.lastName).toBe('Quill');
    expect(intern.id).toBe('69');
    expect(intern.email).toBe('starlord@gotg.com');
    expect(intern.school).toBe('Ravager U');
});

test('gets intern name', () => {
    expect(intern.getName()).toEqual(expect.stringContaining(`${intern.firstName} ${intern.lastName}`));
});

test('gets intern id', () => {
    expect(intern.getId()).toEqual(intern.id);
});

test('gets intern email', () => {
    expect(intern.getEmail()).toEqual(intern.email);
});

test('gets intern school', () => {
    expect(intern.getSchool()).toEqual(intern.school);
});

test('gets intern role', () => {
    expect(intern.getRole()).toBe('Intern');
});