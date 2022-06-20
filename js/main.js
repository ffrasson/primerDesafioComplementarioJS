//Inicio desafío complementario Entrega 1-6




alert("La idea es que ingreses un  número PRINCIPAL P , y otro número NÚMERO N yo te digo si el PRINCIPAL es divisible o no por ese NÚMERO");
alert("Poder repetirlo la cantidad de veces que me digas");
let nombre = prompt("Ingresá tu nombre:");
alert("Hola" + " " + nombre);

let principal = +prompt("Ingresa un número: ");
let cantidadVeces = +prompt("Ingresá la cantidad de veces que quieres consultar");

let divisor = +prompt("Ingresa el divisor: ");



if (Number(cantidadVeces)) {

    if (cantidadVeces === 0) {
        alert(nombre + " ,estás seguro que no querés consultar ? ");
    }
    if (cantidadVeces === "") {
        alert(nombre + " ,tenes que ingresar un valor numérico ? ");
    }
    if (cantidadVeces < 0) {
        alert(nombre + " ,debés ingresar un número mayor a 0 ");
    } else {

        for (i = 1; i <= cantidadVeces; i++) {

            if ((principal % divisor) == 0) {
                alert("Genial!!! el número " + principal + " es divisible por " + divisor);

            } else {
                alert("Alpiste perdiste, el número " + principal + " NO es divisible por " + divisor);
                exit;

            }
            if (i != cantidadVeces) {
                divisor = +prompt("Ingresa el divisor: ");
            }

        }
    }
} else {
    alert(nombre + "El valor ingresado debe ser numérico");

}

//Fin de desafío complementario