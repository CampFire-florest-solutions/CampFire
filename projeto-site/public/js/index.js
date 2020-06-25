function trocar2() {



    if (tree3.checked == true) {


        imagetre.src = "imagens/integrantes/alexandre.png";
        texto.innerHTML = `<span>Alexandre Diogo<span>`;




    } else if (tree1.checked == true) {


        imagetre.src = "imagens/integrantes/caue.jpg";
        texto.innerHTML = `<span>Cauê Pontes<span>`;


    } else if (tree2.checked == true) {


        imagetre.src = "imagens/integrantes/isabela.png";
        texto.innerHTML = `<span>Isabela Victoria<span>`;



    } else {
        alert("não foi pssivel carregar algumas imagens")
    }
}

function trocar() {



    if (one3.checked == true) {


        imgone.src = "imagens/integrantes/mathias.png";
        texto1.innerHTML = `<span>Mathias Carvalho<span>`;




    } else if (one1.checked == true) {


        imgone.src = "imagens/integrantes/leonardo.jpg";
        texto1.innerHTML = `<span>Leonardo Victor<span>`;



    } else if (one2.checked == true) {


        imgone.src = "imagens/integrantes/juan.png";
        texto1.innerHTML = `<span>Mathueus Juan<span>`;



    } else {
        alert("não foi pssivel carregar algumas imagens")
    }

}


function mover() {
    if (bIndicador.innerHTML == "Ver Video") {
        Descvideo.style.marginRight = "0.5%";
        videozin.style.display = "block"
        bIndicador.innerHTML = `Ocultar Video`;


    } else if (bIndicador.innerHTML == "Ocultar Video") {

        videozin.style.display = "none"

        bIndicador.innerHTML = `Ver Video`;
        Descvideo.style.marginRight = "25%";


    } else {
        alert("nao foi possivel visualizar o video");
    }


}

function acesso() {
    location.href = 'pages/login.html';
}

function digitar() {
    let quantidade = mensagem.value.length;
    let restante = 500 - quantidade;
    restantes.innerHTML = restante;
}
function scrollBanner() {
    var scrollPos = window.scrollY;

    if (scrollPos <= 700) {
        document.getElementById('um').className = 'ativado';
        document.getElementById('dois').className = 'icone';
        document.getElementById('tres').className = 'icone';
        document.getElementById('quatro').className = 'icone';
        document.getElementById('cinco').className = 'icone';
        [data-sectio]
    }
    else if (scrollPos <= 1400) {
        document.getElementById('um').className = 'icone';
        document.getElementById('dois').className = 'ativado';
        document.getElementById('tres').className = 'icone';
        document.getElementById('quatro').className = 'icone';
        document.getElementById('cinco').className = 'icone';
    }
    else if (scrollPos <= 2100) {
        document.getElementById('um').className = 'icone';
        document.getElementById('dois').className = 'icone';
        document.getElementById('tres').className = 'ativado';
        document.getElementById('quatro').className = 'icone';
        document.getElementById('cinco').className = 'icone';
    }
    else if (scrollPos <= 2800) {
        document.getElementById('um').className = 'icone';
        document.getElementById('dois').className = 'icone';
        document.getElementById('tres').className = 'icone';
        document.getElementById('quatro').className = 'ativado';
        document.getElementById('cinco').className = 'icone';
    }
    else if (scrollpos <= 3500) {
        document.getElementById('um').className = 'icone';
        document.getElementById('dois').className = 'icone';
        document.getElementById('tres').className = 'icone';
        document.getElementById('quatro').className = 'icone';
        document.getElementById('cinco').className = 'ativado';
    }
    
}

window.addEventListener('scroll', scrollBanner);

function enviar_form(){
    let erros = valida_form();
    div_erro.innerHTML = '';
    if (erros.length > 0) {
        for (let a = 0; a < erros.length; a++) {
            var erro = erros[a];
            var li = document.createElement("li");
            li.innerHTML = erro;

            div_erro.appendChild(li);
        }
    }
    else{
        // envia para o banco
    }
}

function valida_form(){
    let erros = [];

    if (!nomeSobrenome.value) {
        erros.push("Preencha o nome");
    }
    if (!telefoneContato.value) {
        erros.push("Preencha o telefone");
    }
    if (!assunto.value) {
        erros.push("Preencha o assunto");
    }

    if ((email.value.search("@") == -1) ||
       (email.value.search(".") == -1) ||
       (email.value.search(" ") >= 1)) {
          erros.push("O formato de email é: blablabla@dominio.com")   
    }
    if (!mensagem.value) {
        erros.push("Preencha o campo de mensagem");
    }
    return erros;
}