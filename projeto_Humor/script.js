
const botao1 = document.getElementById('botao')

botao.onclick = function(){
    if (botao.value === "estado1"){
        imagem1.src = "static/dave-hoefler.jpg";
        botao.value = "estado2";
    }
    else {
        imagem1.src = "static/nikolas-noonan.jpg";
        botao.value = "estado1";
    }
}
