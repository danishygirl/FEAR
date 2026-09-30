const CONFIG = window.OC101_CONFIG;

function applyConfig() {
  const root = document.documentElement;
  const c = CONFIG.colors || {};
  const f = CONFIG.fontSizes || {};

  const vars = {
    "--background": c.background,
    "--sidebar": c.sidebar,
    "--sidebar-border": c.sidebarBorder,
    "--card": c.card,
    "--card-hover": c.cardHover,
    "--text": c.text,
    "--muted-text": c.mutedText,
    "--accent": c.accent,
    "--search-background": c.searchBackground,
    "--white-button": c.whiteButton,
    "--white-button-text": c.whiteButtonText,
    "--font-xs": f.xs,
    "--font-sm": f.sm,
    "--font-md": f.md,
    "--font-lg": f.lg,
    "--font-xl": f.xl,
    "--font-xxl": f.xxl,
    "--sidebar-font-size": f.sidebar,
    "--home-title-size": f.homeTitle,
    "--home-text-size": f.homeText,
    "--season-title-size": f.seasonTitle,
    "--season-synopsis-size": f.seasonSynopsis,
    "--button-font-size": f.button
  };

  Object.entries(vars).forEach(([k, v]) => v && root.style.setProperty(k, v));

  const name = document.getElementById("site-name");
  const tagline = document.getElementById("site-tagline");
  const logo = document.getElementById("site-logo");
  if (name) name.textContent = CONFIG.siteName;
  if (tagline) tagline.textContent = CONFIG.tagline;
  if (logo) logo.src = CONFIG.logo;
}

function createMenu() {
  const menu = document.getElementById("sidebar-menu");
  if (!menu) return;

  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  CONFIG.menu.forEach(item => {
    const a = document.createElement("a");
    a.href = item.url;
    a.className = "menu-item";
    if (current === item.url.toLowerCase()) a.classList.add("active");
    a.innerHTML = `<span class="menu-icon">${item.icon}</span><span>${item.name}</span>`;
    menu.appendChild(a);
  });
}

let SEARCH_INDEX = [];
async function createSearchIndex() {
  SEARCH_INDEX = [];
  for (const page of CONFIG.searchPages || []) {
    try {
      const r = await fetch(page.url);
      if (!r.ok) continue;
      const html = await r.text();
      const doc = new DOMParser().parseFromString(html, "text/html");
      doc.querySelectorAll("script,style,nav,aside").forEach(el => el.remove());
      doc.querySelectorAll("h1,h2,h3,h4,p,li").forEach(el => {
        const text = el.textContent.replace(/\s+/g, " ").trim();
        if (text.length >= 3) SEARCH_INDEX.push({ text, page: page.name, url: page.url });
      });
    } catch (e) {}
  }
}

function setupSearch() {
  const input = document.getElementById("site-search");
  const box = document.getElementById("search-results");
  if (!input || !box) return;

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    box.innerHTML = "";
    if (q.length < 2) return box.classList.remove("active");
    const results = SEARCH_INDEX.filter(x => x.text.toLowerCase().includes(q)).slice(0, 10);
    if (!results.length) {
      box.innerHTML = `<div class="search-result-item">Nenhum resultado encontrado.</div>`;
    } else {
      results.forEach(r => {
        const a = document.createElement("a");
        a.href = r.url;
        a.className = "search-result-item";
        a.innerHTML = `<div class="search-result-title">${r.text}</div><div class="search-result-page">${r.page}</div>`;
        box.appendChild(a);
      });
    }
    box.classList.add("active");
  });

  document.addEventListener("click", e => {
    if (!e.target.closest(".search-wrapper")) box.classList.remove("active");
  });
}

function renderHome() {
  const h = CONFIG.home;
  const title = document.getElementById("home-title");
  const p1 = document.getElementById("home-p1");
  const p2 = document.getElementById("home-p2");
  if (title) title.textContent = h.title;
  if (p1) p1.textContent = h.paragraph1;
  if (p2) p2.textContent = h.paragraph2;

  const facts = document.getElementById("home-facts");
  if (facts) {
    facts.innerHTML = "";
    h.facts.forEach(item => {
      const d = document.createElement("div");
      d.className = "fact";
      d.innerHTML = `<div class="fact-label">${item.label}</div><div class="fact-value">${item.value}</div>`;
      facts.appendChild(d);
    });
  }

  const links = document.getElementById("home-footer-links");
  if (links) {
    links.innerHTML = "";
    h.footerLinks.forEach(item => {
      const a = document.createElement("a");
      a.href = item.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.className = "footer-link";
      a.innerHTML = `<span class="footer-link-icon">${item.icon}</span><span>${item.name}</span>`;
      links.appendChild(a);
    });
  }
}

function renderManual() {
  const root = document.querySelector(".manual-page");
  const list = document.getElementById("manual-topic-list");
  const label = document.getElementById("manual-label");
  const m = CONFIG.manualPage;
  if (!root || !list || !m) return;

  document.documentElement.style.setProperty("--manual-bg", m.background || "#050505");
  document.documentElement.style.setProperty("--manual-text", m.text || "#f0f0f0");
  document.documentElement.style.setProperty("--manual-muted", m.mutedText || "#9a9a9a");
  document.documentElement.style.setProperty("--manual-line", m.line || "rgba(255,255,255,.14)");
  document.documentElement.style.setProperty("--manual-marker", m.markerColor || "#ffffff");
  if (label) label.textContent = m.label || "MANUAL DE CAMPO";

  list.innerHTML = "";
  (m.topics || []).forEach(topic => {
    const article = document.createElement("article");
    article.className = "manual-topic";
    article.innerHTML = `
      <div class="manual-topic-head">
        <div class="manual-topic-icon"><img src="${topic.icon || ''}" alt=""></div>
        <div class="manual-topic-title-wrap">
          <h2>${topic.title || ''}</h2>
          <p>${topic.subtitle || ''}</p>
        </div>
      </div>
      <p class="manual-topic-body">${topic.body || ''}</p>`;
    list.appendChild(article);
  });
}

function renderGlobalSystem() {
  const grid = document.getElementById("global-system-grid");
  if (!grid || !CONFIG.systemPage) return;
  const s = CONFIG.systemPage;
  document.documentElement.style.setProperty("--system-global-bg", s.background || "#050505");
  document.documentElement.style.setProperty("--system-card-bg", s.cardBackground || "#080808");
  document.documentElement.style.setProperty("--system-card-border", s.cardBorder || "rgba(255,255,255,.18)");
  document.documentElement.style.setProperty("--system-card-hover-border", s.cardHoverBorder || "rgba(255,255,255,.55)");
  grid.innerHTML = "";
  (s.cards || []).forEach(card => {
    const a = document.createElement("a");
    a.className = "global-system-card";
    a.href = card.url || "#";
    a.setAttribute("aria-label", card.ariaLabel || card.key || "Sistema");
    a.innerHTML = `<img src="${card.image}" alt="">`;
    grid.appendChild(a);
  });
}

function renderSeasons() {
  const label = document.getElementById("seasons-label");
  if (label) label.textContent = CONFIG.seasonsPage.label;

  const tools = document.getElementById("seasons-tools");
  if (tools) {
    tools.innerHTML = "";
    CONFIG.seasonsPage.topIcons.forEach(item => {
      const b = document.createElement("div");
      b.className = "seasons-tool";
      b.title = item.title || "";
      b.textContent = item.symbol;
      tools.appendChild(b);
    });
  }

  const grid = document.getElementById("seasons-grid");
  if (!grid) return;
  grid.innerHTML = "";
  CONFIG.seasons.forEach(s => {
    const a = document.createElement("a");
    a.className = "season-card";
    a.href = s.url || "#";
    a.innerHTML = `<img class="season-poster" src="${s.image}" alt="${s.title}"><div class="season-overlay"><h2 class="season-title">${s.title}</h2><p class="season-synopsis">${s.synopsis}</p></div>`;
    grid.appendChild(a);
  });
}


function renderAttributesPage() {
  const page = document.getElementById("attributes-page");
  if (!page || !CONFIG.attributesPage) return;
  const cfg = CONFIG.attributesPage;
  const attrGrid = document.getElementById("attribute-grid");
  const attrDetail = document.getElementById("attribute-detail");
  const archList = document.getElementById("archetype-list");
  const archDetail = document.getElementById("archetype-detail");

  document.documentElement.style.setProperty("--attr-page-bg", cfg.background || "#060606");
  document.documentElement.style.setProperty("--attr-page-text", cfg.text || "#f2f2f2");
  document.documentElement.style.setProperty("--attr-page-muted", cfg.mutedText || "#adadad");
  document.documentElement.style.setProperty("--attr-page-line", cfg.line || "rgba(255,255,255,.16)");
  document.documentElement.style.setProperty("--attr-page-icon", cfg.iconColor || "#f2f2f2");

  function renderAttributeDetail(item) {
    if (!attrDetail || !item) return;
    attrDetail.innerHTML = `
      <div class="detail-head">
        <div class="detail-icon large"><img src="${item.icon || ''}" alt=""></div>
        <div class="detail-head-copy">
          <h3>${item.title || ''}</h3>
          <p>${item.summary || ''}</p>
        </div>
      </div>
      <div class="level-list">
        ${(item.levels || []).map(level => `
          <div class="level-row">
            <div class="level-name">Nível ${level.level}</div>
            <div class="level-copy">
              <p class="level-effect">${level.effect || ''}</p>
              <p class="level-roll">${level.roll || ''}</p>
            </div>
          </div>`).join('')}
      </div>`;
  }

  function renderArchetypeDetail(item) {
    if (!archDetail || !item) return;
    archDetail.innerHTML = `
      <div class="detail-head">
        <div class="detail-icon large"><img src="${item.icon || ''}" alt=""></div>
        <div class="detail-head-copy">
          <h3>${item.title || ''}</h3>
          <p>${item.summary || ''}</p>
        </div>
      </div>
      <div class="arch-detail-list">
        <div class="arch-detail-row"><div class="arch-label">Estilo de jogo</div><div class="arch-value">${item.style || ''}</div></div>
        <div class="arch-detail-row"><div class="arch-label">Foco narrativo</div><div class="arch-value">${item.focus || ''}</div></div>
        <div class="arch-detail-row"><div class="arch-label">Vantagem inicial</div><div class="arch-value">${item.benefit || ''}</div></div>
      </div>`;
  }

  if (attrGrid) {
    attrGrid.innerHTML = (cfg.attributes || []).map((item, index) => `
      <button class="attribute-button ${index === 0 ? 'active' : ''}" type="button" data-attribute-index="${index}">
        <span class="attribute-level-badge">${item.defaultLevel ?? 0}</span>
        <span class="attribute-icon"><img src="${item.icon || ''}" alt=""></span>
        <span class="attribute-title">${item.title || ''}</span>
      </button>`).join('');
    attrGrid.querySelectorAll('[data-attribute-index]').forEach(btn => {
      btn.addEventListener('click', () => {
        attrGrid.querySelectorAll('.attribute-button').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
        renderAttributeDetail(cfg.attributes[Number(btn.dataset.attributeIndex)]);
      });
    });
    renderAttributeDetail((cfg.attributes || [])[0]);
  }

  if (archList) {
    archList.innerHTML = (cfg.archetypes || []).map((item, index) => `
      <button class="archetype-button ${index === 0 ? 'active' : ''}" type="button" data-archetype-index="${index}">
        <span class="archetype-level-badge">${item.startingLevel ?? 0}</span>
        <span class="archetype-icon"><img src="${item.icon || ''}" alt=""></span>
        <span class="archetype-title">${item.title || ''}</span>
      </button>`).join('');
    archList.querySelectorAll('[data-archetype-index]').forEach(btn => {
      btn.addEventListener('click', () => {
        archList.querySelectorAll('.archetype-button').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
        renderArchetypeDetail(cfg.archetypes[Number(btn.dataset.archetypeIndex)]);
      });
    });
    renderArchetypeDetail((cfg.archetypes || [])[0]);
  }
}


function renderPerksPage() {
  const page = document.getElementById("perks-page");
  if (!page || !CONFIG.perksPage) return;
  const cfg = CONFIG.perksPage;
  const grid = document.getElementById("perks-grid");
  const detail = document.getElementById("perk-detail");
  const group = document.getElementById("perks-group-label");

  document.documentElement.style.setProperty("--perks-page-bg", cfg.background || "#060606");
  document.documentElement.style.setProperty("--perks-page-text", cfg.text || "#f2f2f2");
  document.documentElement.style.setProperty("--perks-page-muted", cfg.mutedText || "#b3b3b3");
  document.documentElement.style.setProperty("--perks-page-line", cfg.line || "rgba(255,255,255,.16)");
  document.documentElement.style.setProperty("--perks-panel-bg", cfg.panelBackground || "#090909");

  if (group) group.textContent = cfg.groupLabel || "PASSIVAS";

  function renderPerkDetail(item) {
    if (!detail || !item) return;
    detail.innerHTML = `
      <div class="perk-detail-scroll">
        <div class="perk-hero"><div class="perk-hero-icon"><img src="${item.icon || ''}" alt=""></div></div>
        <div class="perk-title-row">
          <div class="perk-mini-icon"><img src="${item.icon || ''}" alt=""></div>
          <div class="perk-title-copy">
            <h2>${item.title || ''}</h2>
            <p>${item.subtitle || ''}</p>
          </div>
        </div>
        <div class="perk-requirement"><span>${cfg.detailLabels?.requirement || 'REQUISITO'}</span>${item.requirement || ''}</div>
        <div class="perk-ability-label">${cfg.detailLabels?.ability || 'HABILIDADE'}</div>
        <div class="perk-description">${item.description || ''}</div>
        <div class="perk-level-section">
          ${(item.levels || []).map(level => `
            <div class="perk-level-row">
              <div class="perk-level-head">${level.label || ('Nível ' + level.level)}</div>
              <div class="perk-level-effect">${level.effect || ''}</div>
              <div class="perk-level-roll"><span>${cfg.detailLabels?.roll || 'ROLAGEM'}</span>${level.roll || ''}</div>
            </div>
          `).join('')}
        </div>
      </div>`;
  }

  if (grid) {
    grid.innerHTML = (cfg.perks || []).map((item, index) => `
      <button class="perk-button ${index === 0 ? 'active' : ''}" type="button" data-perk-index="${index}" aria-label="${item.title || ''}">
        <span class="perk-button-icon"><img src="${item.icon || ''}" alt=""></span>
      </button>`).join('');
    grid.querySelectorAll('[data-perk-index]').forEach(btn => {
      btn.addEventListener('click', () => {
        grid.querySelectorAll('.perk-button').forEach(x => x.classList.remove('active'));
        btn.classList.add('active');
        renderPerkDetail(cfg.perks[Number(btn.dataset.perkIndex)]);
      });
    });
    renderPerkDetail((cfg.perks || [])[0]);
  }
}

(async function init() {
  applyConfig();
  createMenu();
  renderHome();
  renderSeasons();
  renderGlobalSystem();
  renderManual();
  renderAttributesPage();
  renderPerksPage();
  setupSearch();
  await createSearchIndex();
})();
