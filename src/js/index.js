// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
var pasados = [];
var proximos = [];
var fechaActually;
var eventos;

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url: "info.json"
  }).done(function (resultado) {

    //Guarda el resultado en variables
    fechaActually = resultado.fechaActually;
    eventos = resultado.eventos;

    //Clasifica los eventos segun la fecha actual del JSON
    for(var i = 0; i < eventos.length; i++){
      if (eventos[i].fecha < fechaActually){
        pasados.push(eventos[i]);
      }else{
        proximos.push(eventos[i]);
      };
    };

    //Ordena los eventos segun la fecha (los mas cercanos primero)
    pasados = pasados.sort(function(x,y){
      if (x.fecha < y.fecha){
        return 1;
      };
      return -1;
    });

    proximos = proximos.sort(function(x,y){
      if (x.fecha > y.fecha){
        return 1;
      };
      return -1;
    });

    //Crea un string que contenga el HTML que describe el detalle del evento
    var htmlPasados = "";
    var htmlProximos = "";

    //Recorre el arreglo y concatena el HTML para cada evento
    for(var j = 0; j < 2; j++){
      htmlPasados += `
              <section class = "margenCuadroEventos">
                <div class = "cuadroEventosIndex">
                  <h2><a href="detalle.html?id=${pasados[j].id}">${pasados[j].nombre}</a></h2>
                  <p class = "letraGris">${pasados[j].fecha}</p>
                  <p>Descripción: ${pasados[j].descripcion}</p>
                </div>
              </section>
              `;
    };

    for(var j = 0; j < 2; j++){
      htmlProximos += `
              <section class = "margenCuadroEventos">
                <div class = "cuadroEventosIndex">
                  <h2><a href="detalle.html?id=${proximos[j].id}">${proximos[j].nombre}</a></h2>
                  <p class = "letraGris">${proximos[j].fecha}</p>
                  <p>Descripción: ${proximos[j].descripcion}</p>
                </div>
              </section>
              `;
    };

    //Modifica el DOM agregando el html generado
    document.getElementById("pasados").innerHTML = htmlPasados;
    document.getElementById("proximos").innerHTML = htmlProximos;

    
  });

});
