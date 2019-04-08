
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = canvas.scrollHeight;
canvas.width = canvas.scrollWidth;



let Animation = function() {
  this.boundUpdate = this.update.bind(this);
  this.rectangles = [
    {x: 0, y:   0, width: 100, height: 100, color: 'red',   speedX: 60},
    {x: 0, y: 100, width: 100, height: 100, color: 'green', speedX: 120},
    {x: 0, y: 200, width: 100, height: 100, color: 'blue',  speedX: 180}
  ];
  this.lastAnimationTime = 0;
}

Animation.prototype.update = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let currentAnimationTime = Date.now();
  let animationTimeDelta = (currentAnimationTime - (this.lastAnimationTime || Date.now())) /1000;
  this.lastAnimationTime = currentAnimationTime;

  this.rectangles.forEach(function(rectangle) {
    ctx.fillStyle = rectangle.color;
    ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    rectangle.x += rectangle.speedX * animationTimeDelta;
  });

  window.requestAnimationFrame(this.boundUpdate);
}

let animation = new Animation();
animation.update();
