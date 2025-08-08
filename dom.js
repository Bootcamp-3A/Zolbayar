const data = [
  {
    title: "Nissan Presage, 2000/2018",
    price: 50000000,
    discount: "15%",
    image:
      "https://www.autoshippers.co.uk/blog/wp-content/uploads/bugatti-centodieci.jpg",
    description: "Орж ирсэн мотор хроп сольсон сайхан өндөр гэр бүлийн",
  },
  {
    title: "Nissan Presage, 2000/2018",
    price: 100000,
    discount: "15%",
    image:
      "https://news.cardoctor.mn/uploads/news/c9f07ddb469bbe624a82366543613253.jpg",
    description: "Орж ирсэн мотор хроп сольсон сайхан өндөр гэр бүлийн",
  },
  {
    title: "Nissan Presage, 2000/2018",
    price: "3000000",
    discount: "15%",
    image: "https://i.ytimg.com/vi/zEr-mm8OSGo/sddefault.jpg",
    description: "Орж ирсэн мотор хроп сольсон сайхан өндөр гэр бүлийн",
  },
  {
    title: "Nissan Presage, 2000/2018",
    price: "3 сая ₮",
    discount: "15%",
    image:
      "https://www.autoshippers.co.uk/blog/wp-content/uploads/bugatti-centodieci.jpg",
    description: "Орж ирсэн мотор хроп сольсон сайхан өндөр гэр бүлийн",
  },
  {
    title: "Nissan Presage, 2000/2018",
    price: "3 сая ₮",
    discount: "15%",
    image:
      "https://www.autoshippers.co.uk/blog/wp-content/uploads/bugatti-centodieci.jpg",
    description: "Орж ирсэн мотор хроп сольсон сайхан өндөр гэр бүлийн",
  },
];

function createCard(cardData) {
  const body = document.querySelector("body");
  const container = document.createElement("div");
  const imageTag = document.createElement("img");
  const priceContainer = document.createElement("div");
  const h6 = document.createElement("h6");
  const title = document.createElement("p");
  const description = document.createElement("span");

  imageTag.width = 450;
  container.width = 288;
  container.height = 360;

  container.classList.add("container");
  imageTag.classList.add("image");

  imageTag.src = cardData.image;
  imageTag.alt = "image";
  h6.innerText = cardData.price;

  title.innerText = cardData.title;
  description.innerText = cardData.description;

  container.appendChild(imageTag);
  container.appendChild(priceContainer);
  priceContainer.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12.694 18.7472L12.694 18.7472L12.6907 18.7501C12.3086 19.0844 11.7057 19.0839 11.3241 18.7452L11.3241 18.7451L11.3192 18.7409L11.2093 18.6445L11.2075 18.643C8.56194 16.3363 6.46223 14.5002 5.027 12.7857C3.60527 11.0873 2.95048 9.64011 3.00293 8.12279C3.05138 6.80791 3.75402 5.53662 4.89126 4.79043L4.89181 4.79007C7.06151 3.36441 9.77692 4.01416 11.2514 5.6774C11.4412 5.89148 11.7136 6.01401 11.9997 6.01401C12.2858 6.01401 12.5582 5.89148 12.748 5.6774C14.2245 4.01189 16.9389 3.35712 19.1055 4.78867L19.1082 4.79043C20.2457 5.53679 20.9484 6.80848 20.9966 8.12367L20.9966 8.12449C21.0533 9.64027 20.3998 11.0866 18.976 12.7883C17.5394 14.5054 15.4377 16.3457 12.7921 18.6621C12.792 18.6622 12.792 18.6622 12.7919 18.6623L12.7904 18.6636L12.694 18.7472Z" fill="white" stroke="#777777" stroke-width="2" stroke-linejoin="round"/>
  </svg>`;
  container.appendChild(title);
  container.appendChild(description);
  body.appendChild(container);
}
const card = createCard(data[0]);
const card1 = createCard(data[1]);
const card2 = createCard(data[2]);
