import { recetas } from '../filtrar recetas/receta.js';

document.addEventListener('DOMContentLoaded', () => {
	// crear control de filtro e insertarlo antes del contenedor de recetas
	const container = document.getElementById('recetas-container');
	if (!container) return;

	const filterDiv = document.createElement('div');
	filterDiv.className = 'filter';
	filterDiv.innerHTML = `
		<label for="categoria-filter">Filtrar por categoría:</label>
		<select id="categoria-filter"></select>
	`;
	container.parentNode.insertBefore(filterDiv, container);

	const select = filterDiv.querySelector('#categoria-filter');
	const categorias = Array.from(new Set(recetas.map(r => r.categoria || 'Sin categoría'))).sort();
	select.innerHTML = '<option value="Todas">Todas</option>' + categorias.map(c => `<option value="${c}">${c}</option>`).join('');

	// render inicial
	renderRecetas('Todas');

	select.addEventListener('change', (e) => {
		renderRecetas(e.target.value);
	});

	function renderRecetas(categoria = 'Todas') {
		container.innerHTML = '';
		recetas.forEach((receta, index) => {
			const cat = receta.categoria || 'Sin categoría';
			if (categoria !== 'Todas' && cat !== categoria) return;

			const recetaElement = document.createElement('div');
			recetaElement.classList.add('receta');

			recetaElement.innerHTML = `
				<h2>${receta.nombre}</h2>
				<p><strong>Ingredientes:</strong> ${receta.ingredientes}</p>
				<p><strong>Tiempo estimado:</strong> ${receta.tiempo}</p>
				<p class="info"><strong>Categoría:</strong> ${cat}</p>
				<button class="btn-detalle" onclick="window.location.href='../filtrar recetas/receta.html?index=${index}'">Ver Detalle</button>
			`;

			container.appendChild(recetaElement);
		});
	}
});
