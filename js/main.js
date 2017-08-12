// MAKE GRID
document.addEventListener('DOMContentLoaded', function makePixel() {
  for(i = 0; i < 1200; i++) {
    var div = document.createElement('div');
    div.classList.add('pixel');
    var canvas = document.getElementById('canvas');
    canvas.appendChild(div);
    div.addEventListener('mouseover', paint);
    div.addEventListener('click', clickPaint);
  }
})

var palette = document.getElementById('palette');
  palette.addEventListener('click', newColor);

var currentColor = '';
function newColor(event) {
  currentColor = window.getComputedStyle(event.target).backgroundColor;
}



var mouseState = false;
function clickPaint() {
    event.target.style.backgroundColor = currentColor || 'white';
}
function paint() {
  canvas.addEventListener('mousedown', function() {
    mouseState = true;
  });
  body.addEventListener('mouseup', function() {
    mouseState = false;
  });
  if (mouseState === true) {
    event.target.style.backgroundColor = currentColor || 'white';
  }
}
