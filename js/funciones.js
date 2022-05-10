var borrar = document.getElementById('limpiar');
borrar.addEventListener('click',()=>{
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
    document.getElementById('res').innerText = "";
})

function sumar(){
   var n1 = parseInt(document.getElementById('num1').value)
   var n2 = parseInt(document.getElementById('num2').value)
    document.getElementById('res').innerHTML = n1 + n2; 
}


function resta(){
    var n1 = parseInt(document.getElementById('num1').value)
    var n2 = parseInt(document.getElementById('num2').value)
     document.getElementById('res').innerHTML = n1 - n2; 
 }
 
 function multi(){
    var n1 = parseInt(document.getElementById('num1').value)
    var n2 = parseInt(document.getElementById('num2').value)
     document.getElementById('res').innerHTML = n1 * n2; 
 }
 
 function dividir(){
    var n1 = parseInt(document.getElementById('num1').value)
    var n2 = parseInt(document.getElementById('num2').value)
     document.getElementById('res').innerHTML = n1 / n2; 
 }