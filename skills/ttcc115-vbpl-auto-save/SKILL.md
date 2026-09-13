---
name: ttcc115-vbpl-auto-save
description: Tự động tải file gốc của VBPL/quy định/văn bản Đảng về thư mục phù hợp trong "Hoạt động TTCC115" hoặc "Hoạt động Chi bộ TTCC115" mỗi khi rà soát/tra cứu/viện dẫn. KÍCH HOẠT BẮT BUỘC khi user yêu cầu tra cứu, viện dẫn, đối chiếu, rà soát, hoặc nhắc đến BẤT KỲ Luật/Nghị định/Thông tư/Quyết định/Hướng dẫn/Công văn/Nghị quyết TW/Chỉ thị/Điều lệ Đảng nào trong ngữ cảnh công việc TTCC115 (báo cáo, kế hoạch, quy trình, dự toán, đề án, hợp đồng, văn bản Chi bộ). Kích hoạt cả khi user chỉ nói "tra Luật ĐT", "Nghị định 24 nói gì", "đối chiếu TT 14", "căn cứ pháp lý cho..." hoặc khi Claude tự nhận thấy cần viện dẫn một VBPL để soạn thảo.
---

# Auto-save VBPL — Quy tắc TTCC115

## Mục đích

Anh Khoa (BS phụ trách TTCC115 TP.HCM) cần xây dựng kho VBPL nội bộ có hệ thống: mọi văn bản được viện dẫn trong báo cáo/kế hoạch/quy trình/dự toán/văn bản Chi bộ đều phải có file PDF gốc tra cứu được. Skill này đảm bảo Claude KHÔNG BAO GIỜ viện dẫn 1 VBPL mà không tải file gốc về thư mục phù hợp.

## Khi nào kích hoạt

Kích hoạt khi BẤT KỲ điều kiện nào sau đây xảy ra:

1. **User yêu cầu trực tiếp**: "tra cứu Luật X", "Nghị định Y nói gì", "đối chiếu Thông tư Z", "rà soát VBPL...", "căn cứ pháp lý cho..."
2. **Claude tự xác định cần viện dẫn**: trong khi soạn báo cáo/kế hoạch/quy trình/dự toán/hợp đồng/văn bản Chi bộ, Claude nhận thấy cần dẫn 1 VBPL → kích hoạt trước khi viết phần viện dẫn
3. **User upload file VBPL** vào chat — kích hoạt để rename và lưu đúng thư mục
4. **User hỏi "văn bản này còn hiệu lực không"** — sau khi xác minh, tải bản hiệu lực hiện hành về

## Các loại văn bản trong phạm vi

- **Quốc hội**: Luật, Bộ Luật, Nghị quyết QH
- **Chính phủ**: Nghị định (NĐ-CP), Quyết định của Thủ tướng (QĐ-TTg), Nghị quyết Chính phủ
- **Bộ ngành**: Thông tư (TT-BYT, TT-BTC, TT-BKHĐT…), Quyết định (QĐ-BYT…), Công văn, Hướng dẫn
- **Địa phương**: Quyết định UBND (QĐ-UBND TP.HCM), Nghị quyết HĐND
- **Đảng**: Điều lệ Đảng, Nghị quyết TW (NQ TW), Chỉ thị Bộ Chính trị/Ban Bí thư, Hướng dẫn Ban Tổ chức TW/Ban Tuyên giáo TW, Quyết định của Ban Bí thư, Quy định của Bộ Chính trị
- **Cấp đơn vị**: Quyết định Sở Y tế (QĐ-SYT), Phụ lục/định mức của TTBYT, văn bản chỉ đạo Sở

## Quy trình bắt buộc

### Bước 1 — Kiểm tra đã có chưa

Trước khi tải mới, kiểm tra 2 thư mục:
- `/Users/lenguyenhoang/Documents/Hoạt động TTCC115/00. VĂN BẢN PHÁP LUẬT (Tra cứu)/`
- Các thư mục con của chủ đề liên quan (vd: `00. VBPL tham chiếu/` nếu chủ đề là đấu thầu)
- `/Users/lenguyenhoang/Documents/Hoạt động Chi bộ TTCC115/` (nếu là VB Đảng)

Nếu đã có file đúng VB (kiểm tra số hiệu + năm) → bỏ qua tải, chỉ tham chiếu đường dẫn cũ.

### Bước 2 — Tải file PDF gốc

**Ưu tiên nguồn chính thống** theo thứ tự:
1. `congbao.chinhphu.vn` → tìm trang `noi-dung-van-ban-so-XX-YYYY-...` rồi grep PDF link từ `congbaocdn.chinhphu.vn`
2. `vanban.chinhphu.vn` → trang `/?pageid=27160&docid=XXXX`
3. `vbpl.vn` → trang `/Pages/vbpq-luocdo.aspx?ItemID=XXX`
4. `moh.gov.vn`, `imda.moh.gov.vn`, `dmec.moh.gov.vn` (cho TTBYT)
5. `tulieuvankien.dangcongsan.vn` (cho VB Đảng)
6. `medgate.vn`, `dauthau.asia` (alternative khi nguồn chính bị chặn)
7. **Tuyệt đối tránh**: `thuvienphapluat.vn`, `luatvietnam.vn` (paywall + không phải nguồn chính thống)

**Lệnh mẫu**:
```bash
# Lấy URL PDF từ trang landing
curl -sL --max-time 12 -A "Mozilla/5.0" "https://congbao.chinhphu.vn/van-ban/<slug>.htm" -o tmp.html
grep -oE 'href="https://congbaocdn\.chinhphu\.vn[^"]*\.pdf"' tmp.html | head -1

# Tải file
curl -sL --max-time 30 -A "Mozilla/5.0" "<pdf_url>" -o "<output_name>.pdf"

# Kiểm tra
file "<output_name>.pdf"  # phải báo "PDF document"
```

### Bước 3 — Đặt tên file theo chuẩn

**Format bắt buộc**: `YYYY_<số>-<loại VB>_<mô tả ngắn>.pdf`

Quy tắc đặt tên:
- `YYYY` = năm ban hành (4 chữ số)
- `<số>-<loại VB>` = số hiệu + loại (KHÔNG đảo thứ tự); dùng dấu Đ/đ tiếng Việt thay vì D/d:
  - Luật: `22-QH15`
  - Nghị định: `24-NĐ-CP`, `98-NĐ-CP`
  - Thông tư: `14-TT-BYT`, `08-TT-BYT`
  - Quyết định Thủ tướng: `15-QĐ-TTg`
  - Quyết định Bộ: `1394-QĐ-BYT`
  - Quyết định UBND: `123-QĐ-UBND`
  - Công văn: `1289-CV-BYT`
  - Nghị quyết TW: `NQ-TW`
  - Chỉ thị: `01-CT-TW`
- `<mô tả ngắn>` = tên gọi chính, dùng dấu tiếng Việt đầy đủ, không quá 80 ký tự

**Ví dụ chuẩn**:
- `2023_22-QH15_Luật Đấu thầu.pdf`
- `2024_24-NĐ-CP_Hướng dẫn Luật Đấu thầu - lựa chọn nhà thầu.pdf`
- `2024_123-QĐ-UBND_Sửa đổi QĐ 41 về định mức TTBYT TPHCM.pdf`
- `2023_14-TT-BYT_Quy định xây dựng giá gói thầu mua sắm TTBYT.pdf`

### Bước 4 — Chọn thư mục đích

**Bảng mapping chủ đề → thư mục**:

| Chủ đề / Phạm vi tác vụ | Thư mục đích |
|---|---|
| Đấu thầu, mua sắm thiết bị đào tạo, dự toán | `Hoạt động TTCC115/06.Nhóm Đào tạo & Chỉ đạo tuyến/6. Mô hình đào tạo/Đề xuất và dự toán mua sắm/00. VBPL tham chiếu/` |
| Đấu thầu, mua sắm TTBYT lâm sàng | `Hoạt động TTCC115/00. VĂN BẢN PHÁP LUẬT (Tra cứu)/` |
| Quản lý TTBYT, phân loại, đăng ký lưu hành | `Hoạt động TTCC115/00. VĂN BẢN PHÁP LUẬT (Tra cứu)/` |
| Kế hoạch hoạt động, chỉ tiêu, KPI, quy chế | `Hoạt động TTCC115/02. Kế hoạch hoạt động/` |
| Quản lý chất lượng, ISO, JCI | `Hoạt động TTCC115/05. Nhóm Quản lý chất lượng/` |
| CME/CNKTYKLT, đào tạo liên tục | `Hoạt động TTCC115/06.Nhóm Đào tạo & Chỉ đạo tuyến/2. Cập nhật kiến thức y khoa/` |
| Cấp CCHN, cơ sở thực hành | `Hoạt động TTCC115/06.Nhóm Đào tạo & Chỉ đạo tuyến/4. Cơ sở thực hành/` |
| Cấp cứu đường thuỷ | `Hoạt động TTCC115/03. Cấp cứu đường thuỷ/` |
| Truyền thông, báo chí, mạng xã hội | `Hoạt động TTCC115/08. Truyền thông & Báo chí/` |
| Đề án phát triển CCNBV | `Hoạt động TTCC115/01. Đề án phát triển CCNBV/` |
| VB Đảng (Nghị quyết TW, Chỉ thị, Điều lệ, Quy định BCT, Hướng dẫn BTC TW) | `Hoạt động Chi bộ TTCC115/` (đọc cấu trúc thư mục trước, chọn sub phù hợp) |
| Không rõ nhóm | `Hoạt động TTCC115/00. VĂN BẢN PHÁP LUẬT (Tra cứu)/` |

**Tạo thư mục mới khi cần**: nếu chủ đề chưa có sub VBPL phù hợp, tạo sub `00. VBPL tham chiếu/` trong thư mục cha của tác vụ.

### Bước 5 — Copy file vào thư mục

Bash dùng UTF-8 NFD trên macOS có vấn đề với tên tiếng Việt — luôn dùng Python:

```python
import os, unicodedata, shutil
base = '/sessions/zealous-nice-lovelace/mnt'  # hoặc đường dẫn user nếu chạy ngoài sandbox
# Tìm thư mục TTCC115 (xử lý NFC/NFD)
for d in os.listdir(base):
    if 'TCC' in d:  # match cả NFC và NFD
        target = os.path.join(base, d)
        break
# Đi vào subdir, dùng substring + NFC normalize
for d in os.listdir(target):
    if 'Đào' in unicodedata.normalize('NFC', d):
        sub = os.path.join(target, d)
        ...
# Copy
shutil.copyfile(src, dst)
```

### Bước 6 — Báo cáo cuối phản hồi

Cuối phản hồi, liệt kê file đã tải dưới mục **"Văn bản đã tải về"** với đường dẫn rút gọn:

```
Văn bản đã tải về:
- 2023_22-QH15_Luật Đấu thầu.pdf → Hoạt động TTCC115/.../00. VBPL tham chiếu/
- 2024_24-NĐ-CP_Hướng dẫn Luật Đấu thầu.pdf → ...
```

## Xử lý tình huống đặc biệt

### Không tải được file gốc

Nếu sau 2 lần thử (2 nguồn khác nhau) vẫn không tải được:
- Ghi rõ trong báo cáo: "❌ Không tải được [tên VB] từ nguồn chính thống — đề nghị anh tải thủ công"
- Cung cấp link landing page chính thống cho user tự tải
- Vẫn tiếp tục viện dẫn VB trong nội dung, nhưng đánh dấu cần bổ sung file sau

### Văn bản đã hết hiệu lực

Nếu phát hiện VB user muốn viện dẫn đã hết hiệu lực:
- Cảnh báo user
- Tải bản hiệu lực hiện hành thay thế
- Lưu cả 2 (bản cũ + bản mới), bản cũ thêm hậu tố `_HẾT HIỆU LỰC` vào tên file

### Văn bản có sửa đổi/bổ sung

Tải đầy đủ: VB gốc + tất cả VB sửa đổi:
- `2021_98-NĐ-CP_Quản lý TTBYT.pdf` (gốc)
- `2023_07-NĐ-CP_Sửa đổi NĐ 98 về quản lý TTBYT.pdf`
- `2025_04-NĐ-CP_Sửa đổi NĐ 98 và NĐ 07 về quản lý TTBYT.pdf`

Nếu có Văn bản hợp nhất (VBHN), tải thêm và đặt tên: `YYYY_<số>-VBHN-<cơ quan>_Hợp nhất <tên VB>.pdf`

### File đã tồn tại nhưng tên không chuẩn

Nếu phát hiện file VBPL đã có trong thư mục nhưng đặt tên không theo chuẩn (vd `25._TTCC115_signed.pdf`):
- KHÔNG xoá file gốc (có thể không có quyền + tránh mất dữ liệu)
- Tạo bản copy với tên chuẩn
- Báo user: "đã copy thành tên chuẩn — anh xoá file cũ thủ công nếu muốn"

## Liên kết skill khác

- Skill `ttcc115-van-ban-phap-ly` đã có sẵn — chuyên xử lý văn bản nội bộ TTCC115, kiểm tra hiệu lực, rename file mới upload. Skill này (`ttcc115-vbpl-auto-save`) **bổ sung**, KHÔNG thay thế: phối hợp khi cần.
- Skill `ke-hoach-y-te-vn`, `health-report-ppt-vn`, `ttcc115-chien-luoc-ke-hoach`: khi các skill này soạn thảo và viện dẫn VBPL, skill auto-save phải được kích hoạt song song.

## Nguyên tắc cốt lõi

**Không viện dẫn VBPL nào mà không có file gốc.** Đây là quy tắc vàng — đảm bảo mọi văn bản TTCC115 soạn ra đều có thể kiểm chứng nguồn lùi lại, phục vụ rà soát, thẩm định, sửa đổi sau này.
