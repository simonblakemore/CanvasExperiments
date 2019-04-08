
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.height = canvas.scrollHeight;
canvas.width = canvas.scrollWidth;

//Circle type
let Circle = function(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
}

Circle.prototype.isHitBy = function(x, y) {
  let distance = Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2));
  return (distance <= this.radius);
}

//Rectangle type
let Rectangle = function(x, y, width, height) {
  this. x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Rectangle.prototype.isHitBy = function(x, y){
  return (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height);
}

//Create shapes (and draw)
let circle = new Circle(150, 150, 100);
let rectangle = new Rectangle(250,50, 100, 200);

ctx.beginPath();
ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
ctx.fill();

ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);

canvas.addEventListener('mousemove', function(e) {

  let canvasBounds = canvas.getBoundingClientRect();

  let clickX = e.pageX - canvasBounds.left;
  let clickY = e.pageY - canvasBounds.top;

  if (circle.isHitBy(clickX, clickY)) {
    console.log('Circle Hit');
  }

  if (rectangle.isHitBy(clickX, clickY)) {
    console.log('Rectangle Hit');
  }


});
