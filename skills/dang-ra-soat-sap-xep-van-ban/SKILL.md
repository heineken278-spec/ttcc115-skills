---
name: dang-ra-soat-sap-xep-van-ban
description: >-
  Rà soát & sắp xếp văn bản Đảng MỚI cho Chi bộ TTCC115 — quy trình khép kín cho Chi ủy viên (Đ/c Hoàng).
  LUÔN dùng skill này khi anh Hoàng đưa/để file mới vào thư mục "Hoạt động Chi bộ TTCC115" hoặc đính kèm file,
  và nói: "rà soát 2 file này", "rà soát và sắp xếp", "có file mới xử lý giúp", "sắp xếp văn bản trong thư mục",
  "xử lý văn bản mới", "phân loại văn bản Đảng", hoặc mở task mới trong project Công tác Đảng TTCC115 mà phát hiện
  có file lạ ở gốc thư mục Chi bộ. Skill tự làm trọn: tìm file mới → đọc/OCR → phân loại A/B/C + chỉ ra việc gắn TTCC115
  → kiểm tra trùng/thay thế → đổi tên chuẩn → chuyển đúng thư mục con → cập nhật Mục lục + Sổ theo dõi → mời soạn Bản tin.
  Xử lý cả văn bản ĐẾN (cấp trên gửi về) lẫn văn bản ĐI (do Chi bộ/Trung tâm ban hành: báo cáo, nghị quyết, kế hoạch, thông báo…).
  Kích hoạt kể cả khi anh chỉ nói ngắn "2 file mới nha", "văn bản đi từ Trung tâm", hay "xử lý giúp anh".
---

# Rà soát & sắp xếp văn bản Đảng mới — Chi bộ TTCC115

Đây là quy trình Chi ủy viên (Đ/c Hoàng) làm mỗi khi có văn bản Đảng gửi về giữa 2 kỳ sinh hoạt. Mục tiêu: không sót việc, không để văn bản lạc ở gốc thư mục, lưu đúng chỗ, và phổ biến được tới đảng viên. Làm trọn 7 bước dưới, báo cáo anh ở cuối.

> **Nguyên tắc nền:** KHÔNG bịa số hiệu/ngày/tên đồng chí. Bản scan đọc bằng OCR thì luôn kèm câu "đối chiếu bản gốc khi trích dẫn chính thức". Văn bản Mật xử lý riêng, không đưa lên sổ dùng chung/Zalo.

## Đường dẫn & lưu ý kỹ thuật (đọc trước, hay vướng)

- Thư mục Chi bộ: `/Users/…/Documents/Hoạt động Chi bộ TTCC115`. Trong bash, **đường dẫn tiếng Việt có dấu bị lỗi Unicode (NFC/NFD)** khi gõ literal → dùng glob: `cd /sessions/*/mnt/H*/` rồi thao tác đường dẫn tương đối.
- **Edit tool bị chặn ghi vào thư mục này.** Sửa file (Mục lục, sổ) phải dùng `bash` (python/sed). `mv`, `cp`, ghi file mới bằng bash thì được.
- Xoá file trực tiếp trong thư mục Chi bộ thường bị chặn → chuyển bản trùng/hết hiệu lực vào `_LUU_TRU/[TRUNG_LAP_CAN_XOA]/` hoặc `_LUU_TRU/[HET_HIEU_LUC]/` thay vì xoá.

## Quy trình 7 bước

### Bước 1 — Tìm file mới ở gốc thư mục
Liệt kê file (`.pdf/.docx/.xlsx`) nằm ở **gốc** thư mục Chi bộ, tức chưa vào thư mục con `00_…`–`10_…`, `99_…`. Đó là file mới cần xử lý. Bỏ qua `.DS_Store`. Đuôi tên kiểu `(1)`, `(2)` là dấu vết tải trùng — cần kiểm tra ở Bước 4.

### Bước 2 — Đọc nội dung
- `pdfinfo` lấy số trang; `pdftotext` thử lấy text.
- Nếu **rất ít text** (bản scan) → OCR **trang bìa** (trang 1, đôi khi 1–2): `pdftoppm -f 1 -l 2 -r 220 -png file /tmp/pg` rồi `tesseract /tmp/pg-1.png -`. OCR tiếng Việt bằng gói `eng` sẽ rớt dấu nhưng vẫn đọc hiểu được.
- Nếu OCR **trống**: tiền xử lý rồi thử lại — `convert pg-1.png -colorspace Gray -contrast-stretch 5%x5% -threshold 60% bw.png` rồi `tesseract bw.png - --psm 6`.
- ⚠️ **Bẫy file "lai" (scan cover + đính kèm số hóa):** nếu tổng file CÓ nhiều text nhưng **trang 1–2 text rỗng** (`pdftotext -f 1 -l 1` ra ~0 ký tự) → **trang đầu là bản scan văn bản chính** (thường là HD/CV/KH của Đảng ủy SYT), phần text đọc được ở trang sau chỉ là **ĐÍNH KÈM** (đề cương, KH của cơ quan khác). **BẮT BUỘC render/OCR trang 1** để lấy đúng số hiệu + cơ quan của văn bản chính — TUYỆT ĐỐI không lấy số hiệu từ phần đính kèm (dễ nhầm "HD 13-HD/ĐU của ĐU SYT" thành "KH 91-KH/BTGDVTU của cơ quan khác").
- Trích: **cơ quan ban hành, số hiệu, ngày, trích yếu, yêu cầu chính, văn bản kèm theo**.

### Bước 3 — Xác định ĐẾN / ĐI, rồi phân loại

**Trước tiên xác định văn bản ĐẾN hay ĐI** (quyết định cách xử lý ở Bước 5–6):
- **ĐẾN** = cấp trên gửi về (CV/HD/CTr của Đảng ủy SYT, NQ/KL/QĐ của TW…). → phân nhóm A/B/C dưới đây.
- **ĐI** = do Chi bộ / Trung tâm ban hành gửi đi. **Dấu hiệu:** số hiệu đuôi **/CB** (Báo cáo `..-BC/CB`, `..-NQ/CB`, `..-KH/CB`, `..-QĐ/CB`, `..-TB/CB`, `..-TTr/CB`) hoặc văn bản do Trung tâm phát hành. → **KHÔNG phân A/B/C**; thay vào đó ghi: **loại VB, người ký (thường Bí thư), người tham mưu soạn, nơi nhận**. Bỏ qua phần A/B/C, sang Bước 4.

**Nếu là văn bản ĐẾN — gắn 1 nhóm:**
- **A — Để quán triệt:** tuyên truyền, học tập, để biết. Không phát sinh việc riêng.
- **B — Để làm:** yêu cầu Chi bộ/đơn vị rà soát, điều chỉnh, tổ chức thực hiện → ghi rõ **việc + người phụ trách (theo QĐ 03) + hạn**.
- **C — Để báo cáo:** yêu cầu gửi báo cáo/số liệu về cấp trên theo hạn → ghi hạn + người soạn + Bí thư ký.

Với nhóm B/C, đối chiếu phân công QĐ 03 để gợi ý đúng người (xem `references/ban_do_thu_muc.md` phần nhân sự). Nêu thẳng nếu việc có địa chỉ rõ (VD: tuyên truyền Công đoàn → Đ/c Thời).

### Bước 4 — Kiểm tra trùng & thay thế
- **Trùng:** tìm số hiệu trong cả thư mục; nếu đã có bản y hệt (đối chiếu nội dung/MD5) → không thêm bản mới, chuyển bản dư vào `_LUU_TRU/[TRUNG_LAP_CAN_XOA]/`.
- **Thay thế:** đọc phần cuối văn bản tìm cụm "thay thế / bãi bỏ / hết hiệu lực". Nếu văn bản mới thay văn bản cũ đang có trong thư mục → báo anh, đề xuất chuyển bản cũ vào `_LUU_TRU/[HET_HIEU_LUC]/`.

### Bước 5 — Đổi tên chuẩn & chuyển đúng thư mục
- Tên chuẩn: **`năm_số-VB_Tên nội dung.ext`** (VD: `2026_1452-CV-ĐU_Tuyên truyền Đại hội XIV Công đoàn Việt Nam NK 2026-2031.pdf`). Nếu OCR không đọc chắc số hiệu thì đặt tên mô tả sạch (không bịa số) và ghi chú "số/ngày cần xác minh".
- Chuyển vào đúng thư mục con theo **bản đồ ở `references/ban_do_thu_muc.md`**:
  - **Văn bản ĐẾN:** CV của Đảng ủy Sở Y tế → `00_Van_ban_chi_dao/06_VB_Dang_uy_So_Y_te/`; VB chiến lược TW/TP → `08_VB_chien_luoc_TW_TP/`; (các chủ đề khác xem bản đồ).
  - **Văn bản ĐI:** Báo cáo Chi bộ gửi ĐU SYT → `08_Bao_cao/`; NQ/QĐ/KH/CTr hồ sơ nhiệm kỳ → `01_Ho_so_Chi_bo/`; nội dung/báo cáo SHCB → `02_Sinh_hoat_chi_bo/2026/Thang_XX/`; biên bản họp → `09_Bien_ban_hop/`.

### Bước 6 — Cập nhật Mục lục & Sổ theo dõi
- **Mục lục:** chỉ cho **văn bản ĐẾN thuộc `00_Van_ban_chi_dao/`** — thêm dòng vào `00_Van_ban_chi_dao/MUC_LUC_VAN_BAN_CHI_DAO.md` (đúng mục thư mục), cập nhật số lượng + ghi dòng "Cập nhật ngày…". Văn bản ĐI không vào mục lục này.
- **Sổ theo dõi** (`10_Triển khai Nhiệm vụ Đ:c Hoàng/2026_Sổ theo dõi văn bản Đảng đến-đi_Chi bộ TTCC115.xlsx`) — ghi đúng sheet:
  - Văn bản **ĐẾN** → sheet **"Đảng văn đến"** (cột Nhóm A/B/C, việc, phụ trách, hạn, đã phổ biến).
  - Văn bản **ĐI** → sheet **"Văn bản đi"** (loại VB, người ký, người tham mưu, nơi nhận).
  - Giữ định dạng Arial 10, wrap, border; cột có dropdown thì điền đúng giá trị. **Không** đưa văn bản Mật lên sổ.
  - ⚠️ Khi sửa xlsx bằng openpyxl **không dùng `cell.fill=None`** (hỏng file); dùng `PatternFill(fill_type=None)`. Nếu lỡ hỏng → dựng lại toàn bộ workbook từ dữ liệu đã biết.

### Bước 7 — Báo cáo & soạn sẵn Bản tin (tự động)
Báo cáo gọn cho anh: mỗi văn bản là gì, nhóm nào, việc gắn TTCC115 (nếu có), đã xếp vào đâu, có trùng/thay thế không.

Rồi **soạn sẵn luôn một Bản tin phổ biến** các văn bản ĐẾN tới đảng viên — không cần hỏi trước — theo skill **`dang-thong-bao-chi-bo`** (loại B "phổ biến", đứng tên Cấp ủy, chạy đủ 3 chốt), đưa vào khối trích để anh chỉ việc copy. Anh vẫn là người quyết định gửi hay không.
- Bỏ qua bước bản tin nếu: toàn bộ là văn bản ĐI, hoặc không có văn bản nào thuộc diện phổ biến, hoặc anh dặn "không cần bản tin".
- Nhắc riêng các văn bản **nhóm B/C** nên đưa vào nội dung SHCB kỳ tới để chốt người + tiến độ.

## Checklist tự kiểm trước khi báo cáo
- [ ] Gốc thư mục đã sạch (không còn file lạc)?
- [ ] Tên file đúng convention `năm_số-VB_Tên`?
- [ ] Đã phân loại A/B/C? Nhóm B/C có người + hạn?
- [ ] Đã kiểm tra trùng/thay thế?
- [ ] Đã cập nhật Mục lục + Sổ theo dõi?
- [ ] Số hiệu/ngày lấy từ OCR có kèm câu đối chiếu bản gốc?
- [ ] Văn bản Mật (nếu có) đã tách riêng, không lên sổ chung?

Chi tiết bản đồ thư mục, convention, và nhân sự: đọc `references/ban_do_thu_muc.md`.
