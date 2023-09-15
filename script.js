/* JUGABILIDAD */

const imgXTurn = document.querySelector(".imgXTurn")
const imgOTurn = document.querySelector(".imgOTurn")
const btnXO = document.querySelectorAll(".btnXO")
const divXOInicial = document.getElementById("divXOInicial")
const seccion4 = document.querySelector(".seccion4")
const mainContainer = document.getElementById("mainContainer")
const winX = document.getElementById("winX")
const tie = document.getElementById("tie")
const winO = document.getElementById("winO")

const btnXO1 = document.querySelector(".btnXO1")
const btnXO2 = document.querySelector(".btnXO2")
const btnXO3 = document.querySelector(".btnXO3")
const btnXO4 = document.querySelector(".btnXO4")
const btnXO5 = document.querySelector(".btnXO5")
const btnXO6 = document.querySelector(".btnXO6")
const btnXO7 = document.querySelector(".btnXO7")
const btnXO8 = document.querySelector(".btnXO8")
const btnXO9 = document.querySelector(".btnXO9")


/* funcion para hacer aleatorio el primer turno */

let turn = "";

const turnoAleatorio = () => {
  
const arrayXO = ["X", "O"];
const randomIndex = Math.floor(
   Math.random() * arrayXO.length)

   turn = arrayXO[randomIndex]

   divXOInicial.innerHTML = `
   <p class="pSeccion1">
    <img src="img/X-gris.png" class="imgXTurnInicio">
    <img src="img/O-gris.png" class="imgOTurnInicio">
    TURN
   </p>
   `
}
turnoAleatorio()


/* contadores de jugadas y movimientos en 0 */

let moves = 0
let countX = 0
let countTie = 0
let countO = 0

/* Comprobaciones para ver si hay o no valores del sessionStorage para sumar triunfos y mantener un historial */
if(sessionStorage.getItem("triunfosO")){
   winO.innerText = sessionStorage.getItem("triunfosO")
}else {
   winO.innerText = countO
}

if(sessionStorage.getItem("triunfosX")){
   winX.innerText = sessionStorage.getItem("triunfosX")
}else {
   winX.innerText = countX
}

if(sessionStorage.getItem("triunfosTie")){
   tie.innerText = sessionStorage.getItem("triunfosTie")
}else {
   tie.innerText = countTie
}


/* Eventos y funciones para el juego ("X" o "O" en cada casilla, cases de triunfos, acciones que se cumplen al terminar la partida, cambiar img para saberse el turno) */

btnXO.forEach(btnXO => { 
    btnXO.addEventListener("click", () => {
        /* IF para que NO se pueda cambiar una imagen si ya fue presionado el btn */
        if (!btnXO.innerHTML.trim()) {
        /* Agrego una imagen de X o O dependiendo el turno y cambion el turno con cada click */    
        btnXO.innerHTML = `<img class="imgJs" src="img/${turn}.png">`
        /* cambio el turno de "X" a "O" o viceversa con cada click*/
        turn = (turn === "X") ? "O" : "X"
        /* if para poner el valor de true o false al boton cuando se presiona (valor que me sirve para determinar el ganador) */
        turn === "X" ? btnXO.value = "O" : btnXO.value = "X"
        /* Incrementar el contador de movimientos */
        moves++

        /* cases de ganador O */
        let case1 = (btnXO1.value == "O" && btnXO2.value == "O" && btnXO3.value == "O") 
        let case2 = (btnXO4.value == "O" && btnXO5.value == "O" && btnXO6.value == "O")
        let case3 = (btnXO7.value == "O" && btnXO8.value == "O" && btnXO9.value == "O") 
        let case4 = (btnXO1.value == "O" && btnXO4.value == "O" && btnXO7.value == "O") 
        let case5 = (btnXO2.value == "O" && btnXO5.value == "O" && btnXO8.value == "O") 
        let case6 = (btnXO3.value == "O" && btnXO6.value == "O" && btnXO9.value == "O")
        let case7 = (btnXO1.value == "O" && btnXO5.value == "O" && btnXO9.value == "O") 
        let case8 = (btnXO3.value == "O" && btnXO5.value == "O" && btnXO7.value == "O") 
        /* cases de ganador X */
        let case9 = (btnXO1.value == "X" && btnXO2.value == "X" && btnXO3.value == "X")
        let case10 = (btnXO4.value == "X" && btnXO5.value == "X" && btnXO6.value == "X") 
        let case11 = (btnXO7.value == "X" && btnXO8.value == "X" && btnXO9.value == "X") 
        let case12 = (btnXO1.value == "X" && btnXO4.value == "X" && btnXO7.value == "X") 
        let case13 = (btnXO2.value == "X" && btnXO5.value == "X" && btnXO8.value == "X") 
        let case14 = (btnXO3.value == "X" && btnXO6.value == "X" && btnXO9.value == "X")
        let case15 = (btnXO1.value == "X" && btnXO5.value == "X" && btnXO9.value == "X") 
        let case16 = (btnXO3.value == "X" && btnXO5.value == "X" && btnXO7.value == "X") 
        /* case de empate */
        let case17 = (!case1 && !case2 && !case3  && !case4 && !case5 && !case6 && !case7 &&!case8 && !case9 &&  !case10  && !case11  && !case12 && !case13 && !case14 && !case15 && !case16) 


          if(case1 || case2 || case3 || case4 || case5 || case6 || case7 || case8){
            countO++
            sessionStorage.setItem("triunfosO", countO)
            let numeroDeTriunfosO = sessionStorage.getItem("triunfosO")
            winO.innerText = numeroDeTriunfosO
            mainContainer.style.opacity = .3  
            mainContainer.className = "mainNOClickeable"
            seccion4.style.display = "flex" 
            seccion4.innerHTML = `
            <div>
               <p class="pSeccion4">YOU WON!</p>
            </div>

            <div class="divXSeccion4 d-flex justify-content-around align-items-center">
               <img class="imgXOSeccion4" src="img/O.png" alt="">
               <p class="p2OSeccion4">TAKES THE ROUND</p>
            </div>

            <div class="m-3">
               <button onClick="quit()" class="btn1Seccion4">QUIT</button>
               <button onClick="nextRound()" class="btn2Seccion4">NEXT ROUND</button>
            </div>
            `

          }else if(case9 || case10 || case11 || case12 || case13 || case14 || case15 || case16){
            countX++
            sessionStorage.setItem("triunfosX", countX)
            let numeroDeTriunfosX = sessionStorage.getItem("triunfosX")
            winX.innerText = numeroDeTriunfosX
            mainContainer.style.opacity = .3
            seccion4.style.display = "flex" 
            seccion4.innerHTML = `
            <div>
               <p class="pSeccion4">YOU WON!</p>
            </div>

            <div class="divXSeccion4 d-flex justify-content-around align-items-center">
               <img class="imgXOSeccion4" src="img/X.png" alt="">
               <p class="p2XSeccion4">TAKES THE ROUND</p>
            </div>

            <div class="m-3">
               <button onClick="quit()" class="btn1Seccion4">QUIT</button>
               <button onClick="nextRound()" class="btn2Seccion4">NEXT ROUND</button>
            </div>
            `
          }else if(moves === 9 && case17){
            countTie++
            sessionStorage.setItem("triunfosTie", countTie)
            let numeroDeTies = sessionStorage.getItem("triunfosTie")
            tie.innerText = numeroDeTies
            mainContainer.style.opacity = .3
            seccion4.style.display = "flex" 
            seccion4.innerHTML = `
            <div>
               <p class="pSeccion4">TIE!</p>
            </div>

            <div class="divXSeccion4 d-flex justify-content-around align-items-center">
               <img class="imgXOSeccion4" src="img/X.png" alt="">
               <img class="imgXOSeccion4" src="img/O.png" alt="">
            </div>

            <div class="m-3">
               <button onClick="quit()" class="btn1Seccion4">QUIT</button>
               <button onClick="nextRound()" class="btn2Seccion4">NEXT ROUND</button>
            </div>
            `
          }
        }

        /* Cambiar img segun el turno que sea */
        if(turn === "X"){
            divXOInicial.innerHTML = `<p class="pSeccion1">
           <img src="img/X-gris.png" class="imgXOInicial">
           TURN
            </p>`
        }else{
            divXOInicial.innerHTML = `<p class="pSeccion1">
            <img src="img/O-gris.png" class="imgXOInicial">
            TURN
             </p>`
        }    
    })
})


/* Funcionalidad para el boton de reinicio */

const btnReiniciar = document.querySelector(".btnReiniciar")

let shouldQuit = false
let intervalId = null

function reiniciar (){
   mainContainer.style.opacity = 1
   mainContainer.className = "mainContainer"
   turnoAleatorio()
    btnXO.forEach(btnXO => {
        btnXO.innerHTML = ""
        btnXO.value = ""
        moves = 0 
        btnXO.disabled = false
        shouldQuit = true      
    })
}

btnReiniciar.addEventListener("click", () => {
  reiniciar()
})

/* funciones de botones QUIT y NEXT ROUND */

function quit () {
   mainContainer.className = "mainContainer"
   turnoAleatorio()
   mainContainer.style.opacity = 1
   seccion4.style.display = "none"
   shouldQuit = false
if(intervalId){
   clearInterval(intervalId)
}

intervalId = setInterval(() => {
   btnXO.forEach(btnXO => {
   if(!shouldQuit){
      btnXO.disabled = true
   }
}, 1000)
})
}


function nextRound () {
   seccion4.style.display = "none"
   reiniciar()
}  