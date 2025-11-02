import{d as t,r as h,j as e,N as o}from"./index-CQ_xjxjH.js";import{H as x}from"./index-C8nEF-Cf.js";const r={Page:t.main`
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

        .card {
            border: 1px solid var(--border);
            background: var(--card);
            border-radius: 12px;
            padding: 12px;
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

        .backTop {
            text-align: right;
            font-size: 13px;
        }
        .backTop a {
            color: var(--text-muted);
            text-decoration: none;
        }

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
            justify-content: space-between;
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
    `,Code:t.div`
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
    `};var n=Object.freeze,m=Object.defineProperty,s=(i,u)=>n(m(i,"raw",{value:n(i.slice())})),a,l,d,c,p;const f=String.raw(a||(a=s([`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Loading CSS/JS sanely — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
      main { padding: 20px; display: grid; gap: 14px; max-width: 900px; margin: 0 auto; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .muted { color: #6b7280; }
      code { background: #f5f5f5; padding: 0 6px; border-radius: 6px; }
      .row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
      @media (max-width: 800px) { .row { grid-template-columns: 1fr; } }
    </style>

    <!-- 1) Core render CSS in <head> -->
    <link rel="stylesheet" href="styles/core.css" />

    <!-- 2) Non-critical/print CSS: -->
    <link rel="stylesheet" href="styles/print.css" media="print" />
    <!-- OR: load non-critical CSS without blocking render (onload swap) -->
    <!--
    <link
      rel="preload"
      href="styles/noncritical.css"
      as="style"
      onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="styles/noncritical.css"></noscript>
    -->

    <!-- 3) Preconnect to CDNs if you’ll fetch from them: -->
    <!-- <link rel="preconnect" href="https://cdn.example.com" crossorigin> -->

    <!-- 4) Preload a critical font (with proper type + crossorigin): -->
    <!--
    <link rel="preload" as="font" type="font/woff2" href="/fonts/inter.woff2" crossorigin>
    -->

    <!-- 5) Module graph warmup (for large ESM bundles): -->
    <!-- <link rel="modulepreload" href="/scripts/app.js"> -->
  </head>
  <body>
    <main>
      <header>
        <h1>Loading CSS/JS sanely</h1>
        <p class="muted">
          CSS in head, keep it minimal; non-critical later. JavaScript with <code>defer</code> or
          <code>type="module"</code> so parsing isn’t blocked. Use <code>async</code> only for scripts
          that don’t depend on DOM readiness or each other.
        </p>
      </header>

      <section class="card">
        <h2>CSS quick rules</h2>
        <ul>
          <li><strong>Critical CSS</strong> only in head. Everything else can wait.</li>
          <li>Use <code>media="print"</code> for print-only sheets, or the <em>preload → rel swap</em> trick above.</li>
          <li>Fonts: preload key fonts; always include <code>type</code> and <code>crossorigin</code> for WOFF2.</li>
        </ul>
      </section>

      <section class="card">
        <h2>JS quick rules</h2>
        <div class="row">
          <div>
            <h3>Classic scripts</h3>
            <pre><code>&lt;script src="/scripts/classic.js" defer&gt;&lt;/script&gt;</code></pre>
            <ul>
              <li><code>defer</code> = download during parse, execute after HTML is parsed.</li>
              <li><code>async</code> = execute ASAP when ready; order not guaranteed.</li>
            </ul>
          </div>
          <div>
            <h3>ES modules</h3>
            <pre><code>&lt;script type="module" src="/scripts/app.js"&gt;&lt;/script&gt;</code></pre>
            <ul>
              <li>Modules act like deferred by default (no blocking).</li>
              <li>Use <code>&lt;link rel="modulepreload"&gt;</code> for large graphs.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>Integrity & CORS (CDN safety)</h2>
        <pre><code>&lt;script
  src="https://cdn.example.com/lib.min.js"
  integrity="sha384-BASE64HASH"
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
  defer&gt;&lt;/script&gt;</code></pre>
        <p class="muted">
          Subresource Integrity (<code>integrity</code>) makes sure the file wasn't tampered with.
          <code>crossorigin</code> must be set for SRI with CORS, and <code>referrerpolicy</code> controls what referrer is sent.
        </p>
      </section>

      <section class="card">
        <h2>Tiny demo</h2>
        <p id="status">JS hasn’t run yet…</p>
        <button id="btn">Click me</button>
      </section>

      <footer class="muted">Tip: prefer one modern bundle (ESM) over many tiny classic scripts.</footer>
    </main>

    <!-- Place scripts at the end (still fine), but prefer defer/module anywhere -->
    <script defer>
      // Classic inline script with defer-equivalent timing (executes after parse)
      document.addEventListener('DOMContentLoaded', () => {
        const s = document.getElementById('status');
        if (s) s.textContent = 'DOM ready ✅';
        const btn = document.getElementById('btn');
        btn?.addEventListener('click', () => alert('Works without blocking render!'));
      });
    <\/script>

    <!-- ESM example (implicitly deferred) -->
    <script type="module">
      // Example: split code into modules if it helps maintainability
      const msg = 'Module script loaded ✅';
      console.log(msg);
    <\/script>
  </body>
</html>`])));function j(){return h.useEffect(()=>{document.title="Metadata · Loading CSS/JS sanely"},[]),e.jsxs(r.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Loading CSS and JavaScript sanely"}),e.jsxs("p",{className:"lede",children:["Keep first paint fast: minimal critical CSS in ",e.jsx("code",{children:"<head>"}),", push non-critical styles later, and load scripts with ",e.jsx("code",{children:"defer"})," or ",e.jsx("code",{children:'type="module"'}),". Use",e.jsx("code",{children:"async"})," only for scripts that can execute anytime without order guarantees."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#css",children:"CSS basics"}),e.jsx("a",{href:"#js",children:"JavaScript basics"}),e.jsx("a",{href:"#modules",children:"ES Modules"}),e.jsx("a",{href:"#hints",children:"Network hints"}),e.jsx("a",{href:"#security",children:"Integrity & CORS"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"css",children:[e.jsx("h2",{children:"CSS basics (render-blocking)"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Every ",e.jsx("code",{children:'<link rel="stylesheet">'})," in head blocks render until it arrives."]}),e.jsx("li",{children:"Ship only core layout/typography up front. Defer extras."}),e.jsxs("li",{children:["Pattern for non-critical CSS:",e.jsx(r.Code,{as:"div",children:e.jsx("pre",{children:String.raw`<link rel="preload" href="/css/extra.css" as="style"
      onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/css/extra.css"></noscript>`})})]}),e.jsxs("li",{children:["Print styles should use ",e.jsx("code",{children:'media="print"'}),", so they don’t slow initial paint."]})]})})]}),e.jsxs("section",{id:"js",children:[e.jsx("h2",{children:"JavaScript basics (don’t block parsing)"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:[e.jsx("code",{children:"defer"})," (classic scripts)"]}),e.jsx("p",{children:"Downloads during HTML parse, executes after parsing (in order)."}),e.jsx(r.Code,{children:e.jsx("pre",{children:String.raw(l||(l=s([`<script src="/js/vendor.js" defer><\/script>
<script src="/js/app.js" defer><\/script>`])))})})]}),e.jsxs("div",{className:"card",children:[e.jsxs("h3",{children:[e.jsx("code",{children:"async"})," (fire whenever ready)"]}),e.jsx("p",{children:"No order guarantee; use only for analytics/ads/widgets that don't depend on DOM or other scripts."}),e.jsx(r.Code,{children:e.jsx("pre",{children:String.raw(d||(d=s(['<script src="https://example.com/ads.js" async><\/script>'])))})})]})]})]}),e.jsxs("section",{id:"modules",children:[e.jsx("h2",{children:"ES Modules (modern default)"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:'type="module"'})," is implicitly deferred, supports ",e.jsx("code",{children:"import"}),"/",e.jsx("code",{children:"export"}),"."]}),e.jsxs("li",{children:["Warm up with ",e.jsx("code",{children:'<link rel="modulepreload">'})," for large graphs if TTFB is fine but hydration is slow."]}),e.jsxs("li",{children:["Optional legacy fallback:",e.jsx(r.Code,{children:e.jsx("pre",{children:String.raw(c||(c=s([`<script type="module" src="/js/app.mjs"><\/script>
<script nomodule src="/js/legacy.bundle.js" defer><\/script>`])))})})]})]})})]}),e.jsxs("section",{id:"hints",children:[e.jsx("h2",{children:"Network hints (carefully)"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Preconnect"}),e.jsx("p",{children:"Use when you know you’ll fetch from a new origin soon."}),e.jsx(r.Code,{children:e.jsx("pre",{children:String.raw`<link rel="preconnect" href="https://cdn.example.com" crossorigin>`})})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Preload"}),e.jsxs("p",{children:["Reserve for assets needed in the next couple of seconds; match correct ",e.jsx("code",{children:"as"}),"/",e.jsx("code",{children:"type"}),"."]}),e.jsx(r.Code,{children:e.jsx("pre",{children:String.raw`<link rel="preload" as="font" type="font/woff2"
      href="/fonts/inter.woff2" crossorigin>`})})]})]})]}),e.jsxs("section",{id:"security",children:[e.jsx("h2",{children:"Integrity, CORS, referrer policy"}),e.jsx(r.Code,{children:e.jsx("pre",{children:String.raw(p||(p=s([`<script
  src="https://cdn.example.com/lib.min.js"
  integrity="sha384-BASE64HASH"
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
  defer><\/script>`])))})}),e.jsxs("p",{className:"note",children:["SRI verifies content; for cross-origin with SRI, set ",e.jsx("code",{children:"crossorigin"}),". Use",e.jsx("code",{children:"referrerpolicy"})," to limit referrer leakage when pulling from CDNs."]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Toggle ",e.jsx("code",{children:"async"})," / ",e.jsx("code",{children:"defer"}),", add ",e.jsx("code",{children:'type="module"'}),", and experiment with preload/modulepreload to feel how timing changes. Autosaves to this lesson."]}),e.jsx(x,{storageKey:"core-html:metadata:links-scripts:v1",initialHtml:f,height:680})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(o,{to:"/metadata/canonical-concept",className:"prev","aria-label":"Go to Canonical link (concept)",children:"← Canonical link (concept)"}),e.jsx(o,{to:"/globals/id-class-style-title",className:"next","aria-label":"Go to Global attributes: id, class, style, title",children:"Next: Global attributes — id, class, style, title →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{j as default};
