DROP DATABASE IF EXISTS trackerDB;

CREATE database trackerDB;
USE trackerDB;

CREATE TABLE department (
  id INT PRIMARY KEY,  
  dept_name VARCHAR(30), 
  dept_id INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(30),
  salary DECIMAL(10,4) NULL
);

CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NULL,
  manager_id INT NULL
);