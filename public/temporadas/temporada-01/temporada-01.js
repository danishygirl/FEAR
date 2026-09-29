(() => {
  const cfg = window.SEASON_01_CONFIG;
  if (!cfg) return;

  const root = document.documentElement;
  const css = {
    "--s1-bg": cfg.theme.background,
    "--s1-bg-image": cfg.theme.backgroundImage || "none",
    "--s1-bg-position": cfg.theme.backgroundPosition,
    "--s1-bg-size": cfg.theme.backgroundSize,
    "--s1-overlay": cfg.theme.backgroundOverlay,
    "--s1-text": cfg.theme.text,
    "--s1-muted": cfg.theme.mutedText,
    "--s1-accent": cfg.theme.accent,
    "--s1-nav-bg": cfg.theme.navBackground,
    "--s1-nav-border": cfg.theme.navBorder,
    "--s1-nav-active": cfg.theme.navActiveBackground,
    "--s1-season-btn-bg": cfg.theme.seasonButtonBackground,
    "--s1-season-btn-text": cfg.theme.seasonButtonText,
    "--s1-poster-border": cfg.theme.posterBorder,
    "--s1-nav-font": cfg.sizes.navText,
    "--s1-eyebrow-font": cfg.sizes.eyebrow,
    "--s1-title-font": cfg.sizes.title,
    "--s1-body-font": cfg.sizes.body,
    "--s1-season-btn-font": cfg.sizes.seasonButton,
    "--s1-poster-width": cfg.sizes.posterWidth,
    "--s1-content-max": cfg.sizes.contentMaxWidth
  };
  Object.entries(css).forEach(([k,v]) => root.style.setProperty(k, v));

  const back = document.querySelector("[data-season-back]");
  if (back) {
    back.href = cfg.backUrl;
    const label = back.querySelector(".back-label");
    if (label) label.textContent = cfg.backLabel;
  }

  const menu = document.querySelector("[data-season-menu]");
  if (menu) {
    const current = location.pathname.split("/").pop() || "index.html";
    cfg.menu.forEach(item => {
      const a = document.createElement("a");
      a.href = item.url;
      a.textContent = item.name;
      if (item.url === current) a.classList.add("active");
      menu.appendChild(a);
    });
  }

  document.querySelectorAll("[data-season-number]").forEach(el => el.textContent = cfg.seasonNumber);
  const title = document.querySelector("[data-season-title]");
  if (title) title.textContent = cfg.title;
  const eyebrow = document.querySelector("[data-season-eyebrow]");
  if (eyebrow) eyebrow.textContent = cfg.eyebrow;
  const poster = document.querySelector("[data-season-poster]");
  if (poster) poster.src = cfg.poster;
  const synopsis = document.querySelector("[data-season-synopsis]");
  if (synopsis) {
    synopsis.innerHTML = "";
    cfg.synopsis.forEach(text => {
      const p = document.createElement("p");
      p.textContent = text;
      synopsis.appendChild(p);
    });
  }
})();
