# CRUD-web-test

## Description
This project is an enhanced CRUD (Create, Read, Update, Delete) web application, evolved from a basic version inspired by [FaztCode's tutorial](https://www.youtube.com/watch?v=VxRXlUrV6y0&t=3496s&ab_channel=FaztCode). It demonstrates CRUD operations with a user-friendly interface, using Node.js and MySQL. Significant improvements include real-time filtering through the database and an update from CommonJS to ES6 module syntax, reflecting modern JavaScript practices.

## Installation

### Prerequisites
- Node.js
- MySQL

### Steps
1. Clone the repository: `git clone [repository link]`
2. Navigate to the project directory: `cd [project name]`
3. Install the dependencies: `npm install`
4. Set up your MySQL database and update the connection settings in `[database/db.sql]`
5. Start the server: `npm start`
6. Open your browser and go to `http://localhost:3000/`

## Features
- Create new customer records with name, email, and phone fields.
- Read and view existing customer records in a dynamic table.
- Update customer details through an intuitive interface.
- Delete customer records securely.
- Filter customer records in real-time without page reloads.

## Dependencies
- EJS for templating
- Express as the web framework
- Express-myconnection for database interaction
- Morgan for HTTP request logging
- MySQL for database management

## Dev Dependencies
- Nodemon for automatic server restarts during development

## Contributing
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/YourFeature`)
6. Open a pull request

## License
This project is open-sourced under the [MIT license](LICENSE).

## Authors and Acknowledgment
- Andrés Jaramillo - Significant enhancements and current maintenance
- Special thanks to FaztCode for the [original tutorial](https://www.youtube.com/watch?v=VxRXlUrV6y0&t=3496s&ab_channel=FaztCode), which served as the starting point for this project.

## Contact
For queries or collaborations, feel free to connect with me on [LinkedIn](www.linkedin.com/in/andres-jarab) or my email [andresjaramillo7777@gmail.com](mailto:andresjaramillo7777@gmail.com).