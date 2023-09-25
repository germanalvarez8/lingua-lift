<?php

require_once '../../Config/Database.php';

class Student
{
    private $db;

    public function __construct()
    {
        $database = new Database();
        $this->db = $database->getConnection();
    }

    public function getAll() {
        $query = "SELECT * FROM alumnos";
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

    public function add($studentData) {
        $trabaja_ninos = 1;
        $activo = 1;

        $query = "INSERT INTO alumnos (nombre, apellido, dni, edad, nacionalidad, residencia, horas_cursado, telefono, mail, objetivo, atraso_pagos, activo)
            VALUES ('{$studentData["student_name"]}', '{$studentData["student_last_name"]}', '{$studentData["student_dni"]}', '{$studentData["student_age"]}', '{$studentData["student_country"]}', '{$studentData["student_residency"]}', '{$studentData["student_weekly_hours"]}', '{$studentData["student_phone"]}', 'german', 'pito', '{$studentData["student_debts"]}', {$activo})";

        $stmt = $this->db->query($query);

        if ($stmt === false) {
            die("Error en la consulta: " . $this->db->error);
        }

        return $stmt;
    }

    public function delete($studentId) {
        $query = "delete from alumnos where id=$studentId limit 1;";

        $stmt = $this->db->query($query);

        if ($stmt === false) {
            die("Error en la consulta: " . $this->db->error);
        }

        return $stmt;
    }
}
