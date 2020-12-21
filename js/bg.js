const body = document.querySelector('body');

const IMG_NUMBER = 3;

const paintImage = (imgNum) => {
  const image = new Image();
  image.src = `img/${imgNum + 1}.jpg`;
  image.classList.add('bgImage');
  body.appendChild(image);
}

const getRandom = () => {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

const randomNumber = getRandom();
paintImage(randomNumber);
