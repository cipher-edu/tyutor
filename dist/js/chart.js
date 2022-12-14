/*!
 *   Tyutor NDPi
 *   Author: cipheredu 
 *   Creator: Abduraimov Oybek
 *   Website: Tyutor <https://cipheredu.uz>
 *   License: Open source - MIT <https://opensource.org/licenses/MIT>
 */
/*!
 * Bootstrap v4.6.1 (https://getbootstrap.com/)
 * Copyright 202-2023 The Bootstrap Authors
 * Copyright 2022-2023 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
const ctx = document.getElementById('chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Bajarilmagan ishlar', 'O\'tkazilingan tadbirlar', 'Profilaktika ishlari', 'Ijara bo\'yicha o\'rganishlar', 'Ma\'naviy ishalr', 'Joylarni o\'rganish'],
        datasets: [{
            label: 'Umumiy vazifalar',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});