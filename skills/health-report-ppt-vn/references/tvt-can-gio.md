# TVT Cần Giờ / TTCC115 — Template Chuyên Biệt

## THÔNG TIN CỐ ĐỊNH

```
Đơn vị:      Trung tâm Cấp cứu 115 TP.HCM
Trực thuộc:  Sở Y tế TP.HCM
Trạm:        Trạm CC115 đường thủy – BV Từ Dũ cơ sở 2
Địa điểm:    Đường Lương Văn Nho, khu phố Miễu Ba, xã Cần Giờ, TP.HCM
              (trong khuôn viên Bệnh viện Từ Dũ cơ sở 2)
Logo trái:   Sở Y tế TP.HCM
Logo phải:   TTCC115
Kính trình:  Ban Giám đốc Sở Y tế TP.HCM
Ký tên:      GIÁM ĐỐC – Nguyễn Duy Long
Số VB:       [   ]/BC-TTCC115
```

**Địa danh chuẩn — TP.HCM đã bỏ cấp huyện:**
```
✓  Bệnh viện Từ Dũ cơ sở 2           ✗  BV Từ Dũ CS2 – huyện Cần Giờ
✓  xã Cần Giờ, TP.HCM                ✓  xã đảo Thạnh An
✓  xã Bình Khánh                     ✓  xã An Thới Đông
```

---

## CẤU TRÚC PPT CHUẨN (9 SLIDES)

```
S1: Bìa           "BÁO CÁO HOẠT ĐỘNG | Trạm CC115 đường thủy"
S2: Nội dung      4 mục: Bối cảnh+Tổ chức | KQHĐ | Phối hợp BVTDCS2 | TL-KK-ĐX
S3: Bối cảnh & Tổ chức Trạm  (GỘPP 2 mục cũ)
S4: KQHĐ (1)     KPI tổng (163/142/135/5) + Phân bổ 4 xã
S5: KQHĐ (2)     Chuyển viện: top 21 BV + Line chart xu hướng tháng
S6: KQHĐ (3)     Mô hình bệnh tật ICD – 2 cột: BV Từ Dũ CS2 | Các BV khác
S7: Phối hợp BV Từ Dũ CS2  (3 card: 42 tiếp nhận | 24/7 CSVC | 6 hỗ trợ)
S8: Thuận lợi – Khó khăn – Đề xuất  (3 cột cùng 1 slide)
S9: Kết
```

---

## PALETTE MÀU

```
primary:    #0F4C5C   teal đậm — tiêu đề, border, primary series
accent:     #E63946   đỏ coral — KPI quan trọng, đề xuất, cảnh báo
secondary:  #5F9EA0   teal nhạt — series 2, timeline
bgSlide:    #EEF5F8   nền content slides
bgCover:    #F0F6F8   nền bìa và kết (PHẢI sáng hơn bgSlide)
ok:         #059669   xanh lá — thuận lợi
warn:       #D97706   vàng cam — hỗ trợ vận chuyển, ghi chú
text:       #1E293B
textMuted:  #475569
```

---

## FILE ĐẦU VÀO MỖI KỲ

| File | Dùng cho | Ưu tiên |
|------|----------|---------|
| `BA_tu_luc_trien_khai.xlsx` | Sheet "chuyển viện" → phân tích ICD | Cao nhất |
| `So_truong_hop_chuyen_vien_BVTuDuCS2.xlsx` | Xu hướng theo tháng (42 ca) | Cao |
| `Cac_truong_hop_ho_tro_van_chuyen_dum.xlsx` | 6 ca hỗ trợ từ BV Từ Dũ CS2 | Trung bình |
| `so_lieu_bao_cao_giao_ban.docx` | Số liệu tổng hợp + nhận xét | Nguồn chính |

---

## PHÂN LOẠI ICD — BẢNG TRA NHANH

Dùng mã **đầu tiên khớp** theo thứ tự ưu tiên sau:

```
1.  Ngưng tim         I46, R99
2.  Suy hô hấp        J96, J81, J18, J01, R06, R04
3.  Đột quỵ não       I64, G45, G83, I69, I63
4.  Tim mạch          I21, I22, R57, I50, I25, I49, I48, I95, R00
5.  CT ngực/bụng      S20, S21, S27, S36
6.  CT đầu/cột sống   S06, S09, S00, S01, S02, S12
7.  CT chi/gãy xương  S42, S52, S62, S72, S82, S87, S90, S91
8.  Tiêu hoá          K25, K35, K80, K85, K92, A09
9.  Thần kinh         G40, R56
10. RL đường huyết    E16, E11
11. Sản khoa          O00–O60, N93, Z32, O33, O34
12. Cơ xương khớp     M47, M48, M54, M75, M81
13. Ngộ độc/Dị ứng    T42, T62, T63, T78, T88
14. Sốt/Suy kiệt      R50, R64
15. Khác              (catch-all)
```

**ICD hay nhầm:**
- `R57.1` = Sốc giảm thể tích (KHÔNG phải `R57` chung)
- `K30` = Khó tiêu chức năng → KHÔNG list trong hỗ trợ vận chuyển dùm
- Ca sản vào BV Từ Dũ CS2: bình thường (BV sản mạnh)
- Ca sản KHÔNG vào BV Từ Dũ CS2: ghi chú lý do (sẹo mổ cũ, khung chậu hẹp...)

---

## SLIDE PHỐI HỢP BV TỪ DŨ CS2 — PHÂN BIỆT 3 LOẠI

```
TIẾP NHẬN (42 ca):
  Trạm CC115 chuyển BN ĐẾN BV Từ Dũ CS2 → BV điều trị
  → Số hiển thị: "42" | Sub: "ca tiếp nhận (31,1% tổng CV)"

HỖ TRỢ CSVC (24/7):
  BV bố trí phòng làm việc cho kíp thường trực
  → Số hiển thị: "24/7" | Sub: "kíp cấp cứu thường trực"

HỖ TRỢ VẬN CHUYỂN DÙM (6 ca):  ← ĐÂY MỚI LÀ "HỖ TRỢ THỰC SỰ"
  BV Từ Dũ CS2 gọi → Trạm CC115 chuyển BN đến BV chuyên sâu hơn
  → Số hiển thị: "6" | Sub: "ca vượt khả năng BV Từ Dũ CS2"
  → Mặt bệnh 5 ca nặng: Đột quỵ (I64), Suy HH cấp (J96), Xẹp đốt sống (M48.5),
    Sỏi đường mật (K80.3), Đa vết thương hở chân (S91.3, S96.1)
    [1 ca nhi K30 — không liệt kê vì không phải bệnh nặng]

KHÔNG gọi 93 ca là "phối hợp" — đó là ca chuyển đến BV KHÁC (không phải Từ Dũ CS2)
```

---

## SLIDE KHÓ KHĂN & ĐỀ XUẤT

**Khó khăn chuẩn (2 mục):**
```
KK1: Khoảng cách địa lý xa
  Bình Khánh ~39km (TB 27,9'), An Thới Đông ~32km (TB 28,8') → gấp ~3× Cần Giờ
  → Tác động: ảnh hưởng kết cục lâm sàng đột quỵ, NMCT, CT nặng

KK2: Mất liên lạc tuyến Rừng Sác
  → Khó trao đổi kíp ↔ người dân, ảnh hưởng triển khai

⚠ KHÔNG ghi "kíp chờ phà Tắc Suất" trong mục Khó khăn
  (chỉ ghi kỹ thuật trong Nhận xét Bảng 2)
```

**Đề xuất chuẩn (3 mục — ghi ngắn gọn):**
```
ĐX1: Tăng cường bố trí cấp cứu ngoại viện tại khu vực xã Bình Khánh
ĐX2: Tăng cường hội chẩn trước chuyển viện đến BV trung tâm
ĐX3: Đẩy mạnh truyền thông Trạm cấp cứu đường thủy
```

---

## THỂ THỨC WORD (BC/TTCC115)

**Letterhead chuẩn — tỷ lệ cột & font đã fix:**

```
Header table: 3 cột, NO border
  Cột trái (42%):  font 10pt (size:20)
    Dòng 1: SỞ Y TẾ THÀNH PHỐ HỒ CHÍ MINH  [không bold, left-align]
    Dòng 2: TRUNG TÂM CẤP CỨU 115            [bold, left-align]
  Cột gap (2%):    rỗng
  Cột phải (56%):  font 10pt (size:20), center-align
    Dòng 1: CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM  [bold]
    Dòng 2: Độc lập – Tự do – Hạnh phúc           [bold, underline]

Row 2 (số hiệu + ngày):
  Trái: Số: ___/BC-TTCC115         [left-align, 13pt]
  Phải: Thành phố HCM, ngày...     [italic, center-align, 13pt]

Ký tên table: 2 cột (58% Nơi nhận | 42% Giám đốc), NO border
  Nơi nhận 58% → đủ rộng để không wrap tên dài
```

**Thứ tự nội dung:**
```
BÁO CÁO (centered, bold 14pt)
[Subtitle underlined]
Kính gửi: [đơn vị nhận]
Căn cứ: [văn bản pháp lý]
[Mở đầu]
I. Đặc điểm tình hình
II. Báo cáo số liệu chuyên môn (Bảng 1 → 4 + Nhận xét)
III. Thuận lợi – Khó khăn – Đề xuất
[Closing] Trân trọng./.
[Ký tên]
```
