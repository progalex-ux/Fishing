<?php
try {
    $connection = new PDO('mysql:host=localhost;dbname=facebook;', "root", '');
    echo "Connection Success";
} catch (PDOException $e) {
    echo "error" . $e->getMessage();
}
?>