const secoes = {
  sobre: {
    titulo: "Sobre mim",
    etiqueta: "Identidade, percurso e evolução",
    conteudo: `
        <p>
            Sou a <span class="highlight">Patrícia Sousa</span>, Técnica de Informática — Sistemas
            e Programadora de Informática, com interesse especial pelo desenvolvimento web,
            programação, bases de dados, redes e sistemas de informação.
        </p>

        <p>
            O meu percurso é marcado pela aprendizagem contínua, pela organização e pela vontade
            de compreender a tecnologia de forma rigorosa e aplicada. Ao longo dos últimos anos,
            consolidei competências técnicas em informática, programação e desenvolvimento de
            soluções digitais, construindo uma identidade profissional orientada para o método,
            a clareza e a evolução tecnológica.
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
                    e aprendizagem contínua.
                </p>
            </div>
        </div>

        <button type="button" class="read-more-button" id="read-more-autobiografia">
            Ler autobiografia completa
        </button>

        <section class="autobiografia-box hidden" id="autobiografia-box">
            <h2>Autobiografia</h2>

            <p>
                Chamo-me Patrícia Sousa e nasci na cidade de Viseu. O meu percurso pessoal
                e profissional foi sendo construído através de diferentes experiências,
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
                e evolução contínua. O meu objetivo é continuar a desenvolver competências,
                criar projetos sólidos e aplicar o conhecimento técnico de forma clara,
                útil e profissional.
            </p>
        </section>
    `,
  },

  projetos: {
    titulo: "Projetos",
    etiqueta: "Laboratório digital",
    conteudo: `
            <p>
                Esta secção pode apresentar projetos académicos, técnicos e pessoais. O objetivo é mostrar
                não só o resultado final, mas também o problema, a solução, as tecnologias utilizadas e a lógica
                de desenvolvimento.
            </p>

            <div class="content-grid">
                <div class="info-box">
                    <h3>Portefólio pessoal</h3>
                    <p>
                        Website desenvolvido em HTML, CSS e JavaScript para apresentação profissional,
                        percurso formativo e competências técnicas.
                    </p>
                </div>

                <div class="info-box">
                    <h3>Projetos Web</h3>
                    <p>
                        Páginas responsivas, interfaces interativas, formulários, layouts modernos
                        e experiências de navegação.
                    </p>
                </div>

                <div class="info-box">
                    <h3>Bases de Dados</h3>
                    <p>
                        Modelação de dados, consultas SQL, tabelas relacionais, formulários e relatórios.
                    </p>
                </div>

                <div class="info-box">
                    <h3>Redes e Sistemas</h3>
                    <p>
                        Configuração de redes locais, endereçamento IP, serviços de rede e administração básica.
                    </p>
                </div>
            </div>
        `,
  },

  competencias: {
    titulo: "Competências técnicas",
    etiqueta: "Stack tecnológico",
    conteudo: `
            <p>
                As competências podem ser apresentadas por áreas, facilitando a leitura do perfil técnico.
            </p>

            <h2>Desenvolvimento Web</h2>
            <div class="tag-list">
                <span class="tag">HTML5</span>
                <span class="tag">CSS3</span>
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
        `,
  },

  curriculo: {
    titulo: "Currículo",
    etiqueta: "Resumo profissional",
    conteudo: `
            <p>
                Nesta secção podes integrar uma versão HTML do teu currículo, em vez de depender apenas
                de imagens ou PDF. Isso torna o conteúdo mais acessível, pesquisável e profissional.
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
                <a href="curriculo.html" class="primary-button">Abrir página de Currículo</a>
                <a
                    href="assets/docs/CV_PatriciaSousa.pdf"
                    class="secondary-button"
                    download="CV_PatriciaSousa.pdf">
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
                Esta secção pode incluir email profissional, GitHub, LinkedIn e outras formas de contacto.
            </p>

            <div class="content-grid">
                <div class="info-box">
                    <h3>Email</h3>
                    <p>Adiciona aqui o teu email profissional.</p>
                </div>

                <div class="info-box">
                    <h3>GitHub</h3>
                    <p>Adiciona aqui a ligação para o teu perfil GitHub.</p>
                </div>

                <div class="info-box">
                    <h3>LinkedIn</h3>
                    <p>Adiciona aqui a ligação para o teu LinkedIn.</p>
                </div>

                <div class="info-box">
                    <h3>Localização</h3>
                    <p>Viseu, Portugal.</p>
                </div>
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

  contentCard.focus();

  if (window.innerWidth <= 900) {
    sidebar.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  ativarLinksInternos();
  ativarAutobiografia();
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

const secaoInicial = window.location.hash.replace("#", "") || "sobre";

carregarSecao(secaoInicial);
