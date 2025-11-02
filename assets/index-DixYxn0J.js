import{d as s,r as o,j as e,N as a}from"./index-CQ_xjxjH.js";import{H as c}from"./index-C8nEF-Cf.js";const r={Page:s.main`
        display: grid;
        gap: 16px;
        padding: 16px;
        max-width: 1100px;
        margin: 0 auto;

        .pageHeader {
            display: grid;
            gap: 8px;
        }
        .lede {
            color: var(--text-muted);
            font-size: 15px;
        }

        .toc {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            padding: 8px;
            border: 1px solid var(--border);
            border-radius: 12px;
            background: var(--surface);
        }
        .toc a {
            border: 1px solid var(--border);
            background: var(--card);
            color: var(--text);
            padding: 6px 10px;
            border-radius: 999px;
            font-size: 13px;
            text-decoration: none;
        }

        h2 {
            margin-top: 8px;
        }

        .card {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 12px;
            padding: 12px;
        }

        .grid2 {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
        }
        @media (max-width: 900px) {
            .grid2 {
                grid-template-columns: 1fr;
            }
        }

        .bullets {
            padding-left: 18px;
            line-height: 1.8;
        }
        .bullets code {
            font-size: 92%;
        }

        .note {
            font-size: 14px;
            color: var(--text-muted);
            border-left: 3px solid var(--primary);
            padding: 8px 12px;
            background: color-mix(in oklab, var(--primary), transparent 92%);
            border-radius: 8px;
            margin-top: 8px;
        }

        .table {
            display: grid;
            border: 1px solid var(--border);
            border-radius: 12px;
            overflow: hidden;
            background: var(--card);
            grid-template-columns: 180px 1fr 160px 1fr;
        }
        .table > div[role="row"] {
            display: contents;
        }
        .table .thead > span {
            background: var(--surface);
            font-weight: 600;
            padding: 10px;
            border-bottom: 1px solid var(--border);
        }
        .table span {
            padding: 10px;
            border-bottom: 1px solid var(--border);
            border-right: 1px solid var(--border);
        }
        .table span:last-child {
            border-right: 0;
        }

        /* Code wrapper */
        pre,
        code {
            font-family: ui-monospace, SFMono-Regular, Menlo, Consolas,
                monospace;
        }
        pre {
            font-size: 0.92rem;
            line-height: 1.5;
            margin: 0;
        }

        .nextPrev {
            margin-top: 24px;
            display: flex;
            justify-content: space-between; /* prev left, next right */
            gap: 12px;
        }
        .nextPrev a {
            color: var(--primary);
            text-decoration: none;
            border: 1px solid var(--surface-400, #333);
            padding: 8px 12px;
            border-radius: 10px;
        }
        .nextPrev a:hover {
            background: var(--surface);
        }

        .backTop {
            text-align: right;
            font-size: 13px;
        }
        .backTop a {
            color: var(--text-muted);
            text-decoration: none;
        }
    `,Code:s.div`
        position: relative;
        border: 1px solid var(--surface-400, #333);
        background: var(--surface-200, rgba(255, 255, 255, 0.02));
        border-radius: 10px;
        overflow: hidden;

        pre {
            margin: 0;
            padding: 12px 14px;
            font-family: Consolas, Monaco, "SFMono-Regular", Menlo, monospace;
            font-size: 0.9rem;
            line-height: 1.5;
            color: var(--text);
            overflow-x: auto;
            white-space: pre;
            -webkit-overflow-scrolling: touch;
        }
    `};var l=Object.freeze,p=Object.defineProperty,n=(i,m)=>l(p(i,"raw",{value:l(i.slice())})),t,d;const h=String.raw(t||(t=n([`
    <!doctype html>
    <html lang="en">

    <head>
        <!-- 1) Charset early so bytes decode correctly -->
        <meta charset="utf-8" />

        <!-- 2) Title -->
        <title>Boilerplate Order — demo</title>

        <!-- 3) Viewport for mobile baseline -->
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- 4) Meta description (SEO) -->
        <meta name="description" content="Minimal, correct head ordering for fast, predictable pages." />

        <!-- 5) Favicons / app icons (minimal set) -->
        <link rel="icon" sizes="32x32" href="data:image/x-icon;base64," />
        <link rel="apple-touch-icon" sizes="180x180" href="data:image/png;base64," />

        <!-- 6) Resource hints (optional, use judiciously) -->
        <link rel="preconnect" href="https://example-cdn.com" crossorigin>

        <!-- 7) Critical CSS: prefer external stylesheet; inline only the truly critical -->
        <link rel="stylesheet"
            href="data:text/css,body{font:14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;padding:24px} .card{border:1px solid #bbb;padding:12px;border-radius:10px} .muted{color:#777}">
        <style media="print">
            /* keep print rules minimal */
            @page {
                margin: 12mm;
            }

            body {
                background: white !important;
            }
        </style>

        <!-- 8) Scripts: defer avoids blocking parse -->
        <script defer>
            document.addEventListener('DOMContentLoaded', () => {
                const log = (m) => (document.getElementById('log').innerHTML += '<div>' + m + '</div>');
                log('DOMContentLoaded ✓ (defer)');
            });
        <\/script>

        <!-- 9) Color scheme hint helps UA choose light/dark form controls -->
        <meta name="color-scheme" content="light dark">
    </head>

<body>
    <main>
        <h1>Boilerplate Order — live mini playground</h1>
        <p class="muted">Reorder, remove, or add items and see how it behaves.</p>
        <section class="card">
            <h2>Checklist (thin start)</h2>
            <ul>
                <li>charset → title → viewport at the top</li>
                <li>description &amp; icons</li>
                <li>stylesheets (keep render non-blocking sensible)</li>
                <li>scripts with <code>defer</code> or modules</li>
            </ul>
        </section>

        <section class="card">
            <h2>Log</h2>
            <div id="log" class="muted"></div>
        </section>
    </main>
</body>

</html>`])));function u(){return o.useEffect(()=>{document.title="Document Skeleton · Boilerplate order"},[]),e.jsxs(r.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Boilerplate order"}),e.jsxs("p",{className:"lede",children:["A clean, predictable order in ",e.jsx("code",{children:"<head>"})," prevents quirky bugs and improves perceived performance. Start small, then add only what you need."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#minimal",children:"Minimal correct order"}),e.jsx("a",{href:"#recommended",children:"Recommended add-ons"}),e.jsx("a",{href:"#styles-scripts",children:"Loading CSS & JS"}),e.jsx("a",{href:"#prints-colors",children:"Print & color hints"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"minimal",children:[e.jsx("h2",{children:"Minimal correct order"}),e.jsx(r.Code,{role:"region","aria-label":"Minimal head ordering",children:e.jsx("pre",{children:String.raw`<head>
  <meta charset="utf-8">
  <title>Page title</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>`})}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"charset"})," first, so decoding is correct from byte 1."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"title"})," is required and should be specific."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"viewport"})," sets the mobile baseline; keep it simple."]})]})]}),e.jsxs("section",{id:"recommended",children:[e.jsx("h2",{children:"Recommended add-ons (thin)"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Discovery"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:'<meta name="description">'})," — concise summary."]}),e.jsx("li",{children:"Social tags (OG/Twitter) when sharing matters."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Identity"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Favicons & touch icons (sizes 16/32 + 180 is a minimal trio)."}),e.jsxs("li",{children:[e.jsx("code",{children:"theme-color"})," to tint browser UI where supported."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Hints"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"preconnect"})," to warm up other origins."]}),e.jsxs("li",{children:[e.jsx("code",{children:"preload"})," for truly critical assets (and use them again normally)."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Standards"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"color-scheme"})," to inform UA light/dark affordances."]}),e.jsx("li",{children:"Manifest & canonical link when needed."})]})]})]})]}),e.jsxs("section",{id:"styles-scripts",children:[e.jsx("h2",{children:"Loading CSS & JS"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Styles"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Prefer external CSS via ",e.jsx("code",{children:'rel="stylesheet"'}),"."]}),e.jsx("li",{children:"Inline only tiny critical CSS; keep it truly small."}),e.jsx("li",{children:"Don’t block rendering with unused CSS — audit regularly."})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Scripts"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"<script defer>"})," — runs after parse, preserves order."]}),e.jsxs("li",{children:[e.jsx("code",{children:"<script async>"})," — for independent scripts (no order guarantees)."]}),e.jsxs("li",{children:[e.jsx("code",{children:'type="module"'})," — deferred by default; use modern ESM."]})]})]})]}),e.jsx(r.Code,{role:"region","aria-label":"JS loading patterns",children:e.jsx("pre",{children:String.raw(d||(d=n([`<!-- Good -->
<script defer src="/app.js"><\/script>
<script type="module" src="/main.js"><\/script>

<!-- Sometimes -->
<script async src="https://analytics.example.com/sdk.js"><\/script>

<!-- Avoid (blocks parsing) -->
<!-- <script src="/large-legacy.js"><\/script> -->`])))})})]}),e.jsxs("section",{id:"prints-colors",children:[e.jsx("h2",{children:"Print & color scheme hints"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"@page"})," and minimal print rules help keep output tidy."]}),e.jsxs("li",{children:[e.jsx("code",{children:"color-scheme: light dark"})," allows UA to pick matching form-control theming."]})]}),e.jsx(r.Code,{role:"region","aria-label":"Print rules",children:e.jsx("pre",{children:String.raw`<style media="print">
  @page { margin: 12mm; }
  body { background: white !important; color: black; }
</style>

<meta name="color-scheme" content="light dark">`})})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsx("p",{className:"lede",children:"Edit the order, add/remove hints, switch script strategies, and see how it impacts behavior. Your changes autosave for this lesson."}),e.jsx(c,{storageKey:"core-html:skeleton:boilerplate-order:v1",initialHtml:h,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(a,{to:"/skeleton/head-vs-body",className:"prev","aria-label":"Go to head vs body",children:"← <head> vs <body>"}),e.jsx(a,{to:"/skeleton/favicons-min",className:"next","aria-label":"Go to Favicons (minimal)",children:"Next: Favicons (16/32 + 180) →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{u as default};
