var inquirer = require("inquirer");
var Manager = require("./lib/Manager");
var Engineer = require("./lib/Engineer");
var Intern = require("./lib/Intern");
var render = require("./TeamRanderer");

const teamMembers = []

function createTeam() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "What type of team are you?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern",
                    "Exit"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Manager":
                    addManager();
                    break;

                case "Engineer":
                    addEngineer();
                    break;

                case "Intern":
                    addIntern();
                    break;

                case "Exit":
                    render(teamMembers);
                    break
            }
        })

    function addManager() {
        inquirer
            .prompt([
                {
                    name: "managerName",
                    type: "input",
                    message: "What is your name (manager)?"
                },
                {
                    name: "managerID",
                    type: "input",
                    message: "What is your employee ID (manager)?"
                },
                {
                    name: "managerEmail",
                    type: "input",
                    message: "What is your email (manager)?"
                },
                {
                    name: "managerOfficeNumber",
                    type: "input",
                    message: "What is your office number?"
                }

            ]).then(userChoice => {
                console.log(userChoice);
                const manager = new Manager(userChoice.managerName, userChoice.managerID, userChoice.managerEmail, userChoice.managerOfficeNumber)
                teamMembers.push(manager)

                createTeam();
            });
    }

    function addEngineer() {
        inquirer
            .prompt([
                {
                    name: "engineerName",
                    type: "input",
                    message: "What is your name (engineer)?"
                },
                {
                    name: "engineerID",
                    type: "input",
                    message: "What is your employee ID (engineer)?"
                },
                {
                    name: "engineerEmail",
                    type: "input",
                    message: "What is your email (engineer)?"
                },
                {
                    name: "gitHubUsername",
                    type: "input",
                    message: "What is your GitHub username?"
                }
            ]).then(userChoice => {
                console.log(userChoice);
                const engineer = new Engineer(userChoice.engineerName, userChoice.engineerID, userChoice.engineerEmail, userChoice.gitHubUsername)
                teamMembers.push(engineer)

                createTeam();
            });
    }

    function addIntern() {
        inquirer
            .prompt([
                {
                    name: "internName",
                    type: "input",
                    message: "What is your first name (intern)?"
                },
                {
                    name: "internID",
                    type: "input",
                    message: "What is your employee ID (intern)?"
                },
                {
                    name: "internEmail",
                    type: "input",
                    message: "What is your email (intern)?"
                },
                {
                    name: "internSchool",
                    type: "input",
                    message: "What school have you graduated?"
                }
            ]).then(userChoice => {
                console.log(userChoice);
                const intern = new Intern(userChoice.internName, userChoice.internID, userChoice.internEmail, userChoice.internSchool)
                teamMembers.push(intern)

                createTeam();
            });
    }
}

module.exports = teamMembers

createTeam();
