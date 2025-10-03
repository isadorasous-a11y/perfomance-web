// JS não minificado, com código morto e bloqueando renderização por estar no <head>

function heavyCalculation() {
  // Simula trabalho inútil
  const start = Date.now();
  while (Date.now() - start < 200) {}
}
heavyCalculation();

// Código não utilizado
function unusedHelper(a, b) {
  return a + b + Math.random();
}
const unusedStyles = `
  .ghost { position:absolute; top:-9999px; }
`;

document.addEventListener('DOMContentLoaded', () => {
  console.log('EcoTrips BEFORE pronto');
});
