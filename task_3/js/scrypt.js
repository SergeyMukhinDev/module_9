const traficLigthGreen = document.querySelector('#traffic_ligth');
const traficLigthYellow = document.querySelector('#traffic_ligth2');
const traficLigthRed = document.querySelector('#traffic_ligth3');

function makeGreen() {
    traficLigthGreen.style.background = ('green');
    traficLigthYellow.style.background = ('black');
    traficLigthRed.style.background = ('black');
    }
    function makeYellow() {
        traficLigthYellow.style.background = ('yellow');
        traficLigthGreen.style.background = ('black');
        traficLigthRed.style.background = ('black');
        }
        function makeRed() {
            traficLigthRed.style.background = ('red');
            traficLigthGreen.style.background = ('black');
            traficLigthYellow.style.background = ('black');
            }

traficLigthGreen.addEventListener('click', makeGreen);
traficLigthYellow.addEventListener('click', makeYellow);
traficLigthRed.addEventListener('click', makeRed);


