---
name: ttcc115-noi-dung-so-cap-cuu
description: "Tạo nội dung giáo dục sơ cấp cứu cho cộng đồng — mảng ưu tiên số 1 của TTCC115. LUÔN dùng skill này khi được yêu cầu viết về: sơ cứu, cấp cứu tại chỗ, CPR, hô hấp nhân tạo, ép tim ngoài lồng ngực, đột quỵ, tai nạn giao thông, đuối nước, dị vật đường thở, hóc, say nắng, điện giật, bỏng, khi nào gọi 115, kỹ năng y tế cơ bản cho người dân, hoặc bất kỳ tình huống y tế khẩn cấp nào cần xử lý trước khi xe cấp cứu đến."
---

Tạo nội dung giáo dục sơ cấp cứu cộng đồng — mảng ưu tiên số 1 của TTCC115.

NGUYÊN TẮC CỐT LÕI: Biến y khoa phức tạp thành: dễ hiểu + áp dụng ngay trong 30 giây + không gây hoảng loạn + kết thúc bằng GỌI 115.

CẤU TRÚC BẮT BUỘC: NHẬN BIẾT → XỬ LÝ NGAY (tối đa 3 bước) → GỌI 115

---

## NGUỒN DỮ LIỆU CHUYÊN MÔN — BẮT BUỘC THAM CHIẾU TRƯỚC KHI VIẾT

**Trước khi viết bất kỳ nội dung sơ cứu chuyên môn nào, BẮT BUỘC đọc 2 tài liệu chuẩn của TTCC115 trong thư mục Content Studio:**

1. `Sổ tay SCC cộng đồng 115 (1).pdf` — phiên bản ngắn gọn, hình minh họa đẹp, 24 trang
2. `2026_Tài liệu SCCCĐ_sách bán_dieuchinhTG_A5.pdf` — phiên bản chi tiết, có bảng kiểm, câu hỏi lượng giá, lý do giải thích cho từng điều "không nên làm"

**Quy trình bắt buộc:**
1. Dùng `pdftotext -layout` để extract text từ 2 PDF
2. Grep từ khóa chủ đề (đột quỵ / CPR / đuối nước / dị vật / điện giật / bỏng / say nắng / tai nạn giao thông)
3. Đọc kỹ phần liên quan trong cả 2 tài liệu (chúng bổ sung cho nhau)
4. Viết theo đúng nội dung tài liệu

**TUYỆT ĐỐI KHÔNG:**
- Bịa số liệu không có trong tài liệu (ví dụ "X triệu tế bào não chết/phút", "giờ vàng X tiếng")
- Diễn giải y khoa theo ý mình (ví dụ "aspirin loãng máu nên xuất huyết nặng hơn" — chỉ ghi "không tự ý uống thuốc" như tài liệu)
- Gắn [CẦN XÁC NHẬN BÁC SĨ] khi nội dung đã có sẵn trong 2 tài liệu chuẩn — đây là tài liệu chính thức của TTCC115, không cần xác nhận lại

**Khi nào MỚI gắn [CẦN XÁC NHẬN BÁC SĨ]:**
- Nội dung không có trong 2 tài liệu chuẩn mà cần bổ sung kỹ thuật y khoa
- Có số liệu/khuyến cáo từ nguồn ngoài
- Có chỉ định liều thuốc, dụng cụ y tế chuyên dụng

---

## BỔ SUNG KIẾN THỨC NGOÀI ĐỂ TỐI ƯU SEO

**Được phép** bổ sung diễn giải, ví dụ thực tế, FAQ — để tối ưu từ khóa tìm kiếm Google. Nhưng:
- KHÔNG trích dẫn nguồn ngoài (không ghi "theo WHO", "theo NIH")
- KHÔNG bê chép nguyên văn từ bất kỳ nguồn nào — tự diễn đạt lại bằng giọng văn TTCC115
- KHÔNG mâu thuẫn nội dung tài liệu chuẩn
- Giữ tone gần gũi, dễ hiểu cho người dân TP.HCM

**Loại nội dung được phép bổ sung:**
- Diễn giải dân gian: "trúng gió" trong cách nói thường ngày = đột quỵ
- Yếu tố nguy cơ phổ biến: hút thuốc, ít vận động, thừa cân...
- Nguyên nhân tổng quát: bệnh nền không kiểm soát, dị dạng mạch máu...
- FAQ: "Gọi 115 có mất tiền không?", "Người trẻ có bị đột quỵ không?"
- Cách kiểm tra dấu hiệu cụ thể hơn (ví dụ "bảo họ cười để kiểm tra F-Face")

---

## QUY TẮC HÌNH MINH HỌA — KHÔNG CẮT TỪ TÀI LIỆU

**TUYỆT ĐỐI KHÔNG cắt nguyên trang/hình từ PDF tài liệu chuẩn để chèn vào output.** Tài liệu chuyên môn không phải nguồn ảnh để dùng lại tùy ý.

**3 cách tạo hình minh họa đúng:**

1. **Tự vẽ infographic bằng SVG** (đây là cách dùng cho file v3 đã thành công):
   - Dùng `cairosvg` (Python) hoặc viết SVG trực tiếp
   - Header: chữ đỏ #C8102E trên nền trắng
   - Box nội dung: nền trắng hoặc đỏ tươi, viền đỏ
   - Icon vẽ bằng SVG path (X, tick, mũi tên, hình stick figure)
   - Footer ghi nguồn: "Nguồn: [tên tài liệu] — TTCC115"
   - Tham khảo cấu trúc: `outputs/gen_images.py` từ phiên bản v3

2. **Brief designer** qua skill `ttcc115-thiet-ke-visual` nếu cần thiết kế phức tạp hơn

3. **Tham khảo bố cục** từ tài liệu chuẩn được phép — nhưng phải tự vẽ lại, không bao giờ copy nguyên

**Brand color bắt buộc:**
- Đỏ chính: #C8102E (KHÔNG dùng #CC0000 — màu cũ đã đổi)
- Xám phụ: #595959 (cho text mô tả, footer)
- Đen heading: #1A1A1A
- Trắng nền: #FFFFFF

---

## QUY TẮC URL — MỌI BÀI ĐĂNG PHẢI CÓ LINK DẪN VỀ WEBSITE

Khi tạo nội dung cho nhiều nền tảng, URL bài chi tiết trên 115.org.vn phải xuất hiện ở các vị trí sau:
- **Facebook**: link đặt ở comment đầu (admin post) — KHÔNG để trong body (Facebook giảm reach các post có link ngoài)
- **Zalo OA**: link đặt cuối tin
- **TikTok/Reels/Shorts**: link bio + nhắc "Link trong bio" ở cuối video
- **Website**: là source, không cần link ngoài — nhưng phải có internal links 2-3 bài liên quan trên 115.org.vn

**Cấu trúc URL chuẩn:** `https://115.org.vn/[slug-khong-dau-co-gach-ngang]`

Ví dụ: `https://115.org.vn/so-cuu-dot-quy-fast`, `https://115.org.vn/cpr-ep-tim-thoi-ngat`

---

## CHỦ ĐỀ TRọNG TÂM

**Ưu tiên cao (làm trước):**
- CPR / Ép tim ngoài lồng ngực
- Nhận biết đột quỵ (F.A.S.T)
- Tai nạn giao thông — sơ cứu tại chỗ
- Đuối nước

**Ưu tiên trung bình:**
- Dị vật đường thở (hóc — người lớn và trẻ em)
- Say nắng / say nóng
- Điện giật
- Bỏng

---

## HOOK FORMULAS

- Số liệu (chỉ dùng số CÓ trong tài liệu): "FAST — 4 dấu hiệu, 10 giây..."
- Tình huống: "Người ngồi cạnh bạn trên xe buýt đột nhiên ngã xuống..."
- Phản bác: "Nhiều người vẫn cạo gió khi gặp người đột quỵ. Tài liệu chính thức TTCC115 nói gì?"
- Tự kiểm tra: "Bạn đang sơ cứu đúng chưa? [hành động phổ biến nhưng sai]"

---

## ROUTING — CHỌN FORMAT PHÙ HỢP

| Mục đích | Format tốt nhất | Skill kết hợp |
|---|---|---|
| Lan truyền nhanh, reach rộng | Bài đăng MXH ngắn + ảnh | ttcc115-social-media + ttcc115-thiet-ke-visual |
| Dạy kỹ năng trực quan | Video ngắn TikTok/Reels | ttcc115-short-video |
| Lưu trữ lâu dài, SEO | Bài website dài + infographic | ttcc115-seo-web + ttcc115-thiet-ke-visual |
| Cả 3 cùng lúc (chiến dịch) | Gói content 4 định dạng + URL chung | Gợi ý cả 3 skill trên + tạo URL website trước |

---

## TEMPLATE BÀI ĐĂNG MXH

[HOOK]
Tình huống: [mô tả ngắn]
✅ Bước 1: [hành động cụ thể]
✅ Bước 2: [hành động cụ thể]
✅ Bước 3: [hành động cụ thể]
⚠️ KHÔNG nên: [sai lầm phổ biến — đối chiếu tài liệu chuẩn]
📞 Gọi 115 ngay nếu [dấu hiệu cần cấp cứu]
👉 Đọc đầy đủ: [URL website ở comment đầu / cuối tin / bio]
Lưu bài này — bạn sẽ cần nó.
#TTCC115 #CấpCứu115 #SơCấpCứu #115HCMC

---

## TEMPLATE SCRIPT VIDEO (TikTok/Reels)

[0-3s] HOOK: câu hỏi + hình ảnh tình huống
[3-20s] BƯỚC 1: hành động + text overlay
[20-40s] BƯỚC 2: tiếp nối tự nhiên
[40-55s] BƯỚC 3: hoàn thành chuỗi
[55-60s] CTA: "Gọi 115" + "Lưu video này" + "Link trong bio"

Để viết script đầy đủ hơn, dùng skill `ttcc115-short-video`.

---

## TEMPLATE BÀI WEBSITE (SEO)

Tiêu đề: "Cách [xử lý tình huống] đúng cách — Hướng dẫn từ TTCC115"
H2: Đại cương / Đột quỵ (CPR/...) là gì?
H2: Nhận biết dấu hiệu
H2: Nguyên nhân và yếu tố nguy cơ (bổ sung cho SEO — không cần trích nguồn)
H2: Các bước xử lý (numbered list — tối đa 3 bước)
H2: Sai lầm thường gặp / Những điều không nên làm
H2: Câu hỏi thường gặp (FAQ — bổ sung cho SEO)
H2: Khi nào gọi 115 ngay
Kết: tóm tắt + CTA + internal links

Để tối ưu SEO sâu hơn, dùng skill `ttcc115-seo-web`.

---

## QUY TẮC AN TOÀN Y TẾ
- KHÔNG đơn giản hóa đến mức sai y khoa
- KHÔNG hứa kết quả cụ thể
- KHÔNG bịa số liệu — chỉ dùng số CÓ trong 2 tài liệu chuẩn
- Luôn nhắc: đây là sơ cứu TẠM THờI trước khi xe 115 đến
- ENCODING TIẾNG VIỆT: Khi tạo file Word/PPTX/XLSX, LUÔN dùng ký tự tiếng Việt có dấu trực tiếp trong code. Node.js và Python đều hỗ trợ UTF-8 đầy đủ.

---

## LIÊN KẾT HỆ SINH THÁI

**Luôn gợi ý sau khi tạo nội dung sơ cứu:**
→ ttcc115-thiet-ke-visual: tạo infographic minh họa (bắt buộc — phải tự vẽ, không cắt từ tài liệu)
→ ttcc115-social-media: đóng gói thành caption đăng Facebook/Zalo + chèn URL

**Gợi ý theo ngữ cảnh:**
→ ttcc115-short-video: nếu chủ đề phù hợp làm video — đề xuất viết script
→ ttcc115-seo-web: nếu cần viết bài website — tối ưu SEO từ đầu (URL chính thức trước, các bài MXH sau)
→ ttcc115-chien-luoc-ke-hoach: nếu cần series nhiều bài về sơ cứu — lập kế hoạch tổng thể

**Kích hoạt ngay (không cần hỏi):**
→ ttcc115-krc-bao-chi: nếu phát hiện thông tin sơ cứu sai đang lan trên MXH
