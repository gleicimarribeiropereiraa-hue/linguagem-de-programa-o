const formularioJuros = document.getElementById('jurosForm');
formularioJuros.addEventListener('submit', function(event) {
  event.preventDefault();
  const valor = Number(document.getElementById('valor').value);
  const percentual = Number(document.getElementById('percentual').value);
  const resultado = document.getElementById('resultado');

  if (valor < 0 || percentual < 0 || !Number.isFinite(valor) || !Number.isFinite(percentual)) {
    resultado.textContent = 'Informe valores válidos e não negativos.';
    return;
  }

  const acrescimo = valor * (percentual / 100);
  const total = valor + acrescimo;
  const moeda = numero => numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  resultado.textContent = `Juros: ${moeda(acrescimo)} | Valor final: ${moeda(total)}.`;
});