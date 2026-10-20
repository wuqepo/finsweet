document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.category-btn');
  const cards = document.querySelectorAll('.category-card');

  function filterCards(category) {
    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      card.style.display = (cardCategory === category) ? 'block' : 'none';
    });
  }

  function setActiveButton(activeButton) {
    buttons.forEach(btn => btn.classList.remove('active'));
    activeButton.classList.add('active');
  }

  // При загрузке: показать только Business
  const defaultCategory = 'Business';
  filterCards(defaultCategory);
  buttons.forEach(btn => {
    if (btn.getAttribute('data-filter') === defaultCategory) {
      btn.classList.add('active');
    }
  });

  // Клики по кнопкам
  buttons.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      const selectedCategory = button.getAttribute('data-filter');
      filterCards(selectedCategory);
      setActiveButton(button);
    });
  });
});