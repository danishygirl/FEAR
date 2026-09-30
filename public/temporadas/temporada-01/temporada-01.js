(function(){
  const C = window.SEASON01;
  if(!C) return;
  const r = document.documentElement.style;
  const t=C.theme;
  const vars={"--desk":t.desk,"--paper":t.paper,"--paper-light":t.paperLight,"--paper-dark":t.paperDark,"--ink":t.ink,"--muted":t.mutedInk,"--accent":t.accent,"--nav-bg":t.navBackground,"--nav-border":t.navBorder,"--nav-text":t.navText,"--shadow":t.cardShadow,"--body-font":t.bodyFont,"--ui-font":t.uiFont,"--title-font":t.titleFont};
  Object.entries(vars).forEach(([k,v])=>r.setProperty(k,v));
  if(t.deskImage) document.body.style.backgroundImage=`url('${t.deskImage}')`;

  document.querySelectorAll('[data-back]').forEach(a=>{a.href=C.site.backUrl;a.title=C.site.backLabel});
  document.querySelectorAll('[data-main]').forEach(a=>{a.href='index.html';a.textContent=C.site.mainLabel});
  document.querySelectorAll('[data-season-badge]').forEach(e=>e.textContent=C.site.seasonBadge);

  const main=document.querySelector('[data-main-board]');
  if(main){
    const m=C.main;
    document.querySelector('[data-main-title]').textContent=m.title;
    document.querySelector('[data-main-season]').textContent=m.season;
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
