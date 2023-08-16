//TAREA 1
// 1. Crear y ejecutar un archvo html basico con un script JavaScript incorporado
// 2. Escribir un script simple que muestre un "Hola mundo" en la consola del navegador 
console.log("- SCRIPT SIMPLE -")
console.log("Hola mundo");

// 3. Declarar variables y asignar valores
console.log("- DECLARAR Y ASIGNAR -")
var y = 45;
var x = 10;
console.log("x=" + x +"     y="+y)

// 4. Utilizar operadores para realizar operaciones matematicas simples
console.log("- OPERADORES -")
suma= x+y;
mult = x*y;
resta = x-y;
console.log("x=" + x +"     y="+y)
console.log("suma: "+ suma +", "+ "multiplicacion: "+ mult+ ", " +"resta: "+ resta)

// 5. Escribir condicionales if para tomar decisiones basadas en valores
console.log("- CONDICIONALES -")
if (x!=y) {
    console.log("unica condicion")
}
// 6. Experimentar con diferentes condiciones y salidas
console.log("- DIFERENTES CONDICIONES -")
if (x==y) {
    console.log("opcion 1: x & y son iguales")
} else {
    console.log("opcion 2: x & y son diferentes")
}


// TAREA 2
console.log("- TEMPERATURA -")
var gradosC=25;
var gradosF=32+(9*gradosC/5); 
console.log(gradosC + "ºC equivalen a " + gradosF + "ºF");

console.log("- CIRCUNFERENCIA -")
 var radio=12;
 const pi = 3.1416;
 var longitud= 2*pi*radio;
 var area=pi*radio*radio;
 console.log("Radio = " + radio)
 console.log("Longitud de la circunferencia = " + longitud)
 console.log("Area de la circunferencia = " + area)

 console.log("- VELOCIDAD -")
 var kmh=100;
 var ms = (kmh * (5/18)).toFixed(2);
 console.log(kmh + "km/h equivalen a " + ms + "m/s");

 console.log("- PITAGORAS -")
var a= 20;
var b= 30;
var c = Math.sqrt((a*a)+(b*b)).toFixed(2);
console.log("Cateto a = " +a);
console.log("Cateto b = " +b);
console.log("Hipotenusa = " +c);

console.log("- MATRIZ INVERSA -")
var matriz = [0,1,2,3,4,5];
var length = matriz.length;
console.log("Matriz: "+matriz);
var matrizInversa=[];
for (i=length-1; i>=0; i--) {
    matrizInversa.push(matriz[i])  
}
console.log("Matriz Inversa: " + matrizInversa);

// TAREA 3 - PALINDROMOS
console.log("- PALINDROMOS -");
var palabra = "Anita lava la Tina"
palabra = palabra.toLowerCase().replaceAll(" ", "");
var reversa = palabra.split("").reverse().join("");
var palindromo;
if (palabra===reversa) {
    palindromo="si"
} else {
    palindromo="no"
}
console.log(palabra,"=", reversa, "?");
console.log("palindromo: " + palindromo );

// TAREA 4
console.log("- EJERCICIOS ARRAYS -");

var array=[2,3,1,10,29,8,30,9,45,6,20]
console.log("array: "+ array)
// probando las funciones
console.log("suma = "+ sumaArray(array));
console.log("[min,max] = "+minMax(array));
console.log("promedio: " + promedio(array));
console.log("pares: " + pares(array));
console.log("encontrado? " + encontrar(100,array))


// Funcion que sume los valores de un array
function sumaArray(a) {
    var suma=0;
    for (i = 0; i < a.length; i++) {
        suma = a[i] + suma;
    }
    return suma;
}

// Regresar el valor minimo y maximo del arreglo
function minMax(a) {
    var valores = [];
    valores[0] = Math.min(...a);
    valores[1] = Math.max(...a);
    return valores;
}

// Calcular promedio de un Array 
function promedio(a) {
    var suma = sumaArray(a);
    var numElementos = a.length;
    var promedio = suma/numElementos;
    promedio=promedio.toFixed(2);
    return promedio;
}

function pares(a) {
    var pares = [];
    for (i = 0; i < a.length; i++) {
        if ((a[i] % 2)==0){
            pares.push(a[i]);
        }
    }
    return pares; 
}

function encontrar(num, a) {
    var encontrado = a.includes(num);
    return encontrado;
}
