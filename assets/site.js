/* =========================================================
   Raiz Odontologia — scripts compartilhados
   ========================================================= */
(() => {
  const D = window.RAIZ_DATA;
  const C = D.clinic;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const page = document.body.dataset.page || '';

  const waLink = text => `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(text)}`;
  window.RAIZ = { waLink, reduce };

  /* ---------- SVG defs compartilhados ---------- */
  const defs = document.createElement('div');
  defs.innerHTML = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <path id="toothPath" d="M60,20 C38,20 24,42 27,72 C29,96 40,112 45,132 C51,162 53,202 63,240 C67,254 79,253 81,238 C85,210 88,186 100,176 C112,186 115,210 119,238 C121,253 133,254 137,240 C147,202 149,162 155,132 C160,112 171,96 173,72 C176,42 162,20 140,20 C124,20 114,31 100,31 C86,31 76,20 60,20 Z"/>
    <clipPath id="toothClip"><use href="#toothPath"/></clipPath>
    <linearGradient id="glassFill" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity=".5"/>
      <stop offset=".45" stop-color="#e8fff1" stop-opacity=".1"/>
      <stop offset="1" stop-color="#d9fbe6" stop-opacity=".28"/>
    </linearGradient>
    <linearGradient id="refract" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3f6b22" stop-opacity=".45"/>
      <stop offset=".3" stop-color="#b9b25a" stop-opacity=".35"/>
      <stop offset=".48" stop-color="#ffe9b8" stop-opacity=".45"/>
      <stop offset=".7" stop-color="#bcd6ea" stop-opacity=".35"/>
      <stop offset="1" stop-color="#6f9fcf" stop-opacity=".4"/>
    </linearGradient>
    <radialGradient id="caustic" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="#d8ffe8" stop-opacity=".55"/>
      <stop offset="1" stop-color="#d8ffe8" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="glassEdge" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity=".95"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity=".35"/>
    </linearGradient>
    <linearGradient id="metal" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#8c9992"/><stop offset=".35" stop-color="#f4f8f6"/><stop offset=".6" stop-color="#b9c5be"/><stop offset="1" stop-color="#66736c"/>
    </linearGradient>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="b1"/>
      <feGaussianBlur stdDeviation="7" result="b2" in="SourceGraphic"/>
      <feMerge><feMergeNode in="b2"/><feMergeNode in="b1"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2"/></filter>
  </defs></svg>`;
  document.body.prepend(defs.firstElementChild);

  /* ---------- Granulação de filme ---------- */
  const grain = document.createElement('div');
  grain.className = 'grain'; grain.setAttribute('aria-hidden', 'true');
  document.body.append(grain);

  /* ---------- Menu ---------- */
  const logo = `<span class="logo-mark"><svg viewBox="0 0 200 260"><use href="#toothPath" fill="#2fd06a"/></svg></span>${C.short}`;
  const links = [
    ['index.html', 'Início', 'home'],
    ['tratamentos.html', 'Tratamentos', 'tratamentos'],
    ['clinica.html', 'A Clínica', 'clinica'],
    ['clinica.html#contato', 'Contato', 'contato'],
  ];
  const nav = document.createElement('header');
  nav.className = 'nav';
  nav.innerHTML = `
    <a href="index.html" class="logo" aria-label="${C.name} — início">${logo}</a>
    <nav class="nav-links" aria-label="Principal">
      ${links.map(([h, l, k]) => `<a href="${h}" class="${k === page ? 'active' : ''}">${l}</a>`).join('')}
    </nav>
    <div class="nav-right">
      <a href="agendar.html" class="btn btn-green">Agendar consulta <span class="arr">→</span></a>
      <button class="menu-btn" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span></button>
    </div>`;
  document.body.prepend(nav);

  const drawer = document.createElement('div');
  drawer.className = 'drawer';
  drawer.innerHTML = `<nav>${links.map(([h, l]) => `<a href="${h}">${l}</a>`).join('')}<a href="agendar.html" class="btn btn-green">Agendar consulta →</a></nav>
    <div class="drawer-foot">${C.whatsappLabel}<br>${C.street} · ${C.district}</div>`;
  document.body.append(drawer);
  const menuBtn = nav.querySelector('.menu-btn');
  const toggleMenu = open => {
    document.body.classList.toggle('menu-open', open);
    menuBtn.setAttribute('aria-expanded', open);
  };
  menuBtn.addEventListener('click', () => toggleMenu(!document.body.classList.contains('menu-open')));
  drawer.addEventListener('click', e => { if (e.target.closest('a')) toggleMenu(false); });

  addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 40), { passive: true });

  /* ---------- Rodapé ---------- */
  const footer = document.createElement('footer');
  footer.innerHTML = `
    <div class="wrap">
      <div class="foot">
        <div>
          <div class="logo">${logo}</div>
          <p class="foot-about">Odontologia contemporânea com raízes no cuidado humano.</p>
          <a class="btn btn-green" href="agendar.html" style="margin-top:20px">Agendar consulta <span class="arr">→</span></a>
        </div>
        <div><h6>Tratamentos</h6><ul>${D.treatments.map(t => `<li><a href="${t.slug}.html">${t.name}</a></li>`).join('')}</ul></div>
        <div><h6>Clínica</h6><ul><li><a href="clinica.html#sobre">Sobre nós</a></li><li><a href="clinica.html#espaco">O espaço</a></li><li><a href="clinica.html#tecnologia">Tecnologia</a></li><li><a href="clinica.html#contato">Contato</a></li><li><a href="agendar.html">Agendamento</a></li></ul></div>
        <div><h6>Contato</h6><ul>
          <li><a href="${waLink('Olá! Gostaria de mais informações.')}" target="_blank" rel="noopener">WhatsApp ${C.whatsappLabel}</a></li>
          <li>${C.phone}</li><li>${C.email}</li>
          <li>${C.street}<br>${C.district} · ${C.city}</li>
          <li>${C.hours.slice(0, 2).map(h => `${h[0]}: ${h[1]}`).join('<br>')}</li>
        </ul></div>
      </div>
      <div class="legal"><span>© 2026 ${C.name} — empresa fictícia para demonstração.</span><span>Responsável técnico: CRO-SP 00000</span></div>
    </div>`;
  document.body.append(footer);

  /* ---------- Botão flutuante do WhatsApp ---------- */
  if (page !== 'agendar') {
    const fab = document.createElement('a');
    fab.className = 'wa-fab';
    fab.href = waLink(`Olá, ${C.name}! Gostaria de mais informações.`);
    fab.target = '_blank'; fab.rel = 'noopener';
    fab.setAttribute('aria-label', 'Falar no WhatsApp');
    fab.innerHTML = `<svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1.1 2.7.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2l-.5-.3z"/></svg><span>Fale conosco</span>`;
    document.body.append(fab);
  }

  /* ---------- Cena (céu + campo) ---------- */
  const rand = (a, b) => a + Math.random() * (b - a);
  const treelinePath = (seed, base, amp, step) => {
    let d = `M0,60 L0,${base}`;
    for (let x = 0; x <= 1000; x += step) {
      const y = base - (Math.sin(x * .013 + seed) * .5 + Math.sin(x * .047 + seed * 2) * .3 + Math.random() * .4) * amp;
      d += ` Q${x - step / 2},${y - rand(0, amp * .5)} ${x},${y}`;
    }
    return d + ' L1000,60 Z';
  };
  const buildScene = host => {
    const s = document.createElement('div');
    s.className = 'scene';
    s.setAttribute('aria-hidden', 'true');
    const clouds = Array.from({ length: +(host.dataset.clouds || 5) }, (_, i) => {
      const w = rand(18, 44);
      return `<div class="cloud" style="top:${rand(4, 32)}%;width:${w}vw;height:${w * .26}vw;animation-duration:${rand(120, 220)}s;animation-delay:-${rand(0, 200)}s;opacity:${rand(.55, .95)}"></div>`;
    }).join('');
    s.innerHTML = `
      <div class="sky"></div>
      <div class="sun"></div>
      <div class="rays"></div>
      ${clouds}
      <svg class="treeline far" viewBox="0 0 1000 60" preserveAspectRatio="none"><path d="${treelinePath(rand(0, 9), 40, 22, 20)}"/></svg>
      <svg class="treeline near" viewBox="0 0 1000 60" preserveAspectRatio="none"><path d="${treelinePath(rand(0, 9), 46, 16, 14)}"/></svg>
      <div class="haze"></div>
      <div class="field-far"></div>
      <canvas class="grass"></canvas>
      <div class="scene-vignette"></div>`;
    host.prepend(s);
    return s.querySelector('canvas.grass');
  };

  /* ---------- Grama procedural ---------- */
  class Meadow {
    constructor(canvas, opts = {}) {
      this.c = canvas; this.ctx = canvas.getContext('2d');
      this.o = Object.assign({ density: .9, tall: 1, flies: 18, warm: 1, sunX: .78 }, opts);
      this.t = Math.random() * 100; this.mx = -9999; this.my = 0; this.visible = true;
      this.resize();
      let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => this.resize(), 120); });
      const host = canvas.closest('section,article,a,.mini') || canvas.parentElement;
      host.addEventListener('pointermove', e => { const r = canvas.getBoundingClientRect(); this.mx = e.clientX - r.left; this.my = e.clientY - r.top; });
      host.addEventListener('pointerleave', () => { this.mx = -9999; });
      new IntersectionObserver(es => { this.visible = es[0].isIntersecting; }).observe(canvas);
    }
    resize() {
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      const r = this.c.getBoundingClientRect();
      if (r.width < 2) return;
      this.w = r.width; this.h = r.height;
      this.c.width = this.w * dpr; this.c.height = this.h * dpr;
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.floor(this.w * this.o.density);
      const scale = this.h / 400 + .35;
      this.blades = [];
      for (let i = 0; i < n; i++) {
        const depth = Math.pow(Math.random(), .8);
        const y = this.h * (0.3 + depth * 0.74);
        const hgt = (10 + depth * depth * 120 + Math.random() * 34) * this.o.tall * scale;
        const kind = Math.random();
        // paleta: verdes frescos, verdes secos e palha dourada
        let r, g, b;
        if (kind < .55) { r = 50 + depth * 20; g = 95 + depth * 40; b = 30; }
        else if (kind < .85) { r = 110 + (1 - depth) * 60; g = 140 + (1 - depth) * 30; b = 45; }
        else { r = 190; g = 170; b = 80; }
        const haze = (1 - depth) * .55;           // perspectiva atmosférica
        r += (230 - r) * haze * .6; g += (225 - g) * haze * .5; b += (190 - b) * haze * .6;
        this.blades.push({
          x: Math.random() * this.w, y, h: hgt, w: .7 + depth * 3.4,
          ph: Math.random() * 6.28, sp: .6 + Math.random() * .8, d: depth,
          col: `rgb(${r | 0},${g | 0},${b | 0})`,
          lean: (Math.random() - .5) * hgt * .25,
          seed: kind > .9 && depth > .35,
          flower: Math.random() < .015 && depth > .5,
        });
      }
      this.blades.sort((a, b) => a.d - b.d);
      this.flies = Array.from({ length: this.o.flies }, () => ({
        x: Math.random() * this.w, y: this.h * (.15 + Math.random() * .7), r: .8 + Math.random() * 2,
        vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .2, ph: Math.random() * 6.28,
      }));
      // gradientes reaproveitados
      const ctx = this.ctx;
      this.shade = ctx.createLinearGradient(0, 0, 0, this.h);
      this.shade.addColorStop(0, 'rgba(0,0,0,0)'); this.shade.addColorStop(.55, 'rgba(10,30,10,.05)'); this.shade.addColorStop(1, 'rgba(6,22,8,.6)');
      this.sun = ctx.createRadialGradient(this.w * this.o.sunX, 0, 0, this.w * this.o.sunX, 0, this.w * .7);
      this.sun.addColorStop(0, 'rgba(255,214,140,.45)'); this.sun.addColorStop(1, 'rgba(255,214,140,0)');
    }
    draw(dt) {
      if (!this.visible || !this.blades) return;
      const { ctx, w, h } = this; this.t += dt;
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, w, h);
      const gust = Math.sin(this.t * .35) * .5 + Math.sin(this.t * .13) * .5;
      for (const b of this.blades) {
        let sway = Math.sin(this.t * b.sp + b.x * .012 + b.ph) * (2 + b.h * .08) + gust * b.h * .1 + b.lean;
        if (this.mx > -999) {
          const dx = b.x - this.mx, dist = Math.abs(dx);
          if (dist < 150 && this.my < b.y + 30) sway += Math.sign(dx) * (1 - dist / 150) * b.h * .5;
        }
        const tx = b.x + sway, ty = b.y - b.h + Math.abs(sway) * .15;
        ctx.beginPath();
        ctx.moveTo(b.x - b.w, b.y);
        ctx.quadraticCurveTo(b.x + sway * .3 - b.w * .4, b.y - b.h * .55, tx, ty);
        ctx.quadraticCurveTo(b.x + sway * .3 + b.w * .4, b.y - b.h * .55, b.x + b.w, b.y);
        ctx.fillStyle = b.col; ctx.fill();
        if (b.seed) {
          ctx.save(); ctx.translate(tx, ty); ctx.rotate(sway * .01);
          ctx.fillStyle = 'rgba(232,206,130,.9)';
          ctx.beginPath(); ctx.ellipse(0, -b.w * 2, b.w * .9, b.w * 3.2, 0, 0, 6.28); ctx.fill();
          ctx.restore();
        }
        if (b.flower) {
          ctx.fillStyle = 'rgba(255,255,240,.95)';
          ctx.beginPath(); ctx.arc(tx, ty, b.w * 1.3, 0, 6.28); ctx.fill();
          ctx.fillStyle = '#f2c94c'; ctx.beginPath(); ctx.arc(tx, ty, b.w * .5, 0, 6.28); ctx.fill();
        }
      }
      // luz e sombra sobre a grama (uma única passada, barata)
      ctx.globalCompositeOperation = 'source-atop';
      ctx.fillStyle = this.shade; ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = this.sun; ctx.fillRect(0, 0, w, h);
      // vaga-lumes
      ctx.globalCompositeOperation = 'lighter';
      for (const f of this.flies) {
        f.x += f.vx + Math.sin(this.t + f.ph) * .25; f.y += f.vy + Math.cos(this.t * .8 + f.ph) * .2;
        if (f.x < 0) f.x = w; if (f.x > w) f.x = 0; if (f.y < h * .1) f.y = h * .9; if (f.y > h) f.y = h * .2;
        const a = .3 + Math.sin(this.t * 2 + f.ph) * .3;
        if (a <= 0) continue;
        const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r * 6);
        g.addColorStop(0, `rgba(190,255,210,${a})`); g.addColorStop(1, 'rgba(125,255,176,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(f.x, f.y, f.r * 6, 0, 6.28); ctx.fill();
      }
      ctx.globalCompositeOperation = 'source-over';
    }
  }

  const meadows = [];
  const addMeadow = (canvas, opts) => { const m = new Meadow(canvas, opts); meadows.push(m); return m; };
  document.querySelectorAll('[data-scene]').forEach(host => {
    const cv = buildScene(host);
    addMeadow(cv, { density: +(host.dataset.density || 1), tall: +(host.dataset.tall || 1), flies: +(host.dataset.flies || 20) });
  });
  window.RAIZ.addMeadow = addMeadow;

  let last = performance.now();
  const loop = now => {
    const dt = Math.min(.05, (now - last) / 1000); last = now;
    for (const m of meadows) m.draw(reduce ? 0 : dt);
    if (!reduce) requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);

  /* ---------- Revelar ao rolar + contadores ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in'); io.unobserve(e.target);
    e.target.querySelectorAll('[data-count]').forEach(b => {
      const end = +b.dataset.count, suf = b.dataset.suffix || '', pre = b.dataset.prefix || '', t0 = performance.now(), dur = 1800;
      const step = now => {
        const k = Math.min(1, (now - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - k, 4)));
        b.textContent = pre + v.toLocaleString('pt-BR') + suf; if (k < 1) requestAnimationFrame(step);
      };
      reduce ? (b.textContent = pre + end.toLocaleString('pt-BR') + suf) : requestAnimationFrame(step);
    });
  }), { threshold: .15 });
  window.RAIZ.observe = el => io.observe(el);
  const observeAll = () => document.querySelectorAll('.rv:not(.in)').forEach(el => io.observe(el));
  window.RAIZ.observeAll = observeAll;

  /* ---------- Página de tratamento ---------- */
  window.RAIZ.renderTreatment = slug => {
    const i = D.treatments.findIndex(t => t.slug === slug);
    const t = D.treatments[i];
    const root = document.getElementById('treatPage');
    if (!t || !root) return;
    document.title = `${t.name} — ${C.name}`;
    const others = D.treatments.filter(x => x.slug !== slug);
    root.innerHTML = `
      <section class="page-hero" data-scene data-density=".9" data-flies="18">
        <div class="wrap page-hero-grid">
          <div class="page-hero-text">
            <a class="crumb" href="tratamentos.html">← Todos os tratamentos</a>
            <span class="eyebrow">Tratamento 0${i + 1} / 0${D.treatments.length}</span>
            <h1 class="reveal-lines"><span class="line"><span>${t.name}</span></span></h1>
            <p class="lead">${t.tagline}</p>
            <div class="hero-ctas">
              <a href="agendar.html?p=${t.slug}" class="btn btn-green">Agendar ${t.name.toLowerCase()} <span class="arr">→</span></a>
              <a href="${waLink(`Olá, ${C.name}! Gostaria de saber mais sobre ${t.name}.`)}" target="_blank" rel="noopener" class="btn btn-glass">Tirar dúvidas no WhatsApp</a>
            </div>
          </div>
          <div class="page-hero-obj"><div class="obj-glow"></div><div class="obj-float"><img class="premium-treatment-hero" src="assets/images/${t.slug}.png" alt="Ilustração realista de ${t.name}" decoding="async"></div><div class="obj-shadow"></div></div>
        </div>
      </section>

      <section class="facts-band">
        <div class="wrap facts">
          ${t.facts.map(([k, v], j) => `<div class="fact glass-dark rv" style="transition-delay:${j * .08}s"><span>${k}</span><b>${v}</b></div>`).join('')}
        </div>
      </section>

      <section class="section">
        <div class="wrap split">
          <div class="rv">
            <span class="kicker">O que é</span>
            <h2 class="h2">Entenda o tratamento de <span class="serif">${t.name.toLowerCase()}.</span></h2>
          </div>
          <p class="big-p rv">${t.intro}</p>
        </div>
        <div class="wrap two-lists">
          <div class="list-card rv"><h3>Para quem é indicado</h3><ul>${t.forWho.map(x => `<li>${x}</li>`).join('')}</ul></div>
          <div class="list-card green rv"><h3>Benefícios</h3><ul>${t.benefits.map(x => `<li>${x}</li>`).join('')}</ul></div>
        </div>
      </section>

      <section class="section steps-sec">
        <div class="wrap">
          <div class="sec-head rv"><div><span class="kicker" style="color:var(--glow)">Passo a passo</span><h2 class="h2">Como funciona, <span class="serif">etapa por etapa.</span></h2></div>
          <p>Transparência do primeiro exame ao resultado final. Você sabe exatamente o que vai acontecer em cada consulta.</p></div>
          <ol class="steps">
            ${t.steps.map(([h, p], j) => `<li class="step rv" style="transition-delay:${j * .08}s"><span class="step-n">${String(j + 1).padStart(2, '0')}</span><div><h4>${h}</h4><p>${p}</p></div></li>`).join('')}
          </ol>
        </div>
      </section>

      <section class="section">
        <div class="wrap faq-wrap">
          <div class="rv"><span class="kicker">Dúvidas frequentes</span><h2 class="h2">Perguntas sobre <span class="serif">${t.name.toLowerCase()}.</span></h2>
            <p class="muted" style="margin-top:16px;max-width:360px">Não encontrou sua dúvida? Fale com a gente pelo WhatsApp.</p>
            <a class="btn btn-outline" style="margin-top:20px" target="_blank" rel="noopener" href="${waLink(`Olá! Tenho uma dúvida sobre ${t.name}.`)}">Perguntar no WhatsApp <span class="arr">→</span></a></div>
          <div class="faq rv">${t.faq.map(([q, a], j) => `<details ${j === 0 ? 'open' : ''}><summary>${q}<span class="plus"></span></summary><p>${a}</p></details>`).join('')}</div>
        </div>
      </section>

      <section class="section others">
        <div class="wrap">
          <div class="sec-head rv"><div><span class="kicker">Outros tratamentos</span><h2 class="h2">Continue <span class="serif">explorando.</span></h2></div></div>
          <div class="mini-grid">${others.map(o => miniCard(o)).join('')}</div>
        </div>
      </section>
      ${ctaBand(`agendar.html?p=${t.slug}`, `Pronto para começar seu tratamento de ${t.name.toLowerCase()}?`)}`;
    initDynamic(root);
  };

  const miniCard = t => `
    <a class="mini rv" href="${t.slug}.html">
      <div class="mini-scene"><div class="mini-sky"></div><div class="mini-field"></div><canvas class="mini-grass"></canvas><div class="mini-obj"><img class="treatment-image" src="assets/images/${t.slug}.png" alt="Ilustração de ${t.name}" loading="lazy" decoding="async"></div></div>
      <div class="mini-info"><h4>${t.name}</h4><p>${t.short}</p><span class="mini-go">Ver tratamento →</span></div>
    </a>`;
  const ctaBand = (href, title) => `
    <section class="cta" data-scene data-density=".8" data-flies="14">
      <div class="wrap">
        <div class="cta-box glass rv">
          <span class="kicker" style="color:#eafff1">Agendamento online</span>
          <h2>${title || 'Plante hoje o sorriso de <span class="serif">amanhã.</span>'}</h2>
          <p>Escolha o procedimento, a data e o horário. A confirmação chega direto no seu WhatsApp.</p>
          <div class="hero-ctas" style="justify-content:center">
            <a href="${href || 'agendar.html'}" class="btn btn-green">Agendar agora <span class="arr">→</span></a>
            <a href="clinica.html#contato" class="btn btn-glass">Ver contatos</a>
          </div>
        </div>
      </div>
    </section>`;
  window.RAIZ.miniCard = miniCard;
  window.RAIZ.ctaBand = ctaBand;

  const initDynamic = root => {
    root.querySelectorAll('[data-scene]').forEach(host => {
      if (host.querySelector('.scene')) return;
      const cv = buildScene(host);
      addMeadow(cv, { density: +(host.dataset.density || 1), tall: +(host.dataset.tall || 1), flies: +(host.dataset.flies || 20) });
    });
    root.querySelectorAll('canvas.mini-grass,canvas.c-grass').forEach(cv => addMeadow(cv, { density: .6, tall: .7, flies: 5 }));
    observeAll();
  };
  window.RAIZ.initDynamic = initDynamic;

  /* ---------- Abertura (somente na home) ---------- */
  const start = () => {
    observeAll();
    const intro = document.getElementById('intro');
    let seen = false;
    try { seen = sessionStorage.getItem('raiz-intro') === '1'; } catch (e) {}
    if (!intro || reduce || seen) {
      if (intro) intro.classList.add('gone');
      document.body.classList.remove('locked');
      requestAnimationFrame(() => document.body.classList.add('loaded'));
      return;
    }
    const pct = document.getElementById('introPct');
    let done = false;
    const finish = () => {
      if (done) return; done = true;
      try { sessionStorage.setItem('raiz-intro', '1'); } catch (e) {}
      intro.classList.add('out');
      document.body.classList.add('loaded');
      document.body.classList.remove('locked');
      setTimeout(() => intro.classList.add('gone'), 1500);
    };
    document.getElementById('skip').addEventListener('click', finish);
    const t0 = performance.now(), DUR = 2600;
    const count = now => {
      const k = Math.min(1, (now - t0) / DUR);
      pct.textContent = String(Math.round(100 * (1 - Math.pow(1 - k, 3)))).padStart(3, '0');
      if (k < 1 && !done) requestAnimationFrame(count); else setTimeout(finish, 250);
    };
    requestAnimationFrame(count);
  };
  window.RAIZ.start = start;
})();
