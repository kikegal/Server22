CREATE DATABASE IF NOT EXISTS server22;

USE server22;

CREATE TABLE tours (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    price INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE tours;

INSERT INTO tours VALUES
(1, 'Búzios', 200),
(2, 'Arraial', 250),
(3, 'Cabo Frio', 180),
(4, 'Petrópolis', 300);



DELETE * FROM tours WHERE id= ;