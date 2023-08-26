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

// TAREA 3: PALINDROMOS
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

// TAREA 4: ARRAYS
console.log("- EJERCICIOS ARRAYS -");

var array=[3,5,3,8,2,8,3,5];
console.log("array: "+ array)

// probando las funciones
console.log("suma = "+ sumaArray(array));
console.log("[min,max] = "+minMax(array));
console.log("promedio: " + promedio(array));
console.log("pares: " + pares(array));
console.log("array ordenado: " + ordenar(array));
console.log("encontrado? " + encontrar(2,array));
console.log("contador(numero especifico): " + contarNum(8,array));
console.log("valores unicos: " + unicos(array));


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

// devuelve un array con solo los pares
function pares(a) {
    var pares = [];
    for (i = 0; i < a.length; i++) {
        if ((a[i] % 2)==0){
            pares.push(a[i]);
        }
    }
    return pares; 
}

// ordenar un array de forma ascendente
function ordenar(a) {
    return a.sort(function(a, b) {
      return a - b;
    });
  }

// funcion que toma un array y un valor como entrada y determina si el valor esta presente en el array
function encontrar(num, a) {
    var encontrado = a.includes(num);
    return encontrado;
}

// funcion que cuente cuantas veces aparece un valor especifico en un array
function contarNum(num,a) {
    let contador = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i]==num) {
            contador++;
        }
    }
    return contador;
}

// toma un array como entrada y devuelve un array con los elementos que aparecen una sola vez
function unicos(a) {
    var valoresUnicos = [];
    for (let i = 0; i < a.length; i++) {
        x = contarNum(a[i],a);
        if (x==1) {
            valoresUnicos.push(a[i]);
        }
    }
    return valoresUnicos;
}



// TAREA 5: OBJETOS

// crear objeto que represente a una persona con propiedades como nombre, edad y profesion
var persona = {
    nombre: "Diego",
    edad: 24,
    profesion:"Arquitecto",
};

console.log(persona.nombre);

// un objeto que representa a un libro con propiedades como titulo y autor,
// acceder e imprimir el titulo del libro

let libro = {
    titulo: "Una habitacion propia",
    autor:"Virginia Woolf",
};

console.log(libro.titulo);

// Modifica la propiedad del autor a otro nombre
console.log(libro.autor);
libro.autor="Maria Lopez"
console.log(libro.autor);

// Dado un objeto que representa a una mascota con propiedades como nombre, raza y edad, 
// utiliza la destructuración para obtener y mostrar el nombre y la edad de la mascota.

let mascota = {
    nombre:"Toby",
    raza:"pastor aleman",
    edad:3,
};

let {nombre, raza, edad} = mascota;
console.log(nombre);
console.log(raza);
console.log(edad);

// TAREA 5: FUNCIONES

// definir una funcion
// funcion llamada 'saludar' que tome un nombre como parametro y devuelva un saludo a ese nombre
function saludar(nombre) {
    saludo="Saludos a "+nombre;
    return saludo;
}

console.log("1. Funcion saludar: " + saludar("Mariana"));

// funcion flecha
let saludarFlecha = (nombre) => ("Saludos a " + nombre);

console.log("2. Funcion saludar (flecha): " + saludarFlecha("Mariana"));


// Definir una función llamada "operar" que tome tres parámetros: dos números y una función.  
// La función debe aplicar la función recibida a los dos números y devolver el resultado. 

function operar(num1, num2, funcion) {
    return funcion(num1, num2);
  }

const resultado = operar(3, 5, function(num1,num2) {
    return (num1*num2);
})

console.log("3. Funcion anonima como argumento: "+resultado)

// Dado un array de números, usar la función "map" para crear un nuevo array que contenga  el doble 
// de cada número en el array original. Usar una función flecha.

let dobleArray = array.map(num => (num*2));
console.log("4. Doble array: "+dobleArray);
console.log("   Array orginal: "+array);

// Dado un array de nombres, usar la función "filter" para crear un nuevo array que contenga 
// solo los nombres que tengan más de 5 letras. Usar una función anónima.

let nombres = ["Mariana", "Diego", "Luis", "Camila", "Josefina", "Fernando", "Elsa", "Lucia"];
let nombresLargos=nombres.filter(function(nombre) {
    return nombre.length > 5;
});

console.log("5. Nombre + de 5 letras: " + nombresLargos);
console.log("Todos los nombres: " + nombres);


// EJERCICIO: salto de la rana

function cant(x,y,d){
    let recorrido = x;
    let saltos = 0;
    while (recorrido < y) {
        recorrido = recorrido + d;
        saltos++;
    }
    return saltos;
}

console.log("saltos: ", cant(10,85,30));