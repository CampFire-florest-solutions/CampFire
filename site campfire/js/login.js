function btn_entrar(){
    var validar_email = user_email.value == "adimin";
    var validar_senha = user_senha.value == "123456";
    var erro = document.getElementById("barra_erro");


    if (validar_email && validar_senha) {
        location.href = '#';
    }else{
        erro.className = "mostrar";

        setTimeout(function(){erro.className = erro.className.replace("mostrar",""); },
        3000)

    }
}
function btn_voltar(){
    location.href = '../index.html'
}