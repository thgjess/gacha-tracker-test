// =========================================================================
// GAME DEFINITIONS (WUTHERING WAVES & NEVERNESS TO EVERNESS)
// =========================================================================
const GAME_CONFIGS = {
  wuwa: {
    id: 'wuwa',
    name: 'Wuthering Waves',
    shortName: 'WuWa',
    terminalTag: 'SOLARIS-3 TERMINAL',
    codexTag: 'SOLARIS-3 CODEX',
    currencyName: 'Astrite',
    limitedTicketName: 'Radiant Tide',
    weaponTicketName: 'Forging Tide',
    standardTicketName: 'Lustrous Tide',
    pullUnit: 'Convenes',
    pullCost: 160,
    hardPity: 80,
    softPity: 65,
    has5050: true,
    defaultAccent: '#2dd4bf',
    defaultSvgs: {
      // 4-point Astrite star SVG
      currency: `<svg viewBox="0 0 24 24" fill="none" class="w-full h-full text-teal-300"><path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="12" r="2.2" fill="#fbbf24"/></svg>`,
      // Radiant Tide swirl-orb SVG
      limitedTicket: `<svg viewBox="0 0 24 24" fill="none" class="w-full h-full"><circle cx="12" cy="12" r="8" fill="#fbbf24" fill-opacity="0.22" stroke="#fbbf24" stroke-width="1.8"/><path d="M8 12C8 9.8 9.8 8 12 8C14.2 8 16 9.8 16 12C16 14.2 14.2 16 12 16" stroke="#2dd4bf" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="12" r="2" fill="#fbbf24"/></svg>`,
      weaponTicket: `<svg viewBox="0 0 24 24" fill="none" class="w-full h-full text-cyan-300"><path d="M14.5 3.5L20.5 9.5L9.5 20.5H3.5V14.5L14.5 3.5Z" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>`,
      standardTicket: `<svg viewBox="0 0 24 24" fill="none" class="w-full h-full text-slate-300"><circle cx="12" cy="12" r="8" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="2.5" fill="currentColor"/></svg>`
    },
    codexCards: [
      { label: '1 Convene Tide', val: '160 Astrite' },
      { label: '10-Pull Convene', val: '1,600 Astrite' },
      { label: 'Lunite Exchange', val: '1 : 1 Astrite' },
      { label: 'Hard Pity (80)', val: '12,800 Astrite' },
      { label: 'Full 50/50 (160)', val: '25,600 Astrite' },
      { label: 'Soft Pity Ramp', val: 'Pull 65+' }
    ],
    codexSources: [
      { source: 'Daily Guidebook Activity', cadence: 'Daily', reward: '60 / day (1,800/30d)' },
      { source: 'Lunite Subscription (Optional)', cadence: 'Daily', reward: '90 / day (+300 Lunite)' },
      { source: 'Fantasies of the Thousand Gateways', cadence: 'Weekly', reward: '160 / week' },
      { source: 'Tower of Adversity (Hazard Zone)', cadence: 'Bi-Weekly', reward: 'Up to 700–800 / cycle' },
      { source: 'Whimpering Wastes / Endstate Matrix', cadence: 'Rotation', reward: 'Up to 800 / cycle' },
      { source: 'Maintenance + Special Broadcast', cadence: 'Per Patch', reward: '600 + 300 (Codes)' },
      { source: 'Oscillated Coral Shop Reset', cadence: 'Per Patch', reward: '7 Radiant + 7 Forging + 7 Lustrous' }
    ]
  },
  nte: {
    id: 'nte',
    name: 'Neverness to Everness',
    shortName: 'NTE',
    terminalTag: 'HETHEREAU ANOMALY BUREAU',
    codexTag: 'HETHEREAU ECONOMY CODEX',
    currencyName: 'Annulith',
    limitedTicketName: 'Solid Dice',
    weaponTicketName: 'Tri-Key',
    standardTicketName: 'Fabricated Dice',
    pullUnit: 'Board Rolls',
    pullCost: 160,
    hardPity: 90,
    softPity: 70,
    has5050: false,
    defaultAccent: '#a855f7',
    defaultSvgs: {
      // Annulith prismatic ring/prism SVG
      currency: `<svg viewBox="0 0 24 24" fill="none" class="w-full h-full text-purple-300"><polygon points="12,2 21,7.5 21,16.5 12,22 3,16.5 3,7.5" fill="currentColor" fill-opacity="0.26" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="12" r="3.2" stroke="#f59e0b" stroke-width="1.8"/></svg>`,
      // Solid Dice isometric cube SVG
      limitedTicket: `<svg viewBox="0 0 24 24" fill="none" class="w-full h-full text-amber-300"><path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 12L20 7.5M12 12V21M12 12L4 7.5" stroke="#c084fc" stroke-width="1.6"/><circle cx="12" cy="7.5" r="1.2" fill="#fbbf24"/></svg>`,
      // Tri-Key SVG
      weaponTicket: `<svg viewBox="0 0 24 24" fill="none" class="w-full h-full text-cyan-300"><circle cx="8" cy="8" r="4" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="1.8"/><path d="M11 11L20 20M16 16L19 13M18 18L21 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
      // Fabricated Dice SVG
      standardTicket: `<svg viewBox="0 0 24 24" fill="none" class="w-full h-full text-slate-300"><rect x="4" y="4" width="16" height="16" rx="3" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.8"/><circle cx="9" cy="9" r="1.3" fill="currentColor"/><circle cx="15" cy="15" r="1.3" fill="currentColor"/><circle cx="12" cy="12" r="1.3" fill="currentColor"/></svg>`
    },
    codexCards: [
      { label: '1 Board Roll', val: '160 Annulith' },
      { label: '10-Roll Board', val: '1,600 Annulith' },
      { label: '50/50 System', val: 'NONE (100% Rate-Up!)' },
      { label: 'Hard Pity (90)', val: '14,400 Annulith' },
      { label: 'Board Conversion', val: 'Pull 70+ Soft Pity' },
      { label: 'Outfit Milestones', val: '50 / 120 / 200 Pulls' }
    ],
    codexSources: [
      { source: 'Daily Bureau Commissions', cadence: 'Daily', reward: 'Annulith + Exp' },
      { source: 'Hethereau City Business & Rent', cadence: 'Weekly / Passive', reward: 'Annulith + Funds' },
      { source: 'Anomaly Containment Trials', cadence: 'Rotation', reward: 'Annulith + Solid Dice' },
      { source: 'Version Flagship Events', cadence: 'Per Patch', reward: 'Annulith + Solid Dice' },
      { source: 'Special Program & Maintenance', cadence: 'Per Patch', reward: 'Maintenance Annulith + Codes' },
      { source: 'Limited Board Pull Milestones', cadence: 'Per Banner', reward: 'Outfit Perks at 50 / 120 / 200' }
    ]
  }
};

// =========================================================================
// STATE MANAGEMENT & LOCALSTORAGE PERSISTENCE
// =========================================================================
const STORAGE_KEY = 'gacha_command_dual_v2';
const LEGACY_WUWA_KEY = 'solaris3_astrite_tracker_v1';

const DEFAULT_EVENT_CATEGORIES = [
  'Flagship Event',
  'Combat Challenge',
  'Endgame Reset',
  'Login Campaign',
  'Exploration / City',
  'Livestream / Mail',
  'Web / Survey'
];

let appState = {
  activeGame: 'wuwa',
  isSampleData: false,
  customCategories: [],
  ui: {
    theme: 'midnight',
    showGrid: true,
    glassBlur: true,
    compactMode: false
  },
  games: {
    wuwa: null,
    nte: null
  }
};

let mountainChart = null;
let currentChartFilter = 'all';
let pendingEventImageDataUrl = null;

function getRewardLabel(type) {
  const cfg = getActiveConfig();
  const map = {
    currency: cfg.currencyName,
    limitedTicket: cfg.limitedTicketName,
    weaponTicket: cfg.weaponTicketName,
    standardTicket: cfg.standardTicketName
  };
  return map[type] || cfg.currencyName;
}

function getEventRewards(ev) {
  if (Array.isArray(ev.rewards) && ev.rewards.length > 0) {
    return ev.rewards.map(r => ({
      type: r.type || 'currency',
      total: Math.max(0, Number(r.total || 0)),
      claimed: Math.max(0, Number(r.claimed || 0))
    }));
  }
  return [{
    type: 'currency',
    total: Math.max(0, Number(ev.totalAstrite || 0)),
    claimed: Math.max(0, Number(ev.claimedAstrite || 0))
  }];
}

function syncEventLegacyTotals(ev) {
  const rewards = getEventRewards(ev);
  const curr = rewards.find(r => r.type === 'currency');
  ev.rewards = rewards;
  ev.totalAstrite = curr ? curr.total : 0;
  ev.claimedAstrite = curr ? curr.claimed : 0;
  return ev;
}

function getRelativeDateStr(daysOffset) {
  const d = new Date();
  d.setDate(d.getDate() + daysOffset);
  return d.toISOString().split('T')[0];
}

function createEmptyGameProfile(gameId) {
  const cfg = GAME_CONFIGS[gameId];
  return {
    patch: {
      version: gameId === 'wuwa' ? 'Patch 3.8' : 'Version 1.1',
      startDate: getRelativeDateStr(0),
      endDate: getRelativeDateStr(42)
    },
    media: {
      heroBanner: null,
      heroFocusY: 25,
      accentColor: cfg.defaultAccent,
      icons: {
        currency: null,
        limitedTicket: null,
        weaponTicket: null,
        standardTicket: null
      }
    },
    dailyLogs: [],
    activeEvents: [],
    archivedEvents: [],
    pity: {
      targetName: gameId === 'wuwa' ? 'Featured 5★ Resonator' : 'Featured S-Rank Esper',
      bannerType: 'character',
      currentPity: 0,
      guaranteed: 'no'
    }
  };
}

function buildSampleGameProfile(gameId) {
  if (gameId === 'wuwa') {
    return {
      patch: {
        version: 'Patch 3.8',
        startDate: getRelativeDateStr(-18),
        endDate: getRelativeDateStr(24)
      },
      media: {
        heroBanner: null,
        heroFocusY: 25,
        accentColor: '#2dd4bf',
        icons: { currency: null, limitedTicket: null, weaponTicket: null, standardTicket: null }
      },
      dailyLogs: [
        { id: 'w1', date: getRelativeDateStr(-16), patch: 'Patch 3.8', astrite: 11800, radiant: 8, forging: 2, lustrous: 14, note: 'Patch Launch + Maintenance Mail' },
        { id: 'w2', date: getRelativeDateStr(-12), patch: 'Patch 3.8', astrite: 13250, radiant: 10, forging: 2, lustrous: 16, note: 'Tower of Adversity Hazard Zone Clear' },
        { id: 'w3', date: getRelativeDateStr(-8),  patch: 'Patch 3.8', astrite: 14680, radiant: 12, forging: 4, lustrous: 18, note: 'Flagship Event Phase I + Coral Shop' },
        { id: 'w4', date: getRelativeDateStr(-4),  patch: 'Patch 3.8', astrite: 15940, radiant: 13, forging: 4, lustrous: 19, note: 'Whimpering Wastes Rotation Clear' },
        { id: 'w5', date: getRelativeDateStr(0),   patch: 'Patch 3.8', astrite: 17140, radiant: 14, forging: 4, lustrous: 20, note: 'Dailies + Combat Challenge Rewards' }
      ],
      activeEvents: [
        { id: 'we1', name: 'Chronicles of Rinascita: Grand Gala', category: 'Flagship Event', patch: 'Patch 3.8', startDate: getRelativeDateStr(-16), endDate: getRelativeDateStr(20), totalAstrite: 1200, claimedAstrite: 900, image: null },
        { id: 'we2', name: 'Tower of Adversity (Cycle II)', category: 'Endgame Reset', patch: 'Patch 3.8', startDate: getRelativeDateStr(-3), endDate: getRelativeDateStr(11), totalAstrite: 800, claimedAstrite: 500, image: null },
        { id: 'we3', name: 'Gifts of Starlight Check-In', category: 'Login Campaign', patch: 'Patch 3.8', startDate: getRelativeDateStr(-18), endDate: getRelativeDateStr(-4), totalAstrite: 300, claimedAstrite: 300, image: null }
      ],
      archivedEvents: [
        { id: 'wa1', name: 'Moonlit Resonance Festival', category: 'Flagship Event', patch: 'Patch 3.7', startDate: getRelativeDateStr(-55), endDate: getRelativeDateStr(-22), totalAstrite: 1200, claimedAstrite: 1200, image: null },
        { id: 'wa2', name: '3.7 Special Broadcast & Maintenance', category: 'Livestream / Mail', patch: 'Patch 3.7', startDate: getRelativeDateStr(-60), endDate: getRelativeDateStr(-55), totalAstrite: 900, claimedAstrite: 900, image: null }
      ],
      pity: {
        targetName: 'Featured 5★ Resonator',
        bannerType: 'character',
        currentPity: 28,
        guaranteed: 'no'
      }
    };
  } else {
    return {
      patch: {
        version: 'Version 1.1',
        startDate: getRelativeDateStr(-12),
        endDate: getRelativeDateStr(30)
      },
      media: {
        heroBanner: null,
        heroFocusY: 25,
        accentColor: '#a855f7',
        icons: { currency: null, limitedTicket: null, weaponTicket: null, standardTicket: null }
      },
      dailyLogs: [
        { id: 'n1', date: getRelativeDateStr(-12), patch: 'Version 1.1', astrite: 6400, radiant: 10, forging: 3, lustrous: 15, note: 'Version 1.1 Update + Bureau Launch Bonus' },
        { id: 'n2', date: getRelativeDateStr(-9),  patch: 'Version 1.1', astrite: 7520, radiant: 12, forging: 3, lustrous: 16, note: 'Hethereau Story Chapter + City Commissions' },
        { id: 'n3', date: getRelativeDateStr(-6),  patch: 'Version 1.1', astrite: 8680, radiant: 15, forging: 5, lustrous: 18, note: 'Anomaly Containment Weekly + Shop Revenue' },
        { id: 'n4', date: getRelativeDateStr(-3),  patch: 'Version 1.1', astrite: 9450, radiant: 15, forging: 5, lustrous: 18, note: 'Urban Drift Event + Daily Bureau Tasks' },
        { id: 'n5', date: getRelativeDateStr(0),   patch: 'Version 1.1', astrite: 10320, radiant: 17, forging: 5, lustrous: 20, note: 'Today Commissions + Flagship Milestone' }
      ],
      activeEvents: [
        { id: 'ne1', name: 'Neon Nocturne: Hethereau Drift', category: 'Flagship Event', patch: 'Version 1.1', startDate: getRelativeDateStr(-10), endDate: getRelativeDateStr(22), totalAstrite: 1600, claimedAstrite: 1100, image: null },
        { id: 'ne2', name: 'Anomaly Containment: Deep Sector', category: 'Endgame Reset', patch: 'Version 1.1', startDate: getRelativeDateStr(-4), endDate: getRelativeDateStr(10), totalAstrite: 960, claimedAstrite: 640, image: null },
        { id: 'ne3', name: 'Eibon’s Dice Check-In', category: 'Login Campaign', patch: 'Version 1.1', startDate: getRelativeDateStr(-12), endDate: getRelativeDateStr(2), totalAstrite: 480, claimedAstrite: 480, image: null }
      ],
      archivedEvents: [
        { id: 'na1', name: 'Grand Opening of Hethereau', category: 'Flagship Event', patch: 'Version 1.0', startDate: getRelativeDateStr(-50), endDate: getRelativeDateStr(-15), totalAstrite: 2400, claimedAstrite: 2400, image: null }
      ],
      pity: {
        targetName: 'Featured S-Rank Esper',
        bannerType: 'character',
        currentPity: 34,
        guaranteed: 'yes'
      }
    };
  }
}

function getActiveConfig() {
  return GAME_CONFIGS[appState.activeGame];
}

function getActiveProfile() {
  return appState.games[appState.activeGame];
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      appState = {
        ...appState,
        ...parsed,
        customCategories: Array.isArray(parsed.customCategories) ? parsed.customCategories : [],
        ui: { ...appState.ui, ...(parsed.ui || {}) },
        games: {
          wuwa: parsed.games?.wuwa || buildSampleGameProfile('wuwa'),
          nte: parsed.games?.nte || buildSampleGameProfile('nte')
        }
      };
    } else {
      // Check if user had previous WuWa data from v1 and migrate it seamlessly
      const legacyRaw = localStorage.getItem(LEGACY_WUWA_KEY);
      if (legacyRaw) {
        const legacy = JSON.parse(legacyRaw);
        const wuwaMigrated = createEmptyGameProfile('wuwa');
        wuwaMigrated.patch = legacy.patch || wuwaMigrated.patch;
        wuwaMigrated.dailyLogs = legacy.dailyLogs || [];
        wuwaMigrated.activeEvents = (legacy.activeEvents || []).map(e => ({ ...e, image: null }));
        wuwaMigrated.archivedEvents = (legacy.archivedEvents || []).map(e => ({ ...e, image: null }));
        wuwaMigrated.pity = legacy.pity || wuwaMigrated.pity;

        appState.isSampleData = Boolean(legacy.isSampleData);
        appState.games.wuwa = wuwaMigrated;
        appState.games.nte = buildSampleGameProfile('nte');
      } else {
        appState.isSampleData = true;
        appState.games.wuwa = buildSampleGameProfile('wuwa');
        appState.games.nte = buildSampleGameProfile('nte');
      }
      saveState();
    }
  } catch (e) {
    console.error('Load error:', e);
    appState.isSampleData = true;
    appState.games.wuwa = buildSampleGameProfile('wuwa');
    appState.games.nte = buildSampleGameProfile('nte');
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {
    showToast('Storage limit reached! Try using smaller images or exporting a JSON backup.', 'error');
  }
}

function clearSampleData() {
  appState.isSampleData = false;
  appState.games.wuwa = createEmptyGameProfile('wuwa');
  appState.games.nte = createEmptyGameProfile('nte');
  saveState();
  renderAll();
  showToast('Cleared sample data for both games! Ready for your own logs.', 'success');
}

// =========================================================================
// IMAGE COMPRESSION HELPER (KEEPS LOCAL IMAGES LIGHTWEIGHT FOR STORAGE)
// =========================================================================
function compressImageFile(file, maxWidth, maxHeight, quality = 0.82) {
  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith('image/')) {
      reject(new Error('Please select a valid image file.'));
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Preserve PNG transparency for small icons; use WebP/JPEG for banners
        const outMime = file.type === 'image/png' && maxWidth <= 200 ? 'image/png' : 'image/webp';
        const dataUrl = canvas.toDataURL(outMime, quality);
        resolve(dataUrl);
      };
      img.onerror = () => reject(new Error('Could not decode image.'));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error('Failed to read file.'));
    reader.readAsDataURL(file);
  });
}

// =========================================================================
// CUSTOM ICONS & GAME BANNER HANDLERS
// =========================================================================
function getIconHtml(iconType, extraClasses = 'w-full h-full') {
  const cfg = getActiveConfig();
  const profile = getActiveProfile();
  const customSrc = profile.media?.icons?.[iconType];
  if (customSrc) {
    return `<img src="${customSrc}" alt="${iconType}" class="${extraClasses} object-contain rounded" />`;
  }
  return cfg.defaultSvgs[iconType] || '';
}

async function handleCustomIconUpload(event, iconType) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const compressed = await compressImageFile(file, 140, 140, 0.9);
    const profile = getActiveProfile();
    profile.media.icons[iconType] = compressed;
    saveState();
    renderAll();
    showToast('Custom icon updated!', 'success');
  } catch (err) {
    showToast(err.message || 'Image upload failed.', 'error');
  }
  event.target.value = '';
}

function resetActiveGameMedia() {
  const profile = getActiveProfile();
  profile.media.icons = {
    currency: null,
    limitedTicket: null,
    weaponTicket: null,
    standardTicket: null
  };
  saveState();
  renderAll();
  showToast('Restored default icons for this game.', 'info');
}

async function processHeroBannerFile(file) {
  try {
    const compressed = await compressImageFile(file, 1280, 520, 0.82);
    const profile = getActiveProfile();
    profile.media.heroBanner = compressed;
    saveState();
    renderHeroBanner();
    showToast('Game Showcase Banner updated!', 'success');
  } catch (err) {
    showToast(err.message || 'Could not upload banner.', 'error');
  }
}

function handleHeroImageUpload(event) {
  const file = event.target.files?.[0];
  if (file) processHeroBannerFile(file);
  event.target.value = '';
}

function handleBannerDragOver(e) {
  e.preventDefault();
  document.getElementById('hero-banner-container').classList.add('ring-2', 'ring-teal-400');
}

function handleBannerDragLeave(e) {
  e.preventDefault();
  document.getElementById('hero-banner-container').classList.remove('ring-2', 'ring-teal-400');
}

function handleBannerDrop(e) {
  e.preventDefault();
  document.getElementById('hero-banner-container').classList.remove('ring-2', 'ring-teal-400');
  const file = e.dataTransfer?.files?.[0];
  if (file) processHeroBannerFile(file);
}

let heroEditorOpen = false;
let heroDragging = false;

function openHeroEditorModal(e) {
  if (e) e.stopPropagation();
  heroEditorOpen = true;
  const profile = getActiveProfile();
  const posX = profile.media.heroPosX ?? 50;
  const posY = profile.media.heroFocusY ?? 25;
  const zoom = profile.media.heroZoom ?? 100;

  const xSlider = document.getElementById('hero-pos-x-slider');
  const ySlider = document.getElementById('hero-pos-y-slider');
  const zSlider = document.getElementById('hero-zoom-slider');
  if (xSlider) xSlider.value = posX;
  if (ySlider) ySlider.value = posY;
  if (zSlider) zSlider.value = zoom;

  const xVal = document.getElementById('hero-pos-x-val');
  const yVal = document.getElementById('hero-pos-y-val');
  const zVal = document.getElementById('hero-zoom-val');
  if (xVal) xVal.textContent = `${posX}%`;
  if (yVal) yVal.textContent = `${posY}%`;
  if (zVal) zVal.textContent = `${zoom}%`;

  const prevImg = document.getElementById('hero-modal-preview-img');
  if (prevImg) {
    prevImg.src = profile.media.heroBanner || '';
    prevImg.style.objectPosition = `${posX}% ${posY}%`;
    prevImg.style.transformOrigin = `${posX}% ${posY}%`;
    prevImg.style.transform = `scale(${(zoom / 100).toFixed(2)})`;
  }

  document.getElementById('hero-editor-modal')?.classList.remove('hidden');
  renderHeroBanner();
}

function closeHeroEditorModal() {
  heroEditorOpen = false;
  heroDragging = false;
  document.getElementById('hero-editor-modal')?.classList.add('hidden');
  renderHeroBanner();
}

function updateHeroFromSliders() {
  const profile = getActiveProfile();
  const xSlider = document.getElementById('hero-pos-x-slider');
  const ySlider = document.getElementById('hero-pos-y-slider');
  const zSlider = document.getElementById('hero-zoom-slider');

  const posX = Number(xSlider?.value ?? profile.media.heroPosX ?? 50);
  const posY = Number(ySlider?.value ?? profile.media.heroFocusY ?? 25);
  const zoom = Number(zSlider?.value ?? profile.media.heroZoom ?? 100);

  profile.media.heroPosX = posX;
  profile.media.heroFocusY = posY;
  profile.media.heroZoom = zoom;

  const xVal = document.getElementById('hero-pos-x-val');
  const yVal = document.getElementById('hero-pos-y-val');
  const zVal = document.getElementById('hero-zoom-val');
  if (xVal) xVal.textContent = `${posX}%`;
  if (yVal) yVal.textContent = `${posY}%`;
  if (zVal) zVal.textContent = `${zoom}%`;

  const scale = (zoom / 100).toFixed(2);
  const prevImg = document.getElementById('hero-modal-preview-img');
  if (prevImg) {
    prevImg.style.objectPosition = `${posX}% ${posY}%`;
    prevImg.style.transformOrigin = `${posX}% ${posY}%`;
    prevImg.style.transform = `scale(${scale})`;
  }

  const imgEl = document.getElementById('hero-banner-img');
  if (imgEl) {
    imgEl.style.objectPosition = `${posX}% ${posY}%`;
    imgEl.style.transformOrigin = `${posX}% ${posY}%`;
    imgEl.style.transform = `scale(${scale})`;
  }

  saveState();
}

function toggleHeroEditor(e, forceState) {
  if (e) e.stopPropagation();
  const modal = document.getElementById('hero-editor-modal');
  if (modal) {
    const shouldOpen = typeof forceState === 'boolean' ? forceState : modal.classList.contains('hidden');
    if (shouldOpen) openHeroEditorModal(e);
    else closeHeroEditorModal();
  }
}

function setHeroBannerSize(size) {
  const profile = getActiveProfile();
  profile.media.heroSize = ['sm', 'md', 'lg'].includes(size) ? size : 'md';
  saveState();
  renderHeroBanner();
}

function resetHeroFraming() {
  const profile = getActiveProfile();
  profile.media.heroPosX = 50;
  profile.media.heroFocusY = 25;
  profile.media.heroZoom = 100;
  profile.media.heroSize = 'md';
  saveState();
  renderHeroBanner();
  showToast('Banner framing & size reset.', 'info');
}

function applyHeroTransformToElements(posX, posY, zoom) {
  const scale = (Number(zoom || 100) / 100).toFixed(2);
  const imgEl = document.getElementById('hero-banner-img');
  if (imgEl) {
    imgEl.style.objectPosition = `${posX}% ${posY}%`;
    imgEl.style.transformOrigin = `${posX}% ${posY}%`;
    imgEl.style.transform = `scale(${scale})`;
  }
  const prevImg = document.getElementById('hero-modal-preview-img');
  if (prevImg) {
    prevImg.style.objectPosition = `${posX}% ${posY}%`;
    prevImg.style.transformOrigin = `${posX}% ${posY}%`;
    prevImg.style.transform = `scale(${scale})`;
  }
  const xSlider = document.getElementById('hero-pos-x-slider');
  const ySlider = document.getElementById('hero-pos-y-slider');
  const xVal = document.getElementById('hero-pos-x-val');
  const yVal = document.getElementById('hero-pos-y-val');
  if (xSlider) xSlider.value = posX;
  if (ySlider) ySlider.value = posY;
  if (xVal) xVal.textContent = `${posX}%`;
  if (yVal) yVal.textContent = `${posY}%`;
}

function initHeroBannerDragCrop() {
  const container = document.getElementById('hero-banner-container');
  const modalPreview = document.getElementById('hero-modal-preview');
  let startX = 0, startY = 0, originX = 50, originY = 25, activeDragBox = null;

  const onDown = (boxEl) => (e) => {
    const profile = getActiveProfile();
    if (!profile.media.heroBanner) return;
    if (boxEl === container && !heroEditorOpen) return;
    if (e.target.closest('#hero-controls-wrapper') || e.target.closest('label') || e.target.closest('button')) return;
    if (!e.touches && e.button !== 0) return;
    e.preventDefault();
    heroDragging = true;
    activeDragBox = boxEl;
    const pt = e.touches ? e.touches[0] : e;
    startX = pt.clientX;
    startY = pt.clientY;
    originX = profile.media.heroPosX ?? 50;
    originY = profile.media.heroFocusY ?? 25;
  };

  const onMove = (e) => {
    if (!heroDragging || !activeDragBox) return;
    const profile = getActiveProfile();
    const pt = e.touches ? e.touches[0] : e;
    const rect = activeDragBox.getBoundingClientRect();
    const zoomFactor = Math.max(1, (profile.media.heroZoom ?? 100) / 100);
    const dx = (((pt.clientX - startX) / Math.max(1, rect.width)) * 100) / zoomFactor;
    const dy = (((pt.clientY - startY) / Math.max(1, rect.height)) * 100) / zoomFactor;
    profile.media.heroPosX = Math.max(0, Math.min(100, Math.round(originX - dx)));
    profile.media.heroFocusY = Math.max(0, Math.min(100, Math.round(originY - dy)));
    applyHeroTransformToElements(profile.media.heroPosX, profile.media.heroFocusY, profile.media.heroZoom ?? 100);
  };

  const onUp = () => {
    if (heroDragging) {
      heroDragging = false;
      activeDragBox = null;
      saveState();
    }
  };

  if (container) {
    container.addEventListener('mousedown', onDown(container));
    container.addEventListener('touchstart', onDown(container), { passive: false });
  }
  if (modalPreview) {
    modalPreview.addEventListener('mousedown', onDown(modalPreview));
    modalPreview.addEventListener('touchstart', onDown(modalPreview), { passive: false });
  }
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onUp);
  window.addEventListener('touchmove', onMove, { passive: false });
  window.addEventListener('touchend', onUp);
}

function removeHeroImage() {
  const profile = getActiveProfile();
  profile.media.heroBanner = null;
  profile.media.heroPosX = 50;
  profile.media.heroFocusY = 25;
  profile.media.heroZoom = 100;
  saveState();
  renderHeroBanner();
  showToast('Showcase banner removed.', 'info');
}

function renderHeroBanner() {
  const profile = getActiveProfile();
  const container = document.getElementById('hero-banner-container');
  const imgEl = document.getElementById('hero-banner-img');
  const fallbackEl = document.getElementById('hero-banner-fallback');
  const removeBtn = document.getElementById('hero-remove-btn');
  const zoomRow = document.getElementById('hero-zoom-row');
  const resetBtn = document.getElementById('hero-reset-frame-btn');

  const sz = profile.media.heroSize || 'md';
  container.classList.remove('h-36', 'sm:h-44', 'md:h-48', 'h-44', 'sm:h-56', 'md:h-64', 'h-56', 'sm:h-72', 'md:h-80');
  if (sz === 'sm') {
    container.classList.add('h-36', 'sm:h-44', 'md:h-48');
  } else if (sz === 'lg') {
    container.classList.add('h-56', 'sm:h-72', 'md:h-80');
  } else {
    container.classList.add('h-44', 'sm:h-56', 'md:h-64');
  }

  ['sm', 'md', 'lg'].forEach(k => {
    const btn = document.getElementById(`hero-sz-${k}`);
    if (!btn) return;
    btn.className = k === sz
      ? 'hero-sz-btn px-2 py-0.5 rounded text-[10px] font-semibold accent-bg-soft accent-text cursor-pointer'
      : 'hero-sz-btn px-2 py-0.5 rounded text-[10px] font-semibold text-slate-400 hover:text-white cursor-pointer';
  });

  const zoom = profile.media.heroZoom ?? 100;
  const posX = profile.media.heroPosX ?? 50;
  const posY = profile.media.heroFocusY ?? 25;
  document.getElementById('hero-zoom-slider').value = zoom;
  document.getElementById('hero-zoom-val').textContent = `${zoom}%`;

  if (profile.media.heroBanner) {
    imgEl.src = profile.media.heroBanner;
    imgEl.style.objectPosition = `${posX}% ${posY}%`;
    imgEl.style.transformOrigin = `${posX}% ${posY}%`;
    imgEl.style.transform = `scale(${(zoom / 100).toFixed(2)})`;
    imgEl.classList.remove('hidden');
    fallbackEl?.classList.add('hidden');
    removeBtn?.classList.remove('hidden');
    zoomRow?.classList.remove('hidden');
    resetBtn?.classList.remove('hidden');
  } else {
    imgEl.src = '';
    imgEl.style.transform = 'scale(1)';
    imgEl.classList.add('hidden');
    fallbackEl?.classList.remove('hidden');
    removeBtn?.classList.add('hidden');
    zoomRow?.classList.add('hidden');
    resetBtn?.classList.add('hidden');
  }
  document.getElementById('hero-drag-hint')?.classList.toggle('hidden', !(heroEditorOpen && Boolean(profile.media.heroBanner)));
  container?.classList.toggle('banner-crop-stage', heroEditorOpen && Boolean(profile.media.heroBanner));
}

// =========================================================================
// GAME SWITCHING & THEME CUSTOMIZATION STUDIO
// =========================================================================
function switchGame(gameId) {
  if (!GAME_CONFIGS[gameId]) return;
  appState.activeGame = gameId;
  saveState();
  renderAll();
}

function hexToRgbTuple(hex) {
  const clean = hex.replace('#', '');
  const full = clean.length === 3 ? clean.split('').map(c => c + c).join('') : clean;
  const num = parseInt(full, 16);
  if (isNaN(num)) return '45, 212, 191';
  return `${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}`;
}

function setDesignStyle(styleName) {
  appState.ui.designStyle = styleName;
  saveState();
  applyVisualTheme();
  renderChart();
}

function renderDesignStyleButtons() {
  const cur = appState.ui.designStyle || 'tactical';
  ['tactical', 'liquid', 'editorial'].forEach(k => {
    const btn = document.getElementById(`design-btn-${k}`);
    if (!btn) return;
    btn.className = k === cur
      ? 'p-3 rounded-xl accent-bg-soft border accent-border text-left cursor-pointer transition'
      : 'p-3 rounded-xl bg-slate-900/90 border border-slate-700 text-left cursor-pointer hover:border-teal-400 transition';
  });
}

function applyVisualTheme() {
  const root = document.documentElement;
  const body = document.body;
  const ui = appState.ui;
  const profile = getActiveProfile();
  const accent = profile.media?.accentColor || getActiveConfig().defaultAccent;
  const designStyle = ui.designStyle || 'tactical';
  body.setAttribute('data-design', designStyle);

  root.style.setProperty('--accent', accent);
  root.style.setProperty('--accent-rgb', hexToRgbTuple(accent));
  document.getElementById('custom-accent-picker').value = accent;

  // Background Themes
  body.classList.remove('theme-light');
  if (ui.theme === 'amoled') {
    root.style.setProperty('--bg-base', '#030407');
    root.style.setProperty('--panel-bg', 'rgba(10, 12, 18, 0.92)');
    root.style.setProperty('--card-bg-start', 'rgba(15, 18, 26, 0.96)');
    root.style.setProperty('--card-bg-end', 'rgba(8, 10, 15, 0.98)');
    root.style.setProperty('--text-main', '#f1f5f9');
  } else if (ui.theme === 'twilight') {
    root.style.setProperty('--bg-base', '#110e21');
    root.style.setProperty('--panel-bg', 'rgba(24, 19, 46, 0.85)');
    root.style.setProperty('--card-bg-start', 'rgba(33, 26, 61, 0.92)');
    root.style.setProperty('--card-bg-end', 'rgba(20, 16, 39, 0.96)');
    root.style.setProperty('--text-main', '#ede9fe');
  } else if (ui.theme === 'daylight') {
    body.classList.add('theme-light');
    root.style.setProperty('--bg-base', '#f1f5f9');
    root.style.setProperty('--panel-bg', 'rgba(255, 255, 255, 0.92)');
    root.style.setProperty('--card-bg-start', 'rgba(255, 255, 255, 0.98)');
    root.style.setProperty('--card-bg-end', 'rgba(248, 250, 252, 0.98)');
    root.style.setProperty('--text-main', '#0f172a');
  } else {
    // Default Midnight Slate
    root.style.setProperty('--bg-base', '#0b0f19');
    root.style.setProperty('--panel-bg', 'rgba(15, 22, 36, 0.84)');
    root.style.setProperty('--card-bg-start', 'rgba(21, 31, 51, 0.92)');
    root.style.setProperty('--card-bg-end', 'rgba(13, 20, 34, 0.96)');
    root.style.setProperty('--text-main', '#e2e8f0');
  }

  root.style.setProperty('--grid-opacity', ui.showGrid ? '0.16' : '0');
  root.style.setProperty('--card-blur', ui.glassBlur ? '14px' : '0px');
  body.classList.toggle('density-compact', Boolean(ui.compactMode));

  // Sync Customize Drawer checkboxes
  document.getElementById('toggle-grid').checked = Boolean(ui.showGrid);
  document.getElementById('toggle-glass').checked = Boolean(ui.glassBlur);
  document.getElementById('toggle-compact').checked = Boolean(ui.compactMode);

  renderDesignStyleButtons();
}

function setGameAccentColor(hex) {
  const profile = getActiveProfile();
  profile.media.accentColor = hex;
  saveState();
  applyVisualTheme();
  renderChart();
}

function setThemePreset(themeName) {
  appState.ui.theme = themeName;
  saveState();
  applyVisualTheme();
  renderChart();
}

function toggleVisualOption(key, value) {
  appState.ui[key] = value;
  saveState();
  applyVisualTheme();
}

function resetToDefaultDark() {
  appState.ui = {
    theme: 'midnight',
    showGrid: true,
    glassBlur: true,
    compactMode: false
  };
  appState.games.wuwa.media.accentColor = GAME_CONFIGS.wuwa.defaultAccent;
  appState.games.nte.media.accentColor = GAME_CONFIGS.nte.defaultAccent;
  saveState();
  renderAll();
  showToast('Theme restored to Default Dark!', 'success');
}

function openCustomizeDrawer() {
  renderCustomizeStudioPreviews();
  document.getElementById('customize-drawer').classList.remove('hidden');
}

function closeCustomizeDrawer() {
  document.getElementById('customize-drawer').classList.add('hidden');
}

function renderCustomizeStudioPreviews() {
  const cfg = getActiveConfig();
  document.getElementById('custom-game-name-label').textContent = cfg.shortName;
  document.getElementById('studio-label-currency').textContent = cfg.currencyName;
  document.getElementById('studio-label-limited').textContent = cfg.limitedTicketName;
  document.getElementById('studio-label-weapon').textContent = cfg.weaponTicketName;
  document.getElementById('studio-label-standard').textContent = cfg.standardTicketName;

  document.getElementById('studio-preview-currency').innerHTML = getIconHtml('currency', 'w-6 h-6');
  document.getElementById('studio-preview-limited').innerHTML = getIconHtml('limitedTicket', 'w-6 h-6');
  document.getElementById('studio-preview-weapon').innerHTML = getIconHtml('weaponTicket', 'w-6 h-6');
  document.getElementById('studio-preview-standard').innerHTML = getIconHtml('standardTicket', 'w-6 h-6');
}

// =========================================================================
// TOAST NOTIFICATION SYSTEM
// =========================================================================
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  const styles = {
    success: 'bg-slate-900/95 border-teal-400/50 text-teal-200',
    error: 'bg-slate-900/95 border-rose-400/50 text-rose-200',
    info: 'bg-slate-900/95 border-amber-400/50 text-amber-200'
  };
  const icons = {
    success: 'fa-circle-check text-teal-400',
    error: 'fa-triangle-exclamation text-rose-400',
    info: 'fa-sparkles text-amber-400'
  };
  toast.className = `pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-xl border shadow-xl text-xs sm:text-sm font-medium backdrop-blur-md transition-all duration-300 ${styles[type] || styles.info}`;
  toast.innerHTML = `<i class="fa-solid ${icons[type] || icons.info}"></i><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// =========================================================================
// GAME TERMINOLOGY & HEADER RENDERING
// =========================================================================
function renderGameIdentityAndLabels() {
  const cfg = getActiveConfig();
  const profile = getActiveProfile();

  // Switcher Button Styles
  ['wuwa', 'nte'].forEach(id => {
    const btn = document.getElementById(`game-btn-${id}`);
    if (id === appState.activeGame) {
      btn.className = 'px-3.5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition cursor-pointer flex items-center gap-2 border accent-bg-soft text-white shadow-md';
    } else {
      btn.className = 'px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer flex items-center gap-2 border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white';
    }
  });

  // Hero Banner & Labels
  renderHeroBanner();
  document.getElementById('game-terminal-tag').textContent = cfg.terminalTag;
  document.getElementById('game-main-title').textContent = cfg.name.toUpperCase();
  document.getElementById('hero-currency-icon-slot').innerHTML = getIconHtml('currency');

  // Patch Inputs
  document.getElementById('patch-version-input').value = profile.patch.version;
  document.getElementById('patch-start-input').value = profile.patch.startDate;
  document.getElementById('patch-end-input').value = profile.patch.endDate;
  document.getElementById('active-patch-pill').textContent = profile.patch.version;

  const badge = document.getElementById('patch-countdown-badge');
  if (profile.patch.endDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const end = new Date(profile.patch.endDate + 'T00:00:00');
    const diffDays = Math.ceil((end - today) / (1000 * 60 * 60 * 24));
    if (diffDays > 0) {
      badge.textContent = `${diffDays} Day${diffDays === 1 ? '' : 's'} Left in Patch`;
    } else if (diffDays === 0) {
      badge.textContent = 'Final Day of Patch!';
    } else {
      badge.textContent = `Patch Ended (${Math.abs(diffDays)}d ago)`;
    }
  } else {
    badge.textContent = 'Set Patch Dates';
  }

  // Dynamic Labels across UI
  document.getElementById('btn-log-daily-label').textContent = `Log Daily ${cfg.currencyName}`;
  document.getElementById('kpi-currency-title').textContent = `Current ${cfg.currencyName} Stash`;
  document.getElementById('kpi-currency-unit').textContent = cfg.currencyName;
  document.getElementById('kpi-currency-icon-slot').innerHTML = getIconHtml('currency');
  document.getElementById('kpi-ticket-icon-slot').innerHTML = getIconHtml('limitedTicket');
  document.getElementById('kpi-pulls-unit').textContent = cfg.pullUnit;
  document.getElementById('kpi-avg-unit').textContent = `${cfg.currencyName} / day avg`;
  document.getElementById('chart-heading').innerHTML = `<i class="fa-solid fa-mountain accent-text"></i><span>${cfg.currencyName} Accumulation Mountain Graph</span>`;

  document.getElementById('daily-ledger-title').textContent = `Daily ${cfg.currencyName} & ${cfg.limitedTicketName} Ledger`;
  document.getElementById('th-daily-currency').textContent = `Total ${cfg.currencyName}`;
  document.getElementById('th-daily-tickets').textContent = `Tickets (${cfg.limitedTicketName.split(' ')[0]} / ${cfg.weaponTicketName.split(' ')[0]} / ${cfg.standardTicketName.split(' ')[0]})`;

  // Sample Banner
  const sampleBanner = document.getElementById('sample-banner');
  if (appState.isSampleData) {
    sampleBanner.classList.remove('hidden');
  } else {
    sampleBanner.classList.add('hidden');
  }

  renderCustomizeStudioPreviews();
}

function updatePatchMeta() {
  const profile = getActiveProfile();
  profile.patch.version = document.getElementById('patch-version-input').value.trim() || 'Current Patch';
  profile.patch.startDate = document.getElementById('patch-start-input').value;
  profile.patch.endDate = document.getElementById('patch-end-input').value;
  saveState();
  renderGameIdentityAndLabels();
  renderChart();
}

// =========================================================================
// KPI CALCULATIONS & RENDERING
// =========================================================================
function getSortedLogs() {
  return [...getActiveProfile().dailyLogs].sort((a, b) => a.date.localeCompare(b.date));
}

function calculateMetrics() {
  const cfg = getActiveConfig();
  const profile = getActiveProfile();
  const logs = getSortedLogs();
  const latest = logs.length > 0 ? logs[logs.length - 1] : null;
  const prev = logs.length > 1 ? logs[logs.length - 2] : null;

  const currentCurrency = latest ? Number(latest.astrite) : 0;
  const limitedTickets = latest ? Number(latest.radiant || 0) : 0;
  const weaponTickets = latest ? Number(latest.forging || 0) : 0;
  const standardTickets = latest ? Number(latest.lustrous || 0) : 0;

  const rawCurrencyPulls = currentCurrency / cfg.pullCost;
  const totalLimitedPulls = Math.floor(rawCurrencyPulls) + limitedTickets;
  const lastDelta = (latest && prev) ? (currentCurrency - Number(prev.astrite)) : null;

  let avgDailyGain = 0;
  if (logs.length >= 2) {
    const firstDate = new Date(logs[0].date + 'T00:00:00');
    const lastDate = new Date(latest.date + 'T00:00:00');
    const daySpan = Math.max(1, Math.round((lastDate - firstDate) / (1000 * 60 * 60 * 24)));
    const netTotal = currentCurrency - Number(logs[0].astrite);
    avgDailyGain = Math.round(netTotal / daySpan);
  }

  const sumEventType = (list, type) => list.reduce((sum, ev) => {
    const matches = getEventRewards(ev).filter(r => r.type === type);
    return sum + matches.reduce((s, r) => s + Number(r.claimed || 0), 0);
  }, 0);

  const sumEventTotalType = (list, type) => list.reduce((sum, ev) => {
    const matches = getEventRewards(ev).filter(r => r.type === type);
    return sum + matches.reduce((s, r) => s + Number(r.total || 0), 0);
  }, 0);

  const activeTotal = sumEventTotalType(profile.activeEvents, 'currency');
  const activeClaimed = sumEventType(profile.activeEvents, 'currency');
  const activeRemaining = Math.max(0, activeTotal - activeClaimed);
  const activePct = activeTotal > 0 ? Math.min(100, Math.round((activeClaimed / activeTotal) * 100)) : 0;

  const activeLimitedBonus = sumEventType(profile.activeEvents, 'limitedTicket');
  const archivedClaimed = sumEventType(profile.archivedEvents, 'currency');
  const lifetimeEventCurrency = activeClaimed + archivedClaimed;

  return {
    currentCurrency,
    limitedTickets,
    weaponTickets,
    standardTickets,
    rawCurrencyPulls,
    totalLimitedPulls,
    lastDelta,
    avgDailyGain,
    activeTotal,
    activeClaimed,
    activeRemaining,
    activePct,
    activeLimitedBonus,
    lifetimeEventCurrency
  };
}

function renderKPIs() {
  const cfg = getActiveConfig();
  const profile = getActiveProfile();
  const m = calculateMetrics();

  document.getElementById('kpi-astrite').textContent = m.currentCurrency.toLocaleString();
  document.getElementById('kpi-astrite-pulls').textContent = `${m.rawCurrencyPulls.toFixed(1)} pulls from ${cfg.currencyName}`;

  const deltaEl = document.getElementById('kpi-last-delta');
  if (m.lastDelta === null) {
    deltaEl.textContent = 'First log';
    deltaEl.className = 'font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400';
  } else if (m.lastDelta >= 0) {
    deltaEl.textContent = `+${m.lastDelta.toLocaleString()} last log`;
    deltaEl.className = 'font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30';
  } else {
    deltaEl.textContent = `${m.lastDelta.toLocaleString()} last log`;
    deltaEl.className = 'font-mono px-2 py-0.5 rounded bg-rose-500/15 text-rose-300 border border-rose-500/30';
  }

  const iconLim = getIconHtml('limitedTicket', 'w-4 h-4 shrink-0');
  const iconWeap = getIconHtml('weaponTicket', 'w-3.5 h-3.5 shrink-0');
  const iconStd = getIconHtml('standardTicket', 'w-3.5 h-3.5 shrink-0');

  document.getElementById('kpi-total-pulls').textContent = m.totalLimitedPulls.toLocaleString();
  document.getElementById('kpi-radiant-tides').innerHTML = `${iconLim}<span>${m.limitedTickets} ${escapeHtml(cfg.limitedTicketName)}</span>`;
  document.getElementById('kpi-other-tides').innerHTML = `
    <span class="inline-flex items-center gap-1" title="${escapeHtml(cfg.weaponTicketName)}">${iconWeap}${m.weaponTickets}</span>
    <span class="text-slate-600">/</span>
    <span class="inline-flex items-center gap-1" title="${escapeHtml(cfg.standardTicketName)}">${iconStd}${m.standardTickets}</span>
  `;

  document.getElementById('kpi-event-claimed').textContent = m.activeClaimed.toLocaleString();
  document.getElementById('kpi-event-total').textContent = `/ ${m.activeTotal.toLocaleString()}`;
  document.getElementById('kpi-event-pct').textContent = `${m.activePct}%`;
  document.getElementById('kpi-event-bar').style.width = `${m.activePct}%`;
  document.getElementById('kpi-event-remaining').textContent = m.activeLimitedBonus > 0
    ? `${m.activeRemaining.toLocaleString()} ${cfg.currencyName} • +${m.activeLimitedBonus} ${cfg.limitedTicketName}`
    : `${m.activeRemaining.toLocaleString()} ${cfg.currencyName} left`;
  document.getElementById('kpi-event-count').textContent = `${profile.activeEvents.length} event${profile.activeEvents.length === 1 ? '' : 's'}`;

  const avgEl = document.getElementById('kpi-avg-daily');
  avgEl.textContent = `${m.avgDailyGain >= 0 ? '+' : ''}${m.avgDailyGain.toLocaleString()}`;
  avgEl.className = `text-2xl font-extrabold font-mono ${m.avgDailyGain >= 0 ? 'text-emerald-300' : 'text-rose-300'}`;

  document.getElementById('kpi-lifetime-events').textContent = `${m.lifetimeEventCurrency.toLocaleString()} ${cfg.currencyName}`;

  document.getElementById('badge-active-events').textContent = profile.activeEvents.length;
  document.getElementById('badge-daily-logs').textContent = profile.dailyLogs.length;

  renderPityCalculator();
}

// =========================================================================
// MOUNTAIN GRAPH (CHART.JS AREA CHART)
// =========================================================================
function setChartFilter(filter) {
  currentChartFilter = filter;
  document.querySelectorAll('.chart-filter-btn').forEach(btn => {
    btn.className = 'chart-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white transition cursor-pointer';
  });
  const activeBtn = document.getElementById(`filter-${filter}`);
  if (activeBtn) {
    activeBtn.className = 'chart-filter-btn px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer accent-bg-soft accent-text border';
  }
  renderChart();
}

function renderChart() {
  const cfg = getActiveConfig();
  const profile = getActiveProfile();
  const accentHex = profile.media?.accentColor || cfg.defaultAccent;
  const rgb = hexToRgbTuple(accentHex);

  const ctx = document.getElementById('astriteMountainChart').getContext('2d');
  let logs = getSortedLogs();

  if (currentChartFilter === 'patch') {
    logs = logs.filter(l => l.patch.toLowerCase() === profile.patch.version.toLowerCase());
  } else if (currentChartFilter === '14d') {
    const cutoff = getRelativeDateStr(-14);
    logs = logs.filter(l => l.date >= cutoff);
  }

  const labels = logs.map(l => l.date);
  const dataPoints = logs.map(l => Number(l.astrite));

  const gradient = ctx.createLinearGradient(0, 0, 0, 320);
  gradient.addColorStop(0, `rgba(${rgb}, 0.46)`);
  gradient.addColorStop(0.65, `rgba(${rgb}, 0.12)`);
  gradient.addColorStop(1, `rgba(${rgb}, 0.0)`);

  if (mountainChart) {
    mountainChart.destroy();
  }

  const isLight = appState.ui.theme === 'daylight';
  const gridColor = isLight ? 'rgba(148, 163, 184, 0.25)' : 'rgba(30, 44, 71, 0.45)';
  const tickColor = isLight ? '#475569' : '#94a3b8';

  mountainChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels.length ? labels : ['No Entries Yet'],
      datasets: [{
        label: `${cfg.currencyName} Stash`,
        data: dataPoints.length ? dataPoints : [0],
        borderColor: accentHex,
        borderWidth: 2.5,
        backgroundColor: gradient,
        fill: true,
        tension: 0.32,
        pointBackgroundColor: isLight ? '#ffffff' : '#0f1624',
        pointBorderColor: accentHex,
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: '#fbbf24',
        pointHoverBorderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(15, 22, 36, 0.95)',
          titleColor: '#94a3b8',
          bodyColor: '#f8fafc',
          borderColor: `rgba(${rgb}, 0.45)`,
          borderWidth: 1,
          padding: 12,
          displayColors: false,
          callbacks: {
            title: (items) => {
              const entry = logs[items[0].dataIndex];
              return entry ? `${entry.date}  •  ${entry.patch}` : 'No Data';
            },
            label: (item) => {
              const idx = item.dataIndex;
              const entry = logs[idx];
              if (!entry) return `Log your first ${cfg.currencyName} balance!`;
              const val = Number(entry.astrite);
              const pulls = (val / cfg.pullCost).toFixed(1);
              const lines = [`${cfg.currencyName}: ${val.toLocaleString()} (${pulls} pulls)`];
              if (idx > 0) {
                const diff = val - Number(logs[idx - 1].astrite);
                lines.push(`Daily Change: ${diff >= 0 ? '+' : ''}${diff.toLocaleString()}`);
              }
              if (entry.note) lines.push(`Note: ${entry.note}`);
              return lines;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: gridColor, drawBorder: false },
          ticks: { color: tickColor, font: { family: 'JetBrains Mono', size: 11 } }
        },
        y: {
          beginAtZero: false,
          grid: { color: gridColor, drawBorder: false },
          ticks: {
            color: tickColor,
            font: { family: 'JetBrains Mono', size: 11 },
            callback: (val) => val.toLocaleString()
          }
        }
      }
    }
  });
}

// =========================================================================
// TAB NAVIGATION
// =========================================================================
function switchMainTab(tabName) {
  ['events', 'daily', 'pity'].forEach(t => {
    const panel = document.getElementById(`tab-panel-${t}`);
    const btn = document.getElementById(`tab-btn-${t}`);
    if (t === tabName) {
      panel.classList.remove('hidden');
      btn.className = 'main-tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer accent-bg-soft accent-text border flex items-center gap-2';
    } else {
      panel.classList.add('hidden');
      btn.className = 'main-tab-btn px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-400 hover:text-white bg-slate-900/60 border border-slate-800 transition cursor-pointer flex items-center gap-2';
    }
  });
}

// =========================================================================
// DAILY BALANCE LOG CRUD & TABLE RENDERING
// =========================================================================
function openDailyModal(editId = null) {
  const cfg = getActiveConfig();
  const profile = getActiveProfile();
  const modal = document.getElementById('daily-modal');
  document.getElementById('daily-edit-id').value = editId || '';

  document.getElementById('modal-daily-icon-slot').innerHTML = getIconHtml('currency');
  document.getElementById('daily-currency-input-label').textContent = `Total ${cfg.currencyName} Owned Right Now`;
  document.getElementById('daily-limited-label').textContent = cfg.limitedTicketName;
  document.getElementById('daily-weapon-label').textContent = cfg.weaponTicketName;
  document.getElementById('daily-standard-label').textContent = cfg.standardTicketName;

  if (editId) {
    const entry = profile.dailyLogs.find(d => d.id === editId);
    if (!entry) return;
    document.getElementById('modal-daily-heading').textContent = `Edit Daily ${cfg.currencyName} Entry`;
    document.getElementById('daily-date').value = entry.date;
    document.getElementById('daily-patch').value = entry.patch;
    document.getElementById('daily-astrite').value = entry.astrite;
    document.getElementById('daily-radiant').value = entry.radiant || 0;
    document.getElementById('daily-forging').value = entry.forging || 0;
    document.getElementById('daily-lustrous').value = entry.lustrous || 0;
    document.getElementById('daily-note').value = entry.note || '';
  } else {
    const logs = getSortedLogs();
    const latest = logs.length ? logs[logs.length - 1] : null;
    document.getElementById('modal-daily-heading').textContent = `Log Daily ${cfg.currencyName} Balance`;
    document.getElementById('daily-date').value = getRelativeDateStr(0);
    document.getElementById('daily-patch').value = profile.patch.version;
    document.getElementById('daily-astrite').value = latest ? latest.astrite : '';
    document.getElementById('daily-radiant').value = latest ? (latest.radiant || 0) : 0;
    document.getElementById('daily-forging').value = latest ? (latest.forging || 0) : 0;
    document.getElementById('daily-lustrous').value = latest ? (latest.lustrous || 0) : 0;
    document.getElementById('daily-note').value = '';
  }
  enhanceCustomControls();
  modal.classList.remove('hidden');
}

function closeDailyModal() {
  document.getElementById('daily-modal').classList.add('hidden');
}

function saveDailyEntry(e) {
  e.preventDefault();
  const cfg = getActiveConfig();
  const profile = getActiveProfile();
  const editId = document.getElementById('daily-edit-id').value;
  const date = document.getElementById('daily-date').value;
  const patch = document.getElementById('daily-patch').value.trim() || profile.patch.version;
  const astrite = Math.max(0, parseInt(document.getElementById('daily-astrite').value, 10) || 0);
  const radiant = Math.max(0, parseInt(document.getElementById('daily-radiant').value, 10) || 0);
  const forging = Math.max(0, parseInt(document.getElementById('daily-forging').value, 10) || 0);
  const lustrous = Math.max(0, parseInt(document.getElementById('daily-lustrous').value, 10) || 0);
  const note = document.getElementById('daily-note').value.trim();

  if (editId) {
    const idx = profile.dailyLogs.findIndex(d => d.id === editId);
    if (idx !== -1) {
      profile.dailyLogs[idx] = { id: editId, date, patch, astrite, radiant, forging, lustrous, note };
    }
    showToast('Daily entry updated.', 'success');
  } else {
    const existingIdx = profile.dailyLogs.findIndex(d => d.date === date);
    if (existingIdx !== -1) {
      profile.dailyLogs[existingIdx] = { ...profile.dailyLogs[existingIdx], patch, astrite, radiant, forging, lustrous, note };
      showToast(`Updated existing log for ${date}.`, 'success');
    } else {
      profile.dailyLogs.push({
        id: 'd_' + Date.now(),
        date,
        patch,
        astrite,
        radiant,
        forging,
        lustrous,
        note
      });
      showToast(`Logged ${astrite.toLocaleString()} ${cfg.currencyName} for ${date}!`, 'success');
    }
  }

  saveState();
  closeDailyModal();
  renderAll();
}

function deleteDailyEntry(id) {
  const profile = getActiveProfile();
  profile.dailyLogs = profile.dailyLogs.filter(d => d.id !== id);
  saveState();
  renderAll();
  showToast('Daily entry removed.', 'info');
}

function renderDailyTable() {
  const cfg = getActiveConfig();
  const tbody = document.getElementById('daily-table-body');
  const ascLogs = getSortedLogs();

  if (ascLogs.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="8" class="py-10 text-center text-slate-400">
          No daily logs recorded yet for ${escapeHtml(cfg.name)}. Click <strong class="accent-text">+ Log Daily ${escapeHtml(cfg.currencyName)}</strong> to record today's balance!
        </td>
      </tr>`;
    return;
  }

  const enriched = ascLogs.map((entry, idx) => {
    const delta = idx === 0 ? null : Number(entry.astrite) - Number(ascLogs[idx - 1].astrite);
    const totalPulls = Math.floor(Number(entry.astrite) / cfg.pullCost) + Number(entry.radiant || 0);
    return { ...entry, delta, totalPulls };
  }).reverse();

  tbody.innerHTML = enriched.map(row => {
    let deltaHtml = '<span class="text-slate-500 font-mono">Baseline</span>';
    if (row.delta !== null) {
      if (row.delta > 0) {
        deltaHtml = `<span class="font-mono font-bold text-emerald-400">+${row.delta.toLocaleString()}</span>`;
      } else if (row.delta < 0) {
        deltaHtml = `<span class="font-mono font-bold text-rose-400">${row.delta.toLocaleString()}</span>`;
      } else {
        deltaHtml = `<span class="font-mono text-slate-400">0</span>`;
      }
    }

    return `
      <tr class="hover:bg-slate-800/40 transition">
        <td class="py-3 px-4 font-mono text-slate-200 whitespace-nowrap">${row.date}</td>
        <td class="py-3 px-4 whitespace-nowrap">
          <span class="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 accent-text border border-slate-700">${escapeHtml(row.patch)}</span>
        </td>
        <td class="py-3 px-4 text-right font-mono font-bold accent-text whitespace-nowrap">${Number(row.astrite).toLocaleString()}</td>
        <td class="py-3 px-4 text-right whitespace-nowrap">${deltaHtml}</td>
        <td class="py-3 px-4 text-right font-mono text-slate-300 whitespace-nowrap">
          <div class="inline-flex items-center justify-end gap-2">
            <span class="inline-flex items-center gap-1 text-amber-300 font-semibold" title="${escapeHtml(cfg.limitedTicketName)}">
              <span class="w-4 h-4 inline-flex items-center justify-center">${getIconHtml('limitedTicket', 'w-4 h-4')}</span>
              <span>${row.radiant || 0}</span>
            </span>
            <span class="text-slate-600">/</span>
            <span class="inline-flex items-center gap-1 text-cyan-300 font-semibold" title="${escapeHtml(cfg.weaponTicketName)}">
              <span class="w-4 h-4 inline-flex items-center justify-center">${getIconHtml('weaponTicket', 'w-4 h-4')}</span>
              <span>${row.forging || 0}</span>
            </span>
            <span class="text-slate-600">/</span>
            <span class="inline-flex items-center gap-1 text-slate-300 font-semibold" title="${escapeHtml(cfg.standardTicketName)}">
              <span class="w-4 h-4 inline-flex items-center justify-center">${getIconHtml('standardTicket', 'w-4 h-4')}</span>
              <span>${row.lustrous || 0}</span>
            </span>
          </div>
        </td>
        <td class="py-3 px-4 text-right font-mono font-bold text-amber-300 whitespace-nowrap">${row.totalPulls} pulls</td>
        <td class="py-3 px-4 text-slate-400 max-w-xs truncate">${escapeHtml(row.note || '—')}</td>
        <td class="py-3 px-4 text-right whitespace-nowrap">
          <button onclick="openDailyModal('${row.id}')" class="p-1.5 text-slate-400 hover:text-white transition cursor-pointer" title="Edit">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button onclick="deleteDailyEntry('${row.id}')" class="p-1.5 text-slate-400 hover:text-rose-400 transition cursor-pointer" title="Delete">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// =========================================================================
// ACTIVE EVENTS (WITH LOCAL EVENT IMAGES) & ARCHIVE VAULT
// =========================================================================
let eventImgState = { posX: 50, posY: 35, zoom: 100, height: 'md' };

function getAllEventCategories() {
  return [...new Set([...DEFAULT_EVENT_CATEGORIES, ...(appState.customCategories || [])])];
}

function populateEventCategorySelect(selectedValue = 'Flagship Event') {
  const select = document.getElementById('event-category');
  const cats = getAllEventCategories();
  if (selectedValue && !cats.includes(selectedValue)) cats.push(selectedValue);
  select.innerHTML = cats.map(c =>
    `<option value="${escapeHtml(c)}" ${c === selectedValue ? 'selected' : ''}>${escapeHtml(c)}</option>`
  ).join('');
  syncCustomSelectDisplay(select);
}

function toggleNewCategoryBox(forceState) {
  const box = document.getElementById('new-category-box');
  const show = typeof forceState === 'boolean' ? forceState : box.classList.contains('hidden');
  box.classList.toggle('hidden', !show);
  if (show) {
    const inp = document.getElementById('new-category-input');
    inp.value = '';
    inp.focus();
  }
}

function deleteCustomEventCategory(catName) {
  appState.customCategories = (appState.customCategories || []).filter(c => c !== catName);
  saveState();
  const curSel = document.getElementById('event-category').value;
  populateEventCategorySelect(curSel === catName ? 'Flagship Event' : curSel);
  renderCustomCategoryChips();
  renderArchiveTable();
  showToast(`Removed event tag "${catName}".`, 'info');
}

function renderCustomCategoryChips() {
  const container = document.getElementById('custom-category-chips');
  if (!container) return;
  const custom = appState.customCategories || [];
  if (custom.length === 0) {
    container.innerHTML = `<span class="text-[10px] text-slate-500">Custom tags you add appear here and can be removed anytime.</span>`;
    return;
  }
  container.innerHTML = custom.map(c => `
    <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-slate-800 border border-slate-700 text-[11px] text-slate-200">
      <span>${escapeHtml(c)}</span>
      <button type="button" onclick="deleteCustomEventCategory('${escapeHtml(c).replace(/'/g, "\'")}')"
        class="text-slate-400 hover:text-rose-400 cursor-pointer leading-none" title="Remove Tag">
        <i class="fa-solid fa-xmark text-[10px]"></i>
      </button>
    </span>
  `).join('');
}

function saveNewEventCategory() {
  const inp = document.getElementById('new-category-input');
  const val = inp.value.trim();
  if (!val) return;
  if (!Array.isArray(appState.customCategories)) appState.customCategories = [];
  if (!getAllEventCategories().some(c => c.toLowerCase() === val.toLowerCase())) {
    appState.customCategories.push(val);
    saveState();
  }
  populateEventCategorySelect(val);
  renderCustomCategoryChips();
  inp.value = '';
  showToast(`Saved event type "${val}" for current & future patches!`, 'success');
}

function setEventBannerHeight(size) {
  eventImgState.height = ['sm', 'md', 'lg'].includes(size) ? size : 'md';
  const stage = document.getElementById('event-banner-stage');
  const heightMap = { sm: 'h-28', md: 'h-36', lg: 'h-48' };
  stage.classList.remove('h-28', 'h-36', 'h-48');
  stage.classList.add(heightMap[eventImgState.height]);

  ['sm', 'md', 'lg'].forEach(k => {
    const btn = document.getElementById(`ev-h-${k}`);
    if (k === eventImgState.height) {
      btn.className = 'ev-h-btn px-2 py-0.5 rounded-md text-[10px] font-semibold accent-bg-soft accent-text cursor-pointer';
    } else {
      btn.className = 'ev-h-btn px-2 py-0.5 rounded-md text-[10px] font-semibold text-slate-400 hover:text-white cursor-pointer';
    }
  });
}

function updateEventImageTransform() {
  const zoomSlider = document.getElementById('event-img-zoom');
  eventImgState.zoom = Number(zoomSlider.value || 100);
  document.getElementById('event-img-zoom-val').textContent = `${eventImgState.zoom}%`;

  const preview = document.getElementById('event-image-preview');
  const scale = (eventImgState.zoom / 100).toFixed(2);
  preview.style.objectPosition = `${eventImgState.posX}% ${eventImgState.posY}%`;
  preview.style.transformOrigin = `${eventImgState.posX}% ${eventImgState.posY}%`;
  preview.style.transform = `scale(${scale})`;
}

function resetEventImageFraming() {
  eventImgState.posX = 50;
  eventImgState.posY = 35;
  eventImgState.zoom = 100;
  document.getElementById('event-img-zoom').value = 100;
  setEventBannerHeight('md');
  updateEventImageTransform();
}

function initEventImageDragCrop() {
  const stage = document.getElementById('event-banner-stage');
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let originPosX = 50;
  let originPosY = 35;

  const onPointerDown = (e) => {
    if (!pendingEventImageDataUrl || e.target.closest('button')) return;
    if (!e.touches && e.button !== 0) return;
    e.preventDefault();
    isDragging = true;
    const pt = e.touches ? e.touches[0] : e;
    startX = pt.clientX;
    startY = pt.clientY;
    originPosX = eventImgState.posX;
    originPosY = eventImgState.posY;
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const pt = e.touches ? e.touches[0] : e;
    const rect = stage.getBoundingClientRect();
    const zoomFactor = Math.max(1, (eventImgState.zoom || 100) / 100);
    const dxPct = (((pt.clientX - startX) / Math.max(1, rect.width)) * 100) / zoomFactor;
    const dyPct = (((pt.clientY - startY) / Math.max(1, rect.height)) * 100) / zoomFactor;
    eventImgState.posX = Math.max(0, Math.min(100, Math.round(originPosX - dxPct)));
    eventImgState.posY = Math.max(0, Math.min(100, Math.round(originPosY - dyPct)));
    updateEventImageTransform();
  };

  const onPointerUp = () => {
    isDragging = false;
  };

  stage.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);

  stage.addEventListener('touchstart', onPointerDown, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });
  window.addEventListener('touchend', onPointerUp);
}

function setEventModalPreview(dataUrl, posX = 50, posY = 35, zoom = 100, height = 'md') {
  pendingEventImageDataUrl = dataUrl || null;
  eventImgState = { posX, posY, zoom, height };

  const stage = document.getElementById('event-banner-stage');
  const preview = document.getElementById('event-image-preview');
  const placeholder = document.getElementById('event-image-placeholder');
  const clearBtn = document.getElementById('event-image-clear-btn');
  const dragHint = document.getElementById('event-drag-hint');
  const posControls = document.getElementById('event-image-position-controls');
  const chooseLabel = document.getElementById('event-choose-img-label');

  document.getElementById('event-img-zoom').value = zoom;
  setEventBannerHeight(height);
  updateEventImageTransform();

  if (pendingEventImageDataUrl) {
    preview.src = pendingEventImageDataUrl;
    preview.classList.remove('hidden');
    placeholder.classList.add('hidden');
    clearBtn.classList.remove('hidden');
    dragHint.classList.remove('hidden');
    posControls.classList.remove('hidden');
    stage.classList.add('banner-crop-stage');
    chooseLabel.textContent = 'Replace Image';
  } else {
    preview.src = '';
    preview.classList.add('hidden');
    placeholder.classList.remove('hidden');
    clearBtn.classList.add('hidden');
    dragHint.classList.add('hidden');
    posControls.classList.add('hidden');
    stage.classList.remove('banner-crop-stage');
    chooseLabel.textContent = 'Choose Image';
  }
}

async function handleEventModalImageSelect(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const compressed = await compressImageFile(file, 720, 340, 0.84);
    setEventModalPreview(compressed, 50, 35, 100, eventImgState.height || 'md');
  } catch (err) {
    showToast(err.message || 'Could not load event image.', 'error');
  }
  event.target.value = '';
}

function clearEventModalImage() {
  setEventModalPreview(null, 50, 35, 100, 'md');
}

async function quickUploadEventCardImage(event, eventId) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const compressed = await compressImageFile(file, 720, 340, 0.84);
    const profile = getActiveProfile();
    const idx = profile.activeEvents.findIndex(e => e.id === eventId);
    if (idx !== -1) {
      profile.activeEvents[idx].image = compressed;
      profile.activeEvents[idx].imagePosX = 50;
      profile.activeEvents[idx].imagePosY = 35;
      profile.activeEvents[idx].imageZoom = 100;
      profile.activeEvents[idx].imageHeight = profile.activeEvents[idx].imageHeight || 'md';
      saveState();
      renderActiveEvents();
      showToast('Event banner updated! Click Edit to drag & zoom.', 'success');
    }
  } catch (err) {
    showToast(err.message || 'Image upload failed.', 'error');
  }
  event.target.value = '';
}

function addEventRewardRow(reward = { type: 'currency', total: '', claimed: 0 }) {
  const container = document.getElementById('event-rewards-list');
  const row = document.createElement('div');
  row.className = 'event-reward-row p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2';

  const types = ['currency', 'limitedTicket', 'weaponTicket', 'standardTicket'];
  const optionsHtml = types.map(t =>
    `<option value="${t}" ${reward.type === t ? 'selected' : ''}>${escapeHtml(getRewardLabel(t))}</option>`
  ).join('');

  row.innerHTML = `
    <div class="flex items-center gap-2">
      <select class="reward-type-select flex-1 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none">
        ${optionsHtml}
      </select>
      <button type="button" onclick="removeEventRewardRow(this)" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 cursor-pointer" title="Remove Reward">
        <i class="fa-solid fa-trash text-xs"></i>
      </button>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <div>
        <label class="block text-[10px] text-amber-300 mb-0.5">Total Reward</label>
        <input type="number" min="0" step="1" required value="${reward.total}" placeholder="e.g., 1200"
          class="reward-total-input w-full bg-slate-800 border border-amber-500/35 rounded-lg px-2.5 py-1.5 text-xs font-mono font-bold text-amber-300 focus:outline-none" />
      </div>
      <div>
        <label class="block text-[10px] accent-text mb-0.5">Claimed So Far</label>
        <input type="number" min="0" step="1" required value="${reward.claimed ?? 0}"
          class="reward-claimed-input w-full bg-slate-800 border accent-border rounded-lg px-2.5 py-1.5 text-xs font-mono font-bold accent-text focus:outline-none" />
      </div>
    </div>
  `;
  container.appendChild(row);
  enhanceCustomControls();
}

function removeEventRewardRow(btn) {
  const container = document.getElementById('event-rewards-list');
  if (container.children.length <= 1) {
    showToast('An event needs at least one reward row.', 'info');
    return;
  }
  btn.closest('.event-reward-row').remove();
}

function openEventModal(editId = null) {
  const profile = getActiveProfile();
  const modal = document.getElementById('event-modal');
  const title = document.getElementById('event-modal-title');
  const rewardsList = document.getElementById('event-rewards-list');
  document.getElementById('event-edit-id').value = editId || '';
  rewardsList.innerHTML = '';
  toggleNewCategoryBox(false);
  renderCustomCategoryChips();

  if (editId) {
    const ev = profile.activeEvents.find(e => e.id === editId);
    if (!ev) return;
    title.innerHTML = '<i class="fa-solid fa-pen text-amber-400"></i> Edit Event';
    document.getElementById('event-name').value = ev.name;
    populateEventCategorySelect(ev.category);
    document.getElementById('event-patch').value = ev.patch;
    document.getElementById('event-start').value = ev.startDate;
    document.getElementById('event-end').value = ev.endDate;
    document.getElementById('event-is-recurring').checked = Boolean(ev.isRecurring);
    getEventRewards(ev).forEach(r => addEventRewardRow(r));
    setEventModalPreview(ev.image || null, ev.imagePosX ?? 50, ev.imagePosY ?? 35, ev.imageZoom ?? 100, ev.imageHeight || 'md');
  } else {
    title.innerHTML = '<i class="fa-solid fa-calendar-plus text-amber-400"></i> Add Patch Event';
    document.getElementById('event-name').value = '';
    populateEventCategorySelect('Flagship Event');
    document.getElementById('event-patch').value = profile.patch.version;
    document.getElementById('event-start').value = getRelativeDateStr(0);
    document.getElementById('event-end').value = getRelativeDateStr(14);
    document.getElementById('event-is-recurring').checked = false;
    addEventRewardRow({ type: 'currency', total: '', claimed: 0 });
    setEventModalPreview(null, 50, 35, 100, 'md');
  }
  enhanceCustomControls();
  modal.classList.remove('hidden');
}

function closeEventModal() {
  document.getElementById('event-modal').classList.add('hidden');
}

function saveEventEntry(e) {
  e.preventDefault();
  const profile = getActiveProfile();
  const editId = document.getElementById('event-edit-id').value;
  const name = document.getElementById('event-name').value.trim();
  const category = document.getElementById('event-category').value;
  const patch = document.getElementById('event-patch').value.trim() || profile.patch.version;
  const startDate = document.getElementById('event-start').value;
  const endDate = document.getElementById('event-end').value;
  const isRecurring = document.getElementById('event-is-recurring').checked;

  const rewards = [...document.querySelectorAll('#event-rewards-list .event-reward-row')].map(row => ({
    type: row.querySelector('.reward-type-select').value,
    total: Math.max(0, parseInt(row.querySelector('.reward-total-input').value, 10) || 0),
    claimed: Math.max(0, parseInt(row.querySelector('.reward-claimed-input').value, 10) || 0)
  }));

  const entryData = syncEventLegacyTotals({
    id: editId || ('ev_' + Date.now()),
    name,
    category,
    patch,
    startDate,
    endDate,
    isRecurring,
    rewards,
    image: pendingEventImageDataUrl,
    imagePosX: eventImgState.posX,
    imagePosY: eventImgState.posY,
    imageZoom: eventImgState.zoom,
    imageHeight: eventImgState.height
  });

  if (editId) {
    const idx = profile.activeEvents.findIndex(ev => ev.id === editId);
    if (idx !== -1) profile.activeEvents[idx] = entryData;
    showToast('Event updated.', 'success');
  } else {
    profile.activeEvents.push(entryData);
    showToast(`Added "${name}" with ${rewards.length} reward type(s).`, 'success');
  }

  saveState();
  closeEventModal();
  renderAll();
}

function cloneEventToCurrentPatch(eventId, fromArchive = false) {
  const profile = getActiveProfile();
  const sourceList = fromArchive ? profile.archivedEvents : profile.activeEvents;
  const src = sourceList.find(e => e.id === eventId);
  if (!src) return;

  const resetRewards = getEventRewards(src).map(r => ({
    type: r.type,
    total: r.total,
    claimed: 0
  }));

  const cloned = syncEventLegacyTotals({
    ...src,
    id: 'ev_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
    patch: profile.patch.version,
    startDate: profile.patch.startDate || getRelativeDateStr(0),
    endDate: profile.patch.endDate || getRelativeDateStr(14),
    rewards: resetRewards
  });

  profile.activeEvents.push(cloned);
  saveState();
  renderAll();
  showToast(`Cloned "${src.name}" into ${profile.patch.version} (reset to 0 claimed)!`, 'success');
}

function openQuickClaimModal(eventId) {
  const profile = getActiveProfile();
  const ev = profile.activeEvents.find(e => e.id === eventId);
  if (!ev) return;
  const rewards = getEventRewards(ev);
  document.getElementById('quick-claim-event-id').value = ev.id;
  document.getElementById('quick-claim-event-name').textContent = ev.name;
  document.getElementById('quick-claim-event-max').textContent = `${rewards.length} reward track(s) on this event`;

  document.getElementById('quick-claim-rows').innerHTML = rewards.map((r, i) => `
    <div class="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800" data-reward-idx="${i}">
      <div class="flex items-center justify-between text-xs mb-1">
        <span class="font-semibold text-slate-200 inline-flex items-center gap-1.5">
          <span class="w-4 h-4 inline-flex items-center justify-center">${getIconHtml(r.type, 'w-4 h-4')}</span>
          ${escapeHtml(getRewardLabel(r.type))}
        </span>
        <span class="font-mono text-slate-400">Max: ${r.total.toLocaleString()}</span>
      </div>
      <div class="flex gap-2">
        <input type="number" min="0" step="1" required value="${r.claimed}"
          class="qc-val-input w-full bg-slate-800 border accent-border rounded-lg px-3 py-1.5 text-sm font-mono font-bold accent-text focus:outline-none" />
        <button type="button" onclick="this.previousElementSibling.value = ${r.total}"
          class="px-2.5 py-1.5 rounded-lg accent-bg-soft border text-xs font-bold accent-text cursor-pointer">
          Max
        </button>
      </div>
    </div>
  `).join('');

  document.getElementById('quick-claim-modal').classList.remove('hidden');
}

function closeQuickClaimModal() {
  document.getElementById('quick-claim-modal').classList.add('hidden');
}

function submitQuickClaim(e) {
  e.preventDefault();
  const profile = getActiveProfile();
  const id = document.getElementById('quick-claim-event-id').value;
  const idx = profile.activeEvents.findIndex(ev => ev.id === id);
  if (idx !== -1) {
    const rewards = getEventRewards(profile.activeEvents[idx]);
    const inputs = [...document.querySelectorAll('#quick-claim-rows .qc-val-input')];
    rewards.forEach((r, i) => {
      r.claimed = Math.max(0, parseInt(inputs[i]?.value, 10) || 0);
    });
    profile.activeEvents[idx].rewards = rewards;
    syncEventLegacyTotals(profile.activeEvents[idx]);
    saveState();
    renderAll();
    showToast('Event rewards updated!', 'success');
  }
  closeQuickClaimModal();
}

function claimFullEvent(id) {
  const profile = getActiveProfile();
  const idx = profile.activeEvents.findIndex(ev => ev.id === id);
  if (idx !== -1) {
    const rewards = getEventRewards(profile.activeEvents[idx]).map(r => ({ ...r, claimed: r.total }));
    profile.activeEvents[idx].rewards = rewards;
    syncEventLegacyTotals(profile.activeEvents[idx]);
    saveState();
    renderAll();
    showToast(`Marked "${profile.activeEvents[idx].name}" 100% claimed!`, 'success');
  }
}

function deleteActiveEvent(id) {
  const profile = getActiveProfile();
  profile.activeEvents = profile.activeEvents.filter(ev => ev.id !== id);
  saveState();
  renderAll();
  showToast('Event deleted.', 'info');
}

function getEventDurationStats(startDate, endDate) {
  const s = new Date(startDate + 'T00:00:00');
  const e = new Date(endDate + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const durationDays = Math.max(1, Math.round((e - s) / (1000 * 60 * 60 * 24)) + 1);
  const daysLeft = Math.ceil((e - today) / (1000 * 60 * 60 * 24));
  const daysUntilStart = Math.ceil((s - today) / (1000 * 60 * 60 * 24));
  return { durationDays, daysLeft, daysUntilStart };
}

function renderActiveEvents() {
  const profile = getActiveProfile();
  const grid = document.getElementById('active-events-grid');

  if (profile.activeEvents.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full py-10 text-center rounded-xl border border-dashed border-slate-700 bg-slate-900/40">
        <p class="text-sm text-slate-300 font-medium">No active events in ${escapeHtml(profile.patch.version)} yet.</p>
        <p class="text-xs text-slate-400 mt-1">Click <strong class="accent-text">+ Add Event</strong> to track flagship events, endgame resets, or login bonuses.</p>
      </div>`;
    return;
  }

  // Events that haven't started yet go to the bottom (soonest first); the rest keep their original order.
  const sortedEvents = profile.activeEvents
    .map((ev, idx) => ({ ev, idx, until: getEventDurationStats(ev.startDate, ev.endDate).daysUntilStart }))
    .sort((a, b) => {
      const aUp = a.until > 0;
      const bUp = b.until > 0;
      if (aUp !== bUp) return aUp ? 1 : -1;
      if (aUp && bUp && a.until !== b.until) return a.until - b.until;
      return a.idx - b.idx;
    })
    .map(x => x.ev);

  grid.innerHTML = sortedEvents.map(ev => {
    const rewards = getEventRewards(ev);
    const totalSum = rewards.reduce((s, r) => s + r.total, 0);
    const isComplete = rewards.length > 0 && rewards.every(r => r.claimed >= r.total && r.total > 0);
    const { durationDays, daysLeft, daysUntilStart } = getEventDurationStats(ev.startDate, ev.endDate);
    const isUpcoming = daysUntilStart > 0;
    const posX = ev.imagePosX ?? 50;
    const posY = ev.imagePosY ?? 35;
    const zoomScale = ((ev.imageZoom ?? 100) / 100).toFixed(2);
    const hClass = ev.imageHeight === 'sm' ? 'h-24' : (ev.imageHeight === 'lg' ? 'h-44' : 'h-32');

    const recurringBadge = ev.isRecurring
      ? `<span title="Recurring Reset Event" class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/35"><i class="fa-solid fa-arrows-rotate"></i> Reset</span>`
      : '';

    let timeBadge = '';
    if (isUpcoming) {
      timeBadge = `<span class="text-[11px] font-mono text-sky-300 bg-slate-950/75 px-2 py-0.5 rounded-md border border-sky-400/25">Starts in ${daysUntilStart}d</span>`;
    } else if (daysLeft > 0) {
      timeBadge = `<span class="text-[11px] font-mono text-amber-300 bg-slate-950/75 px-2 py-0.5 rounded-md border border-amber-400/25">${daysLeft}d left</span>`;
    } else if (daysLeft === 0) {
      timeBadge = `<span class="text-[11px] font-mono text-rose-300 font-bold bg-rose-950/80 px-2 py-0.5 rounded-md border border-rose-400/30">Ends today</span>`;
    } else {
      timeBadge = `<span class="text-[11px] font-mono text-slate-400 bg-slate-950/75 px-2 py-0.5 rounded-md">Ended</span>`;
    }

    const bannerSection = ev.image
      ? `<div class="relative ${hClass} w-full overflow-hidden group/evimg">
           <img src="${ev.image}" alt="${escapeHtml(ev.name)}" style="object-position: ${posX}% ${posY}%; transform-origin: ${posX}% ${posY}%; transform: scale(${zoomScale});" class="w-full h-full object-cover event-banner-mask" />
           <div class="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-slate-950/45 to-transparent pointer-events-none"></div>
           <div class="absolute top-2.5 left-2.5 flex items-center gap-1.5 flex-wrap">
             <span class="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm accent-text border border-white/10">
               ${escapeHtml(ev.category)}
             </span>
             ${recurringBadge}
           </div>
           <div class="absolute top-2.5 right-2.5 flex items-center gap-1">
             ${timeBadge}
             <label title="Change Event Image" class="p-1.5 rounded-lg bg-slate-950/80 hover:bg-slate-900 text-slate-200 cursor-pointer border border-white/10">
               <i class="fa-solid fa-camera text-[10px]"></i>
               <input type="file" accept="image/*" class="hidden" onchange="quickUploadEventCardImage(event, '${ev.id}')" />
             </label>
           </div>
         </div>`
      : `<div class="px-4 pt-3.5 flex items-center justify-between gap-2">
           <div class="flex items-center gap-1.5 flex-wrap">
             <span class="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 accent-text border border-slate-700">
               ${escapeHtml(ev.category)}
             </span>
             ${recurringBadge}
           </div>
           <div class="flex items-center gap-1.5">
             ${timeBadge}
             <label title="Upload Event Banner Image" class="p-1.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-slate-300 hover:text-white cursor-pointer border border-slate-700">
               <i class="fa-regular fa-image text-xs"></i>
               <input type="file" accept="image/*" class="hidden" onchange="quickUploadEventCardImage(event, '${ev.id}')" />
             </label>
           </div>
         </div>`;

    const rewardsHtml = rewards.map(r => {
      const rPct = r.total > 0 ? Math.min(100, Math.round((r.claimed / r.total) * 100)) : 0;
      const rDone = r.claimed >= r.total && r.total > 0;
      return `
        <div class="space-y-1">
          <div class="flex items-center justify-between text-xs">
            <span class="inline-flex items-center gap-1.5 text-slate-300 truncate">
              <span class="w-4 h-4 inline-flex items-center justify-center shrink-0">${getIconHtml(r.type, 'w-4 h-4')}</span>
              <span>${escapeHtml(getRewardLabel(r.type))}</span>
            </span>
            <span class="font-mono font-bold ${rDone ? 'text-emerald-400' : 'accent-text'}">
              ${r.claimed.toLocaleString()} / ${r.total.toLocaleString()} (${rPct}%)
            </span>
          </div>
          <div class="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div class="h-full ${rDone ? 'bg-emerald-400' : 'accent-bg'} rounded-full transition-all duration-300" style="width: ${rPct}%"></div>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="glass-card rounded-2xl overflow-hidden flex flex-col justify-between ${isComplete ? 'border-emerald-500/40' : ''} ${isUpcoming ? 'opacity-60 hover:opacity-100 transition-opacity duration-200' : ''}">
        <div>
          ${bannerSection}
          <div class="p-4 ${ev.image ? 'pt-1' : 'pt-3'}">
            <div class="flex items-start justify-between gap-2">
              <h4 class="text-sm sm:text-base font-bold text-white leading-snug">${escapeHtml(ev.name)}</h4>
              <div class="flex items-center gap-1 shrink-0">
                <button onclick="cloneEventToCurrentPatch('${ev.id}', false)" class="p-1 text-slate-400 hover:text-cyan-300 cursor-pointer" title="Duplicate / Reset Event">
                  <i class="fa-solid fa-clone text-xs"></i>
                </button>
                <button onclick="openEventModal('${ev.id}')" class="p-1 text-slate-400 hover:text-white cursor-pointer" title="Edit Event">
                  <i class="fa-solid fa-pen text-xs"></i>
                </button>
                <button onclick="deleteActiveEvent('${ev.id}')" class="p-1 text-slate-400 hover:text-rose-400 cursor-pointer" title="Delete Event">
                  <i class="fa-solid fa-trash text-xs"></i>
                </button>
              </div>
            </div>
            <div class="text-[11px] font-mono text-slate-400 mt-1">
              ${ev.startDate} → ${ev.endDate} (${durationDays}d)
            </div>
          </div>
        </div>

        <div class="px-4 pb-4 pt-2 border-t border-slate-800/80 space-y-2.5">
          ${rewardsHtml}
          <div class="flex items-center gap-2 pt-1">
            <button onclick="openQuickClaimModal('${ev.id}')" class="flex-1 py-1.5 px-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200 transition cursor-pointer">
              <i class="fa-solid fa-hand-holding-dollar mr-1 accent-text"></i> Log Claimed
            </button>
            ${!isComplete && totalSum > 0 ? `
              <button onclick="claimFullEvent('${ev.id}')" class="py-1.5 px-2.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-xs font-bold text-emerald-300 transition cursor-pointer" title="Claim All">
                <i class="fa-solid fa-check"></i> Max
              </button>
            ` : `
              <span class="py-1.5 px-2.5 rounded-lg bg-emerald-500/15 text-emerald-400 text-xs font-bold">
                <i class="fa-solid fa-circle-check"></i> Done
              </span>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Archive Workflow
function openArchiveConfirmModal() {
  const profile = getActiveProfile();
  if (profile.activeEvents.length === 0) {
    showToast('No active events to archive.', 'info');
    return;
  }
  document.getElementById('archive-next-patch').value = '';
  document.getElementById('archive-modal').classList.remove('hidden');
}

function closeArchiveConfirmModal() {
  document.getElementById('archive-modal').classList.add('hidden');
}

function executeArchiveEvents() {
  const profile = getActiveProfile();
  const mode = document.querySelector('input[name="archiveMode"]:checked').value;
  const nextPatch = document.getElementById('archive-next-patch').value.trim();

  let toArchive = [];
  let remaining = [];
  let respawned = [];

  profile.activeEvents.forEach(ev => {
    const rewards = getEventRewards(ev);
    const isDone = rewards.length > 0 && rewards.every(r => r.claimed >= r.total && r.total > 0);
    if (mode === 'all' || (mode === 'completed' && isDone)) {
      toArchive.push({
        ...ev,
        patch: ev.patch || profile.patch.version,
        archivedAt: getRelativeDateStr(0)
      });
      if (ev.isRecurring) {
        respawned.push(syncEventLegacyTotals({
          ...ev,
          id: 'ev_' + Date.now() + '_' + Math.floor(Math.random() * 10000),
          patch: nextPatch || profile.patch.version,
          startDate: profile.patch.startDate || getRelativeDateStr(0),
          endDate: profile.patch.endDate || getRelativeDateStr(14),
          rewards: rewards.map(r => ({ type: r.type, total: r.total, claimed: 0 }))
        }));
      }
    } else {
      remaining.push(ev);
    }
  });

  if (toArchive.length === 0) {
    showToast('No completed events matched your selection.', 'info');
    closeArchiveConfirmModal();
    return;
  }

  profile.archivedEvents = [...toArchive, ...profile.archivedEvents];
  profile.activeEvents = [...remaining, ...respawned];

  if (nextPatch) {
    profile.patch.version = nextPatch;
  }

  saveState();
  closeArchiveConfirmModal();
  renderAll();
  showToast(
    respawned.length > 0
      ? `Archived ${toArchive.length} event(s) & auto-reset ${respawned.length} recurring event(s)!`
      : `Archived ${toArchive.length} event(s) into the Permanent Vault!`,
    'success'
  );
}

function deleteArchivedEvent(id) {
  const profile = getActiveProfile();
  profile.archivedEvents = profile.archivedEvents.filter(ev => ev.id !== id);
  saveState();
  renderAll();
  showToast('Removed entry from archive.', 'info');
}

function renderArchiveTable() {
  const profile = getActiveProfile();
  const filterSelect = document.getElementById('archive-patch-filter');
  const currentFilter = filterSelect.value;

  const patches = [...new Set(profile.archivedEvents.map(e => e.patch))];
  filterSelect.innerHTML = `<option value="ALL">All Archived Patches (${profile.archivedEvents.length})</option>` +
    patches.map(p => `<option value="${escapeHtml(p)}" ${p === currentFilter ? 'selected' : ''}>${escapeHtml(p)}</option>`).join('');

  const allEvents = [...profile.activeEvents, ...profile.archivedEvents];
  const catTotals = {};
  allEvents.forEach(ev => {
    const curr = getEventRewards(ev).find(r => r.type === 'currency');
    const amt = curr ? curr.claimed : Number(ev.claimedAstrite || 0);
    catTotals[ev.category] = (catTotals[ev.category] || 0) + amt;
  });

  document.getElementById('archive-category-pills').innerHTML = Object.entries(catTotals)
    .sort((a, b) => b[1] - a[1])
    .map(([cat, amt]) => `
      <span class="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs flex items-center gap-1.5">
        <span class="text-slate-400">${escapeHtml(cat)}:</span>
        <span class="font-mono font-bold text-amber-300">${amt.toLocaleString()}</span>
      </span>
    `).join('');

  const filtered = currentFilter === 'ALL'
    ? profile.archivedEvents
    : profile.archivedEvents.filter(e => e.patch === currentFilter);

  const tbody = document.getElementById('archive-table-body');
  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="py-8 text-center text-slate-400">
          No archived events yet. Click <strong class="text-amber-300">Archive &amp; Reset Patch</strong> when a patch ends to preserve your earnings permanently here.
        </td>
      </tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(ev => {
    const { durationDays } = getEventDurationStats(ev.startDate, ev.endDate);
    const posX = ev.imagePosX ?? 50;
    const posY = ev.imagePosY ?? 35;
    const thumb = ev.image
      ? `<img src="${ev.image}" alt="" style="object-position: ${posX}% ${posY}%;" class="w-10 h-6 rounded object-cover border border-slate-700 shrink-0" />`
      : '';
    const rewardsBreakdown = getEventRewards(ev).map(r => `
      <div class="inline-flex items-center gap-1 ml-2 first:ml-0">
        <span class="w-3.5 h-3.5 inline-flex items-center justify-center">${getIconHtml(r.type, 'w-3.5 h-3.5')}</span>
        <span class="font-bold accent-text">${r.claimed.toLocaleString()}</span>
        <span class="text-slate-500">/${r.total.toLocaleString()}</span>
      </div>
    `).join('');

    return `
      <tr class="hover:bg-slate-800/40 transition">
        <td class="py-3 px-4 whitespace-nowrap">
          <span class="px-2 py-0.5 rounded text-[11px] font-mono bg-amber-400/15 text-amber-300 border border-amber-400/30">${escapeHtml(ev.patch)}</span>
        </td>
        <td class="py-3 px-4 font-semibold text-slate-200">
          <div class="flex items-center gap-2.5">${thumb}<span>${escapeHtml(ev.name)}</span></div>
        </td>
        <td class="py-3 px-4 text-slate-400 whitespace-nowrap">${escapeHtml(ev.category)}</td>
        <td class="py-3 px-4 font-mono text-slate-400 whitespace-nowrap">${ev.startDate} → ${ev.endDate} (${durationDays}d)</td>
        <td class="py-3 px-4 text-right font-mono whitespace-nowrap">${rewardsBreakdown}</td>
        <td class="py-3 px-4 text-right whitespace-nowrap">
          <button onclick="cloneEventToCurrentPatch('${ev.id}', true)" class="p-1.5 text-slate-400 hover:text-cyan-300 transition cursor-pointer" title="Re-spawn into Current Patch">
            <i class="fa-solid fa-clone"></i>
          </button>
          <button onclick="deleteArchivedEvent('${ev.id}')" class="p-1.5 text-slate-500 hover:text-rose-400 transition cursor-pointer" title="Delete from Archive">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

// =========================================================================
// PITY & GUARANTEE CALCULATOR + ECONOMY CODEX
// =========================================================================
function savePitySettings() {
  const cfg = getActiveConfig();
  const profile = getActiveProfile();
  profile.pity.targetName = document.getElementById('pity-target-name').value;
  profile.pity.bannerType = document.getElementById('pity-banner-type').value;
  profile.pity.currentPity = Math.min(cfg.hardPity - 1, Math.max(0, parseInt(document.getElementById('pity-current-count').value, 10) || 0));
  profile.pity.guaranteed = document.getElementById('pity-guaranteed').value;
  saveState();
  renderPityCalculator();
}

function renderPityCalculator() {
  const cfg = getActiveConfig();
  const profile = getActiveProfile();

  document.getElementById('pity-target-name').value = profile.pity.targetName;
  document.getElementById('pity-banner-type').value = profile.pity.bannerType;
  document.getElementById('pity-current-count').value = profile.pity.currentPity;
  document.getElementById('pity-current-count').max = cfg.hardPity - 1;
  document.getElementById('pity-count-label').textContent = `Current Pity Count (0–${cfg.hardPity - 1})`;
  document.getElementById('pity-guaranteed').value = profile.pity.guaranteed;

  const guaranteeWrapper = document.getElementById('pity-guarantee-wrapper');
  const nteCallout = document.getElementById('nte-pity-callout');

  if (!cfg.has5050) {
    // NTE: 100% Guaranteed Featured S-Rank (No 50/50)
    guaranteeWrapper.classList.add('hidden');
    nteCallout.classList.remove('hidden');
    document.getElementById('pity-sim-badge').textContent = 'NTE Board Simulator';
  } else {
    guaranteeWrapper.classList.remove('hidden');
    nteCallout.classList.add('hidden');
    document.getElementById('pity-sim-badge').textContent = 'Convene Simulator';
    if (profile.pity.bannerType === 'weapon') {
      guaranteeWrapper.classList.add('opacity-50', 'pointer-events-none');
    } else {
      guaranteeWrapper.classList.remove('opacity-50', 'pointer-events-none');
    }
  }

  const pity = Number(profile.pity.currentPity || 0);
  const isGuaranteed = !cfg.has5050 || profile.pity.bannerType === 'weapon' || profile.pity.guaranteed === 'yes';

  const softPullsLeft = Math.max(0, cfg.softPity - pity);
  const hardCap = isGuaranteed ? cfg.hardPity : cfg.hardPity * 2;
  const hardPullsLeft = Math.max(0, hardCap - pity);
  const hardCurrencyNeeded = hardPullsLeft * cfg.pullCost;

  const m = calculateMetrics();
  const stashPulls = m.totalLimitedPulls;
  const diffPulls = stashPulls - hardPullsLeft;

  // Update NTE Outfit Milestones if active
  if (!cfg.has5050) {
    const totalEffective = stashPulls + pity;
    [50, 120, 200].forEach((ms, idx) => {
      const el = document.getElementById(`nte-mile-${ms}`);
      const labels = ['50: Perk I', '120: Perk II', '200: Outfit'];
      if (totalEffective >= ms) {
        el.className = 'p-2 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-center font-bold';
        el.textContent = `✓ ${labels[idx]}`;
      } else {
        el.className = 'p-2 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-400 text-center';
        el.textContent = `${labels[idx]} (-${ms - totalEffective})`;
      }
    });
  }

  document.getElementById('pity-soft-label').textContent = `Soft Pity Starts (~${cfg.softPity} pulls):`;
  document.getElementById('pity-soft-needed').textContent = softPullsLeft === 0
    ? 'In Soft Pity Zone!'
    : `${softPullsLeft} pulls (${(softPullsLeft * cfg.pullCost).toLocaleString()} ${cfg.currencyName})`;
  document.getElementById('pity-hard-needed').textContent = `${hardPullsLeft} pulls (${hardCurrencyNeeded.toLocaleString()} ${cfg.currencyName})`;
  document.getElementById('pity-stash-pulls').textContent = `${stashPulls} pulls (${m.currentCurrency.toLocaleString()} ${cfg.currencyName} + ${m.limitedTickets} ${cfg.limitedTicketName})`;

  const statusEl = document.getElementById('pity-status-text');
  const etaEl = document.getElementById('pity-eta-text');

  if (diffPulls >= 0) {
    statusEl.textContent = `GUARANTEED READY (+${diffPulls} spare pulls)`;
    statusEl.className = 'text-sm font-bold text-emerald-400 mt-0.5';
    etaEl.textContent = 'Ready Now!';
  } else {
    const deficitPulls = Math.abs(diffPulls);
    const deficitCurrency = deficitPulls * cfg.pullCost;
    statusEl.textContent = `Need ${deficitPulls} more pulls (${deficitCurrency.toLocaleString()} ${cfg.currencyName})`;
    statusEl.className = 'text-sm font-bold text-amber-300 mt-0.5';

    if (m.avgDailyGain > 0) {
      const daysNeeded = Math.ceil(deficitCurrency / m.avgDailyGain);
      const readyDate = getRelativeDateStr(daysNeeded);
      etaEl.textContent = `~${daysNeeded} days (${readyDate})`;
    } else {
      etaEl.textContent = 'Log 2+ days for ETA';
    }
  }

  // Render Codex Reference Side
  document.getElementById('codex-tag').textContent = cfg.codexTag;
  document.getElementById('codex-title').textContent = `${cfg.name} Economy Reference`;

  document.getElementById('codex-cards-grid').innerHTML = cfg.codexCards.map(c => `
    <div class="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
      <div class="text-slate-400">${escapeHtml(c.label)}</div>
      <div class="font-mono font-bold accent-text text-sm mt-0.5">${escapeHtml(c.val)}</div>
    </div>
  `).join('');

  document.getElementById('codex-sources-tbody').innerHTML = cfg.codexSources.map(s => `
    <tr>
      <td class="py-2 px-3 font-medium text-slate-200">${escapeHtml(s.source)}</td>
      <td class="py-2 px-3 text-slate-400">${escapeHtml(s.cadence)}</td>
      <td class="py-2 px-3 text-right font-mono accent-text">${escapeHtml(s.reward)}</td>
    </tr>
  `).join('');
}

// =========================================================================
// JSON EXPORT / IMPORT (ALL GAMES, IMAGES, SETTINGS & ARCHIVES)
// =========================================================================
function exportJSON() {
  const dataStr = JSON.stringify(appState, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `GachaCommand_WuWa_NTE_Backup_${getRelativeDateStr(0)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast('Full backup (WuWa + NTE + custom images) exported!', 'success');
}

function importJSON(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      if (imported.games && imported.games.wuwa && imported.games.nte) {
        appState = {
          ...appState,
          ...imported,
          isSampleData: false
        };
      } else if (imported.dailyLogs && imported.activeEvents) {
        // Legacy v1 single-game backup support
        appState.games.wuwa.dailyLogs = imported.dailyLogs;
        appState.games.wuwa.activeEvents = imported.activeEvents;
        appState.games.wuwa.archivedEvents = imported.archivedEvents || [];
        appState.isSampleData = false;
      } else {
        throw new Error('Unrecognized backup format.');
      }
      saveState();
      renderAll();
      showToast('Backup restored successfully!', 'success');
    } catch (err) {
      showToast('Invalid JSON backup file.', 'error');
    }
    event.target.value = '';
  };
  reader.readAsText(file);
}

// =========================================================================
// UTILITY & INITIALIZATION
// =========================================================================
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderAll() {
  applyVisualTheme();
  renderGameIdentityAndLabels();
  renderKPIs();
  renderChart();
  renderActiveEvents();
  renderArchiveTable();
  renderDailyTable();
  enhanceCustomControls();
}

// =========================================================================
// CUSTOM GLASSMORPHIC CALENDAR POPOVER & CUSTOM SELECT DROPDOWN ENGINE
// =========================================================================
let activePopover = null;
let activePopoverAnchor = null;

function closeAllPopovers() {
  if (activePopover) {
    activePopover.remove();
    activePopover = null;
    activePopoverAnchor = null;
  }
}

function positionPopover(popover, anchor) {
  const rect = anchor.getBoundingClientRect();
  const popRect = popover.getBoundingClientRect();
  let top = rect.bottom + 6;
  let left = rect.left;

  if (top + popRect.height > window.innerHeight - 10) {
    top = Math.max(10, rect.top - popRect.height - 6);
  }
  if (left + popRect.width > window.innerWidth - 10) {
    left = Math.max(10, window.innerWidth - popRect.width - 12);
  }
  popover.style.top = `${top}px`;
  popover.style.left = `${left}px`;
}

function formatDisplayDate(isoStr) {
  if (!isoStr || !/^\d{4}-\d{2}-\d{2}$/.test(isoStr)) return 'Select date';
  const [y, m, d] = isoStr.split('-').map(Number);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[m - 1]} ${String(d).padStart(2, '0')}, ${y}`;
}

function syncCustomDateDisplay(input) {
  const btn = input.nextElementSibling;
  if (btn && btn.classList.contains('custom-date-trigger')) {
    btn.querySelector('.date-text').textContent = formatDisplayDate(input.value);
  }
}

function syncCustomSelectDisplay(select) {
  const btn = select.nextElementSibling;
  if (btn && btn.classList.contains('custom-select-trigger')) {
    const opt = select.options[select.selectedIndex];
    btn.querySelector('.select-text').textContent = opt ? opt.textContent : '';
  }
}

function openCustomCalendarPopover(input, triggerBtn) {
  if (activePopoverAnchor === triggerBtn) {
    closeAllPopovers();
    return;
  }
  closeAllPopovers();

  const todayIso = getRelativeDateStr(0);
  const initialIso = /^\d{4}-\d{2}-\d{2}$/.test(input.value) ? input.value : todayIso;
  let [viewYear, viewMonth] = initialIso.split('-').map(Number);
  viewMonth -= 1; // 0-indexed

  const pop = document.createElement('div');
  pop.className = 'gacha-popover p-3.5 w-72 select-none';
  activePopover = pop;
  activePopoverAnchor = triggerBtn;

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayHeaders = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const renderCalendarGrid = () => {
    const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

    let cellsHtml = dayHeaders.map(d =>
      `<div class="text-[10px] font-mono uppercase text-slate-400 text-center py-1">${d}</div>`
    ).join('');

    for (let i = 0; i < firstDayOfWeek; i++) {
      cellsHtml += `<div></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const iso = `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isSelected = iso === input.value;
      const isToday = iso === todayIso;

      let cls = 'h-8 w-8 mx-auto rounded-lg text-xs font-mono flex items-center justify-center cursor-pointer transition ';
      if (isSelected) {
        cls += 'accent-bg text-slate-950 font-extrabold shadow-md';
      } else if (isToday) {
        cls += 'accent-bg-soft accent-text border font-bold';
      } else {
        cls += 'text-slate-200 hover:bg-slate-800';
      }

      cellsHtml += `<button type="button" data-iso="${iso}" class="${cls}">${day}</button>`;
    }

    pop.innerHTML = `
      <div class="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-800/80">
        <button type="button" class="cal-prev w-7 h-7 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 flex items-center justify-center cursor-pointer">
          <i class="fa-solid fa-chevron-left text-[11px]"></i>
        </button>
        <div class="text-xs font-bold tracking-wide text-white">${monthNames[viewMonth]} ${viewYear}</div>
        <button type="button" class="cal-next w-7 h-7 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 flex items-center justify-center cursor-pointer">
          <i class="fa-solid fa-chevron-right text-[11px]"></i>
        </button>
      </div>
      <div class="grid grid-cols-7 gap-1">${cellsHtml}</div>
      <div class="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
        <button type="button" class="cal-today font-semibold accent-text hover:underline cursor-pointer">Today</button>
        <span class="font-mono text-slate-400">${input.value || ''}</span>
      </div>
    `;

    pop.querySelector('.cal-prev').onclick = (e) => {
      e.stopPropagation();
      viewMonth--;
      if (viewMonth < 0) { viewMonth = 11; viewYear--; }
      renderCalendarGrid();
    };
    pop.querySelector('.cal-next').onclick = (e) => {
      e.stopPropagation();
      viewMonth++;
      if (viewMonth > 11) { viewMonth = 0; viewYear++; }
      renderCalendarGrid();
    };
    pop.querySelector('.cal-today').onclick = (e) => {
      e.stopPropagation();
      input.value = todayIso;
      syncCustomDateDisplay(input);
      input.dispatchEvent(new Event('change', { bubbles: true }));
      closeAllPopovers();
    };
    pop.querySelectorAll('button[data-iso]').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        input.value = btn.getAttribute('data-iso');
        syncCustomDateDisplay(input);
        input.dispatchEvent(new Event('change', { bubbles: true }));
        closeAllPopovers();
      };
    });
  };

  document.body.appendChild(pop);
  renderCalendarGrid();
  positionPopover(pop, triggerBtn);
}

function openCustomSelectPopover(select, triggerBtn) {
  if (activePopoverAnchor === triggerBtn) {
    closeAllPopovers();
    return;
  }
  closeAllPopovers();

  const pop = document.createElement('div');
  pop.className = 'gacha-popover p-1.5 max-h-60 overflow-y-auto';
  pop.style.minWidth = `${Math.max(175, triggerBtn.getBoundingClientRect().width)}px`;
  activePopover = pop;
  activePopoverAnchor = triggerBtn;

  const options = [...select.options];
  pop.innerHTML = options.map((opt, idx) => {
    const isSel = idx === select.selectedIndex;
    return `
      <button type="button" data-idx="${idx}"
        class="w-full text-left px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between gap-2 transition cursor-pointer ${isSel ? 'accent-bg-soft accent-text font-bold border' : 'text-slate-200 hover:bg-slate-800/90'}">
        <span class="truncate">${escapeHtml(opt.textContent)}</span>
        ${isSel ? '<i class="fa-solid fa-check text-[10px]"></i>' : ''}
      </button>
    `;
  }).join('');

  pop.querySelectorAll('button[data-idx]').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      select.selectedIndex = Number(btn.getAttribute('data-idx'));
      syncCustomSelectDisplay(select);
      select.dispatchEvent(new Event('change', { bubbles: true }));
      closeAllPopovers();
    };
  });

  document.body.appendChild(pop);
  positionPopover(pop, triggerBtn);
}

function enhanceCustomControls() {
  // Enhance all <input type="date"> into centered custom date triggers
  document.querySelectorAll('input[type="date"]').forEach(input => {
    if (input.dataset.enhanced === '1') {
      syncCustomDateDisplay(input);
      return;
    }
    input.dataset.enhanced = '1';
    input.classList.add('hidden');

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `custom-date-trigger ${input.className.replace('hidden', '')}`;
    btn.innerHTML = `<i class="fa-regular fa-calendar accent-text text-[11px] shrink-0"></i><span class="date-text truncate">${formatDisplayDate(input.value)}</span>`;
    btn.onclick = (e) => {
      e.stopPropagation();
      openCustomCalendarPopover(input, btn);
    };
    input.insertAdjacentElement('afterend', btn);
  });

  // Enhance all <select> into custom glassmorphic dropdown triggers
  document.querySelectorAll('select').forEach(select => {
    if (select.dataset.enhanced === '1') {
      syncCustomSelectDisplay(select);
      return;
    }
    select.dataset.enhanced = '1';
    select.classList.add('hidden');

    const btn = document.createElement('button');
    btn.type = 'button';
    const baseClasses = select.className.replace('hidden', '').replace('w-full', '').trim();
    btn.className = `custom-select-trigger ${select.classList.contains('w-full') ? 'w-full' : ''} ${baseClasses}`;
    const curText = select.options[select.selectedIndex]?.textContent || '';
    btn.innerHTML = `<span class="select-text truncate">${escapeHtml(curText)}</span><span class="custom-select-arrow"><i class="fa-solid fa-chevron-down text-[10px]"></i></span>`;
    btn.onclick = (e) => {
      e.stopPropagation();
      openCustomSelectPopover(select, btn);
    };
    select.insertAdjacentElement('afterend', btn);
  });
}

document.addEventListener('click', (e) => {
  if (activePopover && !activePopover.contains(e.target) && e.target !== activePopoverAnchor) {
    closeAllPopovers();
  }
});
window.addEventListener('resize', closeAllPopovers);

window.addEventListener('DOMContentLoaded', () => {
  loadState();
  initHeroBannerDragCrop();
  initEventImageDragCrop();
  renderAll();
  enhanceCustomControls();
});
