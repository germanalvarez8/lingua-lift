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

    public function add($teacherData) {
        $trabaja_ninos = 1;
        $activo = 1;

        $query = "INSERT INTO alumnos (nombre, apellido, dni, edad, nacionalidad, residencia, horas_cursado, telefono, mail, objetivo, atraso_pagos, activo)
            VALUES ('{$teacherData["student_name"]}', '{$teacherData["student_last_name"]}', '{$teacherData["student_dni"]}', '{$teacherData["student_age"]}', '{$teacherData["student_country"]}', '{$teacherData["student_residency"]}', '{$teacherData["student_weekly_hours"]}', '{$teacherData["student_phone"]}', 'german', 'pito', '{$teacherData["student_debts"]}', {$activo})";

        $stmt = $this->db->query($query);

        if ($stmt === false) {
            die("Error en la consulta: " . $this->db->error);
        }

        return $stmt;
    }
}
