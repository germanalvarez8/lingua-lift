<?php

require_once '../Models/Book.php';

class BookController
{
    public function getBooks()
    {
        try {
            $bookModel = new Book();
            $books = $bookModel->getAll();
        } catch (\Throwable $th) {
            var_dump($th->getMessage());die;
        }

        header("Content-Type: application/json");
        echo json_encode($books);
    }

    public function addBook($bookData)
    {
        try {
            $bookModel = new Book();
            $students = $bookModel->add($bookData);
        } catch (\Throwable $th) {
            var_dump($th->getMessage());die;
        }

        header("Content-Type: application/json");
        echo json_encode($students);
    }

    public function deleteBook($bookData)
    {
        try {
            $bookModel = new Book();
            $students = $bookModel->delete($bookData['bookId']);
        } catch (\Throwable $th) {
            var_dump($th->getMessage());die;
        }

        header("Content-Type: application/json");
        echo json_encode($students);
    }
}

if (isset($_POST['action']))
{
    $bookController = new BookController();

    $bookMethods = [
        'getBooks' => fn () => $bookController->getBooks(),
        'addBook' => fn () => $bookController->addBook($_POST['body']),
        'deleteBook' => fn () => $bookController->deleteBook($_POST['body']),
    ];

    $method = $bookMethods[$_POST['action']];
    $method($_POST['body'] ?? null);
}
