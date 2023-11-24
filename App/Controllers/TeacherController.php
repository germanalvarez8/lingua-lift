<?php

require_once '../Models/Teacher.php';

class TeacherController
{
    public function getTeachers()
    {
        try {
            $profesorModel = new Teacher();
            $result = $profesorModel->getAll();
        } catch (\Throwable $th) {
            $result = $th->getMessage();
        }

        header("Content-Type: application/json");
        echo json_encode($result);
    }

    public function addTeacher(array $teacherData)
    {
        try {
            $profesorModel = new Teacher();
            $result = $profesorModel->add($teacherData);
        } catch (\Throwable $th) {
            $result = $th->getMessage();
        }

        header("Content-Type: application/json");
        echo json_encode($result);
    }

    public function deleteTeacher(array $teacherData)
    {
        try {
            $profesorModel = new Teacher();
            $result = $profesorModel->delete((int) $teacherData['teacherId']);
        } catch (\Throwable $th) {
            $result = $th->getMessage();
        }

        header("Content-Type: application/json");
        echo json_encode($result);
    }
}

if (isset($_POST['action'])) {
    $teacherController = new TeacherController();
    $ordersCommission = [
        'getTeachers' => fn () => $teacherController->getTeachers(),
        'addTeacher' => fn () => $teacherController->addTeacher($_POST['body']),
        'deleteTeacher' => fn () => $teacherController->deleteTeacher($_POST['body']),
    ];

    $method = $ordersCommission[$_POST['action']];
    $method($_POST['body'] ?? null);
}
