

var textoOriginal;
var textoFinal;
var numero;
var letra1;
const vacio = document.querySelector(".resultadoVacio");
const resultado = document.querySelector(".resultado");
const letras = ["a","e","i","o","u"]
const letrasEnc = ["ai","enter","imes","ober","ufat"]

function desencriptar() {
    textoOriginal = document.getElementById("textoEncriptable").value;
    textoFinal = textoOriginal.toLowerCase();
    for(i = 0; i <letras.length; i++) {
        if(textoFinal.includes(letrasEnc[i])){
            textoFinal = textoFinal.replaceAll(letrasEnc[i],letras[i]);
        }
    }
    mostrarTexto();
}

function encriptar() {
    textoOriginal = document.getElementById("textoEncriptable").value;
    textoOriginal = textoOriginal.toLowerCase();
    textoFinal = "";
    for(var i = 0; i <textoOriginal.length ; i++) {
        numero = comparar(textoOriginal[i])
        if(numero == -1){
            textoFinal += textoOriginal[i];
        }else{
            textoFinal += letrasEnc[numero];
        }
    }
    mostrarTexto();
}

function comparar(letra){
    for(i = 0; i <letras.length; i++) {
        if(letra == letras[i]){
            return i;
        }
    }
    return -1;
}

function copiarTexto(){
    var content = document.getElementById('textoResultado');
    content.select();
    navigator.clipboard.writeText(content.value)
    content.select();
    Swal.fire({
        icon:"success",
        width:"200px",
        html: '<div class="textAlerta">Texto Copiado</div>',
        background:"none",
        toast: true,
        position: "top",
        backdrop: false,
        showConfirmButton: false,
        timer: 1000
        });
}

function mostrarTexto(){
    if(textoFinal == ""){
        vacio.style.display = "block";
        resultado.style.display = "none";
        return;
    }else{
        vacio.style.display = "none";
        resultado.style.display = "block";
        document.getElementById("textoResultado").innerHTML=textoFinal;
    }
    
}

