canvasSize=16;
function createCanvas(){  
    boxSize=500/canvasSize;
    const container = document.querySelector('#paintingZone');
    for (let index = 0; index < canvasSize; index++) {
        for (let y = 0; y < canvasSize; y++) {
            const canvasPixel = document.createElement('div');
            canvasPixel.classList.add('canvasPixel');
            canvasPixel.setAttribute('style', 'display: display: flex;width: '+String(boxSize)+'px;height:'+String(boxSize)+'px;background-color: white;')
            canvasPixel.setAttribute('class', 'pix');
            container.appendChild(canvasPixel);
        }
    }
    
    const track = document.querySelectorAll('.pix');
    function toPain() {
        //this.setAttribute('style', 'display: background-color: black;border:1px solid blue;');
        this.style.backgroundColor = "blue";
        console.log(this);
    }
    for (let index = 0; index < canvasSize*canvasSize; index++) {
        track[index].addEventListener('mousemove',toPain);
    }
}
createCanvas();

const range = document.querySelector('.slider');
range.addEventListener('input', function() {
    canvasSize=this.value;
    const pixes = document.querySelectorAll('.pix');
    //pixes[5].parentElement.removeChild(pixes[5]);

    for (let index = 0; index < pixes.length; index++) {
        pixes[index].parentElement.removeChild(pixes[index]);
     }
     createCanvas()
  }, false);