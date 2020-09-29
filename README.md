# OOP Template-Engine Employee-Summary

## Instructions

Build a software engineering team generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. This assignment must also pass all unit tests. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:

## a directory structure
```
lib/           // classes and helper code
output/        // rendered output
templates/     // HTML template(s)
test/          // jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
app.js         // Runs the application
```
## App Setup
1. Make a package.json file by running `npm init` from the command line.

2. Make a package-lock.json file and node_modules folder by running `npm install` from the command line.

### User input

The project must prompt the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

Prompt will ask user to put the info about team :

`Manager`::
* managerName
* managerID
* managerEmail
* managerOfficeNumber

`Engineer`::
* engineerName
* engineerID
* engineerEmail
* gitHubUsername

`Intern` ::
* internName
* internID
* internEmail
* internSchool (The school that Intern have graduated)

### Roster output

The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

  * Name

  * Role

  * ID

  * Role-specific property (School, link to GitHub profile, or office number)
