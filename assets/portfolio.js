const menuToggle = document.querySelector('#menuToggle');
const nav = document.querySelector('#navDrawer');
function closeMenu() {
  menuToggle.setAttribute('aria-expanded', 'false');
  delete nav.dataset.open;
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  if (open) nav.dataset.open = 'true';
  else delete nav.dataset.open;
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuToggle.focus();
  }
});
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);

const selectedButton = document.querySelector('#selectedWork');
const allButton = document.querySelector('#allWork');
const cards = [...document.querySelectorAll('.project-card')];
function showProjects(selected) {
  for (const card of cards) {
    card.hidden = selected && card.dataset.selected !== 'true';
  }
  selectedButton.setAttribute('aria-pressed', String(selected));
  allButton.setAttribute('aria-pressed', String(!selected));
  const count = cards.filter(card => !card.hidden).length;
  document.querySelector('#projectFilterStatus').textContent =
    `Showing ${count} ${selected ? 'selected' : 'substantial'} projects`;
}
selectedButton.addEventListener('click', () => showProjects(true));
allButton.addEventListener('click', () => showProjects(false));
showProjects(true);
