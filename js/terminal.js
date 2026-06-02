const linhasTerminal = [
  "> system.boot()",
  "> user: Patrícia Sousa",
  "> location: Portugal",
  "> profile: Web Developer | Programmer | IT Systems",
  "> stack: HTML | CSS | JavaScript | ... ",
  "> focus: clean code, usability, learning, problem solving",
  "> loading portfolio ...",
  "> access granted",
];

const terminalClose = document.querySelector("#terminal-close");
const terminalWindow = document.querySelector(".terminal-window");
const terminalOutput = document.querySelector("#terminal-output");
const terminalActions = document.querySelector("#terminal-actions");
const terminalReloadArea = document.querySelector("#terminal-reload-area");
const terminalReloadButton = document.querySelector("#terminal-reload-button");

let linhaAtual = 0;
let caractereAtual = 0;
let escritaAtiva = true;

function limparTerminal() {
  terminalOutput.textContent = "";
  terminalActions.classList.remove("visible");

  linhaAtual = 0;
  caractereAtual = 0;
  escritaAtiva = true;
}

function escreverTerminal() {
  if (!escritaAtiva) {
    return;
  }

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

function fecharTerminal() {
  escritaAtiva = false;

  terminalWindow.classList.add("hidden");
  terminalReloadArea.classList.add("visible");
}

function reabrirTerminal() {
  terminalReloadArea.classList.remove("visible");
  terminalWindow.classList.remove("hidden");

  limparTerminal();
  escreverTerminal();
}

terminalClose.addEventListener("click", fecharTerminal);
terminalReloadButton.addEventListener("click", reabrirTerminal);

document.addEventListener("DOMContentLoaded", escreverTerminal);
