class Employee {
    constructor(firstName, lastName, id, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.email = email;
    }

    getName() {
        return `${this.firstName} ${this.lastName}`;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return "Employee";
    }
};

module.exports = Employee;