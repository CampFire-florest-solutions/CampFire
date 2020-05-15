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