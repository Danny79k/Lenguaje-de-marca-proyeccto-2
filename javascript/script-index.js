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

function rellenaTabla(){

    

a = prompt("introduce el grupo muscular 1")
b = prompt("introduce el ejercicio 1")
c = prompt("introduce el numero de repeticiones 1")
d = prompt("introduce el grupo muscular 2")
e = prompt("introduce el ejercicio 2")
f = prompt("introduce el numero de repeticiones 2")
g = prompt("introduce el grupo muscular 3")
h = prompt("introduce el ejercicio 3")
i = prompt("introduce el numero de repeticiones 3")
l = prompt("introduce el grupo muscular 4")
m = prompt("introduce el ejercicio 4")
n = prompt("introduce el numero de repeticiones 4")

document.getElementById("musculo-custom-1").innerHTML = a
document.getElementById("musculo-custom-2").innerHTML = d
document.getElementById("musculo-custom-3").innerHTML = g
document.getElementById("musculo-custom-4").innerHTML = l

document.getElementById("ejercicio-custom-1").innerHTML = b
document.getElementById("ejercicio-custom-2").innerHTML = e
document.getElementById("ejercicio-custom-3").innerHTML = h
document.getElementById("ejercicio-custom-4").innerHTML = m

document.getElementById("repeticiones-custom-1").innerHTML = c
document.getElementById("repeticiones-custom-2").innerHTML = f
document.getElementById("repeticiones-custom-3").innerHTML = i
document.getElementById("repeticiones-custom-4").innerHTML = n
}

function borraTablaCustom(){

    document.getElementById("musculo-custom-1").innerHTML = " "
    document.getElementById("musculo-custom-2").innerHTML = " "
    document.getElementById("musculo-custom-3").innerHTML = " "
    document.getElementById("musculo-custom-4").innerHTML = " "

    document.getElementById("ejercicio-custom-1").innerHTML = " "
    document.getElementById("ejercicio-custom-2").innerHTML = " "
    document.getElementById("ejercicio-custom-3").innerHTML = " "
    document.getElementById("ejercicio-custom-4").innerHTML = " "

    document.getElementById("repeticiones-custom-1").innerHTML = " "
    document.getElementById("repeticiones-custom-2").innerHTML = " "
    document.getElementById("repeticiones-custom-3").innerHTML = " "
    document.getElementById("repeticiones-custom-4").innerHTML = " "
}
