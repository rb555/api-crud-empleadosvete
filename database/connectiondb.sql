CREATE DATABASE IF NOT EXISTS veterinaria;
USE veterinaria;

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT,
    nombre_apellido VARCHAR(100) NOT NULL,
    domicilio VARCHAR(25) NOT NULL,
    sector VARCHAR(20) NOT NULL,
    cargo VARCHAR(30) NOT NULL,
    usuario VARCHAR(8) NOT NULL,
    clave VARCHAR(8) NOT NULL,
    PRIMARY KEY (id)
);

