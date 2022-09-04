var textoOriginal;
var textoFinal;
const letras = ["a","e","i","o","u"]
const letrasEnc = ["ai","enter","imes","ober","ufat"]

function desencriptar(myvalue) {
    textoOriginal = document.getElementById("textoEncriptable").value;
    textoFinal = textoOriginal.toLowerCase();
    for(i = 0; i <letras.length; i++) {
        if(textoFinal.includes(letrasEnc[i])){
            textoFinal = textoFinal.replaceAll(letrasEnc[i],letras[i]);
        }
    }
    mostrarTexto();
}

function encriptar(myvalue) {
    textoOriginal = document.getElementById("textoEncriptable").value;
    textoFinal = textoOriginal.toLowerCase();
    for(i = 0; i <letras.length; i++) {
        if(textoFinal.includes(letras[i])){
            textoFinal = textoFinal.replaceAll(letras[i],letrasEnc[i]);
        }
    }
    mostrarTexto();
}

function copiarTexto(){
    var content = document.getElementById('textoResultado');
    content.select();
    navigator.clipboard.writeText(content.value)
    mensaje.value = "";
    alert("Texto Copiado")
}

function mostrarTexto(){
    if(textoFinal == ""){
        document.querySelector(".contenedorResultados").innerHTML=""
        document.querySelector(".contenedorResultados").innerHTML='<img src="imagenes/Muñeco.png" alt="muñeco" class="imagen3"> <p class="aviso">Ningún mensaje fue encontrado</p> <p class="aviso">Ingrese el texto que desea encriptar o desencriptar.</p>'
        return;
    }
    if(document.querySelector(".contenedorResultados").innerHTML == '<textarea id="textoResultado" cols="70" rows="10" class="textArea" readonly></textarea> <button class="boton" onclick="copiarTexto()">Copiar</button>'){
        document.getElementById("textoResultado").innerHTML=textoFinal;
        return;
    }

    document.querySelector(".contenedorResultados").innerHTML=""
    document.querySelector(".contenedorResultados").innerHTML= '<textarea id="textoResultado" cols="70" rows="10" class="textArea" readonly></textarea> <button class="boton" onclick="copiarTexto()">Copiar</button>'
    document.getElementById("textoResultado").innerHTML=textoFinal;
    
    
}

