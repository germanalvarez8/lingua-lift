<?php

require_once '../Models/Teacher.php';

class TeacherController
{
    public function getTeachers()
    {
        try {
            $profesorModel = new Teacher();
            $teachers = $profesorModel->getAll();
        } catch (\Throwable $th) {
            var_dump($th->getMessage());die;
        }

        header("Content-Type: application/json");
        echo json_encode($teachers);
    }

    public function addTeacher(array $teacherData)
    {
        try {
            $profesorModel = new Teacher();
            $teachers = $profesorModel->add($teacherData);
        } catch (\Throwable $th) {
            var_dump($th->getMessage());die;
        }

        header("Content-Type: application/json");
        echo json_encode($teachers);
    }
}

if (isset($_POST['action']) && $_POST['action'] === 'getTeachers')
{
    $teacherController = new TeacherController();
    $teacherController->getTeachers();
}

if (isset($_POST['action']) && $_POST['action'] === 'addTeacher')
{
    $teacherController = new TeacherController();
    $teacherController->addTeacher($_POST['body']);
}
