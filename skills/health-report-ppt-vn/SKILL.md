---
name: health-report-ppt-vn
description: >
  Tạo báo cáo PowerPoint và văn bản Word chuyên nghiệp cho các đơn vị y tế
  Việt Nam. LUÔN dùng skill này bất cứ khi nào người dùng đề cập đến: làm
  báo cáo, làm slide, thuyết trình, ppt, trình bày kết quả — kết hợp với bất
  kỳ từ khoá y tế nào như: TVT, trạm vệ tinh, cấp cứu, 115, bệnh viện,
  phòng khám, trạm y tế, sở y tế, y tế, EMS, khám chữa bệnh, hoạt động y tế,
  kết quả hoạt động, báo cáo tháng, báo cáo quý, báo cáo năm, báo cáo BGĐ,
  BC-TTCC115, BC/BV, hội nghị y tế. Kích hoạt kể cả khi chỉ nói "làm báo
  cáo cho bệnh viện", "slide cho trạm", "ppt kết quả hoạt động". Skill hỗ
  trợ 2 chế độ: (A) TVT Cần Giờ/TTCC115 — template chuyên biệt đã tối ưu
  sẵn; (B) báo cáo y tế bất kỳ — tự xây dựng form tối ưu theo best practices.
---

# Skill: Báo cáo PPT Y tế Việt Nam

## BƯỚC 0 — NHẬN DIỆN VÀ CHỌN CHẾ ĐỘ

Xác định ngay loại báo cáo từ context, **không hỏi lại** nếu đã rõ:

| Dấu hiệu trong câu hỏi | Chế độ | Tham chiếu |
|------------------------|--------|------------|
| TVT, Trạm vệ tinh, CC115, Từ Dũ CS2, Cần Giờ, TTCC115 | **A — TVT Cần Giờ** | Đọc `references/tvt-can-gio.md` |
| Bệnh viện khác, phòng khám, trạm y tế, sở y tế | **B — Y tế tổng quát** | Đọc `references/general-health.md` |
| Không rõ | Hỏi 1 câu: "Đây là báo cáo cho đơn vị nào?" | — |

Sau khi nhận diện, **đọc ngay file reference tương ứng** trước khi làm bất cứ điều gì.

---

## NGUYÊN TẮC CHUNG (áp dụng cả 2 chế độ)

### Cấu trúc slide chuẩn

```
S1:  Bìa        — nền SÁNG, logo ≥0.65", 3 KPI mini, kỳ báo cáo nổi bật
S2:  Nội dung   — menu 4–6 mục dạng card, kèm kỳ báo cáo
S3:  Bối cảnh & Tổ chức  — timeline + pháp lý + KPI tổ chức (GỘPP 1 slide)
S4+: Kết quả   — chia sub-slides; mỗi slide 1 chủ đề rõ ràng
SN-1: Đánh giá  — Thuận lợi | Khó khăn | Đề xuất (3 cột, 1 slide)
SN:  Kết        — nền SÁNG, KPI summary, lời kết trang trọng
```

**Quy tắc bắt buộc:**
- Slide bìa và kết: nền sáng `#F0F6F8` — KHÔNG dùng nền teal đậm
- Logo: đặt trong vòng tròn nền nhạt, KHÔNG đặt thẳng lên nền màu
- Không dùng gạch ngang dưới tiêu đề, không dùng full-width color bar
- Content text: Calibri 13–15pt; Tiêu đề: Cambria 26–30pt bold; KPI: 48–72pt

### Biểu đồ theo loại dữ liệu

| Dữ liệu | Chart | Ghi chú |
|---------|-------|---------|
| So sánh nhiều mục | BAR dọc/ngang | Sắp xếp descending |
| Xu hướng theo tháng | LINE | Highlight điểm đỉnh bằng màu accent |
| Cơ cấu phân bổ | DOUGHNUT | Tối đa 6 phần |
| Mô hình bệnh tật | Horizontal bar + inline text | Kèm mã ICD italic nhỏ |
| KPI card | Shape + số lớn | 3–4 card/hàng |

### QA trước khi xuất

- [ ] Số liệu KPI khớp file Excel nguồn (check tổng)
- [ ] Slide bìa/kết: nền sáng, không teal đậm
- [ ] Logo đủ to (≥ 0.65"), không bị clip
- [ ] Không có text tràn khung
- [ ] Slide xu hướng có ≥ 6 điểm dữ liệu tháng
- [ ] Tổng các phần tử = tổng chung

---

## XUẤT FILE WORD (khi được yêu cầu)

Khi cần xuất Word báo cáo hành chính:
→ Đọc `references/tvt-can-gio.md` mục **"Thể thức Word"** (nếu là TTCC115)
→ Hoặc áp dụng chuẩn Thông tư 01/2011 + Nghị định 30/2020/NĐ-CP cho đơn vị khác

Thông số kỹ thuật bất biến:
```
Font:   Times New Roman 13pt  (size:26 trong docx-js)
Page:   A4  (11906 × 16838 DXA)
Margin: L=1701  R=1134  T=1418  B=1134  (3/2/2.5/2 cm)
CW:     9071 DXA  (usable width)
Header: 3 cột — trái 42% | gap 2% | phải 56%
        Font header: 10pt (size:20), không dùng size 22–24
```

---

## ⚠️ ENCODING TIẾNG VIỆT — QUY TẮC BẮT BUỘC

Khi viết script tạo file (JS cho docx-js, Python cho python-pptx):

- **LUÔN dùng ký tự có dấu trực tiếp:**
  ```js
  // ✅ ĐÚNG: "Trung tâm Cấp cứu 115 TP.HCM"
  // ❌ SAI:  "Trung tam Cap cuu 115 TP.HCM"
  ```
- Node.js, Python, Write tool đều hỗ trợ UTF-8 — không cần escape hay strip diacritics
- Kiểm tra sau khi xuất: đếm ký tự ord > 127 trong XML nội bộ của file — phải > 0
