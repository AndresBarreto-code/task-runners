// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () {

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
  var id=location.search;
  id.split("");
  id=id[id.length-1];  

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "info.json"
  }).done(function (resultado) {

    //Guarda el resultado en una variable
    eventos = resultado.eventos;
    //Busca el elemento en el arreglo 
    evento = eventos.filter(numero => numero.id == id);
    evento=evento[0];
    //Crea un string que contenga el HTML que describe el detalle del evento

    var htmlActual=`
              <section class = "margenCuadroEventosTiempo">
                <div class = "cuadroEventosIndex">
                <h2><a href="detalle.html?id=${evento.id}">${evento.nombre}</a></h2>
                <p class = "letraGris">${evento.fecha} - <span>Lugar: ${evento.lugar}</span></p>
                <p>Descripción: ${evento.descripcion}</p>
                <p class = "letraAzul">Costo: ${evento.precio}</p>
                <p class = "letraNaranja">Invitados: ${evento.invitados}</p>
                </div>
              </section>
              `

    //Modifica el DOM agregando el html generado dentro del div con id=evento
    document.getElementById("evento").innerHTML = htmlActual;
    
  })
});
