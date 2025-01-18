const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const image = document.createElement('img');
image.setAttribute('src', 'https://picsum.photos/200');
image.setAttribute('alt', "random image");
document.body.appendChild(image);