const formulario = document.getElementById('imcForm');
formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  const peso = Number(document.getElementById('peso').value);
  const altura = Number(document.getElementById('altura').value);
  const resultado = document.getElementById('resultado');

  if (peso <= 0 || altura <= 0 || !Number.isFinite(peso / altura)) {
    resultado.textContent = 'Informe valores válidos e maiores que zero.';
    return;
  }

  const imc = peso / (altura * altura);
  resultado.textContent = `Seu IMC é ${imc.toFixed(2)}.`;
});