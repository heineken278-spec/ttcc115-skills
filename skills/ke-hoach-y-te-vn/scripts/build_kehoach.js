#!/usr/bin/env node
/**
 * build_kehoach.js
 * Sinh file Word Kế hoạch y tế Việt Nam chuẩn thể thức hành chính.
 *
 * Usage: node build_kehoach.js <input.json> <output.docx>
 *
 * Yêu cầu: npm install docx (đã cài sẵn ở session outputs)
 */

const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, HeadingLevel, BorderStyle, WidthType,
  ShadingType, Footer, PageNumber, PageBreak, TabStopType, TabStopPosition
} = require('docx');

// ============== ĐỌC INPUT ==============
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node build_kehoach.js <input.json> <output.docx>');
  process.exit(1);
}
const inputPath = args[0];
const outputPath = args[1];
const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

// ============== CẤU HÌNH CHUNG ==============
const FONT = "Times New Roman";
const SIZE_NORMAL = 26;     // 13pt
const SIZE_HEADING = 28;    // 14pt
const SIZE_TITLE = 32;      // 16pt

const border = { style: BorderStyle.SINGLE, size: 4, color: "000000" };
const borders = { top: border, bottom: border, left: border, right: border };

// ============== HELPERS ==============
function P(text, opts = {}) {
  return new Paragraph({
    spacing: { after: opts.after !== undefined ? opts.after : 100, line: 312 },
    alignment: opts.align || AlignmentType.JUSTIFIED,
    indent: opts.firstLine !== false ? { firstLine: 567 } : undefined,
    children: [new TextRun({
      text, font: FONT, size: SIZE_NORMAL,
      bold: opts.bold, italics: opts.italic
    })]
  });
}

function H1(text) {
  return new Paragraph({
    spacing: { before: 240, after: 120 },
    alignment: AlignmentType.LEFT,
    heading: HeadingLevel.HEADING_1,
    children: [new TextRun({ text, font: FONT, size: SIZE_HEADING, bold: true })]
  });
}

function H2(text) {
  return new Paragraph({
    spacing: { before: 180, after: 100 },
    alignment: AlignmentType.LEFT,
    heading: HeadingLevel.HEADING_2,
    indent: { firstLine: 567 },
    children: [new TextRun({ text, font: FONT, size: SIZE_NORMAL, bold: true })]
  });
}

function H3(text) {
  return new Paragraph({
    spacing: { before: 120, after: 80 },
    alignment: AlignmentType.LEFT,
    indent: { firstLine: 567 },
    children: [new TextRun({ text, font: FONT, size: SIZE_NORMAL, bold: true, italics: true })]
  });
}

function BULLET(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 60, line: 312 },
    alignment: AlignmentType.JUSTIFIED,
    children: [new TextRun({ text, font: FONT, size: SIZE_NORMAL })]
  });
}

function TIME(text) {
  return new Paragraph({
    spacing: { before: 80, after: 100, line: 312 },
    alignment: AlignmentType.JUSTIFIED,
    indent: { firstLine: 567 },
    children: [
      new TextRun({ text: "Thời gian thực hiện: ", font: FONT, size: SIZE_NORMAL, italics: true, bold: true }),
      new TextRun({ text, font: FONT, size: SIZE_NORMAL })
    ]
  });
}

function TITLECENTER(text, size = SIZE_TITLE) {
  return new Paragraph({
    spacing: { before: 60, after: 60 },
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text, font: FONT, size, bold: true })]
  });
}

function ITALICCENTER(text) {
  return new Paragraph({
    spacing: { before: 0, after: 240 },
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text, font: FONT, size: SIZE_NORMAL, italics: true })]
  });
}

function cell(text, opts = {}) {
  return new TableCell({
    borders,
    width: { size: opts.w, type: WidthType.DXA },
    shading: opts.header ? { fill: "D9E2F3", type: ShadingType.CLEAR } : undefined,
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    children: (Array.isArray(text) ? text : [text]).map(t =>
      new Paragraph({
        alignment: opts.center ? AlignmentType.CENTER : (opts.justify ? AlignmentType.JUSTIFIED : AlignmentType.LEFT),
        spacing: { after: 0, line: 280 },
        children: [new TextRun({ text: t, font: FONT, size: 24, bold: opts.bold || opts.header })]
      })
    )
  });
}

function sectionRow(title, colSpan) {
  return new TableRow({
    children: [new TableCell({
      borders,
      columnSpan: colSpan,
      shading: { fill: "F4E4C1", type: ShadingType.CLEAR },
      margins: { top: 80, bottom: 80, left: 120, right: 120 },
      children: [new Paragraph({
        alignment: AlignmentType.LEFT,
        children: [new TextRun({ text: title, font: FONT, size: 24, bold: true, italics: true })]
      })]
    })]
  });
}

// ============== HEADER THỂ THỨC ==============
function buildHeader(d) {
  const co_quan = d.co_quan_ban_hanh || {};
  const tabPos = 4500;
  const result = [];

  // Dòng 1: Cấp trên (nếu có) - CHXHCN
  if (co_quan.cap_tren) {
    result.push(new Paragraph({
      tabStops: [{ type: TabStopType.LEFT, position: tabPos }],
      spacing: { after: 60 },
      children: [
        new TextRun({ text: co_quan.cap_tren, font: FONT, size: 24, bold: true }),
        new TextRun({ text: "\tCỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM", font: FONT, size: SIZE_NORMAL, bold: true })
      ]
    }));
  } else {
    result.push(new Paragraph({
      tabStops: [{ type: TabStopType.LEFT, position: tabPos }],
      spacing: { after: 60 },
      children: [
        new TextRun({ text: (co_quan.co_quan || ""), font: FONT, size: SIZE_NORMAL, bold: true }),
        new TextRun({ text: "\tCỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM", font: FONT, size: SIZE_NORMAL, bold: true })
      ]
    }));
  }

  // Dòng 2: Cơ quan chính - Độc lập
  if (co_quan.cap_tren) {
    result.push(new Paragraph({
      tabStops: [{ type: TabStopType.LEFT, position: tabPos }],
      spacing: { after: 60 },
      children: [
        new TextRun({ text: (co_quan.co_quan || ""), font: FONT, size: SIZE_NORMAL, bold: true }),
        new TextRun({ text: "\tĐộc lập - Tự do - Hạnh phúc", font: FONT, size: SIZE_NORMAL, bold: true })
      ]
    }));
  } else {
    result.push(new Paragraph({
      tabStops: [{ type: TabStopType.LEFT, position: tabPos }],
      spacing: { after: 60 },
      children: [
        new TextRun({ text: "─────────", font: FONT, size: SIZE_NORMAL }),
        new TextRun({ text: "\tĐộc lập - Tự do - Hạnh phúc", font: FONT, size: SIZE_NORMAL, bold: true })
      ]
    }));
  }

  // Dòng 3 (nếu có cơ quan 2 - đơn vị trực thuộc Sở)
  if (co_quan.co_quan_2) {
    result.push(new Paragraph({
      tabStops: [{ type: TabStopType.LEFT, position: tabPos }],
      spacing: { after: 60 },
      children: [
        new TextRun({ text: co_quan.co_quan_2, font: FONT, size: SIZE_NORMAL, bold: true }),
        new TextRun({ text: "\t─────────────────────────", font: FONT, size: SIZE_NORMAL })
      ]
    }));
  }

  // Dòng số ký hiệu + ngày tháng
  const noi_bh = d.noi_ban_hanh || "Thành phố Hồ Chí Minh";
  result.push(new Paragraph({
    tabStops: [{ type: TabStopType.LEFT, position: tabPos }],
    spacing: { after: 240 },
    children: [
      new TextRun({ text: `Số:        /${d.so_ky_hieu || "KH-XX"}`, font: FONT, size: SIZE_NORMAL }),
      new TextRun({ text: `\t${noi_bh}, ngày    tháng    năm ${d.nam_ban_hanh || ""}`, font: FONT, size: SIZE_NORMAL, italics: true })
    ]
  }));

  // Tên kế hoạch
  result.push(TITLECENTER("KẾ HOẠCH"));

  // Tiêu đề chi tiết - có thể nhiều dòng
  const tieu_de_lines = Array.isArray(d.tieu_de) ? d.tieu_de : [d.tieu_de || ""];
  tieu_de_lines.forEach((line, idx) => {
    result.push(new Paragraph({
      spacing: { before: 0, after: idx === tieu_de_lines.length - 1 ? 240 : 60 },
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: line, font: FONT, size: SIZE_HEADING, bold: true })]
    }));
  });

  result.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 240 },
    children: [new TextRun({ text: "──────────", font: FONT, size: SIZE_NORMAL })]
  }));

  return result;
}

// ============== CĂN CỨ ==============
function buildCanCu(d) {
  const result = [];
  (d.can_cu || []).forEach(c => result.push(P(c)));
  if (d.doan_dan) result.push(P(d.doan_dan, { firstLine: true }));
  return result;
}

// ============== MỤC ĐÍCH, YÊU CẦU ==============
function buildMucDichYeuCau(d) {
  if (!d.muc_dich_yeu_cau || !d.muc_dich_yeu_cau.co_phan_nay) return [];
  const result = [H1("I. MỤC ĐÍCH, YÊU CẦU")];
  const m = d.muc_dich_yeu_cau;
  if (m.muc_dich && m.muc_dich.length) {
    result.push(H2("1. Mục đích"));
    m.muc_dich.forEach(d => result.push(P(d)));
  }
  if (m.yeu_cau && m.yeu_cau.length) {
    result.push(H2("2. Yêu cầu"));
    m.yeu_cau.forEach(y => result.push(BULLET(y)));
  }
  return result;
}

// ============== MỤC TIÊU ==============
function buildMucTieu(d, baseRoman) {
  if (!d.muc_tieu) return [];
  const result = [H1(`${baseRoman}. MỤC TIÊU`)];
  const m = d.muc_tieu;
  if (m.tong_quat) {
    result.push(H2("1. Mục tiêu tổng quát"));
    if (Array.isArray(m.tong_quat)) {
      m.tong_quat.forEach(t => result.push(P(t)));
    } else {
      result.push(P(m.tong_quat));
    }
  }
  if (m.cu_the && m.cu_the.length) {
    result.push(H2("2. Mục tiêu cụ thể"));
    m.cu_the.forEach(c => result.push(P(c)));
  }
  if (m.bang_chi_tieu_o_phu_luc) {
    result.push(H2("3. Bảng chỉ tiêu cụ thể"));
    result.push(P("Chi tiết tại Phụ lục 1 kèm theo Kế hoạch này.", { firstLine: true }));
  }
  return result;
}

// ============== NỘI DUNG THỰC HIỆN ==============
function buildNoiDung(d, baseRoman) {
  if (!d.noi_dung_thuc_hien || !d.noi_dung_thuc_hien.length) return [];
  const result = [H1(`${baseRoman}. NỘI DUNG THỰC HIỆN`)];
  d.noi_dung_thuc_hien.forEach(nd => {
    result.push(H2(nd.tieu_de));
    if (nd.doan_van) {
      (Array.isArray(nd.doan_van) ? nd.doan_van : [nd.doan_van]).forEach(p => result.push(P(p)));
    }
    if (nd.tieu_muc && nd.tieu_muc.length) {
      nd.tieu_muc.forEach(tm => {
        result.push(H3(tm.tieu_de));
        (Array.isArray(tm.doan_van) ? tm.doan_van : [tm.doan_van]).forEach(p => result.push(P(p)));
        if (tm.bullets && tm.bullets.length) {
          tm.bullets.forEach(b => result.push(BULLET(b)));
        }
      });
    }
    if (nd.bullets && nd.bullets.length) {
      nd.bullets.forEach(b => result.push(BULLET(b)));
    }
    if (nd.thoi_gian) {
      if (Array.isArray(nd.thoi_gian)) {
        nd.thoi_gian.forEach(t => result.push(TIME(t)));
      } else {
        result.push(TIME(nd.thoi_gian));
      }
    }
  });
  return result;
}

// ============== KINH PHÍ ==============
function buildKinhPhi(d, baseRoman) {
  if (!d.kinh_phi) return [];
  const result = [H1(`${baseRoman}. KINH PHÍ THỰC HIỆN`)];
  if (d.kinh_phi.mo_dau) result.push(P(d.kinh_phi.mo_dau));
  if (d.kinh_phi.nguon && d.kinh_phi.nguon.length) {
    d.kinh_phi.nguon.forEach(n => result.push(BULLET(n)));
  }
  if (d.kinh_phi.ket) {
    (Array.isArray(d.kinh_phi.ket) ? d.kinh_phi.ket : [d.kinh_phi.ket]).forEach(k => result.push(P(k)));
  }
  return result;
}

// ============== TỔ CHỨC THỰC HIỆN ==============
function buildToChuc(d, baseRoman) {
  if (!d.to_chuc_thuc_hien || !d.to_chuc_thuc_hien.length) return [];
  const result = [H1(`${baseRoman}. TỔ CHỨC THỰC HIỆN`)];
  d.to_chuc_thuc_hien.forEach((dv, idx) => {
    result.push(H2(`${idx + 1}. ${dv.don_vi}`));
    (dv.nhiem_vu || []).forEach(nv => result.push(BULLET(nv)));
  });
  return result;
}

// ============== CHẾ ĐỘ BÁO CÁO ==============
function buildBaoCao(d, baseRoman) {
  if (!d.che_do_bao_cao) return [];
  const result = [H1(`${baseRoman}. CHẾ ĐỘ BÁO CÁO`)];
  (Array.isArray(d.che_do_bao_cao) ? d.che_do_bao_cao : [d.che_do_bao_cao]).forEach(p => result.push(P(p)));
  if (d.cau_ket) result.push(P(d.cau_ket, { firstLine: true }));
  return result;
}

// ============== KÝ DUYỆT ==============
function buildKyDuyet(d) {
  const result = [];
  result.push(new Paragraph({
    spacing: { before: 480, after: 60 },
    tabStops: [{ type: TabStopType.LEFT, position: 5400 }],
    children: [
      new TextRun({ text: "Nơi nhận:", font: FONT, size: 24, bold: true, italics: true }),
      new TextRun({ text: `\t${d.nguoi_ky_chuc_vu || "GIÁM ĐỐC"}`, font: FONT, size: SIZE_NORMAL, bold: true })
    ]
  }));
  (d.noi_nhan || []).forEach(nn => {
    result.push(new Paragraph({
      spacing: { after: 60 },
      children: [new TextRun({ text: `- ${nn}`, font: FONT, size: 22 })]
    }));
  });
  if (d.nguoi_ky) {
    result.push(new Paragraph({
      alignment: AlignmentType.RIGHT,
      spacing: { before: 480, after: 0 },
      children: [new TextRun({ text: d.nguoi_ky, font: FONT, size: SIZE_NORMAL, bold: true })]
    }));
  }
  return result;
}

// ============== PHỤ LỤC 1: CHỈ TIÊU ==============
function buildPhuLuc1(d) {
  if (!d.phu_luc_1_chi_tieu || !d.phu_luc_1_chi_tieu.length) return [];
  const ws = [700, 4600, 2200, 1800, 1060];
  const header = new TableRow({
    tableHeader: true,
    children: [
      cell("STT", { w: ws[0], header: true, center: true }),
      cell("Nội dung chỉ tiêu", { w: ws[1], header: true, center: true }),
      cell("Chỉ tiêu", { w: ws[2], header: true, center: true }),
      cell("Mốc hoàn thành", { w: ws[3], header: true, center: true }),
      cell("Gắn mục tiêu", { w: ws[4], header: true, center: true }),
    ]
  });
  const rows = d.phu_luc_1_chi_tieu.map(r => new TableRow({
    children: [
      cell(r.stt || "", { w: ws[0], center: true }),
      cell(r.noi_dung || "", { w: ws[1], justify: true }),
      cell(r.chi_tieu || "", { w: ws[2] }),
      cell(r.moc || "", { w: ws[3], center: true }),
      cell(r.muc_tieu || "", { w: ws[4], center: true }),
    ]
  }));
  return [
    new Paragraph({ children: [new PageBreak()] }),
    TITLECENTER("PHỤ LỤC 1", SIZE_HEADING),
    TITLECENTER("BẢNG CHỈ TIÊU CỤ THỂ", SIZE_NORMAL),
    ITALICCENTER(`(Kèm theo Kế hoạch số      /${d.so_ky_hieu || "KH-XX"} ngày    tháng    năm ${d.nam_ban_hanh || ""})`),
    new Paragraph({ children: [new TextRun({ text: "" })], spacing: { after: 120 } }),
    new Table({
      width: { size: ws.reduce((a, b) => a + b, 0), type: WidthType.DXA },
      columnWidths: ws,
      rows: [header, ...rows]
    })
  ];
}

// ============== PHỤ LỤC 2: PHÂN CÔNG ==============
function buildPhuLuc2(d) {
  if (!d.phu_luc_2_phan_cong || !d.phu_luc_2_phan_cong.length) return [];
  const ws = [600, 3400, 2200, 1400, 1500, 1260];
  const header = new TableRow({
    tableHeader: true,
    children: [
      cell("STT", { w: ws[0], header: true, center: true }),
      cell("Hoạt động triển khai", { w: ws[1], header: true, center: true }),
      cell("Sản phẩm", { w: ws[2], header: true, center: true }),
      cell("Đơn vị chủ trì", { w: ws[3], header: true, center: true }),
      cell("Đơn vị phối hợp", { w: ws[4], header: true, center: true }),
      cell("Thời gian hoàn thành", { w: ws[5], header: true, center: true }),
    ]
  });
  const allRows = [header];
  d.phu_luc_2_phan_cong.forEach(group => {
    if (group.section) allRows.push(sectionRow(group.section, 6));
    (group.rows || []).forEach(r => {
      allRows.push(new TableRow({
        children: [
          cell(r.stt || "", { w: ws[0], center: true }),
          cell(r.hoat_dong || "", { w: ws[1], justify: true }),
          cell(r.san_pham || "", { w: ws[2], justify: true }),
          cell(r.chu_tri || "", { w: ws[3] }),
          cell(r.phoi_hop || "", { w: ws[4], justify: true }),
          cell(r.thoi_gian || "", { w: ws[5], center: true }),
        ]
      }));
    });
  });
  return [
    new Paragraph({ children: [new PageBreak()] }),
    TITLECENTER("PHỤ LỤC 2", SIZE_HEADING),
    TITLECENTER("BẢNG PHÂN CÔNG NHIỆM VỤ VÀ TIẾN ĐỘ", SIZE_NORMAL),
    ITALICCENTER(`(Kèm theo Kế hoạch số      /${d.so_ky_hieu || "KH-XX"} ngày    tháng    năm ${d.nam_ban_hanh || ""})`),
    new Paragraph({ children: [new TextRun({ text: "" })], spacing: { after: 120 } }),
    new Table({
      width: { size: ws.reduce((a, b) => a + b, 0), type: WidthType.DXA },
      columnWidths: ws,
      rows: allRows
    })
  ];
}

// ============== PHỤ LỤC 3: RỦI RO ==============
function buildPhuLuc3(d) {
  if (!d.phu_luc_3_rui_ro || !d.phu_luc_3_rui_ro.length) return [];
  const ws = [600, 3000, 1200, 1200, 4360];
  const header = new TableRow({
    tableHeader: true,
    children: [
      cell("STT", { w: ws[0], header: true, center: true }),
      cell("Rủi ro", { w: ws[1], header: true, center: true }),
      cell("Khả năng xảy ra", { w: ws[2], header: true, center: true }),
      cell("Mức tác động", { w: ws[3], header: true, center: true }),
      cell("Biện pháp giảm thiểu / phương án ứng phó", { w: ws[4], header: true, center: true }),
    ]
  });
  const rows = d.phu_luc_3_rui_ro.map(r => new TableRow({
    children: [
      cell(r.stt || "", { w: ws[0], center: true }),
      cell(r.rui_ro || "", { w: ws[1], justify: true }),
      cell(r.kha_nang || "", { w: ws[2], center: true }),
      cell(r.tac_dong || "", { w: ws[3], center: true }),
      cell(r.bien_phap || "", { w: ws[4], justify: true }),
    ]
  }));
  return [
    new Paragraph({ children: [new PageBreak()] }),
    TITLECENTER("PHỤ LỤC 3", SIZE_HEADING),
    TITLECENTER("BẢNG NHẬN DIỆN RỦI RO VÀ BIỆN PHÁP GIẢM THIỂU", SIZE_NORMAL),
    ITALICCENTER(`(Kèm theo Kế hoạch số      /${d.so_ky_hieu || "KH-XX"} ngày    tháng    năm ${d.nam_ban_hanh || ""})`),
    new Paragraph({ children: [new TextRun({ text: "" })], spacing: { after: 120 } }),
    new Table({
      width: { size: ws.reduce((a, b) => a + b, 0), type: WidthType.DXA },
      columnWidths: ws,
      rows: [header, ...rows]
    })
  ];
}

// ============== TỔNG HỢP ==============
const cap = data.cap_ban_hanh || "don_vi";
let romanI = 1;
const sections = [];
sections.push(...buildHeader(data));
sections.push(...buildCanCu(data));

const mdyc = buildMucDichYeuCau(data);
if (mdyc.length) {
  sections.push(...mdyc);
  romanI++;
}

const romans = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

sections.push(...buildMucTieu(data, romans[romanI - 1]));
romanI++;
sections.push(...buildNoiDung(data, romans[romanI - 1]));
romanI++;
if (data.kinh_phi) { sections.push(...buildKinhPhi(data, romans[romanI - 1])); romanI++; }
sections.push(...buildToChuc(data, romans[romanI - 1]));
romanI++;
if (data.che_do_bao_cao) { sections.push(...buildBaoCao(data, romans[romanI - 1])); }
sections.push(...buildKyDuyet(data));
sections.push(...buildPhuLuc1(data));
sections.push(...buildPhuLuc2(data));
sections.push(...buildPhuLuc3(data));

const doc = new Document({
  styles: {
    default: { document: { run: { font: FONT, size: SIZE_NORMAL } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: SIZE_HEADING, bold: true, font: FONT },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: SIZE_NORMAL, bold: true, font: FONT },
        paragraph: { spacing: { before: 180, after: 100 }, outlineLevel: 1 } },
    ]
  },
  numbering: {
    config: [
      { reference: "bullets",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "-", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 567, hanging: 283 } } } }] }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },        // A4
        margin: { top: 1134, right: 1134, bottom: 1134, left: 1701 }  // 20/20/20/30 mm
      }
    },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({ text: "Trang ", font: FONT, size: 20, italics: true }),
          new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 20, italics: true }),
          new TextRun({ text: " / ", font: FONT, size: 20, italics: true }),
          new TextRun({ children: [PageNumber.TOTAL_PAGES], font: FONT, size: 20, italics: true })
        ]
      })] })
    },
    children: sections
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outputPath, buffer);
  console.log(`OK - wrote ${outputPath}`);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
