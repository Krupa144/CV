const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');
const container = document.querySelector('.tech-container-inner');
const cards = container ? container.children : null;

if (!scrollLeftBtn || !scrollRightBtn || !container || !cards || cards.length === 0) {
  console.error('Scroll buttons, container or cards not found!');
} else {
  scrollLeftBtn.addEventListener('click', () => {
    container.scrollBy({ left: -300, behavior: 'smooth' });
  });

  scrollRightBtn.addEventListener('click', () => {
    container.scrollBy({ left: 300, behavior: 'smooth' });
  });
}
