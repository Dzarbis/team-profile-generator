const inquirer = require('inquirer');
const fs = require('fs');
const employeeList = [];

const prompts = [
    {
        type: 'list',
        name: 'role',
        message: 'Which employee role are you adding?',
        choices:
            () => {
                if (employeeList.some(employee => employee.role === 'Manager')) {
                    return ['Engineer', 'Intern']
                } else {
                    return ['Manager', 'Engineer', 'Intern']
                }
            }
    },
    {
        type: 'input',
        name: 'firstName',
        message: ({ role }) => `What is this ${role}'s first name?`,
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You must enter a first name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'lastName',
        message: ({ firstName }) => `What is ${firstName}'s last name?`,
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You need to enter a last name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: ({ firstName }) => `What is ${firstName}'s employee ID number?`,
        validate: idInput => {
            if (!isNaN(parseInt(idInput))) {
                return true;
            } else {
                console.log('You need to enter a proper Employee ID number.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: ({ firstName }) => `What is ${firstName}'s email address?`,
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You need to enter a valid email address.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: ({ firstName }) => `What is ${firstName}'s office number?`,
        when: ({ role }) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false;
            }
        },
        validate: officeNumberInput => {
            if (!isNaN(parseInt(officeNumberInput))) {
                return true;
            } else {
                console.log('You need to enter a valid office number.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'gitHub',
        message: ({ firstName }) => `What is ${firstName}'s GitHub username?`,
        when: ({ role }) => {
            if (role === 'Engineer') {
                return true;
            } else {
                return false;
            }
        },
        validate: gitHubInput => {
            if (gitHubInput) {
                return true;
            } else {
                console.log('You need to enter a valid username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: ({ firstName }) => `Where does ${firstName} attend school?`,
        when: ({ role }) => {
            if (role === 'Intern') {
                return true;
            } else {
                return false;
            }
        },
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('You need to enter a valid school.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addMore',
        message: 'Are there additional employees to add?',
        default: true
    }
]

const prompter = () => {
    return inquirer.prompt(prompts)
    .then(userResponse => {
        employeeList.push(userResponse);

        if (userResponse.addMore) {
            return prompter();
        } else {
            return employeeList;
        };
    });
};

prompter();