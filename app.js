// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// array to push new employees to
let employees = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

const managerQuestions = [
    {
        type: 'input',
        message: 'What is the team manager\'s name?',
        name: 'name'
    },
    
    {
        type: 'input',
        message: 'What is the team manager\'s id?',
        name: 'id'
    },
    
    {
        type: 'input',
        message: 'What is the team manager\'s email?',
        name: 'email'
    },
    
    {
        type: 'input',
        message: 'What is the team manager\'s office number?',
        name: 'officeNum'
    },
    
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'role',
        choices:  ['Engineer', 'Intern', 'I do not need to add anymore members'],
    }
]
const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the team engineer\'s name?',
        name: 'name'
    },
    
    {
        type: 'input',
        message: 'What is the team engineer\'s id?',
        name: 'id'
    },
    
    {
        type: 'input',
        message: 'What is the team engineer\'s email?',
        name: 'email'
    },
    
    {
        type: 'input',
        message: 'What is the team engineer\'s GitHub username?',
        name: 'github'
    },
    
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'role',
        choices:  ['Engineer', 'Intern', 'I do not need to add anymore members'],
    }
]
const internQuestions = [
    {
        type: 'input',
        message: 'What is the team intern\'s name?',
        name: 'name'
    },
    
    {
        type: 'input',
        message: 'What is the team intern\'s id?',
        name: 'd'
    },
    
    {
        type: 'input',
        message: 'What is the team intern\'s email?',
        name: 'email'
    },
    
    {
        type: 'input',
        message: 'What is the team intern\'s school?',
        name: 'school'
    },
    
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'role',
        choices:  ['Engineer', 'Intern', 'I do not need to add anymore members'],
    }
]


function initAll() {
    inquirer.prompt(managerQuestions)
    
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
        employees.push(manager);
        
        if(answers.role === "Engineer") {
            engineerDetails();
        } else if (answers.role === "Intern") {
            internDetails();
        } else {
            console.log('Thanks for adding your team members');
            renderHTML();
            return;
        }
    
    })
}

function engineerDetails () {
    inquirer.prompt(engineerQuestions)
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employees.push(engineer);
        
        if(answers.role === "Engineer") {
            engineerDetails();
        } else if (answers.role === "Intern") {
            internDetails();
        } else {
            console.log('Thanks for adding your team members');
            renderHTML();
            return;
        }
    })
}

function internDetails () {
    inquirer.prompt(internQuestions)
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employees.push(intern);
        
        if(answers.role === "Engineer") {
            engineerDetails();
        } else if (answers.role === "Intern") {
            internDetails();
        } else {
            console.log('Thanks for adding your team members');
            renderHTML();
            return;
        }
    })
}



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

function renderHTML() {
    fs.mkdir(OUTPUT_DIR);
    fs.writeFile(outputPath, render(employees), err =>{
        if (err) {
            return console.log(err);
        } else {
            console.log("File generated");
        }
    })
}

// Calling functions
initAll();
