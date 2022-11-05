
  ## Description

This app is a functioning database for an e-commerce company.  The database contains three tables of data: Products, Categories, and Tags.  The three different tables have relations to each other.  A category has many products, and a product belongs to one category.  A product has many tags, and a tag has many products.  With these relationships established along with the ability to view, create, update, and delete anything from the data, the database is very versitile and could be used for a variety of companies

  [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)


  ## Link to a Demo Video of the Application
  https://youtu.be/2LzritDXc4I

  ## Table of Contents

 
  * [Technologies Used](#technologies-used)
  * [Notable Features](#notable-features)
  * [Notable Methods](#notable-methods)
  * [Code Snippets](#code-snippets)
  * [Installation](#installation)<br />
  * [Contributing to This Repository](#how-to-contribute-to-this-repository)<br />
  * [Tests](#to-run-tests-run-the-following-command)<br />
  * [Questions](#questions)<br />

  ## Technologies Used
  - SQL, MYSQL shell, and Sequelize
  - Javascript
  - Node.JS
  - Express.JS
 
  
  ## Notable Features
  - User can add and change the data stored in the SQL database
  - Program runs indefinitely, allowing the user to perform as many actions as they want

  ## Notable Methods
  - Creating and using databases and tables in SQL
  - Creating a connection to the .sql files with MYSQL and performing queries to manipulate the data in those files
  - Populating the SQL tables with a seed file
  - Using "JOIN" methods to create custom tables with SQL data
  - Utilizing the setTimeout function to work around synchrony issues with inquirer


 ## Code Snippets
 Here we have en example of nesting setTimeout functionality in order to deal with the timing issues of inquirer.  I wanted certain tables to be displayed above certain questions to allow the user to see the options that they are choosing from.  I would probably go with a list prompt next time and populate the choices with string literals
```javascript
function updateEmployeeRole(){
    let empID
    let role
    viewAllEmployees()
        setTimeout(() =>{
            inquirer.prompt([
                {
                    type: "number",
                    name: "employeeId",
                    message: "Above is a list of employees.  Which employee's role would you like to update? (Enter the ID number only)"
                }
              
            ])
            .then((data) =>{
                empID = data.employeeId
                viewAllRoles()
                setTimeout(() => {
                    inquirer.prompt([
                        {
                            type: "number",
                            name: "newRole",
                            message: "above is a list of roles.  Select the ID of the employee's new role"
                        }
                    ])
                    .then((data) =>{
                        role = data.newRole
                        db.query(`UPDATE employees SET role_id = ${role} WHERE id = ${empID};`, function (err, results){
                            if(err){
                                console.log(err)
                            }else{
                                console.log("")
                                console.log(`role has been updated!`)
                                console.log("")
                                mainMenu()
                            }
                            
                        })
                    })
                }, 400)
            })
            }, 200)
}
```
Here we have a complex database query involving multiple JOINs and aliases.  This was the hardest part of the project
```javascript
function viewAllEmployees(exectuteCB=false){
    db.query(`SELECT employees.id, employees.first_name, employees.last_name, role.title AS title, role.salary AS salary, department.name AS department, CONCAT (manager.first_name, " ", manager.last_name) AS manager FROM employees LEFT JOIN role ON employees.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employees manager ON employees.manager_id = manager.id`, function (err, results){
        console.log("")
        console.table(results)
        if(exectuteCB == true){
            updateEmployeeRole()
        }
    })
}
```
 ## Installation

   To install this program, navigate to the root folder in your terminal.  Then run the command: npm init, followed by the command: npm install. Then navigate into the "db" folder and sign into mysql shell with the command: mysql -u root -p.  Then, to populate the data tables, run the command: source schema.sql, followed by the command: source seeds.sql. Then navigate back to the root folder and run node index.js and the program should begin in the terminal!

    
  ## How to Contribute to This Repository:

    Contact me via email (see below)
    
  ## To run tests, run the following command:

    no tests required

    
  ## Questions
  If you have any questions about this project, feel free to reach out to me at:
  <a href="MSeaman26@gmail.com">MSeaman26@gmail.com</a>.  
  To see more of my work, please visit:
  <a href="https://github.com/MSeaman26">My Github Page</a>





