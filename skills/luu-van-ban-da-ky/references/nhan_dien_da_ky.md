# Ba chốt kiểm tra & cách đọc file

Mục lục:
0. Chốt 0 — Có phải văn bản MẬT / ảnh chụp không?
1. Chốt 1 — Đã ban hành chưa?
2. Chốt 2 — Đã ký chưa?
3. Chốt 3 — Còn hiệu lực không?
4. Lệnh đọc file (PDF text · PDF scan · DOCX)
5. Bảng kết luận & xử lý khi rớt chốt

---

## 0. Chốt 0 — Chạy TRƯỚC mọi chốt khác

**a) Quét độ MẬT.** Đọc trang 1 (text hoặc OCR), tìm dấu chỉ độ mật ở góc phải: `MẬT`, `TỐI MẬT`, `TUYỆT MẬT`, `Độ mật:`.

Có bất kỳ dấu nào → **khoá cứng đích lưu chỉ còn máy Mac**. Ở Bước 5 của quy trình, **không hiển thị lựa chọn Google Drive** cho file này (Drive là dịch vụ đám mây bên thứ ba — đưa văn bản mật lên là vi phạm quy chế bảo mật). Cũng không đưa nội dung lên Zalo, không ghi vào sổ dùng chung. Báo anh một dòng: "Văn bản có dấu MẬT — em chỉ lưu trên máy, không đồng bộ Drive."

Với văn bản Đảng có dấu mật, đầu mối quản lý là đ/c Nguyễn Hồng Phước (theo QĐ 03).

**b) Nhận diện ảnh chụp / chụp màn hình.** File `.jpg/.png/.heic`, hoặc PDF ghép từ ảnh chụp bằng điện thoại (méo phối cảnh, lệch nền, có viền bàn), hoặc ảnh chụp màn hình Zalo/Gmail:

> **Ảnh chụp KHÔNG BAO GIỜ vào kho chính**, kể cả khi OCR đọc rõ và văn bản đã ký.

Lý do: ảnh chụp không phải bản gốc lưu trữ được — mất chất lượng, không tra được text, không kiểm được chữ ký số. Xử lý: lưu tạm vào `_DANG_XU_LY/` kèm hậu tố `_ẢNH CHỤP`, và **nhắc anh xin file PDF gốc từ nơi gửi**. Khi có PDF gốc thì thay thế và xoá bản ảnh.

Ngoại lệ duy nhất: anh xác nhận rõ "không có bản gốc, cứ lưu ảnh" → lưu vào kho nhưng giữ hậu tố `_ẢNH CHỤP` trong tên file.

---

## 1. Chốt 1 — Đã ban hành chưa?

Nhìn **góc trên bên trái trang 1** (thể thức văn bản hành chính VN theo NĐ 30/2020 và văn bản Đảng theo HD 05):

| Đạt | Rớt |
|---|---|
| `Số: 1452-CV/ĐU` — có số cụ thể | `Số: …/…` hoặc `Số:      /QĐ-TTCC115` (còn để trống) |
| `TP. Hồ Chí Minh, ngày 05 tháng 8 năm 2026` | `ngày … tháng … năm 2026` (còn dấu chấm lửng) |
| Có tên cơ quan ban hành ở góc trái | Không có khối cơ quan ban hành |
| Có mục **Nơi nhận** ở cuối | Không có Nơi nhận |

**Lưu ý:** một số văn bản Đảng cấp trên gửi bản scan không rõ số hiệu do OCR kém — đó là lỗi đọc, không phải chưa ban hành. Render lại trang 1 độ phân giải cao rồi thử lại trước khi kết luận.

---

## 2. Chốt 2 — Đã ký chưa?

Ba đường xác nhận, chỉ cần **một** đường đạt:

**a) Chữ ký tươi / dấu đỏ trên bản scan** — mở trang cuối, nhìn khối ký: có chữ ký viết tay + dấu tròn đỏ chồng lên. Ô ký trống trơn (chỉ có chức danh + tên in) = **chưa ký**.

**b) Chữ ký số (PDF)** — kiểm bằng `pdfsig` (gói `poppler-utils`):

```bash
pdfsig -nocert "file.pdf"
```

- Có `Signature #1` kèm `Signing Time` → **đã ký số, ĐẠT chốt**
- `File 'x.pdf' does not contain any signatures` (exit code 2) → không có chữ ký số; vẫn có thể ký tươi rồi scan → quay lại đường (a)

⚠️ **Bẫy lớn:** chứng thư số của các CA Việt Nam (VNPT-CA, Viettel-CA, FPT-CA, BKAV) không nằm trong kho chứng thư gốc của hệ thống, nên `pdfsig` gần như luôn in `Certificate issuer isn't Trusted` **dù chữ ký hoàn toàn hợp lệ**. Dòng cảnh báo đó **không phải căn cứ để đánh rớt chốt 2** — dùng `-nocert` để bỏ qua phần kiểm chuỗi chứng thư.

Chưa có công cụ thì cài: `apt-get install -y poppler-utils` (Linux) hoặc `brew install poppler` (macOS).

**c) Dấu vết trong tên file** — `_signed`, `-signed`, `daky`, `dakyso`, `ĐÃ KÝ`. Đây là **chỉ dấu phụ**, phải xác nhận thêm bằng (a) hoặc (b), vì tên file có thể đặt sai.

**Dấu hiệu NGƯỢC — gần như chắc chắn là dự thảo:**

- Tên file có: `draft`, `dự thảo`, `duthao`, `_v1`, `_v2`, `final`, `FINAL_final`, `ban nhap`, `sua lan 3`
- Đuôi `.docx`/`.doc` mà nội dung là văn bản hành chính chưa scan → thường là bản đang soạn
- Còn **track changes / comment** trong DOCX:

```bash
# track changes — đếm số THẺ, không đếm dòng (document.xml của Word là 1 dòng dài)
unzip -p "file.docx" word/document.xml \
  | grep -oE '<w:(ins|del|moveFrom|moveTo|rPrChange|pPrChange|sectPrChange) ' | wc -l
# cờ bật chế độ theo dõi sửa đổi
unzip -p "file.docx" word/settings.xml 2>/dev/null | grep -c '<w:trackChanges' || true
# comment (gồm cả commentsExtended/commentsIds)
unzip -l "file.docx" | grep -cE 'word/comments[A-Za-z]*\.xml' || true
```

⚠️ Đừng dùng `grep -c -E '<w:(ins|del) '` như bản cũ: `grep -c` đếm **dòng** nên tối đa ra 1, bỏ sót `moveFrom/moveTo/rPrChange/pPrChange`, và trả exit code 1 khi không khớp → gãy chuỗi lệnh nối bằng `&&`.

- Còn chữ `DỰ THẢO` chìm trong watermark hoặc header

---

## 3. Chốt 3 — Còn hiệu lực không?

Chia 2 nhánh, đừng làm lẫn:

**Nhánh A — VBPL nhà nước (Luật, NĐ, TT, QĐ-TTg, QĐ-UBND) và đảng văn TW:**

> ❌ **CẤM kết luận "còn hiệu lực" chỉ vì file có trong thư mục.** Hiệu lực bị thay đổi từ bên ngoài văn bản — file gốc không tự cập nhật.

Phải tra online tại thời điểm hiện tại → **bàn giao `ttcc115-van-ban-phap-ly`** (skill đó dùng phiên đăng nhập thuvienphapluat.vn của anh Khoa qua Claude in Chrome; vbpl.vn là nguồn dự phòng).

**Nhánh B — Văn bản nội bộ TTCC115 / văn bản Chi bộ:**

Kiểm 3 việc, làm được ngay tại chỗ:

1. **Đọc điều khoản thi hành** (thường điều cuối): tìm cụm "thay thế", "bãi bỏ", "hết hiệu lực kể từ", "có hiệu lực đến hết ngày"
2. **Đối chiếu trong kho**: tìm cùng số hiệu / cùng chủ đề xem đã có bản mới hơn chưa
3. **Văn bản có thời hạn tự nhiên**: kế hoạch năm, quyết định phân công nhiệm kỳ, quy chế theo nhiệm kỳ → so mốc thời gian với hôm nay

Ví dụ đời thường: bằng lái xe còn trong ví không có nghĩa là còn hạn — phải nhìn ngày hết hạn in trên đó, và phải biết luật có đổi mẫu bằng không.

---

## 4. Lệnh đọc file

**PDF có text:**

```bash
pdfinfo "file.pdf"                    # số trang, ngày tạo
pdftotext -f 1 -l 3 "file.pdf" -      # đọc 3 trang đầu ra màn hình
```

**PDF scan (pdftotext ra rỗng) — OCR trang bìa:**

```bash
pdftoppm -f 1 -l 1 -r 220 -png -singlefile "file.pdf" /tmp/pg   # luôn ra /tmp/pg.png
tesseract /tmp/pg.png -
```

⚠️ **Bắt buộc dùng `-singlefile`.** Không có nó, poppler đệm số 0 theo tổng số trang: file 8 trang ra `pg-1.png`, nhưng file ≥10 trang ra `pg-01.png` → gọi `tesseract /tmp/pg-1.png` sẽ báo lỗi không mở được file.

OCR trống → tiền xử lý rồi thử lại:

```bash
convert /tmp/pg.png -colorspace Gray -contrast-stretch 5%x5% -threshold 60% /tmp/bw.png
tesseract /tmp/bw.png - --psm 6
```

Gói `eng` sẽ rớt dấu tiếng Việt nhưng vẫn đủ đọc hiểu số hiệu và cơ quan. Muốn thêm `-l vie` thì kiểm tra trước bằng `tesseract --list-langs` — nhiều môi trường chỉ có `eng`.

**⚠️ Bẫy file lai (rất hay gặp với văn bản Đảng uỷ SYT):** file tổng thể có nhiều text nhưng trang 1 rỗng:

```bash
pdftotext -f 1 -l 1 "file.pdf" - | wc -c    # < 50 ký tự → trang 1 là bản scan
```

Ngưỡng là **dưới 50 ký tự**, không phải bằng 0: trang trắng vẫn trả về 1–5 byte (ký tự ngắt trang).

Nghĩa là **trang 1 mới là văn bản chính** (dạng scan), phần text đọc được ở trang sau chỉ là **đính kèm** của cơ quan khác. Bắt buộc OCR trang 1 để lấy đúng số hiệu — tuyệt đối không lấy số hiệu từ phần đính kèm.

**DOCX:**

```bash
unzip -p "file.docx" word/document.xml | sed -e 's/<[^>]*>/ /g' | tr -s ' ' | head -c 3000
```

**Ảnh chụp/scan rời (.jpg/.png):** OCR trực tiếp bằng `tesseract`.

---

## 5. Bảng kết luận & xử lý khi rớt chốt

| Chốt 1 | Chốt 2 | Chốt 3 | Kết luận | Xử lý |
|---|---|---|---|---|
| ✅ | ✅ | ✅ | Văn bản chính thức | Lưu vào kho theo `ban_do_thu_muc.md` |
| ✅ | ✅ | ❌ hết hiệu lực | Đã bị thay thế | Báo anh + tải/đề nghị bản hiện hành; bản cũ lưu kèm hậu tố `_HẾT HIỆU LỰC` vào `_LUU_TRU/[HET_HIEU_LUC]/` |
| ✅ | ❌ | – | Đã soạn xong, chờ ký | **Không vào kho.** Đề xuất `_DANG_XU_LY/`, nhắc anh khi nào có bản ký thì đưa lại |
| ❌ | ❌ | – | Dự thảo | **Không vào kho.** Đề xuất `_DANG_XU_LY/` |
| ❓ không đọc được | ❓ | ❓ | OCR/đọc thất bại | Báo rõ "không đọc được, cần anh xác nhận thủ công", nêu 2 phương án đích lưu, **không đoán số hiệu** |

**Nguyên tắc khi rớt chốt:** không im lặng bỏ qua, cũng không tự ý lưu. Nêu đúng chốt nào rớt, bằng chứng gì (VD: "ô ký trang 4 trống", "tên file có `_v2`"), rồi để anh quyết.

**Anh vẫn muốn lưu dù rớt chốt** → được, nhưng bắt buộc gắn hậu tố vào tên file (`_DỰ THẢO`, `_CHƯA KÝ`, `_HẾT HIỆU LỰC`) để 6 tháng sau còn phân biệt được.
