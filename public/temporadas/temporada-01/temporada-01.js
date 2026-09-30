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
    body.style.backgroundAttachment = bg.attachment || 'scroll';
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
    if(q('[data-system-intro]')) q('[data-system-intro]').textContent=p.intro || '';
    if(q('[data-system-footer-left]')) q('[data-system-footer-left]').textContent=p.footerLeft || '';
    if(q('[data-system-footer-right]')) q('[data-system-footer-right]').textContent=p.footerRight || '';

    const esc=(v='')=>String(v).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
    const grid=q('[data-system-cards]');
    const modal=q('[data-system-modal]');
    const modalContent=q('[data-system-modal-content]');

    function renderDetail(card){
      if(card.key==='sobreviva'){
        return `<div class="manual-hover">
          <div class="manual-heading"><span class="manual-square"></span><span class="manual-heading-label">${esc(card.manualLabel||'MANUAL DE CAMPO')}</span></div>
          <div class="system-detail-head manual-detail-head"><span class="system-detail-file">${esc(p.code||'FILE: SYS-01')}</span><h2 id="system-modal-title">${esc(card.title)}</h2><p>${esc(card.intro||card.summary||'')}</p></div>
          <div class="manual-topic-list">${(card.sections||[]).map((sec,i)=>`<article class="manual-topic">
            <div class="manual-topic-lead">
              <div class="manual-topic-icon"><img src="${esc(sec.icon||card.image||'')}" alt=""></div>
              <div class="manual-topic-copy"><span class="manual-topic-index">${String(i+1).padStart(2,'0')}</span><h3>${esc(sec.title)}</h3><p class="manual-topic-summary">${esc(sec.summary||'')}</p></div>
            </div>
            <p class="manual-topic-body">${esc(sec.text||'')}</p>
          </article>`).join('')}</div>
        </div>`;
      }
      const items=card.key==='atributos' ? (card.attributes||[]) : (card.advantages||[]);
      return `<div class="system-detail-head"><span class="system-detail-file">${esc(p.code||'FILE: SYS-01')}</span><h2 id="system-modal-title">${esc(card.title)}</h2><p>${esc(card.intro||card.summary||'')}</p></div>
        <div class="system-icon-grid">${items.map(item=>`<article class="system-icon-item"><div class="system-icon-wrap"><img src="${esc(item.icon||'')}" alt=""></div><h3>${esc(item.name)}</h3><p>${esc(item.description)}</p></article>`).join('')}</div>`;
    }

    function openModal(card){
      modalContent.innerHTML=renderDetail(card);
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden','false');
      document.body.classList.add('modal-open');
      q('.system-modal-close')?.focus();
    }
    function closeModal(){
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden','true');
      document.body.classList.remove('modal-open');
    }

    if(grid){
      grid.innerHTML=(p.cards||[]).map((card,i)=>`<button class="system-choice-card" type="button" data-system-open="${esc(card.key||i)}">
        <div class="system-choice-copy-top"><span class="system-choice-eyebrow">${esc(card.eyebrow || ('ARQUIVO ' + String(i+1).padStart(2,'0')))}</span></div>
        <div class="system-choice-image"><img src="${esc(card.image||'')}" alt=""></div>
        <div class="system-choice-copy"><h2>${esc(card.title)}</h2><p>${esc(card.summary||'')}</p></div>
      </button>`).join('');
      grid.addEventListener('click',e=>{
        const btn=e.target.closest('[data-system-open]');
        if(!btn) return;
        const card=(p.cards||[]).find(x=>String(x.key)===btn.dataset.systemOpen);
        if(card) openModal(card);
      });
    }
    document.querySelectorAll('[data-system-close]').forEach(el=>el.addEventListener('click',closeModal));
    document.addEventListener('keydown',e=>{ if(e.key==='Escape' && modal?.classList.contains('is-open')) closeModal(); });
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
