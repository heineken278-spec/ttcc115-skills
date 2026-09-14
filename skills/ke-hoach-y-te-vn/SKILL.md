---
name: ke-hoach-y-te-vn
description: Soạn Kế hoạch trong lĩnh vực y tế Việt Nam (cấp Sở Y tế, cấp đơn vị y tế trực thuộc, cấp UBND/địa phương). LUÔN dùng skill này khi yêu cầu chứa các từ khoá liên quan đến kế hoạch y tế Việt Nam như "kế hoạch", "KH-SYT", "KH-BV", "KH-TTCC", "KH-UBND", "soạn kế hoạch", "lập kế hoạch", "viết kế hoạch", "xây dựng kế hoạch" kết hợp với các chủ đề y tế (Sở Y tế, bệnh viện, trung tâm y tế, cấp cứu 115, TTCC115, trạm y tế, di dời cơ sở y tế, phòng chống dịch, ứng phó sự cố y tế, triển khai chương trình y tế, đề án y tế, vấn đề y tế mới, kháng kháng sinh, an toàn thực phẩm). Hỗ trợ 4 loại kế hoạch chính: (1) Triển khai chương trình/đề án; (2) Di dời, mở rộng, chuyển đổi mô hình cơ sở y tế; (3) Ứng phó sự cố, dịch bệnh, thảm họa; (4) Giải quyết vấn đề y tế mới. Tạo file Word chuẩn thể thức hành chính Việt Nam kèm các phụ lục Chỉ tiêu, Phân công nhiệm vụ và Rủi ro.
---

# Kế hoạch y tế Việt Nam

Skill này hướng dẫn Claude soạn Kế hoạch trong lĩnh vực y tế Việt Nam theo đúng thể thức hành chính, văn phong chuyên nghiệp ngành y tế và khung pháp lý hiện hành.

## Khi nào kích hoạt

Kích hoạt skill này khi người dùng yêu cầu soạn, viết, lập, xây dựng, biên soạn một Kế hoạch trong lĩnh vực y tế. Tín hiệu nhận diện:

- Từ khoá hình thức văn bản: "Kế hoạch", "KH-SYT", "KH-BV", "KH-TTCC", "KH-UBND", số ký hiệu có dạng `số/KH-cơquan`.
- Từ khoá chủ đề y tế: Sở Y tế, bệnh viện, trung tâm y tế, trạm y tế, cấp cứu 115, TTCC115, di dời cơ sở y tế, phòng chống dịch, tiêm chủng, kháng kháng sinh, an toàn thực phẩm, sơ cấp cứu cộng đồng, đào tạo y tế, đầu tư trang thiết bị y tế.
- Từ khoá hành động: "soạn kế hoạch", "viết kế hoạch", "lập kế hoạch", "xây dựng kế hoạch", "biên soạn kế hoạch".

Không kích hoạt khi: yêu cầu là Tờ trình, Báo cáo, Đề án, Dự án, Công văn, Quyết định (đây là các thể loại văn bản khác).

## Workflow

Tuân thủ tuần tự 5 bước sau. Không bỏ qua bước nào.

### Bước 1 — Nhận diện 4 thông số đầu vào

Trước khi bắt đầu soạn, xác định 4 thông số. Nếu không rõ, dùng AskUserQuestion để hỏi người dùng.

1. **Loại Kế hoạch** (1 trong 4 hoặc lai):
   - (A) Triển khai chương trình/đề án — ví dụ: KH phổ cập sơ cấp cứu cộng đồng, KH triển khai chương trình mục tiêu y tế.
   - (B) Di dời, mở rộng, chuyển đổi mô hình cơ sở y tế — ví dụ: KH di dời TTCC115, KH chuyển đổi bệnh viện đa khoa thành bệnh viện chuyên khoa.
   - (C) Ứng phó sự cố, dịch bệnh, thảm họa — ví dụ: KH phòng chống dịch năm, KH ứng phó thảm họa hàng loạt, KH ứng phó sự cố tại cơ sở y tế.
   - (D) Giải quyết vấn đề y tế mới — ví dụ: KH phòng chống kháng kháng sinh, KH ứng phó già hóa dân số.

2. **Cấp ban hành** (ảnh hưởng đến thể thức và bố cục):
   - Cấp Sở Y tế (KH-SYT) — ví dụ: Sở Y tế TP.HCM, Sở Y tế tỉnh.
   - Cấp đơn vị y tế trực thuộc Sở Y tế (KH-BV, KH-TTCC, KH-TTYT) — bệnh viện, trung tâm cấp cứu, trung tâm y tế, trạm y tế.
   - Cấp UBND/địa phương (KH-UBND) — UBND Thành phố, UBND xã/phường.

3. **Phạm vi thời gian**: 1 năm, nhiều năm, theo giai đoạn (lưu ý mốc thời gian phải tính lùi ngược từ đích).

4. **Đặc thù chuyên môn** (nếu có): các đặc điểm chuyên môn quan trọng cần ghi nhớ xuyên suốt, ví dụ cấp cứu ngoài bệnh viện không có giường nội trú, dịch bệnh đặc thù vùng, v.v.

### Bước 2 — Đọc reference phù hợp

Sau khi xác định loại + cấp ban hành, đọc các file reference tương ứng:

- **Bố cục theo cấp ban hành** (chọn 1):
  - `references/01-bo-cuc-cap-so.md` — cho KH cấp Sở Y tế.
  - `references/02-bo-cuc-cap-don-vi.md` — cho KH cấp đơn vị y tế.
  - `references/03-bo-cuc-cap-dia-phuong.md` — cho KH cấp UBND/địa phương.

- **Văn bản pháp lý**: `references/04-van-ban-phap-ly-cot-loi.md` — chọn các văn bản phù hợp với loại KH để đưa vào phần Căn cứ.

- **Nguyên tắc tham mưu**: `references/05-nguyen-tac-tham-muu.md` — bắt buộc đọc cho mọi loại KH. Quan trọng nhất.

- **Văn phong**: `references/06-van-phong-y-te.md` — cách viết Mục đích/Mục tiêu/Yêu cầu chuẩn ngành y tế.

- **Phụ lục**: `references/07-bang-chi-tieu-mau.md` và `references/08-bang-rui-ro-mau.md` — hướng dẫn xây dựng phụ lục.

- **Ví dụ tham chiếu**: `examples/0[1-4]-*.md` — xem ví dụ cùng loại để học phong cách.

### Bước 3 — Lập dàn ý và xin xác nhận

Sau khi đọc reference, trình bày dàn ý với người dùng trước khi viết file Word:

- Bố cục cấp cao (các phần I, II, III…).
- Các văn bản pháp lý đề xuất đưa vào Căn cứ (8–10 văn bản trọng yếu, không liệt kê tràn lan).
- Mục tiêu tổng quát và 3–5 mục tiêu cụ thể.
- Các phụ lục dự kiến.

Đợi người dùng xác nhận hoặc điều chỉnh trước khi sang Bước 4.

### Bước 4 — Soạn file Word

Dùng script `scripts/build_kehoach.js` để tạo file Word chuẩn thể thức hành chính Việt Nam. Script nhận một file JSON cấu hình mô tả nội dung kế hoạch.

Quy trình:

1. Tạo file JSON cấu hình `/sessions/<session>/mnt/outputs/kehoach_input.json` theo schema dưới.
2. Cài node module: `npm install docx` (nếu chưa có).
3. Chạy: `node /sessions/<session>/mnt/.claude/skills/ke-hoach-y-te-vn/scripts/build_kehoach.js <input.json> <output.docx>`.
4. Validate: `python3 /sessions/<session>/mnt/.claude/skills/docx/scripts/office/validate.py <output.docx>`.

Schema JSON (rút gọn):

```json
{
  "cap_ban_hanh": "so|don_vi|dia_phuong",
  "co_quan_ban_hanh": {
    "cap_tren": "ỦY BAN NHÂN DÂN THÀNH PHỐ HỒ CHÍ MINH",
    "co_quan": "SỞ Y TẾ",
    "co_quan_2": "TRUNG TÂM CẤP CỨU 115"
  },
  "so_ky_hieu": "KH-TTCC115",
  "noi_ban_hanh": "Thành phố Hồ Chí Minh",
  "tieu_de": "Di dời hoạt động của Trung tâm Cấp cứu 115 sang Cơ sở 2 ...",
  "can_cu": ["Căn cứ Luật ...", "Căn cứ Nghị định ...", "..."],
  "doan_dan": "Trung tâm Cấp cứu 115 xây dựng Kế hoạch ... cụ thể như sau:",
  "muc_dich_yeu_cau": {
    "co_phan_nay": true,
    "muc_dich": ["Đoạn 1...", "Đoạn 2..."],
    "yeu_cau": ["Yêu cầu 1", "Yêu cầu 2", "..."]
  },
  "muc_tieu": {
    "tong_quat": "Đoạn mục tiêu tổng quát.",
    "cu_the": ["Mục tiêu 1: ...", "Mục tiêu 2: ...", "..."],
    "bang_chi_tieu_o_phu_luc": true
  },
  "noi_dung_thuc_hien": [
    {
      "tieu_de": "Nội dung 1. ...",
      "tieu_muc": [
        {"tieu_de": "1.1. ...", "doan_van": ["...", "..."]},
        {"tieu_de": "1.2. ...", "doan_van": ["..."]}
      ],
      "thoi_gian": "Q3/2026"
    }
  ],
  "kinh_phi": ["Đoạn 1", "Đoạn 2"],
  "to_chuc_thuc_hien": [
    {"don_vi": "Ban Giám đốc", "nhiem_vu": ["...", "..."]},
    {"don_vi": "Khoa A", "nhiem_vu": ["..."]}
  ],
  "che_do_bao_cao": ["Đoạn 1", "Đoạn 2"],
  "noi_nhan": ["Sở Y tế (để báo cáo);", "Lưu: VT, TC-HC."],
  "nguoi_ky": "GIÁM ĐỐC",
  "phu_luc_1_chi_tieu": [
    {"stt": "1", "noi_dung": "...", "chi_tieu": "...", "moc": "Q3/2026", "muc_tieu": "MT1"}
  ],
  "phu_luc_2_phan_cong": [
    {"section": "Nội dung 1...", "rows": [
      {"stt": "1.1", "hoat_dong": "...", "san_pham": "...", "chu_tri": "...", "phoi_hop": "...", "thoi_gian": "Q3/2026"}
    ]}
  ],
  "phu_luc_3_rui_ro": [
    {"stt": "1", "rui_ro": "...", "kha_nang": "Trung bình", "tac_dong": "Cao", "bien_phap": "..."}
  ]
}
```

### Bước 5 — Rà soát và đóng góp ý

Trước khi present file, tự rà soát theo checklist sau (đọc `references/05-nguyen-tac-tham-muu.md` để biết chi tiết):

- [ ] Số hiệu, ngày, cơ quan các văn bản pháp lý chính xác.
- [ ] Mục tiêu cụ thể có thể đo lường được, không lấn sang vận hành dài hạn.
- [ ] Mốc thời gian tính lùi ngược từ đích, có buffer cho rủi ro.
- [ ] Phân biệt rõ "đã có – di chuyển – đầu tư mới" với KH di dời/đầu tư.
- [ ] Không lấn việc thuộc thẩm quyền cấp khác (ví dụ tách phòng thuộc Sở Y tế quyết định).
- [ ] Không trùng lặp giữa Bảng chỉ tiêu và Bảng phân công nhiệm vụ.
- [ ] Có phụ lục rủi ro (đặc biệt quan trọng với KH di dời và KH ứng phó).
- [ ] Văn phong nhất quán; không lẫn lộn sự kiện và nhận định.

Sau đó present file Word cho người dùng kèm tóm tắt 3 điểm:
- Các quyết định lớn em đã làm thay người dùng.
- Các điểm người dùng cần kiểm tra trước khi ban hành.
- Đề xuất các văn bản đi kèm (Tờ trình, Quyết định thành lập Ban Chỉ đạo, v.v.) nếu có.

## Đặc thù theo loại Kế hoạch

| Loại | Bố cục đặc trưng | Phụ lục bắt buộc | Lưu ý quan trọng |
|---|---|---|---|
| (A) Triển khai chương trình/đề án | Căn cứ → Mục tiêu → Nội dung → Kinh phí → Tổ chức thực hiện → Báo cáo | Chỉ tiêu, Phân công | Bám sát Đề án/Chương trình gốc; không vẽ thêm hoạt động ngoài khung. |
| (B) Di dời, mở rộng, chuyển đổi | Căn cứ → Mục đích, Yêu cầu → Mục tiêu → Nội dung → Kinh phí → Tổ chức → Báo cáo | Chỉ tiêu, Phân công, **Rủi ro** | Bắt buộc có kịch bản phân pha, kế hoạch dự phòng, không gián đoạn dịch vụ. |
| (C) Ứng phó dịch bệnh, sự cố | Căn cứ → Mục tiêu (gồm chỉ tiêu định lượng) → Hoạt động trọng tâm → Tổ chức thực hiện | Chỉ tiêu định lượng dịch tễ | Cấu trúc theo "4 tại chỗ" (chỉ huy, lực lượng, phương tiện, hậu cần); phân vai từng tuyến. |
| (D) Giải quyết vấn đề y tế mới | Căn cứ → Mục đích, Yêu cầu → Mục tiêu → Nội dung (giải pháp) → Kinh phí → Tổ chức → Báo cáo | Chỉ tiêu, Phân công, Rủi ro | Có thể là KH chiến lược nhiều năm; cần lập luận rõ tính cấp thiết và tính khả thi. |

## Tên cơ quan sau sắp xếp đơn vị hành chính 2025

Sau Nghị quyết 202/2025/QH15 về sắp xếp đơn vị hành chính cấp tỉnh và sáp nhập một số sở, cần cẩn trọng khi gọi tên:

- "Sở Y tế Thành phố Hồ Chí Minh" — giữ nguyên.
- "Sở Khoa học và Công nghệ" — đã gộp với Sở Thông tin và Truyền thông; tên gọi hiện hành cần kiểm tra với người dùng.
- "Sở Tài chính" — giữ nguyên.
- "Sở Nội vụ" — giữ nguyên.
- "Quận/Huyện" — sau sắp xếp 2025 không còn cấp quận/huyện ở nhiều địa phương; thay bằng "phường, xã".

Khi có nghi ngờ về tên cơ quan, đề xuất người dùng kiểm tra lại; không tự ý sửa.
