
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = canvas.scrollHeight;
canvas.width = canvas.scrollWidth;

let image = new Image();
let bwButton = document.getElementById('makeBlackAndWhite');
bwButton.addEventListener('mousedown', handleButtonClick);

image.onload = function() {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
}

image.src = './image.jpg';


function blackAndWhite() {
  let pixelData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < pixelData.data.length; i += 4) {

    let bw = 0.2 * pixelData.data[i] + 0.72 * pixelData.data[i + 1] + 0.07 * pixelData.data[i + 2];

    pixelData.data[i] = bw;
    pixelData.data[i + 1] = bw;
    pixelData.data[i + 2] = bw;
  }

  ctx.putImageData(pixelData, 0, 0,);

  bwButton.textContent = 'Make Color';
}

function makeColor() {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  bwButton.textContent = 'Make BW';
}

function handleButtonClick() {
  if(bwButton.textContent === 'Make BW') {
    blackAndWhite();
  } else {
    makeColor();
  }
}
