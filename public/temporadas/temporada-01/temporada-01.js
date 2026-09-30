(function(){
  const C = window.SEASON01;
  if(!C) return;
  const r = document.documentElement.style;
  const t=C.theme;
  const vars={"--desk":t.desk,"--paper":t.paper,"--paper-light":t.paperLight,"--paper-dark":t.paperDark,"--ink":t.ink,"--muted":t.mutedInk,"--accent":t.accent,"--nav-bg":t.navBackground,"--nav-border":t.navBorder,"--nav-text":t.navText,"--shadow":t.cardShadow,"--body-font":t.bodyFont,"--ui-font":t.uiFont,"--title-font":t.titleFont};
  Object.entries(vars).forEach(([k,v])=>r.setProperty(k,v));
  // BACKGROUND EDITÁVEL DA TEMPORADA 01
  const bg = t.background || {};
  const body = document.body;
  body.style.backgroundColor = bg.color || t.desk || '#26231f';
  if (bg.image) {
    body.style.backgroundImage = `url('${bg.image}')`;
    body.style.backgroundSize = bg.size || 'cover';
    body.style.backgroundPosition = bg.position || 'center top';
    body.style.backgroundRepeat = bg.repeat || 'no-repeat';
    body.style.backgroundAttachment = bg.attachment || 'fixed';
  } else if (t.deskImage) {
    body.style.backgroundImage = `url('${t.deskImage}')`;
  } else {
    body.style.backgroundImage = 'none';
  }
  r.setProperty('--season-overlay', bg.overlay || 'rgba(0,0,0,0)');

  document.querySelectorAll('[data-back]').forEach(a=>{a.href=C.site.backUrl;a.title=C.site.backLabel});
  document.querySelectorAll('[data-main]').forEach(a=>{a.href='index.html';a.textContent=C.site.mainLabel});

  const main=document.querySelector('[data-main-board]');
  if(main){
    const m=C.main;
    document.querySelector('[data-main-title]').textContent=m.title;
    const seasonLabel=document.querySelector('[data-main-season]');
    if(seasonLabel) seasonLabel.textContent=m.season;
    document.querySelector('[data-main-photo]').src=m.poster;
    document.querySelector('[data-main-small-photo]').src=m.smallPhoto;
    document.querySelector('[data-main-mystery-photo]').src=m.mysteryPhoto;
    document.querySelector('[data-camp-name]').textContent=m.campName;
    document.querySelector('[data-handwritten]').textContent=m.handwrittenNote;
    document.querySelector('[data-main-quote]').textContent='“'+m.quote+'”';
    document.querySelector('[data-case-number]').textContent=m.caseNumber;
    const copy=document.querySelector('[data-main-copy]');
    copy.innerHTML=m.synopsis.map(p=>`<p>${p}</p>`).join('');
    const grid=document.querySelector('[data-modules]');
    grid.innerHTML=C.modules.map(x=>`<a class="module-card torn" href="${x.url}"><div class="module-thumb"><img src="${x.image}" alt=""></div><div class="module-content"><h2>${x.title}</h2><p>${x.description}</p></div><span class="module-arrow">→</span></a>`).join('');
  }

  const pageKey=document.body.dataset.page;

  if(pageKey === "sistema" && C.pages.sistema){
    const p=C.pages.sistema;
    document.title=`${p.title} — Temporada 01 — OC 101`;
    const q=(sel)=>document.querySelector(sel);
    if(q('[data-system-kicker]')) q('[data-system-kicker]').textContent=p.kicker || '';
    if(q('[data-system-title]')) q('[data-system-title]').textContent=p.title || 'SISTEMA';
    if(q('[data-system-code]')) q('[data-system-code]').textContent=p.code || '';
    if(q('[data-system-intro]')) q('[data-system-intro]').textContent=p.intro || '';
    if(q('[data-system-footer-left]')) q('[data-system-footer-left]').textContent=p.footerLeft || '';
    if(q('[data-system-footer-right]')) q('[data-system-footer-right]').textContent=p.footerRight || '';
    const grid=q('[data-system-cards]');
    if(grid){
      grid.innerHTML=(p.cards||[]).map((card,i)=>{
        const sections=(card.sections||[]).map(sec=>`<div class="system-rule"><h3>${sec.title}</h3><p>${sec.text}</p></div>`).join('');
        const attrs=(card.attributes||[]).map(a=>`<div class="attribute-item"><strong>${a.name}</strong><span>${a.description}</span></div>`).join('');
        return `<article class="system-card" data-system-card="${card.key||i}">
          <div class="system-card-label">0${i+1} / ${card.key||'arquivo'}</div>
          <div class="system-card-visual"><img src="${card.image||''}" alt=""></div>
          <h2>${card.title}</h2>
          <p class="system-card-summary">${card.summary||''}</p>
          ${attrs ? `<div class="attribute-list">${attrs}</div>` : `<div class="system-rule-list">${sections}</div>`}
        </article>`;
      }).join('');
    }
    return;
  }

  if(pageKey && C.pages[pageKey]){
    const p=C.pages[pageKey];
    document.title=`${p.title} — Temporada 01 — OC 101`;
    document.querySelector('[data-page-eyebrow]').textContent=p.eyebrow;
    document.querySelector('[data-page-title]').textContent=p.title;
    document.querySelector('[data-page-intro]').textContent=p.intro;
    const nav=document.querySelector('[data-page-index]');
    const sections=document.querySelector('[data-page-sections]');
    nav.innerHTML=p.sections.map((s,i)=>`<a href="#sec-${i+1}">${String(i+1).padStart(2,'0')} — ${s.title}</a>`).join('');
    sections.innerHTML=p.sections.map((s,i)=>`<section class="document-section" id="sec-${i+1}"><h3>${s.title}</h3><p>${s.text}</p></section>`).join('');
  }
})();
