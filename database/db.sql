-- creating the db
CREATE DATABASE crud_test;

-- using the db
use crud_test;

-- creating a table
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- to show tables
SHOW TABLES;

-- to describe the table
describe customer;