DROP DATABASE IF EXISTS Ctf_Rbk;

CREATE DATABASE Ctf_Rbk;

USE Ctf_Rbk;

CREATE TABLE teams (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  password varchar(250) NOT NULL,
  score int NOT NULL Default 0,
  salt varchar(250) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE Challanges (
  id int NOT NULL AUTO_INCREMENT,
  Challange_name varchar(50) NOT NULL,
  Author varchar(50) NOT NULL,
  Challange_Link varchar(50) NOT NULL,
  Hint varchar(250) NOT NULL,
  Flag varchar(50) NOT NULL,
  Difficulty varchar(50) NOT NULL,
  points int NOT NULL,
  type varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE teams_challanges(
  id int NOT NULL AUTO_INCREMENT,
  Team_id int NOT NULL ,
  Challange_id int NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (Team_id) References teams(id),
  FOREIGN KEY (Challange_id) References Challanges(id)
);

CREATE TABLE sessions(
    id int NOT NULL AUTO_INCREMENT,
    Team_id int NOT NULL ,
    session varchar(250) NOT NULL,
    date varchar(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (Team_id) References teams(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
