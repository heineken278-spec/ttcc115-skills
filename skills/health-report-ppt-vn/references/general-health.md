# Y tế Tổng quát — Framework Báo cáo

## NHẬN DIỆN ĐƠN VỊ → CHỌN PALETTE

| Từ khoá | Loại | Palette gợi ý |
|---------|------|--------------|
| cấp cứu, EMS, 115, TVT, trạm vệ tinh | Pre-hospital/EMS | Teal Trust (xem bên dưới) |
| bệnh viện đa khoa, BV chuyên sâu | Hospital | Medical Blue |
| phòng khám, PKDK | Ambulatory | Clinical White |
| trạm y tế, YTDP, y tế xã/phường | Primary care | Public Health Green |
| sở y tế, TTYT, trung tâm y tế | Quản lý/tuyến trên | Medical Blue |

### Palettes

```
TEAL TRUST (EMS/CC):
  primary #0F4C5C | accent #E63946 | bg #EEF5F8 | cover #F0F6F8

MEDICAL BLUE (BV):
  primary #1E3A5F | accent #00A8CC | bg #F0F5FB | cover #F8FBFF

PUBLIC HEALTH GREEN (y tế cơ sở):
  primary #2C5F2D | accent #F96167 | bg #F2F7F0 | cover #F8FBF7

CLINICAL WHITE (phòng khám):
  primary #0D3B66 | accent #EE6C4D | bg #F5F7FA | cover #FFFFFF
```

---

## SLIDE KPI — CẤU TRÚC 4 THÀNH PHẦN

Mỗi KPI card cần đủ:
```
[SỐ LỚN 48–72pt]    ← giá trị chính
[Nhãn 14pt bold]    ← tên chỉ số
[Phụ chú 12pt]      ← tỷ lệ, so sánh kỳ trước, hoặc đơn vị
[Màu border trái]   ← phân loại (tốt=xanh lá / cảnh báo=đỏ)
```

### KPI ưu tiên theo loại đơn vị

**EMS / Cấp cứu ngoại viện:**
- Response time ← QUAN TRỌNG NHẤT (thời gian tiếp cận)
- Call volume, Dispatch rate, On-scene time
- Transport destination mix
- Clinical outcomes (ROSC, death on scene)
- Disease category (ICD top 5)

**Bệnh viện:**
- Lượt khám/nội trú, BOR (công suất giường %)
- Thời gian chờ trung bình
- Tỷ lệ tái nhập viện 30 ngày
- Top 10 bệnh (ICD)
- Tỷ lệ phẫu thuật an toàn (nếu có)

**Y tế cộng đồng/trạm y tế:**
- Tỷ lệ bao phủ vaccine
- Số ca phát hiện / điều trị / khỏi
- Tỷ lệ per 1,000 dân (luôn dùng rate, không chỉ số tuyệt đối)
- Coverage rate các chương trình mục tiêu

---

## CẤU TRÚC THEO LOẠI BÁO CÁO

### Báo cáo định kỳ (tháng/quý/năm):
```
S1: Bìa    S2: Nội dung    S3: Bối cảnh & Tổ chức
S4: KPI tổng    S5–6: Phân tích sâu (2–3 sub-slides)
S7: Xu hướng/So sánh kỳ trước    S8: TL–KK–ĐX    S9: Kết
```

### Báo cáo chuyên đề/sự kiện:
```
S1: Bìa    S2: Tóm tắt điều hành (executive summary box)
S3: Bối cảnh & Phạm vi    S4–6: Kết quả theo chỉ tiêu
S7: So sánh benchmark    S8: Khuyến nghị & Kế hoạch    S9: Kết
```

### Báo cáo đột xuất/sự cố:
```
S1: Bìa    S2: Tóm tắt tình huống (What/When/Where/Impact)
S3: Diễn biến    S4: Phản ứng & Xử lý    S5: Kết quả & Bài học    S6: Kết
```

---

## SO SÁNH BENCHMARK — THỰC TIỄN QUỐC TẾ

Dùng khi báo cáo cần so sánh với chuẩn:

| Chỉ số EMS | Chuẩn quốc tế | Nguồn |
|------------|--------------|-------|
| Response time nội thành | ≤ 8 phút | NFPA 1710 |
| Response time ngoại thành | ≤ 12 phút | ACEP guideline |
| ROSC (cardiac arrest) | 20–40% | ERC 2021 |
| Hospital transport rate | 85–95% | NEMSIS 2024 |
| On-scene time (non-trauma) | ≤ 20 phút | PHTLS standard |

---

## QUY TRÌNH PYTHON XỬ LÝ DATA NHANH

```python
import pandas as pd

def ems_monthly_analysis(df_path, date_col, bv_col, icd_col, target_bv):
    df = pd.read_excel(df_path)
    df[date_col] = pd.to_datetime(df[date_col], dayfirst=True)
    df['THÁNG'] = df[date_col].dt.to_period('M')
    
    return {
        'total':    len(df),
        'monthly':  df.groupby('THÁNG').size(),
        'top_bv':   df[bv_col].value_counts().head(10),
        'target':   df[df[bv_col].str.contains(target_bv, na=False)],
        'other':    df[~df[bv_col].str.contains(target_bv, na=False)],
    }

# ICD classification — dùng list ưu tiên từ tvt-can-gio.md
def classify_icd(icd_str, priority_groups):
    icd = str(icd_str).upper()
    for group_name, codes in priority_groups:
        if any(c in icd for c in codes):
            return group_name
    return 'Khác'
```

---

## THỂ THỨC WORD CHUNG (không phải TTCC115)

Áp dụng Thông tư 01/2011/TT-BNV + Nghị định 30/2020/NĐ-CP:

```
Letterhead:  Trái = CQ chủ quản + CQ ban hành | Phải = Quốc hiệu + Tiêu ngữ
Font:        Times New Roman 13pt
Số VB:       [XXX]/[LOẠI VB]-[TÊN CQ]  (VD: 523/BC-TTCC115)
Kính gửi:    Đơn vị nhận (in hoa phần đầu)
Nội dung:    Căn cứ → I → II → III → Closing
Ký:          Chức vụ + Tên (không ghi chức danh trong khung ký)
Nơi nhận:    Cột trái 55–60% để không wrap tên dài
```
