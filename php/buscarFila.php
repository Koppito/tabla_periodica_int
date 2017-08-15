<?php
  function getFila($idMin, $idMax) {
    $nombreServer = "localhost";
    $user = "tablaperiodica";
    $password = "";
    $nombreDB = "tablaperiodica";
    $conn = mysqli_connect($nombreServer, $user, $password, $nombreDB);
    if (!$conn) {
     exit("Mysqli connection error " . mysqli_connect_error());
   }

   $sql = "SELECT simbolo_quimico, tipoElemento ";
   $sql .= "FROM elementos ";
   $sql .= "WHERE id_elemento BETWEEN " . $idMin . " AND " . $idMax;

   $result = mysqli_query($conn, $sql);

   while ($row = mysqli_fetch_array($result)) {
     print('<td>');
     print('  <svg class="element">');
     print('    <rect class="elementRect ' . $row[1] . '"></rect>');
     print('    <text class="elementText">' . $row[0] . '</text>');
     print('  </svg>');
     print('</td>');
   }
  }
?>
