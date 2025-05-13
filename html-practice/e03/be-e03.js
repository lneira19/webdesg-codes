/*
1. Crear una página con un número en pantalla que comienza en 0. 

2. Incluir tres botones: 
○ Aumentar 
○ Disminuir 
○ Reiniciar 

3. Al hacer clic en cada botón, se actualiza el valor mostrado. 

4. Todo debe ser visible desde el HTML sin estilos. 
*/

/* VARIABLES BACKEND */
let contador = 0

/* VARIABLES DOCUMENT */
let span_contador = document.getElementById("span_contador")
let add_btn = document.getElementById("add_btn")
let red_btn = document.getElementById("red_btn")
let res_btn = document.getElementById("res_btn")

/* FUNCIONES BACKEND */
function agregarUnidad(){
    contador += 1
}

function reducirUnidad(){
    contador -= 1
}

function reiniciarContador(){
    contador = 0
}

/* FUNCIONES DOCUMENT */
function actualizarSpanContador(){
    span_contador.innerHTML = contador
}

/* MAIN */
actualizarSpanContador()

add_btn.addEventListener("click",function(){
    agregarUnidad()
    actualizarSpanContador()
    console.log(contador)
})

red_btn.addEventListener("click",function (){
    reducirUnidad()
    actualizarSpanContador()
    console.log(contador)
})

res_btn.addEventListener("click",function(){
    reiniciarContador()
    actualizarSpanContador()
    console.log(contador)
})