const Employee = require('./Employee');

class Intern extends Employee {
    constructor(firstName, lastName, id, email, school) {
        super(firstName, lastName, id, email);

        this.school = school;
        this.icon = 'fas fa-mug-hot';
    }

    getSchool() {
        return `${this.school}`;
    };

    getRole() {
        return "Intern";
    };
};

module.exports = Intern;