import { recetas } from './receta.js';

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const idx = parseInt(params.get('index'), 10);

  const cont = document.getElementById('detalle-seccion');
  const nameEl = document.getElementById('receta-nombre');
  const catEl = document.getElementById('receta-categoria');
  const ingEl = document.getElementById('receta-ingredientes');
  const timeEl = document.getElementById('receta-tiempo');
  const instrEl = document.getElementById('receta-instrucciones');

  if (!Number.isInteger(idx) || idx < 0 || idx >= recetas.length) {
    cont.innerHTML = '<p>Receta no encontrada.</p>';
    return;
  }

  const r = recetas[idx];
  nameEl.textContent = r.nombre || 'Sin nombre';
  catEl.textContent = r.categoria || 'Sin categoría';
  ingEl.textContent = r.ingredientes || 'No hay ingredientes registrados';
  timeEl.textContent = r.tiempo || '—';
  instrEl.textContent = r.instrucciones || 'No hay instrucciones disponibles.';
});
