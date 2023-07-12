const chart = document.querySelector("#chart").getContext('2d');


// Criar uma nova instância de gráfico

new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],

        datasets: [
        {
            label: 'BTC',
            data: [29374, 33537, 42542, 32142,45121, 32145, 14421, 45124, 32145, 25454, 45245],
            borderColor: 'red',
            borderWidth: 2

        },
        {
            label: 'ETH',
            data: [31245, 12454, 80212, 23145,32455, 45124, 23145, 45787, 21345, 23145, 36454],
            borderColor: 'blue',
            borderWidth: 2
        }
        
        ]
    },
    options: {
        responsive: true
    }
})

