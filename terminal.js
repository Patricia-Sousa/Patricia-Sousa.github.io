const linhasTerminal = [
  "> system.boot()",
  "> user: Patrícia Sousa",
  "> location: Portugal | Viseu",
  "> profile: Web Developer | Programmer | IT Systems",
  "> stack: HTML | CSS | JavaScript | ... ",
  "> focus: clean code, usability, learning, problem solving",
  "> loading portfolio ...",
  "> access granted",
];

const terminalClose = document.querySelector("#terminal-close");
const terminalWindow = document.querySelector(".terminal-window");

terminalClose.addEventListener("click", () => {
  terminalWindow.classList.add("terminal-window-closed");
});

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
