const card = document.createElement("class");
const img = document.createElement("img");
const body = document.getElementsByTagName("body")[0];
const h6 = document.createElement("h6");
const last = document.createElement("last");
img.src =
  "https://www.autoshippers.co.uk/blog/wp-content/uploads/bugatti-centodieci.jpg";
img.style.width = "390px";
card.className = "title";
h6.className = "h6";
last.className = "last";
h6.innerText = "3 сая ₮";
card.innerText = "Nissan Presage, 2000/2018";
last.innerText = "Орж ирсэн мотор хроп сольсон сайхан өндөр гэр бүлийн";
body.appendChild(img);
body.appendChild(h6);
body.appendChild(card);
body.appendChild(last);

console.log(body, "body");
console.log(card, "title");
