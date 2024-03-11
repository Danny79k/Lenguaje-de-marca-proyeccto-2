function borraTabla(){

    document.getElementById("musculo-1").innerHTML = " "
    document.getElementById("musculo-2").innerHTML = " "
    document.getElementById("musculo-3").innerHTML = " "
    document.getElementById("musculo-4").innerHTML = " "

    document.getElementById("ejercicio-1").innerHTML = " "
    document.getElementById("ejercicio-2").innerHTML = " "
    document.getElementById("ejercicio-3").innerHTML = " "
    document.getElementById("ejercicio-4").innerHTML = " "

    document.getElementById("repeticiones-1").innerHTML = " "
    document.getElementById("repeticiones-2").innerHTML = " "
    document.getElementById("repeticiones-3").innerHTML = " "
    document.getElementById("repeticiones-4").innerHTML = " "
}

function tablaEjercicio(){

    document.getElementById("musculo-1").innerHTML = "Pecho"
    document.getElementById("musculo-2").innerHTML = "Dorsales"
    document.getElementById("musculo-3").innerHTML = "Hombros"
    document.getElementById("musculo-4").innerHTML = "Piernas"

    document.getElementById("ejercicio-1").innerHTML = "Banca plana"
    document.getElementById("ejercicio-2").innerHTML = "Jalon al pecho"
    document.getElementById("ejercicio-3").innerHTML = "pajaro tumbado"
    document.getElementById("ejercicio-4").innerHTML = "extension de cuadriceps"

    document.getElementById("repeticiones-1").innerHTML = "4*12"
    document.getElementById("repeticiones-2").innerHTML = "3*15"
    document.getElementById("repeticiones-3").innerHTML = "4*12"
    document.getElementById("repeticiones-4").innerHTML = "5*16"
}

let res
function calcProte(){

    try {
        let a = document.getElementById("prote-input").value
        if(isNaN(a)){
            throw new Error
        }
        res = a * 1.5
        document.getElementById("prote-display").innerHTML = `${res} gramos de proteina`
    } catch (error) {
        alert("Introduce solo numeros")
    }
  }

function borra(){

    document.getElementById("prote-display").innerHTML = ""
}