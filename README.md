
  ## Description

This app creates a functioning database for an e-commerce company.  The database contains three tables of data: Products, Categories, and Tags.  There is a fourth table that serves as a “lookup” table to establish a relationship between Tags and Products. The three different tables have certain relationships to each other.  A category has many products, and a product belongs to one category.  A product has many tags, and a tag has many products.  With these relationships established along with the ability to view, create, update, and delete anything from the data, the database is very versatile and could be used for a variety of companies.  This project involved starter-code, made by the coding bootcamp that I am attending.  The starter code was flawed and caused bugs, but ultimately the program works

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
  - Insomnia
  - Dotenv
  - Express 
  ## Notable Features
  - A versatile database with relational mapping
  - Allows user to view, create, update, and delete various kinds of data and the relationships remain intact throughout

  ## Notable Methods
  - Writing routes for all the different kinds of data manipulation
  - Using Model objects to define the SQL tables and the behavior of each column
  - Using Sequelize associations to create relationships between our data tables
  - Using modularized seed files to seed the data
  - Using Insomnia to test our routes


 ## Code Snippets
    Here are our Sequelize associations.  They are vital when it comes to building the behavior of the data tables
```javascript
    // Products belongsTo Category
Product.belongsTo(Category, {foreignKey: "category_id", onDelete: 'CASCADE'});
// Categories have many Products
Category.hasMany(Product, {foreignKey: "category_id"});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {through: ProductTag, foreignKey: "product_id",});
// // Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: ProductTag, foreignKey: "tag_id"});
```
Here is an example of a route.  This particular route is for update a tag, referencing it by its ID number
```javascript
    router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = Tag.update({
      tag_name: req.body.tag_name
    },
    {
      where:{
        id: req.params.id
      }
    })
    res.status(200).json({message: "tag has been updated!"})
  }
  catch (err){
    res.status(400).json(err)
  }
});
```
 ## Installation

   To install this program, navigate to the root folder of the project in your terminal.  Then run the command: npm init, followed by the command: npm install. Then navigate into the "db" folder and sign into mysql shell with the command: mysql -u root -p.  Then, load the database, run the command: source schema.sql. Then navigate back to the root folder and enter the command: npm run seed. Now that the database is seeded with data, run the command: node server.js.  Once the server is up and running, interact with the routes using the program Insomnia

    
  ## How to Contribute to This Repository:

    Contact me via email (see below)
    
  ## To run tests, run the following command:

    no tests required

    
  ## Questions
  If you have any questions about this project, feel free to reach out to me at:
  <a href="MSeaman26@gmail.com">MSeaman26@gmail.com</a>.  
  To see more of my work, please visit:
  <a href="https://github.com/MSeaman26">My Github Page</a>






