window.addEventListener('load', function(){
});

function saludar(){
}



const $botonSemantico = document.getElementById('evento-semantico');

$botonSemantico.onclick = saludar;

$botonSemantico.onclick = function (evento) {
    console.log(evento.target);
}



const $botonMultiple = document.getElementById('evento-multiple');

$botonMultiple.addEventListener('click', saludarMultiple)

$botonMultiple.addEventListener('click', function(e) {
    console.log(e.key);    
})

function saludarMultiple(){
}








