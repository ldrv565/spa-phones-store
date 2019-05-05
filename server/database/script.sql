CREATE TABLE model( 
id_model INT NOT NULL, 
name VARCHAR(100) NOT NULL,
id_category INT NOT NULL, 
id_vendor INT NOT NULL,
description TEXT NOT NULL,
PRIMARY KEY (id_model) 
); 

CREATE TABLE vendor( 
id_vendor INT NOT NULL, 
name VARCHAR(100) NOT NULL,
id_category INT NOT NULL,
PRIMARY KEY (id_vendor) 
); 

CREATE TABLE category( 
id_category INT NOT NULL, 
name VARCHAR(100) NOT NULL,
uniqName VARCHAR(100) NOT NULL,
id_parent INT,
PRIMARY KEY (id_category) 
); 

CREATE TABLE detail( 
id_detail INT NOT NULL, 
name VARCHAR(100) NOT NULL,
id_category INT NOT NULL,
id_parent_detail INT,
PRIMARY KEY (id_detail) 
); 

CREATE TABLE detail_value( 
id_detail_value INT NOT NULL, 
value VARCHAR(100) NOT NULL,
unit VARCHAR(100) NOT NULL,
id_category INT NOT NULL,
id_vendor INT NOT NULL, 
id_model INT NOT NULL, 
id_detail INT NOT NULL, 
PRIMARY KEY (id_detail_value) 
); 

CREATE TABLE model_order( 
id_model_order SERIAL PRIMARY KEY,
id_order INT REFERENCES order_table(id_order) NOT NULL,
id_model INT REFERENCES model(id_model) NOT NULL,
count INT NOT NULL
); 

CREATE TABLE order_table( 
id_order SERIAL PRIMARY KEY, 
id_user INT REFERENCES user_table(id_user) NOT NULL
); 

CREATE TABLE user_table(
id_user SERIAL PRIMARY KEY,
login VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL
);


update detail_value
set id_model = 0
where id_model = 50647