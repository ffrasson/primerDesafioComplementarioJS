// Login de usuario //

let edad = parseInt(prompt("Ingrese su edad"))
    
if (edad >= 18){
    alert("Acceso exitoso!")
} else{
    alert("Este sitio es para mayores de 18 años")
}

let usuario = prompt("Ingrese su nombre de usuario")
let intento = 1;

while(usuario !="fer"){
    alert("Debe ingresar un usuario valido")
    
    if(intento === 3){
        break;
      }
    
      intento = intento + 1;
      usuario = prompt("Ingrese su nombre de usuario nuevamente");
}

if(intento === 3){
    alert("Cuenta Bloqueada");
}else{
    alert("Ingresaste correctamente")
}

// Ingreso de Datos //

let nacionalidad = prompt("Ingrese su Nacionalidad");

switch(nacionalidad){
    
    case "Argentina":
    alert("Bienvenidos al sitio de la región Argentina");
    break;

    case "Colombia":
    alert("Por favor dirigase al sitio de la región Colombia");
    break;
  
    case "Brasil":
    alert("Por favor dirigase al sitio de la región Brasil");
    break;

    case "Uruguay":
    alert("Por favor dirigase al sitio de la región Uruguay");
    break;
  
  default:
    alert("Este sitio es sólo para Región Argentina");
    break;
}

// Asignación de Orden //

for (let index = 0; index < 100; index++) {
  let nombre = prompt("Por favor ingrese su nombre");
  alert("Turno numero " + index + " Nombre: " + nombre);

  if(index === 5){
    break;
  }
}
console.log("Fin de la Lista")

// Calculando //

let numero = parseInt(prompt("Ingrese un numero"));
for (let index = 1; index <= 10; index++) {
  let result = numero * index;
  alert(numero + " X " + index + " = " + result);
}

// Muestra datos //

let nombre = prompt("Ingresa tu Nombre");
let cuadro = prompt("Ingresa tu Cuadro de Futbol");
alert(`Hola ${nombre}, tu Cuadro de Fútbol es ${cuadro}`);
