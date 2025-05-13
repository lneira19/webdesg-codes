/*
1. Crear un formulario HTML que permita ingresar nombres de personas. 

2. Al enviar el formulario, el nombre debe agregarse a una lista que se muestra en 
pantalla. 

3. Debe haber un botón para borrar todos los nombres. 

4. No se requiere validación ni edición de nombres. 
*/

/* DATOS PREDETERMINADOS */
const arr_nombres = ["Mateo","Marcos","Lucas","Juan"]

/* ELEMENTOS DEL DOCUMENTO */
let ul_nombres = document.getElementById("ul_nombres")
let form_ingresodata = document.getElementById("form_ingresodata")
let addDataBtn = document.getElementById("addDataBtn")
let clearListBtn = document.getElementById("clearListBtn")

/* FUNCIONES INDEPENDIENTES DEL HTML */
function agregarNombre(nombre,apellido){
    // Checkeo de valores correctos
    if ((!nombre) || (!apellido)){
        console.log("Valores incorrectos.")
        alert("Complete los campos con valores válidos.")
        return 1
    }

    let data = nombre+" "+apellido
    arr_nombres.push(data)
    console.log("Lista actualizada correctamente.")
    return 0
}

/* FUNCIONES PARA ACTUALIZACIÓN DE HTML*/
function actualizarListaNombres(){
    let inntxt = arr_nombres.reduce((acumulador,valoractual) => acumulador+"<li>"+valoractual+"</li>", "")
    console.log(inntxt)
    ul_nombres.innerHTML = inntxt
}

/* APP */
actualizarListaNombres()

addDataBtn.addEventListener("click",function(){
    agregarNombre(form_ingresodata.nombre.value,form_ingresodata.apellido.value)
    actualizarListaNombres()
    console.log(arr_nombres)
})

clearListBtn.addEventListener("click",function(){
    arr_nombres.length = 0
    actualizarListaNombres()
    console.log(arr_nombres)
})