const datum = document.getElementById("js--tijd");

let tijd = new Date();

const format = input => ('0' + input).slice(-2);
const getDate = () => `${format(tijd.getDay())}-${format(tijd.getMonth())}-${tijd.getFullYear()}`;
datum.innerText = getDate();

let labels = ["Jan", "Feb", "Mar", "Apr"];
let data = [17, 14, 15, 12];

const myChart = new Chart(document.getElementById("js--energieChart"), {
    type: "line",
    data: {
        labels,
        datasets: [{
            label: "KwH",
            data,
            backgroundColor: [
                "rgb(34,139,34)",
                "rgb(34,139,34)",
                "rgb(34,139,34)",
                "rgb(34,139,34)",
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
const doos3Button2 = document.getElementById("js--tijdButton2");
const doos3Button3 = document.getElementById("js--tijdButton3");
const doos3Button4 = document.getElementById("js--tijdButton4");
const doos3Button5 = document.getElementById("js--tijdButton5");
const doos3Button6 = document.getElementById("js--tijdButton6");


doos3Button1.onclick = function() {
    spanVanDoos3.innerText = "12:00";
};

doos3Button2.onclick = function() {
    spanVanDoos3.innerText = "13:00";
};

doos3Button3.onclick = function() {
    spanVanDoos3.innerText = "14:00";
};

doos3Button4.onclick = function() {
    spanVanDoos3.innerText = "15:00";
};

doos3Button5.onclick = function() {
    spanVanDoos3.innerText = "16:00";
};

doos3Button6.onclick = function() {
    spanVanDoos3.innerText = "17:00";
};


const doos3Checkbox = document.getElementById("js--doos3Checkbox");
const doos3Img = document.getElementById("js--doos3Img");
let isLampAan = false;

function lampAan() {
    doos3Img.src = "images/lamp-aan.png"
};

function lampUit() {
    doos3Img.src = "images/lamp-uit.png"
};

let toggle = document.getElementById("js--doos3Checkbox").addEventListener('change', ()=> {
    if (isLampAan = !isLampAan) {
        lampAan()
    } else {
        lampUit()
    }
});

const zonOpkomst = document.getElementById("js--opkomst");
const zonOndergang = document.getElementById("js--ondergang");

function liveZonData(){
    fetch("https://weerlive.nl/api/weerlive_api_v2.php?key=demo&locatie=Amsterdam")
        .then(res => res.json())
        .then(function(realData){
            zonOpkomst.innerText = realData.liveweer[0].sup;
            zonOndergang.innerText = realData.liveweer[0].sunder;
        })
};

liveZonData();