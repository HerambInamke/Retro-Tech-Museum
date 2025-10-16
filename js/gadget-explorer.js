// Gadget Explorer interactions
import { qs, on } from './utils.js';

const gadgets = [
  { name: 'Commodore 64', era: '80s', category: 'computer' },
  { name: 'Atari 2600', era: '70s', category: 'console' },
  { name: 'Nintendo Game Boy', era: '80s', category: 'console' },
  { name: 'IBM Model M Keyboard', era: '80s', category: 'peripheral' }
];

function card(g) {
  return `<div class="col"><div class="card h-100"><div class="ratio ratio-16x9 bg-dark-subtle"></div><div class="card-body"><h3 class="h6">${g.name}</h3><p class="small text-muted mb-0">${g.category} • ${g.era}</p></div></div></div>`;
}

function render(list) {
  const grid = qs('#gadgetGrid');
  if (!grid) return;
  grid.innerHTML = list.map(card).join('');
}

function applyFilters() {
  const category = qs('#categorySelect')?.value || 'all';
  const era = qs('#eraSelect')?.value || 'all';
  const q = (qs('#searchGadget')?.value || '').toLowerCase();
  const filtered = gadgets.filter(g => (category === 'all' || g.category === category) && (era === 'all' || g.era === era) && (!q || g.name.toLowerCase().includes(q)));
  render(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
  render(gadgets);
  on(qs('#categorySelect'), 'change', applyFilters);
  on(qs('#eraSelect'), 'change', applyFilters);
  on(qs('#searchGadget'), 'input', applyFilters);
});


