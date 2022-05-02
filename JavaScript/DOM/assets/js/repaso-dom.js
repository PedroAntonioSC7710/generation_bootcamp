
const $padre = document.querySelector('.padre')

//getelEmentById
/* 
# llamar un id
. llamar una clase
*/

const $parr = document.createElement('p');

$parr.textContent = 'Lorem ipsum';
$parr.textContent += 'Lorem ipsum';
$parr.textContent += 'Lorem ipsum';

$padre.appendChild($parr);


//Agrefar elementos con innerHTML

const $cuadro = document.querySelector('.cuadro')
$cuadro.innerHTML = ''; //inicializar el contenido del elemento

$cuadro.innerHTML = `
                    <a href="#">Este es un enlace</a>
                    <ol>
                        <li>Elemento 1</li>
                        <li>Elemento 2</li>
                        <li>Elemento 3</li>
                    </ol>
                    `;

const estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno'];

const $lista = document.createElement('ul');

estaciones.forEach(elemento => {
    const $li = document.createElement('li');
    $li.textContent = elemento;
    $lista.appendChild($li);
});

//document.body.appendChild($lista);
$cuadro.appendChild($lista);




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const continentes = ['Africa', 'America', 'Asia', 'Europa', 'Oceania'];

const $ol = document.createElement('ol');
$cuadro.appendChild($ol);

continentes.forEach(constinente => {$ol.innerHTML += `<li>${continente}</li>`})




















































































