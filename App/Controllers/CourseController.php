<?php

require_once '../Models/Course.php';

class CourseController
{
    public function getCourses()
    {
        try {
            $courseModel = new Course();
            $courses = $courseModel->getAll();
        } catch (\Throwable $th) {
            var_dump($th->getMessage());die;
        }

        header("Content-Type: application/json");
        echo json_encode($courses);
    }
}

if (isset($_POST['action']) && $_POST['action'] === 'getCourses')
{
    $courseController = new CourseController();
    $courseController->getCourses();
}
