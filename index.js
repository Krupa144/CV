const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');
const container = document.querySelector('.tech-container-inner');
const cards = container ? container.children : null;

if (!scrollLeftBtn || !scrollRightBtn || !container || !cards || cards.length === 0) {
  console.error('Scroll buttons, container or cards not found!');
} else {
  function updateButtons() {
    scrollLeftBtn.disabled = container.scrollLeft <= 0;
    scrollRightBtn.disabled = container.scrollLeft + container.clientWidth >= container.scrollWidth;
    
    scrollLeftBtn.style.opacity = scrollLeftBtn.disabled ? '0.5' : '1';
    scrollRightBtn.style.opacity = scrollRightBtn.disabled ? '0.5' : '1';
  }

  scrollLeftBtn.addEventListener('click', () => {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  });

  scrollRightBtn.addEventListener('click', () => {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  });

  container.addEventListener('scroll', updateButtons);

  [...cards].forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.6s ease ${index * 100}ms, transform 0.6s ease ${index * 100}ms`;

    setTimeout(() => {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, 100);
  });

  updateButtons();

  container.addEventListener('wheel', (e) => {
    if (e.deltaY === 0) return; 
    e.preventDefault();
    container.scrollBy({ left: e.deltaY, behavior: 'smooth' });
  });
}
