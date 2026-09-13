# TTCC115 Skills

Bộ Claude Skills phục vụ công việc tại **Trung tâm Cấp cứu 115 TP.HCM (TTCC115)** — truyền thông, văn bản hành chính, công tác Đảng và kế hoạch y tế.

Repo này là bản lưu trữ có version của các skill đang chạy trên tài khoản Claude. Mỗi thư mục con trong `skills/` là một skill hoàn chỉnh (`SKILL.md` + `references/`, `scripts/`, `examples/` nếu có).

## Nhóm 1 — Truyền thông TTCC115 (`ttcc115-*`)

| Skill | Việc |
|---|---|
| `ttcc115-chien-luoc-ke-hoach` | Lập chiến lược truyền thông và kế hoạch nội dung |
| `ttcc115-noi-dung-so-cap-cuu` | Nội dung giáo dục sơ cấp cứu cho cộng đồng (mảng ưu tiên số 1) |
| `ttcc115-social-media` | Nội dung Facebook, Zalo OA, Instagram |
| `ttcc115-short-video` | Script và kế hoạch sản xuất TikTok / Reels / Shorts |
| `ttcc115-thiet-ke-visual` | Brief đồ hoạ: infographic sơ cứu, ảnh MXH, poster, thumbnail |
| `ttcc115-seo-web` | SEO và nội dung website 115.org.vn, hiện diện trên Google |
| `ttcc115-community-manager` | Tương tác cộng đồng, xử lý phản hồi trên các nền tảng |
| `ttcc115-krc-bao-chi` | Xử lý khủng hoảng truyền thông và quan hệ báo chí |
| `ttcc115-truyen-thong-noi-bo` | Truyền thông nội bộ và hỗ trợ mạng lưới trạm vệ tinh |

## Nhóm 2 — Văn bản & pháp lý

| Skill | Việc |
|---|---|
| `ttcc115-van-ban-phan-cong` | Rà soát văn bản đến, phân công khoa/phòng chủ trì – phối hợp |
| `ttcc115-van-ban-phap-ly` | Kiểm tra hiệu lực VBPL, phát hiện văn bản thay thế/bổ sung |
| `ttcc115-vbpl-auto-save` | Tự động tải file gốc VBPL về đúng thư mục khi tra cứu/viện dẫn |
| `luu-van-ban-da-ky` | Cổng lưu văn bản đã ban hành – đã ký – còn hiệu lực (Mac + Google Drive) |

## Nhóm 3 — Công tác Đảng (Chi bộ TTCC115)

| Skill | Việc |
|---|---|
| `dang-ra-soat-sap-xep-van-ban` | Rà soát, phân loại, đổi tên và sắp xếp văn bản Đảng |
| `dang-thong-bao-chi-bo` | Soạn thông báo / tin nhắn Zalo nhóm Chi bộ |

## Nhóm 4 — Kế hoạch & báo cáo y tế

| Skill | Việc |
|---|---|
| `ke-hoach-y-te-vn` | Soạn Kế hoạch y tế cấp Sở / đơn vị / địa phương, chuẩn thể thức hành chính |
| `health-report-ppt-vn` | Báo cáo PowerPoint + Word cho đơn vị y tế (có template TVT Cần Giờ / TTCC115) |

## Cách dùng

**Claude Code / Cowork** — clone repo rồi trỏ vào thư mục skills:

```bash
git clone https://github.com/heineken278-spec/ttcc115-skills.git
cp -r ttcc115-skills/skills/* ~/.claude/skills/
```

**Claude.ai** — vào Settings → Capabilities → Skills, upload từng thư mục skill dưới dạng `.zip`.

## Cấu trúc

```
skills/
  <ten-skill>/
    SKILL.md          # frontmatter (name, description) + hướng dẫn
    references/       # tài liệu tham chiếu Claude đọc khi cần
    scripts/          # script hỗ trợ (Python / Node)
    examples/         # ví dụ mẫu
```

## Quy ước đóng góp

- Sửa skill thì sửa trong repo này rồi đồng bộ ngược lên tài khoản Claude, không sửa hai nơi.
- `description` trong frontmatter là thứ quyết định khi nào Claude gọi skill — viết đủ từ khoá kích hoạt, đừng viết ngắn cho đẹp.
- Nội dung nhạy cảm (danh sách nhân sự, văn bản Mật) không đưa vào repo; skill chỉ mô tả quy trình.
