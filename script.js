var textInput = document.querySelector("#text");
var outInput = document.querySelector("Rectangle_1");

function criptografar(){
    var text = textInput.value;

    var resultCripto = text.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('Rectangle_1').innerHTML = '<input readonly id="text">' + resultCripto
    '</input>' + '<button class="ntn-copiar" id="copiar" onclick="copiar()"></button>'
    alert("A interpoll nunca vai te achar!!");

}

function descriptografar(){
    var text = textInput.value;

    var resultDescripto = text.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g,"u");
    
    document.getElementById('Rectangle_1').innerHTML = '<input readonly id="text">' + resultDescripto
    '</input>' + '<button class="ntn-copiar" id="copiar" onclick="copiar()"></button>'
    alert("A interpoll te achou!!");

}

function copiar(){
    var textCop = document.getElementById('#text');
    textCop.select();
    document.execCommand('copy');
    alert("Texto Copiado");
}