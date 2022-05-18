//reto1 mensaje hola mundo
let mensaje1 = 'hola ingrese su nombre';
prompt(mensaje1 + [' ']);


//reto2 mensaje hola... nombre y apellido
var mensaje = 'hola, [nombre] [apellido]';
prompt(mensaje);


//reto3 mensaje multilinea
let platzi =  `Platzi cuenta con cursos de:
 [categoria1],
 [categoria2], 
 [categoria3],
 [categoria4], 
 [categoria5], 
 [categoria6]`;
//alert(platzi)

let cursos = ['html', 'css', 'marketing', 'programacion1', 'programacion2'];
console.log('platzi cuenta con cursos de:');
for (let index = 0; index < cursos.length; index++) {
  console.log(cursos[index]);  
}
prompt(cursos)

//reto4 suma de enteros
let num1 = 2.5633;
let num2 = 5.6883;
let num3 = num1 + num2
alert(num3.toFixed(2))

//reto5 
//let num1 = 2;
//let num2 = 3;
//let num3 = 4;
//prompt((num1 + num2) * num3)

//reto6 resta de pizzas

 let x = ' ';
 let y = ' ';
 let z = ' ';
prompt(x-y===z);





let usuario = prompt("Hola cuál es tu nombre?");
console.log("Hola " + usuario);

//Reto 2
let usuarioNombre = prompt("Hola cuál es tu nombre?"),
    usuarioApellido = prompt("Hola cuál es tu apellido?");
console.log("Hola " + usuario + " " + usuarioApellido);

//Reto 3
let cursos = ["Marketing", "Programación", "Desarrollo Personal", "Empresas", "IA", "Hacking"];
for(categorios of cursos){
    console.log(categorios);
}

//Reto 4
let numero1 = Number(prompt("Introduce un numero"));
let numero2 = Number(prompt("Introduce otro numero"));

functionsuma(numero1, numero2){
    let operacion = numero1 + numero2;
    console.log(operacion);
}

suma(numero1, numero2);

//Reto 5
let numero3 = Number(prompt("Introduce un numero"));
let numero4 = Number(prompt("Introduce otro numero"));
let numero5 = Number(prompt("Introduce otro numero"));

functionsumaConEsteroides(numero1, numero2, numero3){
    let operacion = (numero1 + numero2) * numero3;
    console.log(operacion);
}

sumaConEsteroides(numero3, numero4, numero5);

//Reto 6
let pizzasUsuario = Number(prompt("Cuantas pizzas tienes?"));
let pizzaComidas = Number(prompt("Cuantas pizzas se han comido"));

functionCalcularPizzas(pizzaUser, pizzaComidas){
    let calculo = pizzaUser - pizzaComidas;
    alert(`Quedan ${calculo} pizzas`);
}

CalcularPizzas(pizzasUsuario, pizzaComidas);

//Reto 7
let NombreUsuario = prompt("Indica tu nombre");
let EdadUsuario = Number(prompt("Indica tu edad"));

functionTuedadFuturaYPasada(nombreuser, edaduser){
    let calcularFuturo = edaduser + 1;
    let calcularPasado = edaduser - 1;
    alert(`${NombreUsuario} Tu edad es: ${edaduser} años y el proxima año tendras ${calcularFuturo}  años y el año pasado tuviste ${calcularPasado} años`);
}

TuedadFuturaYPasada(NombreUsuario, EdadUsuario);

//Reto 8
let TotalAPagar = Number(prompt("Cuanto deben pagar?"));
let Personas = Number(prompt("Cuantas personas van a pagar?"));
let Propina = Number(prompt("Cuanta propina van a pagar?"));
let impuesto = 5;

functionCalcularPago(pago, personas, propina, impuesto){
    let porcentaje = (impuesto / 100) * pago;
    let calculo = (pago + porcentaje + propina) / personas;
    console.log(`El total a pagar por persona es: $${calculo}`);
}

CalcularPago(TotalAPagar, Personas, Propina, impuesto);

//Reto 9
let cantidadDeDias = Number(prompt("Introduce una cantidad de dias"));

functionCalculo(dias){
    let horas = dias * 24;
    let minutos = dias * 1440;
    let segundos = dias * 86400;

    alert(`${cantidadDeDias} dias tiene ${horas} horas, ${minutos} minutos y ${segundos} segundos`);
}

Calculo(cantidadDeDias);

//Reto 10
let introduceTusMillas= Number(prompt("Introduce tus distancia en millas"));

functionCalcularDistancia(milla){
    let calcular = milla * 1609;
    alert(`Aproximado son ${calcular} kilometros`);
}

CalcularDistancia(introduceTusMillas);



S

// Reto 1
var respuesta1 = document.getElementById("r1_Respuesta");
var boton1 = document.getElementById("r1_Boton");

boton1.addEventListener("click", saludar);

functionsaludar () {
  var nombre = document.getElementById("r1_Nombre");
  respuesta1.innerHTML = "Hola, " + nombre1.value + ".";
}

// Reto 2
var respuesta2 = document.getElementById("r2_Respuesta");
var boton2 = document.getElementById("r2_Boton");

boton2.addEventListener("click", saludo2);

functionsaludo2 () {
  var nombre = document.getElementById("r2_Nombre");
  var apellido = document.getElementById("r2_Apellido");
  respuesta2.innerHTML = "Hola, " + nombre2.value + " " + apellido.value + ".";
}

// Reto 3
var respuesta3 = document.getElementById("r3_Respuesta");
var categorias = ["Desarrollo e Ingeniería", "Diseño y UX", "Marketing", "Negocios y Emprendimiento",
                  "Producción Audiovisual", "Crecimiento Profesional"];

for (var i in categorias) {
  respuesta3.innerHTML += categorias[i] + "<br />"
}

// Reto 4
var respuesta4 = document.getElementById("r4_Respuesta");
var boton4 = document.getElementById("r4_Boton");

boton4.addEventListener("click", sumar);

functionsumar() {
  var numero1 = parseFloat(document.getElementById("r4_Num1").value);
  var numero2 = parseFloat(document.getElementById("r4_Num2").value);
  var total = numero1 + numero2;

  respuesta4.innerHTML = total.toFixed(2);
}

// Reto 5
var respuesta5 = document.getElementById("r5_Respuesta");
var boton5 = document.getElementById("r5_Boton");

boton5.addEventListener("click", Reto5);

functionReto5() {
  var numero1 = parseFloat(document.getElementById("r5_Num1").value);
  var numero2 = parseFloat(document.getElementById("r5_Num2").value);
  var numero3 = parseFloat(document.getElementById("r5_Num3").value);
  var resultado = (numero1 + numero2) * numero3;

  respuesta5.innerHTML = resultado.toFixed(2);
}

// Reto 6
var respuesta6 = document.getElementById("r6_Respuesta");
var boton6 = document.getElementById("r6_Boton");

boton6.addEventListener("click", pizzas);

functionpizzas(){
  var num1 = parseInt(document.getElementById("r6_Num1").value);
  var num2 = parseInt(document.getElementById("r6_Num2").value);
  var resultado = num1 - num2;

  respuesta6.innerHTML = "Haz traído " + num1 + " porciones de pizza, con el pasar del<br />tiempo se comieron " + num2 + " porciones y te haz quedado con<br />" + resultado + " porciones.";
}

// Reto 7
var respuesta7 = document.getElementById("r7_Respuesta");
var boton7 = document.getElementById("r7_Boton");

boton7.addEventListener("click", edad);

functionedad() {
  var usuario = document.getElementById("r7_Nombre").value;
  var edadUsuario = parseInt(document.getElementById("r7_Num").value);
  var edadFutura = edadUsuario + 1;
  var edadPasada = edadUsuario - 1;

  respuesta7.innerHTML = usuario + " el año pasado tenías " + edadPasada + " años y el próximo año cumplirás " + edadFutura + " años."
}

// Reto 8
var respuesta8 = document.getElementById("r8_Respuesta");
var boton8 = document.getElementById("r8_Boton");

boton8.addEventListener("click", dividirCuenta);

functiondividirCuenta() {
  var cuenta = parseFloat(document.getElementById("r8_Total").value);
  var personas = parseFloat(document.getElementById("r8_Personas").value);
  var propina = parseFloat(document.getElementById("r8_Porcentaje").value);
  var impuestos = parseFloat(document.getElementById("r8_Impuesto").value);

  // Primero calculo la propina
  propina = cuenta * (propina / 100 );
  // Ahora calculo el impuestos
  impuestos = cuenta * (impuestos / 100);
  // Ahora sí hago el cálculo total con la división
  var total = (cuenta + propina + impuestos) / personas;

  respuesta8.innerHTML = "Cantidad de dinero por persona: " + total.toFixed(2);
}

// Reto 9
var respuesta9 = document.getElementById("r9_Respuesta");
var boton9 = document.getElementById("r9_Boton");

boton9.addEventListener("click", tiempo);

functiontiempo() {
  var dias = parseInt(document.getElementById("r9_Num").value);
  var horas, minutos, segundos;
  horas = dias * 24;
  minutos = horas * 60;
  segundos = minutos * 60;

  respuesta9.innerHTML = "En " + dias + " días hay " + horas + " horas, o " + minutos + " minutos o " + segundos + " segundos.";
}

// Reto 10
var respuesta10 = document.getElementById("r10_Respuesta");
var boton10 = document.getElementById("r10_Boton");

boton10.addEventListener("click", millas);

functionmillas() {
  var num = parseFloat(document.getElementById("r10_Num").value);
  var conv = 1.609433;
  var km = num * conv;

  respuesta10.innerHTML = num + " millas son " + km.toFixed(2) + " kilómetros.";
}

// Reto 11
var respuesta11 = document.getElementById("r11_Respuesta");
var boton11 = document.getElementById("r11_Boton");

boton11.addEventListener("click", multiplo);

functionmultiplo () {
  var num1 = parseInt(document.getElementById("r11_Num1").value);
  var num2 = parseInt(document.getElementById("r11_Num2").value);
0
  if (num1 >= num2) {
    var total = num1 / num2;
    respuesta11.innerHTML = num2 + " entra " + total + " veces en " + num1;
  }
  else {
    var total = num2 / num1;
    respuesta11.innerHTML = num1 + " entra " + total + " veces en " + num2;
  }
}
  

  


