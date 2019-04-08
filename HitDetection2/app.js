
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = canvas.scrollHeight;
canvas.width = canvas.scrollWidth;

//draw a quadrant
ctx.beginPath();
ctx.arc(150, 150, 100, 0, Math.PI /2);
ctx.lineTo(150, 150);
ctx.fill();
ctx.addHitRegion({id: 'quadrant'});

ctx.beginPath();
ctx.moveTo(400, 50);
ctx.lineTo(500, 250);
ctx.lineTo(300, 250);
ctx.fill();
ctx.addHitRegion({id: 'triangle'});

canvas.addEventListener('mousemove', function(e) {
  if (e.region) {
    console.log(e.region + ' is hit!');
  }
});
