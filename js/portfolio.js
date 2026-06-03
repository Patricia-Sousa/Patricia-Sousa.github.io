const secoes = {
  sobre: {
    titulo: "Sobre mim",
    etiqueta: "Identidade, percurso e evolução",
    conteudo: `
        <p>
            Sou a <span class="highlight">Patrícia Sousa</span>, Técnica de Informática — Sistemas
            e Programadora, com interesse especial pelo desenvolvimento web,
            programação, bases de dados, redes e sistemas de informação.
        </p>

        <p>
            O meu percurso é marcado pela aprendizagem progressiva, pela organização e pela vontade
            de compreender a tecnologia de forma rigorosa e aplicada. Ao longo dos últimos anos,
            consolidei competências técnicas em informática, programação e desenvolvimento de
            soluções digitais, o que me permitiu construir uma identidade profissional sólida.
        </p>

        <div class="content-grid">
            <div class="info-box">
                <h3>Perfil técnico</h3>
                <p>
                    Desenvolvimento Web, Programação, Sistemas, Redes Locais, Bases de Dados
                    e Tecnologias de Informação.
                </p>
            </div>

            <div class="info-box">
                <h3>Forma de trabalho</h3>
                <p>
                    Organização, responsabilidade, rigor técnico, atenção ao detalhe
                    e aprendizagem consciente.
                </p>
            </div>
        </div>

        <button type="button" class="read-more-button" id="read-more-autobiografia">
            Ler autobiografia completa
        </button>

        <section class="autobiografia-box hidden" id="autobiografia-box">
            <h2>Autobiografia</h2>

            <p>
                Chamo-me Patrícia e nasci na cidade de Viseu. O meu percurso pessoal
                e profissional tem sido construído através de diferentes experiências,
                aprendizagens e decisões importantes, que contribuíram para a pessoa e
                profissional que sou atualmente.
            </p>

            <p>
                Ao longo da minha vida, desenvolvi uma forte valorização pela responsabilidade,
                pela organização, pelo método e pela aprendizagem. Considero que a evolução
                pessoal e profissional exige curiosidade, disciplina e capacidade de adaptação
                perante novos desafios.
            </p>

            <p>
                A minha ligação à informática surgiu como uma área de interesse técnico,
                mas tornou-se progressivamente uma escolha profissional consciente. A formação
                em informática, programação, sistemas, redes, bases de dados e desenvolvimento web
                permitiu-me consolidar conhecimentos e desenvolver uma visão mais ampla sobre
                a criação de soluções digitais.
            </p>

            <p>
                Hoje, vejo a tecnologia como um espaço de construção, resolução de problemas
                e evolução. O meu objetivo é continuar a desenvolver competências,
                criar projetos sólidos e aplicar o conhecimento técnico de forma clara,
                útil e profissional.
            </p>
        </section>
    `,
  },

  competencias: {
    titulo: "Competências técnicas",
    etiqueta: "Stack tecnológico",
    conteudo: `
            <p>
                O meu stack tecnológico reúne linguagens, ferramentas, bases de dados e ambientes que utilizo para compreender problemas, estruturar soluções e desenvolver projetos sólidos.
            </p>

            <h2>Desenvolvimento Web</h2>
            <div class="tag-list">
                <span class="tag">HTML</span>
                <span class="tag">CSS</span>
                <span class="tag">JavaScript</span>
                <span class="tag">Bootstrap</span>
                <span class="tag">Responsividade</span>
                <span class="tag">Acessibilidade</span>
            </div>

            <h2>Programação e Dados</h2>
            <div class="tag-list">
                <span class="tag">C#</span>
                <span class="tag">Python</span>
                <span class="tag">SQL</span>
                <span class="tag">Bases de Dados</span>
                <span class="tag">Modelação Relacional</span>
            </div>

            <h2>Sistemas e Redes</h2>
            <div class="tag-list">
                <span class="tag">Windows</span>
                <span class="tag">Redes Locais</span>
                <span class="tag">DHCP</span>
                <span class="tag">DNS</span>
                <span class="tag">Endereçamento IP</span>
            </div>

            <h2>Ferramentas de Desenvolvimento</h2>
            <div class="tag-list">
                <span class="tag">Visual Studio Code</span>
                <span class="tag">Git</span>
                <span class="tag">GitHub</span>
                <span class="tag">GitHub Pages</span>
                <span class="tag">Terminal</span>
                <span class="tag">DevTools</span>
                <span class="tag">Debugging</span>
                <span class="tag">Controlo de Versões</span>
            </div>
        `,
  },

  curriculo: {
    titulo: "Currículo",
    etiqueta: "Resumo profissional",
    conteudo: `
            <p>
                Entre linhas de código, sistemas e uma aprendizagem curiosa.
            </p>

            <div class="content-grid">
                <div class="info-box">
                    <h3>Perfil</h3>
                    <p>
                        Profissional com formação em informática, programação, desenvolvimento web,
                        bases de dados, redes e sistemas.
                    </p>
                </div>

                <div class="info-box">
                    <h3>Áreas de interesse</h3>
                    <p>
                        Desenvolvimento Web, Sistemas de Informação, Programação, Bases de Dados,
                        Redes e Tecnologias Emergentes.
                    </p>
                </div>
            </div>

            <div class="cta-group">
                <a href="curriculo.html" class="primary-button">Abrir página do CV</a>
                <a
                    href="../assets/docs/CV_PatríciaSousa.pdf"
                    class="secondary-button"
                    download="CV_PatríciaSousa.pdf">
                    Download do CV em PDF
                </a>
            </div>
        `,
  },

  contacto: {
    titulo: "Contacto",
    etiqueta: "Ligação profissional",
    conteudo: `
            <p>
                Encontra-me entre código, projetos e presença digital.
            </p>

            <div class="contact-panel">
            <article class="contact-card contact-card-featured">
                <div class="contact-card-header">
                    <span class="contact-icon">@</span>
                    <div>
                        <h3>Email</h3>
                        <p>Contacto direto</p>
                    </div>
                </div>

                <a
                    class="contact-value"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=tixaisabelsousa@gmail.com&su=Contacto%20atrav%C3%A9s%20do%20portef%C3%B3lio"
                    target="_blank"
                    rel="noopener noreferrer">
                    tixaisabelsousa@gmail.com
                </a>

                <div class="contact-actions">
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=tixaisabelsousa@gmail.com&su=Contacto%20atrav%C3%A9s%20do%20portef%C3%B3lio"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="contact-button">
                        Abrir Gmail
                    </a>

                    <button
                        type="button"
                        class="contact-button contact-button-secondary"
                        id="copy-email-button"
                        data-email="tixaisabelsousa@gmail.com">
                        Copiar email
                    </button>
                </div>

                <p class="copy-message" id="copy-message"></p>
            </article>

            <article class="contact-card">
                <div class="contact-card-header">
                    <span class="contact-icon">GH</span>
                    <div>
                        <h3>GitHub</h3>
                        <p>Repositórios e projetos</p>
                    </div>
                </div>

                <a
                    class="contact-value"
                    href="https://github.com/Patricia-Sousa"
                    target="_blank"
                    rel="noopener noreferrer">
                    github.com/Patricia-Sousa
                </a>
            </article>

            <article class="contact-card">
                <div class="contact-card-header">
                    <span class="contact-icon">IG</span>
                    <div>
                        <h3>Instagram</h3>
                        <p>Presença digital</p>
                    </div>
                </div>

                <a
                    class="contact-value"
                    href="https://www.instagram.com/patricia.isabel.sousa/"
                    target="_blank"
                    rel="noopener noreferrer">
                    @patricia.isabel.sousa
                </a>
            </article>

            <article class="contact-card">
                <div class="contact-card-header">
                    <span class="contact-icon">PT</span>
                    <div>
                        <h3>Localização</h3>
                        <p>Base geográfica</p>
                    </div>
                </div>

                <p class="contact-value">Viseu, Portugal</p>
            </article>
        </div>
        `,
  },
};

const contentCard = document.querySelector("#content-card");
const menuItems = document.querySelectorAll(".menu-item");
const menuToggle = document.querySelector("#menu-toggle");
const sidebar = document.querySelector("#sidebar");

function ativarAutobiografia() {
  const botaoAutobiografia = document.querySelector("#read-more-autobiografia");
  const caixaAutobiografia = document.querySelector("#autobiografia-box");

  if (!botaoAutobiografia || !caixaAutobiografia) {
    return;
  }

  botaoAutobiografia.addEventListener("click", () => {
    caixaAutobiografia.classList.toggle("hidden");

    if (caixaAutobiografia.classList.contains("hidden")) {
      botaoAutobiografia.textContent = "Ler autobiografia completa";
    } else {
      botaoAutobiografia.textContent = "Ocultar autobiografia";
    }
  });
}

function ativarCopiaEmail() {
  const copyEmailButton = document.querySelector("#copy-email-button");
  const copyMessage = document.querySelector("#copy-message");

  if (!copyEmailButton || !copyMessage) {
    return;
  }

  copyEmailButton.addEventListener("click", async () => {
    const email = copyEmailButton.dataset.email;

    try {
      await navigator.clipboard.writeText(email);
      copyMessage.textContent = "Email copiado para a área de transferência.";
    } catch (error) {
      copyMessage.textContent =
        "Não foi possível copiar automaticamente. Email: " + email;
    }
  });
}

function carregarSecao(nomeSecao) {
  const secao = secoes[nomeSecao];

  if (!secao) {
    return;
  }

  contentCard.innerHTML = `
        <div class="content-eyebrow">${secao.etiqueta}</div>
        <h1>${secao.titulo}</h1>
        ${secao.conteudo}
    `;

  menuItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.section === nomeSecao);
  });

  document.title = `${secao.titulo} | Portefólio Patrícia Sousa`;

  history.replaceState(null, "", `#${nomeSecao}`);

  if (window.innerWidth <= 900) {
    sidebar.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  contentCard.focus({ preventScroll: true });

  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });

  ativarLinksInternos();
  ativarAutobiografia();
  ativarCopiaEmail();
}

function ativarLinksInternos() {
  const linksInternos = document.querySelectorAll("[data-link-section]");

  linksInternos.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const destino = link.dataset.linkSection;
      carregarSecao(destino);
    });
  });
}

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    carregarSecao(item.dataset.section);
  });
});

menuToggle.addEventListener("click", () => {
  const menuAberto = sidebar.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(menuAberto));
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    sidebar.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

const hashInicial = window.location.hash.replace("#", "");
const secaoInicial = secoes[hashInicial] ? hashInicial : "sobre";

carregarSecao(secaoInicial);
