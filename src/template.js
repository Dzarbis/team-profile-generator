const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const addEmployee = employeeInfo => {

    let cards = '';

    employeeInfo.forEach(employee => {
        const { firstName, lastName, id, email, role } = employee;
        let newEmployee = '';
        let switchInfo = '';

        switch (role) {
            case 'Manager':
                newEmployee = new Manager(firstName, lastName, id, email, employee.officeNumber);
                switchInfo = `<span class="has-text-weight-bold">Office Number:</span> ${newEmployee.getOfficeNumber()}`;
                break;
            case 'Engineer':
                newEmployee = new Engineer(firstName, lastName, id, email, employee.gitHub);
                switchInfo = `<span class="has-text-weight-bold">GitHub:</span> <a href="https://github.com/${newEmployee.getGitHub()}" target="_blank" class="has-text-warning has-text-weight-semibold">${newEmployee.getGitHub()}</a>`;
                break;
            case 'Intern':
                newEmployee = new Intern(firstName, lastName, id, email, employee.school);
                switchInfo = `<span class="has-text-weight-bold">School:</span> ${newEmployee.getSchool()}`;
                break;
            default:
                newEmployee = new Employee(firstName, lastName, id, email);
        };

        cards += `
        <div class="column is-one-quarter-desktop">
            <div class="card has-background-primary">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left is-size-2">
                            ${newEmployee.getIcon()}
                        </div>
                        <div class="media-content has-text-centered">
                            <p class="title is-4">${newEmployee.getName()}</p>
                            <p class="subtitle is-6">${newEmployee.getRole()}</p>
                        </div>
                    </div>
                    
                    <div class="content">
                        <p><span class="has-text-weight-bold">ID:</span> ${newEmployee.getId()}<br />
                        <span class="has-text-weight-bold">Email:</span> <a href="mailto:${newEmployee.getEmail()}" class="has-text-warning has-text-weight-semibold">${newEmployee.getEmail()}</a><br />
                        ${switchInfo}</p>
                    </div>
                </div>
            </div>
        </div>`
    });
    return cards;
};

const generate = templateData => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Employee Breakdown</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.1/css/bulma.min.css" />
    </head>
    <body>
        <section class="hero is-danger is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">The Team</h1>
                </div>
            </div>
        </section>
        <main class="m-6">
            <div class="columns is-flex is-flex-wrap-wrap is-flex-direction-row is-justify-content-center">
                ${addEmployee(templateData)}
            </div>
        </main>
    </body>
    </html>
    `;
};

module.exports = generate;