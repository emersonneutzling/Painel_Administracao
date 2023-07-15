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

// show or hide sidebar - Mostrar ou ocultar a barra lateral

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
})

// Change Theme - Mudar Tema 

const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
})



