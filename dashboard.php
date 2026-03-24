<?php
session_start();
if (!isset($_SESSION['admin'])) {
  header("Location: login.php");
}
?>

<h2>Admin Panel</h2>

<form action="add.php" method="POST">

  Crop:
  <input type="text" name="crop" placeholder="1509 / 1121 / Narma" required><br><br>

  Price:
  <input type="number" name="price" required><br><br>

  <button type="submit">Update Price</button>

</form>

<a href="logout.php">Logout</a>