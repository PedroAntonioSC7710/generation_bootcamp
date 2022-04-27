const nombre = "Pedro";
const nombre2 = new String("Antonio");

const persona = new Object();
persona.nombre = "Pedro"
persona.apellido = "Sánchez"
persona.edad = "18"

console.log(persona);

const nuevaPersona = {
    /* atributos o propiedades */
    nombreCompleto: {
        nombre: "Antonio",
        apellido: "Castañón"
    },
    edad: 18,
    pasatiempos: ["jugar","salir","series"],
    tieneTrabajo: false,
    /* metodo */
    saludar: function (){
        console.log("Hola");
    },
    sumar: function(n1,n2){
        console.log(`El resultado de la suma es ${n1 + n2}`);
    }
}

"Hola".length /* atributo o propiedad */
"Hola".toLowerCase/* metodo */

console.log(nuevaPersona.edad);
console.log(nuevaPersona.nombreCompleto.nombre);
console.log(nuevaPersona.pasatiempos[1]);

nuevaPersona.saludar()
nuevaPersona.sumar(5,10)

/* para cambiar el valor */
nuevaPersona.edad = 10
console.log(nuevaPersona);

/* Agregar nuevo atributo */
nuevaPersona.colorFavorito = "Azul"
console.log(nuevaPersona.colorFavorito);

console.log(nuevaPersona.hasOwnProperty("edades")); 

console.log(Object.keys(nuevaPersona));
console.log(Object.values(nuevaPersona));


const Pedro = {
    nombreCompleto: {
        nombre: "Antonio",
        apellido: "Castañón"
    },
    edad: 18,
    pasatiempos: ["jugar","salir","series"],
}



















































































