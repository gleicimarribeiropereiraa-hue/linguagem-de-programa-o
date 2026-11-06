const figura = document.getElementById('figura');
const campos = document.getElementById('campos');
const resultadoArea = document.getElementById('resultado');

function montarCampos() {
  const tipo = figura.value;
  const configuracoes = {
    circulo: [['raio', 'Raio'],],
    quadrado: [['lado', 'Lado'],],
    retangulo: [['base', 'Base'], ['altura', 'Altura']],
    triangulo: [['base', 'Base'], ['altura', 'Altura']]
  };
  campos.innerHTML = configuracoes[tipo].map(([id, nome]) =>
    `<label for="${id}">${nome} (cm)</label><input id="${id}" type="number" min="0.01" step="0.01" placeholder="Informe ${nome.toLowerCase()}" required>`
  ).join('');
  resultadoArea.textContent = 'A área será exibida aqui.';
}
figura.addEventListener('change', montarCampos);
document.getElementById('calcular').addEventListener('click', function() {
  const valores = [...campos.querySelectorAll('input')].map(input => Number(input.value));
  if (valores.some(valor => !Number.isFinite(valor) || valor <= 0)) {
    resultadoArea.textContent = 'Preencha todas as medidas com valores maiores que zero.';
    return;
  }
  let area;
  switch (figura.value) {
    case 'circulo': area = Math.PI * valores[0] ** 2; break;
    case 'quadrado': area = valores[0] ** 2; break;
    case 'retangulo': area = valores[0] * valores[1]; break;
    case 'triangulo': area = (valores[0] * valores[1]) / 2; break;
  }
  resultadoArea.textContent = `Área: ${area.toFixed(2)} cm².`;
});
montarCampos();