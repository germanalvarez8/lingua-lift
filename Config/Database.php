<?php

class Database {
    private static $connection;
    private $host = 'localhost';
    private $port = '8889';
    private $db_name = 'lingua_lift';
    private $username = 'root';
    private $password = '';

    public function getConnection() {
        if (!self::$connection) {
            self::$connection = new mysqli($this->host, $this->username, $this->password, $this->db_name);

            if (self::$connection->connect_error) {
                die('Error de conexión: ' . self::$connection->connect_error);
            }
        }

        return self::$connection;
    }
}
