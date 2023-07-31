<?php

require_once '../Models/Student.php';

class StudentController
{
    public function getStudents()
    {
        try {
            $studentModel = new Student();
            $students = $studentModel->getAll();
        } catch (\Throwable $th) {
            var_dump($th->getMessage());die;
        }

        header("Content-Type: application/json");
        echo json_encode($students);
    }
}

if (isset($_POST['action']) && $_POST['action'] === 'getStudents')
{
    $studentController = new StudentController();
    $studentController->getStudents();
}
