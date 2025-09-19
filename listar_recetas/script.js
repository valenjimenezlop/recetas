import { recetas } from '../filtrar recetas/receta.js';

function cargarRecetas() {
    const container = document.getElementById("recetas-container");

    recetas.forEach((receta, index) => {
        const recetaElement = document.createElement("div");
        recetaElement.classList.add("receta");

        recetaElement.innerHTML = `
      <h2>${receta.nombre}</h2>
      <p><strong>Ingredientes:</strong> ${receta.ingredientes}</p>
      <p><strong>Tiempo estimado:</strong> ${receta.tiempo}</p>
      <button class="btn-detalle" onclick="window.location.href='detalle-receta.html?index=${index}'">Ver Detalle</button>
    `;

        container.appendChild(recetaElement);
    });
}

cargarRecetas();