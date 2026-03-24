<?php
session_start();

if ($_POST) {
  $username = $_POST['username'];
  $password = $_POST['password'];

  if ($username == "admin" && $password == "7288") {
    $_SESSION['admin'] = true;
    header("Location: dashboard.php");
  } else {
    echo "Wrong Login";
  }
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Admin Login</title>
</head>
<body>

<h2>Admin Login</h2>

<form method="POST">
  <input type="text" name="username" placeholder="Username" required><br><br>
  <input type="password" name="password" placeholder="Password" required><br><br>
  <button type="submit">Login</button>
</form>

</body>
</html>