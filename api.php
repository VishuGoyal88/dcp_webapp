<?php
header("Access-Control-Allow-Origin: *");

$conn = new mysqli("localhost", "root", "", "mandi");

$crop = $_GET['crop'] ?? '';

$sql = "SELECT * FROM prices WHERE state='Punjab' AND market='Budhlada'";

if ($crop != '') {
  $sql .= " AND LOWER(crop)=LOWER('$crop')";
}

$result = $conn->query($sql);

$data = [];

while ($row = $result->fetch_assoc()) {
  $data[] = $row;
}

echo json_encode($data);
?>