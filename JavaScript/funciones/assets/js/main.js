/* funciones, nos permiten reutilizar codigo */

function saludar(nombre = "panchito", apellido = ""){

    //string normal
    /* console.log('Hola mi nombre es:', nombre, apellido); *///pedro
    //templates String || Plantillas literarias
    /* console.log(`Hola mi nombre es:${nombre?"Pedro":"Desconocido"}`); */
    return `Mi nombre es ${nombre} ${apellido}`;
}

saludar("Pedro", "Sánchez");//la incvocacion o lamada de la funcion 

let funcionSaludar = saludar('Felipe', 'Maqueda');
//console.log(funcionSaludar);

//console.log(saludar('Alberto', 'Hernandez').toUpperCase());


/* document.write('<h1>Este es un h1</h1>');
document.log('<h1>Este es un h1</h1>');
document.log(`<h1>Este es un h1</h1>`); *///plantilla literal



/* 
if(){
    codigo
}else{
    otro codigo
} 
*/


//console.log(funcionSaludar.toLowerCase());


/* Funcion declarada */

function suma(a,b){
    return a + b;
}

console.log(suma(10,20));
/* 
hoistin
*/


/*  Funciones | Funcion expresion */
const resta = function(a,b){
    return a - b;
}

console.log(resta(30,10));



/* setTimeout(()=>{

}, 3000); */



//funcion flecha 
const multiplicacion = (a,b) => a * b;

console.log(multiplicacion(40, 5));




































































