var indice_pregunta_actual = 0;
var puntos = 0;
var opcion_elegida = 10;

 var opciones = document.getElementById("opciones");
  var opciones_label = opciones.querySelectorAll("label");
var opciones_input = opciones.querySelectorAll("input");
  var opciones_div = opciones.querySelectorAll("div");
  var verificar = document.getElementById("boton-verificar");
  var siguiente = document.getElementById("boton-siguiente");


function inicioJuego(){
  var barra = document.getElementById("barra");
  barra.classList.add("d-none");

  var inicio = document.getElementById("pantalla-inicio");
inicio.classList.add("d-none");

  var header = document.getElementById("header");
  header.classList.remove("d-none");

  var pantalla_juego = document.getElementById("pantalla-juego");
  pantalla_juego.classList.remove("d-none");

AgregarQuitarAnimacion();
  mostrarPregunta();
}


function mostrarPregunta(){

  var num_preg = document.getElementById("pregunta-numero");
  num_preg.innerHTML = indice_pregunta_actual+1+")";

  var preg = document.getElementById("pregunta-texto");
  preg.innerHTML = preguntas[indice_pregunta_actual].pregunta;

  var img = document.getElementById("pregunta-imagen");

  img.src = preguntas[indice_pregunta_actual].imagen_src;



  for(var i = 0; i < 3; i++){
    opciones_div[i].classList.remove("correcta");
    opciones_div[i].classList.remove("erronea");
    opciones_div[i].classList.remove("wobble");
    opciones_div[i].classList.remove("tada");
    opciones_label[i].innerHTML = preguntas[indice_pregunta_actual].opciones[0+i];
    opciones_input[i].setAttribute("value", preguntas[indice_pregunta_actual].opciones[0+i]);

  }


}

function verificarPreguntaActual(){
  if(opciones_label[opcion_elegida].innerHTML ==  preguntas[indice_pregunta_actual].respuesta_correcta){
    opciones_div[opcion_elegida].classList.add("correcta");
    opciones_div[opcion_elegida].setAttribute("style", "animation-delay: 100ms");
opciones_div[opcion_elegida].classList.add("tada");

    puntos = puntos + 100;
  }else{
    opciones_div[opcion_elegida].classList.add('erronea');
    opciones_div[opcion_elegida].setAttribute("style", "animation-delay: 100ms");
    opciones_div[opcion_elegida].classList.add('wobble');
        puntos = puntos - 50;
    for(var x = 0; x < 3; x++){
      if(opciones_label[x].innerHTML ==  preguntas[indice_pregunta_actual].respuesta_correcta){
        opciones_div[x].classList.add("correcta");


    }
    }

  }
}




function manejadorBotonVerificar(){
var cont = 0;
        var sin_marcar = document.getElementById("incor");
  for(var x = 0; x < 3; x++){
        cont++;
    if(opciones_input[x].checked){
      verificar.classList.add("d-none");
      siguiente.classList.remove("d-none");
      sin_marcar.classList.add("d-none");
      opcion_elegida = x;
                cont = 0;
      AgregarQuitarAnimacion();
      verificarPreguntaActual();
    }else if(opciones_input[x].checked == false){
      if(cont == 3){
        sin_marcar.classList.remove("d-none");

          cont = 0;
      }
    }

  }
}

function manejadorBotónSiguiente(){
    verificar.classList.remove("d-none");
    siguiente.classList.add("d-none");
    for(var x = 0; x < 3; x++){
      opciones_input[x].checked = false;
    }
obtenerSiguientePregunta();
if(indice_pregunta_actual == 10){
    indice_pregunta_actual = 0;
Resultado();

}
AgregarQuitarAnimacion();
mostrarPregunta();
}


function Resultado(){
  var pantalla_juego = document.getElementById("pantalla-juego");
  pantalla_juego.classList.add("d-none");
  var pantalla_resultado = document.getElementById("pantalla-resultado");
  pantalla_resultado.classList.remove("d-none");
  CalcularPuntos();
}

function JuegoNuevo(){
AgregarQuitarAnimacion();
  var barra = document.getElementById("barra");
  barra.classList.remove("d-none");

  var inicio = document.getElementById("pantalla-inicio");
inicio.classList.remove("d-none");

  var header = document.getElementById("header");
  header.classList.add("d-none");

  var pantalla_juego = document.getElementById("pantalla-juego");
  pantalla_juego.classList.add("d-none");

  var pantalla_resultado = document.getElementById("pantalla-resultado");
  pantalla_resultado.classList.add("d-none");


puntos = 0;


}


function CalcularPuntos(){
  var puntos_id = document.getElementById("resultado-puntos");
    var resultado = document.getElementById("pantalla-resultado");
    var bien = resultado.getElementsByClassName("trivia-resultado-bien");


      if(puntos < 0){
        puntos = 0;
      }
  puntos_id.innerHTML = puntos;
  if(puntos >= 500){
    for(var x = 2; x >= 0; x--){
          bien[x].classList.toggle("trivia-resultado-bien");
        }

  }else if(puntos < 500){
    var mal = resultado.getElementsByClassName("trivia-resultado-mal");
    var mal_copia = mal;
    for(var x = 2; x >= 0; x--){
      mal[x].classList.toggle("trivia-resultado-mal");
    }

  }

var puntos_copia = puntos;
  var prueba = document.getElementById("resultado-boton-volver-a-jugar");
prueba.addEventListener('click', function() {

var bien2 = document.querySelectorAll("#bien");
var mal2 = document.querySelectorAll("#mal");

  if(puntos_copia  >=  500){
    for(var x = 0; x <= 2; x++){
      bien2[x].classList.add("trivia-resultado-bien");
    }
}else if(puntos_copia  < 500){
  for(var x = 0; x <= 2; x++){
    mal2[x].classList.add("trivia-resultado-mal");
  }
}
}, false);
}

function AgregarQuitarAnimacion(){
  var num = 200;
var ag = opciones.getElementsByClassName("p-2 p-md-3 trivia-opcion trivia-bg-blanco trivia-box-shadow");
var ag2 = opciones.querySelectorAll(".opc1");
var ag3 = opciones.querySelectorAll(".opc2");
var ag4 = opciones.querySelectorAll(".opc3");

ag2[0].setAttribute("style", "animation-delay: 200ms");
ag3[0].setAttribute("style", "animation-delay: 600ms");
ag4[0].setAttribute("style", "animation-delay: 1000ms");










  for(var x = 0; x < 3; x++){

    ag[x].classList.add("animated");
    ag[x].classList.toggle("flipInX");

  }


}

function obtenerSiguientePregunta(){
  indice_pregunta_actual++;
}
