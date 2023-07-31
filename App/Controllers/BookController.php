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
}

if (isset($_POST['action']) && $_POST['action'] === 'getBooks')
{
    $bookController = new BookController();
    $bookController->getBooks();
}
