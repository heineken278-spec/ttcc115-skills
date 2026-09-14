---
name: luu-van-ban-da-ky
description: >-
  Cổng lưu văn bản ĐÃ BAN HÀNH & ĐÃ KÝ, CÒN HIỆU LỰC vào đúng thư mục trên máy Mac và Google Drive
  của anh Khoa (TTCC115 & Chi bộ TTCC115). BẮT BUỘC kích hoạt mỗi khi có file mới trong BẤT KỲ
  task/chat nào: anh đính kèm PDF/DOCX/XLSX/ảnh scan — KỂ CẢ KHI KHÔNG NÓI GÌ hoặc chỉ gõ ngắn
  ("file mới", "cái này nè", "xem giúp", "vừa ký xong", "đã ban hành", "mới nha"); hoặc thấy file lạ
  ở gốc thư mục Hoạt động TTCC115 / Hoạt động Chi bộ TTCC115 / Google Drive; hoặc anh nói "lưu vào đâu",
  "cất file này", "sắp xếp giúp", "để đúng chỗ". Skill kiểm 3 chốt (đã ban hành – đã ký – còn hiệu lực)
  → trích số hiệu/ngày/cơ quan → định tuyến mảng (TTCC115 chính quyền · Chi bộ Đảng · NCKH & cá nhân)
  → đề xuất tên chuẩn + đích lưu trên cả Mac lẫn Drive → LUÔN HỎI anh xác nhận rồi mới ghi, không tự
  ghi đè. Là cổng vào: bàn giao tiếp cho dang-ra-soat-sap-xep-van-ban (VB Đảng),
  ttcc115-van-ban-phap-ly (tra hiệu lực VBPL), google-drive-inbox-vn (dọn Drive hàng loạt).
---

# Cổng lưu văn bản đã ký — Anh Khoa

## Skill này là gì (và không là gì)

Đây là **cổng vào (front door)**, không phải kho. Nhiệm vụ: chặn mọi file mới, kiểm tra đủ điều kiện lưu trữ, đề xuất chỗ để, hỏi anh, rồi ghi. Sau đó bàn giao cho skill chuyên môn nếu cần xử lý sâu.

| Việc | Skill xử lý |
|---|---|
| Phát hiện file mới, kiểm 3 chốt, đề xuất tên + đích lưu, hỏi, ghi file | **skill này** |
| Văn bản Đảng: phân loại A/B/C, gắn việc, cập nhật Mục lục + Sổ theo dõi, soạn Bản tin | bàn giao `dang-ra-soat-sap-xep-van-ban` |
| Tra hiệu lực VBPL online (thuvienphapluat/vbpl.vn), phát hiện văn bản thay thế | bàn giao `ttcc115-van-ban-phap-ly` |
| Tải file gốc VBPL từ web về kho tra cứu | bàn giao `ttcc115-vbpl-auto-save` |
| Dọn hàng loạt items ở gốc Google Drive bằng script | bàn giao `google-drive-inbox-vn` |

**Không làm:** không lưu dự thảo vào kho chính thức · không xoá file của anh · không tự ghi đè khi trùng tên · không tự lưu mà chưa hỏi.

---

## Nguyên tắc vàng

> **Kho chỉ nhận văn bản đã ban hành, đã ký, còn hiệu lực.** Dự thảo và bản nháp làm bẩn kho — 6 tháng sau không ai phân biệt được bản nào là bản thật.

Ví dụ đời thường: tủ hồ sơ nhà anh chỉ để giấy tờ có công chứng. Bản photo chưa ký thì để rổ giấy nháp trên bàn, không nhét vào tủ.

---

## Quy trình 6 bước

### Bước 1 — Phát hiện

Kích hoạt ngay khi thấy **bất kỳ** dấu hiệu nào:

- Anh đính kèm file vào chat (kể cả không kèm chữ nào)
- Anh nói có file mới / vừa nhận / vừa ký / cần lưu
- Đang làm task khác mà phát hiện file lạ ở **gốc** `Hoạt động TTCC115/`, `Hoạt động Chi bộ TTCC115/`, hoặc root Google Drive
- Anh chuyển tiếp email có văn bản đính kèm → nếu có công cụ Gmail, tải attachment về rồi xử lý như file đính kèm bình thường

**Nhiều file cùng lúc:** xử lý từng file, nhưng **gộp một lần hỏi duy nhất ở cuối** — không hỏi 5 lần cho 5 file. Từ **4 file trở lên**: in một bảng `file → mảng → tên chuẩn → đích đề xuất`, rồi chỉ hỏi **một câu duyệt cả lô** (`Duyệt tất cả` · `Duyệt, trừ mấy dòng em đánh dấu ❓` · `Anh sửa từng dòng`).

### Bước 2 — Kiểm tra cổng (chốt chặn quan trọng nhất)

Đọc `references/nhan_dien_da_ky.md` để có checklist đầy đủ + lệnh kỹ thuật.

**Chốt 0 — chạy trước tiên, luôn luôn:**

- **Có dấu MẬT / TỐI MẬT / TUYỆT MẬT** ở trang 1 → **khoá đích lưu chỉ còn máy Mac**, ở Bước 5 không được đề xuất Google Drive cho file này.
- **Là ảnh chụp / chụp màn hình** (`.jpg/.png/.heic`, PDF ghép từ ảnh điện thoại, ảnh chụp Zalo–Gmail) → **không vào kho chính**; lưu tạm `_DANG_XU_LY/` kèm hậu tố `_ẢNH CHỤP` và nhắc anh xin file PDF gốc.

**Ba chốt chính:**

| Chốt | Đạt khi | Rớt khi |
|---|---|---|
| **1. Đã ban hành** | Có đủ **số hiệu + ngày ban hành + cơ quan** ở góc trái trang 1 | Trống số hiệu, ghi `số:…/…`, `ngày … tháng … năm …` bỏ trống |
| **2. Đã ký** | Có chữ ký tươi/dấu đỏ trên bản scan, HOẶC chữ ký số hợp lệ, HOẶC tên file có `_signed` | Còn track-changes, tên có `draft/dự thảo/v1/v2/final`, .docx đang soạn, ô ký trống |
| **3. Còn hiệu lực** | Không tìm thấy văn bản thay thế; thời hạn ghi trong VB chưa hết | Điều khoản thi hành cho biết đã bị thay thế/bãi bỏ; VB có thời hạn đã qua |

**Rớt bất kỳ chốt nào → KHÔNG lưu vào kho chính.** Báo anh rõ rớt chốt nào, đề xuất 2 lựa chọn: (a) để ở thư mục `_DANG_XU_LY/` cùng cấp, (b) anh xác nhận vẫn muốn lưu thì lưu kèm hậu tố `_DỰ THẢO` hoặc `_HẾT HIỆU LỰC` trong tên file.

Chốt 3 với **VBPL nhà nước** thì phải tra online — gọi `ttcc115-van-ban-phap-ly`. Với **văn bản nội bộ / văn bản đến của Chi bộ**, chỉ cần đối chiếu trong kho xem đã có bản mới hơn cùng số hiệu chưa.

### Bước 3 — Trích metadata

Đọc nội dung (PDF text → `pdftotext`; PDF scan → OCR trang bìa, xem `references/nhan_dien_da_ky.md`). Lấy đủ 6 mục:

**cơ quan ban hành · số hiệu · ngày ban hành · loại văn bản · trích yếu · người ký**

⚠️ **Không bịa.** OCR không đọc chắc số hiệu → đặt tên mô tả sạch, ghi chú "số/ngày cần anh xác minh".

⚠️ **Bẫy file lai:** file có nhiều text nhưng trang 1 rỗng text → trang 1 là bản scan văn bản chính, phần text phía sau chỉ là **đính kèm**. Bắt buộc OCR trang 1 để lấy đúng số hiệu.

### Bước 4 — Định tuyến mảng

Khoá định tuyến chính là **đuôi số hiệu + cơ quan ban hành**, không phải tên file:

| Dấu hiệu | Mảng | Bàn giao |
|---|---|---|
| `…/CB`, `…/ĐU`, `…/TW`, `…/BTCTW`, `…/TU`, `…-QĐ/TW`, `…-CV/ĐU`, `…-HD/BTCTW` | **Chi bộ Đảng** | → `dang-ra-soat-sap-xep-van-ban` |
| `…-NĐ-CP`, `…-TT-BYT`, `…-QH15`, `…-QĐ-TTg`, `…-QĐ-UBND`, `…-QĐ-SYT`, `…-CV-SYT` | **VBPL / chỉ đạo cấp trên** | kiểm hiệu lực qua `ttcc115-van-ban-phap-ly` |
| `…-QĐ-TTCC115`, `…-KH-TTCC115`, `…-BC-TTCC115`, `…-TB-TTCC115`, quy chế/quy trình nội bộ | **TTCC115 chính quyền** | tự xử lý |
| Đề cương NCKH đã duyệt, QĐ Hội đồng đạo đức, giấy chấp thuận, QĐ nghiệm thu, bài báo đã đăng | **NCKH** | tự xử lý |
| CK2, quy hoạch – bổ nhiệm, kê khai tài sản, đánh giá cuối năm, CCHN, chứng chỉ, hợp đồng cá nhân | **Cá nhân** | tự xử lý |

Không rõ mảng → **hỏi anh**, đừng đoán.

### Bước 5 — Đề xuất tên + đích lưu, rồi HỎI

**Tên chuẩn (dùng chung cho mọi mảng):**

```
năm_số-VB_Tên nội dung.ext
```

- `số-VB`: thay `/` bằng `-`. VD `1452-CV/ĐU` → `1452-CV-ĐU`; `366-QĐ/TW` → `366-QĐ-TW`
- Giữ dấu tiếng Việt đầy đủ; dùng `Đ/đ` chứ không phải `D/d`
- Trích yếu ngắn, ≤ 80 ký tự
- VD: `2026_1452-CV-ĐU_Tuyên truyền Đại hội XIV Công đoàn Việt Nam.pdf`

**Đích lưu — luôn đề xuất CẢ HAI nơi.** Đọc `references/ban_do_thu_muc.md` để tra bảng. Nếu chưa từng làm việc với cây thư mục này trong phiên, **liệt kê thư mục thật trước khi đề xuất** — cấu trúc có thể đã đổi.

**Hỏi bằng công cụ AskUserQuestion** (hiện thành nút bấm), không hỏi bằng văn xuôi. Mẫu:

- Câu 1 — *Lưu vào đâu?* → `Máy Mac` · `Google Drive` · `Cả hai` · `Chưa lưu, để em xem lại`
  ⚠️ File rớt **Chốt 0 mật**: bỏ hẳn lựa chọn `Google Drive` và `Cả hai`, chỉ còn `Máy Mac` · `Chưa lưu`
- Câu 2 — *Đúng thư mục này chưa?* → đường dẫn đề xuất #1 (Recommended) · đề xuất #2 · `Anh chỉ chỗ khác`
- Câu 3 (chỉ khi metadata chưa chắc) — *Tên file này được chưa?* → tên đề xuất · tên rút gọn · `Anh sửa tên`

Trước khối câu hỏi, in bảng tóm tắt ngắn: file → số hiệu → ngày → cơ quan → kết quả các chốt.

**Không gọi được AskUserQuestion** (phiên chạy nền, chạy theo lịch, công cụ không khả dụng) → hỏi bằng văn xuôi với các lựa chọn đánh số, **và dừng lại chờ**; tuyệt đối không tự lưu thay.

### Bước 6 — Ghi file & báo cáo

Trước khi ghi:

1. **Kiểm tra trùng**: tìm số hiệu trong cả cây thư mục. Đã có bản y hệt (so MD5) → không ghi thêm, chỉ báo "đã có sẵn tại …"
2. **Kiểm tra thay thế**: VB mới thay VB cũ đang có → báo anh, đề xuất chuyển bản cũ vào `_LUU_TRU/[HET_HIEU_LUC]/`
3. **Trùng tên khác nội dung** → thêm hậu tố ` (b)`, **tuyệt đối không ghi đè**

Cuối phản hồi, in mục **"Đã lưu"**:

```
Đã lưu:
- 2026_1452-CV-ĐU_Tuyên truyền Đại hội XIV Công đoàn.pdf
  → Mac: Hoạt động Chi bộ TTCC115/00_Van_ban_chi_dao/06_VB_Dang_uy_So_Y_te/
  → Drive: 02. ĐƠN VỊ - TTCC115/02.2 Công tác Đảng/Chi bộ/
Chưa lưu (rớt chốt):
- BC_thang8_v3.docx — chưa có số hiệu, chưa ký → đề nghị để ở _DANG_XU_LY/
```

---

## Kỹ thuật hay vướng (đọc trước khi thao tác)

**Đường dẫn tiếng Việt trên macOS.** macOS lưu tên file dạng NFD, gõ literal trong bash hay hỏng. Luôn dò gốc rồi dùng glob hoặc Python:

```bash
ls -1 "$HOME/mnt/"              # thư mục đã kết nối nằm ở đây, KHÔNG phải /Users/...
cd "$HOME"/mnt/H*/              # glob thay vì gõ "Hoạt động …"
```

```python
import os, unicodedata, shutil
for d in os.listdir(base):
    if 'Đào' in unicodedata.normalize('NFC', d):   # normalize trước khi so
        sub = os.path.join(base, d); break
shutil.copyfile(src, dst)
```

**Ghi file:** Edit tool bị chặn ở các thư mục này. Dùng `bash` (python/`cp`/`mv`) để ghi.

**Xoá:** không xoá trực tiếp — `mv` vào `_LUU_TRU/` hoặc `_to_delete/`.

**Chưa kết nối thư mục:** nếu tool thao tác máy Mac không dùng được, báo anh bấm **"Add folder"** trong app Claude desktop và chọn `Documents` (hoặc thư mục Google Drive). Nếu vẫn không được, gợi ý chạy lại task ở chế độ **"On your computer"**.

---

## Tài liệu kèm theo

- `references/ban_do_thu_muc.md` — bản đồ thư mục đầy đủ: máy Mac (TTCC115 · Chi bộ · NCKH · cá nhân) và Google Drive. Đọc ở Bước 5.
- `references/nhan_dien_da_ky.md` — checklist 3 chốt + lệnh đọc PDF/OCR/kiểm chữ ký số. Đọc ở Bước 2–3.
