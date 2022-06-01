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



-- Insertar datos en una tabla 
-- Tienen que ser en ek orden indicado 
-- No se necesita colocar el id por que es autoincrementable
INSERT INTO persona(nombre, correo, edad, estado, cumpleanios) values
('Pedro','pedro@gmail.com',18,'Feliz','2003-12-10'),
('Antonio','antonio@gmail',27,'Triste','1994-04-10');

-- Error 1062: dato unico repetido
INSERT INTO persona(nombre, correo, edad, estado, cumpleanios) values
('Pepe', 'antonio@gmail', 34,'Alegre','1980-01-01');

-- Erro 1364: No llenar un dato NOT NULL
INSERT INTO persona(correo, edad, estado, cumpleanios) values
('pepe@gmail',34,'Alegre','1980-01-01'); 

-- Ingresar datos que no son necesarios (No tiene el cumpleanios)
INSERT INTO persona(nombre, correo, edad, estado) values
('Pepe','pepe@gmail.com',34,'Alegre');

-- Ingresar dato con valor por defecto (No tiene el estado)
INSERT INTO persona(nombre, correo, edad, cumpleanios) values
('Toño','ton@gmail.com',40,'1970-10-10');

SELECT * FROM persona;


CREATE TABLE mascota (
mascota_id int AUTO_INCREMENT,
nombre VARCHAR(255) NOT NULL,
edad int NOT NULL,
fk1_persona int NOT NULL,
PRIMARY KEY(mascota_id),
FOREIGN KEY (fk1_persona) REFERENCES persona(persona_id)
ON DELETE CASCADE
ON UPDATE CASCADE
);

SELECT * FROM mascota;

INSERT INTO mascota (nombre, edad, fk1_persona) values
('Loki',5,1);

INSERT INTO mascota (nombre, edad, fk1_persona) values
('Pecas',11,1);

INSERT INTO mascotita (nombre, edad, fk1_persona) values
('Ben',7,2),
('Patitas',3,4);

INSERT INTO mascotita (nombre, edad, fk1_persona) values
('Solovino',2,5);






