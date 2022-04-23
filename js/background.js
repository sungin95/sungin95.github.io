const images = ["배.png","카누.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
const h2 = document.querySelector("#body")
document.body.insertBefore(bgImage, h2);