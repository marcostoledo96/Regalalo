function sumar (a,b){
    suma=a+b;
    return suma;
};
let tabla, hasta, result;
tabla=parseInt(prompt("ingrese un numero"));
hasta=parseInt(prompt("Ingrese otro numero"));
/*result= sumar(a,b);
console.log(result);*/

/*let lista=[];

function crearLista(){
    let i=1, rta;
    while (sigue){
        rta=prompt("Ingrese el nombre del alumno numero "+i+". Ingrese 0 para terminar");
        if (rta==0){
            sigue=false;
            break;
        }
        lista[i]=
    }
}*/

function tablaMultiplicar(tabla, hasta) {
    for (var i = 1; i <= hasta; i++){
        console.log(tabla + " x " + i + " = ", tabla * i);
    }
}

tablaMultiplicar(tabla, hasta);