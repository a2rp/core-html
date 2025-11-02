import{d as s,r as t,j as e,N as i}from"./index-D3QNcmKe.js";import{H as n}from"./index-CAjihRuM.js";const d={Page:s.main`
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

        .grid {
            display: grid;
            gap: 12px;
        }
        .pill {
            font-size: 12px;
            border-radius: 999px;
            padding: 2px 8px;
        }

        .bullets {
            padding-left: 18px;
            line-height: 1.8;
        }
        .bullets code {
            font-size: 92%;
        }

        .table {
            display: grid;
            border: 1px solid var(--border);
            border-radius: 12px;
            overflow: hidden;
            background: var(--card);
            grid-template-columns: 180px 1fr 140px 1fr;
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

        .note {
            font-size: 14px;
            color: var(--text-muted);
            border-left: 3px solid var(--primary);
            padding: 8px 12px;
            background: color-mix(in oklab, var(--primary), transparent 92%);
            border-radius: 8px;
            margin-top: 8px;
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
    `};var a=Object.freeze,o=Object.defineProperty,c=(r,h)=>a(o(r,"raw",{value:a(r.slice())})),l;const p=String.raw(l||(l=c([`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Scripts & Styles — placement demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- CSS: link stylesheets in head (render depends on them) -->
    <link rel="stylesheet"
          href="data:text/css,body{font:14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;padding:24px} .card{border:1px solid #bbb;padding:12px;border-radius:10px} .muted{color:#777} .grid{display:grid;gap:12px} .pill{display:inline-block;border:1px solid #bbb;padding:2px 8px;border-radius:999px} code{background:#f5f5f5;padding:1px 6px;border-radius:6px}">

    <!-- Optional: preload a crucial stylesheet, then use it normally -->
    <!-- <link rel="preload" as="style" href="/above-the-fold.css"> -->
    <!-- <link rel="stylesheet" href="/above-the-fold.css"> -->

    <!-- Avoid @import inside CSS for performance; it delays fetches. -->

    <!-- JS: prefer defer so parsing isn't blocked -->
    <script defer>
      document.addEventListener('DOMContentLoaded', () => {
        const log = (m) => (document.getElementById('log').innerHTML += '<div>' + m + '</div>');
        log('DOMContentLoaded ✓ (defer)');
        document.getElementById('btn')?.addEventListener('click', () => log('Clicked!'));
      });
    <\/script>

    <!-- Module scripts are deferred by default -->
    <!-- <script type="module">
      import { sum } from './sum.js';
      console.log('module loaded', sum(2,3));
    <\/script> -->

    <!-- Async is fine for independent scripts (no order/dom dependency) -->
    <!-- <script async src="https://analytics.example.com/sdk.js"><\/script> -->
  </head>

  <body>
    <main class="grid">
      <header>
        <h1>Scripts / Styles — placement</h1>
        <p class="muted">Keep CSS in <code>&lt;head&gt;</code>, prefer <code>defer</code> (or modules) for JS. Use async only when order doesn’t matter.</p>
      </header>

      <section class="card">
        <h2>Why this matters</h2>
        <ul>
          <li><span class="pill">Blocking</span> CSS blocks rendering; JS without <code>defer/async</code> blocks parsing.</li>
          <li><span class="pill">Perceived speed</span> Good placement improves time-to-first-paint and interactivity.</li>
          <li><span class="pill">Determinism</span> <code>defer</code> preserves order; <code>async</code> does not.</li>
        </ul>
      </section>

      <section class="card">
        <h2>Compare patterns</h2>
        <h3>Good</h3>
        <pre><code>&lt;link rel="stylesheet" href="/site.css"&gt;
&lt;script defer src="/app.js"&gt;&lt;/script&gt;
&lt;script type="module" src="/main.js"&gt;&lt;/script&gt;</code></pre>

        <h3>Sometimes</h3>
        <pre><code>&lt;script async src="https://analytics.example.com/sdk.js"&gt;&lt;/script&gt;</code></pre>

        <h3>Avoid</h3>
        <pre><code>&lt;script src="/large-legacy.js"&gt;&lt;/script&gt;  <!-- blocks parsing -->
@import url('/more.css');                          /* fetch-blocking, chained */</code></pre>
      </section>

      <section class="card">
        <h2>Fonts, FOUC/FOIT</h2>
        <ul>
          <li>Use <code>font-display: swap</code> to prevent invisible text (FOIT).</li>
          <li>Limit webfont weights/styles; test fallback stacks.</li>
          <li>Consider preloading a single critical font file if it improves CLS/FOIT.</li>
        </ul>
      </section>

      <section class="card">
        <h2>Try the button</h2>
        <button id="btn" type="button">Click</button>
        <div id="log" class="muted"></div>
      </section>
    </main>
  </body>
</html>`])));function g(){return t.useEffect(()=>{document.title="Document Skeleton · Scripts / styles placement"},[]),e.jsxs(d.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Scripts / styles placement"}),e.jsxs("p",{className:"lede",children:["CSS belongs in ",e.jsx("code",{children:"<head>"}),"; JavaScript should avoid blocking HTML parsing. Prefer"," ",e.jsx("code",{children:"defer"})," (or ",e.jsx("code",{children:'type="module"'}),") for app code, and reserve ",e.jsx("code",{children:"async"})," for independent scripts."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#css",children:"CSS placement"}),e.jsx("a",{href:"#js",children:"JS placement"}),e.jsx("a",{href:"#preload",children:"Preload & hints"}),e.jsx("a",{href:"#fonts",children:"Fonts & flashes"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"css",children:[e.jsx("h2",{children:"CSS: where and how"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Link stylesheets in ",e.jsx("code",{children:"<head>"})," with ",e.jsx("code",{children:'rel="stylesheet"'}),"."]}),e.jsxs("li",{children:["Avoid ",e.jsx("code",{children:"@import"})," in CSS; it delays subsequent fetches."]}),e.jsx("li",{children:"Inline only truly critical CSS; keep it tiny and audited."}),e.jsxs("li",{children:["Use media queries on non-critical styles: ",e.jsx("code",{children:'media="print"'}),", etc."]})]})]}),e.jsxs("section",{id:"js",children:[e.jsx("h2",{children:"JS: defer, async, module"}),e.jsxs("div",{role:"table",className:"table",children:[e.jsxs("div",{role:"row",className:"thead",children:[e.jsx("span",{role:"columnheader",children:"Pattern"}),e.jsx("span",{role:"columnheader",children:"When it runs"}),e.jsx("span",{role:"columnheader",children:"Order"}),e.jsx("span",{role:"columnheader",children:"Use for"})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:e.jsx("code",{children:"<script defer>"})}),e.jsxs("span",{children:["After parse, before ",e.jsx("code",{children:"DOMContentLoaded"})]}),e.jsx("span",{children:"Preserved"}),e.jsx("span",{children:"App bundles needing DOM / predictable order"})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:e.jsx("code",{children:"<script async>"})}),e.jsx("span",{children:"As soon as loaded"}),e.jsx("span",{children:"Not preserved"}),e.jsx("span",{children:"Analytics, ads, independent widgets"})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:e.jsx("code",{children:'type="module"'})}),e.jsx("span",{children:"Deferred by default"}),e.jsx("span",{children:"ESM graph"}),e.jsx("span",{children:"Modern modular code and splitting"})]})]}),e.jsxs("p",{className:"note",children:["Avoid blocking scripts (no ",e.jsx("code",{children:"defer"}),"/",e.jsx("code",{children:"async"}),") unless you absolutely must gate parsing."]})]}),e.jsxs("section",{id:"preload",children:[e.jsx("h2",{children:"Preload & resource hints"}),e.jsx(d.Code,{role:"region","aria-label":"Preload examples",children:e.jsx("pre",{children:String.raw`<!-- Preload a critical stylesheet, then include it normally -->
<link rel="preload" as="style" href="/critical.css">
<link rel="stylesheet" href="/critical.css">

<!-- Preconnect a third-party origin you know you'll hit -->
<link rel="preconnect" href="https://cdn.example.com" crossorigin>`})}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Always include preloaded CSS again as a normal ",e.jsx("code",{children:'rel="stylesheet"'}),"."]}),e.jsx("li",{children:"Use preconnect selectively; avoid shotgun hints."})]})]}),e.jsxs("section",{id:"fonts",children:[e.jsx("h2",{children:"Fonts, FOUC/FOIT"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Set ",e.jsxs("code",{children:["@font-face ","{ font-display: swap; }"]})," to avoid invisible text."]}),e.jsx("li",{children:"Check CLS with and without fonts; adjust fallback stacks."})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Tweak CSS/JS placement, experiment with ",e.jsx("code",{children:"defer"}),"/",e.jsx("code",{children:"async"}),", and add/remove preloads. Your changes autosave for this lesson."]}),e.jsx(n,{storageKey:"core-html:skeleton:scripts-styles-placement:v1",initialHtml:p,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(i,{to:"/skeleton/favicons-min",className:"prev","aria-label":"Go to Favicons (minimal)",children:"← Favicons (minimal)"}),e.jsx(i,{to:"/landmarks/core-landmarks",className:"next","aria-label":"Go to Core landmarks",children:"Next: Core landmarks →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{g as default};
