---
name: ttcc115-thiet-ke-visual
description: "Hỗ trợ thiết kế và lên brief đồ họa cho TTCC115 — infographic sơ cứu, ảnh mạng xã hội, poster sự kiện, thumbnail video. LUÔN dùng skill này khi được yêu cầu: thiết kế infographic, làm ảnh đăng mạng xã hội, brief thiết kế, lên ý tưởng visual, poster chương trình đào tạo, thumbnail YouTube, ảnh bìa Facebook, template bài đăng, hoặc bất kỳ yêu cầu nào có chứa: thiết kế, infographic, visual, poster, ảnh, hình, thumbnail, template, brief cho designer."
---

Hỗ trợ thiết kế và lên brief đồ họa cho TTCC115.

---

## QUY TẮC TỐI THƯỢNG — KHÔNG CẮT TỪ TÀI LIỆU CHUẨN

**TUYỆT ĐỐI KHÔNG cắt nguyên trang/hình từ PDF tài liệu chuyên môn TTCC115 để dùng làm ảnh đăng/infographic.** Tài liệu (Sổ tay SCC, Sách bán) là nguồn chuyên môn — không phải kho ảnh.

**Cách tạo hình minh họa đúng — 3 lựa chọn:**

1. **Tự vẽ infographic bằng SVG → cairosvg → PNG** (cách Claude dùng cho bài đột quỵ v3 — đã thành công):
   - Viết SVG trực tiếp, dùng `cairosvg.svg2png()` để xuất PNG
   - Header: chữ đỏ #C8102E lớn trên nền trắng
   - Box nội dung: nền trắng/đỏ tươi, viền đỏ, rounded corners
   - Icon vẽ bằng SVG path (X bằng path `M 42,42 L 78,78 M 42,78 L 78,42`, tick, mũi tên, stick figure)
   - Footer ghi nguồn: "Nguồn: [tên tài liệu] — TTCC115"
   - Tham khảo cấu trúc đã thành công: file `outputs/gen_images.py` từ chiến dịch đột quỵ

2. **Brief designer chuyên nghiệp** dùng tool Canva/Figma — output đăng MXH chuẩn pixel

3. **Tham khảo bố cục/concept** từ tài liệu chuẩn — nhưng phải tự vẽ lại, không bao giờ screenshot hoặc copy nguyên

---

## BỘ NHẬN DIỆN THƯƠNG HIỆU TTCC115 (CẬP NHẬT)

**Màu chính (BẮT BUỘC DÙNG):**
- Đỏ chính: **#C8102E** (đỏ cấp cứu chuẩn — không dùng #CC0000 cũ)
- Xám phụ: #595959 (text mô tả, footer, ghi chú)
- Đen heading: #1A1A1A
- Trắng nền: #FFFFFF
- Xanh dương phụ: #003087 (cho thông tin chuyên sâu, ít dùng)
- Xanh ngọc xác nhận: #0F766E (cho check ✅, "đúng")

**Font:**
- Chính: Be Vietnam Pro (Google Font, tối ưu tiếng Việt) — ưu tiên cho mọi infographic/poster
- Thay thế (nếu không cài được): Calibri (default Word), Inter, Montserrat
- TUYỆT ĐỐI tránh: font không hỗ trợ dấu tiếng Việt (Anton, Oswald không có ă/â/đ)

**Logo TTCC115:** xuất hiện mọi ấn phẩm, góc cố định (thường góc trên/dưới phải)
**Số 115:** kích thước lớn, nổi bật trong mọi thiết kế liên quan cấp cứu

**PHONG CÁCH:** WHO Vietnam + FV Hospital — sạch, đáng tin, không rườm rà
**TRÁNH:** flashy, nhiều hiệu ứng, màu lòe loẹt, quá nhiều font khác nhau

---

## KÍCH THƯỚC CHUẨN TỪNG NỀN TẢNG

| Loại | Kích thước | Ghi chú |
|---|---|---|
| Facebook Post | 1200x630px | Landscape — tốt cho feed |
| Facebook/Zalo Square | 1080x1080px | Tốt nhất cho mobile feed |
| Instagram Post | 1080x1080px (square) hoặc 1080x1350px (portrait) | Portrait lấy nhiều diện tích feed hơn |
| Instagram/FB/TikTok Stories | 1080x1920px (9:16) | Toàn màn hình dọc |
| YouTube Thumbnail | 1280x720px | 16:9 — khuôn mặt + text lớn |
| TikTok cover | 1080x1920px | Hiển thị dọc khi ở profile |
| Infographic website | 1200x[chiều cao tuỳ nội dung] | Landscape hoặc portrait đều được |
| Poster A3 in ấn | 2480x3508px (300dpi) | Cho sự kiện đào tạo |
| Ảnh chèn vào file Word | 540-600px chiều ngang là vừa | Đảm bảo in A4 đẹp |

---

## TEMPLATE INFOGRAPHIC SƠ CỨU CHUẨN TTCC115

Mẫu đã dùng thành công cho bài đột quỵ v3:

```svg
<svg viewBox="0 0 1200 480" xmlns="http://www.w3.org/2000/svg">
  <!-- Header đỏ -->
  <text x="600" y="55" text-anchor="middle" font-size="44" font-weight="900" fill="#C8102E">
    [TIÊU ĐỀ INFOGRAPHIC]
  </text>
  <text x="600" y="92" text-anchor="middle" font-size="22" fill="#595959">
    [Sub-tiêu đề mô tả]
  </text>

  <!-- 4 box hoặc 6 box, mỗi box: icon + tiêu đề + 2-3 dòng giải thích -->
  <g transform="translate(40, 130)">
    <rect width="260" height="280" rx="16" fill="#C8102E"/>
    <circle cx="130" cy="70" r="44" fill="#FFE8EB"/>
    <text x="130" y="86" text-anchor="middle" font-size="58" font-weight="900" fill="#C8102E">F</text>
    <text x="130" y="155" text-anchor="middle" font-size="26" font-weight="800" fill="#FFFFFF">FACE</text>
    <text x="130" y="190" text-anchor="middle" font-size="20" fill="#FFFFFF">Méo miệng</text>
  </g>

  <!-- Footer ghi nguồn -->
  <text x="600" y="455" text-anchor="middle" font-size="18" fill="#595959">
    Nguồn: Sổ tay Sơ cấp cứu cộng đồng — TTCC115
  </text>
</svg>
```

**Icon X bằng SVG path** (dùng cho "không nên làm"):
```svg
<circle cx="60" cy="60" r="36" fill="#C8102E"/>
<path d="M 42,42 L 78,78 M 42,78 L 78,42" stroke="#FFFFFF" stroke-width="8" stroke-linecap="round"/>
```

**Workflow tạo PNG:**
```python
import cairosvg
cairosvg.svg2png(bytestring=SVG.encode('utf-8'), write_to='out.png', output_width=1200)
```

---

## CÁC DẠNG ẤN PHẨM VÀ YÊU CẦU

**Infographic sơ cứu (ưu tiên cao nhất):**
- Đọc được trên điện thoại không zoom
- Tối đa 3-4 bước, mỗi bước: 1 icon + 1 câu ngắn
- Màu tương phản cao (đỏ #C8102E / trắng / đen #1A1A1A)
- Mũi tên rõ ràng chỉ thứ tự các bước
- Số 115 ở vị trí dễ thấy
- Footer ghi nguồn tài liệu TTCC115
- Test: zoom out 50% — vẫn đọc được không?

**Ảnh bài đăng Facebook/Zalo:**
- 1200x630px hoặc 1080x1080px
- Text trên ảnh tối đa 20% diện tích (Facebook giới hạn boost nếu nhiều text)
- Màu nền tương phản với text

**Instagram/Facebook Stories (9:16):**
- 1080x1920px
- Safe zone: content quan trọng ở giữa (tránh 250px trên + 400px dưới bị UI che)
- Poll, quiz, sticker: tăng tương tác

**Thumbnail YouTube/TikTok cover:**
- 1280x720px (YouTube) hoặc 1080x1920px (TikTok)
- Khuôn mặt rõ ràng + text lớn (readable khi nhỏ 120px)
- Text tối đa 6 từ
- Màu nền tương phản cao với text

**Poster chương trình đào tạo:**
- Tên chương trình (font lớn nhất)
- Thời gian, địa điểm
- Đối tượng tham gia
- Cách đăng ký: 0965.110.115
- Logo TTCC115

---

## KIỂM TRA ACCESSIBILITY MÀU SẮC

Mọi thiết kế liên quan thông tin y tế phải đảm bảo:
- Tỷ lệ tương phản text/nền tối thiểu 4.5:1 (tiêu chuẩn WCAG AA)
- Ví dụ tốt: Trắng (#FFFFFF) trên Đỏ (#C8102E) = ratio đủ ≥4.5:1 ✅
- Ví dụ xấu: Vàng nhạt trên trắng — khó đọc cho người mắt kém
- Không chỉ dùng màu để truyền thông tin (một số người mù màu) — luôn có icon + text đi kèm
- Test nhanh: https://webaim.org/resources/contrastchecker/

---

## OUTPUT — BRIEF THIẾT KẾ CHUẨN
LOẠI ẤN PHẨM: [tên]
NỀN TẢNG / KÍCH THƯỚC: [thông số px]
MỤC TIÊU: [người xem sẽ làm gì sau khi thấy]
NỘI DUNG CẦN CÓ: [text cụ thể, số điện thoại, logo, nguồn]
TONE: [khẩn cấp / ấm áp / chuyên nghiệp]
PHONG CÁCH THAM KHẢO: [WHO Vietnam / FV Hospital / ví dụ cụ thể]
MÀU TỔNG THỂ: #C8102E + #595959 + #FFFFFF (tuỳ ấn phẩm bổ sung)
FONT: Be Vietnam Pro (chính) / Calibri (thay thế)
GHI CHÚ: [safe zone, accessibility, source attribution]

---

## LIÊN KẾT HỆ SINH THÁI

**Luôn được gọi bởi các skill khác khi cần visual:**
← ttcc115-social-media: khi bài đăng cần ảnh minh họa
← ttcc115-noi-dung-so-cap-cuu: khi nội dung sơ cứu cần infographic
← ttcc115-short-video: khi video cần thumbnail
← ttcc115-chien-luoc-ke-hoach: khi chiến dịch cần visual assets
← ttcc115-seo-web: khi bài website cần hình minh họa SEO

**Gợi ý sau khi tạo brief:**
→ ttcc115-social-media: sau khi có ảnh/infographic — viết caption đi kèm
→ ttcc115-noi-dung-so-cap-cuu: nếu brief cho infographic sơ cứu — đảm bảo nội dung khớp tài liệu chuẩn
