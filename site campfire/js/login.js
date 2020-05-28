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
        // if (!validar_email) {
        //     alert("email incorreto");
        // }
        // if (!validar_senha) {
        //     alert("senha incorreta");
        // }
        //  if (!validar_email || !validar_senha) {
        //      alert("login e senha incorretos")
        // }
    }
}
function btn_voltar(){
    location.href = '../site-index.html'
}