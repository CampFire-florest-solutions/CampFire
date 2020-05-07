Chart.defaults.global.defaultFontColor = 'white';

var config = {
    type: 'line',

    data: {





        labels: [


        ],
        datasets: [{
            label: 'Temperatura',
            backgroundColor: window.chartColors.orange,
            borderColor: window.chartColors.orange,

            data: [],
            fill: false,
        }]
    },
    options: {


        responsive: true,
        title: {
            display: true,
            text: 'Gráfico de temperatura em tempo real',

        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {

            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Horário da Leitura',

                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'ºC'
                }
            }]
        }
    }
};

// esse "sortearTemperatura()" será desnecessário quando usarmos o backend futuramente
function sortearTemperatura() {
    var limiteMin = 0;
    var limiteMax = 50;
    var minimoAbsoluto = Math.abs(limiteMin);
    return (Math.random() * (minimoAbsoluto + limiteMax) - minimoAbsoluto).toFixed(1);
}

function recuperarDadosIniciais() {

    // esse "registros" será recuperado do backend futuramente
    var registros = [{
        momento: '00:03:42',
        leitura: sortearTemperatura()
    }, {
        momento: '00:03:52',
        leitura: sortearTemperatura()
    }, {
        momento: '00:04:02',
        leitura: sortearTemperatura()
    }, {
        momento: '00:04:12',
        leitura: sortearTemperatura()
    }, {
        momento: '00:04:22',
        leitura: sortearTemperatura()
    }, {
        momento: '00:04:32',
        leitura: sortearTemperatura()
    }, {
        momento: '00:04:42',
        leitura: sortearTemperatura()
    }];

    var contador = 0;

    while (contador < registros.length) {

        config.data.labels.push(registros[contador].momento); // incluir um novo momento
        config.data.datasets[0].data.push(registros[contador].leitura); // incluir uma nova leitura

        contador++;
    }

}

function receberNovasLeituras() {
    setTimeout(() => {

        // esses "agora" etc até "momentos" serão desnecessários quando usarmos o backend futuramente
        var agora = new Date();
        var hora = agora.getHours();
        var minuto = agora.getMinutes();
        var segundo = agora.getSeconds();
        var momento = `${hora>9?'':'0'}${hora}:${minuto>9?'':'0'}${minuto}:${segundo>9?'':'0'}${segundo}`;

        // esse "novoRegistro" será recuperado do backend futuramente
        var novoRegistro = {
            momento: momento,
            leitura: sortearTemperatura()
        };

        config.data.labels.shift(); // apagar o primeiro
        config.data.labels.push(novoRegistro.momento); // incluir um novo momento
        config.data.datasets[0].data.shift(); // apagar o primeiro
        config.data.datasets[0].data.push(novoRegistro.leitura); // incluir uma nova leitura

        window.myLine.update();

        receberNovasLeituras();

    }, 4000); // 4000 ms -> 4 segundos
}

function plotarGrafico() {
    recuperarDadosIniciais();

    var ctx = document.getElementById('c_grafico1').getContext('2d');
    window.myLine = new Chart(ctx, config);

    receberNovasLeituras();
}

window.onload = plotarGrafico;