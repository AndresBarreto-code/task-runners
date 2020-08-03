// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
var proximos = [];
var fechaActual;
var eventos;

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "info.json"
  }).done(function (resultado) {

    //Guarda el resultado en variables
    fechaActual = resultado.fechaActual;
    eventos = resultado.eventos;

    //Clasifica los eventos segun la fecha actual del JSON
    for(var i = 0; i < eventos.length; i++){
      if (eventos[i].fecha > fechaActual){
        proximos.push(eventos[i]);
      }
    }

    //Ordena los eventos segun la fecha (los mas cercanos primero)
    proximos = proximos.sort(function(x,y){
      if (x.fecha > y.fecha){
        return 1;
      }
      return -1;
    });

    //Crea un string que contenga el HTML que describe el detalle del evento
    var htmlProximos = "";

    //Recorre el arreglo y concatena el HTML para cada evento
    for(var j = 0; j < proximos.length; j++){
      htmlProximos += `
                        <section class = "margenCuadroEventosTiempo">
                          <div class = "cuadroEventosIndex">
                            <h2><a href="detalle.html?id=${proximos[j].id}">${proximos[j].nombre}</a></h2>
                            <p class = "letraGris">${proximos[j].fecha} - <span>Lugar: ${proximos[j].lugar}</span></p>
                            <p>Descripción: ${proximos[j].descripcion}</p>
                            <p class = "letraAzul">Costo: ${proximos[j].precio}</p>
                          </div>
                        </section>
                      `
    }

    //Modifica el DOM agregando el html generado
    document.getElementById("proximos").innerHTML = htmlProximos;

    
  })

});
