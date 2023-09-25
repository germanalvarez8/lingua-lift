<?php

require_once '../../Config/Database.php';

class Book
{
    private $db;

    public function __construct()
    {
        $database = new Database();
        $this->db = $database->getConnection();
    }

    public function getAll() {
        $query = "SELECT * FROM libros";
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

        $query = "INSERT INTO libros (nombre, editorial, dificultad, fecha_publicacion, status)
            VALUES ('{$studentData["book_name"]}', '{$studentData["book_editorial"]}', 'A1', '{$studentData["book_publication_date"]}', 1)";

        $stmt = $this->db->query($query);

        if ($stmt === false) {
            die("Error en la consulta: " . $this->db->error);
        }

        return $stmt;
    }

    public function delete($bookId) {
        $query = "delete from libros where id=$bookId limit 1;";

        $stmt = $this->db->query($query);

        if ($stmt === false) {
            die("Error en la consulta: " . $this->db->error);
        }

        return $stmt;
    }
}
