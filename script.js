window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const cardHeight = card.offsetHeight;
      if (cardTop < window.innerHeight - cardHeight / 3) {
        card.classList.add('show');
      } else {
        card.classList.remove('show');
      }
    });
  });
  