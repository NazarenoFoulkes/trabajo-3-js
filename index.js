const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];


const pizzaIdInput = document.getElementById('pizzaIdInput');
const searchButton = document.getElementById('searchButton');
const pizzaContainer = document.getElementById('pizzaContainer');

searchButton.addEventListener('click', () => {
  const pizzaId = parseInt(pizzaIdInput.value);
  
  const foundPizza = pizzas.find(pizza => pizza.id === pizzaId);
  
  if (foundPizza) {
    const pizzaCard = document.createElement('div');
    pizzaCard.classList.add('pizza-card');
    pizzaCard.innerHTML = `
      <img src="${foundPizza.imagen}" alt="${foundPizza.nombre}" class="pizza-image">
      <h2>${foundPizza.nombre}</h2>
      <p>Precio: $${foundPizza.precio}</p>
    `;
    pizzaContainer.innerHTML = '';
    pizzaContainer.appendChild(pizzaCard);

    // Guardar en LocalStorage
    localStorage.setItem('lastSearchedPizza', JSON.stringify(foundPizza));
  } else {
    pizzaContainer.innerHTML = 'Pizza no encontrada';
  }
});

// Recuperar pizza del LocalStorage al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const lastSearchedPizza = JSON.parse(localStorage.getItem('lastSearchedPizza'));

  if (lastSearchedPizza) {
    const pizzaCard = document.createElement('div');
    pizzaCard.classList.add('pizza-card');
    pizzaCard.innerHTML = `
      <img src="${lastSearchedPizza.imagen}" alt="${lastSearchedPizza.nombre}" class="pizza-image">
      <h2>${lastSearchedPizza.nombre}</h2>
      <p>Precio: $${lastSearchedPizza.precio}</p>
    `;
    pizzaContainer.appendChild(pizzaCard);
  }
});