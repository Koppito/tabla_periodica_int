<?php require_once "elemento.php"; ?>
<!DOCTYPE html>
<html>

	<head>
		<title>Tabla Periodica</title>
		<?php include('head.php') ?>
	</head>

	<body>
		<div class="middle w3-container">
			<?php include('tabla_periodica.php') ?>

			<div id="elementPicked" style="opacity: 0;">
				<svg height="12vw" width="10vw">
					<rect id="elementPickedRect"/>
					<text id="elementPickedSimQuimico"></text>
					<text id="elementPickedNom"></text>
					<text id="elementPickedMasaAtom"></text>
					<text id="elementPickedEnergiaIon"></text>
					<text id="elementPickedElectroN"></text>
					<text id="elementPickedNumAtom"></text>
					<text id="elementPickedConfigElec"></text>
				</svg>
			</div>

			<div id="wikiElemento" class="w3-modal">
				<div class="w3-modal-content" style="background: url(img/loading.gif) no-repeat center #ecf0f1;">
					<div class="w3-container" style="padding:0;">
						<iframe id="elementPickedPagina" class="elementPickedIFRAME"></iframe>
					</div>
				</div>
			</div>

			<h2> Referencias: </h2>
			<table class="tablaReferencias">
				<tr>
					<td class="selector" data-tipo="metalAlcalino"><svg width="1.5vw" height="1.5vw"><rect class="metalAlcalino" width="1.5vw" height="1.5vw"/></svg> Metal Alcalino</td>
					<td class="selector" data-tipo="metalAlcalinoTerreo"><svg width="1.5vw" height="1.5vw"><rect class="metalAlcalinoTerreo" width="1.5vw" height="1.5vw"/></svg> Metal Alcalino Terreo</dh>
					<td class="selector" data-tipo="otroMetal"><svg width="1.5vw" height="1.5vw"><rect class="otroMetal" width="1.5vw" height="1.5vw"/></svg> Otro Metal</td>
					<td class="selector" data-tipo="metalTransicion"><svg width="1.5vw" height="1.5vw"><rect class="metalTransicion" width="1.5vw" height="1.5vw"/></svg> Metal de Transicion</td>
					<td class="selector" data-tipo="lantanido"><svg width="1.5vw" height="1.5vw"><rect class="lantanido" width="1.5vw" height="1.5vw"/></svg> Lantanido</td>
					<td class="selector" data-tipo="actinido"><svg width="1.5vw" height="1.5vw"><rect class="actinido" width="1.5vw" height="1.5vw"/></svg> Actinido</td>
					<td class="selector" data-tipo="metaloide"><svg width="1.5vw" height="1.5vw"><rect class="metaloide" width="1.5vw" height="1.5vw"/></svg> Metaloide</td>
				</tr>
				<tr>
					<td class="selector" data-tipo="noMetal"><svg width="1.5vw" height="1.5vw"><rect class="noMetal" width="1.5vw" height="1.5vw"/></svg> No Metal</td>
					<td class="selector" data-tipo="halogeno"><svg width="1.5vw" height="1.5vw"><rect class="halogeno" width="1.5vw" height="1.5vw"/></svg> Halogeno</td>
					<td class="selector" data-tipo="gasNoble"><svg width="1.5vw" height="1.5vw"><rect class="gasNoble" width="1.5vw" height="1.5vw"/></svg> Gas Noble</td>
					<td class="selector" data-tipo="elementoDesconocido"><svg width="1.5vw" height="1.5vw"><rect class="elementoDesconocido" width="1.5vw" height="1.5vw"/></svg> Elemento Desconocido</td>
				</tr>
			</table>

		</div>
	</body>

</html>
