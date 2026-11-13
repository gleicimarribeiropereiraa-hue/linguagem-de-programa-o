function verificarTurno() {
      const turno = document.querySelector("#turno").value.trim().toUpperCase();
      const resultado = document.querySelector("#resultadoTurno");
      let mensagem;

      if (turno === "M") {
        mensagem = "Bom Dia!";
      } else if (turno === "V") {
        mensagem = "Boa Tarde!";
      } else if (turno === "N") {
        mensagem = "Boa Noite!";
      } else {
        mensagem = "Valor Inválido!";
      }

      resultado.innerHTML = `<h2>${mensagem}</h2>`;
    }

    // QUESTÃO 2: calcula a média, define o conceito e informa a situação em alert.
    function calcularMedia() {
      const nota1 = Number(document.querySelector("#nota1").value);
      const nota2 = Number(document.querySelector("#nota2").value);
      const campo1 = document.querySelector("#nota1").value;
      const campo2 = document.querySelector("#nota2").value;

      if (campo1 === "" || campo2 === "" ||
          nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert("Informe as duas notas entre 0 e 10.");
        return;
      }

      const media = (nota1 + nota2) / 2;
      let conceito;

      // Os limites são avaliados do maior para o menor para evitar sobreposição.
      if (media >= 9) {
        conceito = "A";
      } else if (media >= 7.5) {
        conceito = "B";
      } else if (media >= 6) {
        conceito = "C";
      } else if (media >= 4) {
        conceito = "D";
      } else {
        conceito = "E";
      }

      const situacao = ["A", "B", "C"].includes(conceito)
        ? "APROVADO"
        : "REPROVADO";

      alert(
        "Notas informadas: " + nota1.toFixed(1) + " e " + nota2.toFixed(1) +
        "\nMédia: " + media.toFixed(2) +
        "\nConceito: " + conceito +
        "\nSituação: " + situacao
      );
    }

    // QUESTÃO 3: aplica o percentual conforme a faixa salarial.
    function calcularReajuste() {
      const campoSalario = document.querySelector("#salario").value;
      const salario = Number(campoSalario);
      const resultado = document.querySelector("#resultadoSalario");

      if (campoSalario === "" || !Number.isFinite(salario) || salario < 0) {
        resultado.innerHTML = '<p class="mensagem-erro">Informe um salário válido, igual ou maior que zero.</p>';
        return;
      }

      let percentual;

      if (salario <= 2800) {
        percentual = 0.20;
      } else if (salario <= 7000) {
        percentual = 0.15;
      } else if (salario <= 15000) {
        percentual = 0.10;
      } else {
        percentual = 0.05;
      }

      const aumento = salario * percentual;
      const novoSalario = salario + aumento;

      resultado.innerHTML = `
        <p><strong>Salário antes do reajuste:</strong> ${formatarMoeda(salario)}</p>
        <p><strong>Percentual de aumento:</strong> ${(percentual * 100).toFixed(0)}%</p>
        <p><strong>Valor do aumento:</strong> ${formatarMoeda(aumento)}</p>
        <p><strong>Novo salário:</strong> ${formatarMoeda(novoSalario)}</p>
      `;
    }

    // Eventos dos botões.
    document.querySelector("#btnTurno").addEventListener("click", verificarTurno);
    document.querySelector("#btnMedia").addEventListener("click", calcularMedia);
    document.querySelector("#btnReajuste").addEventListener("click", calcularReajuste);

    // Permite executar a questão 1 pressionando Enter.
    document.querySelector("#turno").addEventListener("keydown", function(event) {
      if (event.key === "Enter") verificarTurno();
    });
      // Formata valores no padrão monetário brasileiro.
    function formatarMoeda(valor) {
      return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      });
    }