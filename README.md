# Field Shift — NASA Space Apps Challenge 2026

## Hakkında
**"Field Shift: Adapting Farms with NASA Data"** challenge'ı için geliştirdiğimiz
Streamlit tabanlı karar destek prototipi.

NASA uydu verileri (SMAP, GPM, Landsat, ECOSTRESS, SRTM, NASA POWER) ile yerel
toprak/ülke bilgilerini birleştirerek çiftçilere **ürün döndürme (crop rotation)**
stratejilerini karşılaştıran bir araç.

## Kurulum ve Çalıştırma

```bash
cd field_shift_app
pip install -r requirements.txt
streamlit run app.py
```

## Özellikler

- 🛰️ **NASA veri kartı:** SMAP土壌 nemi, GPM yağış, Landsat NDVI, ECOSTRESS yüzey sıcaklığı, SRTM eşya yüksekliği ve türetilmiş stres endeksleri.
- 🗺️ **Konum haritası:** Folium ile işaretli tarla merkezi ve su stresi çevreleyici.
- 📊 **En az 4 strateji karşılaştırması:** Mevcut döndürme + Toprak Sağlığı + Su Tasarrufu + Gelir/Pazar odaklı seçenekler.
- 🧮 **Skorlama:** Toprak sağlığı, su verimliliği, erozyon azaltma, zarar kıracı etki, gelir potansieli, iklim dayanışma.
- 📝 **Her strateji için:** Fayda, bilgi boşluğu, risk, kanıt ve yerel inceleme listesi.
- 💾 **Rapor indirme:** TXT formatında özet rapor.

## NASA Challenge Uyumu

| Challenge gereksinimi | Uygulama |
|---|---|
| NASA Earth observations | SMAP, GPM, Landsat, ECOSTRESS, SRTM, NASA POWER yapısı |
| Yerel土土/ülke bilgisi | Kullanıcı konumu ve öncelik girdileri |
| En az 3 rotation stratejisi | 4 strateji (mevcut dahil) |
| Her strateji için neden/kanıt/fayda/risk | Detay akordion kartlarında |
| Farmer-centered design | Basit slider girdileri, indirilebilir rapor |
| Yerel uzmanlaşmayı desteklemek | "Yerel inceleme gerekli" uyarıları |

## Not (Prototip)
Bu demo'da gerçek NASA Earthdata API yerine, NASA parametre isimlerini ve ölçeklerini yansıtan belirli konumlara göre üretilen sentetik veri kullanılmıştır. Gerçek kayıtlar için Earthdata/DAAC API entegrasyonu ve USDA SSURGO/CDL verileri eklenmelidir.

## Lisans
Açık kaynak (hackathon prototipi).