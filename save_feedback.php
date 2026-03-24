<?php
$conn = new mysqli("localhost", "root", "", "mandi");

$message = $_POST['message'];

$sql = "INSERT INTO feedback (message) VALUES ('$message')";
$conn->query($sql);

echo "Success";
?>