const img = document.createElement("img");
img.setAttribute("src", "https://picsum.photos/200");
img.setAttribute("alt", "photo");
document.body.appendChild(img);

const sect = document.createElement("section");
const h2 = document.createElement("h2");
h2.innerText = "DOM Basics";
sect.appendChild(h2);
const p = document.createElement("p");
p.innerText = "This was added through Javascript";
sect.appendChild(p);
document.body.appendChild(sect);