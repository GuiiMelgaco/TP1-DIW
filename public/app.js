const estadios = [
  {
    id: 1,
    nome: "Camp Nou",
    imagem: "img/campnou.jpg",
    capacidade: "99.354",
    localizacao: "Barcelona, Espanha",
    timeMandante: "FC Barcelona",
    descricao: "Inaugurado em 1957, o Camp Nou é o maior estádio da Europa e símbolo da cultura catalã.",
    curiosidades: "Durante um clássico contra o Real Madrid, mais de 120 mil pessoas já estiveram presentes no Camp Nou.",
    recorde: "120.000 pessoas em um clássico contra o Real Madrid.",
    eventos: "Final da Liga dos Campeões de 1999, Jogos Olímpicos de 1992.",
    imagens: [
      "img/campnou/foto1.jpg",
      "img/campnou/foto2.jpg",
      "img/campnou/foto3.jpg",
      "img/campnou/foto4.jpg",
      "img/campnou/foto5.jpg",
      "img/campnou/foto6.jpg",
      "img/campnou/foto7.jpg",
      "img/campnou/foto8.jpg"
    ]
  },
  {
    id: 2,
    nome: "Santiago Bernabéu",
    imagem: "img/bernabeu.jpg",
    capacidade: "81.044",
    localizacao: "Madri, Espanha",
    timeMandante: "Real Madrid",
    descricao: "Inaugurado em 1947, o Santiago Bernabéu é um dos mais prestigiosos estádios de futebol do mundo.",
    curiosidades: "O estádio passou por uma grande reforma recentemente, incluindo a instalação de um teto retrátil.",
    recorde: "127.000 pessoas em uma final da Copa da Europa.",
    eventos: "Final da Copa do Mundo de 1982, Final da Liga dos Campeões de 2010.",
    imagens: [
      "img/bernabeu/foto1.jpg",
      "img/bernabeu/foto2.jpg",
      "img/bernabeu/foto3.jpg",
      "img/bernabeu/foto4.jpg",
      "img/bernabeu/foto5.jpg",
      "img/bernabeu/foto6.jpg",
      "img/bernabeu/foto7.jpg",
      "img/bernabeu/foto8.jpg"
    ]
  },
  {
    id: 3,
    nome: "Maracanã",
    imagem: "img/maracana.jpg",
    capacidade: "78.838",
    localizacao: "Rio de Janeiro, Brasil",
    timeMandante: "Flamengo e Fluminense",
    descricao: "Inaugurado em 1950 para a Copa do Mundo, o Maracanã é um dos estádios mais emblemáticos do planeta.",
    curiosidades: "Já recebeu mais de 199 mil pessoas em uma única partida, na final da Copa de 1950.",
    recorde: "199.854 pessoas na final da Copa do Mundo de 1950.",
    eventos: "Final da Copa do Mundo de 1950, Jogos Olímpicos de 2016, Final da Copa Libertadores de 2019.",
    imagens: [
      "img/maracana/foto1.jpg",
      "img/maracana/foto2.jpg",
      "img/maracana/foto3.jpg",
      "img/maracana/foto4.jpg",
      "img/maracana/foto5.jpg",
      "img/maracana/foto6.jpg",
      "img/maracana/foto7.jpg",
      "img/maracana/foto8.jpg"
    ]
  },
  {
    id: 4,
    nome: "Allianz Arena",
    imagem: "img/allianz.jpg",
    capacidade: "75.000",
    localizacao: "Munique, Alemanha",
    timeMandante: "Bayern de Munique",
    descricao: "Inaugurado em 2005, possui fachada que muda de cor de acordo com o time mandante.",
    curiosidades: "Foi o primeiro estádio do mundo com fachada completamente iluminada por LED.",
    recorde: "75.000 pessoas em uma final da Liga dos Campeões.",
    eventos: "Final da Liga dos Campeões de 2012, Final da Copa do Mundo de 2006.",
    imagens: [
      "img/allianz/foto1.jpg",
      "img/allianz/foto2.jpg",
      "img/allianz/foto3.jpg",
      "img/allianz/foto4.jpg",
      "img/allianz/foto5.jpg",
      "img/allianz/foto6.jpg",
      "img/allianz/foto7.jpg",
      "img/allianz/foto8.jpg"
    ]
  },
  {
    id: 5,
    nome: "San Siro",
    imagem: "img/sansiro.jpg",
    capacidade: "75.923",
    localizacao: "Milão, Itália",
    timeMandante: "AC Milan e Internazionale",
    descricao: "Um dos estádios mais icônicos da Itália, com quase 100 anos de história.",
    curiosidades: "Possui rampas helicoidais que dão acesso às arquibancadas superiores.",
    recorde: "80.000 pessoas em uma final da Liga dos Campeões.",
    eventos: "Final da Copa do Mundo de 1990, Final da Liga dos Campeões de 2003.",
    imagens: [
      "img/sansiro/foto1.jpg",
      "img/sansiro/foto2.jpg",
      "img/sansiro/foto3.jpg",
      "img/sansiro/foto4.jpg",
      "img/sansiro/foto5.jpg",
      "img/sansiro/foto6.jpg",
      "img/sansiro/foto7.jpg",
      "img/sansiro/foto8.jpg"
    ]
  },
  {
    id: 6,
    nome: "Old Trafford",
    imagem: "img/oldtrafford.jpg",
    capacidade: "74.140",
    localizacao: "Manchester, Inglaterra",
    timeMandante: "Manchester United",
    descricao: "Conhecido como 'Teatro dos Sonhos', é o lar de algumas das maiores lendas do futebol inglês.",
    curiosidades: "Foi bombardeado durante a Segunda Guerra Mundial e reconstruído nos anos seguintes.",
    recorde: "76.962 pessoas em um jogo contra o AC Milan.",
    eventos: "Final da Liga dos Campeões de 2003, Jogos Olímpicos de 2012.",
    imagens: [
      "img/trafford/foto1.jpg",
      "img/trafford/foto2.jpg",
      "img/trafford/foto3.jpg",
      "img/trafford/foto4.jpg",
      "img/trafford/foto5.jpg",
      "img/trafford/foto6.jpg",
      "img/trafford/foto7.jpg",
      "img/trafford/foto8.jpg"
    ]
  },
  {
    id: 7,
    nome: "Signal Iduna Park",
    imagem: "img/iduna.jpg",
    capacidade: "81.365",
    localizacao: "Dortmund, Alemanha",
    timeMandante: "Borussia Dortmund",
    descricao: "Conhecido por sua torcida apaixonada, é o maior estádio da Alemanha, famoso pela atmosfera única.",
    curiosidades: "O estádio é famoso pela 'Amarelinha', a muralha amarela composta pela torcida do Dortmund.",
    recorde: "80.720 pessoas em uma partida contra o Schalke 04.",
    eventos: "Final da Liga dos Campeões de 2013.",
    imagens: [
      "img/iduna/foto1.jpg",
      "img/iduna/foto2.jpg",
      "img/iduna/foto3.jpg",
      "img/iduna/foto4.jpg",
      "img/iduna/foto5.jpg",
      "img/iduna/foto6.jpg",
      "img/iduna/foto7.jpg",
      "img/iduna/foto8.jpg"
    ]
  },
  {
    id: 8,
    nome: "Wembley",
    imagem: "img/wembley.jpg",
    capacidade: "90.000",
    localizacao: "Londres, Inglaterra",
    timeMandante: "Seleção Inglesa",
    descricao: "Estádio nacional da Inglaterra, reconstruído em 2007, palco de finais históricas.",
    curiosidades: "O novo arco de Wembley é visível de quase toda a cidade de Londres.",
    recorde: "90.000 pessoas em uma final da Liga dos Campeões.",
    eventos: "Final da Copa do Mundo de 1966, Final da Liga dos Campeões de 2011.",
    imagens: [
      "img/wembley/foto1.jpg",
      "img/wembley/foto2.jpg",
      "img/wembley/foto3.jpg",
      "img/wembley/foto4.jpg",
      "img/wembley/foto5.jpg",
      "img/wembley/foto6.jpg",
      "img/wembley/foto7.jpg",
      "img/wembley/foto8.jpg"
    ]
  },
  {
    id: 9,
    nome: "Estádio Monumental",
    imagem: "img/monumental.jpg",
    capacidade: "83.214",
    localizacao: "Buenos Aires, Argentina",
    timeMandante: "River Plate",
    descricao: "O Estádio Monumental é o maior estádio da Argentina e a casa do River Plate.",
    curiosidades: "Foi sede da final da Copa do Mundo de 1978 e é conhecido por sua atmosfera vibrante.",
    recorde: "Mais de 86.000 torcedores em um clássico River vs Boca.",
    eventos: "Final da Copa Libertadores de 2018 (transferida para Madrid), shows de grandes artistas internacionais.",
    imagens: [
      "img/monumental/foto1.jpg",
      "img/monumental/foto2.jpg",
      "img/monumental/foto3.jpg",
      "img/monumental/foto4.jpg",
      "img/monumental/foto5.jpg",
      "img/monumental/foto6.jpg",
      "img/monumental/foto7.jpg",
      "img/monumental/foto8.jpg"
    ]
  },
  {
    id: 10,
    nome: "Parc des Princes",
    imagem: "img/parc.jpg",
    capacidade: "48.712",
    localizacao: "Paris, França",
    timeMandante: "Paris Saint-Germain",
    descricao: "O Parc des Princes é um estádio com uma rica história no futebol francês e europeu, inaugurado em 1972.",
    curiosidades: "Foi palco de grandes vitórias do PSG e eventos históricos, incluindo jogos da Copa do Mundo de 1998.",
    recorde: "49.000 pessoas em uma final da Copa da Liga.",
    eventos: "Jogos Olímpicos de 1998, Final da Liga dos Campeões de 2020.",
    imagens: [
      "img/parc/foto1.jpg",
      "img/parc/foto2.jpg",
      "img/parc/foto3.jpg",
      "img/parc/foto4.jpg",
      "img/parc/foto5.jpg",
      "img/parc/foto6.jpg",
      "img/parc/foto7.jpg",
      "img/parc/foto8.jpg"
    ]
  },
  {
    id: 11,
    nome: "La Bombonera",
    imagem: "img/bombonera.jpg",
    capacidade: "54.000",
    localizacao: "Buenos Aires, Argentina",
    timeMandante: "Boca Juniors",
    descricao: "A casa do Boca Juniors, conhecida por sua atmosfera única e apaixonada torcida.",
    curiosidades: "A Bombonera é famosa pelo seu formato de caixa, que cria um ambiente extremamente intimista e barulhento.",
    recorde: "54.000 pessoas em um Superclássico contra o River Plate.",
    eventos: "Final da Copa Libertadores de 2000, Superclássicos históricos.",
    imagens: [
      "img/bombonera/foto1.jpg",
      "img/bombonera/foto2.jpg",
      "img/bombonera/foto3.jpg",
      "img/bombonera/foto4.jpg",
      "img/bombonera/foto5.jpg",
      "img/bombonera/foto6.jpg",
      "img/bombonera/foto7.jpg",
      "img/bombonera/foto8.jpg"
    ]
  },
  {
    id: 12,
    nome: "Anfield",
    imagem: "img/anfield.jpg",
    capacidade: "54.074",
    localizacao: "Liverpool, Inglaterra",
    timeMandante: "Liverpool FC",
    descricao: "O estádio mais famoso de Liverpool, conhecido pela sua atmosfera apaixonada e pela 'Kop', sua famosa arquibancada.",
    curiosidades: "Anfield é famoso pelo canto de sua torcida, especialmente no 'You'll Never Walk Alone'.",
    recorde: "54.074 pessoas em um jogo da Premier League.",
    eventos: "Final da Liga dos Campeões de 2005, Final da Premier League de 2019.",
    imagens: [
      "img/anfield/foto1.jpg",
      "img/anfield/foto2.jpg",
      "img/anfield/foto3.jpg",
      "img/anfield/foto4.jpg",
      "img/anfield/foto5.jpg",
      "img/anfield/foto6.jpg",
      "img/anfield/foto7.jpg",
      "img/anfield/foto8.jpg"
    ]
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

  renderCards();

  window.moveSlide = moveSlide;
}

  
  // Seção 1 - Carrossel com destaques
const carouselInner = document.getElementById("carousel-inner");
if (carouselInner) {
  estadios.slice(0, ).forEach((estadio, index) => {
    const activeClass = index === 0 ? "active" : "";
    const item = document.createElement("div");
    item.className = `carousel-item ${activeClass}`;
    item.innerHTML = `
    <a href="detalhes.html?id=${estadio.id}">
      <img src="${estadio.imagem}" class="d-block w-100" style="height: 400px; object-fit: cover;" alt="Imagem do ${estadio.nome}">
    </a>
    <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
      <h5>${estadio.nome}</h5>
      <p>${estadio.descricao}</p>
    </div>
  `;
    carouselInner.appendChild(item);
  });
}

// Seção 2 - Cards de todos os estádios
const estadioCards = document.getElementById("estadio-cards");
if (estadioCards) {
  estadios.forEach(estadio => {
    const card = document.createElement("div");
    card.className = "col-md-6 col-lg-4 mb-4";
    card.innerHTML = `
      <div class="card h-100 shadow">
        <img src="${estadio.imagem}" class="card-img-top" style="height: 200px; object-fit: cover;" alt="${estadio.nome}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${estadio.nome}</h5>
          <p class="card-text">${estadio.localizacao}<br>${estadio.timeMandante}</p>
          <a href="detalhes.html?id=${estadio.id}" class="btn btn-success mt-auto">Ver Detalhes</a>
        </div>
      </div>
    `;
    estadioCards.appendChild(card);
  });
}