<?php
include 'connection.php';

header('Access-control-Allow-Origin:*');

$email = $_POST['email'];
$password = $_POST['password'];

$save = $connection->prepare('INSERT INTO login(email,password) VALUES (:email,:password)');

$save->execute(array(':email' => $email, ':password' => $password));
$response = ["message" => "YES"];
echo json_encode($response);
exit;
?>
