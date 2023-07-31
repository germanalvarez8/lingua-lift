INSERT INTO alumnos (nombre, apellido, dni, edad, nacionalidad, residencia, horas_cursado, telefono, mail, objetivo, atraso_pagos, activo)
VALUES
    ('Lucía', 'Gómez', '40123456', 18, 'Argentina', 'Argentina', 20, '111111111', 'lucia@example.com', 'Obtener buenas calificaciones', 0, 1),
    ('Juan', 'Martínez', '40987654', 21, 'Argentina', 'Argentina', 15, '222222222', 'juan@example.com', 'Mejorar en matemáticas', 0, 1),
    ('Sofía', 'Rodríguez', '39876543', 25, 'Argentina', 'Argentina', 10, '333333333', 'sofia@example.com', 'Aprender más sobre historia', 0, 1),
    ('Mateo', 'López', '38987654', 22, 'Argentina', 'Argentina', 12, '444444444', 'mateo@example.com', 'Interesado en literatura', 0, 1),
    ('Valentina', 'Fernández', '39123456', 20, 'Argentina', 'Argentina', 18, '555555555', 'valentina@example.com', 'Prepararse para física', 0, 1),
    ('Tomás', 'González', '41234567', 19, 'Argentina', 'Argentina', 14, '666666666', 'tomas@example.com', 'Química avanzada', 0, 1),
    ('Martina', 'Sánchez', '40987656', 23, 'Argentina', 'Argentina', 22, '777777777', 'martina@example.com', 'Biología y ciencias naturales', 0, 1),
    ('Lautaro', 'Pérez', '39876567', 24, 'Argentina', 'Argentina', 8, '888888888', 'lautaro@example.com', 'Interesado en geografía', 0, 1),
    ('Isabella', 'Ramírez', '41123456', 26, 'Argentina', 'Argentina', 16, '999999999', 'isabella@example.com', 'Educación física y deportes', 0, 1),
    ('Thiago', 'Mendoza', '40123457', 20, 'Argentina', 'Argentina', 9, '101010101', 'thiago@example.com', 'Artes plásticas y creatividad', 0, 1);

INSERT INTO profesores (dni, nombre, apellido, edad, nacionalidad, pais_residencia, horas_disponibles, titulo, ocupacion, trabaja_ninos, activo)
VALUES
    ('40928479', 'Juan', 'Perez', '30', 'Argentina', 'Argentina', FLOOR(RAND() * 7), '1', 'Profesor de Matemáticas', '1', '1'),
    ('30928478', 'María', 'López', '28', 'Argentina', 'Argentina', FLOOR(RAND() * 7), '1', 'Profesora de Historia', '1', '1'),
    ('20938477', 'Pedro', 'González', '35', 'Argentina', 'Argentina', FLOOR(RAND() * 7), '1', 'Profesor de Literatura', '1', '1'),
    ('10928476', 'Laura', 'Fernández', '32', 'Argentina', 'Argentina', FLOOR(RAND() * 7), '1', 'Profesora de Física', '1', '1'),
    ('90928765', 'Carlos', 'Rodríguez', '27', 'Argentina', 'Argentina', FLOOR(RAND() * 7), '1', 'Profesor de Química', '1', '1'),
    ('80928764', 'Ana', 'Martínez', '33', 'Argentina', 'Argentina', FLOOR(RAND() * 7), '1', 'Profesora de Biología', '1', '1'),
    ('70928763', 'Jorge', 'Gómez', '29', 'Argentina', 'Argentina', FLOOR(RAND() * 7), '1', 'Profesor de Geografía', '1', '1'),
    ('60928762', 'Mariano', 'Sánchez', '31', 'Argentina', 'Argentina', FLOOR(RAND() * 7), '1', 'Profesor de Educación Física', '1', '1'),
    ('50928761', 'Silvia', 'Romero', '34', 'Argentina', 'Argentina', FLOOR(RAND() * 7), '1', 'Profesora de Artes Plásticas', '1', '1'),
    ('40928760', 'Lucas', 'Gutiérrez', '26', 'Argentina', 'Argentina', FLOOR(RAND() * 7), '1', 'Profesor de Música', '1', '1');

INSERT INTO pagos_alumnos (alumno_id, mes, monto, cambio)
VALUES
    (1, 'Julio', 1000, 'ARS'),
    (2, 'Julio', 900, 'ARS'),
    (3, 'Julio', 800, 'ARS'),
    (4, 'Julio', 1100, 'ARS'),
    (5, 'Julio', 1200, 'ARS'),
    (6, 'Julio', 750, 'ARS'),
    (7, 'Julio', 850, 'ARS'),
    (8, 'Julio', 950, 'ARS'),
    (9, 'Julio', 700, 'ARS'),
    (10, 'Julio', 600, 'ARS');

INSERT INTO pagos_profesores (profesor_id, mes, monto, cambio, pagado)
VALUES
    (1, 'Julio', 3000, 'ARS', 1),
    (2, 'Julio', 3200, 'ARS', 1),
    (3, 'Julio', 2800, 'ARS', 1),
    (4, 'Julio', 3400, 'ARS', 1),
    (5, 'Julio', 3100, 'ARS', 1),
    (6, 'Julio', 2900, 'ARS', 1),
    (7, 'Julio', 3300, 'ARS', 1),
    (8, 'Julio', 3500, 'ARS', 1),
    (9, 'Julio', 2700, 'ARS', 1),
    (10, 'Julio', 2600, 'ARS', 1);

INSERT INTO libros (nombre, editorial, dificultad, fecha_publicacion, status)
VALUES
    ('English Grammar and Usage', 'Inglés Publishing', 'B2', '2022-01-01', 1),
    ('Intermediate English Conversation', 'Inglés Publishing', 'C1', '2021-07-15', 1),
    ('Advanced English Vocabulary', 'Inglés Publishing', 'C2', '2023-03-20', 1),
    ('Business English for Professionals', 'Inglés Publishing', 'B2', '2020-11-10', 1),
    ('Academic Writing in English', 'Inglés Publishing', 'A2', '2022-08-30', 1),
    ('English Literature Classics', 'Inglés Publishing', 'B2', '2019-05-22', 1),
    ('TOEFL Preparation Guide', 'Inglés Publishing', 'C2', '2023-02-18', 1),
    ('English for Travelers', 'Inglés Publishing', 'A1', '2021-12-05', 1);

INSERT INTO clases (profesor_id, alumno_id, libro_id)
VALUES
    (1, (SELECT id FROM alumnos ORDER BY RAND() LIMIT 1), (SELECT id FROM libros ORDER BY RAND() LIMIT 1)),
    (3, (SELECT id FROM alumnos ORDER BY RAND() LIMIT 1), (SELECT id FROM libros ORDER BY RAND() LIMIT 1)),
    (5, (SELECT id FROM alumnos ORDER BY RAND() LIMIT 1), (SELECT id FROM libros ORDER BY RAND() LIMIT 1)),
    (8, (SELECT id FROM alumnos ORDER BY RAND() LIMIT 1), (SELECT id FROM libros ORDER BY RAND() LIMIT 1));
