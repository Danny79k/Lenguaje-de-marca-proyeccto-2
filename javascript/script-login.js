function  checkCredentials(){
if (document.getElementById("password").value == b && document.getElementById("user").value == a){
  window.location.replace("index.html")
  document.getElementById("exitoso").style.display = "block"
  }else if(document.getElementById("password")){
    document.getElementById("denegado").style.display = "block"
  }
}

function  admin(){
  if (document.getElementById("password").value == "1234" && document.getElementById("user").value == "admin"){
    window.location.replace("index.html")
    document.getElementById("exitoso").style.display = "block"
    }else if(document.getElementById("password")){
      document.getElementById("denegado").style.display = "block"
    }
  }
var a,b
function signIn(){
do{
  do {
  a = prompt("introduce un usuario: ")
  if (a.length < 4){
    alert("Introduce un usuario de mas de 5 caracteres")
  }
  } while (a.length < 4)
  do {
  b = prompt("introduce una contraseña: ")
  if (b.length < 4){
    alert("Introduce una contraseña de mas de 5 caracteres")
  }
  } while (b.length < 4)
  if (a == b){
    alert("usuario y contraseña no pueden ser los mismos")
  }
}while(a == b)
}
