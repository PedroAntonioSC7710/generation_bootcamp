const url = "https://api.thecatapi.com/v1/images/search"
const imagen =document.getElementById('imagenMichi')

fetch(url).then(respuesta => respuesta.json()).then(datos =>{
    console.log(datos);
    imagen.src = datos.message
});



