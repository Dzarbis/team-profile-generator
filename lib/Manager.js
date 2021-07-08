const Employee = require('./Employee');

class Manager extends Employee {
    constructor(firstName, lastName, id, email, officeNumber) {
        super(firstName, lastName, id, email);

        this.officeNumber = officeNumber;
        this.icon = 'fas fa-user-tie';
    }

    getOfficeNumber() {
        return `${this.officeNumber}`;
    };

    getRole() {
        return "Manager";
    };
};

module.exports = Manager;