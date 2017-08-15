<?php
  if (isset($_POST["simQuimico"])) {
    $nombreServer = "localhost";
    $user = "tablaperiodica";
    $password = "";
    $nombreDB = "tablaperiodica";

    $conn = mysqli_connect($nombreServer, $user, $password, $nombreDB);
    if (!$conn) {
     exit("Mysqli connection error " . mysqli_connect_error());
   }

    $sql = "SELECT * FROM elementos WHERE simbolo_quimico='" . $_POST["simQuimico"] . "'";

    $result = mysqli_query($conn, $sql);

    while ($row = mysqli_fetch_array($result)) {
      $data[] = array_map("utf8_encode", $row);
    }

    echo json_encode($data);
  }
?>
