DROP DATABASE ForProject;
CREATE DATABASE ForProject;
USE ForProject;
CREATE TABLE USER (    
 USER_ID INT AUTO_INCREMENT PRIMARY KEY,    
 USER_NAME VARCHAR(20) NOT NULL
 );

CREATE TABLE POST (    
POST_ID INT AUTO_INCREMENT PRIMARY KEY,    
USER_ID INT,    
FOREIGN KEY (USER_ID) REFERENCES USER(USER_ID),    
POST_DESCRIPTION VARCHAR(200) NOT NULL,   
 CREATED_AT DATETIME NOT NULL,    
 PHOTO_LINK VARCHAR(1000),   
 LIKES INT 
 );
INSERT INTO USER  VALUES 
(1, 'Adam'), 
(2, 'Adam'), 
(3, 'Joe'), 
(4, 'Sandy'), 
(5, 'User'), 
(6, 'Victor'), 
(7, 'User_1'), 
(8, 'Alex'), 
(9, 'Sam'), 
(10, 'Mimi');

INSERT INTO POST VALUES 
(1, 1, 'lolololo', '2020-01-01 23:00:00', '', 3), 
(2, 2, 'hello', '2020-03-01 10:00:00', '', 0), 
(3, 2, 'hello, world', '2020-02-02 09:00:00', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iea.org%2Ftopics%2Fworld-energy-outlook&psig=AOvVaw0wu-meL-Sk86wMmpXbiPSB&ust=1589983634153000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDhveCMwOkCFQAAAAAdAAAAABAD', 6), 
(4, 2, 'hi', '2020-03-01 09:01:00', '', 4), 
(5, 2, 'post', '2020-03-03 07:11:00', '', 4), 
(6, 6, 'check', '2020-03-01 08:11:00', '', 2), 
(7, 7, 'very important information', '2020-05-19 07:11:00', '', 4), 
(8, 7, 'nope', '2020-05-19 09:11:00', '', 3), 
(9, 7, 'hello', '2020-05-19 13:11:00', '', 10), 
(10, 7, 'bsu', '2020-05-19 07:11:00', '', 10000);


