const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(firstName, lastName, id, email, gitHub) {
        super(firstName, lastName, id, email);

        this.gitHub = gitHub;
        this.icon = 'fas fa-laptop';
    }

    getGitHub() {
        return `${this.gitHub}`;
    };

    getRole() {
        return "Engineer";
    };
};

module.exports = Engineer;