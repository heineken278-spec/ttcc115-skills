# -*- coding: utf-8 -*-
"""Sinh dashboard HTML theo dõi tiến độ xử lý văn bản TTCC115 từ Sổ theo dõi (.xlsx).

Dùng:  python3 build_dashboard_vb.py <duong_dan_so.xlsx> <duong_dan_out.html> [ngay_chot dd/mm/yyyy]
"""
import sys, json, datetime, html
import openpyxl

XLSX = sys.argv[1] if len(sys.argv) > 1 else "so_theo_doi.xlsx"
OUT = sys.argv[2] if len(sys.argv) > 2 else "dashboard.html"
TODAY = sys.argv[3] if len(sys.argv) > 3 else datetime.date.today().strftime("%d/%m/%Y")

DVIET = {"P. Tổ chức - Hành chính": "P. TC-HC", "P. Kế hoạch - Tài chính": "P. KH-TC",
         "P. Vật tư, TTBYT - Dược": "P. VT-D", "Khoa Cấp cứu ngoài bệnh viện": "Khoa CCNBV",
         "Khoa Điều hành": "Khoa ĐH", "Tổ QLCL (KHTC)": "Tổ QLCL",
         "Tổ Đào tạo liên tục (KHTC)": "Tổ ĐTLT", "Tổ CNTT (KHTC)": "Tổ CNTT",
         "Ban Quản lý đào tạo": "Ban QLĐT", "Ban Giám đốc": "Ban Giám đốc",
         "Cần BGĐ phân công": "Chưa phân công"}


def pdate(v):
    if v is None or v == "":
        return None
    if isinstance(v, (datetime.date, datetime.datetime)):
        return datetime.date(v.year, v.month, v.day)
    s = str(v).strip().replace("-", "/")
    for f in ("%d/%m/%Y", "%d/%m/%y", "%Y/%m/%d"):
        try:
            return datetime.datetime.strptime(s, f).date()
        except ValueError:
            pass
    return None


wb = openpyxl.load_workbook(XLSX, data_only=True)
ws = wb["Văn bản đến"]
rows = []
for r in ws.iter_rows(min_row=3, values_only=True):
    if not any(x not in (None, "") for x in r[:5]):
        continue
    rows.append({
        "stt": r[0], "ngay_nhan": r[1], "so_hieu": r[2] or "", "co_quan": r[3] or "",
        "trich_yeu": r[4] or "", "nhom": (r[5] or "").strip() if isinstance(r[5], str) else "",
        "viec": r[6] or "", "chu_tri": (r[7] or "").strip() if isinstance(r[7], str) else "",
        "phoi_hop": r[8] or "", "han": r[9], "can_cu": r[10] or "",
        "trang_thai": (r[11] or "").strip() if isinstance(r[11], str) else "", "ghi_chu": r[12] or "",
    })

today = pdate(TODAY) or datetime.date.today()
for x in rows:
    h = pdate(x["han"])
    x["han_txt"] = h.strftime("%d/%m/%Y") if h else "—"
    x["ngay_txt"] = (pdate(x["ngay_nhan"]).strftime("%d/%m/%Y")
                     if pdate(x["ngay_nhan"]) else "")
    x["con_lai"] = (h - today).days if h else None
    st = x["trang_thai"]
    if st == "Hoàn thành":
        x["tt"] = "good"
    elif st == "Trễ hạn" or (x["con_lai"] is not None and x["con_lai"] < 0 and st != "Hoàn thành"):
        x["tt"] = "critical"
        x["trang_thai"] = x["trang_thai"] or "Trễ hạn"
    elif x["con_lai"] is not None and x["con_lai"] <= 7:
        x["tt"] = "warning"
    elif st in ("Đang làm", "Đã giao"):
        x["tt"] = "normal"
    else:
        x["tt"] = "muted"

viec = [x for x in rows if x["nhom"] in ("B", "C")]
n_a = sum(1 for x in rows if x["nhom"] == "A")
n_done = sum(1 for x in viec if x["tt"] == "good")
n_late = sum(1 for x in viec if x["tt"] == "critical")
n_soon = sum(1 for x in viec if x["tt"] == "warning")
n_none = sum(1 for x in viec if not x["chu_tri"] or x["chu_tri"] == "Cần BGĐ phân công")

by_dv = {}
for x in viec:
    k = DVIET.get(x["chu_tri"], x["chu_tri"] or "Chưa phân công")
    d = by_dv.setdefault(k, {"ten": k, "tong": 0, "xong": 0, "tre": 0})
    d["tong"] += 1
    if x["tt"] == "good":
        d["xong"] += 1
    if x["tt"] == "critical":
        d["tre"] += 1
bars = sorted(by_dv.values(), key=lambda d: -d["tong"])

DATA = {"today": TODAY, "rows": rows, "viec": viec, "bars": bars,
        "kpi": {"tong": len(rows), "a": n_a, "viec": len(viec), "xong": n_done,
                "tre": n_late, "soon": n_soon, "chua_giao": n_none}}

TPL = r"""<!DOCTYPE html>
<html lang="vi"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Theo dõi xử lý văn bản — TTCC115</title>
<style>
:root{color-scheme:light;--bg:#f4f4f2;--surface:#fcfcfb;--line:#e3e2dd;--ink:#0b0b0b;
--ink2:#52514e;--ink3:#84837d;--s1:#2a78d6;--good:#0ca30c;--warn:#fab219;--crit:#d03b3b;--soft:#eceae4}
@media (prefers-color-scheme:dark){:root:where(:not([data-theme="light"])){
--bg:#111110;--surface:#1a1a19;--line:#33322f;--ink:#fff;--ink2:#c3c2b7;--ink3:#8e8d85;
--s1:#3987e5;--good:#0ca30c;--warn:#fab219;--crit:#d03b3b;--soft:#262523}}
:root[data-theme="dark"]{--bg:#111110;--surface:#1a1a19;--line:#33322f;--ink:#fff;--ink2:#c3c2b7;
--ink3:#8e8d85;--s1:#3987e5;--soft:#262523;color-scheme:dark}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);
font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
font-size:14px;line-height:1.5}
.wrap{max-width:1180px;margin:0 auto;padding:28px 20px 60px}
header{display:flex;justify-content:space-between;align-items:flex-end;gap:16px;flex-wrap:wrap;
border-bottom:2px solid var(--line);padding-bottom:14px;margin-bottom:22px}
h1{font-size:21px;margin:0 0 4px;letter-spacing:-.01em}
.sub{color:var(--ink2);font-size:13px}
button.theme{background:var(--surface);border:1px solid var(--line);color:var(--ink2);
border-radius:8px;padding:7px 12px;font-size:12.5px;cursor:pointer}
.kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(158px,1fr));gap:12px;margin-bottom:24px}
.kpi{background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:14px 16px}
.kpi .lb{font-size:12px;color:var(--ink2);margin-bottom:6px}
.kpi .vl{font-size:29px;font-weight:650;letter-spacing:-.02em;line-height:1.1}
.kpi .nt{font-size:11.5px;color:var(--ink3);margin-top:3px}
.kpi.crit .vl{color:var(--crit)} .kpi.good .vl{color:var(--good)}
section{background:var(--surface);border:1px solid var(--line);border-radius:12px;
padding:18px 20px;margin-bottom:20px}
h2{font-size:15px;margin:0 0 3px;font-weight:620}
.hint{font-size:12.5px;color:var(--ink2);margin:0 0 16px}
.bar{display:grid;grid-template-columns:132px 1fr 44px;gap:12px;align-items:center;margin-bottom:9px}
.bname{font-size:12.5px;color:var(--ink2);text-align:right;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.btrack{height:20px;background:var(--soft);border-radius:4px;overflow:hidden;display:flex}
.bfill{height:100%;background:var(--s1);border-radius:0 4px 4px 0}
.bfill.d{background:var(--good);border-radius:0}
.bfill.l{background:var(--crit);border-radius:0 4px 4px 0}
.bval{font-size:12.5px;color:var(--ink2);font-variant-numeric:tabular-nums}
.lg{display:flex;gap:16px;flex-wrap:wrap;margin-top:14px;font-size:12px;color:var(--ink2)}
.lg i{display:inline-block;width:10px;height:10px;border-radius:2px;margin-right:6px;vertical-align:-1px}
table{width:100%;border-collapse:collapse;font-size:12.8px}
th{text-align:left;font-weight:600;color:var(--ink2);border-bottom:1px solid var(--line);
padding:8px 9px;font-size:12px;white-space:nowrap}
td{padding:9px;border-bottom:1px solid var(--line);vertical-align:top;color:var(--ink)}
tr:last-child td{border-bottom:none}
.chip{display:inline-flex;align-items:center;gap:5px;font-size:11.5px;padding:2px 8px;
border-radius:20px;border:1px solid var(--line);white-space:nowrap;color:var(--ink2)}
.chip b{font-weight:600}
.dot{width:8px;height:8px;border-radius:50%;display:inline-block;flex:0 0 8px}
.d-good{background:var(--good)} .d-warn{background:var(--warn)} .d-crit{background:var(--crit)}
.d-norm{background:var(--s1)} .d-mut{background:var(--ink3)}
.gr{color:var(--ink3)} .nowrap{white-space:nowrap}
.empty{text-align:center;padding:40px 20px;color:var(--ink2)}
.empty .big{font-size:15px;color:var(--ink);margin-bottom:6px;font-weight:600}
.filters{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px}
.filters select{background:var(--surface);border:1px solid var(--line);color:var(--ink);
border-radius:8px;padding:6px 9px;font-size:12.5px}
footer{color:var(--ink3);font-size:12px;text-align:center;margin-top:26px;line-height:1.7}
@media(max-width:640px){.bar{grid-template-columns:96px 1fr 36px}
table{font-size:12px}.hide-s{display:none}}
</style></head><body>
<div class="wrap">
<header><div><h1>Theo dõi xử lý văn bản — Trung tâm Cấp cứu 115</h1>
<div class="sub">Phân công theo chức năng nhiệm vụ khoa/phòng · số liệu chốt ngày <b id="d"></b></div></div>
<button class="theme" onclick="tg()">Đổi nền sáng/tối</button></header>
<div class="kpis" id="kpis"></div>
<section><h2>Việc phát sinh theo đơn vị chủ trì</h2>
<p class="hint">Mỗi văn bản nhóm B (để làm) hoặc C (để báo cáo) tính là 1 việc, gắn cho đơn vị chủ trì.</p>
<div id="bars"></div>
<div class="lg"><span><i style="background:var(--good)"></i>Hoàn thành</span>
<span><i style="background:var(--s1)"></i>Đang xử lý</span>
<span><i style="background:var(--crit)"></i>Trễ hạn</span></div></section>
<section><h2>Việc cần bám hạn</h2>
<p class="hint">Sắp xếp theo mức khẩn: trễ hạn trước, rồi tới hạn trong 7 ngày.</p>
<div id="urgent"></div></section>
<section><h2>Toàn bộ văn bản đến</h2>
<div class="filters">
<select id="fn" onchange="rd()"><option value="">Tất cả nhóm</option><option>A</option><option>B</option><option>C</option></select>
<select id="fd" onchange="rd()"><option value="">Tất cả đơn vị</option></select>
<select id="ft" onchange="rd()"><option value="">Mọi trạng thái</option>
<option>Chưa giao</option><option>Đã giao</option><option>Đang làm</option>
<option>Hoàn thành</option><option>Trễ hạn</option></select></div>
<div id="all"></div></section>
<footer>Nguồn: Sổ theo dõi văn bản đến - đi TTCC115 · Căn cứ phân công: QĐ 5342/QĐ-SYT (10/10/2022)
và QĐ 184-188/QĐ-TTCC115 (06/12/2022)<br>Bản đồ phân công 25 nhóm chủ đề nằm ở sheet
"Bản đồ phân công" của sổ theo dõi.</footer>
</div>
<script>
const D = __DATA__;
const DOT={good:'d-good',warning:'d-warn',critical:'d-crit',normal:'d-norm',muted:'d-mut'};
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
document.getElementById('d').textContent=D.today;
function tg(){const r=document.documentElement;
 const cur=r.getAttribute('data-theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
 r.setAttribute('data-theme',cur==='dark'?'light':'dark');}
const k=D.kpi;
document.getElementById('kpis').innerHTML=[
 ['Văn bản đến',k.tong,'trong kỳ theo dõi',''],
 ['Việc phát sinh',k.viec,'nhóm B + C',''],
 ['Chỉ để biết',k.a,'nhóm A',''],
 ['Hoàn thành',k.xong,k.viec?Math.round(k.xong*100/k.viec)+'% số việc':'—','good'],
 ['Trễ hạn',k.tre,'cần xử lý ngay',k.tre?'crit':''],
 ['Tới hạn ≤ 7 ngày',k.soon,'cần nhắc đơn vị',''],
 ['Chưa có chủ trì',k.chua_giao,'chờ BGĐ phân công',k.chua_giao?'crit':'']
].map(([l,v,n,c])=>`<div class="kpi ${c}"><div class="lb">${l}</div><div class="vl">${v}</div><div class="nt">${n}</div></div>`).join('');

const mx=Math.max(1,...D.bars.map(b=>b.tong));
document.getElementById('bars').innerHTML = D.bars.length? D.bars.map(b=>{
 const w=t=>(t/mx*100).toFixed(1)+'%';
 const dang=b.tong-b.xong-b.tre;
 return `<div class="bar"><div class="bname" title="${esc(b.ten)}">${esc(b.ten)}</div>
 <div class="btrack">${b.xong?`<div class="bfill d" style="width:${w(b.xong)}"></div>`:''}
 ${dang>0?`<div class="bfill" style="width:${w(dang)};border-radius:0 4px 4px 0"></div>`:''}
 ${b.tre?`<div class="bfill l" style="width:${w(b.tre)}"></div>`:''}</div>
 <div class="bval">${b.tong}</div></div>`}).join('')
 : '<div class="empty"><div class="big">Chưa có việc nào được giao</div>Sổ theo dõi chưa có văn bản nhóm B/C.</div>';

function chip(x){return `<span class="chip"><span class="dot ${DOT[x.tt]}"></span><b>${esc(x.trang_thai||'Chưa giao')}</b></span>`}
function tbl(list,urgent){
 if(!list.length) return '<div class="empty"><div class="big">Không có dòng nào</div>'+
  (urgent?'Không có việc trễ hạn hay tới hạn trong 7 ngày.':'Thử bỏ bớt bộ lọc.')+'</div>';
 return `<table><thead><tr><th>Số hiệu</th><th>Trích yếu / việc</th><th>Chủ trì</th>
 <th class="hide-s">Phối hợp</th><th>Hạn</th><th>Trạng thái</th></tr></thead><tbody>`+
 list.map(x=>`<tr><td class="nowrap">${esc(x.so_hieu)}<div class="gr">${esc(x.ngay_txt)}</div></td>
 <td>${esc(x.trich_yeu)}${x.viec?`<div class="gr">→ ${esc(x.viec)}</div>`:''}</td>
 <td>${esc(x.chu_tri||'—')}${x.can_cu?`<div class="gr">${esc(x.can_cu)}</div>`:''}</td>
 <td class="hide-s gr">${esc(x.phoi_hop)}</td>
 <td class="nowrap">${esc(x.han_txt)}${x.con_lai!=null&&x.tt!=='good'?`<div class="gr">${x.con_lai<0?'trễ '+(-x.con_lai)+' ngày':'còn '+x.con_lai+' ngày'}</div>`:''}</td>
 <td>${chip(x)}</td></tr>`).join('')+'</tbody></table>';
}
const ord={critical:0,warning:1,normal:2,muted:3,good:4};
document.getElementById('urgent').innerHTML=tbl(
 D.viec.filter(x=>x.tt==='critical'||x.tt==='warning').sort((a,b)=>ord[a.tt]-ord[b.tt]||(a.con_lai??999)-(b.con_lai??999)),true);
const dvs=[...new Set(D.rows.map(x=>x.chu_tri).filter(Boolean))];
document.getElementById('fd').insertAdjacentHTML('beforeend',dvs.map(d=>`<option>${esc(d)}</option>`).join(''));
function rd(){const n=fn.value,d=fd.value,t=ft.value;
 document.getElementById('all').innerHTML=tbl(D.rows.filter(x=>
  (!n||x.nhom===n)&&(!d||x.chu_tri===d)&&(!t||x.trang_thai===t)),false);}
rd();
</script></body></html>"""

open(OUT, "w", encoding="utf-8").write(
    TPL.replace("__DATA__", json.dumps(DATA, ensure_ascii=False, default=str)))
print("Đã ghi", OUT, "-", len(rows), "văn bản đến")
