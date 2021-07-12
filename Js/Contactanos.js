function atajo1(){
    window.open('Quienes somos.html')
}
function atajo2(){
    window.open('Servicios.html')
}
function atajo3(){
    window.open('Consejos.html')
}
function atajo4(){
    window.open('Noticias.html')
}
function atajo5(){
    window.open('Contactanos.html')
}

function Ingresar(){
var nombre=document.getElementById("nombre").value;
var direccion=document.getElementById("direccion").value;
var correo=document.getElementById("correo").value;
var mensaje=document.getElementById("mensaje").value;
if(nombre==""){
    alert('Favor de ingresar su usuario');
    return false;
}   
if(direccion==""){
   alert('Favor de ingresar su clave');
    return false;
}if (correo==""){
    alert("Favor de ingresar su Correo");
    return false
}

    window.open('Blog.html','menu administrador','height=500px, width=800px')

}