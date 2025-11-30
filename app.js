const API_URL = "https://tu-backend.onrender.com/api";

async function cargarMenu() {
  const res = await fetch(API_URL + "/menu");
  const data = await res.json();
  const ul = document.getElementById("menu");
  ul.innerHTML = "";
  data.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.nombre + " - $" + item.precio;
    ul.appendChild(li);
  });
}

cargarMenu();
