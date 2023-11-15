<?php

require_once '../../Config/Database.php';

class Course
{
    private $db;

    public function __construct()
    {
        $database = new Database();
        $this->db = $database->getConnection();
    }

    public function getAll()
    {
        $query = "SELECT clases.id, concat(profesores.nombre, ' ',profesores.apellido) as nombre_profesor,
            concat(alumnos.nombre, ' ',alumnos.apellido) as nombre_alumno,
            libros.nombre
        FROM clases
        JOIN profesores ON profesores.id = clases.profesor_id
        JOIN alumnos ON alumnos.id = clases.alumno_id
        JOIN libros ON libros.id = clases.libro_id;";
        $result = $this->db->query($query);

        if ($result === false) {
            die("Error en la consulta: " . $this->db->error);
        }

        $profesores = array();

        while ($row = $result->fetch_assoc()) {
            $profesores[] = $row;
        }

        $result->free();
        return $profesores;
    }

    public function add($courseData)
    {
        $query = "INSERT INTO clases (profesor_id, alumno_id, libro_id)
            VALUES ('{$courseData["course_teacher"]}', '{$courseData["course_student"]}', '{$courseData["course_book"]}')";

        $stmt = $this->db->query($query);

        if ($stmt === false) {
            die("Error en la consulta: " . $this->db->error);
        }

        return $stmt;
    }

    public function delete($courseId) {
        $query = "delete from clases where id=$courseId limit 1;";

        $stmt = $this->db->query($query);

        if ($stmt === false) {
            die("Error en la consulta: " . $this->db->error);
        }

        return $stmt;
    }
}
