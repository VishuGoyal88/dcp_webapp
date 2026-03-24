<?php
$conn = new mysqli("localhost", "root", "", "mandi");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $crop = $_POST['crop'];
  $price = $_POST['price'];
  $market = $_POST['market'];
  $state = $_POST['state'];

  $conn->query("INSERT INTO prices (crop, price, market, state, date)
                VALUES ('$crop', '$price', '$market', '$state', CURDATE())");
}
?>

<form method="POST">
  <input name="crop" placeholder="Crop"><br>
  <input name="price" placeholder="Price"><br>
  <input name="market" placeholder="Market"><br>
  <input name="state" placeholder="State"><br>
  <button>Add</button>
</form>