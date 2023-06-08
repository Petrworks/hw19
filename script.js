const block = document.querySelector('.block');

function randomColor(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

setInterval(() => {
  block.style.backgroundColor = `rgb(${randomColor(0, 256)}, ${randomColor(
    0,
    256
  )}, ${randomColor(0, 256)})`;
}, 500);

setInterval(() => {
  const maxWidth = window.innerWidth - block.offsetWidth;
  const maxHeight = window.innerHeight - block.offsetHeight;

  let ranWidth = Math.floor(Math.random() * maxWidth);
  let ranHeigth = Math.floor(Math.random() * maxHeight);

  block.style.left = ranWidth + 'px';
  block.style.top = ranHeigth + 'px';
}, 1000);
