/* =========================================================
   智育成长画像平台 — 交互原型
   纯前端 · 无外部依赖 · 数据仅保存在本机
   ========================================================= */

/* ---------------------------------------------------------
   基础数据
--------------------------------------------------------- */
const DIMENSIONS = [
  {
    id: 'awareness',
    name: '创新意识与动机',
    short: '意识与动机',
    color: '#5c8bd8',
    value: 0.78,
    status: '持续生长',
    desc: '对教学现场保持敏感，愿意从真实问题出发尝试新的可能。',
  },
  {
    id: 'thinking',
    name: '创新思维与方法',
    short: '思维与方法',
    color: '#8fb3df',
    value: 0.68,
    status: '正在展开',
    desc: '能够提出多种方案，但在证据收集与迭代验证上仍可更扎实。',
  },
  {
    id: 'spirit',
    name: '创新精神与品格',
    short: '精神与品格',
    color: '#7fae9c',
    value: 0.86,
    status: '较为稳定',
    desc: '面对失败愿意复盘，能与同伴协作，把尝试继续推进下去。',
  },
  {
    id: 'practice',
    name: '教学与教育实践创新',
    short: '实践创新',
    color: '#c2a26f',
    value: 0.72,
    status: '稳步积累',
    desc: '开始将想法转化为课堂行动，跨学科与长周期实践仍待拓展。',
  },
];

const MATERIALS = [
  { name: '教学设计方案', count: '3 份', note: '含阅读、写作、整本书任务群', icon: 'pen' },
  { name: '教学设计方案修改', count: '2 份', note: '保留版本差异与修改说明', icon: 'edit' },
  { name: '实习反思', count: '3 份', note: '课堂观察与个人教学复盘', icon: 'book' },
  { name: '教研记录', count: '2 份', note: '备课组研讨与听评课记录', icon: 'users' },
  { name: '教学实践材料', count: '2 份', note: '课堂实录、学习单与作品', icon: 'folder' },
];

const ARCHIVE_ROWS = [
  {
    title: '《故都的秋》情境任务教学设计',
    type: '教学设计方案',
    date: '2026-10-28',
    status: '已归档',
    size: '2.4 MB',
  },
  {
    title: '教育戏剧融入《琵琶行》课堂实践',
    type: '教学实践材料',
    date: '2026-10-24',
    status: '已归档',
    size: '5.1 MB',
  },
  {
    title: '高一（3）班课堂观察与自我复盘',
    type: '实习反思',
    date: '2026-10-21',
    status: '待完善',
    size: '1.2 MB',
  },
  {
    title: '整本书阅读任务群备课组研讨纪要',
    type: '教研记录',
    date: '2026-10-18',
    status: '已归档',
    size: '680 KB',
  },
];

const RESOURCES = [
  {
    id: 'res-1',
    category: '教学创新案例',
    title: '《故都的秋》散文阅读的“情境—任务”教学设计',
    summary:
      '以“为校园广播站撰写秋日散文推荐”为真实任务，串联文本细读、语言品味与表达实践，呈现一条可迁移的文学课堂设计路径。',
    source: '语文教学通讯 · 案例研究',
    time: '12 分钟阅读',
    tags: ['阅读教学', '情境任务', '文本细读'],
    tone: 'blue',
  },
  {
    id: 'res-2',
    category: '教学创新案例',
    title: '教育戏剧融入古诗文课堂：以《琵琶行》为例',
    summary:
      '通过角色入戏、空间行走与声音实验，让学生在身体经验中理解诗歌情感，探索文学课堂的另一种打开方式。',
    source: '中学语文教学参考 · 课堂实践',
    time: '9 分钟阅读',
    tags: ['教育戏剧', '古诗文', '体验学习'],
    tone: 'cream',
  },
  {
    id: 'res-3',
    category: '教研选题',
    title: '师范生课堂观察量表的设计与迭代',
    summary:
      '从“看见课堂”到“理解课堂”，梳理一份课堂观察量表如何从模糊感受到可讨论、可修正的研究工具。',
    source: '教师教育研究 · 教研方法',
    time: '15 分钟阅读',
    tags: ['课堂观察', '教研方法', '证据意识'],
    tone: 'green',
  },
  {
    id: 'res-4',
    category: '教研选题',
    title: '整本书阅读中的过程性评价工具开发',
    summary:
      '围绕阅读档案、任务单与同伴互评，讨论如何用过程性证据支持学生的持续阅读，而不是用一次测验下结论。',
    source: '语文建设 · 评价改革',
    time: '18 分钟阅读',
    tags: ['整本书阅读', '过程性评价', '学习任务群'],
    tone: 'blue',
  },
  {
    id: 'res-5',
    category: '师范类创新竞赛',
    title: '全国师范院校师范生教学技能竞赛（校内选拔）',
    summary:
      '面向汉语言文学（师范）专业学生的教学技能展示与交流活动，含教学设计、即席演讲与课堂模拟环节。',
    source: '教师教育中心 · 竞赛信息',
    time: '报名截止 11 月 18 日',
    tags: ['教学技能', '以赛促学', '校内选拔'],
    tone: 'cream',
  },
  {
    id: 'res-6',
    category: '师范类创新竞赛',
    title: '大学生创新创业训练计划（教育类）申报提醒',
    summary:
      '鼓励围绕语文教育、乡村教育、教育戏剧等方向组队申报，把课堂里的一个小问题做成一项持续的研究。',
    source: '创新创业学院 · 项目申报',
    time: '申报截止 12 月 05 日',
    tags: ['大创项目', '教育创新', '团队协作'],
    tone: 'green',
  },
];

const REVIEW_STUDENTS = [
  {
    id: 'r1',
    name: '同学',
    initial: '同',
    className: '汉语言文学（师范）2301班',
    type: '教学设计方案',
    time: '10-28 14:20',
    status: '待研判',
    tags: ['创新意识与动机', '教学与教育实践创新'],
    custom: ['情境任务设计'],
    materialTitle: '《故都的秋》情境任务教学设计',
    excerpt:
      '以“为校园广播站撰写秋日散文推荐”为真实任务，设置文本细读、语言品味与推荐写作三个学习环节，尝试把阅读与真实表达连接起来。',
  },
  {
    id: 'r2',
    name: '同学',
    initial: '同',
    className: '汉语言文学（师范）2301班',
    type: '实习反思',
    time: '10-27 09:15',
    status: '待研判',
    tags: ['创新精神与品格'],
    custom: ['失败复盘'],
    materialTitle: '第一次课堂讨论“冷场”之后',
    excerpt:
      '记录了小组讨论未达预期后的调整过程：减少问题数量、增加阅读支架，并在第二节课重新尝试。',
  },
  {
    id: 'r3',
    name: '同学',
    initial: '同',
    className: '汉语言文学（师范）2301班',
    type: '教研记录',
    time: '10-25 16:40',
    status: '已研判',
    tags: ['创新思维与方法', '教学与教育实践创新'],
    custom: ['教研证据'],
    materialTitle: '整本书阅读任务群备课组研讨纪要',
    excerpt:
      '围绕《乡土中国》任务单的有效性展开讨论，记录了三轮修改依据与学生访谈片段。',
  },
  {
    id: 'r4',
    name: '同学',
    initial: '同',
    className: '汉语言文学（师范）2301班',
    type: '教学实践材料',
    time: '10-24 10:05',
    status: '待研判',
    tags: ['创新意识与动机'],
    custom: ['课堂实录'],
    materialTitle: '教育戏剧融入《琵琶行》课堂实录',
    excerpt:
      '通过角色入戏和声音实验帮助学生理解琵琶女的处境，课后收集了学生的学习感受卡片。',
  },
];

const DEFAULT_INDICATORS = [
  {
    id: 'awareness',
    name: '创新意识与动机',
    color: '#5c8bd8',
    desc: '面对教学现场时的敏感度、好奇心与变革意愿。',
    tags: ['好奇心', '问题敏感度', '教学变革意愿', '自我效能感', '儿童视角'],
  },
  {
    id: 'thinking',
    name: '创新思维与方法',
    color: '#8fb3df',
    desc: '发现问题、提出方案、收集证据并持续迭代的方法能力。',
    tags: ['发散思考', '方案设计', '证据意识', '迭代验证', '跨学科联想'],
  },
  {
    id: 'spirit',
    name: '创新精神与品格',
    color: '#7fae9c',
    desc: '面对不确定与失败时的坚持、复盘、协作与责任意识。',
    tags: ['失败复盘', '协作沟通', '持续投入', '教育情怀', '风险意识'],
  },
  {
    id: 'practice',
    name: '教学与教育实践创新',
    color: '#c2a26f',
    desc: '把创新想法转化为真实课堂行动与教育影响的能力。',
    tags: ['课堂行动', '学习任务设计', '评价创新', '资源整合', '实践反思'],
  },
];

const DEFAULT_RULES = {
  autoArchive: true,
  onlyVisible: true,
  allowWithdraw: true,
  versioning: true,
  semesterReport: true,
  materialPlan: true,
  materialRevision: true,
  materialReflection: true,
  materialResearch: true,
  materialPractice: true,
};

const REFLECTION_FIELDS = [
  {
    key: 'practice',
    title: '实践简述',
    prompt: '简要描述本次教学实践的时间、班级、课题与主要任务。',
    placeholder: '例如：2026 年 10 月，高一（3）班，《故都的秋》，尝试以真实任务驱动散文阅读……',
  },
  {
    key: 'awareness',
    title: '创新意识与动机',
    prompt: '本次实践后，我对教学创新的想法、内心顾虑或认知变化：',
    placeholder: '写下你最初为什么想尝试改变，以及实践之后想法发生了什么变化。',
  },
  {
    key: 'thinking',
    title: '创新思维与方法',
    prompt: '发现了什么教育问题？我的思考与方案迭代：',
    placeholder: '描述你观察到的真实问题、提出的方案，以及你如何判断方案是否有效。',
  },
  {
    key: 'spirit',
    title: '创新精神与品格',
    prompt: '有无尝试失败？复盘感悟、协作收获：',
    placeholder: '失败并不可怕，重要的是你如何面对它、向谁求助、又学到了什么。',
  },
  {
    key: 'practiceInnovation',
    title: '教学与教育实践创新',
    prompt: '我做了哪些创新尝试，实际效果如何：',
    placeholder: '从学习任务、课堂组织、评价方式等角度，记录你的具体行动与证据。',
  },
  {
    key: 'next',
    title: '复盘与后续计划',
    prompt: '下一步准备如何调整？希望获得什么支持：',
    placeholder: '把反思落到下一步行动：想再试什么、需要哪些资源、希望谁给予反馈。',
  },
];

/* ---------------------------------------------------------
   全局状态
--------------------------------------------------------- */
const state = {
  resourceFilter: '全部',
  selectedReviewId: 'r1',
  reviewStudentFilter: 'all',
  reviewedCount: 28,
  pendingCount: 14,
  reviewStudents: REVIEW_STUDENTS.map((item) => ({ ...item, tags: [...item.tags], custom: [...item.custom] })),
  indicators: DEFAULT_INDICATORS.map((item) => ({ ...item, tags: [...item.tags] })),
  rules: { ...DEFAULT_RULES },
  reflection: loadReflection(),
};

let toastTimer = null;
let reflectionSaveTimer = null;
let chartUid = 0;

/* ---------------------------------------------------------
   工具函数
--------------------------------------------------------- */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function loadReflection() {
  try {
    const raw = localStorage.getItem('zhiyu-reflection-v1');
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function persistReflection() {
  try {
    localStorage.setItem('zhiyu-reflection-v1', JSON.stringify(state.reflection));
  } catch {
    /* localStorage 不可用时仍可在当前页面内继续编辑 */
  }
}

function showToast(message) {
  const toast = $('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2600);
}

function currentPath() {
  return (location.hash.replace(/^#/, '') || '/welcome').split('?')[0];
}

function getReviewStudent() {
  return state.reviewStudents.find((item) => item.id === state.selectedReviewId) || state.reviewStudents[0];
}

function getResource(id) {
  return RESOURCES.find((item) => item.id === id);
}

function rerenderPreserveScroll() {
  const y = window.scrollY;
  render();
  requestAnimationFrame(() => window.scrollTo(0, y));
}

/* ---------------------------------------------------------
   图标
--------------------------------------------------------- */
const ICONS = {
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowUpRight: '<path d="M7 17 17 7M7 7h10v10"/>',
  chevronRight: '<path d="m9 5 7 7-7 7"/>',
  home: '<path d="m3.5 10.5 8.5-7 8.5 7"/><path d="M5.5 9v10.5h13V9"/><path d="M9.5 19.5v-6h5v6"/>',
  user: '<circle cx="12" cy="8" r="3.2"/><path d="M5 20c.8-4 3.3-6 7-6s6.2 2 7 6"/>',
  users: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 5.5a3 3 0 0 1 0 5.8M18 14.5c2.3.8 4 3 4 5.5"/>',
  building: '<path d="M4 21V5l8-3 8 3v16"/><path d="M8 9h1M8 13h1M8 17h1M15 9h1M15 13h1M15 17h1M3 21h18"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16.5H6.5A2.5 2.5 0 0 0 4 22V5.5Z"/><path d="M4 19a2.5 2.5 0 0 1 2.5-2.5H20M8 7h8"/>',
  folder: '<path d="M3 7.5h7l2 2h9v9.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.5Z"/><path d="M3 11h18"/>',
  archive: '<path d="M4 7.5h16v12H4z"/><path d="M3 4.5h18v3H3zM9 11.5h6"/>',
  spark: '<path d="m12 2 2.2 6.2L20 10l-5.8 1.8L12 18l-2.2-6.2L4 10l5.8-1.8L12 2Z"/><path d="M19 16.5v4M17 18.5h4"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z"/>',
  chart: '<path d="M4 20V9M10 20V4M16 20v-7M22 20H2"/>',
  pie: '<path d="M12 3a9 9 0 1 0 9 9h-9V3Z"/><path d="M15 3.5A8.5 8.5 0 0 1 20.5 9H15V3.5Z"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3.5h16V16"/>',
  download: '<path d="M12 4v12M7 11l5 5 5-5"/><path d="M4 19.5h16"/>',
  check: '<path d="m5 12 4.5 4.5L19 7"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.7 2.7L16.5 9"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/>',
  file: '<path d="M6 3h8l4 4v14H6V3Z"/><path d="M14 3v5h5M9 13h6M9 17h4"/>',
  pen: '<path d="m4 20 4.5-1L20 7.5 16.5 4 5 15.5 4 20Z"/><path d="m14 6.5 3.5 3.5"/>',
  edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4L16.5 3.5Z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
  message: '<path d="M21 12a8 8 0 0 1-8 8H5l-2 2V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8Z"/><path d="M8 11h8M8 15h5"/>',
  scale: '<path d="M12 3v18M5 21h14"/><path d="m6 6 6-2 6 2M6 6l-3 7h6L6 6ZM18 6l-3 7h6l-3-7Z"/>',
  shield: '<path d="M12 3 4.5 6v5.5c0 4.5 3.2 8 7.5 9.5 4.3-1.5 7.5-5 7.5-9.5V6L12 3Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  filter: '<path d="M4 5h16l-6 7v6l-4 2v-8L4 5Z"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  x: '<path d="m6 6 12 12M18 6 6 18"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.1"/>',
  alert: '<path d="M12 3 2.8 20h18.4L12 3Z"/><path d="M12 9v5M12 17v.1"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',
  bookmark: '<path d="M6 4h12v17l-6-4-6 4V4Z"/>',
  link: '<path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/>',
  feather: '<path d="M20 4c-3-3-9-1-12 2S4 15 4 15l5-5"/><path d="M4 20 20 4M13 11h5"/>',
  leaf: '<path d="M5 20c0-7 3-13 14-16 0 9-4 15-10 15"/><path d="M5 20c2-4 5-7 9-9"/>',
  qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v2M14 20h2M19 19h2v2"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  eye: '<path d="M2.5 12S6 5.8 12 5.8 21.5 12 21.5 12 18 18.2 12 18.2 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.6"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>',
  trend: '<path d="m3 17 6-6 4 4 8-9"/><path d="M15 6h6v6"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>',
  zap: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/>',
  quote: '<path d="M7 7h4v4c0 3-2 5-5 6"/><path d="M15 7h4v4c0 3-2 5-5 6"/>',
};

function icon(name, className = '') {
  return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ''}</svg>`;
}

function brandMarkup() {
  return `
    <span class="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M20 5.5c-7 3.4-10.9 9.4-10.9 17.3 0 5.3 3.1 9.8 8 11.7 1.5-4.7 3.8-9.5 6.9-13.8-2.8 5-4.2 10-4.6 14.3 3-.4 5.8-1.8 8-4 4.9-5 5.7-13.1 2.4-19.4C27.5 7.9 23.1 5.5 20 5.5Z" fill="currentColor"/>
        <path d="M20 23.5c3.4-2.6 6.2-3.9 9.5-4.2" stroke="#f8f4ea" stroke-width="1.4" stroke-linecap="round"/>
      </svg>
    </span>
    <span class="brand-copy">
      <strong>智育成长画像</strong>
      <small>师范生创新成长记录与反馈中心</small>
    </span>
  `;
}

function eyebrow(text) {
  return `<span class="eyebrow">${text}</span>`;
}

/* ---------------------------------------------------------
   图表
--------------------------------------------------------- */
function radarSvg(values, { compact = false, id = '', large = false } = {}) {
  chartUid += 1;
  const gid = `radarFill${chartUid}`;
  const W = large ? 520 : compact ? 360 : 430;
  const H = large ? 390 : compact ? 218 : 330;
  const cx = W / 2;
  const cy = H / 2 + (compact ? 3 : 8);
  const R = large ? 128 : compact ? 67 : 108;
  const labels = compact
    ? ['意识与动机', '思维与方法', '精神与品格', '实践创新']
    : ['创新意识与动机', '创新思维与方法', '创新精神与品格', '教学与教育实践创新'];
  const angles = [-Math.PI / 2, 0, Math.PI / 2, Math.PI];
  const levels = [0.25, 0.5, 0.75, 1];
  const pt = (value, angle, radius = R) => [cx + Math.cos(angle) * radius * value, cy + Math.sin(angle) * radius * value];
  const polygon = (radiusFactor) =>
    angles.map((angle) => pt(radiusFactor, angle).map((n) => n.toFixed(1)).join(',')).join(' ');

  const rings = levels
    .map(
      (level) =>
        `<polygon points="${polygon(level)}" fill="${level === 1 ? 'rgba(255,255,255,.45)' : 'none'}" stroke="#d9e5f2" stroke-width="1" ${level < 1 ? 'stroke-dasharray="3 4"' : ''}/>`
    )
    .join('');

  const axes = angles
    .map((angle) => {
      const [x, y] = pt(1, angle);
      return `<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#e1ebf5" stroke-width="1"/>`;
    })
    .join('');

  const dataPoints = values.map((value, index) => pt(value, angles[index]));
  const dataPolygon = dataPoints.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const dots = dataPoints
    .map(
      ([x, y], index) =>
        `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${compact ? 2.6 : 4.2}" fill="#fff" stroke="${DIMENSIONS[index].color}" stroke-width="${compact ? 1.7 : 2.2}"/>`
    )
    .join('');

  const labelSize = compact ? 9 : 9.5;
  const labelColor = '#6f8198';
  let labelMarkup = '';
  if (compact) {
    labelMarkup = `
      <text x="${cx}" y="${cy - R - 10}" text-anchor="middle" font-size="${labelSize}" fill="${labelColor}">${labels[0]}</text>
      <text x="${cx + R + 8}" y="${cy + 3}" text-anchor="start" font-size="${labelSize}" fill="${labelColor}">${labels[1]}</text>
      <text x="${cx}" y="${cy + R + 17}" text-anchor="middle" font-size="${labelSize}" fill="${labelColor}">${labels[2]}</text>
      <text x="${cx - R - 8}" y="${cy + 3}" text-anchor="end" font-size="${labelSize}" fill="${labelColor}">${labels[3]}</text>
    `;
  } else {
    const topY = cy - R - 19;
    const rightX = cx + R + 12;
    const bottomY = cy + R + 27;
    const leftX = cx - R - 12;
    labelMarkup = `
      <text x="${cx}" y="${topY}" text-anchor="middle" font-size="${labelSize}" font-weight="600" fill="${labelColor}">${labels[0]}</text>
      <text x="${rightX}" y="${cy - 3}" text-anchor="start" font-size="${labelSize}" font-weight="600" fill="${labelColor}">
        <tspan x="${rightX}">创新思维</tspan><tspan x="${rightX}" dy="13">与方法</tspan>
      </text>
      <text x="${cx}" y="${bottomY}" text-anchor="middle" font-size="${labelSize}" font-weight="600" fill="${labelColor}">${labels[2]}</text>
      <text x="${leftX}" y="${cy - 3}" text-anchor="end" font-size="${labelSize}" font-weight="600" fill="${labelColor}">
        <tspan x="${leftX}">教学与教育</tspan><tspan x="${leftX}" dy="13">实践创新</tspan>
      </text>
    `;
  }

  return `
    <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${id || '四维创新能力画像雷达图'}" data-radar>
      <defs>
        <linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#72a0dc" stop-opacity=".3"/>
          <stop offset="1" stop-color="#c8d9ec" stop-opacity=".18"/>
        </linearGradient>
      </defs>
      ${rings}
      ${axes}
      <polygon points="${dataPolygon}" fill="url(#${gid})" stroke="#4e7fc7" stroke-width="${compact ? 1.5 : 2}" stroke-linejoin="round"/>
      ${dots}
      <circle cx="${cx}" cy="${cy}" r="${compact ? 1.8 : 2.6}" fill="#4e7fc7" opacity=".6"/>
      ${labelMarkup}
    </svg>
  `;
}

function lineChartSvg({ labels, values, color = '#4e7fc7', suffix = '%' }) {
  chartUid += 1;
  const gid = `lineFill${chartUid}`;
  const W = 560;
  const H = 225;
  const pad = { left: 36, right: 18, top: 20, bottom: 34 };
  const chartW = W - pad.left - pad.right;
  const chartH = H - pad.top - pad.bottom;
  const max = 100;
  const x = (index) => pad.left + (chartW / (labels.length - 1)) * index;
  const y = (value) => pad.top + chartH - (value / max) * chartH;
  const points = values.map((value, index) => [x(index), y(value)]);
  const line = points.map(([px, py]) => `${px.toFixed(1)},${py.toFixed(1)}`).join(' ');
  const area = `${pad.left},${pad.top + chartH} ${line} ${pad.left + chartW},${pad.top + chartH}`;
  const gridRows = [0, 25, 50, 75, 100]
    .map(
      (value) =>
        `<line x1="${pad.left}" y1="${y(value)}" x2="${W - pad.right}" y2="${y(value)}" stroke="#edf2f7" stroke-width="1"/><text x="${pad.left - 9}" y="${y(value) + 3}" text-anchor="end" font-size="8" fill="#9aa8ba">${value}</text>`
    )
    .join('');
  const xLabels = labels
    .map(
      (label, index) =>
        `<text x="${x(index)}" y="${H - 10}" text-anchor="middle" font-size="8.5" fill="#8796a9">${label}</text>`
    )
    .join('');
  const dots = points
    .map(
      ([px, py], index) =>
        `<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="3.2" fill="#fff" stroke="${color}" stroke-width="2"/><text x="${px.toFixed(1)}" y="${py - 9}" text-anchor="middle" font-size="8" font-weight="600" fill="${color}">${values[index]}${suffix}</text>`
    )
    .join('');
  return `
    <svg class="chart-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="参与趋势折线图">
      <defs>
        <linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${color}" stop-opacity=".22"/>
          <stop offset="1" stop-color="${color}" stop-opacity="0"/>
        </linearGradient>
      </defs>
      ${gridRows}
      <polygon points="${area}" fill="url(#${gid})"/>
      <polyline points="${line}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      ${dots}
      ${xLabels}
    </svg>
  `;
}

function mockQrSvg() {
  const n = 29;
  const size = 35;
  const cell = 1;
  const rects = [];
  const finderCells = new Set();

  const inFinder = (x, y, fx, fy) => x >= fx && x < fx + 7 && y >= fy && y < fy + 7;
  const finders = [
    [0, 0],
    [n - 7, 0],
    [0, n - 7],
  ];
  finders.forEach(([fx, fy]) => {
    for (let yy = 0; yy < 7; yy += 1) {
      for (let xx = 0; xx < 7; xx += 1) {
        finderCells.add(`${fx + xx},${fy + yy}`);
      }
    }
  });

  const isFinderBlack = (x, y) => {
    for (const [fx, fy] of finders) {
      if (!inFinder(x, y, fx, fy)) continue;
      const lx = x - fx;
      const ly = y - fy;
      if (lx === 0 || lx === 6 || ly === 0 || ly === 6) return true;
      if (lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4) return true;
      return false;
    }
    return null;
  };

  for (let y = 0; y < n; y += 1) {
    for (let x = 0; x < n; x += 1) {
      const finderValue = isFinderBlack(x, y);
      if (finderValue !== null) {
        if (finderValue) rects.push([x, y]);
        continue;
      }
      if (x === 6 || y === 6) {
        if ((x + y) % 2 === 0) rects.push([x, y]);
        continue;
      }
      const seed = (x * 17 + y * 31 + x * y * 7 + 13) % 23;
      if (seed < 9) rects.push([x, y]);
    }
  }

  return `
    <svg viewBox="0 0 ${size} ${size}" role="img" aria-label="模拟二维码，仅用于展示，无法跳转">
      <rect width="${size}" height="${size}" fill="#ffffff"/>
      <g transform="translate(3 3)" fill="#2b3d56">
        ${rects.map(([x, y]) => `<rect x="${x * cell}" y="${y * cell}" width="${cell}" height="${cell}"/>`).join('')}
      </g>
      <g transform="translate(13.2 13.2)">
        <rect width="8.6" height="8.6" rx="2" fill="#fffdf9" stroke="#d6e3f1" stroke-width=".35"/>
        <path d="M4.3 2.2c-1.2.6-2 1.8-2 3.2 0 1 .6 1.9 1.5 2.2.3-.9.7-1.8 1.3-2.6-.5 1-.8 1.9-.9 2.7.6-.1 1.1-.4 1.5-.8.9-1 1.1-2.5.5-3.7-.4-.7-1.2-.9-1.9-1Z" fill="#3b6fd4"/>
      </g>
      <text x="17.5" y="33.2" text-anchor="middle" font-family="Arial, sans-serif" font-size="1.3" letter-spacing=".35" fill="#a4b2c4">DEMO QR</text>
    </svg>
  `;
}

/* ---------------------------------------------------------
   路由 / 布局
--------------------------------------------------------- */
const TEACHER_NAV = [
  ['/teacher', '工作台'],
  ['/teacher/review', '材料查阅'],
  ['/teacher/evaluation', '多元研判'],
  ['/teacher/stats', '群体统计'],
];

const INSTITUTION_NAV = [
  ['/institution', '工作台'],
  ['/institution/indicators', '指标库'],
  ['/institution/rules', '规则管理'],
  ['/institution/report', '质量报告'],
];

const PAGE_META = {
  '/welcome': { role: null, title: '欢迎', welcome: true },
  '/student': { role: 'student', title: '成长首页' },
  '/student/archive': { role: 'student', title: '学生成长材料档案袋' },
  '/student/profile': { role: 'student', title: '学生创新能力画像' },
  '/student/resources': { role: 'student', title: '发展资源实时推送' },
  '/student/reflection': { role: 'student', title: '自我反思模块' },
  '/teacher': { role: 'teacher', title: '教师工作台' },
  '/teacher/review': { role: 'teacher', title: '材料查阅与标签辅助' },
  '/teacher/evaluation': { role: 'teacher', title: '多元研判与反馈输出' },
  '/teacher/stats': { role: 'teacher', title: '群体情况统计' },
  '/institution': { role: 'institution', title: '院校工作台' },
  '/institution/indicators': { role: 'institution', title: '指标库模板配置' },
  '/institution/rules': { role: 'institution', title: '规则管理' },
  '/institution/report': { role: 'institution', title: '群体质量报告输出' },
  '/qr': { role: null, title: '小程序入口' },
};

const ROLE_HOME = {
  student: '/student',
  teacher: '/teacher',
  institution: '/institution',
};

function render() {
  const path = currentPath();
  const meta = PAGE_META[path] || PAGE_META['/welcome'];
  const app = $('#app');
  const header = $('#appHeader');
  const tabs = $('#studentTabs');
  const footer = $('#siteFooter');

  document.title =
    path === '/welcome'
      ? '智育成长画像平台 · 师范生创新成长记录与反馈中心'
      : `${meta.title} · 智育成长画像平台`;

  header.hidden = Boolean(meta.welcome);
  tabs.hidden = meta.role !== 'student';
  footer.hidden = false;

  app.className = `app${meta.welcome ? ' is-welcome' : ''}`;
  app.innerHTML = renderRoute(path);
  app.classList.remove('view-enter');
  void app.offsetWidth;
  app.classList.add('view-enter');

  updateHeader(meta.role);
  updateTabs(path);
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

function renderRoute(path) {
  switch (path) {
    case '/welcome':
      return renderWelcome();
    case '/student':
      return renderStudentHome();
    case '/student/archive':
      return renderArchive();
    case '/student/profile':
      return renderProfile();
    case '/student/resources':
      return renderResources();
    case '/student/reflection':
      return renderReflection();
    case '/teacher':
      return renderTeacherHome();
    case '/teacher/review':
      return renderTeacherReview();
    case '/teacher/evaluation':
      return renderTeacherEvaluation();
    case '/teacher/stats':
      return renderTeacherStats();
    case '/institution':
      return renderInstitutionHome();
    case '/institution/indicators':
      return renderIndicators();
    case '/institution/rules':
      return renderRules();
    case '/institution/report':
      return renderReport();
    case '/qr':
      return renderQr();
    default:
      return renderWelcome();
  }
}

function updateHeader(role) {
  const nav = $('#mainNav');
  const roleSwitch = $('#roleSwitch');
  const avatar = $('#avatarBtn');

  $$('.role-switch button', roleSwitch).forEach((button) => {
    button.classList.toggle('is-active', button.dataset.role === role);
  });

  if (!role) {
    nav.innerHTML = '';
    return;
  }

  const items = role === 'teacher' ? TEACHER_NAV : role === 'institution' ? INSTITUTION_NAV : [];
  nav.innerHTML = items
    .map(
      ([href, label]) =>
        `<a class="nav-link${currentPath() === href ? ' is-active' : ''}" href="#${href}">${label}</a>`
    )
    .join('');

  avatar.textContent = role === 'student' || role === 'teacher' ? '同' : '文';
}

function updateTabs(path) {
  const activeMap = {
    '/student': 'home',
    '/student/archive': 'archive',
    '/student/resources': 'resources',
    '/student/reflection': 'me',
  };
  const active = activeMap[path];
  $$('.student-tabs a').forEach((tab) => {
    tab.classList.toggle('is-active', tab.dataset.tab === active);
  });
}

function pageHead({ crumb, title, desc, actions = '' }) {
  const role = PAGE_META[currentPath()]?.role;
  const roleLabel = { student: '学生端', teacher: '教师端', institution: '院校端' }[role] || '平台';
  return `
    <div class="page-head">
      <div class="page-head-copy">
        <div class="breadcrumb">${roleLabel}<span>/</span>${crumb}</div>
        <h1>${title}</h1>
        ${desc ? `<p>${desc}</p>` : ''}
      </div>
      ${actions ? `<div class="page-head-actions">${actions}</div>` : ''}
    </div>
  `;
}

function setupPageHeadActions() {
  /* 预留：页面级操作均由全局事件委托处理 */
}

/* ---------------------------------------------------------
   欢迎页
--------------------------------------------------------- */
function renderWelcome() {
  const roles = [
    {
      no: '01',
      name: '学生端',
      iconName: 'user',
      desc: '记录每一次教学尝试，查看自己的四维成长画像，获得适合自己的发展资源。',
      href: '#/student',
      link: '进入学生空间',
    },
    {
      no: '02',
      name: '教师端',
      iconName: 'users',
      desc: '查阅学生材料，借助标签辅助研判，以质性评语支持每一位师范生成长。',
      href: '#/teacher',
      link: '进入教师工作台',
    },
    {
      no: '03',
      name: '院校端',
      iconName: 'building',
      desc: '配置指标与规则，查看群体质量报告，为培养方案修订提供数据参考。',
      href: '#/institution',
      link: '进入院校管理',
    },
  ];

  return `
    <section class="welcome">
      <div class="welcome-top">
        <a class="brand" href="#/welcome" aria-label="智育成长画像平台">
          ${brandMarkup()}
        </a>
        <div class="welcome-top-actions">
          <span class="top-note">2026 · 师范生创新培养计划</span>
          <a class="btn btn-ghost btn-sm" href="#/qr">${icon('qr')} 小程序入口</a>
        </div>
      </div>

      <div class="welcome-hero">
        <div class="welcome-copy">
          ${eyebrow('A PORTRAIT OF GROWTH')}
          <h1>
            <span>欢迎来到</span>
            <span><em>智育成长画像</em>平台</span>
          </h1>
          <p class="lead">记录每一次教学尝试，理解每一段成长轨迹。以文学教育为起点，让师范生的创新实践被看见，也被温柔地支持。</p>
          <div class="welcome-actions">
            <a class="btn btn-primary" href="#/student">进入学生端 ${icon('arrow')}</a>
            <a class="btn btn-cream" href="#/teacher">教师端入口 ${icon('arrowUpRight')}</a>
          </div>
          <div class="welcome-points">
            <span>记录</span><i></i><span>反馈</span><i></i><span>成长</span><i></i><span>不排名 · 不打分</span>
          </div>
        </div>

        <div class="welcome-visual">
          <div class="floating-chip"><i></i> 过程性成长记录</div>
          <div class="portrait-preview">
            <div class="preview-topline">
              <span>GROWTH PORTRAIT / 2026</span>
              <span class="demo-mini">DEMO</span>
            </div>
            <div class="preview-person">
              <span class="preview-avatar">同</span>
              <div>
                <strong>同学</strong>
                <small>汉语言文学（师范）2301班 · 教育实习中</small>
              </div>
            </div>
            <div class="preview-chart">${radarSvg([0.78, 0.68, 0.86, 0.72], { compact: true })}</div>
            <div class="preview-foot">
              <span>画像来自 12 份过程性材料</span>
              <b>非评分 · 仅作成长反馈</b>
            </div>
          </div>
          <div class="visual-note">
            <span>OUR BELIEF</span>
            <p>教育不是被评分，<br />而是被理解、被点亮。</p>
          </div>
        </div>
      </div>

      <div class="role-section">
        <div class="role-section-head">
          <div>
            ${eyebrow('THREE PERSPECTIVES')}
            <h2 style="margin-top:10px;">从三个视角，共同守护成长</h2>
          </div>
          <p>记录 · 研判 · 支持，构成一条完整的成长反馈链。</p>
        </div>
        <div class="role-grid">
          ${roles
            .map(
              (role) => `
              <a class="role-card" href="${role.href}">
                <div class="role-card-top">
                  <div class="icon-tile${role.no === '02' ? ' cream' : role.no === '03' ? ' green' : ''}">${icon(role.iconName)}</div>
                  <span class="role-no">${role.no}</span>
                </div>
                <h3>${role.name}</h3>
                <p>${role.desc}</p>
                <span class="role-link">${role.link} ${icon('arrow')}</span>
              </a>`
            )
            .join('')}
        </div>
      </div>

      <div class="welcome-bottom">
        <p>本平台以过程性记录与质性反馈为核心，不提供打分功能，也不以单一量化分数评价学生。演示数据仅用于产品展示。</p>
        <a href="#/qr">查看演示小程序码 ${icon('qr')}</a>
      </div>
    </section>
  `;
}

/* ---------------------------------------------------------
   学生端 — 首页
--------------------------------------------------------- */
function renderStudentHome() {
  const entries = [
    {
      no: '01',
      title: '学生成长材料档案袋',
      desc: '教学设计、实习反思、教研记录，把每一次实践留存为可回看的成长证据。',
      iconName: 'archive',
      href: '#/student/archive',
      link: '打开我的档案',
    },
    {
      no: '02',
      title: '学生创新能力画像',
      desc: '从四个维度看见自己的创新成长，理解优势，也找到下一步可以展开的方向。',
      iconName: 'compass',
      href: '#/student/profile',
      link: '查看四维画像',
    },
    {
      no: '03',
      title: '发展资源实时推送',
      desc: '教学创新案例、教研选题与竞赛信息，按你的成长阶段轻轻推送到手边。',
      iconName: 'spark',
      href: '#/student/resources',
      link: '浏览成长资源',
    },
    {
      no: '04',
      title: '学生自我反思模块',
      desc: '用六个问题回看一次实践，把感受整理成经验，把经验变成下一步行动。',
      iconName: 'edit',
      href: '#/student/reflection',
      link: '开始一次反思',
    },
  ];

  return `
    <div class="student-hero">
      <div class="hero-greeting">
        ${eyebrow('GOOD MORNING, TONGXUE')}
        <h1>同学，<br />今天也在慢慢成为<br /><em>更好的老师。</em></h1>
        <p class="lead">教育实习的第 6 周。你已经留下 12 份成长材料，也在课堂里完成了 3 次小小的创新尝试。</p>
        <div class="hero-meta">
          <span class="tag">汉语言文学（师范）2301班</span>
          <span class="tag tag-cream">教育实习 · 高一语文</span>
          <span class="tag tag-green"><i class="status-dot"></i> 成长记录持续中</span>
        </div>
      </div>
      <div class="hero-preview">
        <div class="hero-preview-top">
          <span>GROWTH PORTRAIT</span>
          <b>● 过程性画像</b>
        </div>
        <div class="hero-preview-chart">${radarSvg([0.78, 0.68, 0.86, 0.72], { compact: true })}</div>
        <div class="hero-preview-foot">
          <span>最近更新 · 10 月 30 日</span>
          <span>非评分 · 仅作反馈</span>
        </div>
      </div>
    </div>

    <div class="home-grid">
      <div>
        <div class="section-head">
          <div>
            ${eyebrow('MY GROWTH SPACE')}
            <h2 style="margin-top:8px;">我的成长入口</h2>
          </div>
          <p>从记录开始，慢慢看见自己的变化。</p>
        </div>
        <div class="entry-grid">
          ${entries
            .map(
              (entry) => `
              <a class="entry-card" href="${entry.href}">
                <div class="entry-top">
                  <div class="icon-tile${entry.no === '04' ? ' cream' : ''}">${icon(entry.iconName)}</div>
                  <span class="entry-no">${entry.no}</span>
                </div>
                <h3>${entry.title}</h3>
                <p>${entry.desc}</p>
                <span class="entry-link">${entry.link} ${icon('arrow')}</span>
              </a>`
            )
            .join('')}
        </div>

        <div class="panel panel-pad" style="margin-top:18px;">
          <div class="panel-head">
            <div class="panel-title">
              <span class="kicker">RECENT ARCHIVE</span>
              <h2>最近归档</h2>
            </div>
            <a class="text-link" href="#/student/archive">全部档案 ${icon('arrow')}</a>
          </div>
          <div class="recent-list">
            ${ARCHIVE_ROWS.slice(0, 3)
              .map(
                (row) => `
                <div class="recent-row">
                  <div class="recent-icon">${icon('file')}</div>
                  <div class="recent-info">
                    <strong>${escapeHtml(row.title)}</strong>
                    <small>${escapeHtml(row.type)} · ${row.date}</small>
                  </div>
                  <span class="tag ${row.status === '待完善' ? 'tag-amber' : 'tag-green'}">${row.status}</span>
                </div>`
              )
              .join('')}
          </div>
        </div>
      </div>

      <div class="side-stack">
        <div class="mini-panel cream">
          <div class="quote-mini">
            <p>“教育的创新，往往始于一次没有标准答案的提问。”</p>
            <span>—— 本周成长寄语</span>
          </div>
        </div>
        <div class="mini-panel">
          <div class="mini-panel-head">
            <h3>本周可以做什么</h3>
            <span>WEEKLY</span>
          </div>
          <div class="timeline">
            <div class="timeline-item">
              <span class="timeline-dot"></span>
              <div><strong>完成一次课堂观察</strong><small>记录 1 个让你意外的教学瞬间</small></div>
            </div>
            <div class="timeline-item">
              <span class="timeline-dot"></span>
              <div><strong>整理《故都的秋》修改稿</strong><small>保留两个版本，写下修改理由</small></div>
            </div>
            <div class="timeline-item">
              <span class="timeline-dot"></span>
              <div><strong>读 1 个教学创新案例</strong><small>发展资源已为你准备 6 条新内容</small></div>
            </div>
          </div>
          <a class="text-link" style="margin-top:14px;" href="#/student/resources">去看看资源 ${icon('arrow')}</a>
        </div>
      </div>
    </div>
  `;
}

/* ---------------------------------------------------------
   学生端 — 档案袋
--------------------------------------------------------- */
function renderArchive() {
  return `
    ${pageHead({
      crumb: '成长材料档案袋',
      title: '学生成长材料档案袋',
      desc: '把教学设计、修改过程、实习反思与教研记录留在这里。材料不是考核证据，而是你理解自己成长的一面镜子。',
      actions: `<a class="btn btn-soft btn-sm" href="#/student/profile">${icon('compass')} 查看画像</a>`,
    })}

    <div class="stats-row">
      <div class="stat-card"><span class="stat-label">已归档材料</span><div class="stat-value"><b>12</b><small>份</small></div></div>
      <div class="stat-card"><span class="stat-label">本学期新增</span><div class="stat-value"><b>5</b><small>份</small></div></div>
      <div class="stat-card"><span class="stat-label">待完善</span><div class="stat-value"><b>2</b><small>份</small></div></div>
      <div class="stat-card"><span class="stat-label">最近更新</span><div class="stat-value"><b>10.28</b><small>10 月</small></div></div>
    </div>

    <div class="archive-layout">
      <div>
        <div class="panel panel-pad">
          <div class="panel-head">
            <div class="panel-title">
              <span class="kicker">MATERIAL ARCHIVE</span>
              <h2>五类成长材料</h2>
              <p>保留过程，也保留你在过程中的思考与修改。</p>
            </div>
            <span class="tag tag-cream">共 12 份</span>
          </div>
          <div class="material-grid">
            ${MATERIALS.map(
              (item, index) => `
              <div class="material-card">
                <span class="material-count">0${index + 1}</span>
                <div class="material-icon">${icon(item.icon)}</div>
                <strong>${item.name}</strong>
                <small>${item.count} · ${item.note}</small>
              </div>`
            ).join('')}
          </div>

          <div class="upload-shell">
            <div class="upload-shell-head">
              <div>
                <strong>添加一份新的成长材料</strong>
                <span>支持教学设计、反思文字、教研记录与课堂实践材料。</span>
              </div>
              <button class="btn btn-soft btn-sm" type="button" disabled>${icon('upload')} 上传材料</button>
            </div>
            <div class="upload-shell-note">${icon('info')} 演示原型：上传入口暂未开放，当前按钮仅作界面占位。</div>
          </div>
        </div>

        <div class="panel panel-pad archive-table">
          <div class="panel-head">
            <div class="panel-title">
              <span class="kicker">RECENT MATERIALS</span>
              <h2>最近归档</h2>
            </div>
            <span class="small muted">按提交时间排序</span>
          </div>
          <div class="table-wrap">
            <table class="data-table">
              <thead><tr><th>材料名称</th><th>材料类型</th><th>提交时间</th><th>状态</th></tr></thead>
              <tbody>
                ${ARCHIVE_ROWS.map(
                  (row) => `
                  <tr>
                    <td><div class="name-cell"><span class="mini-avatar">${row.title.slice(0, 1)}</span>${escapeHtml(row.title)}</div></td>
                    <td>${row.type}</td>
                    <td>${row.date}</td>
                    <td><span class="tag ${row.status === '待完善' ? 'tag-amber' : 'tag-green'}">${row.status}</span></td>
                  </tr>`
                ).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <aside class="archive-side">
        <div class="archive-tip">
          <h3>档案袋使用说明</h3>
          <p>这里保存的是成长过程，不是一份被反复打量的“成绩单”。你可以慢慢补充，也可以在不满意时继续修改。</p>
          <ul>
            <li>材料默认仅本人与指导教师可见</li>
            <li>修改稿会保留版本痕迹，过程同样重要</li>
            <li>上传入口为演示占位，暂不接收真实文件</li>
            <li>任何材料都不会自动对接综测加分</li>
          </ul>
        </div>
        <div class="panel">
          <div class="panel-title"><span class="kicker">A SMALL REMINDER</span><h3>不必等到“做得很好”</h3></div>
          <p class="small muted" style="margin-top:7px;line-height:1.85;">一份失败的教学尝试、一段没有想清楚的反思，同样值得被保存。成长画像看见的是变化，而不是完美。</p>
        </div>
      </aside>
    </div>
  `;
}

/* ---------------------------------------------------------
   学生端 — 创新能力画像
--------------------------------------------------------- */
function renderProfile() {
  return `
    ${pageHead({
      crumb: '创新能力画像',
      title: '学生创新能力画像',
      desc: '画像由过程性材料与反思记录共同生成，呈现你在四个维度上的成长形状。它不是分数，也不指向排名。',
      actions: `<span class="tag tag-cream">${icon('clock')} 更新于 10 月 30 日</span>`,
    })}

    <div class="profile-grid">
      <div class="panel profile-chart-card">
        <div class="profile-chart-head">
          <div>
            <span class="kicker">FOUR-DIMENSION PORTRAIT</span>
            <h2 style="margin-top:8px;">我的四维成长形状</h2>
            <p>基于 12 份过程性材料生成的定性画像</p>
          </div>
          <span class="chart-note"><i></i> 非评分</span>
        </div>
        <div class="radar-large radar-desktop">${radarSvg([0.78, 0.68, 0.86, 0.72], { large: true })}</div>
        <div class="radar-mobile">${radarSvg([0.78, 0.68, 0.86, 0.72], { compact: true })}</div>
        <div class="profile-chart-caption">
          <span class="tag">创新意识与动机</span>
          <span class="tag tag-green">创新精神与品格</span>
          <span class="tag tag-cream">教学与教育实践创新</span>
          <span class="tag">创新思维与方法</span>
        </div>
        <div class="profile-note">${icon('info')} 雷达图反映的是过程性材料的相对分布，不代表能力高低，也不用于任何评分或排名。</div>
      </div>

      <div class="panel panel-pad">
        <div class="panel-head">
          <div class="panel-title">
            <span class="kicker">DIMENSION NOTES</span>
            <h2>四个维度的观察线索</h2>
          </div>
        </div>
        <div class="dimension-list">
          ${DIMENSIONS.map(
            (item) => `
            <div class="dimension-row">
              <div class="dimension-row-top"><strong>${item.name}</strong><span>${item.status}</span></div>
              <div class="mini-bar"><i style="width:${Math.round(item.value * 100)}%"></i></div>
              <p class="small muted" style="margin-top:7px;line-height:1.7;">${item.desc}</p>
            </div>`
          ).join('')}
        </div>
        <div class="divider"></div>
        <div class="panel-title">
          <span class="kicker">EVIDENCE</span>
          <h3 style="font-size:15px;">最近的成长证据</h3>
        </div>
        <div class="recent-list" style="margin-top:8px;">
          <div class="recent-row"><div class="recent-icon">${icon('pen')}</div><div class="recent-info"><strong>《故都的秋》情境任务设计</strong><small>教学设计方案 · 10-28</small></div><span class="tag">文本细读</span></div>
          <div class="recent-row"><div class="recent-icon">${icon('users')}</div><div class="recent-info"><strong>教育戏剧融入《琵琶行》</strong><small>教学实践材料 · 10-24</small></div><span class="tag tag-cream">课堂行动</span></div>
          <div class="recent-row"><div class="recent-icon">${icon('message')}</div><div class="recent-info"><strong>课堂讨论“冷场”后的复盘</strong><small>实习反思 · 10-21</small></div><span class="tag tag-green">失败复盘</span></div>
        </div>
      </div>
    </div>

    <div class="insight-grid">
      <div class="insight-card cream">
        <h3>${icon('spark')} 优势领域</h3>
        <p><strong>创新精神与品格</strong>是你目前最稳定的成长支点。你愿意面对课堂里的不确定，也能在尝试失败后进行复盘，并把同伴的反馈转化为下一次行动。</p>
        <div class="modal-tags" style="margin-top:10px;"><span class="tag tag-cream">失败复盘</span><span class="tag tag-cream">协作沟通</span><span class="tag tag-cream">持续投入</span></div>
      </div>
      <div class="insight-card">
        <h3>${icon('target')} 待提升方向</h3>
        <p><strong>创新思维与方法</strong>正在展开。你有很多直觉与想法，可以进一步练习“用证据说话”：记录学生的真实反应，比较不同方案的效果，让迭代更有依据。</p>
        <div class="modal-tags" style="margin-top:10px;"><span class="tag">证据意识</span><span class="tag">方案对比</span><span class="tag">迭代验证</span></div>
      </div>
      <div class="insight-card">
        <h3>${icon('compass')} 个性化发展建议</h3>
        <ul>
          <li>为一次课堂尝试建立“问题—行动—证据”小档案</li>
          <li>在《故都的秋》修改稿中保留两版设计，写下修改依据</li>
          <li>尝试与不同学科同伴共备一节课，拓展跨学科联想</li>
        </ul>
      </div>
    </div>

    <div class="privacy-note">${icon('shield')} 画像与建议仅用于支持你的成长，不作为评奖、综测或任何形式的量化考核依据。</div>
  `;
}

/* ---------------------------------------------------------
   学生端 — 资源
--------------------------------------------------------- */
function renderResources() {
  const categories = ['全部', '教学创新案例', '教研选题', '师范类创新竞赛'];
  return `
    ${pageHead({
      crumb: '发展资源实时推送',
      title: '发展资源实时推送',
      desc: '根据你的实习阶段与成长画像，整理一些可能此刻对你有用的阅读、教研与竞赛信息。',
      actions: `<a class="btn btn-soft btn-sm" href="#/student/profile">${icon('compass')} 回到画像</a>`,
    })}

    <div class="resource-note">${icon('info')} 资源仅作参考，不强制任务。</div>

    <div class="filter-row">
      ${categories
        .map(
          (category) =>
            `<button class="filter-chip${state.resourceFilter === category ? ' is-active' : ''}" type="button" data-resource-filter="${category}">${category}</button>`
        )
        .join('')}
    </div>

    <div class="resource-layout">
      <div class="resource-list" id="resourceList">
        ${RESOURCES.map((resource) => resourceCard(resource)).join('')}
      </div>
      <aside class="resource-side">
        <div class="side-quote">
          <p>阅读不是为了立刻找到答案，而是让自己的课堂多几种可能。</p>
          <span>—— 给正在实习的你</span>
        </div>
        <div class="side-list">
          <h3>本周推荐路径</h3>
          <div class="side-list-item"><span class="side-list-no">01</span><div><strong>先读一个案例</strong><small>看看别人如何把想法变成课堂行动</small></div></div>
          <div class="side-list-item"><span class="side-list-no">02</span><div><strong>再选一个教研选题</strong><small>从自己的课堂里找到一个可研究的问题</small></div></div>
          <div class="side-list-item"><span class="side-list-no">03</span><div><strong>最后看看竞赛信息</strong><small>如果准备好了，就给自己一个展示的机会</small></div></div>
        </div>
        <div class="panel panel-pad panel-cream">
          <span class="kicker">A GENTLE NOTE</span>
          <h3 style="font-size:16px;margin-top:8px;">不必全部收藏</h3>
          <p class="small muted" style="margin-top:6px;line-height:1.85;">只选一条此刻真正想读的内容，把它带回你的课堂，就已经足够。</p>
        </div>
      </aside>
    </div>
  `;
}

function resourceCard(resource) {
  const iconName =
    resource.category === '教学创新案例' ? 'book' : resource.category === '教研选题' ? 'compass' : 'spark';
  const tone = resource.tone === 'cream' ? ' cream' : resource.tone === 'green' ? ' green' : '';
  return `
    <article class="resource-card" data-category="${resource.category}">
      <span class="resource-icon${tone}">${icon(iconName)}</span>
      <div class="resource-main">
        <span class="resource-type">${resource.category}</span>
        <h3>${resource.title}</h3>
        <p>${resource.summary}</p>
        <div class="resource-meta">
          ${resource.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
          <span class="small muted">· ${resource.time}</span>
        </div>
      </div>
      <button class="btn btn-ghost btn-sm" type="button" data-resource-id="${resource.id}">查看详情 ${icon('arrowUpRight')}</button>
    </article>
  `;
}

/* ---------------------------------------------------------
   学生端 — 自我反思
--------------------------------------------------------- */
function renderReflection() {
  const filled = REFLECTION_FIELDS.filter((field) => (state.reflection[field.key] || '').trim().length > 0).length;
  const progress = Math.round((filled / REFLECTION_FIELDS.length) * 100);
  const totalChars = REFLECTION_FIELDS.reduce((sum, field) => sum + (state.reflection[field.key] || '').length, 0);

  return `
    ${pageHead({
      crumb: '我的 · 自我反思',
      title: '自我反思模块',
      desc: '一次反思不需要完美。把实践中的犹豫、发现与下一步写下来，让经验慢慢沉淀。',
      actions: `<span class="tag tag-cream">${icon('calendar')} 2026 秋季教育实习 · 高一语文</span>`,
    })}

    <div class="reflection-layout">
      <form class="reflection-list" data-reflection-form>
        ${REFLECTION_FIELDS.map(
          (field, index) => `
          <section class="reflection-item">
            <div class="reflection-item-head">
              <span class="reflection-no">0${index}</span>
              <div>
                <h3>${field.title}</h3>
                <p class="prompt">${field.prompt}</p>
              </div>
            </div>
            <textarea data-reflection-key="${field.key}" placeholder="${field.placeholder}">${escapeHtml(state.reflection[field.key] || '')}</textarea>
            <div class="reflection-item-foot"><span data-reflection-count="${field.key}">${(state.reflection[field.key] || '').length} 字</span><span class="save-state"><i></i> 自动保存在本机</span></div>
          </section>`
        ).join('')}
        <div class="reflection-actions">
          <button class="btn btn-primary" type="submit">保存这次反思 ${icon('check')}</button>
          <button class="btn btn-ghost" type="button" data-save-reflection>${icon('bookmark')} 保存草稿</button>
          <span class="small muted">共 ${totalChars} 字 · 仅保存在当前浏览器</span>
        </div>
      </form>

      <aside class="reflection-side">
        <div class="reflection-side-sticky">
          <div class="reflection-progress">
            <div class="progress-head"><span>本次反思完成度</span><span data-progress-label>${filled} / ${REFLECTION_FIELDS.length} 个模块</span></div>
            <div class="progress-track"><i data-progress-bar style="width:${progress}%"></i></div>
            <p class="small muted" style="margin-top:8px;line-height:1.7;">没有字数要求，写清楚一个真实的细节就很好。</p>
          </div>
          <div class="reflection-tip" style="margin-top:14px;">
            <h3>写下真实，而不是正确答案</h3>
            <p>可以从一个具体瞬间开始：哪个学生的反应让你意外？哪一步没有按计划发生？</p>
            <ul>
              <li>不用急着给自己下结论</li>
              <li>允许写出“还没有想清楚”</li>
              <li>把下一步计划写得小一点、具体一点</li>
            </ul>
          </div>
          <div class="panel" style="margin-top:14px;padding:19px;">
            <div class="panel-title"><span class="kicker">PRIVACY</span><h3 style="font-size:14px;">谁会看到这份反思？</h3></div>
            <p class="small muted" style="margin-top:6px;line-height:1.8;">默认仅本人与指导教师可见，不进入公开排名，也不作为量化评分依据。</p>
          </div>
        </div>
      </aside>
    </div>
  `;
}

/* ---------------------------------------------------------
   教师端 — 工作台
--------------------------------------------------------- */
function renderTeacherHome() {
  const pending = state.reviewStudents.filter((item) => item.status === '待研判');
  return `
    <div class="teacher-hero">
      <div>
        ${eyebrow('TEACHER WORKSPACE')}
        <h1>同学，<em>下午好。</em></h1>
        <p class="lead">今天有 ${state.pendingCount} 份材料等待研判。慢一点看，给每一份尝试一个具体的回应。</p>
        <div class="teacher-hero-metrics">
          <div class="teacher-hero-metric"><b>42</b><span>班级学生数</span></div>
          <div class="teacher-hero-metric"><b>${state.reviewedCount}</b><span>已查阅材料</span></div>
          <div class="teacher-hero-metric"><b>${state.pendingCount}</b><span>待研判材料</span></div>
        </div>
      </div>
      <div class="teacher-hero-side">
        <div class="pending-card">
          <div class="pending-card-head"><strong>优先阅读</strong><span>${pending.length} 份待研判</span></div>
          ${pending
            .slice(0, 3)
            .map(
              (student) => `
              <div class="pending-student">
                <span class="mini-avatar">${student.initial}</span>
                <div class="pending-student-info"><strong>${student.name}</strong><small>${student.type} · ${student.time}</small></div>
                <span class="tag tag-amber">待研判</span>
              </div>`
            )
            .join('')}
          <a class="text-link" style="margin-top:12px;" href="#/teacher/review">进入材料查阅 ${icon('arrow')}</a>
        </div>
      </div>
    </div>

    <div class="section-head" style="margin-top:27px;">
      <div>${eyebrow('TEACHING SUPPORT')}<h2 style="margin-top:8px;">今天，从哪里开始？</h2></div>
      <p>材料查阅 · 质性反馈 · 群体洞察</p>
    </div>

    <div class="entry-grid three">
      <a class="entry-card" href="#/teacher/review">
        <div class="entry-top"><div class="icon-tile">${icon('archive')}</div><span class="entry-no">01</span></div>
        <h3>材料查阅与标签辅助</h3>
        <p>查阅学生档案，借助四维标签理解材料中的成长线索，标签可修改、可新增。</p>
        <span class="entry-link">进入材料查阅 ${icon('arrow')}</span>
      </a>
      <a class="entry-card" href="#/teacher/evaluation">
        <div class="entry-top"><div class="icon-tile cream">${icon('message')}</div><span class="entry-no">02</span></div>
        <h3>多元研判与反馈输出</h3>
        <p>用质性评语与发展建议回应学生的尝试，平台不提供打分，也不设分数入口。</p>
        <span class="entry-link">进入研判反馈 ${icon('arrow')}</span>
      </a>
      <a class="entry-card" href="#/teacher/stats">
        <div class="entry-top"><div class="icon-tile green">${icon('chart')}</div><span class="entry-no">03</span></div>
        <h3>群体情况统计</h3>
        <p>看见班级整体参与情况，识别培养短板，为课堂与实习指导提供方向。</p>
        <span class="entry-link">查看群体统计 ${icon('arrow')}</span>
      </a>
    </div>

    <div class="teacher-main-grid">
      <div class="panel panel-pad">
        <div class="panel-head">
          <div class="panel-title"><span class="kicker">CLASS OVERVIEW</span><h2>班级创新实践参与趋势</h2><p>2026 秋季学期 · 汉语言文学（师范）2301班</p></div>
          <span class="tag tag-green">稳定上升</span>
        </div>
        ${lineChartSvg({ labels: ['9 月', '10 月', '11 月', '12 月'], values: [46, 62, 78, 86] })}
        <div class="legend-row"><span><i class="legend-dot" style="background:#4e7fc7"></i>材料提交参与率</span><span class="muted">仅统计群体数据，不展示个人排名</span></div>
      </div>
      <div class="panel panel-pad">
        <div class="panel-head">
          <div class="panel-title"><span class="kicker">THIS WEEK</span><h2>本周待办</h2></div>
          <span class="small muted">10.27 — 11.02</span>
        </div>
        <div class="timeline">
          <div class="timeline-item"><span class="timeline-dot"></span><div><strong>完成 14 份材料研判</strong><small>优先：教学设计方案与实习反思</small></div></div>
          <div class="timeline-item"><span class="timeline-dot"></span><div><strong>整理班级培养短板</strong><small>关注教研记录与跨学科协作证据</small></div></div>
          <div class="timeline-item"><span class="timeline-dot"></span><div><strong>准备一次课堂指导反馈</strong><small>围绕“证据意识”设计一个小组活动</small></div></div>
        </div>
        <a class="text-link" style="margin-top:15px;" href="#/teacher/stats">查看群体统计 ${icon('arrow')}</a>
      </div>
    </div>
  `;
}

/* ---------------------------------------------------------
   教师端 — 材料查阅与标签辅助
--------------------------------------------------------- */
function renderTeacherReview() {
  const selected = getReviewStudent();
  const filtered =
    state.reviewStudentFilter === 'all'
      ? state.reviewStudents
      : state.reviewStudents.filter((item) => item.id === state.reviewStudentFilter);

  return `
    ${pageHead({
      crumb: '材料查阅与标签辅助',
      title: '材料查阅与标签辅助',
      desc: '标签不是结论，而是帮助你看见材料的线索。你可以修改、新增，也可以让一个标签暂时保持空白。',
      actions: `<button class="btn btn-soft btn-sm" type="button" data-save-review-note>${icon('bookmark')} 保存本次研判</button>`,
    })}

    <div class="filter-bar">
      <div class="filter-field"><label for="classSelect">班级</label>
        <select class="select-mini" id="classSelect"><option>汉语言文学（师范）2301班</option></select>
      </div>
      <div class="filter-count">已查阅学生材料 <b>${state.reviewedCount}</b></div>
      <div class="filter-field"><label for="studentSelect">学生</label>
        <select class="select-mini" id="studentSelect" data-review-filter>
          <option value="all"${state.reviewStudentFilter === 'all' ? ' selected' : ''}>全部学生</option>
          ${state.reviewStudents
            .map(
              (student) =>
                `<option value="${student.id}"${state.reviewStudentFilter === student.id ? ' selected' : ''}>${student.name}</option>`
            )
            .join('')}
        </select>
      </div>
      <div class="filter-count">待研判学生材料 <b>${state.pendingCount}</b></div>
      <div class="filter-spacer"></div>
      <span class="tag tag-cream">${icon('info')} 质性辅助 · 不打分</span>
    </div>

    <div class="review-layout">
      <div class="review-main panel panel-pad">
        <div class="panel-head">
          <div class="panel-title"><span class="kicker">MATERIAL REVIEW</span><h2>学生档案查阅</h2><p>点击一条材料，在右侧查看标签建议与自定义标签。</p></div>
          <span class="tag">${filtered.length} 条演示材料</span>
        </div>
        <div class="table-scroll-hint">${icon('arrow')} 左右滑动查看完整表格</div>
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr><th>姓名</th><th>材料类型</th><th>提交时间</th><th>标签建议</th><th></th></tr></thead>
            <tbody>
              ${filtered
                .map(
                  (student) => `
                  <tr data-review-id="${student.id}" class="${selected.id === student.id ? 'is-selected' : ''}">
                    <td><div class="name-cell"><span class="mini-avatar">${student.initial}</span>${student.name}</div></td>
                    <td>${student.type}</td>
                    <td>${student.time}</td>
                    <td>
                      <div class="table-tags">
                        ${student.tags.slice(0, 2).map((tag) => `<span class="tag">${tag}</span>`).join('')}
                        ${student.custom.slice(0, 1).map((tag) => `<span class="tag tag-cream">${tag}</span>`).join('')}
                        ${student.tags.length + student.custom.length > 3 ? `<span class="tag">+${student.tags.length + student.custom.length - 3}</span>` : ''}
                      </div>
                    </td>
                    <td><span class="row-arrow">${icon('chevronRight')}</span></td>
                  </tr>`
                )
                .join('')}
            </tbody>
          </table>
        </div>
        <div class="tag-hint">标签仅作教师研判的辅助线索，不自动生成分数，也不直接进入学生评价结果。</div>
      </div>

      <aside class="review-panel">
        <section class="panel">
          <div class="panel-pad">
            <div class="selected-student">
              <span class="mini-avatar">${selected.initial}</span>
              <div><strong>${selected.name}</strong><small>${selected.className} · ${selected.type} · ${selected.time}</small></div>
              <span class="tag ${selected.status === '已研判' ? 'tag-green' : 'tag-amber'}" style="margin-left:auto;">${selected.status}</span>
            </div>

            <div class="demo-material">
              <span>MATERIAL PREVIEW</span>
              <h4>${selected.materialTitle}</h4>
              <p>${selected.excerpt}</p>
            </div>

            <div class="tag-panel-title">四维指标标签推荐 <span>点击切换</span></div>
            <div class="tag-bank">
              ${DIMENSIONS.map(
                (dim) => `<button type="button" class="tag-option${selected.tags.includes(dim.name) ? ' is-active' : ''}" data-tag-toggle="${dim.name}">${dim.name}</button>`
              ).join('')}
            </div>

            <div class="tag-panel-title">自定义标签 <span>${selected.custom.length} 个</span></div>
            <div class="current-tags">
              ${selected.custom
                .map(
                  (tag) => `<span class="editable-tag">${escapeHtml(tag)}<button type="button" data-remove-editable-tag="${escapeHtml(tag)}" aria-label="移除标签">×</button></span>`
                )
                .join('') || '<span class="small muted">还没有自定义标签</span>'}
            </div>
            <form class="custom-tag-form" data-custom-tag-form>
              <input class="input-mini" type="text" maxlength="12" placeholder="输入自定义标签，如：文本细读" />
              <button class="btn btn-soft btn-sm" type="submit">${icon('plus')} 添加</button>
            </form>
            <div class="tag-hint">标签可修改、新增。建议使用描述性的词，而不是评价性的词。</div>

            <div class="review-actions">
              <button class="btn btn-ghost btn-sm" type="button" data-save-review-note>${icon('bookmark')} 暂存</button>
              <button class="btn btn-primary btn-sm" type="button" data-mark-reviewed>${selected.status === '已研判' ? icon('checkCircle') : icon('check')} ${selected.status === '已研判' ? '已研判' : '标记为已研判'}</button>
            </div>
          </div>
        </section>
      </aside>
    </div>
  `;
}

/* ---------------------------------------------------------
   教师端 — 多元研判与反馈输出
--------------------------------------------------------- */
function renderTeacherEvaluation() {
  const selected = getReviewStudent();
  let draft = {};
  try {
    draft = JSON.parse(localStorage.getItem('zhiyu-evaluation-draft') || '{}');
  } catch {
    draft = {};
  }
  return `
    ${pageHead({
      crumb: '多元研判与反馈输出',
      title: '多元研判与反馈输出',
      desc: '用一段具体的质性评语，帮助学生看见自己做对了什么、还可以往哪里走。',
      actions: `<span class="tag tag-cream">${icon('message')} 质性反馈</span>`,
    })}

    <div class="eval-layout">
      <form class="panel eval-form" data-evaluation-form>
        <div class="eval-student">
          <span class="mini-avatar">${selected.initial}</span>
          <div><strong>${selected.name}</strong><small>${selected.className} · ${selected.type} · ${selected.materialTitle}</small></div>
          <span class="tag tag-amber" style="margin-left:auto;">待反馈</span>
        </div>

        <div class="eval-field">
          <div class="field-label"><label for="qualitative">质性评语</label><span>请描述观察到的具体表现</span></div>
          <textarea class="textarea-lg" id="qualitative" name="qualitative" placeholder="例如：你把“为校园广播站写推荐”作为真实任务，学生在文本细读中表现出比平时更明确的读者意识……">${escapeHtml(draft.qualitative || '')}</textarea>
        </div>

        <div class="eval-field">
          <div class="field-label"><label for="suggestion">发展改进建议</label><span>给下一步一个可行动的入口</span></div>
          <textarea class="textarea-lg" id="suggestion" name="suggestion" placeholder="例如：下一次可以保留两版任务单，比较学生在不同支架下的反应，并记录一条学生访谈证据……">${escapeHtml(draft.suggestion || '')}</textarea>
        </div>

        <div class="eval-actions">
          <small>反馈将保存在本机，仅用于演示。</small>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button class="btn btn-ghost btn-sm" type="button" data-save-eval-draft>${icon('bookmark')} 保存草稿</button>
            <button class="btn btn-primary" type="submit">提交反馈 ${icon('arrow')}</button>
          </div>
        </div>
      </form>

      <aside class="eval-side">
        <div class="ban-callout">
          <div class="ban-icon">${icon('alert')}</div>
          <h3>本平台不提供打分功能</h3>
          <p>平台禁止直接给出单一量化分数，无分数录入入口。请用具体的观察、描述和建议，替代一个数字。</p>
        </div>
        <div class="feedback-principles">
          <h3>一条好的质性反馈</h3>
          <ol>
            <li>指出一个具体的课堂事实，而不是抽象评价。</li>
            <li>说明这个尝试为什么值得继续，或哪里可以调整。</li>
            <li>给出一个足够小、下一次就能做的行动建议。</li>
          </ol>
        </div>
        <div class="platform-note">${icon('info')} 平台仅提供质性评语与发展建议两个文本区域；不设评分项、不生成综合分，也不做学生个体排名。</div>
      </aside>
    </div>
  `;
}

/* ---------------------------------------------------------
   教师端 — 群体情况统计
--------------------------------------------------------- */
function renderTeacherStats() {
  return `
    ${pageHead({
      crumb: '群体情况统计',
      title: '群体情况统计',
      desc: '可视化展示班级整体创新实践参与情况，帮助教师发现培养短板，优化课堂与实习指导；仅做班级群体数据分析，不展示学生个人排名。',
      actions: `<span class="tag tag-cream">${icon('chart')} 仅群体数据</span>`,
    })}

    <div class="filter-bar">
      <div class="filter-field"><label for="statsClass">班级</label>
        <select class="select-mini" id="statsClass"><option>汉语言文学（师范）2301班</option></select>
      </div>
      <span class="filter-count">统计周期 <b>2026 秋</b> · 9 月 — 12 月</span>
      <div class="filter-spacer"></div>
      <span class="tag">${icon('lock')} 不展示学生个人排名</span>
    </div>

    <div class="class-stats">
      <div class="class-stat"><span>班级学生数</span><b>42</b><small>人</small></div>
      <div class="class-stat"><span>材料提交参与率</span><b>86%</b><small>较上月 +8%</small></div>
      <div class="class-stat"><span>创新实践参与率</span><b>78%</b><small>较上月 +16%</small></div>
      <div class="class-stat"><span>待研判材料</span><b>14</b><small class="warm">建议本周完成</small></div>
    </div>

    <div class="stat-grid-2">
      <div class="panel panel-pad">
        <div class="panel-head">
          <div class="panel-title"><span class="kicker">PARTICIPATION TREND</span><h2>班级整体参与趋势</h2><p>材料提交与创新实践活动的群体参与率</p></div>
          <span class="tag tag-green">整体上升</span>
        </div>
        ${lineChartSvg({ labels: ['9 月', '10 月', '11 月', '12 月'], values: [46, 62, 78, 86] })}
        <div class="legend-row"><span><i class="legend-dot" style="background:#4e7fc7"></i>材料提交参与率</span><span class="muted">不展示个人数据</span></div>
      </div>

      <div class="panel panel-pad">
        <div class="panel-head">
          <div class="panel-title"><span class="kicker">MATERIAL MIX</span><h2>材料类型分布</h2></div>
        </div>
        <div class="donut-wrap">
          <div class="donut"><div class="donut-center"><div><b>302</b><span>份材料</span></div></div></div>
          <div class="donut-legend">
            <div class="donut-legend-row"><span><i class="legend-dot" style="background:#5c8bd8"></i>教学设计</span><b>38%</b></div>
            <div class="donut-legend-row"><span><i class="legend-dot" style="background:#9bbce3"></i>实习反思</span><b>26%</b></div>
            <div class="donut-legend-row"><span><i class="legend-dot" style="background:#d4b88f"></i>教研记录</span><b>22%</b></div>
            <div class="donut-legend-row"><span><i class="legend-dot" style="background:#a9c9b9"></i>教学实践</span><b>14%</b></div>
          </div>
        </div>
        <div class="chart-footnote">不同材料类型占比用于观察班级参与结构，不代表质量高低。</div>
        <div class="insight-callout" style="margin-top:14px;">
          ${icon('spark')}
          <div><h3>从材料结构看培养侧重</h3><p>教学设计类材料占比最高，说明课堂设计意识正在形成；教研记录仍有提升空间，可把它设计成更轻量的日常动作。</p></div>
        </div>
      </div>
    </div>

    <div class="stat-grid-2" style="margin-top:18px;">
      <div class="panel panel-pad">
        <div class="panel-head">
          <div class="panel-title"><span class="kicker">FOUR DIMENSIONS</span><h2>四维活动覆盖情况</h2><p>班级层面参与创新实践活动的覆盖比例</p></div>
        </div>
        <div class="bar-list">
          ${DIMENSIONS.map(
            (dim, index) => `
            <div class="bar-row">
              <span>${dim.name}</span>
              <div class="bar-track"><i style="width:${[82, 68, 88, 63][index]}%"></i></div>
              <b>${[82, 68, 88, 63][index]}%</b>
            </div>`
          ).join('')}
        </div>
      </div>
      <div class="panel panel-pad">
        <div class="panel-head"><div class="panel-title"><span class="kicker">INSIGHT</span><h2>培养短板识别</h2></div></div>
        <div class="insight-callout" style="margin-bottom:12px;">
          ${icon('target')}
          <div><h3>教研记录参与度相对较低</h3><p>22% 的材料为教研记录。可以尝试把“听课—评课”设计成低门槛的小组任务，让教研成为日常。</p></div>
        </div>
        <div class="insight-callout">
          ${icon('layers')}
          <div><h3>跨学科实践证据仍可补充</h3><p>教学实践材料中的跨学科协作证据较少，建议在下一阶段增加一次跨学科共备或联合课堂尝试。</p></div>
        </div>
      </div>
    </div>

    <div class="privacy-note">${icon('lock')} 本页面仅做班级群体数据分析，不展示学生个人排名，也不以任何单一指标评价学生个体。</div>
  `;
}

/* ---------------------------------------------------------
   院校端 — 工作台
--------------------------------------------------------- */
function renderInstitutionHome() {
  return `
    <div class="institution-hero">
      <div style="position:relative;z-index:2;">
        ${eyebrow('INSTITUTION WORKSPACE')}
        <h1>让每一条成长记录，<br />成为培养方案修订的<em style="font-style:normal;color:var(--blue-deep);">温柔依据。</em></h1>
        <p class="lead">从指标库到群体质量报告，用过程性数据理解师范生的创新实践，而不是用一把尺子丈量所有人。</p>
        <div class="institution-hero-metrics">
          <div class="institution-hero-metric"><b>1,286</b><span>全院师范生</span></div>
          <div class="institution-hero-metric"><b>4,320</b><span>过程性材料</span></div>
          <div class="institution-hero-metric"><b>6</b><span>覆盖专业</span></div>
          <div class="institution-hero-metric"><b>1</b><span>本学期质量报告</span></div>
        </div>
      </div>
    </div>

    <div class="section-head" style="margin-top:27px;">
      <div>${eyebrow('INSTITUTIONAL TOOLS')}<h2 style="margin-top:8px;">院校端的三件事</h2></div>
      <p>指标配置 · 规则治理 · 质量洞察</p>
    </div>

    <div class="entry-grid three">
      <a class="entry-card" href="#/institution/indicators">
        <div class="entry-top"><div class="icon-tile">${icon('settings')}</div><span class="entry-no">01</span></div>
        <h3>指标库模板配置</h3>
        <p>围绕四维创新能力，自主增删标签，形成适合本校师范培养目标的指标语言。</p>
        <span class="entry-link">配置指标库 ${icon('arrow')}</span>
      </a>
      <a class="entry-card" href="#/institution/rules">
        <div class="entry-top"><div class="icon-tile cream">${icon('shield')}</div><span class="entry-no">02</span></div>
        <h3>规则管理</h3>
        <p>设置档案材料入库、可见范围与版本留痕，让每一次记录都清楚自己的边界。</p>
        <span class="entry-link">查看规则设置 ${icon('arrow')}</span>
      </a>
      <a class="entry-card" href="#/institution/report">
        <div class="entry-top"><div class="icon-tile green">${icon('pie')}</div><span class="entry-no">03</span></div>
        <h3>群体质量报告输出</h3>
        <p>汇总全院师范生创新实践数据，输出用于培养方案修订与课程改革的群体报告。</p>
        <span class="entry-link">查看质量报告 ${icon('arrow')}</span>
      </a>
    </div>

    <div class="institution-main-grid">
      <div class="panel panel-pad">
        <div class="panel-head">
          <div class="panel-title"><span class="kicker">RECENT WORK</span><h2>近期工作</h2></div>
          <span class="tag tag-green">运行正常</span>
        </div>
        <div class="activity-list">
          <div class="activity-item"><div class="activity-icon">${icon('settings')}</div><div class="activity-copy"><strong>完成了 2026 版四维指标库的第一次院系意见征集</strong><small>文学院 · 教师教育中心 · 10 月 30 日</small></div></div>
          <div class="activity-item"><div class="activity-icon cream">${icon('shield')}</div><div class="activity-copy"><strong>更新档案材料入库与隐私规则</strong><small>明确材料仅育人参考，不对接综测加分 · 10 月 28 日</small></div></div>
          <div class="activity-item"><div class="activity-icon green">${icon('pie')}</div><div class="activity-copy"><strong>生成 2025—2026 学年师范生创新实践质量报告</strong><small>覆盖 6 个专业 · 1,286 名学生 · 10 月 22 日</small></div></div>
        </div>
      </div>
      <div class="panel panel-pad panel-cream">
        <span class="kicker">INDICATOR SNAPSHOT</span>
        <h2 style="font-size:23px;margin-top:8px;">四维指标库</h2>
        <p class="small muted" style="margin-top:5px;line-height:1.8;">当前版本 v2026.10 · 4 个维度 / 20 个标签</p>
        <div class="tag-bank" style="margin-top:15px;">
          ${DIMENSIONS.map((dim) => `<span class="tag">${dim.name}</span>`).join('')}
        </div>
        <div class="divider"></div>
        <div class="panel-title"><span class="kicker">REPORT</span><h3 style="font-size:15px;">下一份报告预计生成</h3></div>
        <p class="small muted" style="margin-top:5px;">2027 年 1 月 · 基于本学期过程性材料</p>
        <a class="text-link" style="margin-top:16px;" href="#/institution/report">预览报告模板 ${icon('arrow')}</a>
      </div>
    </div>
  `;
}

/* ---------------------------------------------------------
   院校端 — 指标库
--------------------------------------------------------- */
function renderIndicators() {
  return `
    ${pageHead({
      crumb: '指标库模板配置',
      title: '指标库模板配置',
      desc: '四维指标库设置界面。院校可自主增删、调整标签，适配本校师范培养目标，不作为自动打分依据。',
      actions: `<button class="btn btn-ghost btn-sm" type="button" data-reset-indicators>${icon('refresh')} 恢复默认</button><button class="btn btn-primary btn-sm" type="button" data-save-indicators>${icon('check')} 保存配置</button>`,
    })}

    <div class="stats-row">
      <div class="stat-card"><span class="stat-label">指标维度</span><div class="stat-value"><b>${state.indicators.length}</b><small>个</small></div></div>
      <div class="stat-card"><span class="stat-label">标签总数</span><div class="stat-value"><b>${state.indicators.reduce((n, dim) => n + dim.tags.length, 0)}</b><small>个</small></div></div>
      <div class="stat-card"><span class="stat-label">当前版本</span><div class="stat-value"><b>v2026.10</b></div></div>
      <div class="stat-card"><span class="stat-label">适用范围</span><div class="stat-value"><b>文学院</b><small>师范专业</small></div></div>
    </div>

    <div class="institution-main-grid">
      <div class="dimension-grid">
        ${state.indicators
          .map(
            (dim, index) => `
            <section class="dimension-card" style="--dim-color:${dim.color}">
              <div class="dimension-card-head"><h3>${dim.name}</h3><span>0${index + 1}</span></div>
              <p>${dim.desc}</p>
              <div class="tag-editable-list">
                ${dim.tags
                  .map(
                    (tag) => `<span class="tag-removable">${escapeHtml(tag)}<button type="button" data-remove-indicator="${dim.id}" data-tag="${escapeHtml(tag)}" aria-label="删除标签">×</button></span>`
                  )
                  .join('')}
              </div>
              <form class="dimension-add" data-indicator-form data-dimension="${dim.id}">
                <input type="text" maxlength="12" placeholder="新增一个标签…" />
                <button type="submit" aria-label="新增标签">${icon('plus')}</button>
              </form>
            </section>`
          )
          .join('')}
      </div>
      <aside class="config-side">
        <div class="config-note">
          <h3>指标库配置说明</h3>
          <p>指标是理解成长的语汇，不是评价的刻度。标签应当帮助教师看见证据，而不是把学生装进一个固定的格子。</p>
          <ul>
            <li>标签建议使用可观察、可描述的词</li>
            <li>避免使用“优秀 / 不合格”等评价性词</li>
            <li>标签仅作研判辅助，不自动生成分数</li>
            <li>院校可结合自身培养目标自由调整</li>
          </ul>
        </div>
        <div class="panel">
          <div class="panel-title"><span class="kicker">GOVERNANCE</span><h3 style="font-size:14px;">指标库版本</h3></div>
          <p class="small muted" style="margin-top:6px;line-height:1.8;">每次保存将形成新的版本记录，便于回溯指标调整的原因与时间。演示环境暂不连接后端。</p>
          <div class="divider"></div>
          <div style="display:flex;flex-wrap:wrap;gap:5px;"><span class="tag tag-cream">v2026.10 · 当前</span><span class="tag">v2026.06 · 历史</span></div>
        </div>
      </aside>
    </div>
  `;
}

/* ---------------------------------------------------------
   院校端 — 规则管理
--------------------------------------------------------- */
function renderRules() {
  const switchRow = (key, title, desc) => `
    <div class="rule-row">
      <div class="rule-copy"><strong>${title}</strong><small>${desc}</small></div>
      <label class="switch"><input type="checkbox" data-rule="${key}" ${state.rules[key] ? 'checked' : ''}/><span></span></label>
    </div>
  `;

  const materialRow = (key, label) => `
    <label class="check-card">
      <input type="checkbox" data-rule-material="${key}" ${state.rules[key] ? 'checked' : ''}/>
      <span>${label}</span>
    </label>
  `;

  return `
    ${pageHead({
      crumb: '规则管理',
      title: '规则管理',
      desc: '提前说清楚材料如何入库、谁能看见、如何留痕。规则的边界越清楚，记录才越让人安心。',
      actions: `<button class="btn btn-primary btn-sm" type="button" data-save-rules>${icon('check')} 保存规则</button>`,
    })}

    <div class="rules-layout">
      <div class="panel rules-panel">
        <div class="rules-group">
          <h2>档案材料入库设置</h2>
          <p>决定哪些材料可以进入学生成长档案袋，以及入库后的基本行为。</p>
          <div class="rule-list">
            ${switchRow('autoArchive', '材料入库后自动归入学生成长档案袋', '学生提交材料后进入个人档案袋，且可随时补充说明。')}
            ${switchRow('versioning', '保留材料修改痕迹与版本', '每次修改保留版本记录，让过程本身也成为成长的一部分。')}
            ${switchRow('allowWithdraw', '允许学生撤回尚未研判的材料', '在教师开始研判前，学生可以撤回并重新整理材料。')}
            ${switchRow('onlyVisible', '材料仅本人与指导教师可见', '不向其他学生、班级或公开页面展示材料原文。')}
          </div>
        </div>

        <div class="rules-group">
          <h2>入库材料范围</h2>
          <p>可勾选进入学生成长档案袋的材料类型。</p>
          <div class="check-grid">
            ${materialRow('materialPlan', '教学设计方案')}
            ${materialRow('materialRevision', '教学设计方案修改')}
            ${materialRow('materialReflection', '实习反思')}
            ${materialRow('materialResearch', '教研记录')}
            ${materialRow('materialPractice', '教学实践材料')}
          </div>
        </div>

        <div class="rules-group">
          <h2>报告与使用边界</h2>
          <div class="rule-list">
            ${switchRow('semesterReport', '每学期生成一次群体质量报告', '仅汇总群体数据，不生成学生个体排名或综合分。')}
          </div>
        </div>
      </div>

      <aside class="rules-side">
        <div class="rules-note">
          <h3>材料入库的边界</h3>
          <p>档案材料仅育人参考，不自动对接综测加分，评奖沿用学校原有制度。任何材料都不应被转化为单一量化分数。</p>
        </div>
        <div class="panel">
          <div class="panel-title"><span class="kicker">PRINCIPLES</span><h3 style="font-size:14px;">我们为什么这样设置</h3></div>
          <p style="margin-top:7px;">成长材料首先属于学生本人。平台只提供理解和反馈的工具，不替代学校的评价制度，也不把过程性记录变成另一种负担。</p>
          <ul style="margin:10px 0 0;padding-left:16px;color:var(--muted);font-size:9px;line-height:1.9;">
            <li>可见范围默认最小化</li>
            <li>学生拥有材料版本的知情权</li>
            <li>群体报告不反向推导个人排名</li>
          </ul>
        </div>
        <div class="panel">
          <div class="panel-title"><span class="kicker">CURRENT RULES</span><h3 style="font-size:14px;">当前设置</h3></div>
          <p class="small muted" style="margin-top:7px;">已启用 <strong style="color:var(--ink-2)">${Object.values(state.rules).filter(Boolean).length}</strong> 条规则。保存后仅在本机演示环境中生效。</p>
        </div>
      </aside>
    </div>
  `;
}

/* ---------------------------------------------------------
   院校端 — 群体质量报告
--------------------------------------------------------- */
function renderReport() {
  return `
    <div class="print-only report-print-head">
      <div><h1>文学院师范生创新实践质量报告</h1><p>2025—2026 学年 · 智育成长画像平台</p></div>
      <div class="report-print-meta">群体报告 · 非个体排名<br />打印日期：2026 年 11 月</div>
    </div>

    ${pageHead({
      crumb: '群体质量报告输出',
      title: '群体质量报告输出',
      desc: '汇总全院师范生创新实践数据，为人才培养方案修订与课程改革提供群体层面的参考。',
      actions: `<button class="btn btn-primary btn-sm" type="button" data-print-report>${icon('download')} 导出 PDF</button>`,
    })}

    <div class="report-cover">
      <div>
        <span class="kicker">ANNUAL QUALITY REPORT · 2025—2026</span>
        <h2 style="margin-top:8px;">文学院师范生创新实践质量报告</h2>
        <p class="report-sub">数据范围：6 个师范专业 · 1,286 名学生 · 仅供群体分析</p>
        <h3>从“材料提交”走向“持续实践”</h3>
        <p>本学期师范生创新实践参与率稳步上升，教学设计类材料保持较高覆盖；教研记录与跨学科实践证据仍有提升空间。建议在下一阶段加强教研方法支持与跨学科共备机制。</p>
      </div>
      <div class="report-meta">报告编号：ZY-2026-001<br />生成日期：2026.10.30<br />用途：培养方案修订 / 课程改革</div>
    </div>

    <div class="report-metrics">
      <div class="report-metric"><span>师范生总数</span><b>1,286</b><small>6 个专业</small></div>
      <div class="report-metric"><span>材料提交率</span><b>84.6%</b><small>较上学期 +9.2%</small></div>
      <div class="report-metric"><span>创新实践参与率</span><b>76.3%</b><small>较上学期 +12.4%</small></div>
      <div class="report-metric"><span>覆盖培养环节</span><b>8</b><small>课程 / 实习 / 教研</small></div>
    </div>

    <div class="report-grid">
      <div class="chart-card">
        <div class="chart-card-head"><div><h3>全院创新实践参与趋势</h3><p>2026 年 9 月 — 12 月 · 群体参与率</p></div><span class="tag tag-green">↑ 上升</span></div>
        ${lineChartSvg({ labels: ['9 月', '10 月', '11 月', '12 月'], values: [48, 63, 76, 85] })}
        <div class="legend-row"><span><i class="legend-dot" style="background:#4e7fc7"></i>创新实践参与率</span></div>
      </div>
      <div class="chart-card">
        <div class="chart-card-head"><div><h3>四维活动覆盖</h3><p>全院师范生 · 群体覆盖比例</p></div></div>
        <div class="bar-list">
          ${DIMENSIONS.map(
            (dim, index) => `
            <div class="bar-row">
              <span>${dim.name}</span>
              <div class="bar-track"><i style="width:${[81, 67, 86, 62][index]}%"></i></div>
              <b>${[81, 67, 86, 62][index]}%</b>
            </div>`
          ).join('')}
        </div>
        <div class="chart-footnote">以上为群体覆盖率示例，不用于学生个体排名或筛选。</div>
      </div>
    </div>

    <div class="report-grid" style="margin-top:14px;">
      <div class="chart-card">
        <div class="chart-card-head"><div><h3>材料类型结构</h3><p>全院过程性材料 · 按材料类型汇总</p></div></div>
        <div class="donut-wrap">
          <div class="donut" style="background:conic-gradient(#5c8bd8 0 36%, #9bbce3 36% 62%, #d4b88f 62% 83%, #a9c9b9 83% 100%);"><div class="donut-center"><div><b>4,320</b><span>材料总量</span></div></div></div>
          <div class="donut-legend">
            <div class="donut-legend-row"><span><i class="legend-dot" style="background:#5c8bd8"></i>教学设计</span><b>36%</b></div>
            <div class="donut-legend-row"><span><i class="legend-dot" style="background:#9bbce3"></i>实习反思</span><b>26%</b></div>
            <div class="donut-legend-row"><span><i class="legend-dot" style="background:#d4b88f"></i>教研记录</span><b>21%</b></div>
            <div class="donut-legend-row"><span><i class="legend-dot" style="background:#a9c9b9"></i>教学实践</span><b>17%</b></div>
          </div>
        </div>
      </div>
      <div class="chart-card">
        <div class="chart-card-head"><div><h3>培养环节覆盖率</h3><p>课程、实习与教研的群体覆盖</p></div></div>
        <div class="bar-list">
          <div class="bar-row"><span>课程学习</span><div class="bar-track"><i style="width:92%"></i></div><b>92%</b></div>
          <div class="bar-row"><span>教育实习</span><div class="bar-track"><i style="width:88%"></i></div><b>88%</b></div>
          <div class="bar-row"><span>教研参与</span><div class="bar-track"><i style="width:64%"></i></div><b>64%</b></div>
          <div class="bar-row"><span>跨学科实践</span><div class="bar-track"><i style="width:41%"></i></div><b>41%</b></div>
        </div>
      </div>
    </div>

    <div class="report-note">${icon('info')} 本报告仅做群体层面分析，支持导出 PDF 用于人才培养方案修订与课程改革，不用于学生个体排名筛选，也不包含任何形式的量化评分。</div>
  `;
}

/* ---------------------------------------------------------
   小程序二维码
--------------------------------------------------------- */
function renderQr() {
  return `
    <section class="qr-page">
      <div class="qr-card">
        <div class="qr-brand">
          <span class="brand-mark" style="width:26px;height:26px;border-radius:8px;">${icon('leaf')}</span>
          智育成长画像 · 小程序
        </div>
        <div class="qr-frame">${mockQrSvg()}</div>
        <h1 class="qr-title">扫码进入「智育成长画像」小程序</h1>
        <p class="qr-sub">记录成长、查看画像、接收资源。让每一次教学尝试，都有迹可循。</p>
        <span class="qr-badge">${icon('info')} 模拟二维码 · 仅图片，无法真实跳转</span>
        <div class="qr-actions">
          <a class="btn btn-ghost btn-sm" href="#/welcome">${icon('arrow')} 返回欢迎页</a>
          <a class="btn btn-primary btn-sm" href="#/student">进入学生端 ${icon('arrow')}</a>
        </div>
        <p class="qr-foot">本页面用于计划书与路演展示场景，二维码为模拟图，不连接真实小程序。</p>
      </div>
    </section>
  `;
}

/* ---------------------------------------------------------
   交互事件
--------------------------------------------------------- */
function openModal(content) {
  const modal = $('#modal');
  $('#modalBody').innerHTML = content;
  modal.hidden = false;
}

function closeModal() {
  const modal = $('#modal');
  if (modal) modal.hidden = true;
}

function openResourceModal(resource) {
  if (!resource) return;
  openModal(`
    <div class="modal-kicker">${resource.category}</div>
    <h2 id="modalTitle">${resource.title}</h2>
    <p>${resource.summary}</p>
    <div class="modal-tags">${resource.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}</div>
    <div class="modal-tags"><span class="tag tag-cream">${resource.source}</span><span class="tag">${resource.time}</span></div>
    <div class="modal-note">资源仅作参考，不强制任务。你可以读一读，也可以暂时放下。</div>
    <div style="display:flex;gap:8px;margin-top:18px;flex-wrap:wrap;">
      <button class="btn btn-soft btn-sm" type="button" data-close-modal>${icon('bookmark')} 稍后阅读</button>
      <a class="btn btn-primary btn-sm" href="#/student/resources" data-close-modal>回到资源列表 ${icon('arrow')}</a>
    </div>
  `);
}

function saveReflection() {
  persistReflection();
  $$('.save-state').forEach((el) => {
    el.innerHTML = '<i></i> 已保存';
  });
}

function scheduleReflectionSave() {
  clearTimeout(reflectionSaveTimer);
  reflectionSaveTimer = setTimeout(() => {
    persistReflection();
    $$('.save-state').forEach((el) => {
      el.innerHTML = '<i></i> 已自动保存';
    });
  }, 500);
}

function updateReflectionMetrics() {
  const fields = $$('[data-reflection-key]');
  let filled = 0;
  let total = 0;
  fields.forEach((field) => {
    const key = field.dataset.reflectionKey;
    const value = field.value;
    state.reflection[key] = value;
    total += value.length;
    if (value.trim().length) filled += 1;
    const count = document.querySelector(`[data-reflection-count="${key}"]`);
    if (count) count.textContent = `${value.length} 字`;
  });
  const bar = $('[data-progress-bar]');
  const label = $('[data-progress-label]');
  if (bar) bar.style.width = `${Math.round((filled / REFLECTION_FIELDS.length) * 100)}%`;
  if (label) label.textContent = `${filled} / ${REFLECTION_FIELDS.length} 个模块`;
  const totalEl = $('.reflection-actions .small.muted');
  if (totalEl) totalEl.textContent = `共 ${total} 字 · 仅保存在当前浏览器`;
  scheduleReflectionSave();
}

function saveEvaluationDraft(notify = true) {
  const form = $('[data-evaluation-form]');
  if (!form) return;
  const data = {
    qualitative: form.querySelector('[name="qualitative"]')?.value || '',
    suggestion: form.querySelector('[name="suggestion"]')?.value || '',
  };
  try {
    localStorage.setItem('zhiyu-evaluation-draft', JSON.stringify(data));
  } catch {
    /* ignore */
  }
  if (notify) showToast('反馈草稿已保存到本机');
}

document.addEventListener('click', (event) => {
  const roleButton = event.target.closest('[data-role]');
  if (roleButton) {
    location.hash = ROLE_HOME[roleButton.dataset.role];
    return;
  }

  if (event.target.closest('[data-close-modal]')) {
    closeModal();
    return;
  }

  const resourceFilter = event.target.closest('[data-resource-filter]');
  if (resourceFilter) {
    state.resourceFilter = resourceFilter.dataset.resourceFilter;
    $$('.filter-chip').forEach((chip) => chip.classList.toggle('is-active', chip.dataset.resourceFilter === state.resourceFilter));
    $$('#resourceList .resource-card').forEach((card) => {
      card.hidden = state.resourceFilter !== '全部' && card.dataset.category !== state.resourceFilter;
    });
    return;
  }

  const resourceButton = event.target.closest('[data-resource-id]');
  if (resourceButton) {
    openResourceModal(getResource(resourceButton.dataset.resourceId));
    return;
  }

  const reviewRow = event.target.closest('[data-review-id]');
  if (reviewRow) {
    state.selectedReviewId = reviewRow.dataset.reviewId;
    rerenderPreserveScroll();
    return;
  }

  const tagToggle = event.target.closest('[data-tag-toggle]');
  if (tagToggle) {
    const student = getReviewStudent();
    const tag = tagToggle.dataset.tagToggle;
    if (student.tags.includes(tag)) student.tags = student.tags.filter((item) => item !== tag);
    else student.tags.push(tag);
    rerenderPreserveScroll();
    return;
  }

  const removeEditableTag = event.target.closest('[data-remove-editable-tag]');
  if (removeEditableTag) {
    const student = getReviewStudent();
    student.custom = student.custom.filter((item) => item !== removeEditableTag.dataset.removeEditableTag);
    rerenderPreserveScroll();
    return;
  }

  const markButton = event.target.closest('[data-mark-reviewed]');
  if (markButton) {
    const student = getReviewStudent();
    if (student.status !== '已研判') {
      student.status = '已研判';
      state.reviewedCount += 1;
      state.pendingCount = Math.max(0, state.pendingCount - 1);
      rerenderPreserveScroll();
      showToast(`已将 ${student.name} 的材料标记为已研判`);
    } else {
      showToast('这份材料已经标记为已研判');
    }
    return;
  }

  if (event.target.closest('[data-save-review-note]')) {
    showToast('本次标签与研判进度已暂存在本机');
    return;
  }

  const removeIndicator = event.target.closest('[data-remove-indicator]');
  if (removeIndicator) {
    const dim = state.indicators.find((item) => item.id === removeIndicator.dataset.removeIndicator);
    const tag = removeIndicator.dataset.tag;
    if (dim) dim.tags = dim.tags.filter((item) => item !== tag);
    rerenderPreserveScroll();
    return;
  }

  if (event.target.closest('[data-save-indicators]')) {
    showToast('四维指标库配置已保存（演示）');
    return;
  }

  if (event.target.closest('[data-reset-indicators]')) {
    state.indicators = DEFAULT_INDICATORS.map((item) => ({ ...item, tags: [...item.tags] }));
    rerenderPreserveScroll();
    showToast('已恢复默认指标库');
    return;
  }

  if (event.target.closest('[data-save-rules]')) {
    $$('[data-rule]').forEach((input) => {
      state.rules[input.dataset.rule] = input.checked;
    });
    $$('[data-rule-material]').forEach((input) => {
      state.rules[input.dataset.ruleMaterial] = input.checked;
    });
    rerenderPreserveScroll();
    showToast('规则设置已保存（演示）');
    return;
  }

  if (event.target.closest('[data-save-reflection]')) {
    saveReflection();
    showToast('反思草稿已保存到本机');
    return;
  }

  if (event.target.closest('[data-save-eval-draft]')) {
    saveEvaluationDraft();
    return;
  }

  if (event.target.closest('[data-print-report]')) {
    showToast('正在打开打印面板，可选择“另存为 PDF”');
    setTimeout(() => window.print(), 320);
    return;
  }
});

document.addEventListener('change', (event) => {
  if (event.target.matches('[data-review-filter]')) {
    state.reviewStudentFilter = event.target.value;
    rerenderPreserveScroll();
  }
  if (event.target.matches('[data-rule], [data-rule-material]')) {
    const key = event.target.dataset.rule || event.target.dataset.ruleMaterial;
    if (key) state.rules[key] = event.target.checked;
  }
});

document.addEventListener('submit', (event) => {
  const customTagForm = event.target.closest('[data-custom-tag-form]');
  if (customTagForm) {
    event.preventDefault();
    const input = customTagForm.querySelector('input');
    const value = input.value.trim();
    if (!value) return;
    const student = getReviewStudent();
    if (!student.custom.includes(value)) {
      student.custom.push(value);
      rerenderPreserveScroll();
      showToast('已添加自定义标签');
    } else {
      showToast('这个标签已经存在');
    }
    return;
  }

  const indicatorForm = event.target.closest('[data-indicator-form]');
  if (indicatorForm) {
    event.preventDefault();
    const dim = state.indicators.find((item) => item.id === indicatorForm.dataset.dimension);
    const input = indicatorForm.querySelector('input');
    const value = input.value.trim();
    if (!dim || !value) return;
    if (dim.tags.includes(value)) {
      showToast('这个标签已经存在');
      return;
    }
    dim.tags.push(value);
    rerenderPreserveScroll();
    showToast('标签已添加到指标库');
    return;
  }

  const reflectionForm = event.target.closest('[data-reflection-form]');
  if (reflectionForm) {
    event.preventDefault();
    $$('[data-reflection-key]').forEach((field) => {
      state.reflection[field.dataset.reflectionKey] = field.value;
    });
    persistReflection();
    saveReflection();
    showToast('这次反思已保存到本机');
    return;
  }

  const evaluationForm = event.target.closest('[data-evaluation-form]');
  if (evaluationForm) {
    event.preventDefault();
    saveEvaluationDraft(false);
    showToast('反馈已保存（演示，不进入评分系统）');
  }
});

document.addEventListener('input', (event) => {
  if (event.target.matches('[data-reflection-key]')) {
    updateReflectionMetrics();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});

/* ---------------------------------------------------------
   启动
--------------------------------------------------------- */
if (!location.hash) {
  history.replaceState(null, '', '#/welcome');
}

render();
window.addEventListener('hashchange', render);

