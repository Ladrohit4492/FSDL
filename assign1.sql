CREATE DATABASE FSDL_Project;

USE FSDL_Project;

CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    Name VARCHAR(50),
    Age INT,
    Course VARCHAR(50)
);

INSERT INTO Students VALUES
(1, 'Rohit', 20, 'Computer Engineering'),
(2, 'Amit', 21, 'Information Technology'),
(3, 'Sneha', 19, 'Artificial Intelligence');

SELECT * FROM Students;

UPDATE Students
SET Age = 22
WHERE StudentID = 2;

DELETE FROM Students
WHERE StudentID = 3;

SELECT * FROM Students;
