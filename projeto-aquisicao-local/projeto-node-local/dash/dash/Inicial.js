function noti() {
    if (notificacao.style.display == "none") {
        user.style.display = "none"
        notificacao.style.display = "block";

    } else {
        notificacao.style.display = "none";
    }

}

function use() {
    if (user.style.display == "none") {

        notificacao.style.display = "none";
        user.style.display = "block";

    } else {
        user.style.display = "none";
    }

}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m;
    t = setTimeout('startTime()', 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


function fechar() {
    window.close();
}