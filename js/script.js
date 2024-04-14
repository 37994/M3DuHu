//tijd
const datum = document.getElementById("js--tijd");

let tijd = new Date();

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
const format = input => ('0' + input).slice(-2);
const getDate = () => `${format(tijd.getDay())}-${format(tijd.getMonth())}-${tijd.getFullYear()}`;
datum.innerText = getDate();


//chart

const linechart = document.getElementById("js--energieChart");
const donutchart = document.getElementById("js--zonnenChart")

data = {

    linechart:data = {
        labels: ["Jan", "Feb", "Mrt", "Apr"],
        datasets: [{
            label: "KwH",
            data: [17, 14, 15, 12, 20, 10],
            backgroundColor: [
                "rgb(255, 187, 92)",
                "rgb(255, 155, 80)",
                "rgb(226, 94, 62)",
                "rgb(198, 61, 47)",
    
            ]
        }],

    },

    donutchart:data = {
        labels: ["Jan", "Feb", "Mrt", "Apr", "mei", "jun", "jul", "aug", "sep", "sep", "okt", "nov", "dec"],
        datasets: [{
            label: "%",
            data: [3, 5, 8, 12, 13, 13, 13,11, 11 ,10, 7, 3, 2],
            backgroundColor: [
                "rgb(255, 187, 92)",
                "rgb(255, 155, 80)",
                "rgb(226, 94, 62)",
                "rgb(198, 61, 47)",
    
            ]
        }],
    }
    
}

config = {
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

    donutchart: {
        type: "bar",
        data: data.donutchart,
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


myChart = new Chart(linechart, config.linechart);
myChart = new Chart(donutchart, config.donutchart)

//chart zonnen



//lampen

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

//lamp1
const doos2Checkbox = document.getElementById("js--doos2slider");
const doos2img = document.getElementById("js--imgdoos2");
let lampisaan = false;

function lampIsAan() {
    doos2img.src = "images/lamp-aan.png"
};

function lampIsUit() {
    doos2img.src = "images/lamp-uit.png"
};

let toggles = document.getElementById("js--doos2slider").addEventListener('change', () => {
    if (lampisaan = !lampisaan) {
        lampIsAan()
    } else {
        lampIsUit()
    }
});

//lamp2
const doos2Checkbox2 = document.getElementById("js--doos2slider2");
const doos2img2 = document.getElementById("js--imgdoos22");
let lampisaan2 = false;

function lampIsAan2() {
    doos2img2.src = "images/lamp-aan.png"
};

function lampIsUit2() {
    doos2img2.src = "images/lamp-uit.png"
};

let toggles2 = document.getElementById("js--doos2slider2").addEventListener('change', () => {
    if (lampisaan2 = !lampisaan2) {
        lampIsAan2()
    } else {
        lampIsUit2()
    }
});

//lamp3
const doos2Checkbox3 = document.getElementById("js--doos2slider3");
const doos2img3 = document.getElementById("js--imgdoos23");
let lampisaan3 = false;

function lampIsAan3() {
    doos2img3.src = "images/lamp-aan.png"
};

function lampIsUit3() {
    doos2img3.src = "images/lamp-uit.png"
};

let toggles3 = document.getElementById("js--doos2slider3").addEventListener('change', () => {
    if (lampisaan3 = !lampisaan3) {
        lampIsAan3()
    } else {
        lampIsUit3()
    }
});




liveZonData();


//doos 7


//dropdown
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

