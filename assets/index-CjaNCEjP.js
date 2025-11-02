import{d,r as o,j as e,N as i}from"./index-CQ_xjxjH.js";import{H as l}from"./index-C8nEF-Cf.js";const s={Page:d.main`
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

        .note {
            font-size: 14px;
            color: var(--text-muted);
            border-left: 3px solid var(--primary);
            padding: 8px 12px;
            background: color-mix(in oklab, var(--primary), transparent 92%);
            border-radius: 8px;
            margin-top: 8px;
        }

        /* Inline code blocks */
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

        .badges {
            display: grid;
            gap: 8px;
            padding-left: 0;
            list-style: none;
        }
        .badges .bad,
        .badges .good {
            display: inline-block;
            font-size: 12px;
            padding: 2px 8px;
            border-radius: 999px;
            border: 1px solid var(--border);
            margin-right: 6px;
        }
        .badges .bad {
            background: #2b1a1a;
            color: #ffb4b4;
            border-color: #553;
        }
        .badges .good {
            background: #152417;
            color: #b6f3c1;
            border-color: #264a2b;
        }

        /* Code wrapper block (for smaller samples in cards) */
        .Code {
            position: relative;
            border: 1px solid var(--surface-400, #333);
            background: var(--surface-200, rgba(255, 255, 255, 0.02));
            border-radius: 10px;
            overflow: hidden;
        }

        /* Prev + Next */
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
    `,Code:d.div`
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
    `};var n=Object.freeze,c=Object.defineProperty,t=(r,p)=>n(c(r,"raw",{value:n(r.slice())})),a;const h=String.raw(a||(a=t([`<!doctype html>
<html lang="en">
  <head>
    <!-- HEAD: document configuration, not visible page content -->
    <meta charset="utf-8" />
    <title>Head vs Body — live demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Preconnect example (safe demo, does nothing harmful here) -->
    <link rel="preconnect" href="https://example.com" crossorigin />

    <!-- Styles belong in <head> (or linked via <link rel="stylesheet">) -->
    <style>
      :root { color-scheme: light dark; }
      body { font: 14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; padding: 24px; }
      .wrap { display: grid; gap: 10px; }
      .card { border: 1px solid #bbb; padding: 12px; border-radius: 10px; }
      .muted { color: #777 }
      button { padding: 6px 10px; border-radius: 8px; }
      code { background: #f5f5f5; padding: 1px 5px; border-radius: 6px; }
    </style>

    <!-- Prefer defer for scripts that access the DOM after parse -->
    <script defer>
      // Runs after parsing, before DOMContentLoaded fires
      document.addEventListener('DOMContentLoaded', () => {
        const log = msg => {
          const el = document.getElementById('log');
          el && (el.innerHTML += '<div>' + msg + '</div>');
        };
        log('DOMContentLoaded fired ✓ (defer script ready)');

        const btn = document.getElementById('helloBtn');
        if (btn) btn.addEventListener('click', () => log('Button clicked!'));
      });
    <\/script>
  </head>

  <body>
    <!-- BODY: perceptible page content (headings, text, media, UI) -->
    <main class="wrap" aria-label="Demo content">
      <h1>Head vs Body — mini playground</h1>
      <p class="muted">
        <strong>Head</strong> configures the document; <strong>Body</strong> contains perceivable content.
        Open the markup and move things around to see what’s valid.
      </p>

      <section class="card">
        <h2>Visible content lives in <code>&lt;body&gt;</code></h2>
        <p>
          Use headings, paragraphs, images, links, buttons, forms, etc. here.
          Avoid putting these inside <code>&lt;head&gt;</code>.
        </p>
        <button id="helloBtn" type="button">Click me</button>
      </section>

      <section class="card">
        <h2>Console log</h2>
        <div id="log" class="muted"></div>
      </section>

      <noscript class="card">
        <strong>Note:</strong> JavaScript appears to be disabled; interactive features are limited.
      </noscript>
    </main>
  </body>
</html>`])));function b(){return o.useEffect(()=>{document.title="Document Skeleton · <head> vs <body>"},[]),e.jsxs(s.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"<head> vs <body>"}),e.jsxs("p",{className:"lede",children:[e.jsx("code",{children:"<head>"})," configures the document (metadata, links, scripts, styles)."," ",e.jsx("code",{children:"<body>"})," holds perceivable content (what users see and interact with). Keep this separation clean for semantics, performance, and accessibility."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#roles",children:"Roles at a glance"}),e.jsx("a",{href:"#head-belongs",children:"Head: belongs here"}),e.jsx("a",{href:"#head-avoid",children:"Head: avoid putting"}),e.jsx("a",{href:"#body-belongs",children:"Body: belongs here"}),e.jsx("a",{href:"#scripts",children:"Scripts: defer/async"}),e.jsx("a",{href:"#links",children:"Useful link rels"}),e.jsx("a",{href:"#base-noscript",children:"Base & Noscript"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"roles",children:[e.jsx("h2",{children:"Roles at a glance"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"<head>"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Document metadata: ",e.jsx("code",{children:"charset"}),", ",e.jsx("code",{children:"title"}),", ",e.jsx("code",{children:"description"}),"."]}),e.jsxs("li",{children:["Resource hints & relationships: ",e.jsx("code",{children:"<link>"})," (stylesheet, preconnect, preload, icon…)."]}),e.jsxs("li",{children:["Styles: ",e.jsx("code",{children:"<style>"})," or ",e.jsx("code",{children:'<link rel="stylesheet">'}),"."]}),e.jsxs("li",{children:["Scripts that shouldn’t block rendering: prefer ",e.jsx("code",{children:"defer"})," or ",e.jsx("code",{children:"async"}),"."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"<body>"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"Perceivable content: headings, paragraphs, media, widgets."}),e.jsx("li",{children:"Interactive controls: links, buttons, forms, dialogs."}),e.jsxs("li",{children:["Application containers: ",e.jsx("code",{children:"<main>"}),", sections, components."]})]})]})]})]}),e.jsxs("section",{id:"head-belongs",children:[e.jsx("h2",{children:"What belongs in <head>"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:'<meta charset="utf-8">'})," at the top, then ",e.jsx("code",{children:"<title>"}),", then viewport."]}),e.jsx("li",{children:"SEO/social tags (description, Open Graph/Twitter cards), canonical link."}),e.jsxs("li",{children:["Stylesheets and ",e.jsx("code",{children:"<style>"})," blocks."]}),e.jsx("li",{children:"Icons/favicons, manifest, theme-color."}),e.jsxs("li",{children:["Script tags with ",e.jsx("code",{children:"defer"}),"/",e.jsx("code",{children:"async"})," (or module scripts)."]}),e.jsxs("li",{children:["Resource hints: ",e.jsx("code",{children:"preconnect"}),", ",e.jsx("code",{children:"dns-prefetch"}),", ",e.jsx("code",{children:"preload"})," (use judiciously)."]})]})]}),e.jsxs("section",{id:"head-avoid",children:[e.jsx("h2",{children:"What to avoid in <head>"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Visible content like ",e.jsx("code",{children:"<h1>"}),", ",e.jsx("code",{children:"<p>"}),", images, buttons."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," App markup roots (",e.jsx("code",{children:"<main>"}),", ",e.jsx("code",{children:'<div id="app">'}),") — belong in body."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Keep ",e.jsx("code",{children:"<head>"})," focused on configuration and loading strategy."]})]})]}),e.jsxs("section",{id:"body-belongs",children:[e.jsx("h2",{children:"What belongs in <body>"}),e.jsxs("ul",{className:"bullets",children:[e.jsx("li",{children:"All perceivable UI: content, forms, dialogs, navigation."}),e.jsx("li",{children:"Analytics “noscript” pixel fallbacks (as needed) — keep minimal and respectful."}),e.jsxs("li",{children:["Progressive enhancement roots (your app’s ",e.jsx("code",{children:"#root"}),"/",e.jsx("code",{children:"#app"})," container)."]})]}),e.jsxs("p",{className:"note",children:["Inline scripts inside ",e.jsx("code",{children:"<body>"})," are allowed, but prefer ",e.jsx("code",{children:"defer"})," in ",e.jsx("code",{children:"<head>"})," for predictable ordering and performance."]})]}),e.jsxs("section",{id:"scripts",children:[e.jsx("h2",{children:"Scripts: defer vs async (quick guide)"}),e.jsxs("div",{role:"table",className:"table",children:[e.jsxs("div",{role:"row",className:"thead",children:[e.jsx("span",{role:"columnheader",children:"Type"}),e.jsx("span",{role:"columnheader",children:"When it runs"}),e.jsx("span",{role:"columnheader",children:"Order guaranteed?"}),e.jsx("span",{role:"columnheader",children:"Good for"})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:e.jsx("code",{children:"<script defer>"})}),e.jsxs("span",{children:["After parsing, before ",e.jsx("code",{children:"DOMContentLoaded"})]}),e.jsx("span",{children:"Yes (document order)"}),e.jsx("span",{children:"App code needing DOM; multiple files in sequence"})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:e.jsx("code",{children:"<script async>"})}),e.jsx("span",{children:"As soon as loaded (may be before parse ends)"}),e.jsx("span",{children:"No"}),e.jsx("span",{children:"Independent scripts (analytics, widgets)"})]}),e.jsxs("div",{role:"row",children:[e.jsx("span",{children:e.jsx("code",{children:'<script type="module">'})}),e.jsx("span",{children:"Deferred by default"}),e.jsx("span",{children:"ESM handles imports"}),e.jsx("span",{children:"Modern modular code"})]})]}),e.jsxs("p",{className:"note",children:["Avoid blocking scripts without ",e.jsx("code",{children:"defer"}),"/",e.jsx("code",{children:"async"})," — they halt HTML parsing and delay rendering."]})]}),e.jsxs("section",{id:"links",children:[e.jsxs("h2",{children:["Useful ",e.jsx("code",{children:"<link>"})," rel values (at a glance)"]}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"stylesheet"})," — load CSS: ",e.jsx("code",{children:'<link rel="stylesheet" href="…">'})]}),e.jsxs("li",{children:[e.jsx("code",{children:"icon"}),"/",e.jsx("code",{children:"apple-touch-icon"})," — favicons and touch icons."]}),e.jsxs("li",{children:[e.jsx("code",{children:"preconnect"})," — warm up a connection to another origin."]}),e.jsxs("li",{children:[e.jsx("code",{children:"preload"})," — fetch a critical resource early (must also be used normally later)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"canonical"})," — preferred URL for the page."]}),e.jsxs("li",{children:[e.jsx("code",{children:"manifest"})," — PWA manifest."]})]})]}),e.jsxs("section",{id:"base-noscript",children:[e.jsx("h2",{children:"<base> and <noscript>"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"<base>"}),e.jsx("p",{children:"Sets a base URL for resolving relative links in the document."}),e.jsx(s.Code,{role:"region","aria-label":"base example",children:e.jsx("pre",{children:String.raw`<head>
  <base href="https://example.com/docs/">
  <link rel="stylesheet" href="assets/site.css"> <!-- resolves to /docs/assets/site.css -->
</head>`})}),e.jsxs("p",{className:"note",children:["Only one ",e.jsx("code",{children:"<base>"})," allowed; it affects all relative URLs (links, images, scripts, CSS)."]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"<noscript>"}),e.jsx("p",{children:"Fallback content for when scripting is disabled."}),e.jsx(s.Code,{role:"region","aria-label":"noscript example",children:e.jsx("pre",{children:String.raw`<noscript>
  <p>Please enable JavaScript for the full experience.</p>
</noscript>`})}),e.jsx("p",{className:"note",children:"Keep it concise and helpful. Don’t duplicate entire apps here."})]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Edit the skeleton: move elements between head/body and observe what’s valid. Try swapping ",e.jsx("code",{children:"defer"}),"/",e.jsx("code",{children:"async"}),", add a stylesheet link, or test a ",e.jsx("code",{children:"<base>"}),". Your code autosaves for this lesson."]}),e.jsx(l,{storageKey:"core-html:skeleton:head-vs-body:v1",initialHtml:h,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(i,{to:"/foundations/content-categories",className:"prev","aria-label":"Go to Content Categories",children:"← Content Categories"}),e.jsx(i,{to:"/skeleton/boilerplate-order",className:"next","aria-label":"Go to Boilerplate order",children:"Next: Boilerplate order →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{b as default};
