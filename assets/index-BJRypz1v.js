import{d as a,r as n,j as e,N as o}from"./index-CQ_xjxjH.js";import{H as s}from"./index-C8nEF-Cf.js";const r={Page:a.main`
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

        details {
            border: 1px solid var(--border);
            border-radius: 10px;
            padding: 8px 10px;
            background: var(--card);
        }
        details + details {
            margin-top: 8px;
        }
        summary {
            cursor: pointer;
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
    `,Code:a.div`
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
    `},t=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>target & rel safety — demo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .muted { color: #6b7280; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .row { display: grid; gap: 8px; }
      .row.two { grid-template-columns: repeat(2, minmax(0,1fr)); }
      @media (max-width: 860px) { .row.two { grid-template-columns: 1fr; } }
      .small { font-size: 12px; color: #6b7280; }
      .btn { display:inline-block; padding:8px 12px; border-radius:10px; border:1px solid #bbb; text-decoration:none; }
    </style>
  </head>
  <body>
    <main class="grid">
      <header>
        <h1>Opening links safely: <code>target</code> & <code>rel</code></h1>
        <p class="muted">Use <code>target="_blank"</code> only when needed—and always pair it with the right <code>rel</code> tokens.</p>
      </header>

      <section class="card bad">
        <h2>Risky pattern <small class="k">reverse tabnabbing</small></h2>
        <p>Opening a new tab without the right <code>rel</code> can give the new page a handle to your page via <code>window.opener</code>.</p>
        <div class="ex">
          <a class="btn" href="https://example.com" target="_blank">Opens new tab (⚠ unsafe)</a>
          <p class="small">Without <code>rel="noopener"</code>, the opened page can try <code>window.opener.location = '...'</code>.</p>
        </div>
      </section>

      <section class="card good">
        <h2>Safe pattern: <code>rel="noopener"</code></h2>
        <p>Prevents the new window from accessing <code>window.opener</code>.</p>
        <div class="ex">
          <a class="btn" href="https://developer.mozilla.org/" target="_blank" rel="noopener">MDN (safe)</a>
        </div>
      </section>

      <section class="card">
        <h2>Privacy add-on: <code>rel="noreferrer"</code></h2>
        <p>Also omits the HTTP <em>Referer</em> header on navigation. Many browsers treat <code>noreferrer</code> as also implying <code>noopener</code>.</p>
        <div class="ex">
          <a class="btn" href="https://web.dev/" target="_blank" rel="noreferrer">web.dev (no referrer)</a>
          <p class="small">Use when you don't want to leak the source page, or your policy requires it.</p>
        </div>
      </section>

      <section class="card">
        <h2>Context tokens: <code>external</code>, <code>ugc</code>, <code>sponsored</code></h2>
        <div class="row two">
          <div>
            <p><code>external</code>: non-essential hint that the link goes off-site.</p>
            <div class="ex"><a class="btn" href="https://example.org" rel="external noopener" target="_blank">External site</a></div>
          </div>
          <div>
            <p><code>ugc</code>: user-generated content. <code>sponsored</code>: paid links/ads.</p>
            <div class="ex">
              <a class="btn" href="https://example.org" rel="ugc noopener" target="_blank">UGC link</a>
              <a class="btn" href="https://example.org" rel="sponsored noopener" target="_blank">Sponsored link</a>
            </div>
          </div>
        </div>
      </section>

      <section class="card">
        <h2>JS equivalent: open safely</h2>
        <div class="ex">
<pre><code>// Prefer rel on &lt;a&gt;, but if you must use JS:
const win = window.open("https://example.com", "_blank", "noopener,noreferrer");
// As a belt-and-suspenders fallback:
if (win) { win.opener = null; }</code></pre>
        </div>
      </section>

      <section class="card">
        <h2>Checklist</h2>
        <ul>
          <li>Only use <code>target="_blank"</code> when it truly helps the user.</li>
          <li>Add <code>rel="noopener"</code> at minimum. Often use <code>rel="noopener noreferrer"</code>.</li>
          <li>Mark context with <code>rel="ugc"</code> and/or <code>rel="sponsored"</code> when applicable.</li>
          <li>Avoid JS <code>window.open</code> unless necessary; prefer semantic anchors.</li>
        </ul>
      </section>

      <section class="card">
        <h2>FAQ</h2>
        <details>
          <summary>Should I always add <code>noreferrer</code>?</summary>
          <div class="ex"><p>Use it when you want to withhold referrer information due to privacy or policy. If you only need opener protection, <code>noopener</code> is sufficient.</p></div>
        </details>
        <details>
          <summary>Does <code>noopener</code> affect analytics?</summary>
          <div class="ex"><p>No; it only cuts the JS <code>window.opener</code> relationship. <code>noreferrer</code> may impact referrer-based analytics.</p></div>
        </details>
        <details>
          <summary>Do I need both <code>noopener</code> and <code>noreferrer</code>?</summary>
          <div class="ex"><p>Many teams standardize on both for simplicity: <code>rel="noopener noreferrer"</code>.</p></div>
        </details>
      </section>

      <section class="card">
        <h2>Try a quick audit</h2>
        <p>Scan your page for <code>target="_blank"</code> and ensure the matching <code>rel</code> tokens are present.</p>
<pre><code>// Console snippet: flag anchors missing rel safety
[...document.querySelectorAll('a[target="_blank"]')].forEach(a => {
  const rel = (a.getAttribute('rel') || '').toLowerCase();
  if (!/noopener/.test(rel) && !/noreferrer/.test(rel)) {
    console.warn('Missing rel safety:', a);
  }
});</code></pre>
      </section>

      <footer class="muted">
        Rule of thumb: If it opens a new tab, protect the opener—and think about privacy.
      </footer>
    </main>
  </body>
</html>`;function l(){return n.useEffect(()=>{document.title="Links · target & rel safety"},[]),e.jsxs(r.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsxs("h1",{children:[e.jsx("code",{children:"target"})," and ",e.jsx("code",{children:"rel"})," safety"]}),e.jsxs("p",{className:"lede",children:["New tabs are convenient, but without the right ",e.jsx("code",{children:"rel"})," tokens they can be a security and privacy foot-gun. Learn when to use ",e.jsx("code",{children:"_blank"}),", what each ",e.jsx("code",{children:"rel"})," token does, and copy-paste safe patterns."]})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#target",children:"Target basics"}),e.jsx("a",{href:"#risk",children:"Why it’s risky"}),e.jsx("a",{href:"#rel",children:"rel tokens"}),e.jsx("a",{href:"#js",children:"JS equivalents"}),e.jsx("a",{href:"#audit",children:"Audit & checklist"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"target",children:[e.jsx("h2",{children:"Target basics"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"_self"})," (default) — open in the same browsing context."]}),e.jsxs("li",{children:[e.jsx("code",{children:"_blank"})," — open in a new tab/window (user-agent decides)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"_parent"}),", ",e.jsx("code",{children:"_top"})," — rarely used; interact with frames/iframes."]})]})})]}),e.jsxs("section",{id:"risk",children:[e.jsxs("h2",{children:["Why ",e.jsx("code",{children:"_blank"})," can be risky"]}),e.jsxs("div",{className:"card",children:[e.jsxs("p",{children:["When you open a new tab, the new page may receive a reference to your page via ",e.jsx("code",{children:"window.opener"}),". A hostile page could attempt to navigate your page (reverse tabnabbing)."]}),e.jsxs("p",{className:"note",children:["Mitigation: add ",e.jsx("code",{children:'rel="noopener"'})," or ",e.jsx("code",{children:'rel="noreferrer"'})," on the link."]})]})]}),e.jsxs("section",{id:"rel",children:[e.jsxs("h2",{children:["What does ",e.jsx("code",{children:"rel"})," do here?"]}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Security & privacy"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"noopener"}),": blocks ",e.jsx("code",{children:"window.opener"})," in the new tab."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"noreferrer"}),": don’t send the HTTP referrer (and commonly blocks opener as well)."]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Context markers"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"external"}),": hints that the link goes off-site."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"ugc"}),": user-generated content (comments, forums)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"sponsored"}),": paid/affiliate links."]})]})]})]}),e.jsx(r.Code,{"aria-label":"Common safe pattern",children:e.jsx("pre",{children:String.raw`<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Visit example
</a>`})})]}),e.jsxs("section",{id:"js",children:[e.jsx("h2",{children:"JavaScript equivalents"}),e.jsx(r.Code,{"aria-label":"JS open safely",children:e.jsx("pre",{children:String.raw`// If you must use JS:
const win = window.open("https://example.com", "_blank", "noopener,noreferrer");
if (win) win.opener = null; // extra hardening`})})]}),e.jsxs("section",{id:"audit",children:[e.jsx("h2",{children:"Audit quickly"}),e.jsx(r.Code,{"aria-label":"Console lint snippet",children:e.jsx("pre",{children:String.raw`// In DevTools console:
[...document.querySelectorAll('a[target="_blank"]')].forEach(a => {
  const rel = (a.getAttribute('rel') || '').toLowerCase();
  if (!/noopener|noreferrer/.test(rel)) console.warn('Needs rel safety:', a);
});`})})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Fix unsafe ",e.jsx("code",{children:"_blank"})," links, add the right ",e.jsx("code",{children:"rel"})," tokens, and compare behaviors. Autosaves to this lesson."]}),e.jsx(s,{storageKey:"core-html:links:target-rel-safety:v1",initialHtml:t,height:680})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(o,{to:"/links/paths-and-fragments",className:"prev","aria-label":"Go to Absolute vs relative, #ids",children:"← Absolute vs relative, #ids"}),e.jsx(o,{to:"/links/link-text-quality",className:"next","aria-label":"Go to Link text quality",children:"Next: Link text quality →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{l as default};
