canvasSize=16;
boxSize=500/16;
const container = document.querySelector('#paintingZone');
        
for (let index = 0; index < canvasSize; index++) {
    for (let y = 0; y < canvasSize; y++) {
        const canvasPixel = document.createElement('div');
        canvasPixel.classList.add('canvasPixel');
        canvasPixel.setAttribute('style', 'display: display: flex;width: 31.25px;height: 31.25px;background-color: whiteg;')
        container.appendChild(canvasPixel);
        console.log(canvasPixel);
    }
}
