DROP DATABASE IF EXISTS;

CREATE database trackerDB;
USE trackerDB;

CREATE TABLE department (
    id INT PRIMARY KEY,
    dept_name VARCHAR(30),
);