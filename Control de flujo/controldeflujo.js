//console.log("Hola");
//Control de flujo y Estructuras de control

/*- Tomar decisiones basadas en condiciones especificas, esto produce un codigo
 * tanto dinamico como adaptable
 * 
 * - Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos
 * de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
 * 
 * - Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser
 * especificos en indicar qe instrucciones ejecutar y en que orden
 * 
 * - Optimizan el rendimiento de nuestro codigo, ya que evita oportunamente ejecutar instrucciones
 * en caso de que no se necesite
 * 
 * - Facilitar tanto la escritura de codigo como la claridad de este
 * 
 * Las estructuras de control que vamos a ver durante las sesiones de JS son las siguientes
 * 
 *      - Estructura if-else
 *      - Estructura switch
 *      - Estructuras de bucles (for, do, do while)
 * 
 * Para esta sesion, nos centraremos solo en las primeras 2 señaladas en la lista*/

/*
if-else-if
  
  Se trata de la misma sentencia if-else declarada anteriormente
  Lo que vamos a hacer diferente es, en este caso, anidar varias veces
  esta misma sentencia, lo que nos permitira tomar decisiones
  mas complejas
  
  Usaremos la contatenación.
  Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.
  
 Hay que tener cuidado y no realizar demasiadas anidaciones, ya que va a resultar
 en codigo poco legible y confuso*/
/*
let n = 5;
if (n > 18) {
    console.log(true)   
} else {
    console.log(false)
}

//If anidados

let edad = 28;
if (edad < 18) {
    console.log("Eres menor de edad")
} else if (edad >= 18 && edad < 65) {
    console.log("Estas en edad de hacer lo que quieras")
} else{
    console.log("Todavía no eres mayor de edad")
}
    /*
    sentencia switch*/

   let dia = "lunes";
    switch(dia) {
        case "lunes":
            console.log ("Odio los lunes");
            break;
        case "martes":
            console.log("mensjae"); Break;
        case "miercoles":
            console.log("mensjae"); Break;
        case "jueves":
            console.log("mensjae"); Break;
        case "viernes":
            console.log("mensjae"); Break;
        case "sabado":
            console.log("mensjae"); Break;
        case "domingo":
            console.log("mensjae"); Break;
    }

    /*Operador ternario
    Expresion condicional más simple y legible
    para simplificar condiciones de una sola expresion
    para anidar sentencias, pero no tanto
    Declaración:
    Palabra reservada varl, let o const:
    Se agigna nombre como si se tratara de variable
    operador de asignacion "=" después expresión logica, dentro de parentesis (), después ? que indica el camino a seguir, si se cumple o no la expresion.
    Para el resultado truo or false:
     agregar un caracter de ":" del lado izquierdo de coloca la sentencia si se cumple, del lado derecho se coloca la sentencia si no se cumple. */

    //Ejemplo:
  /*  let verificacion = n > 5 ? "Si es mayor" : "No es mayor"
    console.log (verificacion);

    /*Cuando usar if-else o switch?
    if-else: cuando necestiemos tomar decisiones bajo condiciones más flexibles. 

    switch: cuando tengamos un conjunto sijo de valores para comparar una expresión. */

    // Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */
 let edad = 15
 if (edad < 18) {
    console.log("Eres menor de edad. Todavía no puedes votar")
 }else {(edad >= 18 && edad < 65) 
    console.log("Eres mayor de edad. Puedes votar")
}

/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

let numero = (56);
if (numero % 7 == 0 && numero % 8 == 8) {
    console.log("verdadero")
} else {
    console.log ("falso")
} 
/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

let number = 4;
if (number % 4 === 0 || number % 9 === 0) {
    console.log ("verdadero");
} else {
    console.log("falso");
}

/** Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

let genero = "drama";
    switch (genero) {
        case "accion":
            console.log ("Terminator");
            break;
        case "drama":
            console.log ("Never let me go");
            break;
        case "comedia":
            console.log ("Mean Girls");
            break;
        case "romance":
            console.log ("The notebook");
            break;
        case "suspenso":
            console.log ("The shining");
            break;
        case "terror":
            console.log ("Chucky");
            break;
    }
   
      
/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else  */

let opcion = (4); 
    if (opcion === 1) {
        console.log ("Ingresa el monto a retirar");
    } else if (opcion === 2) {
            console.log ("Ingrese el monto que desea tranferir");
    } else if (opcion === 3) {
            console.log ("Ingrese el monto que desea depositar");
        } else if (opcion === 4) {
                console.log ("Elija el servicio que desea pagar");
            }
        
    


/*Ejercicio 6
 
  Escribir en codigo un programa conversor de divisas
  Debe recibir como parametro una cantidad en pesos mexicanos y
  Segun sea la opcion que se indique, realizar la conversion correspondiente
  1. A dolares estadounidenses
  2. A euros 
  3. A yenes japoneses
  4. A libra esterlina
  5. A franco suizo
  Consideracion: estructura switch*/

let pesosMxn = (10)
let conversion = (5)
    switch (conversion) {
        case (1):
             let dolares = pesosMxn * 0.058;
            console.log(`${pesosMxn} pesos mxn son ${dolares} dolares`);
            break;
        case (2):
            let euros = pesosMxn * 0.054;
            console.log(`${pesosMxn} pesos mxn son ${euros} euros`);
            break;
        case (3):
            let yenesJaponeses = pesosMxn * 8.40;
            console.log(`${pesosMxn} pesos mxn son ${yenesJaponeses} yenes japoneses`);
            break;
        case (4):
            let libraEsterlina = pesosMxn * 0.046;
            console.log(`${pesosMxn} pesos mxn son ${libraEsterlina} libras esterlinas`);
            break;
        case (5):
            let francoSuizo = pesosMxn * 0.051;
            console.log(`${pesosMxn} pesos mxn son ${francoSuizo} francos suizos`);
            break;
        default:
            console.log ("Esa no es una opción válida")
    }

