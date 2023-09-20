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

    public function addStudent($teacherData)
    {
        try {
            $studentModel = new Student();
            $students = $studentModel->add($teacherData);
        } catch (\Throwable $th) {
            var_dump($th->getMessage());die;
        }

        header("Content-Type: application/json");
        echo json_encode($students);
    }
}

if (isset($_POST['action'])) {
    $studentController = new StudentController();
    $studentMethods = [
        'getStudents' => fn () => $studentController->getStudents(),
        'addStudent' => fn () => $studentController->addStudent($_POST['body']),
    ];

    $method = $studentMethods[$_POST['action']];
    $method($_POST['body']);
}
