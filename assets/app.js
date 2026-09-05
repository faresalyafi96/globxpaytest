/* ============================================================================
   GlobXpay Knowledge Base — منطق التطبيق
   لا يوجد أي كود متعلق بالمساعد الذكي أو المحادثة.
   ============================================================================ */
'use strict';

const $  = id => document.getElementById(id);
const el = sel => document.querySelector(sel);

/* ============================== الحالة واللغة ============================== */
const LS = { lang: 'gxkb:lang', recent: 'gxkb:recent', views: 'gxkb:views', collapsed: 'gxkb:collapsed', theme: 'gxkb:theme' };

function store(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch { return fallback; }
}
function save(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch { /* التخزين غير متاح */ }
}

let lang = store(LS.lang, 'ar');
if (!I18N[lang]) lang = 'ar';
let t = I18N[lang];

function applyLang() {
    t = I18N[lang];
    if (typeof buildIndex === 'function') buildIndex();
    document.documentElement.lang = t.lang;
    document.documentElement.dir = t.dir;
    save(LS.lang, lang);
    renderShell();
    route();
}

function toggleLang() {
    lang = lang === 'ar' ? 'en' : 'ar';
    applyLang();
}

/* ================================ الثيم ================================ */
/* يبدأ من تفضيل النظام ما لم يكن المستخدم قد اختار يدوياً */
let theme = store(LS.theme, null) ||
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

function applyTheme() {
    document.documentElement.setAttribute('data-theme', theme);
    const label = theme === 'dark' ? t.themeLight : t.themeDark;
    const btn = $('themeBtn');
    if (btn) { btn.setAttribute('aria-label', label); btn.title = label; }
}

function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    save(LS.theme, theme);
    applyTheme();
}

/* ================================ أدوات ================================ */
function esc(s) {
    return String(s)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* تطبيع عربي: يوحّد الألف والتاء المربوطة ويحذف التشكيل — يحسّن البحث الجزئي */
function norm(s) {
    return String(s).toLowerCase()
        .replace(/[\u064B-\u0652\u0640]/g, '')
        .replace(/[أإآٱ]/g, 'ا')
        .replace(/ى/g, 'ي')
        .replace(/ة/g, 'ه')
        .replace(/[ؤئ]/g, 'ء')
        .replace(/\s+/g, ' ')
        .trim();
}

const ICON = {
    home:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l9-8 9 8M5 10v10h14V10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    faq:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 015 .3c0 1.7-2.5 2-2.5 3.7M12 17h.01" stroke-linecap="round"/></svg>',
    contact: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1z" stroke-linejoin="round"/></svg>',
    mail:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6" stroke-linecap="round"/></svg>',
    search:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3" stroke-linecap="round"/></svg>',
    chev:    '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    sep:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    down:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 19h16" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    link:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.5.5l2-2a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7.5-.5l-2 2a5 5 0 007 7l1-1" stroke-linecap="round"/></svg>',
    print:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9V3h12v6M6 18H4v-6h16v6h-2M8 14h8v7H8z" stroke-linejoin="round"/></svg>',
    clock:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" stroke-linecap="round"/></svg>',
    star:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l2.6 5.8 6.4.7-4.8 4.2 1.4 6.3L12 16.8 6.4 20l1.4-6.3L3 9.5l6.4-.7L12 3z" stroke-linejoin="round"/></svg>',
    globe:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 010 18a15 15 0 010-18z"/></svg>',
    menu:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round"/></svg>',
    x:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12" stroke-linecap="round"/></svg>',
    panel:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/></svg>'
};


/* ======================== المحتوى حسب اللغة ========================
   يعيد النسخة الإنجليزية إن وُجدت، وإلا يرجع للعربية تلقائياً. */
function aTitle(a) {
    if (lang === 'en') {
        if (typeof ARTICLES_EN !== 'undefined' && ARTICLES_EN[a.id]) return ARTICLES_EN[a.id].title;
        if (a.category === 'forms' && typeof FORMS_EN !== 'undefined' && FORMS_EN[a.title]) return FORMS_EN[a.title];
    }
    return a.title;
}

function aContent(a) {
    if (lang === 'en' && typeof ARTICLES_EN !== 'undefined' && ARTICLES_EN[a.id]) return ARTICLES_EN[a.id].content;
    return a.content;
}

function aSteps(a) {
    if (lang === 'en' && a.category === 'forms' && typeof FORM_STEPS_EN !== 'undefined') {
        if (a.file && FORM_STEPS_EN[a.file]) return FORM_STEPS_EN[a.file];
    }
    return a.steps || [];
}

function aSummary(a) {
    const c = aContent(a);
    if (c === a.content) return a.summary;
    const clean = String(c).replace(/\s+/g, ' ').trim();
    const cut = clean.slice(0, 130);
    return clean.length > 130 ? cut.slice(0, cut.lastIndexOf(' ')) + '\u2026' : clean;
}

function cTitle(c) {
    if (lang === 'en' && typeof CATEGORIES_EN !== 'undefined' && CATEGORIES_EN[c.id]) return CATEGORIES_EN[c.id].title;
    return c.title;
}

function cDesc(c) {
    if (lang === 'en' && typeof CATEGORIES_EN !== 'undefined' && CATEGORIES_EN[c.id]) return CATEGORIES_EN[c.id].description;
    return c.description;
}

/* ============================== واجهة الهيكل ============================== */
function renderShell() {
    /* السايدبار */
    const catLinks = CATEGORIES.map(c => {
        const n = ARTICLES.filter(a => a.category === c.id).length;
        return `<a class="nav-link" href="#/category/${c.id}" data-nav="category/${c.id}">
                    ${c.icon}<span>${esc(cTitle(c))}</span><span class="nav-count">${n}</span>
                </a>`;
    }).join('');

    $('sidebarNav').innerHTML = `
        <a class="nav-link" href="#/" data-nav="home">${ICON.home}<span>${esc(t.navHome)}</span></a>
        <a class="nav-link" href="#/faq" data-nav="faq">${ICON.faq}<span>${esc(t.navFaq)}</span><span class="nav-count">${FAQS.length}</span></a>
        <a class="nav-link" href="#/category/contact" data-nav="category/contact">${ICON.contact}<span>${esc(t.navContact)}</span></a>
        <p class="nav-group-label">${esc(t.navCategories)}</p>
        ${catLinks}
    `;

    $('brandName').textContent = t.brand;
    $('brandSub').textContent = t.brandSub;
    $('langLabel').textContent = t.langLabel;
    $('langBtn').setAttribute('aria-label', t.langLabel);
    $('menuBtn').setAttribute('aria-label', t.openMenu);
    $('collapseLabel').textContent = t.collapse;
    $('skipLink').textContent = t.skipToContent;

    const q = $('q');
    q.placeholder = t.searchPlaceholder;
    q.setAttribute('aria-label', t.searchAria);
    $('qClear').setAttribute('aria-label', t.clearSearch);

    applyTheme();

    $('footCo').textContent = t.footerCo;
    $('footLicense').textContent = t.footerLicense;
}

function markActiveNav(key) {
    document.querySelectorAll('[data-nav]').forEach(a => {
        a.classList.toggle('active', a.dataset.nav === key);
        if (a.dataset.nav === key) a.setAttribute('aria-current', 'page');
        else a.removeAttribute('aria-current');
    });
}

/* ============================== سجل الزيارات ============================== */
function recordView(id) {
    const recent = store(LS.recent, []).filter(x => x !== id);
    recent.unshift(id);
    save(LS.recent, recent.slice(0, 8));

    const views = store(LS.views, {});
    views[id] = (views[id] || 0) + 1;
    save(LS.views, views);
}

function recentArticles(n) {
    return store(LS.recent, []).map(id => ARTICLE_BY_ID[id]).filter(Boolean).slice(0, n);
}

function popularArticles(n) {
    const views = store(LS.views, {});
    return Object.entries(views)
        .sort((a, b) => b[1] - a[1])
        .map(([id]) => ARTICLE_BY_ID[id])
        .filter(Boolean)
        .slice(0, n);
}

/* ============================== محرّك البحث ============================== */
/* يُعاد بناؤه عند تغيير اللغة ليبحث في النص المعروض فعلياً */
let INDEX = [];
function buildIndex() {
    INDEX = ARTICLES.map(a => {
        const cat = CATEGORY_BY_ID[a.category] || {};
        return {
            id: a.id,
            nTitle:   norm(aTitle(a)),
            nSummary: norm(aSummary(a)),
            nContent: norm(aContent(a)),
            nTags:    norm((a.tags || []).join(' ')),
            nCat:     norm(cat.id ? cTitle(cat) : '')
        };
    });
}

/* ترتيب النتائج حسب مدى التطابق: العنوان ← الوسوم ← النبذة ← المحتوى.
   لا يُشترط وجود كل الكلمات — يكفي أن تُطابق كلمة واحدة، لكن النتائج التي
   تُطابق كلمات أكثر تتقدّم. هكذا يعرض بحث "رسوم السحب" مواضيع الرسوم
   والحدود والإجراءات المتعلقة بالسحب معاً. */
function search(query) {
    const q = norm(query);
    if (!q) return [];
    const tokens = [...new Set(q.split(' ').filter(Boolean))];

    const out = [];
    for (const row of INDEX) {
        let score = 0, matched = 0;

        for (const tk of tokens) {
            let s = 0;
            if (row.nTitle.startsWith(tk))  s += 55;
            else if (row.nTitle.includes(tk)) s += 40;
            if (row.nTags.includes(tk))     s += 18;
            if (row.nCat.includes(tk))      s += 14;
            if (row.nSummary.includes(tk))  s += 10;
            if (row.nContent.includes(tk))  s += 5;
            if (s > 0) { matched++; score += s; }
        }

        if (!matched) continue;

        /* مكافأة قوية عند مطابقة كل الكلمات، وأخرى للعبارة الكاملة */
        if (matched === tokens.length) score += 60;
        if (row.nTitle === q) score += 150;
        else if (row.nTitle.includes(q)) score += 70;
        else if (row.nContent.includes(q)) score += 25;

        out.push({ id: row.id, score });
    }

    return out.sort((a, b) => b.score - a.score).map(r => ARTICLE_BY_ID[r.id]);
}

/* تظليل كلمات البحث داخل نص مُهرَّب مسبقاً */
function highlight(text, query) {
    const safe = esc(text);
    const tokens = norm(query).split(' ').filter(t => t.length > 1);
    if (!tokens.length) return safe;

    /* المطابقة تتم على النص المُطبّع مع تتبّع المواضع في النص الأصلي */
    const chars = [...safe];
    const flags = new Array(chars.length).fill(false);
    const nMap = [];
    let nStr = '';

    chars.forEach((ch, i) => {
        const nc = norm(ch);
        for (let k = 0; k < nc.length; k++) { nStr += nc[k]; nMap.push(i); }
    });

    tokens.forEach(tk => {
        let from = 0, idx;
        while ((idx = nStr.indexOf(tk, from)) !== -1) {
            for (let k = idx; k < idx + tk.length && k < nMap.length; k++) flags[nMap[k]] = true;
            from = idx + tk.length;
        }
    });

    let out = '', open = false;
    chars.forEach((ch, i) => {
        if (flags[i] && !open) { out += '<mark>'; open = true; }
        if (!flags[i] && open) { out += '</mark>'; open = false; }
        out += ch;
    });
    if (open) out += '</mark>';
    return out;
}

/* ============================== تنسيق المحتوى ============================== */
/* سجل قوائم الخطوات في الصفحة الحالية — يُستخدم لنسخها بنص نظيف */
let STEP_BLOCKS = [];

/* غلاف قائمة خطوات مع زر نسخ */
function stepsGroup(innerHtml, plainSteps) {
    const idx = STEP_BLOCKS.push(plainSteps) - 1;
    return `<div class="steps-group">
        <div class="steps-bar">
            <button class="steps-copy" onclick="copySteps(${idx})" title="${esc(t.copySteps)}">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="11" height="11" rx="2"/>
                    <path d="M5 15V5a2 2 0 012-2h10" stroke-linecap="round"/>
                </svg>
                <span>${esc(t.copySteps)}</span>
            </button>
        </div>
        ${innerHtml}
    </div>`;
}

/* يحافظ على النص حرفياً ويحسّن عرضه فقط: خطوات مرقّمة، نقاط، عناوين، تنبيهات */
function formatContent(text, query) {
    const lines = String(text).split('\n');
    let html = '', buffer = [], mode = null;

    const flush = () => {
        if (!buffer.length) return;
        if (mode === 'ol') {
            const list = '<ol>' + buffer.map(x =>
                `<li><span class="n">${x.n}</span><span>${query ? highlight(x.txt, query) : esc(x.txt)}</span></li>`
            ).join('') + '</ol>';
            html += stepsGroup(list, buffer.map(x => `${x.n}. ${x.txt}`));
        } else if (mode === 'ul') {
            html += '<ul>' + buffer.map(x =>
                `<li><span class="b"></span><span>${query ? highlight(x, query) : esc(x)}</span></li>`
            ).join('') + '</ul>';
        } else {
            html += `<p>${buffer.map(x => query ? highlight(x, query) : esc(x)).join('<br>')}</p>`;
        }
        buffer = []; mode = null;
    };

    /* أرقام الإيموجي المستخدمة في بعض المقالات (1️⃣ … 9️⃣) */
    const EMOJI_NUMS = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];

    lines.forEach(raw => {
        const line = raw.trim();
        if (!line) { flush(); return; }

        /* ترقيم عادي: "1. نص" أو "1- نص" أو "1) نص" */
        let mNum = line.match(/^(\d+)\s*[-.)]\s*(.+)$/);

        /* ترقيم بالإيموجي: "1️⃣ نص" */
        if (!mNum) {
            const ei = EMOJI_NUMS.findIndex(e => line.startsWith(e));
            if (ei > -1) {
                const rest = line.slice(EMOJI_NUMS[ei].length).trim();
                if (rest) mNum = [line, ei === 10 ? '10' : String(ei), rest];
            }
        }

        const mBul  = line.match(/^[•·*]\s*(.+)$/);
        const isWarn = /^[⚠️🚨❗️‼️]/.test(line);
        const isHead = /[:：]$/.test(line) && line.length < 70 && !mNum && !mBul;

        if (isWarn) {
            flush();
            html += `<div class="callout"><span>${query ? highlight(line, query) : esc(line)}</span></div>`;
        } else if (isHead) {
            flush();
            html += `<h3>${query ? highlight(line, query) : esc(line)}</h3>`;
        } else if (mNum) {
            if (mode !== 'ol') flush();
            mode = 'ol';
            buffer.push({ n: mNum[1], txt: mNum[2] });
        } else if (mBul) {
            if (mode !== 'ul') flush();
            mode = 'ul';
            buffer.push(mBul[1]);
        } else {
            if (mode && mode !== 'p') flush();
            mode = 'p';
            buffer.push(line);
        }
    });
    flush();
    return html;
}

function shots(images, copyable) {
    if (!images || !images.length) return '';
    const many = images.length > 1;
    return `<div class="shots">${images.map((src, i) => {
        const safe = src.replace(/'/g, "\\'");
        return `<figure class="shot" tabindex="0" role="button"
                aria-label="${esc(t.viewAll)} ${i + 1}"
                onclick="openLightbox('${safe}')"
                onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();openLightbox('${safe}')}">
            ${many ? `<span class="shot-n">${i + 1}</span>` : ''}
            <img src="${esc(src)}" alt="" loading="lazy" decoding="async">
            ${copyable ? `<button class="shot-copy" title="${esc(t.copyImage)}" aria-label="${esc(t.copyImage)}"
                onclick="event.stopPropagation();copyImage('${safe}', this)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="9" y="9" width="11" height="11" rx="2"/>
                    <path d="M5 15V5a2 2 0 012-2h10" stroke-linecap="round"/>
                </svg>
                <span>${esc(t.copyImage)}</span>
            </button>` : ''}
        </figure>`;
    }).join('')}</div>`;
}

/* نسخ صورة إلى الحافظة — تُحوَّل إلى PNG لأن الحافظة لا تقبل JPEG */
async function copyImage(src, btn) {
    if (btn) btn.disabled = true;
    try {
        if (!navigator.clipboard || !window.ClipboardItem || !window.isSecureContext) {
            throw new Error('clipboard-unsupported');
        }

        const img = new Image();
        img.crossOrigin = 'anonymous';
        await new Promise((res, rej) => {
            img.onload = res;
            img.onerror = () => rej(new Error('load-failed'));
            img.src = src;
        });

        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        canvas.getContext('2d').drawImage(img, 0, 0);

        const blob = await new Promise(res => canvas.toBlob(res, 'image/png'));
        if (!blob) throw new Error('encode-failed');

        await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        toast(t.copiedImage);
    } catch (e) {
        /* متصفح لا يدعم نسخ الصور (أو اتصال غير آمن) — ننزّلها بدل ذلك */
        const a = document.createElement('a');
        a.href = src;
        a.download = src.split('/').pop();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        toast(t.imageDownloaded);
    } finally {
        if (btn) btn.disabled = false;
    }
}

/* ================================ التوجيه ================================ */
function route() {
    const hash = location.hash.replace(/^#\/?/, '');
    const [path, rawQ] = hash.split('?');
    const parts = path.split('/').filter(Boolean);
    STEP_BLOCKS = [];   /* سجل جديد لكل صفحة */
    closeDrawer();

    if (parts[0] === 'category' && parts[1]) return viewCategory(parts[1]);
    if (parts[0] === 'article'  && parts[1]) return viewArticle(decodeURIComponent(parts[1]));
    if (parts[0] === 'faq')                  return viewFaq();
    if (parts[0] === 'search') {
        const q = new URLSearchParams(rawQ || '').get('q') || '';
        const box1 = $('q'), box2 = $('q2');
        if (box1) box1.value = q;
        if (box2) box2.value = q;
        toggleClear(q);
        return viewSearch(q);
    }
    return viewHome();
}

window.addEventListener('hashchange', route);

function goTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

/* ============================== الصفحة الرئيسية ============================== */
function viewHome() {
    markActiveNav('home');
    $('topbarTitle').textContent = '';

    const quick = ['accountCreation', 'cashIn', 'cashOut', 'fees', 'troubleshooting', 'forms']
        .map(id => CATEGORY_BY_ID[id]).filter(Boolean);

    const recent = recentArticles(4);
    const popular = popularArticles(4);
    const essential = ['accountCreation.mainAccount', 'fees.serviceFees', 'cashIn.cliq', 'troubleshooting.loginIssues']
        .map(id => ARTICLE_BY_ID[id]).filter(Boolean);
    const spotlight = popular.length >= 2 ? popular : essential;
    const spotlightLabel = popular.length >= 2 ? t.popular : t.essential;

    $('view').innerHTML = `
        <section class="hero">
            <h1>${esc(t.heroTitle)}</h1>
            <p>${esc(t.heroSub)}</p>
            <div class="search">
                ${ICON.search}
                <input type="search" id="q2" autocomplete="off"
                       placeholder="${esc(t.searchPlaceholder)}"
                       aria-label="${esc(t.searchAria)}">
            </div>
        </section>

        <div class="wrap-wide">
            <section class="section">
                <div class="section-head"><h2>${esc(t.quickAccess)}</h2></div>
                <div class="chips">
                    ${quick.map(c => `<a class="chip" href="#/category/${c.id}">${c.icon}${esc(cTitle(c))}</a>`).join('')}
                </div>
            </section>

            ${recent.length ? `
            <section class="section">
                <div class="section-head"><h2>${ICON.clock ? '' : ''}${esc(t.recentlyViewed)}</h2></div>
                <div class="list">${recent.map(rowArticle).join('')}</div>
            </section>` : ''}

            <section class="section">
                <div class="section-head"><h2>${esc(t.categories)}</h2></div>
                <div class="grid grid-3">
                    ${CATEGORIES.map(c => {
                        const n = ARTICLES.filter(a => a.category === c.id).length;
                        return `<a class="card" href="#/category/${c.id}">
                            <span class="card-ico">${c.icon}</span>
                            <span class="card-body">
                                <span class="card-title">${esc(cTitle(c))}</span>
                                <span class="card-meta">${n} ${esc(t.topics)}${cDesc(c) ? ' · ' + esc(cDesc(c)) : ''}</span>
                            </span>
                        </a>`;
                    }).join('')}
                </div>
            </section>

            ${spotlight.length ? `
            <section class="section">
                <div class="section-head"><h2>${esc(spotlightLabel)}</h2></div>
                <div class="list">${spotlight.map(rowArticle).join('')}</div>
            </section>` : ''}

            <section class="section">
                <div class="section-head">
                    <div><h2>${esc(t.faqTitle)}</h2><p>${esc(t.faqSub)}</p></div>
                    <a href="#/faq">${esc(t.viewAll)}</a>
                </div>
                <div class="list">${FAQS.slice(0, 4).map(accFaq).join('')}</div>
            </section>
        </div>
    `;

    const q2 = $('q2');
    q2.addEventListener('input', e => onSearchInput(e.target.value));
    goTop();
}

function rowArticle(a) {
    const cat = CATEGORY_BY_ID[a.category];
    return `<a class="row" href="#/article/${encodeURIComponent(a.id)}">
        <span class="row-cat">${esc(cat ? cTitle(cat) : '')}</span>
        <span class="row-title">${esc(aTitle(a))}</span>
        <span class="row-snip">${esc(aSummary(a))}</span>
    </a>`;
}

/* ================================ الأقسام ================================ */
function viewCategory(catId) {
    const cat = CATEGORY_BY_ID[catId];
    if (!cat) { location.hash = '#/'; return; }

    markActiveNav('category/' + catId);
    $('topbarTitle').textContent = cTitle(cat);

    const items = ARTICLES.filter(a => a.category === catId);

    /* قسم التواصل يُعرض كبطاقات مباشرة */
    const contactBlock = catId === 'contact' ? `
        <div class="grid grid-2" style="margin-bottom:14px">
            <a class="contact-card" href="https://wa.me/962797674322" target="_blank" rel="noopener">
                <span class="card-ico">${ICON.contact}</span>
                <span><span class="contact-label">${esc(t.whatsapp)}</span><span class="contact-value">+962 79 767 4322</span></span>
            </a>
            <a class="contact-card" href="mailto:info@globxpay.com">
                <span class="card-ico">${ICON.mail}</span>
                <span><span class="contact-label">${esc(t.email)}</span><span class="contact-value">info@globxpay.com</span></span>
            </a>
        </div>` : '';

    $('view').innerHTML = `
        <div class="wrap-wide">
            ${crumbs([{ label: t.navHome, href: '#/' }, { label: cTitle(cat) }])}
            <div class="page-head">
                <h1>${esc(cTitle(cat))}</h1>
                ${cDesc(cat) ? `<p>${esc(cDesc(cat))}</p>` : ''}
            </div>
            ${contactBlock}
            <div class="list">${items.map(rowArticle).join('')}</div>
        </div>
    `;
    goTop();
}

/* ================================ المقال ================================ */
function viewArticle(id) {
    const a = ARTICLE_BY_ID[id];
    if (!a) { location.hash = '#/'; return; }

    const cat = CATEGORY_BY_ID[a.category];
    markActiveNav('category/' + a.category);
    $('topbarTitle').textContent = aTitle(a);
    recordView(id);

    const related = (a.relatedArticles || []).map(r => ARTICLE_BY_ID[r]).filter(Boolean);

    /* ملف للتنزيل إن كان المقال نموذجاً */
    const fileBtn = a.file
        ? `<a class="btn" href="${encodeURI(a.file)}" download>${ICON.down} ${esc(t.download)}</a>` : '';

    const licenseBtn = a.category === 'company'
        ? `<a class="btn btn-ghost" href="globxpaypres.pdf" download>${ICON.down} ${esc(t.download)} PDF</a>` : '';

    const artSteps = aSteps(a);
    const stepsBlock = (artSteps && artSteps.length)
        ? `<h3>${esc(t.steps)}</h3>` + stepsGroup(
            '<ol>' + artSteps.map((s, i) =>
                `<li><span class="n">${i + 1}</span><span>${esc(s)}</span></li>`).join('') + '</ol>',
            artSteps.map((s, i) => `${i + 1}. ${s}`)
          )
        : '';

    $('view').innerHTML = `
        <div class="wrap">
            ${crumbs([
                { label: t.navHome, href: '#/' },
                { label: cat ? cTitle(cat) : '', href: '#/category/' + a.category },
                { label: aTitle(a) }
            ])}

            <div class="page-head">
                <h1>${esc(aTitle(a))}</h1>
                <p>${esc(t.inCategory)}: ${esc(cat ? cTitle(cat) : '')}</p>
            </div>

            <div class="article-tools">
                ${fileBtn}${licenseBtn}
                <button class="btn btn-ghost" onclick="copyLink()">${ICON.link} ${esc(t.copyLink)}</button>
                <button class="btn btn-ghost" onclick="window.print()">${ICON.print} ${esc(t.print)}</button>
            </div>

            <article class="prose">
                ${stepsBlock}
                ${aContent(a) ? formatContent(aContent(a)) : ''}
                ${shots(a.images, a.copyableImages)}
            </article>

            ${related.length ? `
            <section class="section related-section">
                <div class="section-head"><h2>${esc(t.related)}</h2></div>
                <div class="list">${related.map(rowArticle).join('')}</div>
            </section>` : ''}
        </div>
    `;
    goTop();
}

/* ============================== الأسئلة الشائعة ============================== */
function accFaq(f, i) {
    const art = ARTICLE_BY_ID[f.articleId];
    const question = art ? aTitle(art) : f.question;
    const answer = art ? aContent(art) : f.answer;
    return `<div class="acc-item">
        <button class="acc-btn" aria-expanded="false" aria-controls="faq-${i}"
                onclick="toggleAcc(this,'faq-${i}')">
            <span>${esc(question)}</span>${ICON.chev}
        </button>
        <div class="acc-panel" id="faq-${i}" role="region">
            <div class="prose">${formatContent(answer)}</div>
            <p style="margin-top:12px">
                <a href="#/article/${encodeURIComponent(f.articleId)}"
                   style="color:var(--brand);font-weight:600;font-size:13.8px">${esc(t.openArticle)}</a>
            </p>
        </div>
    </div>`;
}

function viewFaq() {
    markActiveNav('faq');
    $('topbarTitle').textContent = t.navFaq;

    $('view').innerHTML = `
        <div class="wrap">
            ${crumbs([{ label: t.navHome, href: '#/' }, { label: t.navFaq }])}
            <div class="page-head">
                <h1>${esc(t.faqTitle)}</h1>
                <p>${esc(t.faqSub)}</p>
            </div>
            <div class="list">${FAQS.map(accFaq).join('')}</div>
        </div>
    `;
    goTop();
}

function toggleAcc(btn, panelId) {
    const p = $(panelId);
    const open = p.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}

/* ================================ البحث ================================ */
function viewSearch(q) {
    markActiveNav('');
    $('topbarTitle').textContent = '';

    const results = search(q);

    if (!results.length) {
        $('view').innerHTML = `
            <div class="wrap-wide">
                <div class="empty">
                    ${ICON.search}
                    <h3>${esc(t.noResultsTitle)}</h3>
                    <p>${esc(t.noResultsSub)}</p>
                </div>
                <section class="section">
                    <div class="section-head"><h2>${esc(t.suggested)}</h2></div>
                    <div class="grid grid-3">
                        ${CATEGORIES.slice(0, 6).map(c => `
                            <a class="card" href="#/category/${c.id}">
                                <span class="card-ico">${c.icon}</span>
                                <span class="card-body">
                                    <span class="card-title">${esc(cTitle(c))}</span>
                                    <span class="card-meta">${esc(cDesc(c) || '')}</span>
                                </span>
                            </a>`).join('')}
                    </div>
                </section>
            </div>`;
        goTop();
        return;
    }

    $('view').innerHTML = `
        <div class="wrap-wide">
            <div class="section-head" style="margin-bottom:13px">
                <h2>${results.length} ${esc(t.resultsFor)} "${esc(q.trim())}"</h2>
            </div>
            <div class="list">
                ${results.map(a => {
                    const cat = CATEGORY_BY_ID[a.category];
                    return `<a class="row" href="#/article/${encodeURIComponent(a.id)}">
                        <span class="row-cat">${esc(cat ? cTitle(cat) : '')}</span>
                        <span class="row-title">${highlight(aTitle(a), q)}</span>
                        <span class="row-snip">${highlight(aSummary(a), q)}</span>
                    </a>`;
                }).join('')}
            </div>
        </div>`;
    goTop();
}

let searchTimer;
function onSearchInput(v) {
    toggleClear(v);
    const other = document.activeElement === $('q') ? $('q2') : $('q');
    if (other) other.value = v;

    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
        const q = v.trim();
        if (!q) { if (location.hash.startsWith('#/search')) location.hash = '#/'; return; }
        location.hash = '#/search?q=' + encodeURIComponent(q);
    }, 130);
}

function toggleClear(v) {
    $('qClear').classList.toggle('show', String(v).length > 0);
}

function clearSearch() {
    $('q').value = '';
    const q2 = $('q2'); if (q2) q2.value = '';
    toggleClear('');
    location.hash = '#/';
    $('q').focus();
}

/* ============================== فتات التنقل ============================== */
function crumbs(items) {
    return `<nav class="crumbs" aria-label="breadcrumb">${
        items.map((it, i) => {
            const last = i === items.length - 1;
            const node = last || !it.href
                ? `<span${last ? ' aria-current="page"' : ''}>${esc(it.label)}</span>`
                : `<a href="${it.href}">${esc(it.label)}</a>`;
            return node + (last ? '' : ICON.sep);
        }).join('')
    }</nav>`;
}

/* ============================== أدوات المقال ============================== */
/* نسخ نص إلى الحافظة مع بديل للمتصفحات/الاتصالات غير الآمنة */
function copyText(text, okMsg) {
    const done = () => toast(okMsg);

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(done).catch(fallback);
    } else fallback();

    function fallback() {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); done(); } catch { /* تعذّر النسخ */ }
        document.body.removeChild(ta);
    }
}

function copyLink() {
    copyText(location.href, t.copied);
}

/* نسخ خطوات عملية واحدة كنص مرقّم جاهز للّصق */
function copySteps(idx) {
    const block = STEP_BLOCKS[idx];
    if (!block) return;
    copyText(block.join('\n'), t.copiedSteps);
}

let toastTimer;
function toast(msg) {
    const el = $('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 1900);
}

/* ============================== معاينة الصور ============================== */
let lastFocus = null;
function openLightbox(src) {
    lastFocus = document.activeElement;
    $('lightboxImg').src = src;
    $('lightbox').classList.add('open');
    $('lightbox').setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    $('lightboxClose').focus();
}
function closeLightbox() {
    $('lightbox').classList.remove('open');
    $('lightbox').setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
}

/* ============================== السايدبار ============================== */
function toggleCollapse() {
    const c = !document.body.classList.contains('collapsed');
    document.body.classList.toggle('collapsed', c);
    save(LS.collapsed, c);
    $('collapseLabel').textContent = c ? t.expand : t.collapse;
}

function openDrawer() {
    document.body.classList.add('drawer-open');
    $('overlay').classList.add('show');
    $('menuBtn').setAttribute('aria-expanded', 'true');
}
function closeDrawer() {
    document.body.classList.remove('drawer-open');
    $('overlay').classList.remove('show');
    $('menuBtn').setAttribute('aria-expanded', 'false');
}
function toggleDrawer() {
    document.body.classList.contains('drawer-open') ? closeDrawer() : openDrawer();
}

/* ============================== لوحة المفاتيح ============================== */
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        if ($('lightbox').classList.contains('open')) closeLightbox();
        else if (document.body.classList.contains('drawer-open')) closeDrawer();
    }
    /* اختصار "/" للانتقال إلى البحث */
    if (e.key === '/' && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
        e.preventDefault();
        const box = $('q2') || $('q');
        box.focus(); box.select();
    }
});

/* ================================ التشغيل ================================ */
buildIndex();

if (store(LS.collapsed, false)) document.body.classList.add('collapsed');

$('q').addEventListener('input', e => onSearchInput(e.target.value));
$('menuBtn').addEventListener('click', toggleDrawer);
$('overlay').addEventListener('click', closeDrawer);
$('langBtn').addEventListener('click', toggleLang);
$('themeBtn').addEventListener('click', toggleTheme);
$('collapseBtn').addEventListener('click', toggleCollapse);
$('qClear').addEventListener('click', clearSearch);
$('lightbox').addEventListener('click', e => { if (e.target.id === 'lightbox') closeLightbox(); });
$('lightboxClose').addEventListener('click', closeLightbox);

applyLang();
