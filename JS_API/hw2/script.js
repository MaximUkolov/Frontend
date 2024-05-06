const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const indicatorsContainer = document.querySelector('.indicators');
  const indicators = [];

  slides.forEach((slide, index) => {
    const indicator = document.createElement('div');
    indicator.classList.add('indicator');
    indicatorsContainer.appendChild(indicator);
    indicators.push(indicator);
    slide.style.transform = `translateX(${index * 100}%)`;
  });

  let currentSlide = 0;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
  }

  function updateSlider() {
    slider.style.transform = `translateX(${-currentSlide * 100}%)`;
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[currentSlide].classList.add('active');
  }

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentSlide = index;
      updateSlider();
    });
  });