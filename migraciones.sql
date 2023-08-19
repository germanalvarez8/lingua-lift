CREATE DATABASE IF NOT EXISTS lingua_lift;

USE lingua_lift;

CREATE TABLE IF NOT EXISTS libros (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre CHAR(50) NOT NULL,
    editorial CHAR(50) NOT NULL,
    dificultar ENUM('A2', 'A2', 'B1', 'B2', 'C1', 'C2') NOT NULL
    fecha_publicacion DATE,
    status INT(1) NOT NULL DEFAULT 1
);

CREATE TABLE IF NOT EXISTS alumnos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre CHAR(50) NOT NULL,
    apellido CHAR(50) NOT NULL,
    dni CHAR(50) NOT NULL,
    edad INT NOT NULL,
    nacionalidad CHAR(50) NOT NULL,
    residencia CHAR(50) NOT NULL,
    horas_cursado INT,
    telefono CHAR(50),
    mail CHAR(50),
    objetivo CHAR(50),
    atraso_pagos INT(1) DEFAULT 0,
    activo INT(1) NOT NULL DEFAULT 1,
    UNIQUE (dni)
);

CREATE TABLE IF NOT EXISTS profesores (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dni CHAR(50) NOT NULL,
    nombre CHAR(50),
    apellido CHAR(50) NOT NULL,
    edad CHAR(50) NOT NULL,
    nacionalidad CHAR(50) NOT NULL,
    pais_residencia CHAR(50) NOT NULL,
    horas_disponibles CHAR(50) NOT NULL,
    titulo INT(1) NOT NULL,
    ocupacion CHAR(50) NOT NULL,
    trabaja_ninos INT(1) NOT NULL,
    activo INT(1) NOT NULL DEFAULT 1,
    UNIQUE (dni)
);

CREATE TABLE IF NOT EXISTS clases (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    profesor_id INT NOT NULL,
    alumno_id INT NOT NULL,
    libro_id INT NOT NULL,
    FOREIGN KEY (profesor_id) REFERENCES profesores(id) ON DELETE CASCADE,
    FOREIGN KEY (alumno_id) REFERENCES alumnos(id) ON DELETE CASCADE,
    FOREIGN KEY (libro_id) REFERENCES libros(id) ON DELETE CASCADE,
    UNIQUE (profesor_id, alumno_id, libro_id)
);

CREATE TABLE IF NOT EXISTS pagos_alumnos (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    alumno_id INT NOT NULL,
    mes CHAR(50) NOT NULL,
    monto INT NOT NULL,
    cambio VARCHAR(50) NOT NULL DEFAULT 'ARS',
    FOREIGN KEY (alumno_id) REFERENCES alumnos(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS pagos_profesores (
    profesor_id INT NOT NULL,
    mes CHAR(50) NOT NULL,
    monto INT NOT NULL,
    cambio VARCHAR(50) NOT NULL,
    pagado INT(1) NOT NULL,
    FOREIGN KEY (profesor_id) REFERENCES profesores(id) ON DELETE CASCADE
);
