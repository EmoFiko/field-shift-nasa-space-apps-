// ============================================================================
// Field Shift — NASA POWER Agroclimatology Interface Logic
// ============================================================================

const I18N = {
  en: {
    lang_code: 'Türkçe',
    loc_title: 'Field Location',
    btn_locate: 'Use Device Location',
    ph_address: 'Enter address or place name…',
    lbl_lat: 'Latitude',
    lbl_lon: 'Longitude',
    lbl_field_size: 'Field Size',
    lbl_decare: 'decare',
    date_title: 'Planting & Observation Period',
    lbl_start: 'Planting Date',
    lbl_end: 'Harvest Date',
    pref_title: 'What Do You Want for Your Field?',
    lbl_current_crop: 'Current crop on field',
    opt_empty_crop: 'Fallow / Empty (New planting)',
    lbl_prev_crop: 'What did you plant last year?',
    opt_prev_none: "Don't remember / First year",
    p_water: 'Water Needs (Irrigation)',
    p_water_sub: 'Low water saves well-pump fuel and running costs.',
    p_soil: 'Soil Health',
    p_soil_sub: 'Rest the land and reduce fertilizer bills next season.',
    p_yield: 'Harvest Goal',
    p_yield_sub: 'Stick to known reliable crops or go for maximum tonnage?',
    p_resilience: 'Weather Resilience',
    p_resilience_sub: 'Protection from frost, drought, or heatwaves.',
    opt_water_any: "Doesn't Matter",
    opt_water_mid: 'Low Water',
    opt_water_high: 'Rain Only (Dryland)',
    opt_soil_any: "Doesn't Matter",
    opt_soil_mid: 'Rest the Soil',
    opt_soil_high: 'Natural Nitrogen Fix',
    opt_yield_any: "Doesn't Matter",
    opt_yield_mid: 'Reliable Harvest',
    opt_yield_high: 'Maximum Yield',
    opt_res_normal: 'Normal Conditions',
    opt_res_mid: 'Frost & Heat Resistant',
    opt_res_high: 'Extreme Weather Proof',
    advanced_title: 'Irrigation & Climate Scenario',
    lbl_precip_change: 'Rainfall Delta',
    lbl_temp_change: 'Temperature Delta',
    lbl_irrigation: 'Do you have irrigation?',
    opt_irr_any: 'Not specified',
    opt_irr_yes: 'Yes, Irrigated',
    opt_irr_no: 'No, Rainfed only',
    lbl_market: 'Season Type',
    opt_mkt_any: 'Any season',
    opt_mkt_kislik: 'Winter Crop',
    opt_mkt_yazlik: 'Summer Crop',
    opt_mkt_bahar: 'Spring Crop',
    btn_run_analysis: 'Analyse Field with NASA Data',
    btn_running: 'Querying NASA Satellite Data…',
    welcome_title: 'Satellite-guided crop selection tailored for your field.',
    welcome_desc: 'Select your field on the map and set your season. We correlate NASA temperature, moisture, and sunshine patterns to find crops that yield well without depleting your land.',
    pil_1_title: 'Natural Soil Feeding',
    pil_1_desc: 'Rotations with pulses fix nitrogen naturally, saving on fertilizer for subsequent years.',
    pil_2_title: 'Water Protection',
    pil_2_desc: 'Matches seasonal rainfall so you avoid unnecessary well pumping and electricity costs.',
    pil_3_title: 'Climate Defense',
    pil_3_desc: 'Identifies frost and heatwave risks during sensitive blooming stages.',
    m_temp: 'Mean Temp',
    m_precip: 'Daily Rain',
    m_solar: 'Solar Energy',
    m_wind: 'Wind Speed',
    best_match_badge: 'Top Recommended Crop',
    lbl_yield_ratio: 'Yield Ratio',
    lbl_yield_per_dec: 'Est. Harvest / decare',
    strategies_heading: '3 Cultivation Approaches',
    strategies_sub: 'Pick the route that matches your farming priority.',
    tab_stress: '12-Month Field Risk & Growth Proxy',
    tab_timeline: 'Daily NASA Climate Series',
    btn_report: 'Download Field Report (.txt)',
    leg_temp: 'Heat Stress Risk',
    leg_water: 'Moisture Deficit',
    leg_ndvi: 'Crop Greenness Rate',
    income_title: 'Estimated Income',
    income_hint: 'Based on average market price × field size × yield',
    income_total_yield: 'Total Yield',
    income_price_per_kg: 'Avg. Market Price',
    income_gross: 'Gross Revenue',
    drought_title: 'Drought Risk Assessment',
    drought_level: 'Risk Level',
    drought_desc: 'What This Means',
  },
  tr: {
    lang_code: 'English',
    loc_title: 'Tarla Konumu',
    btn_locate: 'Cihaz Konumu',
    ph_address: 'Adres veya yer adı girin…',
    lbl_lat: 'Enlem',
    lbl_lon: 'Boylam',
    lbl_field_size: 'Tarla Büyüklüğü',
    lbl_decare: 'dönüm',
    date_title: 'Ekim ve Gözlem Dönemi',
    lbl_start: 'Ekim Tarihi',
    lbl_end: 'Hasat Tarihi',
    pref_title: 'Tarlanız İçin Ne İstiyorsunuz?',
    lbl_current_crop: 'Şu an tarlada ne ekili?',
    opt_empty_crop: 'Boş / Nadas (Yeni ürün ekeceğim)',
    lbl_prev_crop: 'Geçen yıl ne ekilediniz?',
    opt_prev_none: 'Hatırlamıyorum / İlk yıl',
    p_water: 'Su Durumu (Sulama İhtiyacı)',
    p_water_sub: 'Sulama az olsun, mazot masrafı düşsün.',
    p_soil: 'Toprak Sağlığı',
    p_soil_sub: 'Tarlayı yormayalım, gübre masrafını azaltsın.',
    p_yield: 'Mahsul Hedefi',
    p_yield_sub: 'Garanti bildiğimiz ürün mü, yoksa en yüksek verim mi?',
    p_resilience: 'Hava Şartı Güvencesi',
    p_resilience_sub: 'Don, kuraklık veya kavurucu sıcağa karşı dayanıklılık.',
    opt_water_any: 'Farketmez',
    opt_water_mid: 'Az Su Yetsin',
    opt_water_high: 'Hiç Su İstemesin (Kupkuru)',
    opt_soil_any: 'Farketmez',
    opt_soil_mid: 'Toprağı Dinlendirsin',
    opt_soil_high: 'Toprağa Doğal Gübre Bıraksın',
    opt_yield_any: 'Farketmez',
    opt_yield_mid: 'Alışıldık Garanti Ürün',
    opt_yield_high: 'En Yüksek Tonaj & Verim',
    opt_res_normal: 'Normal Şartlar',
    opt_res_mid: 'Sıcağa ve Dona Dayanıklı',
    opt_res_high: 'En Zorlu Havada Bile Yanmasın',
    advanced_title: 'Sulama ve İklim Simülasyonu',
    lbl_precip_change: 'Yağış Sapması',
    lbl_temp_change: 'Sıcaklık Sapması',
    lbl_irrigation: 'Sulama İmkanı',
    opt_irr_any: 'Belirtilmemiş',
    opt_irr_yes: 'Evet, Sulu Tarım',
    opt_irr_no: 'Hayır, Kuru Tarım',
    lbl_market: 'Ürün Grubu',
    opt_mkt_any: 'Tüm Sezonlar',
    opt_mkt_kislik: 'Kışlık',
    opt_mkt_yazlik: 'Yazlık',
    opt_mkt_bahar: 'Bahar',
    btn_run_analysis: 'NASA Verileriyle Analiz Et',
    btn_running: 'NASA Uydu Verileri İnceleniyor…',
    welcome_title: 'NASA uydu verileriyle tarlanıza en uygun ürün seçimi.',
    welcome_desc: 'Haritadan tarla konumunu seçin ve ekim dönemini belirleyin. Sistem geçmiş sıcaklık, yağış ve güneş verilerini inceleyerek en kârlı ve toprağı yormayan ürünleri sıralar.',
    pil_1_title: 'Toprağı Güçlendirir',
    pil_1_desc: 'Nohut, mercimek gibi baklagiller toprağa doğal gübre bırakır.',
    pil_2_title: 'Suyu İdareli Harcar',
    pil_2_desc: 'Bölge yağışına uyan tohumlar önerir, kuyu masrafını düşürür.',
    pil_3_title: 'Don ve Sıcak Vurgununu Önler',
    pil_3_desc: 'Çiçeklenme döneminde aşırı sıcak veya don riski varsa uyarır.',
    m_temp: 'Ortalama Sıcaklık',
    m_precip: 'Günlük Yağış',
    m_solar: 'Güneş Gücü',
    m_wind: 'Rüzgar Hızı',
    best_match_badge: 'Tarlanıza En Uygun 1. Ürün',
    lbl_yield_ratio: 'Bereket Oranı',
    lbl_yield_per_dec: 'Tahmini Hasat / dönüm',
    strategies_heading: 'Size Uygun 3 Farklı Ekim Yolu',
    strategies_sub: 'Kendi amacınıza göre bu 3 yoldan birini seçebilirsiniz.',
    tab_stress: '12 Aylık Tarlada Tehlike & Büyüme Takvimi',
    tab_timeline: 'Gün Gün Hava ve Yağış Ölçümleri',
    btn_report: 'Raporu İndir (.txt)',
    leg_temp: 'Sıcak Vurgunu Riski',
    leg_water: 'Susuzluk Riski',
    leg_ndvi: 'Ürünün Yeşerme Hızı',
    income_title: 'Tahmini Gelir',
    income_hint: 'Ortalama piyasa fiyatı × tarla büyüklüğü × verim',
    income_total_yield: 'Toplam Hasat',
    income_price_per_kg: 'Ortalama Piyasa Fiyatı',
    income_gross: 'Brüt Gelir',
    drought_title: 'Kuraklık Riski Analizi',
    drought_level: 'Risk Düzeyi',
    drought_desc: 'Bu Ne Anlama Geliyor',
  }
};

// Market price estimates (TRY / kg) — approximate for demo
const CROP_MARKET_PRICES = {
  nohut:   { price: 28, unit: '₺/kg' },
  mercan:  { price: 30, unit: '₺/kg' },
  buğday:  { price: 10, unit: '₺/kg' },
  arpa:    { price: 8,  unit: '₺/kg' },
  mısır:   { price: 7,  unit: '₺/kg' },
  bezelye: { price: 25, unit: '₺/kg' },
  patates: { price: 9,  unit: '₺/kg' },
  domates: { price: 6,  unit: '₺/kg' },
};

// Yield data per decare
const CROP_METRICS = {
  nohut:   { ratio_en: 'Yields 1:10', ratio_tr: "1'e 10 Verir", yield_en: '160 - 200 kg / decare', yield_tr: '160 - 200 kg / dönüm', yield_mid: 180 },
  mercan:  { ratio_en: 'Yields 1:12', ratio_tr: "1'e 12 Verir", yield_en: '180 - 230 kg / decare', yield_tr: '180 - 230 kg / dönüm', yield_mid: 205 },
  buğday:  { ratio_en: 'Yields 1:8',  ratio_tr: "1'e 8 Verir",  yield_en: '280 - 380 kg / decare', yield_tr: '280 - 380 kg / dönüm', yield_mid: 330 },
  arpa:    { ratio_en: 'Yields 1:9',  ratio_tr: "1'e 9 Verir",  yield_en: '300 - 420 kg / decare', yield_tr: '300 - 420 kg / dönüm', yield_mid: 360 },
  mısır:   { ratio_en: 'Yields 1:14', ratio_tr: "1'e 14 Verir", yield_en: '950 - 1250 kg / decare', yield_tr: '950 - 1250 kg / dönüm', yield_mid: 1100 },
  bezelye: { ratio_en: 'Yields 1:10', ratio_tr: "1'e 10 Verir", yield_en: '200 - 260 kg / decare', yield_tr: '200 - 260 kg / dönüm', yield_mid: 230 },
  patates: { ratio_en: 'Yields 1:6',  ratio_tr: "1'e 6 Verir",  yield_en: '2500 - 3500 kg / decare', yield_tr: '2500 - 3500 kg / dönüm', yield_mid: 3000 },
  domates: { ratio_en: 'Yields 1:15', ratio_tr: "1'e 15 Verir", yield_en: '4000 - 6000 kg / decare', yield_tr: '4000 - 6000 kg / dönüm', yield_mid: 5000 },
};

function getFarmerJudgment(score, lang) {
  if (score >= 75) {
    return {
      title: lang === 'tr' ? 'Tam Tarlanın Malı' : 'Prime Field Match',
      sub: lang === 'tr' ? 'Bu hava ve toprakta gözün kapalı ekebilirsin' : 'Ideal climate & soil conditions with minimum risk'
    };
  } else if (score >= 50) {
    return {
      title: lang === 'tr' ? 'Güzel Tutar (Bakım İster)' : 'Good Fit (Requires Care)',
      sub: lang === 'tr' ? 'Sulamayı ve bakımı aksatmazsan iyi ürün verir' : 'Healthy yields expected with steady irrigation & care'
    };
  } else {
    return {
      title: lang === 'tr' ? 'Tarlayı Yorma (Riskli)' : 'High Risk for Field',
      sub: lang === 'tr' ? 'Bu sezon iklim ve su şartları masrafını zor kurtarır' : 'Climate stress may suppress yield below investment cost'
    };
  }
}

function getDroughtAssessment(precipMmDay, lang) {
  // daily average precipitation
  if (precipMmDay >= 2.5) {
    return {
      levelClass: 'status-low',
      level: lang === 'tr' ? 'Düşük' : 'Low',
      desc: lang === 'tr'
        ? 'Yağış yeterli. Kuraklık riski minimal, çoğu ürün güvenli.'
        : 'Rainfall is sufficient. Drought risk is minimal; most crops are safe.'
    };
  } else if (precipMmDay >= 1.2) {
    return {
      levelClass: 'status-mid',
      level: lang === 'tr' ? 'Orta' : 'Moderate',
      desc: lang === 'tr'
        ? 'Yağış sınırda. Su tasarruflu ürün tercih edin veya sulama planlayın.'
        : 'Rainfall is borderline. Prefer drought-tolerant crops or plan supplemental irrigation.'
    };
  } else {
    return {
      levelClass: 'status-high',
      level: lang === 'tr' ? 'Yüksek' : 'High',
      desc: lang === 'tr'
        ? 'Ciddi kuraklık riski. Yalnızca kurak dayanıklı ürün ekin, sulamayı güvence altına alın.'
        : 'Serious drought risk. Plant only drought-resistant crops and secure irrigation.'
    };
  }
}

let currentLang = 'tr';
let appState = {
  ort: null,
  raw: null,
  rotationResult: null
};

// DOM references
const latInput = document.getElementById('latInput');
const lonInput = document.getElementById('lonInput');
const fieldSizeInput = document.getElementById('fieldSizeInput');
const startDateInput = document.getElementById('startDate');
const endDateInput = document.getElementById('endDate');
const mevcutCropSelect = document.getElementById('mevcutCrop');
const previousCropSelect = document.getElementById('previousCrop');
const addressInput = document.getElementById('addressInput');
const btnGeocode = document.getElementById('btnGeocode');

const pSu = document.getElementById('p_su');
const pToprak = document.getElementById('p_toprak');
const pKara = document.getElementById('p_kara');
const pGuclu = document.getElementById('p_guclu');

const judgmentTitle = document.getElementById('judgmentTitle');
const judgmentSub = document.getElementById('judgmentSub');
const bestYieldRatio = document.getElementById('bestYieldRatio');
const bestYieldPerDecare = document.getElementById('bestYieldPerDecare');

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
const bestCropSub = document.getElementById('bestCropSub');

const strategiesContainer = document.getElementById('strategiesContainer');
const riskWarningsRow = document.getElementById('riskWarningsRow');

const incTotalYield = document.getElementById('incTotalYield');
const incPricePerKg = document.getElementById('incPricePerKg');
const incGrossRevenue = document.getElementById('incGrossRevenue');

const droughtLevel = document.getElementById('droughtLevel');
const droughtDesc = document.getElementById('droughtDesc');

let stressChartInstance = null;
let timelineChartInstance = null;
let leafletMap = null;
let mapMarker = null;

function showBanner(msg, isSuccess = false) {
  statusBannerText.textContent = msg;
  statusBanner.className = 'status-banner' + (isSuccess ? ' success' : '');
  statusBanner.style.display = 'block';
  setTimeout(() => { statusBanner.style.display = 'none'; }, 5000);
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

  leafletMap.on('click', (e) => { updateCoords(e.latlng.lat, e.latlng.lng); });
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
  if (mapMarker) mapMarker.setLatLng([roundedLat, roundedLon]);
}

async function geocodeAddress() {
  const query = addressInput.value.trim();
  if (!query) return;

  btnGeocode.disabled = true;
  try {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`;
    const res = await fetch(url, { headers: { 'Accept-Language': 'en' } });
    const data = await res.json();
    if (data && data.length > 0) {
      const lat = parseFloat(data[0].lat);
      const lon = parseFloat(data[0].lon);
      updateCoords(lat, lon);
      if (leafletMap) leafletMap.setView([lat, lon], 11);
      showBanner(data[0].display_name, true);
    } else {
      showBanner(currentLang === 'tr' ? 'Adres bulunamadı.' : 'Address not found.');
    }
  } catch {
    showBanner(currentLang === 'tr' ? 'Adres araması başarısız.' : 'Address search failed.');
  } finally {
    btnGeocode.disabled = false;
  }
}

async function loadCrops() {
  try {
    const res = await fetch('/api/bitkiler');
    if (!res.ok) throw new Error('Crops could not be loaded');
    const crops = await res.json();

    const emptyOpt = `<option value="">${I18N[currentLang].opt_empty_crop}</option>`;
    mevcutCropSelect.innerHTML = emptyOpt;

    const prevNoneOpt = `<option value="">${I18N[currentLang].opt_prev_none}</option>`;
    previousCropSelect.innerHTML = prevNoneOpt;

    for (const [key, crop] of Object.entries(crops)) {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = crop.ad;
      mevcutCropSelect.appendChild(opt);

      const opt2 = opt.cloneNode(true);
      previousCropSelect.appendChild(opt2);
    }
  } catch (err) {
    console.error(err);
  }
}

function initPills() {
  document.querySelectorAll('.choice-pills').forEach(group => {
    const parentRow = group.closest('.weight-row');
    const hiddenInput = parentRow.querySelector('input[type="hidden"]');
    group.querySelectorAll('.choice-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.choice-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        hiddenInput.value = btn.dataset.val;
        if (appState.ort) debounceRotation();
      });
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

  mevcutCropSelect.addEventListener('change', () => { if (appState.ort) debounceRotation(); });
  previousCropSelect.addEventListener('change', () => { if (appState.ort) debounceRotation(); });
  cIrrigation.addEventListener('change', () => { if (appState.ort) debounceRotation(); });
  cMarket.addEventListener('change', () => { if (appState.ort) debounceRotation(); });
  fieldSizeInput.addEventListener('change', () => { if (appState.rotationResult) updateIncomeCard(appState.rotationResult); });
}

let debounceTimer = null;
function debounceRotation() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => runRotationCalculation(), 250);
}

function setLanguage(lang) {
  currentLang = lang;
  langText.textContent = I18N[lang].lang_code;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang][key]) el.textContent = I18N[lang][key];
  });

  // Update placeholders
  if (addressInput) {
    addressInput.placeholder = I18N[lang].ph_address;
  }

  if (appState.ort) runRotationCalculation();
}

async function runFullAnalysis() {
  const lat = parseFloat(latInput.value);
  const lon = parseFloat(lonInput.value);
  const start = formatDateForAPI(startDateInput.value);
  const end = formatDateForAPI(endDateInput.value);

  if (isNaN(lat) || isNaN(lon)) {
    showBanner(currentLang === 'tr' ? 'Lütfen geçerli koordinat girin.' : 'Please enter valid coordinates.');
    return;
  }

  if (!start || !end || start >= end) {
    showBanner(currentLang === 'tr' ? 'Bitiş tarihi başlangıçtan sonra olmalı.' : 'End date must be after start date.');
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
    if (!res.ok || data.error) throw new Error(data.error || 'NASA POWER data unavailable.');

    appState.ort = data.ortalama;
    appState.raw = data.raw;

    valTemp.textContent = appState.ort.sıcaklık_C;
    valPrecip.textContent = appState.ort.yağış_mm_gun;
    valSolar.textContent = appState.ort.güneş_MJ_m2_gun;
    valWind.textContent = appState.ort.rüzgar_m_s;

    // Drought risk
    updateDroughtCard(appState.ort.yağış_mm_gun);

    welcomePlaceholder.style.display = 'none';
    analysisContent.style.display = 'block';

    renderTimelineChart(appState.raw);
    await runRotationCalculation();

    showBanner(currentLang === 'tr' ? 'NASA iklim verileri başarıyla işlendi!' : 'NASA climate data loaded successfully!', true);
  } catch (err) {
    showBanner(`Error: ${err.message}`);
  } finally {
    btnAnalyze.disabled = false;
    btnAnalyze.querySelector('.btn-spinner').style.display = 'none';
    btnAnalyze.querySelector('.btn-label').textContent = I18N[currentLang].btn_run_analysis;
  }
}

function updateDroughtCard(precipMmDay) {
  const assessment = getDroughtAssessment(precipMmDay, currentLang);
  droughtLevel.innerHTML = `<span class="status-indicator ${assessment.levelClass}"></span><span>${assessment.level}</span>`;
  droughtDesc.textContent = assessment.desc;
}

function updateIncomeCard(data) {
  if (!data || !data.en_iyi_bitki) return;
  const bitkiKey = data.en_iyi_bitki.anahtar || '';
  const metrics = CROP_METRICS[bitkiKey];
  const marketData = CROP_MARKET_PRICES[bitkiKey];
  const fieldSize = parseFloat(fieldSizeInput.value) || 50;

  if (metrics && marketData) {
    const totalYield = Math.round(metrics.yield_mid * fieldSize);
    const price = marketData.price;
    const gross = Math.round(totalYield * price);
    incTotalYield.textContent = `${totalYield.toLocaleString()} kg`;
    incPricePerKg.textContent = `${price} ${marketData.unit}`;
    incGrossRevenue.textContent = `${gross.toLocaleString()} ₺`;
  } else {
    incTotalYield.textContent = '—';
    incPricePerKg.textContent = '—';
    incGrossRevenue.textContent = '—';
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
    onceki: previousCropSelect.value || null,
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
    if (!res.ok || data.error) throw new Error(data.error || 'Rotation could not be calculated.');

    appState.rotationResult = data;
    renderResultsUI(data);

    // Also update drought card with fresh lang
    if (appState.ort) updateDroughtCard(appState.ort.yağış_mm_gun);
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

  // Hero Crop Card
  if (data.en_iyi_bitki) {
    const bitkiKey = data.en_iyi_bitki.anahtar || '';
    bestCropName.textContent = data.en_iyi_bitki.bitki;

    const judgment = getFarmerJudgment(data.en_iyi_bitki.skor, currentLang);
    judgmentTitle.textContent = judgment.title;
    judgmentSub.textContent = judgment.sub;

    const metrics = CROP_METRICS[bitkiKey] || {
      ratio_en: 'Yields 1:8-10', ratio_tr: "1'e 8-10 Verir",
      yield_en: '200 - 300 kg / decare', yield_tr: '200 - 300 kg / dönüm'
    };
    bestYieldRatio.textContent = currentLang === 'tr' ? metrics.ratio_tr : metrics.ratio_en;
    bestYieldPerDecare.textContent = currentLang === 'tr' ? metrics.yield_tr : metrics.yield_en;

    const grup = data.en_iyi_bitki.grup ? ` · ${data.en_iyi_bitki.grup.toUpperCase()}` : '';
    bestCropSub.textContent = (currentLang === 'tr'
      ? 'Mevcut iklim rejimine ve toprak hedeflerinize en yüksek bereketi sağlayan ana ürün'
      : 'Highest yielding and most suitable crop for your field conditions') + grup;

    // Income card
    updateIncomeCard(data);
  }

  // 3 Strategy Cards
  strategiesContainer.innerHTML = '';
  if (data.stratejiler) {
    data.stratejiler.forEach((strat, idx) => {
      const card = document.createElement('div');
      card.className = 'strategy-column-card';
      card.innerHTML = `
        <span class="strat-card-tag">Route ${idx + 1}</span>
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
  if (data.stres_takvimi) renderStressChart(data.stres_takvimi);
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
      labels,
      datasets: [
        {
          label: currentLang === 'tr' ? 'Sıcaklık Stresi (%)' : 'Thermal Stress (%)',
          data: tempStress,
          borderColor: '#b47b2b',
          backgroundColor: 'rgba(180,123,43,0.08)',
          fill: true, tension: 0.3, pointRadius: 3
        },
        {
          label: currentLang === 'tr' ? 'Su Stresi (%)' : 'Moisture Deficit (%)',
          data: waterStress,
          borderColor: '#236477',
          backgroundColor: 'rgba(35,100,119,0.08)',
          fill: true, tension: 0.3, pointRadius: 3
        },
        {
          label: currentLang === 'tr' ? 'NDVI Büyüme Eğrisi' : 'NDVI Phenology',
          data: ndvi,
          borderColor: '#255d36',
          backgroundColor: 'transparent',
          borderDash: [4, 4], tension: 0.3, pointRadius: 3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, max: 100, grid: { color: '#e5ebe0' }, ticks: { font: { family: 'JetBrains Mono', size: 11 }, color: '#5e6b5f' } },
        x: { grid: { display: false }, ticks: { font: { family: 'Plus Jakarta Sans', size: 11 }, color: '#5e6b5f' } }
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
      labels,
      datasets: [
        {
          label: currentLang === 'tr' ? 'Sıcaklık (°C)' : 'Temperature (°C)',
          data: t2mData, borderColor: '#b47b2b',
          backgroundColor: 'transparent', tension: 0.2, yAxisID: 'y'
        },
        {
          label: currentLang === 'tr' ? 'Yağış (mm/gün)' : 'Rain (mm/day)',
          data: precData, borderColor: '#236477',
          backgroundColor: 'rgba(35,100,119,0.15)', tension: 0.2, yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { type: 'linear', position: 'left', grid: { color: '#e5ebe0' }, ticks: { font: { family: 'JetBrains Mono', size: 11 } } },
        y1: { type: 'linear', position: 'right', grid: { display: false }, ticks: { font: { family: 'JetBrains Mono', size: 11 } } },
        x: { grid: { display: false }, ticks: { font: { family: 'JetBrains Mono', size: 10 } } }
      }
    }
  });
}

function downloadReport() {
  if (!appState.ort || !appState.rotationResult) {
    showBanner(currentLang === 'tr' ? 'Lütfen önce analizi tamamlayın.' : 'Please complete analysis first.');
    return;
  }
  const ort = appState.ort;
  const res = appState.rotationResult;
  const fieldSize = parseFloat(fieldSizeInput.value) || 50;
  const lines = [
    '=====================================================',
    '  FIELD SHIFT — NASA SPACE APPS DECISION REPORT    ',
    '=====================================================',
    `Date: ${new Date().toLocaleString()}`,
    `Location: Lat ${latInput.value}°N, Lon ${lonInput.value}°E`,
    `Period: ${startDateInput.value} → ${endDateInput.value}`,
    `Field size: ${fieldSize} decare`,
    '',
    '1. NASA POWER CLIMATE OBSERVATIONS (DAILY AVG)',
    '-----------------------------------------------------',
    `- Mean Temperature: ${ort.sıcaklık_C} °C`,
    `- Daily Rainfall: ${ort.yağış_mm_gun} mm/day`,
    `- Solar Radiation: ${ort.güneş_MJ_m2_gun} MJ/m²/day`,
    `- Wind Speed: ${ort.rüzgar_m_s} m/s`,
    '',
    '2. ROTATION STRATEGIES',
    '-----------------------------------------------------'
  ];

  (res.stratejiler || []).forEach((strat, i) => {
    lines.push(`Route ${i + 1}: ${strat.ad}`);
    lines.push(`  Crop: ${strat.bitki} (Score: ${strat.skor}/100)`);
    lines.push(`  Rationale: ${strat.neden}`);
    lines.push(`  Evidence: ${strat.kanit}`);
    lines.push(`  Gains: ${(strat.faydalar || []).join(', ')}`);
    lines.push(`  Precautions: ${(strat.riskler || []).join(', ')}`);
    lines.push('');
  });

  if (res.risk_uyarilari && res.risk_uyarilari.length) {
    lines.push('3. RISK WARNINGS');
    lines.push('-----------------------------------------------------');
    res.risk_uyarilari.forEach(r => lines.push(`- ${r.mesaj}`));
    lines.push('');
  }

  lines.push('Data Source: NASA POWER Daily Agroclimatology (power.larc.nasa.gov)');
  lines.push('Note: This report is a decision support simulation.');

  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `field_shift_report_${formatDateForAPI(startDateInput.value)}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function setupUIListeners() {
  // Geocode button
  btnGeocode?.addEventListener('click', geocodeAddress);
  addressInput?.addEventListener('keydown', (e) => { if (e.key === 'Enter') geocodeAddress(); });

  // Geolocate
  document.getElementById('btnGeolocate')?.addEventListener('click', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        updateCoords(pos.coords.latitude, pos.coords.longitude);
        if (leafletMap) leafletMap.setView([pos.coords.latitude, pos.coords.longitude], 10);
      }, () => {
        showBanner(currentLang === 'tr' ? 'Cihaz konumuna erişilemedi.' : 'Could not access device location.');
      });
    }
  });

  // Tabs
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
  btnLang.addEventListener('click', () => { setLanguage(currentLang === 'en' ? 'tr' : 'en'); });

  // Coord inputs sync to map
  [latInput, lonInput].forEach(inp => {
    inp.addEventListener('change', () => {
      const lat = parseFloat(latInput.value);
      const lon = parseFloat(lonInput.value);
      if (!isNaN(lat) && !isNaN(lon) && mapMarker) {
        mapMarker.setLatLng([lat, lon]);
        leafletMap.panTo([lat, lon]);
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  initLeaflet();
  await loadCrops();
  initPills();
  setupUIListeners();
  setLanguage('tr'); // Varsayılan Türkçe
});
