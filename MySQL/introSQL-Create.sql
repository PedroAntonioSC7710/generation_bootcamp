-- Crear 

-- Crear una base de datos
-- CREATE SCHEMA familia;
CREATE DATABASE familia;

-- Seleccionar ña base de datos
USE familia;

-- Crear tabla de persona, es necesario poner minimo una columna
-- No es necesario poner NOT NULL en llave primaria
-- Por defecto el valor asignado es NULL
-- Debemos especificar cual es la llave primaria
-- Para agregar valores unicos se utiliza UNIQUE
CREATE TABLE persona(
	persona_id int AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    edad int NOT NULL,
    estado VARCHAR(255) DEFAULT "Desconocido",
    cumpleanios DATE,
    PRIMARY KEY(persona_id),
    CONSTRAINT email_unico UNIQUE(CORREO)
);




















