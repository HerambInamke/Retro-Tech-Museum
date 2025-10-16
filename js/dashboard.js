// Mock user and interactions for dashboard
const mockUser = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  stats: { gadgets: 12, timeline: 27, fun: 5 },
  activity: [
    { title: 'Viewed Game Boy', time: '2h ago' },
    { title: 'Timeline: 1981 — IBM PC', time: '5h ago' },
    { title: 'Pixel Grid session', time: '1d ago' }
  ],
  prefs: { reduceMotion: false, muteSounds: false, themeDark: true }
};

function $(sel, root = document) { return root.querySelector(sel); }

function renderUser(u) {
  $('#userName').textContent = u.name;
  $('#userEmail').textContent = u.email;
  $('#statGadgets').textContent = String(u.stats.gadgets);
  $('#statTimeline').textContent = String(u.stats.timeline);
  $('#statFun').textContent = String(u.stats.fun);
  const list = $('#activityList');
  list.innerHTML = u.activity.map(a => `<li class="list-group-item d-flex justify-content-between align-items-center">${a.title}<small>${a.time}</small></li>`).join('');
  $('#reduceMotion').checked = u.prefs.reduceMotion;
  $('#muteSounds').checked = u.prefs.muteSounds;
  $('#themeToggle').checked = u.prefs.themeDark;
}

function savePrefs() {
  const prefs = {
    reduceMotion: $('#reduceMotion').checked,
    muteSounds: $('#muteSounds').checked,
    themeDark: $('#themeToggle').checked
  };
  localStorage.setItem('rt_prefs', JSON.stringify(prefs));
}

function loadPrefs() {
  const raw = localStorage.getItem('rt_prefs');
  if (!raw) return null;
  try { return JSON.parse(raw); } catch { return null; }
}

function applyTheme(dark) {
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
}

document.addEventListener('DOMContentLoaded', () => {
  const prefs = loadPrefs();
  if (prefs) mockUser.prefs = { ...mockUser.prefs, ...prefs };
  renderUser(mockUser);
  applyTheme(mockUser.prefs.themeDark);
  $('#savePrefs').addEventListener('click', () => { savePrefs(); applyTheme($('#themeToggle').checked); });
});


