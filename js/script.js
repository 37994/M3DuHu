let labels = ["A", "B", "C", "D", "E"];
let data = [100, 80, 40, 65, 30];

const myChart = new Chart(document.getElementById("myChart"), {
    type: "line",
    data: {
        labels,
        datasets: [{
            label: "KwH",
            data,
            backgroundColor: [
                "rgb(80,80,200)",
                "rgb(120,120,255)",
                "rgb(160,160,255)",
                "rgb(100,100,100)",
                "rgb(200,200,40)",

            ]
        }],

    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

const spanVanDoos3 = document.getElementById("spanVanDoos3");
const doos3Button1 = document.getElementById("js--tijdButton1");

console.log("tesyyyetyeyerg")

doos3Button1.onclick = function() {
    spanVanDoos3.innerText = "12:00";
    console.log("test");
};

