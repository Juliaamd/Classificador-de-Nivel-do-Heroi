const form = document.getElementById('xpForm');
const resultado = document.getElementById('resultado');
const batEffect = document.getElementById('bat-effect');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const xp = parseInt(document.getElementById('xpHeroi').value);
  let nivel = '';

  if (xp >= 10001) nivel = 'Radiante';
  else if (xp >= 9001) nivel = 'Imortal';
  else if (xp >= 8001) nivel = 'Ascendente';
  else if (xp >= 5001) nivel = 'Platina Diamante';
  else if (xp >= 2001) nivel = 'Prata';
  else if (xp >= 1001) nivel = 'Bronze';
  else nivel = 'Ferro';

  resultado.textContent = `O herói de nome Batman está no nível de ${nivel}`;

  // Mostrar morcego animado
  batEffect.classList.add('show');

  // Reiniciar animação
  batEffect.style.animation = 'none';
  batEffect.offsetHeight; // trigger reflow
  batEffect.style.animation = null;

  // Esconder após a animação
  setTimeout(() => {
    batEffect.classList.remove('show');
  }, 1500);
});
