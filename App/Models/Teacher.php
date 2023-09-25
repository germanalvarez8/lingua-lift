<?php

require_once '../../Config/Database.php';

class Teacher
{
    private $db;

    public function __construct()
    {
        $database = new Database();
        $this->db = $database->getConnection();
    }

    public function getAll() {
        $query = "SELECT * FROM profesores";
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

    public function add($teacherData) {
        $trabaja_ninos = 1;
        $activo = 1;

        $query = "INSERT INTO profesores (dni, nombre, apellido, edad, nacionalidad, pais_residencia, horas_disponibles, titulo, ocupacion, trabaja_ninos, activo)
            VALUES ('{$teacherData["teacher_dni"]}',
                '{$teacherData["teacher_name"]}',
                '{$teacherData["teacher_last_name"]}',
                '{$teacherData["teacher_age"]}',
                '{$teacherData["teacher_country"]}',
                '{$teacherData["teacher_residency"]}',
                '{$teacherData["teacher_weekly_hours"]}',
                '{$teacherData["teacher_title"]}',
                '{$teacherData["teacher_occupation"]}',
                '{$trabaja_ninos}',
                '{$activo}')";

        $stmt = $this->db->query($query);

        if ($stmt === false) {
            die("Error en la consulta: " . $this->db->error);
        }

        return $stmt;
    }

    public function delete($teacherId) {
        $query = "delete from profesores where id=$teacherId limit 1";

        $stmt = $this->db->prepare($query);
        return $stmt->execute();
    }
}
