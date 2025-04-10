// Dados fictícios dos estádios
const estadios = [
    {
      id: 1,
      nome: "Maracanã",
      imagem: "img/maracana.jpg",
      capacidade: "78.838",
      localizacao: "Rio de Janeiro, Brasil",
      timeMandante: "Flamengo e Fluminense",
      descricao: "Inaugurado em 1950 para a Copa do Mundo, o Maracanã é um dos estádios mais emblemáticos do planeta.",
      curiosidades: "Já recebeu mais de 199 mil pessoas em uma única partida, na final da Copa de 1950."
    },
    {
      id: 2,
      nome: "Camp Nou",
      imagem: "img/campnou.jpg",
      capacidade: "99.354",
      localizacao: "Barcelona, Espanha",
      timeMandante: "FC Barcelona",
      descricao: "Inaugurado em 1957, o Camp Nou é o maior estádio da Europa e símbolo da cultura catalã.",
      curiosidades: "Durante um clássico contra o Real Madrid, mais de 120 mil pessoas já estiveram presentes no Camp Nou."
    },
    {
      id: 3,
      nome: "Wembley",
      imagem: "img/wembley.jpg",
      capacidade: "90.000",
      localizacao: "Londres, Inglaterra",
      timeMandante: "Seleção Inglesa",
      descricao: "Estádio nacional da Inglaterra, reconstruído em 2007, palco de finais históricas.",
      curiosidades: "O novo arco de Wembley é visível de quase toda a cidade de Londres."
    },
    {
      id: 4,
      nome: "San Siro",
      imagem: "img/sansiro.jpg",
      capacidade: "75.923",
      localizacao: "Milão, Itália",
      timeMandante: "AC Milan e Internazionale",
      descricao: "Um dos estádios mais icônicos da Itália, com quase 100 anos de história.",
      curiosidades: "Possui rampas helicoidais que dão acesso às arquibancadas superiores."
    },
    {
      id: 5,
      nome: "Azteca",
      imagem: "img/azteca.jpg",
      capacidade: "87.523",
      localizacao: "Cidade do México, México",
      timeMandante: "Club América e Seleção Mexicana",
      descricao: "Palco de duas finais de Copa do Mundo, é símbolo do futebol latino-americano.",
      curiosidades: "Foi onde Maradona fez os gols da “Mão de Deus” e do “Gol do Século” em 1986."
    },
    {
      id: 6,
      nome: "Old Trafford",
      imagem: "img/oldtrafford.jpg",
      capacidade: "74.140",
      localizacao: "Manchester, Inglaterra",
      timeMandante: "Manchester United",
      descricao: "Conhecido como 'Teatro dos Sonhos', é o lar de algumas das maiores lendas do futebol inglês.",
      curiosidades: "Foi bombardeado durante a Segunda Guerra Mundial e reconstruído nos anos seguintes."
    },
    {
      id: 7,
      nome: "Allianz Arena",
      imagem: "img/allianz.jpg",
      capacidade: "75.000",
      localizacao: "Munique, Alemanha",
      timeMandante: "Bayern de Munique",
      descricao: "Inaugurado em 2005, possui fachada que muda de cor de acordo com o time mandante.",
      curiosidades: "Foi o primeiro estádio do mundo com fachada completamente iluminada por LED."
    },
    {
      id: 8,
      nome: "Estádio Nacional de Tóquio",
      imagem: "img/toqui.jpg",
      capacidade: "68.000",
      localizacao: "Tóquio, Japão",
      timeMandante: "Seleção Japonesa",
      descricao: "Construído para os Jogos Olímpicos de 2020, é exemplo de arquitetura moderna e sustentável.",
      curiosidades: "Mais de 40 mil árvores foram plantadas ao redor para integrar o estádio ao ambiente natural."
    }
  ];
  
  // =====================
  // Página Home (index.html)
  // =====================
  const carousel = document.getElementById("carousel");
  let currentIndex = 0;
  
  if (carousel) {
    function renderCards() {
      carousel.innerHTML = "";
  
      for (let i = currentIndex; i < currentIndex + 2 && i < estadios.length; i++) {
        const estadio = estadios[i];
        const card = document.createElement("div");
        card.className = "card mx-2 flex-fill";
        card.style.minWidth = "calc(50% - 1rem)";
        card.innerHTML = `
          <img src="${estadio.imagem}" class="card-img-top" style="height: 250px; object-fit: cover;">
          <div class="card-body d-flex flex-column justify-content-between">
            <h5 class="card-title">${estadio.nome}</h5>
            <p class="card-text">${estadio.localizacao}</p>
            <a href="detalhes.html?id=${estadio.id}" class="btn btn-success mt-2">Ver Detalhes</a>
          </div>
        `;
        carousel.appendChild(card);
      }
    }
  
    function moveSlide(direction) {
      currentIndex += direction;
  
      if (currentIndex < 0) {
        currentIndex = 0;
      } else if (currentIndex > estadios.length - 2) {
        currentIndex = estadios.length - 2;
      }
  
      renderCards();
    }
  
    function autoSlide() {
      moveSlide(2);
      if (currentIndex >= estadios.length - 2) currentIndex = -2;
    }
  
    renderCards();
  
    window.moveSlide = moveSlide;
    window.pauseAutoSlide = pauseAutoSlide;
    window.resumeAutoSlide = resumeAutoSlide;
  }
  
  // =====================
  // Página Detalhes (detalhes.html)
  // =====================
  const detalhesContainer = document.getElementById("detalhes");
  
  if (detalhesContainer) {
    const urlParams = new URLSearchParams(window.location.search);
    const estadioId = urlParams.get("id");
    const estadio = estadios.find((e) => e.id == estadioId);
  
    if (estadio) {
      detalhesContainer.innerHTML = `
        <div class="row align-items-center">
          <div class="col-md-6 mb-4 mb-md-0">
            <img src="${estadio.imagem}" class="img-fluid rounded shadow" style="max-height: 500px; object-fit: cover; width: 100%;" />
          </div>
          <div class="col-md-6">
            <h2 class="mb-3">${estadio.nome}</h2>
            <p><strong>Localização:</strong> ${estadio.localizacao}</p>
            <p><strong>Capacidade:</strong> ${estadio.capacidade}</p>
            <p><strong>Time:</strong> ${estadio.timeMandante}</p>
            <p><strong>Curiosidades:</strong> ${estadio.curiosidades}</p>
            <a href="index.html#estadios" class="btn btn-success mt-3">⬅ Voltar</a>
          </div>
        </div>
      `;
    } else {
      detalhesContainer.innerHTML = `<p class="text-center text-danger">Estádio não encontrado.</p>`;
    }
  }
  