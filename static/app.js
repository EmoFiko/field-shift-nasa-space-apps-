// ============================================================================
// Field Shift — Purposeful, Grounded Agroclimatology Interface Logic
// ============================================================================

const I18N = {
  tr: {
    lang_code: 'English',
    loc_title: 'Tarla Konumu',
    btn_locate: 'Cihaz Konumu',
    lbl_lat: 'Enlem',
    lbl_lon: 'Boylam',
    date_title: 'Ekim ve Gözlem Dönemi',
    lbl_start: 'Başlangıç',
    lbl_end: 'Hasat / Bitiş',
    pref_title: 'Çiftlik Koşulları ve Hedefler',
    lbl_current_crop: 'Arazideki Mevcut Ürün',
    opt_empty_crop: 'Seçilmedi (Boş tarla / Nadas)',
    p_water: 'Su Tasarrufu',
    p_soil: 'Toprak Sağlığı ve Azot',
    p_yield: 'Kararlı Verim Güvencesi',
    p_resilience: 'Aşırı Hava Olaylarına Direnç',
    advanced_title: 'Sulama ve İklim Simülasyonu',
    lbl_precip_change: 'Yağış Sapması',
    lbl_temp_change: 'Sıcaklık Sapması',
    lbl_irrigation: 'Sulama İmkanı',
    opt_irr_any: 'Belirtilmemiş',
    opt_irr_yes: 'Sulu Tarım',
    opt_irr_no: 'Kuru Tarım',
    lbl_market: 'Ürün Grubu',
    opt_mkt_any: 'Tüm Sezonlar',
    opt_mkt_kislik: 'Kışlık',
    opt_mkt_yazlik: 'Yazlık',
    opt_mkt_bahar: 'Bahar',
    btn_run_analysis: 'NASA İklim Verisini Getir ve Analiz Et',
    btn_running: 'NASA Uydu Verileri Çözümleniyor...',
    welcome_title: 'NASA POWER agroclimatology verileriyle optimize edilmiş rotasyon modeli.',
    welcome_desc: 'Sol panelden arazi koordinatlarını ve inceleme mevsimini belirleyip analizi başlatın. Model; geçmiş sıcaklık, kuraklık indisi, solar radyasyon ve buharlaşma dengesini bitki biyolojisi limitleriyle eşleştirir.',
    pil_1_title: 'Toprak Yenileme',
    pil_1_desc: 'Baklagil ve derin köklü bitkilerle kimyasal gübre gereksinimini azaltan azot dengesi.',
    pil_2_title: 'Su Bütçesi',
    pil_2_desc: 'Bölgenin efektif yağış dağılımına göre yeraltı su çekimini minimize eden öneriler.',
    pil_3_title: 'Risk Savunması',
    pil_3_desc: 'Don, polenleşme döneminde aşırı ısı dalgası ve nem stresine karşı dayanıklı rotalar.',
    m_temp: 'Ortalama Sıcaklık',
    m_precip: 'Günlük Yağış',
    m_solar: 'Solar Radyasyon',
    m_wind: 'Rüzgar Hızı',
    best_match_badge: 'Birincil Ekin Tavsiyesi',
    score_label: 'Uyum İndeksi (0-100)',
    strategies_heading: 'Üç Rotasyon Rotası',
    strategies_sub: 'Çiftlik yönetim stratejinize uygun olan ekseni tercih edebilirsiniz.',
    tab_stress: '12 Aylık İklim Stresi & Büyüme Modeli',
    tab_timeline: 'Günlük NASA POWER Ölçümleri',
    btn_report: 'Saha Raporu İndir (.txt)',
    leg_temp: 'Sıcaklık Stresi',
    leg_water: 'Su Eksikliği / Kuraklık',
    leg_ndvi: 'NDVI Büyüme Eğrisi'
  },
  en: {
    lang_code: 'Türkçe',
    loc_title: 'Field Coordinates',
    btn_locate: 'Device Location',
    lbl_lat: 'Latitude',
    lbl_lon: 'Longitude',
    date_title: 'Planting & Observation Window',
    lbl_start: 'Planting Date',
    lbl_end: 'Harvest Date',
    pref_title: 'Farm Objectives & Field State',
    lbl_current_crop: 'Current Standing Crop',
    opt_empty_crop: 'None Selected (Fallow)',
    p_water: 'Water Conservation',
    p_soil: 'Soil Regeneration & Nitrogen',
    p_yield: 'Yield Stability',
    p_resilience: 'Extreme Weather Resilience',
    advanced_title: 'Irrigation & Climatological Shift',
    lbl_precip_change: 'Precipitation Delta',
    lbl_temp_change: 'Temperature Delta',
    lbl_irrigation: 'Water Delivery',
    opt_irr_any: 'Unspecified',
    opt_irr_yes: 'Irrigated System',
    opt_irr_no: 'Rainfed Dryland',
    lbl_market: 'Crop Season',
    opt_mkt_any: 'All Seasons',
    opt_mkt_kislik: 'Winter Hardened',
    opt_mkt_yazlik: 'Summer Grain',
    opt_mkt_bahar: 'Spring Legume',
    btn_run_analysis: 'Query NASA POWER & Generate Model',
    btn_running: 'Ingesting NASA Agroclimatology...',
    welcome_title: 'Crop rotation decision model grounded in NASA POWER satellite metrics.',
    welcome_desc: 'Set the target coordinates and target season to begin. The model correlates cumulative radiation, moisture anomalies, and thermal stress against biological thresholds.',
    pil_1_title: 'Soil Restoration',
    pil_1_desc: 'Nitrogen-fixing pulses and deep root tap systems that reduce synthetic fertilizer reliance.',
    pil_2_title: 'Water Accounting',
    pil_2_desc: 'Cultivars matched to effective rainfall curves to preserve aquifer reserves.',
    pil_3_title: 'Hazard Mitigation',
    pil_3_desc: 'Timing adjustments that shield anthesis from thermal scorch and unseasonal frost.',
    m_temp: 'Mean Temperature',
    m_precip: 'Daily Precipitation',
    m_solar: 'Solar Insolation',
    m_wind: 'Wind Velocity',
    best_match_badge: 'Primary Recommendation',
    score_label: 'Fitness Index (0-100)',
    strategies_heading: 'Three Cultivation Routes',
    strategies_sub: 'Choose the agronomic axis that best aligns with your management goals.',
    tab_stress: '12-Month Agro-Stress & Phenology Proxy',
    tab_timeline: 'Daily NASA POWER Time-Series',
    btn_report: 'Export Agronomic Brief (.txt)',
    leg_temp: 'Thermal Stress',
    leg_water: 'Moisture Deficit',
    leg_ndvi: 'NDVI Phenology Curve'
  }
};

let currentLang = 'tr';
let appState = {
  ort: null,
  raw: null,
  rotationResult: null
};

// DOM references
const latInput = document.getElementById('latInput');
const lonInput = document.getElementById('lonInput');
const startDateInput = document.getElementById('startDate');
const endDateInput = document.getElementById('endDate');
const mevcutCropSelect = document.getElementById('mevcutCrop');

const pSu = document.getElementById('p_su');
const pToprak = document.getElementById('p_toprak');
const pKara = document.getElementById('p_kara');
const pGuclu = document.getElementById('p_guclu');

const valPSu = document.getElementById('val_p_su');
const valPToprak = document.getElementById('val_p_toprak');
const valPKara = document.getElementById('val_p_kara');
const valPGuclu = document.getElementById('val_p_guclu');

const scPrecip = document.getElementById('sc_precip');
const scTemp = document.getElementById('sc_temp');
const valScPrecip = document.getElementById('val_sc_precip');
const valScTemp = document.getElementById('val_sc_temp');

const cIrrigation = document.getElementById('c_irrigation');
const cMarket = document.getElementById('c_market');

const btnAnalyze = document.getElementById('btnAnalyze');
const btnLang = document.getElementById('btnLang');
const langText = document.getElementById('langText');
const statusBanner = document.getElementById('statusBanner');
const statusBannerText = document.getElementById('statusBannerText');

const welcomePlaceholder = document.getElementById('welcomePlaceholder');
const analysisContent = document.getElementById('analysisContent');

const valTemp = document.getElementById('valTemp');
const valPrecip = document.getElementById('valPrecip');
const valSolar = document.getElementById('valSolar');
const valWind = document.getElementById('valWind');

const bestCropName = document.getElementById('bestCropName');
const bestCropScore = document.getElementById('bestCropScore');
const bestCropSub = document.getElementById('bestCropSub');

const strategiesContainer = document.getElementById('strategiesContainer');
const riskWarningsRow = document.getElementById('riskWarningsRow');

let stressChartInstance = null;
let timelineChartInstance = null;
let leafletMap = null;
let mapMarker = null;

function showBanner(msg, isSuccess = false) {
  statusBannerText.textContent = msg;
  statusBanner.className = 'status-banner' + (isSuccess ? ' success' : '');
  statusBanner.style.display = 'block';
  setTimeout(() => {
    statusBanner.style.display = 'none';
  }, 5000);
}

function formatDateForAPI(dateStr) {
  return dateStr.replace(/-/g, '');
}

function initLeaflet() {
  const initLat = parseFloat(latInput.value) || 37.8746;
  const initLon = parseFloat(lonInput.value) || 32.4932;

  leafletMap = L.map('map', {
    zoomControl: false,
    scrollWheelZoom: true
  }).setView([initLat, initLon], 7);

  L.control.zoom({ position: 'bottomright' }).addTo(leafletMap);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
  }).addTo(leafletMap);

  mapMarker = L.marker([initLat, initLon], { draggable: true }).addTo(leafletMap);

  leafletMap.on('click', (e) => {
    updateCoords(e.latlng.lat, e.latlng.lng);
  });

  mapMarker.on('dragend', (e) => {
    const latlng = e.target.getLatLng();
    updateCoords(latlng.lat, latlng.lng);
  });
}

function updateCoords(lat, lon) {
  const roundedLat = parseFloat(lat.toFixed(4));
  const roundedLon = parseFloat(lon.toFixed(4));
  latInput.value = roundedLat;
  lonInput.value = roundedLon;
  if (mapMarker) {
    mapMarker.setLatLng([roundedLat, roundedLon]);
  }
}

async function loadCrops() {
  try {
    const res = await fetch('/api/bitkiler');
    if (!res.ok) throw new Error('Bitkiler yüklenemedi');
    const crops = await res.json();
    
    mevcutCropSelect.innerHTML = `<option value="">${I18N[currentLang].opt_empty_crop}</option>`;
    for (const [key, crop] of Object.entries(crops)) {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = crop.ad;
      mevcutCropSelect.appendChild(opt);
    }
  } catch (err) {
    console.error(err);
  }
}

function initSliders() {
  const sliders = [
    { input: pSu, val: valPSu },
    { input: pToprak, val: valPToprak },
    { input: pKara, val: valPKara },
    { input: pGuclu, val: valPGuclu }
  ];

  sliders.forEach(({ input, val }) => {
    input.addEventListener('input', () => {
      val.textContent = input.value;
      if (appState.ort) debounceRotation();
    });
  });

  scPrecip.addEventListener('input', () => {
    valScPrecip.textContent = `${scPrecip.value}%`;
    if (appState.ort) debounceRotation();
  });

  scTemp.addEventListener('input', () => {
    valScTemp.textContent = `${scTemp.value}°C`;
    if (appState.ort) debounceRotation();
  });

  mevcutCropSelect.addEventListener('change', () => {
    if (appState.ort) debounceRotation();
  });
  cIrrigation.addEventListener('change', () => {
    if (appState.ort) debounceRotation();
  });
  cMarket.addEventListener('change', () => {
    if (appState.ort) debounceRotation();
  });
}

let debounceTimer = null;
function debounceRotation() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    runRotationCalculation();
  }, 250);
}

function setLanguage(lang) {
  currentLang = lang;
  langText.textContent = I18N[lang].lang_code;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang][key]) {
      el.textContent = I18N[lang][key];
    }
  });

  if (appState.ort) {
    runRotationCalculation();
  }
}

async function runFullAnalysis() {
  const lat = parseFloat(latInput.value);
  const lon = parseFloat(lonInput.value);
  const start = formatDateForAPI(startDateInput.value);
  const end = formatDateForAPI(endDateInput.value);

  if (isNaN(lat) || isNaN(lon)) {
    showBanner('Lütfen geçerli enlem ve boylam girin.');
    return;
  }

  if (!start || !end || start >= end) {
    showBanner('Bitiş tarihi başlangıç tarihinden sonra olmalıdır.');
    return;
  }

  btnAnalyze.disabled = true;
  btnAnalyze.querySelector('.btn-spinner').style.display = 'inline-block';
  btnAnalyze.querySelector('.btn-label').textContent = I18N[currentLang].btn_running;

  try {
    const res = await fetch('/api/analiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lat, lon, start, end })
    });

    const data = await res.json();
    if (!res.ok || data.error) {
      throw new Error(data.error || 'NASA POWER verisi alınamadı.');
    }

    appState.ort = data.ortalama;
    appState.raw = data.raw;

    valTemp.textContent = appState.ort.sıcaklık_C;
    valPrecip.textContent = appState.ort.yağış_mm_gun;
    valSolar.textContent = appState.ort.güneş_MJ_m2_gun;
    valWind.textContent = appState.ort.rüzgar_m_s;

    welcomePlaceholder.style.display = 'none';
    analysisContent.style.display = 'block';

    renderTimelineChart(appState.raw);
    await runRotationCalculation();

    showBanner('NASA iklim verileri başarıyla işlendi!', true);
  } catch (err) {
    showBanner(`Hata: ${err.message}`);
  } finally {
    btnAnalyze.disabled = false;
    btnAnalyze.querySelector('.btn-spinner').style.display = 'none';
    btnAnalyze.querySelector('.btn-label').textContent = I18N[currentLang].btn_run_analysis;
  }
}

async function runRotationCalculation() {
  if (!appState.ort) return;

  const oncelikler = {
    su_tasarimi: parseInt(pSu.value),
    toprak_sagligi: parseInt(pToprak.value),
    kararli_verim: parseInt(pKara.value),
    guclu_koşullar: parseInt(pGuclu.value)
  };

  const scenario = {
    precip_change_pct: parseFloat(scPrecip.value),
    temp_change_c: parseFloat(scTemp.value)
  };

  const constraints = {
    irrigation: cIrrigation.value || null,
    market_preference: cMarket.value || null
  };

  const payload = {
    ortalama: appState.ort,
    oncelikler,
    mevcut: mevcutCropSelect.value || null,
    scenario,
    constraints,
    lang: currentLang
  };

  try {
    const res = await fetch('/api/rotasyon', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();
    if (!res.ok || data.error) {
      throw new Error(data.error || 'Rotasyon hesaplanamadı.');
    }

    appState.rotationResult = data;
    renderResultsUI(data);
  } catch (err) {
    console.error(err);
  }
}

function renderResultsUI(data) {
  // Risk notices
  riskWarningsRow.innerHTML = '';
  if (data.risk_uyarilari && data.risk_uyarilari.length > 0) {
    riskWarningsRow.style.display = 'flex';
    data.risk_uyarilari.forEach((risk) => {
      const box = document.createElement('div');
      box.className = 'risk-notice-entry';
      box.textContent = risk.mesaj;
      riskWarningsRow.appendChild(box);
    });
  } else {
    riskWarningsRow.style.display = 'none';
  }

  // Hero Crop Sheet
  if (data.en_iyi_bitki) {
    bestCropName.textContent = data.en_iyi_bitki.bitki;
    bestCropScore.textContent = data.en_iyi_bitki.skor;
    const grup = data.en_iyi_bitki.grup ? ` • ${data.en_iyi_bitki.grup.toUpperCase()}` : '';
    bestCropSub.textContent = (currentLang === 'tr' ? 'Mevcut iklim rejimine ve toprak onarım hedeflerine en yüksek uyumu sağlayan ana çeşit' : 'Highest suitability match for local climatology and target rotation') + grup;
  }

  // 3 Columns Matrix
  strategiesContainer.innerHTML = '';
  if (data.stratejiler) {
    data.stratejiler.forEach((strat, idx) => {
      const card = document.createElement('div');
      card.className = 'strategy-column-card';

      card.innerHTML = `
        <span class="strat-card-tag">Rota ${idx + 1}</span>
        <h4 class="strat-card-title">${strat.ad}</h4>
        <div class="strat-crop-row">
          <span class="strat-crop-name">${strat.bitki}</span>
          <span class="strat-crop-score">${strat.skor} / 100</span>
        </div>
        <p class="strat-narrative">${strat.neden}</p>
        <ul class="strat-points">
          <li><strong>${currentLang === 'tr' ? 'Kanıt:' : 'Evidence:'}</strong> ${strat.kanit || '--'}</li>
          <li><strong>${currentLang === 'tr' ? 'Kazanım:' : 'Gain:'}</strong> ${(strat.faydalar || []).join(', ')}</li>
          <li><strong>${currentLang === 'tr' ? 'Önlem:' : 'Precaution:'}</strong> ${(strat.riskler || []).join(', ')}</li>
        </ul>
      `;
      strategiesContainer.appendChild(card);
    });
  }

  // Stress Chart
  if (data.stres_takvimi) {
    renderStressChart(data.stres_takvimi);
  }
}

function renderStressChart(stress) {
  const ctx = document.getElementById('stressChart').getContext('2d');
  if (stressChartInstance) stressChartInstance.destroy();

  const labels = stress.aylar.map(a => a.ay_adi);
  const tempStress = stress.aylar.map(a => a.temp_stress);
  const waterStress = stress.aylar.map(a => a.water_stress);
  const ndvi = stress.aylar.map(a => Math.round(a.ndvi_proxy * 100));

  stressChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: currentLang === 'tr' ? 'Sıcaklık Stresi (%)' : 'Thermal Stress (%)',
          data: tempStress,
          borderColor: '#b47b2b',
          backgroundColor: 'rgba(180, 123, 43, 0.08)',
          fill: true,
          tension: 0.3,
          pointRadius: 3
        },
        {
          label: currentLang === 'tr' ? 'Su Stresi (%)' : 'Moisture Deficit (%)',
          data: waterStress,
          borderColor: '#236477',
          backgroundColor: 'rgba(35, 100, 119, 0.08)',
          fill: true,
          tension: 0.3,
          pointRadius: 3
        },
        {
          label: currentLang === 'tr' ? 'NDVI Büyüme Eğrisi' : 'NDVI Phenology',
          data: ndvi,
          borderColor: '#255d36',
          backgroundColor: 'transparent',
          borderDash: [4, 4],
          tension: 0.3,
          pointRadius: 3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          grid: { color: '#e5ebe0' },
          ticks: { font: { family: 'JetBrains Mono', size: 11 }, color: '#5e6b5f' }
        },
        x: {
          grid: { display: false },
          ticks: { font: { family: 'Plus Jakarta Sans', size: 11 }, color: '#5e6b5f' }
        }
      }
    }
  });
}

function renderTimelineChart(raw) {
  const ctx = document.getElementById('timelineChart').getContext('2d');
  if (timelineChartInstance) timelineChartInstance.destroy();

  const p = raw.properties?.parameter || {};
  const dates = Object.keys(p.T2M || {}).sort();
  if (!dates.length) return;

  const labels = dates.map(d => `${d.slice(6, 8)}/${d.slice(4, 6)}`);
  const t2mData = dates.map(d => p.T2M[d]);
  const precData = dates.map(d => p.PRECTOTCORR[d]);

  timelineChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: currentLang === 'tr' ? 'Sıcaklık (°C)' : 'Temperature (°C)',
          data: t2mData,
          borderColor: '#b47b2b',
          backgroundColor: 'transparent',
          tension: 0.2,
          yAxisID: 'y'
        },
        {
          label: currentLang === 'tr' ? 'Yağış (mm/gün)' : 'Rain (mm/day)',
          data: precData,
          borderColor: '#236477',
          backgroundColor: 'rgba(35, 100, 119, 0.15)',
          tension: 0.2,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          type: 'linear',
          position: 'left',
          grid: { color: '#e5ebe0' },
          ticks: { font: { family: 'JetBrains Mono', size: 11 } }
        },
        y1: {
          type: 'linear',
          position: 'right',
          grid: { display: false },
          ticks: { font: { family: 'JetBrains Mono', size: 11 } }
        },
        x: {
          grid: { display: false },
          ticks: { font: { family: 'JetBrains Mono', size: 10 } }
        }
      }
    }
  });
}

function downloadReport() {
  if (!appState.ort || !appState.rotationResult) {
    showBanner('Lütfen önce analizi tamamlayın.');
    return;
  }

  const ort = appState.ort;
  const res = appState.rotationResult;
  const lines = [
    '=====================================================',
    '  FIELD SHIFT — NASA SPACE APPS KARAR DESTEK RAPORU  ',
    '=====================================================',
    `Tarih: ${new Date().toLocaleString()}`,
    `Konum: Enlem ${latInput.value}°N, Boylam ${lonInput.value}°E`,
    `Dönem: ${startDateInput.value} -> ${endDateInput.value}`,
    '',
    '1. NASA POWER İKLİM GÖZLEMLERİ (GÜNLÜK ORTALAMA)',
    '-----------------------------------------------------',
    `- Ortalama Sıcaklık: ${ort.sıcaklık_C} °C`,
    `- Günlük Yağış: ${ort.yağış_mm_gun} mm/gün`,
    `- Güneş Radyasyonu: ${ort.güneş_MJ_m2_gun} MJ/m²/gün`,
    `- Rüzgar Hızı: ${ort.rüzgar_m_s} m/s`,
    '',
    '2. ÖNERİLEN ROTASYON STRATEJİLERİ',
    '-----------------------------------------------------'
  ];

  (res.stratejiler || []).forEach((strat, i) => {
    lines.push(`Rota ${i + 1}: ${strat.ad}`);
    lines.push(`  Önerilen Çeşit: ${strat.bitki} (Uyum Skoru: ${strat.skor}/100)`);
    lines.push(`  Agronomik Gerekçe: ${strat.neden}`);
    lines.push(`  Bilimsel Kanıt   : ${strat.kanit}`);
    lines.push(`  Kazanımlar       : ${(strat.faydalar || []).join(', ')}`);
    lines.push(`  Risk Önlemleri   : ${(strat.riskler || []).join(', ')}`);
    lines.push('');
  });

  if (res.risk_uyarilari && res.risk_uyarilari.length) {
    lines.push('3. TESPİT EDİLEN RİSKLER & METEOROLOJİK UYARILAR');
    lines.push('-----------------------------------------------------');
    res.risk_uyarilari.forEach(r => lines.push(`- ${r.mesaj}`));
    lines.push('');
  }

  lines.push('Veri Kaynağı: NASA POWER Daily Agroclimatology (power.larc.nasa.gov)');
  lines.push('Not: Bu rapor karar destek simülasyonudur.');

  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `field_shift_rapor_${formatDateForAPI(startDateInput.value)}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function setupUIListeners() {
  document.querySelectorAll('#cityPills .region-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lat = parseFloat(btn.dataset.lat);
      const lon = parseFloat(btn.dataset.lon);
      updateCoords(lat, lon);
      if (leafletMap) leafletMap.setView([lat, lon], 9);
    });
  });

  document.getElementById('btnGeolocate')?.addEventListener('click', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        updateCoords(pos.coords.latitude, pos.coords.longitude);
        if (leafletMap) leafletMap.setView([pos.coords.latitude, pos.coords.longitude], 10);
      }, () => {
        showBanner('Cihaz konumuna erişilemedi.');
      });
    }
  });

  document.getElementById('btnLastYear')?.addEventListener('click', () => {
    startDateInput.value = '2024-01-01';
    endDateInput.value = '2024-12-31';
  });

  document.getElementById('btnSeasonSummer')?.addEventListener('click', () => {
    startDateInput.value = '2024-05-01';
    endDateInput.value = '2024-09-30';
  });

  document.querySelectorAll('.tabs-group .tab-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tabs-group .tab-toggle').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const targetId = btn.dataset.tab;
      document.querySelectorAll('.tab-pane').forEach(p => p.style.display = 'none');
      const activePane = document.getElementById(targetId);
      if (activePane) activePane.style.display = 'block';
    });
  });

  document.getElementById('btnDownloadReport')?.addEventListener('click', downloadReport);
  btnAnalyze.addEventListener('click', runFullAnalysis);
  btnLang.addEventListener('click', () => {
    setLanguage(currentLang === 'tr' ? 'en' : 'tr');
  });

  latInput.addEventListener('change', () => {
    const lat = parseFloat(latInput.value);
    const lon = parseFloat(lonInput.value);
    if (!isNaN(lat) && !isNaN(lon) && mapMarker) {
      mapMarker.setLatLng([lat, lon]);
      leafletMap.panTo([lat, lon]);
    }
  });
  lonInput.addEventListener('change', () => {
    const lat = parseFloat(latInput.value);
    const lon = parseFloat(lonInput.value);
    if (!isNaN(lat) && !isNaN(lon) && mapMarker) {
      mapMarker.setLatLng([lat, lon]);
      leafletMap.panTo([lat, lon]);
    }
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  initLeaflet();
  await loadCrops();
  initSliders();
  setupUIListeners();
});
