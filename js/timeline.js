// Timeline page logic
import { qs, on } from './utils.js';

let data = [];

async function loadData() {
  try {
    const res = await fetch('./assets/data/timeline.json');
    data = await res.json();
  } catch (e) {
    data = [
      { year: 1977, title: 'Apple II', desc: 'Mass-produced microcomputer.' },
      { year: 1981, title: 'IBM PC', desc: 'Standardized personal computing.' }
    ];
  }
}

function render(items) {
  const list = qs('#timelineList');
  if (!list) return;
  list.innerHTML = items.map(e => `<div class="item"><h3 class="h6 mb-1">${e.year} — ${e.title}</h3><p class="mb-0 small text-muted">${e.desc}</p></div>`).join('');
}

function applyFilters() {
  const yearVal = Number(qs('#yearFilter')?.value || 0);
  const q = (qs('#searchInput')?.value || '').toLowerCase();
  const filtered = data.filter(e => e.year >= yearVal && (!q || (e.title + ' ' + e.desc).toLowerCase().includes(q)));
  render(filtered);
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadData();
  render(data);
  on(qs('#yearFilter'), 'input', applyFilters);
  on(qs('#searchInput'), 'input', applyFilters);
  on(qs('#resetFilters'), 'click', () => { const y = qs('#yearFilter'); const s = qs('#searchInput'); if (y) y.value = '1980'; if (s) s.value = ''; render(data); });
});


