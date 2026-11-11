/* =========================================================
   Raiz Odontologia — dados do site (empresa fictícia)
   Troque aqui nome, telefone, endereço e textos.
   ========================================================= */
window.RAIZ_DATA = (() => {
  const clinic = {
    name: 'Raiz Odontologia',
    short: 'RAIZ',
    whatsapp: '5511900000000',          // só números, com DDI 55 + DDD
    whatsappLabel: '(11) 90000-0000',
    phone: '(11) 4000-0000',
    email: 'ola@raizodonto.com.br',
    instagram: '@raiz.odonto',
    street: 'Rua das Raízes, 128',
    district: 'Vila Madalena',
    city: 'São Paulo — SP',
    cep: '05400-000',
    hours: [
      ['Segunda a sexta', '8h às 21h'],
      ['Sábado', '8h às 14h'],
      ['Domingo e feriados', 'Fechado'],
    ],
  };

  const treatments = [
    {
      slug: 'implantes', name: 'Implantes', obj: 'implant',
      tagline: 'Raízes novas para um sorriso firme.',
      short: 'Raízes de titânio que devolvem firmeza e confiança para mastigar e sorrir.',
      intro: 'O implante dentário substitui a raiz do dente perdido por um pino de titânio biocompatível. Sobre ele, instalamos uma coroa feita sob medida — com cor, forma e brilho iguais aos dos seus dentes naturais.',
      facts: [['Duração', '3 a 6 meses'], ['Sessões', '3 a 5'], ['Anestesia', 'Local + sedação opcional'], ['Retorno à rotina', '24 a 48h']],
      forWho: ['Quem perdeu um ou mais dentes', 'Quem usa ponte ou dentadura e quer mais firmeza', 'Quem tem dificuldade para mastigar', 'Quem quer recuperar a estética do sorriso'],
      benefits: ['Fixo, sem precisar remover', 'Preserva o osso da mandíbula', 'Não desgasta os dentes vizinhos', 'Pode durar a vida toda com cuidados'],
      steps: [
        ['Avaliação e tomografia', 'Escaneamento 3D da boca e tomografia para avaliar o osso e planejar cada milímetro.'],
        ['Planejamento digital', 'Simulamos a posição ideal do implante no computador e criamos um guia cirúrgico.'],
        ['Instalação do implante', 'Procedimento rápido e guiado, com anestesia local e sedação opcional.'],
        ['Osseointegração', 'Período em que o osso se une ao implante. Você sai com um dente provisório.'],
        ['Coroa definitiva', 'Instalação da coroa em cerâmica, ajustada à sua mordida e ao seu sorriso.'],
      ],
      faq: [
        ['Dói colocar implante?', 'O procedimento é feito com anestesia e, se você preferir, sedação consciente. No pós-operatório, o desconforto costuma ser leve e controlado com medicação simples.'],
        ['Posso fazer se tiver pouco osso?', 'Na maioria dos casos, sim. Técnicas de enxerto ósseo ou implantes especiais resolvem a falta de osso. A tomografia mostra o melhor caminho.'],
        ['Quanto tempo dura um implante?', 'Com higiene adequada e revisões periódicas, um implante pode durar décadas — muitas vezes a vida toda.'],
      ],
    },
    {
      slug: 'alinhadores', name: 'Alinhadores', obj: 'aligner',
      tagline: 'Ortodontia invisível, no seu ritmo.',
      short: 'Placas transparentes, removíveis e quase invisíveis. Ortodontia sem bráquetes.',
      intro: 'Os alinhadores são placas transparentes feitas sob medida que movimentam os dentes aos poucos. São removíveis, confortáveis e praticamente imperceptíveis — você come o que quiser e escova os dentes normalmente.',
      facts: [['Duração', '6 a 18 meses'], ['Troca de placas', 'A cada 7 a 14 dias'], ['Uso diário', '22 horas'], ['Consultas', 'A cada 6 a 8 semanas']],
      forWho: ['Dentes tortos ou apinhados', 'Espaços entre os dentes', 'Mordida cruzada, aberta ou profunda', 'Adultos e adolescentes que não querem bráquetes'],
      benefits: ['Quase invisível', 'Removível para comer e escovar', 'Sem fios nem bráquetes machucando', 'Você vê o resultado final antes de começar'],
      steps: [
        ['Escaneamento 3D', 'Sem massinha: um scanner digital cria o modelo exato dos seus dentes em minutos.'],
        ['Simulação do sorriso', 'Mostramos em 3D como seus dentes vão se movimentar até o resultado final.'],
        ['Entrega dos alinhadores', 'Você recebe as primeiras placas e aprende a colocar e a cuidar delas.'],
        ['Trocas e acompanhamento', 'Você troca as placas em casa e vem à clínica para revisões rápidas.'],
        ['Contenção', 'Ao final, uma contenção mantém o novo sorriso no lugar.'],
      ],
      faq: [
        ['Alinhador funciona tão bem quanto aparelho fixo?', 'Para a grande maioria dos casos, sim. Na avaliação, dizemos com clareza se o alinhador é a melhor opção para você.'],
        ['Atrapalha a fala?', 'Nos primeiros dias pode haver uma leve adaptação, que costuma passar rápido.'],
        ['Posso tirar para comer?', 'Sim. Você tira para comer e beber (exceto água), escova os dentes e coloca de volta.'],
      ],
    },
    {
      slug: 'canal', name: 'Tratamento de canal', obj: 'canal',
      tagline: 'Alívio da dor, preservando o seu dente.',
      short: 'Endodontia com microscópio, anestesia confortável e sessão única na maioria dos casos.',
      intro: 'O tratamento de canal remove a polpa inflamada ou infectada de dentro do dente, limpa e sela os canais da raiz. É a forma de salvar um dente que, de outro jeito, precisaria ser extraído — e hoje é muito mais rápido e confortável do que a fama sugere.',
      facts: [['Duração', '60 a 90 min'], ['Sessões', '1 a 2'], ['Anestesia', 'Local, sem dor'], ['Tecnologia', 'Microscópio operatório']],
      forWho: ['Dor de dente forte ou que pulsa', 'Sensibilidade prolongada ao quente ou ao frio', 'Inchaço na gengiva', 'Dente escurecido após trauma'],
      benefits: ['Elimina a dor e a infecção', 'Mantém o seu dente natural', 'Sessão única na maioria dos casos', 'Precisão com microscópio e localizador apical'],
      steps: [
        ['Diagnóstico', 'Exame clínico e radiografia digital para entender a causa da dor.'],
        ['Anestesia confortável', 'Anestesia aplicada com técnica suave — você não sente o procedimento.'],
        ['Limpeza dos canais', 'Com microscópio e instrumentos rotatórios, removemos todo o tecido infectado.'],
        ['Selamento', 'Os canais são preenchidos e vedados para impedir novas infecções.'],
        ['Restauração', 'O dente recebe uma restauração ou coroa para voltar a ter função e beleza.'],
      ],
      faq: [
        ['Tratamento de canal dói?', 'Não. Com a anestesia adequada, o procedimento é confortável. O que costuma doer é a infecção — e o tratamento resolve isso.'],
        ['Preciso de coroa depois?', 'Depende de quanto do dente restou. Em dentes muito destruídos, a coroa protege contra fraturas.'],
        ['É feito em uma sessão?', 'Na maioria dos casos, sim. Infecções mais extensas podem pedir uma segunda sessão.'],
      ],
    },
    {
      slug: 'lentes', name: 'Lentes de contato', obj: 'veneer',
      tagline: 'Um sorriso desenhado para o seu rosto.',
      short: 'Facetas ultrafinas desenhadas digitalmente para um sorriso natural e harmônico.',
      intro: 'As lentes de contato dentais são lâminas finíssimas de cerâmica coladas na frente dos dentes. Elas corrigem cor, forma, tamanho e pequenos desalinhamentos — com um planejamento digital que respeita o formato do seu rosto e o seu estilo.',
      facts: [['Duração', '2 a 4 semanas'], ['Sessões', '3 a 4'], ['Espessura', 'A partir de 0,2 mm'], ['Material', 'Cerâmica de alta resistência']],
      forWho: ['Dentes manchados que não clareiam', 'Dentes pequenos, desgastados ou com formato irregular', 'Pequenos espaços entre os dentes', 'Quem quer um sorriso harmônico e natural'],
      benefits: ['Resultado natural, sem efeito "dentadura"', 'Mínimo ou nenhum desgaste', 'Cerâmica não mancha', 'Você aprova o sorriso antes de fazer'],
      steps: [
        ['Fotos e escaneamento', 'Registramos seu sorriso, seu rosto e sua mordida em alta resolução.'],
        ['Desenho digital do sorriso', 'Criamos o novo sorriso no computador, em harmonia com o seu rosto.'],
        ['Ensaio na boca (mock-up)', 'Você "veste" o novo sorriso e aprova antes de qualquer etapa definitiva.'],
        ['Confecção das lentes', 'As lentes são produzidas em cerâmica por um laboratório especializado.'],
        ['Cimentação', 'As lentes são fixadas e ajustadas uma a uma, com acabamento polido.'],
      ],
      faq: [
        ['Precisa desgastar o dente?', 'Muitas vezes o desgaste é mínimo ou nenhum. Isso depende do planejamento de cada caso.'],
        ['As lentes mancham?', 'A cerâmica não mancha. Com higiene e revisões, mantém a cor por muitos anos.'],
        ['Vai ficar artificial?', 'Não é esse o objetivo. Desenhamos o sorriso para combinar com o seu rosto, com textura e translucidez naturais.'],
      ],
    },
    {
      slug: 'restauracoes', name: 'Restaurações', obj: 'restore',
      tagline: 'Reparos invisíveis, feitos para durar.',
      short: 'Resinas e cerâmicas da cor exata do seu dente, feitas para durar.',
      intro: 'As restaurações reparam dentes com cárie, fraturas ou desgastes. Usamos resinas compostas e cerâmicas na cor exata do seu dente, devolvendo forma, função e estética — sem aquele aspecto de "obturação".',
      facts: [['Duração', '30 a 60 min por dente'], ['Sessões', '1'], ['Anestesia', 'Quando necessária'], ['Material', 'Resina ou cerâmica']],
      forWho: ['Cáries pequenas ou médias', 'Dentes lascados ou fraturados', 'Troca de restaurações antigas e escuras', 'Desgastes por bruxismo ou escovação'],
      benefits: ['Cor idêntica à do dente', 'Preserva ao máximo a estrutura natural', 'Feito em uma única sessão', 'Alta durabilidade'],
      steps: [
        ['Diagnóstico', 'Exame e radiografia para identificar cáries e fraturas.'],
        ['Remoção da cárie', 'Removemos apenas o tecido comprometido, preservando o dente.'],
        ['Escolha da cor', 'Selecionamos a cor exata usando escala e luz adequada.'],
        ['Restauração em camadas', 'A resina é aplicada em camadas para imitar o dente natural.'],
        ['Polimento', 'Acabamento e polimento para brilho e lisura naturais.'],
      ],
      faq: [
        ['Restauração de resina dura quanto tempo?', 'Em média, de 5 a 10 anos — ou mais, com bons hábitos e revisões periódicas.'],
        ['Posso trocar restaurações antigas?', 'Sim. Restaurações escuras ou com infiltração podem ser substituídas por material da cor do dente.'],
        ['Quando é melhor usar cerâmica?', 'Em reparos maiores, a cerâmica (inlay ou onlay) oferece mais resistência e estética.'],
      ],
    },
    {
      slug: 'prevencao', name: 'Prevenção', obj: 'prevent',
      tagline: 'Cuidar antes é a melhor tecnologia.',
      short: 'Limpeza, check-ups e acompanhamento contínuo para a família inteira.',
      intro: 'A prevenção é a base de um sorriso saudável. Com check-ups regulares, limpeza profissional e orientação personalizada, evitamos cáries, problemas na gengiva e tratamentos maiores — para todas as idades.',
      facts: [['Duração', '40 a 60 min'], ['Frequência', 'A cada 6 meses'], ['Idade', 'Para toda a família'], ['Inclui', 'Limpeza + check-up']],
      forWho: ['Adultos e crianças', 'Quem não vai ao dentista há mais de 6 meses', 'Quem tem sangramento na gengiva', 'Quem usa aparelho, implante ou lentes'],
      benefits: ['Evita cáries e tratamentos maiores', 'Gengiva saudável e hálito fresco', 'Detecção precoce de problemas', 'Economia a longo prazo'],
      steps: [
        ['Check-up completo', 'Avaliação de dentes, gengiva, mordida e tecidos da boca.'],
        ['Limpeza profissional', 'Remoção de tártaro e placa com ultrassom, de forma suave.'],
        ['Polimento e jato', 'Remoção de manchas superficiais e polimento dos dentes.'],
        ['Flúor e selantes', 'Proteção extra quando indicada, principalmente para crianças.'],
        ['Plano de cuidados', 'Orientação personalizada de escovação, fio dental e retornos.'],
      ],
      faq: [
        ['De quanto em quanto tempo devo fazer limpeza?', 'Para a maioria das pessoas, a cada 6 meses. Alguns casos pedem retornos mais frequentes.'],
        ['A limpeza desgasta o esmalte?', 'Não. A limpeza profissional remove tártaro e placa sem danificar o esmalte.'],
        ['A partir de que idade a criança deve ir ao dentista?', 'O ideal é a primeira consulta quando nascer o primeiro dente, ou até 1 ano de idade.'],
      ],
    },
  ];

  /* ---------- Objetos de vidro (SVG) ---------- */
  const V = 'fill="none" stroke="#7dffb0" stroke-width="2.4" stroke-linecap="round" filter="url(#glow)"';

  // Dente de vidro em camadas (viewBox 0 0 200 260)
  const glassTooth = (inner = '') => `
    <g>
      <g clip-path="url(#toothClip)">
        <rect width="200" height="260" fill="url(#refract)"/>
        <rect x="-10" y="118" width="220" height="14" fill="#fff6dc" opacity=".35" filter="url(#soft)"/>
        <ellipse cx="100" cy="168" rx="44" ry="70" fill="url(#caustic)"/>
        <use href="#toothPath" fill="none" stroke="#0b3b22" stroke-opacity=".28" stroke-width="16" filter="url(#soft)"/>
        <use href="#toothPath" fill="none" stroke="#ffffff" stroke-opacity=".5" stroke-width="5" filter="url(#soft)" transform="translate(-3,-3)"/>
      </g>
      <use href="#toothPath" fill="url(#glassFill)"/>
      ${inner}
      <path d="M56,32 C40,36 32,54 34,76 C36,96 46,110 52,126" fill="none" stroke="#fff" stroke-opacity=".75" stroke-width="4" stroke-linecap="round" filter="url(#soft)"/>
      <path d="M152,40 C163,54 165,74 160,96" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M66,206 C68,222 72,234 76,240" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2" stroke-linecap="round"/>
      <ellipse cx="78" cy="44" rx="15" ry="5.5" fill="#fff" opacity=".8" transform="rotate(-18 78 44)" filter="url(#soft)"/>
      <circle cx="134" cy="38" r="3" fill="#fff" opacity=".8"/>
      <use href="#toothPath" fill="none" stroke="url(#glassEdge)" stroke-width="1.6"/>
    </g>`;

  const toothVeins = `
    <path d="M100,46 C96,70 90,96 86,124 C82,154 76,190 72,236"/>
    <path d="M100,46 C104,70 110,96 114,124 C118,154 124,190 128,236"/>
    <path d="M86,124 C76,112 66,100 56,86 C50,76 48,64 52,54"/>
    <path d="M114,124 C124,112 134,100 144,86 C150,76 152,64 148,54"/>
    <path d="M100,46 C90,40 80,38 70,42"/>
    <path d="M100,46 C110,40 120,38 130,42"/>
    <path d="M78,176 C70,186 66,196 64,210"/>
    <path d="M122,176 C130,186 134,196 136,210"/>
    <path d="M92,92 C98,100 102,100 108,92"/>`;

  // Dente principal (hero), com classes para animação
  const heroTooth = () => `
    <svg class="tooth-svg" viewBox="0 0 200 260" role="img" aria-label="Dente de vidro com raízes luminosas">
      ${glassTooth(`
        <g class="veins" fill="none" stroke="#7dffb0" stroke-width="2" stroke-linecap="round" filter="url(#glow)">${toothVeins}</g>
        <g class="pulse" fill="none" stroke="#f0fff6" stroke-width="3" stroke-linecap="round" filter="url(#glow)">
          <path d="M100,46 C96,70 90,96 86,124 C82,154 76,190 72,236"/>
          <path d="M100,46 C104,70 110,96 114,124 C118,154 124,190 128,236" style="animation-delay:4.6s"/>
        </g>`)}
    </svg>`;

  const objects = {
    implant: `<svg viewBox="0 0 200 300">
      <g transform="translate(30,0) scale(.7)">${glassTooth(`<path d="M100,60 L100,230" ${V} opacity=".5"/>`)}</g>
      <rect x="88" y="175" width="24" height="16" rx="3" fill="url(#metal)"/>
      <path d="M84,192 L116,192 L110,286 Q100,298 90,286 Z" fill="url(#metal)"/>
      <g stroke="#4c5a52" stroke-width="2.4" opacity=".75">${Array.from({ length: 9 }, (_, i) => `<line x1="${84 + i * .6}" y1="${200 + i * 10}" x2="${116 - i * .6}" y2="${194 + i * 10}"/>`).join('')}</g>
      <path d="M92,194 L94,284" stroke="#fff" stroke-opacity=".7" stroke-width="2"/>
      <path d="M100,180 L100,286" ${V} opacity=".85"/>
      <ellipse cx="100" cy="292" rx="40" ry="8" fill="#7dffb0" opacity=".35" filter="url(#glow)"/>
    </svg>`,
    aligner: `<svg viewBox="0 0 300 200">
      <path d="M30,60 C30,150 90,180 150,180 C210,180 270,150 270,60 L240,60 C240,130 200,150 150,150 C100,150 60,130 60,60 Z" fill="url(#glassFill)" stroke="url(#glassEdge)" stroke-width="2"/>
      <path d="M30,60 C30,150 90,180 150,180 C210,180 270,150 270,60" fill="none" stroke="#0b3b22" stroke-opacity=".18" stroke-width="8" filter="url(#soft)"/>
      <g fill="url(#glassFill)" stroke="#fff" stroke-opacity=".65" stroke-width="1.5">${[[45, 70], [50, 100], [64, 126], [86, 146], [114, 160], [150, 164], [186, 160], [214, 146], [236, 126], [250, 100], [255, 70]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="13"/>`).join('')}</g>
      <path d="M45,70 C48,120 90,160 150,164 C210,160 252,120 255,70" ${V} opacity=".85"/>
      <ellipse cx="110" cy="80" rx="40" ry="6" fill="#fff" opacity=".5" filter="url(#soft)"/>
      <ellipse cx="150" cy="196" rx="90" ry="8" fill="#7dffb0" opacity=".25" filter="url(#glow)"/>
    </svg>`,
    canal: `<svg viewBox="0 0 200 260">${glassTooth(`
      <path d="M70,70 Q100,50 130,70 Q126,110 114,130 L100,176 L86,130 Q74,110 70,70Z" fill="#eafff2" opacity=".22"/>
      <path d="M100,60 C96,90 88,130 80,170 C76,200 72,220 72,236" ${V}/><path d="M100,60 C104,90 112,130 120,170 C124,200 128,220 128,236" ${V}/>
      <path d="M86,110 C76,100 66,94 58,82" ${V}/><path d="M114,110 C124,100 134,94 142,82" ${V}/>`)}</svg>`,
    veneer: `<svg viewBox="0 0 300 220">
      ${[[40, 40, .82], [95, 20, 1], [155, 20, 1], [215, 40, .82]].map(([x, y, s]) => `<g transform="translate(${x},${y}) scale(${s})">
        <path d="M8,10 Q25,-2 42,10 L46,120 Q25,150 4,120 Z" fill="url(#glassFill)" stroke="url(#glassEdge)" stroke-width="2"/>
        <path d="M8,10 Q25,-2 42,10 L46,120 Q25,150 4,120 Z" fill="none" stroke="#0b3b22" stroke-opacity=".2" stroke-width="6" filter="url(#soft)"/>
        <path d="M14,20 Q16,70 12,110" stroke="#fff" stroke-opacity=".7" stroke-width="3" fill="none" filter="url(#soft)"/>
        <path d="M25,130 L25,40" ${V} opacity=".75"/></g>`).join('')}
      <ellipse cx="150" cy="200" rx="110" ry="8" fill="#7dffb0" opacity=".22" filter="url(#glow)"/>
    </svg>`,
    restore: `<svg viewBox="0 0 200 260">${glassTooth(`
      <path d="M74,46 Q100,62 126,46 Q132,80 112,92 Q100,98 88,92 Q68,80 74,46Z" fill="#7dffb0" opacity=".55" filter="url(#glow)"/>
      <path d="M100,96 C96,140 84,190 74,236" ${V} opacity=".6"/><path d="M100,96 C104,140 116,190 126,236" ${V} opacity=".6"/>`)}</svg>`,
    prevent: `<svg viewBox="0 0 240 260"><g transform="translate(20,0)">${glassTooth(`<path d="M100,50 C96,90 86,150 74,236 M100,50 C104,90 114,150 126,236" ${V} opacity=".7"/>`)}</g>
      ${[[20, 40, 10], [214, 70, 7], [200, 20, 5], [36, 120, 5], [226, 150, 8]].map(([x, y, r]) => `<path d="M${x},${y - r * 2} Q${x},${y} ${x + r * 2},${y} Q${x},${y} ${x},${y + r * 2} Q${x},${y} ${x - r * 2},${y} Q${x},${y} ${x},${y - r * 2}Z" fill="#eafff2" filter="url(#glow)"/>`).join('')}
    </svg>`,
  };

  // Opções do agendamento (tratamentos + extras)
  const bookingOptions = [
    { slug: 'avaliacao', name: 'Avaliação / primeira consulta', desc: 'Check-up completo e plano de tratamento.', obj: 'prevent' },
    ...treatments.map(t => ({ slug: t.slug, name: t.name, desc: t.short, obj: t.obj })),
    { slug: 'urgencia', name: 'Urgência / dor', desc: 'Atendimento prioritário para dor ou trauma.', obj: 'canal' },
  ];

  // Prédio da clínica (ilustração)
  const win = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#bWin)"/>
    <rect x="${x}" y="${y}" width="${w}" height="${h * .45}" fill="url(#bSkyRef)" opacity=".7"/>
    <path d="M${x + w * .15},${y + h} L${x + w * .55},${y}" stroke="#fff" stroke-opacity=".28" stroke-width="${w * .12}"/>`;
  const building = `<svg class="building" viewBox="0 0 600 340" aria-hidden="true">
    <defs>
      <linearGradient id="bWall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fdfdfa"/><stop offset="1" stop-color="#dfe1d8"/></linearGradient>
      <linearGradient id="bWallSide" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#e9eae3"/><stop offset="1" stop-color="#c9ccc2"/></linearGradient>
      <linearGradient id="bWin" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#a9cbe0"/><stop offset=".5" stop-color="#5f8aa8"/><stop offset="1" stop-color="#2f526b"/></linearGradient>
      <linearGradient id="bSkyRef" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6e2b5"/><stop offset="1" stop-color="#f6e2b5" stop-opacity="0"/></linearGradient>
      <linearGradient id="bWood" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#a87a4f"/><stop offset="1" stop-color="#7a5434"/></linearGradient>
    </defs>
    <ellipse cx="300" cy="322" rx="280" ry="16" fill="#1f3d12" opacity=".45"/>
    <!-- bloco inferior -->
    <rect x="90" y="190" width="400" height="130" fill="url(#bWall)"/>
    <rect x="490" y="196" width="22" height="124" fill="url(#bWallSide)"/>
    ${win(108, 210, 130, 96)}
    <rect x="252" y="210" width="62" height="110" fill="#2b4a5e"/>
    <rect x="256" y="214" width="26" height="106" fill="url(#bWin)" opacity=".9"/><rect x="284" y="214" width="26" height="106" fill="url(#bWin)" opacity=".9"/>
    ${win(328, 210, 146, 96)}
    <g stroke="#fff" stroke-opacity=".7" stroke-width="2"><line x1="173" y1="210" x2="173" y2="306"/><line x1="401" y1="210" x2="401" y2="306"/></g>
    <rect x="248" y="194" width="70" height="12" rx="2" fill="#7dffb0"/><rect x="248" y="194" width="70" height="12" rx="2" fill="#7dffb0" filter="url(#glow)" opacity=".7"/>
    <!-- ripado de madeira -->
    <g fill="url(#bWood)">${Array.from({ length: 9 }, (_, i) => `<rect x="${92 + i * 6}" y="306" width="3" height="14"/>`).join('')}</g>
    <!-- bloco superior em balanço -->
    <rect x="150" y="112" width="400" height="78" fill="url(#bWall)"/>
    <rect x="550" y="118" width="20" height="72" fill="url(#bWallSide)"/>
    <rect x="140" y="104" width="432" height="10" fill="#f7f7f2"/>
    <rect x="150" y="190" width="400" height="6" fill="#000" opacity=".12"/>
    ${win(170, 126, 364, 50)}
    <g stroke="#fff" stroke-opacity=".7" stroke-width="2"><line x1="261" y1="126" x2="261" y2="176"/><line x1="352" y1="126" x2="352" y2="176"/><line x1="443" y1="126" x2="443" y2="176"/></g>
    <!-- jardim na cobertura -->
    <g fill="#4d7f25"><ellipse cx="200" cy="102" rx="42" ry="12"/><ellipse cx="292" cy="100" rx="32" ry="10"/><ellipse cx="400" cy="101" rx="52" ry="13"/><ellipse cx="512" cy="102" rx="36" ry="10"/></g>
    <g fill="#79b043"><ellipse cx="208" cy="96" rx="22" ry="8"/><ellipse cx="410" cy="94" rx="26" ry="8"/><ellipse cx="520" cy="97" rx="16" ry="6"/></g>
    <g fill="#a4d067" opacity=".8"><circle cx="196" cy="92" r="4"/><circle cx="404" cy="90" r="5"/><circle cx="288" cy="95" r="3"/></g>
    <g stroke="#4d7f25" stroke-width="3" stroke-linecap="round" fill="none"><path d="M528,112 q5,30 -2,62"/><path d="M542,112 q-4,22 2,46"/><path d="M160,112 q6,26 0,50"/><path d="M172,112 q-3,16 1,30"/></g>
    <!-- pessoas (silhuetas pequenas) -->
    <g fill="#ffffff" opacity=".9"><rect x="276" y="282" width="7" height="22" rx="3"/><circle cx="279.5" cy="277" r="4"/></g>
    <g fill="#244a2e" opacity=".75"><rect x="230" y="296" width="7" height="22" rx="3"/><circle cx="233.5" cy="291" r="4"/></g>
    <!-- árvores -->
    <g><rect x="44" y="210" width="6" height="110" fill="#5a4a32"/><circle cx="47" cy="198" r="40" fill="#3f7a24"/><circle cx="30" cy="214" r="26" fill="#5a9a33"/><circle cx="62" cy="186" r="20" fill="#6aaa3e"/></g>
    <g><rect x="562" y="236" width="6" height="84" fill="#5a4a32"/><circle cx="565" cy="226" r="32" fill="#3f7a24"/><circle cx="578" cy="238" r="18" fill="#5a9a33"/></g>
    <!-- arbustos -->
    <g fill="#355f1f"><ellipse cx="110" cy="320" rx="30" ry="10"/><ellipse cx="460" cy="320" rx="40" ry="11"/></g>
  </svg>`;

  return { clinic, treatments, objects, heroTooth, glassTooth, bookingOptions, building };
})();
