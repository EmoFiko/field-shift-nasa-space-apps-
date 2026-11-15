# Field Shift — NASA POWER Satellite-Guided Crop Planning & Rotation

NASA POWER günlük ve aylık agro-iklim verilerini (sıcaklık, yağış, güneş radyasyonu, rüzgar hızı) kullanarak çiftçilere toprak sağlığını koruyan, kuraklığa dirençli ve bilimsel **3 Yıllık Ekim Nöbeti (Ürün Rotasyonu)** planları sunan karar destek sistemi.

---

## 🌟 Öne Çıkan Özellikler

1. **3 Yıllık Bilimsel Rotasyon Takvimi:**
   - Önceki yıllarda toprağı tüketen bir mahsul (örn. mısır, pamuk, patates) ekilmişse, sistem 1. yıl toprağı onaran ve doğal azot bağlayan baklagilleri (nohut, kırmızı mercimek, bezelye vb.) rotasyona katar.
   - İkinci ve üçüncü yıllarda verim ve su tasarrufu dengesini kurarak 3 yıllık bir ekim yol haritası sunar.
2. **Dinamik Geçmiş Mahsul Seçimi:**
   - Çiftçi tek bir butonla (`+ Daha Önceki Yılı Ekle`) geriye dönük ekim geçmişini sisteme girebilir (kalabalık 6 seçim kutusu yerine dinamik ve sade arayüz).
3. **NASA POWER Gerçek Aylık İklim & Stres Takvimi:**
   - 12 aylık sıcaklık, su açığı ve fenolojik büyüme (NDVI proxy) eğrisini NASA'nın aylık iklim geçmişinden doğrudan çekerek çizer.
4. **Zengin Türkiye Mahsul Kataloğu (16+ Ürün):**
   - Buğday, arpa, nohut, kırmızı mercimek, ayçiçeği, mısır, pamuk, şeker pancarı, yer fıstığı, sarımsak, soğan vb.
   - Her ürünün beklenen verim (`kg/dönüm`) ve ortalama piyasa fiyatı (`₺/kg`) entegre edilmiştir.
5. **Dönüm Bazlı Tahmini Gelir & Kuraklık Analizi:**
   - Arazi büyüklüğüne göre toplam tonaj ve brüt hasat gelirini dinamik simüle eder.
   - Yağış rejimi eşiklerine göre pratik çiftçi tavsiyesi verir.
6. **İki Dilli (TR / EN) & Çiftçi Dostu Tasarım:**
   - Karmaşık jargon yerine net terimler ve modern SVG ikonlar.

---

## 🚀 Kurulum ve Çalıştırma

Sistem herhangi bir ağır framework bağımlılığı olmadan standart Python ile çalışır:

```bash
git clone https://github.com/kedybaykedy-bit/nasa-tarim.git
cd nasa-tarim

# Sunucuyu başlatın
python3 server.py
```

Tarayıcınızdan erişin:
**[http://localhost:5000](http://localhost:5000)**

---

## 🏗️ Proje Mimarisi

- `server.py`: Hafif yerel HTTP sunucusu. NASA POWER API ve NASA Monthly API çağrıları, rotasyon motoru ve statik dosya sunumu.
- `logic/rotation.py`: İklim uygunluk skorlama motoru, 3 yıllık ekim nöbeti algoritması ve 12 aylık stres takvimi.
- `data/crops.json`: Türkiye şartlarına uyarlanmış 16 temel mahsulün biyolojik limitleri, verim ve fiyat parametreleri.
- `static/`:
  - `index.html`: Leaflet harita, adres arama, 3 yıllık rotasyon kartları ve gelir paneli.
  - `app.js`: Harita yönetimi, dinamik geçmiş mahsul seçicisi, Chart.js görselleştirmeleri ve i18n yönetimi.
  - `style.css`: Sadeleştirilmiş, modern ve duyarlı toprak/tarla temalı CSS.
