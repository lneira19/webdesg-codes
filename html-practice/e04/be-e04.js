/*
1. Crear un formulario HTML que permita ingresar 3 números (por ejemplo, notas). 

2. Al presionar un botón, mostrar el promedio de los tres números. 

3. Si algún campo está vacío, no se debe calcular y se muestra un mensaje de 
advertencia. 

4. Solo se permite calcular una vez por carga (no es necesario agregar múltiples 
entradas). 
*/

/* VARIABLES BACKEND */
let promedio = "Indefinido"

/* VARIABLES DOCUMENT */
let form_notas = document.getElementById("form_notas")
let mark_promedio = document.getElementById("mark_promedio")

/* FUNCIONES BACKEND */
function calcularPromedio(arr_numeros){
    // Sumatoria
    let sumatoria = arr_numeros.reduce(
        (acumulador,valor_actual) => acumulador+valor_actual,0)
    
    // Promedio
    let promedio = sumatoria/arr_numeros.length
        
    return promedio
}

/* FUNCIONES DOCUMENTO */
function actualizarMarkPromedio(){
    mark_promedio.innerHTML = promedio
}

/* MAIN */
actualizarMarkPromedio()

form_notas.addEventListener("submit",function(event){
    event.preventDefault()

     // Obtener los valores de los inputs
    const nota1 = parseFloat(document.getElementById("nota1").value)
    const nota2 = parseFloat(document.getElementById("nota2").value)
    const nota3 = parseFloat(document.getElementById("nota3").value)

    let arr_notas = [nota1,nota2,nota3]
    promedio = calcularPromedio(arr_notas)
    actualizarMarkPromedio()
})