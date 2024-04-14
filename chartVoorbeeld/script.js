const lineChart = document.getElementById("myChart");
const barChart = document.getElementById("js--zonnenChart");

let data, config;

data = {
    lineChart: {
        labels: ["A", "B", "C", "D", "E"],
        datasets: [{
            label: "KwH",
            data: [100, 80, 40, 65, 30],
            backgroundColor: [
                "rgb(80,80,200)",
                "rgb(120,120,255)",
                "rgb(160,160,255)",
                "rgb(100,100,100)",
                "rgb(200,200,40)"
            ],
            borderwidth: 3,
            borderColor: "red"
        }]
    },
    barChart: {
        labels: ["A", "B", "C", "D", "E"],
        datasets: [{
            label: "KwH",
            data: [100, 80, 40, 65, 30],
            backgroundColor: [
                "rgb(80,80,200)",
                "rgb(120,120,255)",
                "rgb(160,160,255)",
                "rgb(100,100,100)",
                "rgb(200,200,40)",
                "red",
                "orange"
            ]
        }]
    }
}

config = {
    lineChart: {
        type: "line",
        data: data.lineChart,
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    },
    barChart: {
        type: "bar",
        data: data.barChart,
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    } 
}




myChart = new Chart(lineChart, config.lineChart);
myChart2 = new Chart(barChart, config.barChartChart);