const images = ["강아지 캐릭터.jpg","노랑전구.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImge = document.createElement("img");

bgImge.src = `img/${chosenImage}`;

document.body.appendChild(bgImge);
