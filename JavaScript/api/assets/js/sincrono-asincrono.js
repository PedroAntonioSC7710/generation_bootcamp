/* let tiempo = 5000
let datos

setTimeout(()=>{
    datos = "Pedro"
    console.log("datos");
},tiempo)

console.log(datos);

console.log("Hola"); */


const datos = [
    {
        nombre: "Pedro",
        edad: 18,
    },
    {
        nombre: "luis",
        edad: 32,
    },
    {
        nombre: "Saul",
        edad: 20,
    }
]

function obtenerDatos(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve (datos)
        },3000)
    })
}

console.log(obtenerDatos());

obtenerDatos().then((datos) => {
    console.log(datos);
});


async function obtenerDatosAsync (){
    const datosObtenidos = await obtenerDatos()
    console.log(datosObtenidos);
}

obtenerDatosAsync()
















































































