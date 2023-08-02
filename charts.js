document.addEventListener("DOMContentLoaded", function () {
    const produtosData = {
        cadeiras: [50, 20], // Quantidade total e quantidade com avaria de cadeiras
        pneus: [180, 10] // Quantidade total e quantidade com avaria de pneus
    };

    const produtosChartCanvas = document.getElementById("produtosChart").getContext("2d");
    const produtosChart = new Chart(produtosChartCanvas, {
        type: "bar",
        data: {
            labels: ["Total", "Com Avaria"],
            datasets: [{
                label: "Cadeiras",
                data: produtosData.cadeiras,
                backgroundColor: ["rgba(54, 162, 235, 0.7)", "rgba(255, 99, 132, 0.7)"],
                borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 99, 132, 1)"],
                borderWidth: 1
            },
            {
                label: "Pneus",
                data: produtosData.pneus,
                backgroundColor: ["rgba(75, 192, 192, 0.7)", "rgba(255, 206, 86, 0.7)"],
                borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 206, 86, 1)"],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const subMenuLinks = document.querySelectorAll(".sub-menu a");
    subMenuLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });

            const chartIndex = link.dataset.chart;
            if (chartIndex !== undefined) {
                produtosChart.data.datasets.forEach((dataset, index) => {
                    if (index == chartIndex) {
                        dataset.hidden = false;
                    } else {
                        dataset.hidden = true;
                    }
                });
                produtosChart.update();
            }
        });
    });
});
