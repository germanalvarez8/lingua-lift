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
        $query = "INSERT INTO profesores (dni, nombre, apellido, edad, nacionalidad, pais_residencia, horas_disponibles, titulo, ocupacion, trabaja_ninos, activo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        $stmt = $this->db->prepare($query);

        $trabaja_ninos = 1;
        $activo = 1;

        $values = [
            $teacherData["dni"],
            $teacherData["nombre"],
            $teacherData["apellido"],
            (int) $teacherData["edad"],
            $teacherData["nacionalidad"],
            $teacherData["pais_residencia"],
            (int) $teacherData["horas_disponibles"],
            $teacherData["titulo"],
            $teacherData["ocupacion"],
            $trabaja_ninos,
            $activo
        ];

        $refs = [];
        foreach ($values as $key => $value) {
            $refs[$key] = &$values[$key];
        }

        call_user_func_array([$stmt, 'bind_param'], array_merge(['sssisssisss'], $refs));

        $stmt->execute();

        return $stmt;
    }

    public function delete($teacherId) {
        $query = "delete from profesores where id=$teacherId limit 1";

        $stmt = $this->db->prepare($query);
        return $stmt->execute();
    }
}
