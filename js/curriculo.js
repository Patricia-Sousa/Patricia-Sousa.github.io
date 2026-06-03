const filterButtons = document.querySelectorAll(".filter-button");
const cvCards = document.querySelectorAll(".cv-card");
const printButton = document.querySelector("#print-button");

function filtrarCurriculo(filtroSelecionado) {
  cvCards.forEach((card) => {
    const categoria = card.dataset.category;

    if (filtroSelecionado === "all" || categoria === filtroSelecionado) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });

  filterButtons.forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.filter === filtroSelecionado,
    );
  });
}

if (filterButtons.length > 0 && cvCards.length > 0) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filtrarCurriculo(button.dataset.filter);
    });
  });
}

if (printButton) {
  printButton.addEventListener("click", () => {
    window.print();
  });
}
