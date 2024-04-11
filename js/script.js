
let data = {
    linechart: data = {
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
    
            ]
        }],

    },
}

let config = {
    linechart: {
        type: "line",
        data: data.linechart,
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    },
}

myChart = new Chart(linechart, config.linechart);

const spanVanDoos3 = document.getElementById("spanVanDoos3");
const doos3Button1 = document.getElementById("js--tijdButton1");

console.log("tesyyyetyeyerg")

doos3Button1.onclick = function() {
    spanVanDoos3.innerText = "12:00";
    console.log("test");
};

