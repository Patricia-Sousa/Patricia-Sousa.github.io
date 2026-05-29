const linhasTerminal = [
  "> iniciar_portefolio.exe",
  "> utilizadora: Patrícia Sousa",
  "> percurso: da curiosidade técnica à construção de soluções digitais",
  "> áreas: Desenvolvimento Web | Programação | Sistemas de Informação",
  "> competências: HTML | CSS | JavaScript | SQL | C# | Python",
  "> valores: rigor técnico | criatividade | aprendizagem contínua",
  "> sistema pronto",
  "> entrar no portefólio",
];

const terminalOutput = document.querySelector("#terminal-output");
const terminalActions = document.querySelector("#terminal-actions");

let linhaAtual = 0;
let caractereAtual = 0;

function escreverTerminal() {
  if (linhaAtual < linhasTerminal.length) {
    const linha = linhasTerminal[linhaAtual];

    if (caractereAtual < linha.length) {
      terminalOutput.textContent += linha.charAt(caractereAtual);
      caractereAtual++;
      setTimeout(escreverTerminal, 35);
    } else {
      terminalOutput.textContent += "\n";
      linhaAtual++;
      caractereAtual = 0;
      setTimeout(escreverTerminal, 450);
    }
  } else {
    terminalActions.classList.add("visible");
  }
}

document.addEventListener("DOMContentLoaded", escreverTerminal);
