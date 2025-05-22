//Titulo que aparecera en todas las paginas, le puse class para luego que se vincule con el html
let titulo=`<a href="./listas.html"><h1 class="titulo">REGALALO</h1></a><img class="logo" src="../img/regalo.png" alt="logo de pagina" width="100">`;

document.querySelector('.titulo').innerHTML=titulo;

//Pie de página en casi todas las paginas (menos en iniciar sesion)
let cerrarSesion =`<a href="./index.html" class="cerrar-sesion">Cerrar sesión</a>`;

document.querySelector('.cerrar-sesion').innerHTML=cerrarSesion;

//Navegador para regresar a las listas de regalos
let regresarLista=``


//Simule un JSON,, en que desde una base de datos, nos trae los datos de las listas creadas por el usuario
let listaRegalosJSON= `{
  "listas": [
    {
      "id": 0,
      "nombre": "Marcos Buono",
      "img": "regalos1.jpg",
      "url": "marcosbuono.html"
    },
    {
      "id": 1,
      "nombre": "Veronica Lopez",
      "img": "regalos2.jpg",
      "url": "veronicalopez.html"
    },
    {
      "id": 2,
      "nombre": "Marcos Toledo",
      "img": "regalos3.png",
      "url": "marcostoledo.html"
    }
  ]
}`;

//converti el JSON en un objeto de JavaScript
let listaRegalosObj=JSON.parse(listaRegalosJSON);

//Empiezo a crear la variante navegacion, para luego incluir en el HTML
let navegacion=`<nav>`

//A traves de este for, voy recorriendo toda la matris de las listas, para crear un html de navegacion
for (let i=0; i<listaRegalosObj.listas.length; i++){
    navegacion=navegacion+`<a id="listado" href="${listaRegalosObj.listas[i].url}">${listaRegalosObj.listas[i].nombre}<img src="./img/${listaRegalosObj.listas[i].img}" alt="Regalo ${i+1}" width="80"></a>`
}
//Cierro el html de navegacion. Ademas le agrego un boton más para SIMULAR si se agrega una nueva lista
navegacion=navegacion+`<a id="listado" href="listas.html">Agregar lista<img src="./img/agregar.png" alt="Vacio" width="80"></a> </nav>`

//Incrusto en el div con class "listas" el fragmento de html que hice en la variante navegacion
document.querySelector('.listas').innerHTML=navegacion;