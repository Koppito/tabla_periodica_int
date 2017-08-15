//Icono cargar TODO
$(window).on('load', function() {
		$(".precarga").fadeOut(1750);
});

$(document).ready(function() {
  //Funcion hover de los selectores
  $(document.getElementsByClassName("selector")).hover(function() {
    $("rect").not(document.getElementsByClassName(this.dataset.tipo)).each(function() {
      this.classList.add("null");
    })
  },
  function() {
    $(".null").each(function() {
      this.classList.remove("null");
    });
  })

  //Click sobre un elemento
  $(".element").click(function() {
    var tipoElemento = $(this).find("rect").attr("class").split(" ")[1];
    var simbQuimico = $(this).text().trim();
    $.ajax({
      type: "POST",
      url: "elemento.php",
      data: { simQuimico : simbQuimico },
      success: function(data) {
        var elemento = $.parseJSON(data) [0];
        cargarElemento(elemento, tipoElemento);
      }
    });
  });

  $("#elementPicked").click(function() {
    var nombreElemento = $("#elementPickedNom").text();
		$("#elementPickedPagina").css("width", "100%")
		if ($(window).width() <= 1000) {
			$("#elementPickedPagina").attr("src", "https://es.m.wikipedia.org/wiki/" + nombreElemento);
		}
		else {
			$("#elementPickedPagina").attr("src", "https://es.wikipedia.org/wiki/" + nombreElemento);
		}

    $("#wikiElemento").css("display", "block");
  });

	$("#wikiElemento").click(function() {
		this.style.display = 'none';
	});

});

function cargarElemento(e, tipoElemento) {
  $("#elementPicked").css("opacity", "100");
  $("#elementPickedRect").removeClass();
  $("#elementPickedRect").addClass(tipoElemento);
  $("#elementPickedSimQuimico").text(e.simbolo_quimico);
  $("#elementPickedNom").text(e.nombre_elemento);
  $("#elementPickedMasaAtom").text(e.masa_atomica);
  $("#elementPickedEnergiaIon").text(e.energia_ionizacion);
  $("#elementPickedElectroN").text(e.electronegatividad);
  $("#elementPickedNumAtom").text(e.id_elemento);
  $("#elementPickedConfigElec").text(calcularConfigElec(e));
}

/*
	TODO: AGREGAR EL CALCULO DE LA CONFIGURACION ELECTRONICA
*/
function calcularConfigElec(e) {
  var configElec = "";
  //Agrega el gas noble
  switch (true) {
    case e.periodo == 3: configElec += "[Ne]";break;
    case e.periodo == 4: configElec += "[Ar]";break;
    case e.periodo == 5: configElec += "[Kr]";break;
    case e.periodo == 6: configElec += "[Xe]";break;
    case e.periodo == 7: configElec += "[Rn]";break;
    default: configElec += "";break;
  }
  //Agrego el ultimo nivel
  /*
  switch (e.grupo){
    case
  }*/
  return configElec;
}
