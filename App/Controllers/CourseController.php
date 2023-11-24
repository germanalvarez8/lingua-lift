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

    public function addCourse($courseData)
    {
        try {
            $courseModel = new Course();
            $course = $courseModel->add($courseData);
        } catch (\Throwable $th) {
            var_dump($th->getMessage());die;
        }

        header("Content-Type: application/json");
        echo json_encode($course);
    }

    public function deleteCourse($courseData)
    {
        try {
            $courseModel = new Course();
            $course = $courseModel->delete($courseData['courseId']);
        } catch (\Throwable $th) {
            var_dump($th->getMessage());die;
        }

        header("Content-Type: application/json");
        echo json_encode($course);
    }
}

if (isset($_POST['action'])) {
    $courseController = new CourseController();
    $coursesMethods = [
        'getCourses' => fn () => $courseController->getCourses(),
        'addCourse' => fn () => $courseController->addCourse($_POST['body']),
        'deleteCourse' => fn () => $courseController->deleteCourse($_POST['body']),
    ];

    $method = $coursesMethods[$_POST['action']];
    $method($_POST['body'] ?? null);
}
