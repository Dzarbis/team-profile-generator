class Employee {
    constructor(firstName, lastName, id, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.email = email;
        this.icon = 'fas fa-dice-d20'
    }

    getName() {
        return `${this.firstName} ${this.lastName}`;
    };

    getId() {
        return `${this.id}`;
    };

    getEmail() {
        return `${this.email}`;
    };

    getRole() {
        return "Employee";
    };

    getIcon() {
        return `<i class="${this.icon}"></i>`
    };
};

module.exports = Employee;