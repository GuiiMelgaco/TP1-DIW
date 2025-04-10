const stadiums = [
    { nome: "Maracanã", clube: "Flamengo e Fluminense", imagem: "img/maracana.jpg" },
    { nome: "Camp Nou", clube: "Barcelona", imagem: "img/campnou.jpg" },
    { nome: "Old Trafford", clube: "Manchester United", imagem: "img/oldtrafford.jpg" },
    { nome: "Santiago Bernabéu", clube: "Real Madrid", imagem: "img/bernabeu.jpg" },
    { nome: "Allianz Arena", clube: "Bayern de Munique", imagem: "img/allianz.jpg" },
    { nome: "San Siro", clube: "Milan e Inter", imagem: "img/sansiro.jpg" }
  ];
  
  let currentIndex = 0;
  let autoSlide;
  
  function createCards() {
    const carousel = document.getElementById('carousel');
    stadiums.forEach(estadio => {
      const cardWrapper = document.createElement('div');
      cardWrapper.className = 'stadium-card';
      cardWrapper.innerHTML = `
        <div class="card">
          <img src="${estadio.imagem}" class="card-img-top" alt="${estadio.nome}">
          <div class="card-body">
            <h5 class="card-title">${estadio.nome}</h5>
            <p class="card-text">${estadio.clube}</p>
          </div>
        </div>`;
      carousel.appendChild(cardWrapper);
    });
  }
  
  function moveSlide(step) {
    const totalCards = stadiums.length;
    const maxIndex = totalCards - 2;
    currentIndex += step;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    updateCarousel();
  }
  
  function updateCarousel() {
    const cardWidth = document.querySelector('.stadium-card').offsetWidth;
    document.getElementById('carousel').style.transform = `translateX(-${cardWidth * currentIndex}px)`;
  }
  
  function startAutoSlide() {
    autoSlide = setInterval(() => moveSlide(2), 5000);
  }
  
  function pauseAutoSlide() {
    clearInterval(autoSlide);
  }
  
  function resumeAutoSlide() {
    startAutoSlide();
  }
  
  window.onload = () => {
    createCards();
    updateCarousel();
    startAutoSlide();
  };
  