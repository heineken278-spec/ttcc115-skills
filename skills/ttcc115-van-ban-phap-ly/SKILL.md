---
name: ttcc115-van-ban-phap-ly
description: "Kiểm tra hiệu lực văn bản pháp luật và phát hiện thay thế/bổ sung trong tài liệu TTCC115 và Chi bộ TTCC115.   Nguồn chân lý về hiệu lực là tra TRỰC TIẾP trên thuvienphapluat.vn bằng phiên đăng nhập của anh Khoa   (qua Claude in Chrome); vbpl.vn là nguồn dự phòng miễn phí. LUÔN kích hoạt khi: (1) chuẩn bị viện dẫn   bất kỳ VB pháp luật (Luật, NĐ, TT, QĐ, HD, NQ TW, CT) khi soạn thảo văn bản/kế hoạch/báo cáo/quy trình   cho TTCC115 hoặc Chi bộ; (2) user nói \"có file mới\", \"thêm tài liệu\", \"bổ sung văn bản\", \"rename\",   \"xử lý\", \"mới\" kèm file đính kèm; (3) user hỏi \"văn bản này còn hiệu lực không\", \"VB này còn dùng được không\";   (4) xử lý/rename file trong thư mục Hoạt động TTCC115 hoặc Hoạt động Chi bộ TTCC115;   (5) user đính kèm file vào chat mà không kèm yêu cầu rõ ràng — mặc định xử lý như file mới cần rename   và kiểm tra thay thế văn bản. Kích hoạt cả khi user đề cập tên VB cụ thể như \"Thông tư 01\",   \"Nghị định 96\", \"QĐ 1983\" trong ngữ cảnh làm việc với TTCC115."
---

# Kiểm Tra Văn Bản Pháp Luật - TTCC115

## Nguyên tắc gốc (đọc trước, quan trọng nhất)

**Kho file ở máy chỉ để LƯU, không dùng để phán hiệu lực.** Hiệu lực của một văn bản bị thay đổi từ bên ngoài nó (bởi văn bản khác ra sau) — file gốc không tự cập nhật điều đó. Vì vậy:

> ❌ **CẤM kết luận "còn hiệu lực" chỉ dựa trên việc file có trong thư mục.**
> ✅ Mọi kết luận hiệu lực PHẢI đến từ tra cứu online tại thời điểm hiện tại.

**Nguồn chân lý theo thứ tự ưu tiên:**
1. **thuvienphapluat.vn** — nguồn CHÍNH. Anh Khoa có tài khoản tra cứu chuyên sâu: trang văn bản hiển thị ô tình trạng hiệu lực, phần nội dung bị sửa đổi được **tô vàng**, và tab **Lược đồ** liệt kê văn bản thay thế/bị thay thế/sửa đổi/bổ sung kèm link. Chỉ đọc được các thông tin này khi **đã đăng nhập** → phải tra qua trình duyệt của anh bằng **Claude in Chrome**, không dùng `web_fetch` (ẩn danh, không thấy nội dung trả phí).
2. **vbpl.vn** — nguồn dự phòng miễn phí, dùng khi thuvienphapluat không truy cập được.
3. **Kho thư mục** — chỉ để đối chiếu xem trong nhà đã có VB mới hơn cùng chủ đề chưa; KHÔNG phải bằng chứng hiệu lực.

---

## XỬ LÝ KHI USER ĐÍNH KÈM FILE (ưu tiên đọc phần này trước)

**Khi user attach file vào chat — dù không kèm text hay chỉ gõ ngắn như "mới", "rename", "xử lý", "rà soát":**

Mặc định thực hiện ngay toàn bộ quy trình sau mà không cần hỏi thêm:

1. **Đọc nội dung file** để xác định: loại văn bản, năm ban hành, số hiệu, tên nội dung
2. **Đề xuất tên mới** theo convention `năm_số-văn-bản_Tên nội dung.ext`
3. **Kiểm tra thay thế**: đọc điều khoản thi hành trong file + tra Lược đồ trên thuvienphapluat + cross-check 2 thư mục
4. **Đề xuất vị trí lưu** phù hợp nhất trong 2 thư mục (dựa trên nội dung và cấu trúc thư mục hiện có)
5. **Báo cáo tóm tắt** và hỏi anh xác nhận trước khi thực hiện

Nếu file đính kèm rõ ràng không liên quan đến TTCC115 hay Chi bộ (VD: ảnh cá nhân, file Excel tài chính cá nhân), hỏi user muốn làm gì.

**Thư mục lưu mặc định:**
- Văn bản pháp luật nhà nước → `Hoạt động TTCC115/01. Văn bản pháp luật/`
- Đảng văn (NQ TW, CT, HD BTCTW) → `Hoạt động Chi bộ TTCC115/00_Van_ban_chi_dao/`
- Văn bản nội bộ TTCC115 → thư mục phù hợp theo nội dung
- Văn bản Chi bộ → thư mục phù hợp trong `Hoạt động Chi bộ TTCC115/`

---

## NHIỆM VỤ 1: Kiểm tra hiệu lực trước khi viện dẫn

**Khi nào thực hiện**: Ngay trước khi đưa bất kỳ tên văn bản pháp luật/đảng văn cụ thể vào nội dung soạn thảo.

### Bước 1 – Liệt kê văn bản cần kiểm tra

Trước khi soạn, xác định tất cả VB dự kiến viện dẫn. Ưu tiên kiểm tra:
- Ban hành trước năm 2022 (khả năng bị thay thế cao)
- Có từ "quy định", "hướng dẫn thi hành"
- Liên quan lĩnh vực y tế/cấp cứu (thay đổi thường xuyên)

### Bước 2 – Tra hiệu lực trên thuvienphapluat qua Claude in Chrome (nguồn CHÍNH)

**Chuẩn bị công cụ:** Các tool `mcp__claude-in-chrome__*` có thể ở dạng deferred — nạp một lần bằng ToolSearch:
`select:mcp__claude-in-chrome__tabs_context_mcp,mcp__claude-in-chrome__navigate,mcp__claude-in-chrome__get_page_text,mcp__claude-in-chrome__find,mcp__claude-in-chrome__computer,mcp__claude-in-chrome__tabs_create_mcp`

**Quy trình đọc:**

1. **Kiểm tra đăng nhập**: mở/kiểm tra tab thuvienphapluat.vn. Nếu chưa đăng nhập → dừng, báo anh đăng nhập lại trước khi tra (không tự nhập tài khoản).
2. **Tìm văn bản**: điều hướng tới trang tìm kiếm thuvienphapluat và nhập số hiệu + tên VB; mở đúng trang văn bản.
3. **Đọc ô tình trạng hiệu lực** (thường ở đầu trang / khối thông tin văn bản): `Còn hiệu lực` / `Hết hiệu lực` / `Còn hiệu lực một phần` / `Chưa có hiệu lực` / `Ngưng hiệu lực`.
4. **Đọc phần tô vàng trong nội dung**: đó là các điều/khoản đã bị sửa đổi, bổ sung. Ghi lại điều nào bị đụng và VB nào sửa nó (theo link).
5. **Mở tab "Lược đồ"** của văn bản để lấy quan hệ đầy đủ:
   - *Văn bản bị thay thế / bị bãi bỏ* (VB này thay cái gì)
   - *Văn bản được thay thế bởi / bị thay thế bởi* (cái gì thay VB này) ← quyết định "còn dùng được không"
   - *Văn bản bị sửa đổi, bổ sung* và *VB sửa đổi, bổ sung*
   - *Văn bản được hướng dẫn / hướng dẫn*
6. **Dùng `get_page_text` để lấy nội dung text**, `find` để nhảy tới đúng ô "Tình trạng hiệu lực" / "Lược đồ" thay vì đoán.

> Lưu ý: **KHÔNG dùng `mcp__workspace__web_fetch` cho thuvienphapluat/vbpl.vn.** `web_fetch` vào ẩn danh và không chạy JavaScript → thường trả về trang rỗng và không bao giờ thấy nội dung trả phí (phần tô vàng, Lược đồ). Phải đi qua trình duyệt đã đăng nhập.

### Bước 2b – Dự phòng vbpl.vn (khi thuvienphapluat không dùng được)

Nếu thuvienphapluat lỗi/hết session và chưa login lại được, tra tạm trên **vbpl.vn** — cũng nên mở qua Claude in Chrome (trang JS). Tìm trường "Tình trạng hiệu lực". Đây chỉ là phương án tạm; ghi rõ trong báo cáo là đã dùng nguồn dự phòng.

### Bước 2c – Đảng văn (NQ TW, CT, HD BTCTW, QĐ TW)

Đảng văn khó tra hơn. Trình tự: tìm trên `dangcongsan.vn` / `tulieuvankien.dangcongsan.vn` (qua Chrome), kèm cross-check thư mục Chi bộ xem có VB mới hơn cùng chủ đề. Không xác định được → đặt chú thích *(cần xác minh hiệu lực)*.

### Bước 3 – Xử lý và thông báo

| Tình trạng | Hành động |
|-----------|-----------|
| Còn hiệu lực | Viện dẫn bình thường |
| Còn hiệu lực một phần | Nêu rõ điều/khoản nào còn, điều/khoản nào đã bị bãi bỏ/sửa (theo phần tô vàng) |
| Hết hiệu lực | DỪNG, thông báo user, đề xuất VB thay thế (lấy từ Lược đồ) |
| Chưa/Ngưng hiệu lực | Nêu rõ, không viện dẫn như đang hiệu lực |
| Không tra được | Đặt chú thích *(cần xác minh hiệu lực)* — KHÔNG mặc định là còn hiệu lực |

**Thông báo mẫu:**
```
📋 Kiểm tra hiệu lực (nguồn: thuvienphapluat, ngày DD/MM/YYYY):
✅ [Tên VB 1] – Còn hiệu lực
🟡 [Tên VB 2] – Còn hiệu lực một phần. Điều X, khoản Y bị sửa bởi: [VB sửa đổi]
⚠️ [Tên VB 3] – Hết hiệu lực từ [ngày]. Thay thế bởi: [Tên VB mới] (theo Lược đồ)
❓ [Tên VB 4] – Không tra được (đã thử TVPL + vbpl.vn), cần xác minh thủ công
```

---

## NHIỆM VỤ 2: Phát hiện thay thế khi xử lý file mới

**Khi nào thực hiện**: Mỗi khi xử lý file mới (từ đính kèm hoặc từ thư mục).

### Bước 1 – Đọc nội dung file

Dùng pdftotext/python-docx để đọc. Tập trung phần cuối: "Điều khoản thi hành", "Hiệu lực thi hành".

### Bước 2 – Tìm cụm từ thay thế/bãi bỏ trong file

```python
import re

def tim_thay_the(text):
    patterns = [
        r'.{0,150}thay th[eế].{0,150}',
        r'.{0,150}b[aã]i b[oỏ].{0,150}',
        r'.{0,150}h[eế]t hi[eệ]u l[uự]c.{0,150}',
        r'.{0,150}kh[oô]ng c[oò]n hi[eệ]u l[uự]c.{0,150}',
        r'.{0,150}s[uử]a [dđ][oổ]i.*b[oổ] sung.{0,150}',
    ]
    ket_qua = []
    for pat in patterns:
        ket_qua.extend(re.findall(pat, text, re.IGNORECASE))
    return ket_qua
```

### Bước 3 – Đối chiếu 2 nguồn

1. **Lược đồ trên thuvienphapluat** (nguồn chính): mở VB mới trên TVPL, xem nó chính thức thay thế/sửa đổi những VB nào.
2. **Kho thư mục** (đối chiếu nội bộ): tìm file cũ tương ứng để xử lý.

```python
import os, re

ttcc_folder = '/Users/lenguyenhoang/Documents/Hoạt động TTCC115'
cb_folder   = '/Users/lenguyenhoang/Documents/Hoạt động Chi bộ TTCC115'

def tim_file_cu(so_hieu):
    ket_qua = []
    for folder in [ttcc_folder, cb_folder]:
        for root, dirs, files in os.walk(folder):
            for f in files:
                if re.search(re.escape(so_hieu), f, re.IGNORECASE):
                    ket_qua.append(os.path.join(root, f))
    return ket_qua
```

### Bước 4 – Báo cáo và hỏi user

```
🔄 PHÁT HIỆN THAY THẾ VĂN BẢN

File mới:   [Tên file mới]
Theo Lược đồ TVPL, thay thế [toàn bộ / một phần]:
📄 [Tên VB cũ]  →  📁 [Đường dẫn file cũ trong thư mục, nếu có]

Anh muốn em:
□ Giữ nguyên file cũ (lưu tham khảo lịch sử)
□ Di chuyển file cũ vào thư mục con "Đã hết hiệu lực/"
□ Xóa file cũ
```

---

## Lưu ý thực tế

- **Phụ thuộc phiên đăng nhập.** Cần tiện ích Claude in Chrome bật và thuvienphapluat đang đăng nhập. Hết session → báo anh login lại, không tự nhập tài khoản.
- **Không làm chậm công việc chính.** Nếu cả TVPL lẫn vbpl.vn không phản hồi trong ~30 giây → ghi chú *(cần xác minh)* và tiếp tục, không dừng cả tác vụ.
- **"Còn hiệu lực một phần" cần thận trọng nhất.** Bám vào phần tô vàng để nêu chính xác điều/khoản nào đã đổi, đừng nói chung chung.
- **Ghi nguồn + ngày kiểm tra** cuối văn bản soạn thảo: `*(Hiệu lực xác minh ngày DD/MM/YYYY qua thuvienphapluat.vn)*`.
- **Tự lưu bản gốc** theo skill `ttcc115-vbpl-auto-save` sau khi tra (đặt tên chuẩn, đưa vào đúng thư mục).