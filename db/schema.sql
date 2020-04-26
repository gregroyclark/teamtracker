DROP DATABASE IF EXISTS;

CREATE database trackerDB;
USE trackerDB;

CREATE TABLE department (
  id INT PRIMARY KEY,  
  dept_name VARCHAR(30),  
);

CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL(10,4) NULL
)