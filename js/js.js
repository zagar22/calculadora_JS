const titulo = document.getElementById('titulo');
const boton = document.getElementById('boton');


boton.addEventListener('click',()=>{
   if (titulo.innerHTML == "Calculadora"){
       titulo.innerHTML = "Cambiando el titulo desde js"
   }else{
       titulo.innerHTML="Calculadora"
   }
})