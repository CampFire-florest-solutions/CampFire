function cad() {
    panel.innerHTML = "";

    panel.style.left = "50%"

    panel.innerHTML = `<h1>LOGIN</h1>
    <p>Já possui uma conta? acesse já e monitore sua area remotamente e receba notificações para ficar por dentro do que acontece na sua propríedade. Caso tenha dificulades entre em contato.</p>
    <button onclick="logi()">Acesso</button>`
}

function logi() {
    panel.innerHTML = "";

    panel.style.left = "10%"

    panel.innerHTML = `<h1>Cadastro</h1>
    <p>Faça agora mesmo o seu cadastro para ter acesso as informações da area monitorada. E se você ainda não faz parte do nosso grupo de clintes envie sua solicitação para o nosso E-mail</p>
    <button onclick="cad()">Cadastrar</button>`
}


function verificar() {
    var logUser = (login.value).trim();
    var logSenha = (senha.value).trim();
    if (logUser == "" || logUser.length <= 3) {

        erro.innerHTML = "";
        erro.innerHTML = "Usuario Invalido";
        login.style.borderBottom = "5px solid red";
        erro.style.display = "block";
    } else if (logSenha == "" || logSenha.length < 8) {

        erro.innerHTML = "";
        erro.innerHTML = "Senha invalida";
        senha.style.borderBottom = "5px solid red";
        erro.style.display = "block";
    } else {
        window.location.href = "http://google.com";

    }
}

function esconder() {
    login.style.borderBottom = "5px solid mediumseagreen";
    senha.style.borderBottom = "5px solid mediumseagreen";
    erro.style.display = "none";
}