---
name: ttcc115-van-ban-phan-cong
description: "Rà soát văn bản chính quyền MỚI của TTCC115 và PHÂN CÔNG khoa/phòng chủ trì - phối hợp theo chức năng nhiệm vụ. Dùng khi anh Hoàng nói \"lấy văn bản đến\", \"rà soát văn bản đến\", \"a đã đưa các văn bản mới vào thư mục\", \"văn bản trong tháng\", \"phân công khoa phòng\", \"cập nhật sổ theo dõi văn bản\", \"dashboard văn bản\". Tự lấy văn bản từ cv.115.org.vn (chỉ đọc) hoặc đọc thư mục khi anh tự tải. KHÔNG dùng cho văn bản Đảng."
---

# Rà soát & phân công văn bản chính quyền — TTCC115 (v3)

Đây là bản chính quyền của quy trình anh Hoàng đang chạy bên Chi bộ. Khác biệt cốt lõi: bên Đảng
phân công cho **đảng viên theo QĐ 03**, bên này phân công cho **khoa/phòng theo chức năng nhiệm vụ**.
Làm trọn 9 bước dưới, báo cáo anh ở cuối.

> **Nguyên tắc nền:** KHÔNG bịa số hiệu, ngày, tên đơn vị, điều khoản — không chắc thì ghi
> "chưa xác minh". KHÔNG phân công không căn cứ — mỗi dòng phân công phải kèm điều/mục căn cứ.
> Bản scan đọc bằng OCR luôn kèm câu "đối chiếu bản gốc khi trích dẫn chính thức".
> Văn bản MẬT xử lý riêng, không lên sổ dùng chung, không đưa vào thông báo.

## ⛔ RÀO CHẮN VỚI PHẦN MỀM cv.115.org.vn — anh Hoàng chốt 08/9/2026

**CHỈ ĐỌC, TUYỆT ĐỐI KHÔNG GHI.** Chỉ được gọi hai endpoint GET:
`api.php?acc=-1` và `api.php?action=file&name=…`.
KHÔNG bấm nút nào trên giao diện (Phiếu, Bổ sung tệp, Thu hồi, Nhập văn bản đến, Xuất báo cáo);
KHÔNG sửa `noiDungChiDao`, `donViChuTri`, trạng thái hay bất kỳ trường nào.
Ghi ngược bút phê vào hệ thống chỉ làm khi anh cho phép riêng bằng lời.

## Ba câu kích hoạt

| Anh nói | Skill làm gì |
|---|---|
| **"lấy văn bản đến"** / "rà soát văn bản đến" | **Chế độ TỰ LẤY** (mặc định): Bước 1A → xếp thư mục → rà soát trọn 9 bước |
| **"a đã đưa các văn bản mới vào thư mục…"** | **Chế độ THỦ CÔNG**: bỏ Bước 1A, chỉ đọc thư mục như cũ. Dùng khi anh tự tải, khi văn bản đến ngoài luồng phần mềm (email, bản giấy, đơn vị bạn gửi thẳng), hoặc khi Chrome/mạng trục trặc |
| **"chỉ lấy về thôi"** | Chạy Bước 1A rồi dừng, không rà soát |

Anh nói "lấy lại" / "lấy cả cái đã bút phê" → bỏ điều kiện `noiDungChiDao` rỗng ở Bước 1A.
Anh nói "thôi" / "ngưng" → dừng ngay, báo rõ đã làm tới đâu và file đang nằm ở đâu.

## Đường dẫn & lưu ý kỹ thuật (đọc trước, hay vướng)

- Thư mục làm việc: `/Users/lenguyenhoang/Documents/Hoạt động TTCC115`.
- Hộp thư đến: `_Văn bản cấp trên cần bút phê giao việc/` · Downloads ở `$HOME/mnt/Downloads`.
- **Đường dẫn tiếng Việt hay lỗi Unicode NFC/NFD**: đừng `cd` thẳng tên có dấu — dùng glob
  `cd "$HOME/mnt/"Ho*TTCC115`, hoặc liệt kê bằng `python3 -c "import os; print(os.listdir('.'))"`.
- ⚠️ **grep tiếng Việt CÓ DẤU trả về RỖNG SAI** (ổ Mac lưu NFD) — dùng `$HOME/bin/tim.py`
  với từ khoá **không dấu**. Đây là lỗi im lặng, không báo lỗi, dễ tưởng "chưa có hồ sơ".
- Ghi file lên máy anh: `SendUserFile` → `device_commit_files` → **verify bằng cách mở lại file
  và ĐẾM SỐ DÒNG, báo con số**. Đã từng mất 11 dòng vì tin "đã commit" mà không đếm lại.
- Không xoá được file trên máy anh — bản trùng thì `mv` vào `_to_delete/` rồi báo anh xoá tay.
- Bộ hồ sơ: `12. Quản lý công việc (DB điều hành)/Văn bản đến - Phân công/`
  — `2026_Sổ theo dõi văn bản đến-đi_TTCC115.xlsx` · `Dashboard theo dõi xử lý văn bản.html`
  · `Bản đồ phân công xử lý văn bản theo khoa phòng TTCC115 (v1).md` · `build_dashboard_vb.py`

---

## BƯỚC 1A — TỰ LẤY VĂN BẢN TỪ cv.115.org.vn (chế độ mặc định)

Dùng Claude in Chrome với phiên đăng nhập sẵn của anh (chọn Browser macOS). Anh đã bật quyền
*Tải xuống tự động* cho `cv.115.org.vn` ngày 08/9/2026 — nếu chỉ tải được 1 tệp rồi dừng thì
quyền đã bị tắt, báo anh bật lại (ổ khoá cạnh URL → Cài đặt trang → Tải xuống tự động → Cho phép).

```js
const j = await fetch('/api.php?acc=-1').then(r=>r.json());
const v = j.state.vanBanDen;                                            // ~836 bản ghi
const isNew = x => (x.attachments||[]).some(a=>/_VanBanDen_/.test(a));  // loại bản "Nhập từ hệ cũ"
const cho = v.filter(x => isNew(x) && !(x.noiDungChiDao||'').trim());
```

⚠️ **CHỈ lọc theo `noiDungChiDao` rỗng.** ĐỪNG thêm điều kiện `donViChuTri` rỗng — văn thư đã
phân công sẵn ở **mức PHÒNG** cho một số văn bản ("Phòng Tổ chức Hành chính", "Phòng Kế hoạch
Tài chính"…), thêm điều kiện đó sẽ bỏ sót. Bút phê của anh nằm ở `noiDungChiDao`, đó mới là
dấu hiệu "đã xử lý".

Tải tệp (trong trang): `fetch('/api.php?action=file&name='+encodeURIComponent(n))` → blob →
`<a download>` → tệp về `~/Downloads` → `device_bash` chuyển vào hộp thư đến. Nghỉ ~800 ms giữa
các tệp. Tệp zip lớn cần thêm thời gian, kiểm lại sau ~10 giây.

**Đối chiếu trùng TRƯỚC khi chuyển** — anh có thể đã tự tải một phần hoặc toàn bộ. So tên tệp
với hộp thư đến; chỉ chuyển tệp chưa có, tệp trùng gom vào `Downloads/_to_delete/`.

### ★ Metadata lấy từ hệ thống — KHÔNG OCR SỐ HIỆU NỮA

Mỗi bản ghi có sẵn: `soDen · ngayDen · soKyHieu · ngayBanHanh · coQuan · trichYeu · mucKhan ·
doMat · hanGiaiQuyet · attachments[] · donViChuTri · history[]`.

Trong chu kỳ 21/8–07/9/2026, OCR đọc **sai số hiệu 8 lần** (778→"27Zể", 4199→"⁄2/22_", 404→"4Ú!",
1301→"134"…) — toàn bộ là công vô ích vì hệ thống đã có sẵn do văn thư nhập.
**Từ nay: số hiệu, ngày ban hành, cơ quan, trích yếu lấy từ API; OCR chỉ dùng đọc NỘI DUNG.**
Chỉ quay lại đọc số hiệu bằng mắt khi chạy chế độ thủ công.

## Bước 1B — Tìm văn bản mới trong thư mục (chế độ thủ công)

Liệt kê file `.pdf/.docx/.xlsx/.zip` mới trong hộp thư đến và ở **gốc** `Hoạt động TTCC115`
(chưa vào thư mục con `00.`–`13.`). File văn thư thường có dạng
`<yyyymmdd>_VanBanDen_<số>_<mã>.pdf`. Bỏ qua `.DS_Store`, `BAO_CAO_QUET_FILE_*.md`.
Đuôi `(1)`, `(2)` là dấu vết tải trùng — kiểm ở Bước 8.
So mốc thời gian file (`find -newermt`) với đợt gần nhất để biết đâu là văn bản mới.

---

## BƯỚC 0 — ★ RÀ HỒ SƠ NỘI BỘ TRƯỚC KHI BÚT PHÊ (không được bỏ)

Vì sao có bước này: đã từng bút phê "để biết" một việc mà Trung tâm đã có QĐ riêng và đang là
đầu mối; anh Hoàng phải nhắc.

```bash
cd "$HOME/mnt/"; T="$HOME/bin/tim.py"
find Ho*TTCC115 -type d | python3 "$T" "<tu khoa khong dau>" | head -6   # ← THƯ MỤC, quan trọng nhất
find Ho*TTCC115 -type f | python3 "$T" "<tu khoa khong dau>" | head -6
find _N*        -type f -name "*.md" | python3 "$T" "<tu khoa>" | head -4
```

Lệnh tìm **tên THƯ MỤC** không được bỏ — hồ sơ hay nằm trong thư mục đặt tên theo chủ đề còn
file bên trong tên khác hẳn. Bắt buộc đọc `_NÃO/Văn bản/00 - VĂN BẢN ĐÃ CHẾT` **mỗi lần** trước
khi viết "Căn cứ…". Kết quả Bước 0 **phải xuất hiện trong báo cáo**, kể cả khi rỗng.
Thư mục grep ra chính là thư mục đích ở Bước 8.

## Bước 2 — Đọc nội dung

- `pdfinfo` lấy số trang; `pdftotext -layout` thử lấy text.
- Ít text (bản scan) → OCR: `pdftoppm -f 1 -l 2 -r 200 -png file /tmp/pg` rồi
  `tesseract /tmp/pg-1.png - -l vie`. Chưa có gói tiếng Việt: `apt-get install -y tesseract-ocr-vie`.
- ⚠️ **Bẫy file "lai"**: file nhiều text nhưng trang 1 rỗng hoặc chỉ ~90–150 ký tự → trang đầu là
  bản scan của văn bản chính, phần text đọc được ở sau chỉ là **đính kèm**.
- ⚠️ **HẠN THẬT THƯỜNG NẤP TRONG ĐÍNH KÈM.** Giải nén `Van-ban-qua-mang-*.zip` và đọc file bên
  trong — CV 12312/SYT-CNTT không nêu hạn nào, hạn đăng ký 26/8 nằm trong CV 921 bên trong zip.
- Trích: yêu cầu chính, **hạn**, văn bản kèm theo, kinh phí, ai chịu trách nhiệm, số người phải cử.
- Chế độ thủ công: **số hiệu viết tay trên bản scan** — OCR hay sai, phóng to `pdftoppm -r 450`,
  crop bằng PIL và **nhìn bằng mắt** trước khi ghi vào sổ.

## Bước 3 — Xác định ĐẾN / ĐI

- **ĐẾN** = cấp trên hoặc đơn vị bạn gửi về → sang Bước 4.
- **ĐI** = do Trung tâm ban hành. Dấu hiệu: đuôi `/TTCC115`, `/TTr-TTCC115`, `/QĐ-TTCC115`,
  `/TTCC115-TCHC`, `/BC-TTCC115`, `/KH-TTCC115`… → **không phân nhóm A/B/C**; ghi loại VB, người ký,
  đơn vị soạn thảo, nơi nhận; **ghép với văn bản đến mà nó trả lời** và cập nhật trạng thái dòng đó.
- Văn bản đi của Trung tâm được đơn vị bạn viện dẫn trong văn bản đến → **bổ sung vào sổ văn bản đi**
  kèm ghi chú nguồn xác nhận, và đề nghị bộ phận soạn thảo gửi bản gốc để lưu.
- **Văn bản Đảng, Công đoàn, Đoàn Thanh niên** → chuyển skill `dang-ra-soat-sap-xep-van-ban`.

## Bước 4 — Phân nhóm A/B/C (chỉ văn bản ĐẾN)

- **A — Để biết:** phổ biến, quán triệt, không phát sinh việc riêng. Vẫn ghi đơn vị lưu và hạn lưu
  nội bộ; không cần hạn cấp trên. Nêu rõ **vì sao không phát sinh nghĩa vụ**, đừng chỉ ghi "để biết".
- **B — Để làm:** yêu cầu rà soát, triển khai, cử người, tổ chức thực hiện → bắt buộc chủ trì + hạn.
- **C — Để báo cáo:** yêu cầu gửi báo cáo/số liệu về cấp trên theo hạn → bắt buộc chủ trì + hạn.

## BƯỚC 5 — PHÂN CÔNG (bước lõi)

**Thứ tự tra, không được đảo:**

**1. Bảng ĐẦU MỐI THỰC TẾ** (anh Hoàng xác nhận bằng lời) — tra TRƯỚC TIÊN:

| Nhóm việc | Đầu mối thực tế | Lãnh đạo | Ngày chốt |
|---|---|---|---|
| Trực đảm bảo y tế **sự kiện** (lễ, hội chợ, giải chạy, pháo hoa, đoàn khách) | **KHTC - bộ phận Kế hoạch tổng hợp** (ĐẦU MỐI); CCNBV bố trí lực lượng | PGĐ Hoàng | 03/9/2026 |
| **Tiếp công dân**, khiếu nại - tố cáo, phòng chống tham nhũng - lãng phí - tiêu cực | **TCHC - bộ phận Tổ chức cán bộ** | PGĐ Long | 03/9/2026 |
| **Pháp chế**, phổ biến - giáo dục pháp luật, triển khai VBQPPL mới, bồi dưỡng nghiệp vụ pháp chế | **TCHC - bộ phận Tổ chức cán bộ** | PGĐ Long | 04/9/2026 |
| Phòng chống tội phạm, an ninh trật tự | TCHC - bộ phận Hành chính quản trị | PGĐ Tuấn | 03/9/2026 |

**2.** Rồi mới tra `references/ban_do_phan_cong.md` (**27 nhóm chủ đề**).
**3.** **QĐ chức năng nhiệm vụ 184–188 chỉ dùng để VIỆN DẪN CĂN CỨ**, không phải nguồn quyết định
ai chủ trì. Nhóm việc chưa có trong bảng và không nằm rõ trong QĐ nào → **hỏi anh, đừng suy diễn**.

```
Chủ trì:   1 bộ phận duy nhất — nơi chịu trách nhiệm ra sản phẩm cuối
Phối hợp:  0-3 đơn vị, ghi rõ phối hợp phần nào
Hạn:       theo Bước 7 (hai loại hạn, không trộn)
Căn cứ:    số QĐ + điều/mục (VD: "QĐ 185, Đ.2 mục 2.1") + số nhóm bản đồ
```

**Ba nguyên tắc đã trả giá mới có:**

- **Phân theo NGHĨA VỤ phát sinh, không theo nhãn chủ đề hay theo phòng gửi.** Văn bản do Phòng
  Pháp chế Sở (KTPC) gửi không tự động là việc pháp chế — CV 12030/SYT-KTPC về hàng không →
  Kế hoạch tổng hợp; CV 12005/SYT-KTPC thi hành án dân sự → Tổ chức cán bộ. Ba văn bản KTPC
  chia về ba nơi, và đó là đúng.
- **Ghi rõ 1 trong 13 BỘ PHẬN**, không ghi "P.TCHC"/"P.KHTC". QĐ mô tả chức năng ở **mức PHÒNG**,
  phân công thực tế ở **mức BỘ PHẬN**, và mỗi phòng chẻ đôi giữa hai lãnh đạo. Đây là nguyên nhân
  của cả 3 lần phân sai trong hai ngày 03–04/9/2026.
- **Nhiệm vụ kiêm nhiệm chưa có đầu mối** (văn bản yêu cầu "cử người làm công tác X"): ghi rõ
  trong bút phê là Trung tâm CHƯA chỉ định, đề nghị BGĐ quyết trước khi lập danh sách —
  **đừng gán bừa một bộ phận rồi để anh phát hiện sau**.

**Ba tình huống bắt buộc nêu cho anh quyết, không tự chốt:**
1. **Vùng giao thoa** (khảo sát hài lòng · xe cứu thương · đào tạo · mô hình thực hành) → nêu cả hai
   phương án kèm căn cứ.
2. **Khoảng trống** còn lại: truyền thông - báo chí · Ban Quản lý đào tạo · Trạm/cơ sở khu vực
   → phương án tạm + đánh dấu "cần BGĐ chốt".
3. Không tra được nhóm nào → ghi "Cần BGĐ phân công", **không đoán**.

**Định tuyến lãnh đạo:** Giám đốc (liên ngành, chưa rõ đầu mối) · PGĐ Long (Tổ chức cán bộ,
Tài chính kế toán) · PGĐ Tuấn (Hành chính quản trị, Vật tư-TTBYT-Dược, Khoa Điều hành) ·
PGĐ Hoàng (Kế hoạch tổng hợp, CCNBV, Tổ CNTT, Tổ ĐTLT).
Việc ngoài mảng anh Hoàng → mở bút phê bằng "Kính chuyển đồng chí Giám đốc / Phó Giám đốc …".

⚖️ **Cân tải trước khi đặt hạn.** Bộ phận đang gánh 19 việc thì hạn nội bộ phải giãn hơn bộ phận
gánh 2 việc. Đếm phân bố việc theo bộ phận trước khi chốt hạn, và nêu con số cho anh khi lệch lớn.

## Bước 6 — Viết bút phê (mẫu 3 chân)

Một đoạn văn xuôi hành chính liền mạch, **KHÔNG gạch đầu dòng, không đánh số**; các mệnh đề ngăn
bằng dấu chấm phẩy. Ba chân bắt buộc: **giao ai làm gì** — **căn cứ/dữ kiện cụ thể** — **mốc thời gian**.
Mở bằng câu giao việc hoặc câu chuyển cấp trên; khép bằng "Báo cáo Ban Giám đốc trước ngày …".
Cảnh báo (hạn đã qua, số liệu mâu thuẫn, thiếu đính kèm) đặt **ngay đầu** bút phê, không giấu ở giữa.
Chi tiết và ví dụ thật: `references/mau_but_phe.md`.

## Bước 7 — Hai loại hạn KHÔNG được trộn

- Cột **O "HẠN CẤP TRÊN (theo văn bản)"**: chỉ chứa ngày trích nguyên văn. Không nêu thì "—".
  Phải bắt đầu bằng `dd/mm/yyyy` mới đếm được vào KPI "quá hạn với cấp trên".
- Cột **J "Hạn nội bộ (đề xuất)"**: luôn kèm chữ **"(tự đặt)"**.
- ⚠️ **Hạn chết trước khi văn bản tới tay** — đã gặp 4 lần trong 2 tuần (CV 12281 · 12302 · 12397 ·
  12312). Ghi cột O nguyên văn kèm "(đã quá hạn trước khi nhận)", cảnh báo ngay đầu bút phê,
  và **tìm đường sống**: kiểm ngày sự kiện / khai giảng / nộp hồ sơ thực tế trước khi kết luận hết cách.

## Bước 8 — Kiểm trùng, thay thế, hiệu lực · đổi tên · xếp thư mục

- **Trùng:** tìm số hiệu trong toàn thư mục; bản y hệt (so dung lượng + md5) → không copy lại,
  chuyển bản dư vào `_LUU_TRU/[TRUNG_LAP_CAN_XOA]/`.
- **Thay thế:** đọc phần cuối văn bản tìm cụm "thay thế / bãi bỏ / hết hiệu lực"; văn bản bị bãi bỏ
  → **bổ sung vào danh mục VĂN BẢN ĐÃ CHẾT** để lần sau không ai viện dẫn nhầm.
- **Hiệu lực VBPL được viện dẫn:** gọi skill `ttcc115-van-ban-phap-ly` — tra thuvienphapluat.vn
  bằng phiên đăng nhập của anh. VBPL kho chưa có → **tự tải bản gốc, đặt tên chuẩn, xếp thư mục**
  (skill `ttcc115-vbpl-auto-save`), không đẩy việc tải file sang anh.
- Tên chuẩn: `năm_số-ký hiệu_Trích yếu ngắn.pdf`, đủ dấu tiếng Việt, ký tự `Đ`/`đ`.
- Xếp vào thư mục con theo chủ đề (lấy từ kết quả Bước 0). **Không để file rời ở gốc.**
  File cần anh quyết → `_XIN Ý KIẾN/` kèm `_GHI CHÚ - việc cần anh quyết.md`.

## Bước 9 — Cập nhật sổ, dashboard, thông báo & báo cáo

1. **Sổ theo dõi** — ĐẾN → sheet "Văn bản đến"; ĐI → sheet "Văn bản đi". Giữ Arial 10, wrap, border;
   clone định dạng bằng `copy.copy(cell._style)` từ dòng liền trước.
   ⚠️ openpyxl: **không dùng `cell.fill=None`** (hỏng file) — dùng `PatternFill(fill_type=None)`.
   DataValidation danh sách dài >255 ký tự phải trỏ tới một vùng ô, không nhút thẳng chuỗi.
2. **Dashboard** — `python3 build_dashboard_vb.py <sổ.xlsx> <out.html> <dd/mm/yyyy>`, giao file cho anh
   và commit về đúng thư mục.
3. **Artifact trực tuyến** — `action:"read"` bản live **TRƯỚC**, lấy các trạng thái anh đã đổi trên web,
   áp lại vào sổ rồi mới republish. Bỏ bước này là mất trạng thái (đã mất 2 lần).
4. **Thông báo giao việc** — soạn sẵn theo `references/mau_thong_bao_giao_viec.md`, đưa vào khối trích
   để anh copy. Bỏ qua nếu toàn bộ là văn bản ĐI, không có nhóm B/C, hoặc anh dặn "không cần thông báo".
5. **Báo cáo cho anh**: mỗi văn bản là gì, nhóm nào, giao ai, hạn nào, căn cứ nào, xếp vào đâu, có
   trùng/thay thế/lỗi viện dẫn không — và một mục riêng **"việc cần anh quyết"** kèm việc còn treo
   từ các đợt trước.

## Checklist tự kiểm trước khi báo cáo

- [ ] **Không ghi gì vào cv.115.org.vn?**
- [ ] Chạy chế độ nào — số hiệu lấy từ API hay đã nhìn bằng mắt?
- [ ] Đã đối chiếu trùng với hộp thư đến trước khi chuyển file?
- [ ] Kết quả **Bước 0** có trong báo cáo, kể cả khi rỗng?
- [ ] Đã giải nén đính kèm tìm **hạn thật**?
- [ ] Mọi văn bản B/C có **chủ trì (mức bộ phận) + hạn + căn cứ điều khoản**?
- [ ] Vùng giao thoa / khoảng trống / nhiệm vụ kiêm nhiệm chưa có đầu mối — đã nêu để anh quyết?
- [ ] Hai loại hạn tách đúng cột, hạn nội bộ có chữ "(tự đặt)", cột O đúng định dạng ngày?
- [ ] Đã đọc VĂN BẢN ĐÃ CHẾT trước khi viết "Căn cứ…"?
- [ ] Đã tra hiệu lực các VBPL được viện dẫn?
- [ ] Gốc thư mục đã sạch, tên file đúng convention?
- [ ] Sổ + dashboard đã commit và **đã mở lại đếm số dòng trên máy anh, báo con số**?
- [ ] Artifact đã `read` trước khi republish?
- [ ] Văn bản MẬT (nếu có) đã tách riêng?

## Giới hạn phải nói thẳng

Bản đồ phân công dựa trên **5 QĐ chức năng nhiệm vụ 184–188/QĐ-TTCC115 (06/12/2022)** và
**QĐ 5342/QĐ-SYT (10/10/2022)**. Quy chế làm việc 456/2018 đã lệch thời (vẫn gọi Điều hành là
"phòng", không có Khoa Cấp cứu ngoài bệnh viện) nên chỉ dùng bổ trợ. Khi Trung tâm ban hành quy chế
làm việc mới hoặc QĐ cơ cấu mới, **phải nâng `references/ban_do_phan_cong.md` lên v4 trước khi chạy tiếp**.

Sổ Excel và phần mềm cv.115.org.vn hiện là **hai nguồn song song** ghi cùng một loại thông tin, và
đã bắt đầu lệch: CV 11709/SYT-VP trong sổ ghi *Hoàn thành* nhưng hệ thống vẫn treo *chờ bút phê*.
Mỗi lần sửa phân công chỉ sửa được trong sổ, hệ thống vẫn giữ cái cũ. Nêu lại với anh khi độ lệch
lớn dần — đây là lý do nên đi tới việc cho sổ sinh ra từ hệ thống, chứ không phải chỉ tự động hoá
khâu tải file.