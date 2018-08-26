<?php include_once("php/buscarFila.php")?>
<div class="tablaPeriodica">
  <table class="tablaPeriodica">
    <tbody>

      <!-- Headers -->
      <tr>
        <?php
          for ($i = 0; $i <= 18; $i++) {
            if ($i == 0) {
              print("<th>" . "</th>");
              continue;
            }
            print("<th>" . $i . "</th>");
          }
        ?>
      </tr>

      <!-- Primera Fila -->
      <tr>
        <th>1</th>
        <?php
          getFila(1, 1);

          for ($i = 0; $i <= 15; $i++) {
            print("<td></td>");
          }

          getFila(2, 2);
        ?>
      </tr>

      <!-- Segunda Fila -->
      <tr>
        <th>2</th>
        <?php
          getFila(3, 4);
          for ($i = 0; $i <= 9; $i++) {
            print("<td></td>");
          }
          getFila(5, 10);
        ?>

      </tr>

      <!-- Tercera Fila -->
      <tr>
        <th>3</th>
        <?php
          getFila(11, 12);
          for ($i = 0; $i <= 9; $i++) {
            print("<td></td>");
          }
          getFila(13, 18);
        ?>
      </tr>

      <!-- Cuarta Fila -->
      <tr>
        <th>4</th>
        <?php
          getFila(19, 36);
        ?>
      </tr>

      <!-- Quinta Fila -->
      <tr>
        <th>5</th>
        <?php
          getFila(37, 54);
        ?>
      </tr>

      <!-- Sexta Fila -->
      <tr>
        <th>6</th>
        <?php
          getFila(55, 56);
          getFila(71, 86);
        ?>
      </tr>

      <!-- Septima Fila -->
      <tr>
        <th>7</th>
        <?php
          getFila(87, 88);
          getFila(103, 118);
        ?>
      </tr>

      <!-- Lantanidos  -->
      <tr>
        <th>LANTANIDOS</th>
        <?php
          getFila(57, 70);
        ?>
      </tr>

      <!-- Actinidos  -->
      <tr>
        <th>ACTINIDOS</th>
        <?php
          getFila(89, 102);
        ?>
      </tr>
    </tbody>
  </table>
</div>
