<?php
$conn = new mysqli("localhost", "root", "", "mandi");

$crop = $_POST['crop'];
$price = $_POST['price'];

// check if crop exists
$check = $conn->query("SELECT * FROM prices WHERE crop='$crop' AND state='Punjab' AND market='Budhlada'");

if ($check->num_rows > 0) {
  // update
  $sql = "UPDATE prices 
          SET price='$price' 
          WHERE crop='$crop' 
          AND state='Punjab' 
          AND market='Budhlada'";
} else {
  // insert
  $sql = "INSERT INTO prices (crop, price, market, state, date) 
          VALUES ('$crop', '$price', 'Budhlada', 'Punjab', CURDATE())";
}

$conn->query($sql);

header("Location: dashboard.php");
?>