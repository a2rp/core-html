import{d as r,r as i,j as e,N as n}from"./index-CQ_xjxjH.js";import{H as o}from"./index-C8nEF-Cf.js";const a={Page:r.main`
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

        .badges {
            display: grid;
            gap: 8px;
            list-style: none;
            padding: 0;
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
    `,Code:r.div`
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
    `},s=String.raw`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>a11y — language & landmarks</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      :root { color-scheme: light dark; }
      * { box-sizing: border-box; }
      body { margin: 0; padding: 24px; font: 14px/1.6 system-ui,-apple-system,Segoe UI,Roboto,sans-serif; }
      .grid { display: grid; gap: 14px; }
      .card { border: 1px solid #ccc; border-radius: 12px; padding: 12px; }
      .good { background: color-mix(in oklab, #16a34a, transparent 92%); border-color:#8ed09b; }
      .bad  { background: color-mix(in oklab, #dc2626, transparent 92%); border-color:#f2a6a6; }
      .muted { color: #6b7280; }
      .k { display:inline-block; border:1px solid #bbb; border-radius:999px; padding:2px 8px; font-size:12px; }
      .ex { border:1px dashed #aaa; padding:8px; border-radius:10px; margin-top:6px; }
      code { background: #f5f5f5; padding:0 6px; border-radius:6px; }
    </style>
  </head>
  <body>
    <header class="card">
      <h1>Language &amp; landmarks</h1>
      <p class="muted">Give assistive tech the right map (<strong>landmarks</strong>) and dictionary (<strong>lang</strong>).</p>
    </header>

    <main class="grid">
      <section class="card good">
        <h2>Set page language</h2>
        <p>Always declare the page language on <code>&lt;html&gt;</code>.</p>
        <div class="ex">
          <pre><code>&lt;html lang="en"&gt;</code></pre>
        </div>
      </section>

      <section class="card good">
        <h2>Inline language changes</h2>
        <p>Mark words/phrases in another language.</p>
        <div class="ex">
          <p>We say <span lang="fr">bonjour</span> and <span lang="hi">नमस्ते</span>.</p>
        </div>
      </section>

      <section class="card good">
        <h2>Core landmarks</h2>
        <ul>
          <li><code>&lt;header&gt;</code> top banner for a page/section</li>
          <li><code>&lt;nav&gt;</code> major navigation (name it if there are many)</li>
          <li><code>&lt;main&gt;</code> unique primary content (one per page)</li>
          <li><code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code> for structure</li>
          <li><code>&lt;footer&gt;</code> footer for page/section</li>
        </ul>
      </section>

      <section class="card bad">
        <h2>Common mistakes</h2>
        <ul>
          <li>No <code>lang</code> on <code>&lt;html&gt;</code> → wrong voice/pronunciation.</li>
          <li>Multiple visible <code>&lt;main&gt;</code> → confusing primary region.</li>
          <li>Multiple <code>&lt;nav&gt;</code> without names → hard to choose in screen reader rotor.</li>
        </ul>
      </section>

      <section class="card">
        <h2>Named navigation example</h2>
        <div class="ex">
          <nav aria-label="Primary">
            <a href="#home">Home</a> · <a href="#products">Products</a> · <a href="#contact">Contact</a>
          </nav>
          <aside>
            <nav aria-label="Breadcrumb">
              <a href="/">Home</a> › <a href="/products">Products</a> › <span>Widget</span>
            </nav>
          </aside>
        </div>
      </section>

      <section class="card">
        <h2>Role mapping (FYI)</h2>
        <p>Native elements already expose roles. Prefer them over ARIA:</p>
        <ul class="muted">
          <li><code>header</code> → banner (if not inside article/section)</li>
          <li><code>nav</code> → navigation</li>
          <li><code>main</code> → main</li>
          <li><code>aside</code> → complementary</li>
          <li><code>footer</code> → contentinfo (if not inside article/section)</li>
        </ul>
      </section>
    </main>

    <footer class="muted">
      Keep it simple: one <code>&lt;main&gt;</code>, named <code>&lt;nav&gt;</code>s when many, correct <code>lang</code>.
    </footer>
  </body>
</html>`;function c(){return i.useEffect(()=>{document.title="A11y · Language & landmarks"},[]),e.jsxs(a.Page,{children:[e.jsxs("header",{className:"pageHeader",id:"top",children:[e.jsx("h1",{children:"Language & landmarks"}),e.jsx("p",{className:"lede",children:"Two quick wins for accessible HTML: set language correctly and use native landmarks. This improves pronunciation, search, and keyboard navigation for assistive tech."})]}),e.jsxs("nav",{className:"toc","aria-label":"On this page",children:[e.jsx("a",{href:"#why-lang",children:"Why language matters"}),e.jsx("a",{href:"#page-lang",children:"Set page language"}),e.jsx("a",{href:"#inline-lang",children:"Inline language changes"}),e.jsx("a",{href:"#landmarks",children:"Core landmarks"}),e.jsx("a",{href:"#naming-nav",children:"Naming navigation"}),e.jsx("a",{href:"#pitfalls",children:"Pitfalls"}),e.jsx("a",{href:"#play",children:"Playground"})]}),e.jsxs("section",{id:"why-lang",children:[e.jsx("h2",{children:"Why language matters"}),e.jsx("div",{className:"card",children:e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:["Screen readers choose voices and pronunciation from ",e.jsx("code",{children:"lang"}),"."]}),e.jsx("li",{children:"Hyphenation, dictionary lookups, and spellcheck become more accurate."}),e.jsx("li",{children:"Search and translation tools infer content language reliably."})]})})]}),e.jsxs("section",{id:"page-lang",children:[e.jsxs("h2",{children:["Set page language on ",e.jsx("code",{children:"<html>"})]}),e.jsx(a.Code,{role:"region","aria-label":"Page language example",children:e.jsx("pre",{children:String.raw`<!doctype html>
<html lang="en">`})}),e.jsxs("p",{className:"note",children:["Use BCP 47 tags like ",e.jsx("code",{children:"en"}),", ",e.jsx("code",{children:"en-GB"}),", ",e.jsx("code",{children:"hi"}),", ",e.jsx("code",{children:"fr-CA"}),". One primary language per page."]})]}),e.jsxs("section",{id:"inline-lang",children:[e.jsx("h2",{children:"Inline language changes"}),e.jsx("p",{children:"For phrases in a different language, annotate the element carrying the words:"}),e.jsx(a.Code,{role:"region","aria-label":"Inline language example",children:e.jsx("pre",{children:String.raw`<p>Try saying <span lang="fr">crème brûlée</span> and <span lang="hi">नमस्ते</span>.</p>`})})]}),e.jsxs("section",{id:"landmarks",children:[e.jsx("h2",{children:"Core landmarks"}),e.jsxs("div",{className:"grid2",children:[e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Page-level"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"<header>"})," – site/banner area (not inside article/section)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"<nav>"})," – major navigation"]}),e.jsxs("li",{children:[e.jsx("code",{children:"<main>"})," – primary content (only one visible)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"<footer>"})," – site footer (not inside article/section)"]})]})]}),e.jsxs("div",{className:"card",children:[e.jsx("h3",{children:"Content structure"}),e.jsxs("ul",{className:"bullets",children:[e.jsxs("li",{children:[e.jsx("code",{children:"<section>"})," – thematic group (usually titled)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"<article>"})," – standalone item (post, card)"]}),e.jsxs("li",{children:[e.jsx("code",{children:"<aside>"})," – complementary content"]})]})]})]}),e.jsx("p",{className:"note",children:"Use native elements first. Add ARIA roles only when no native matches your intent."})]}),e.jsxs("section",{id:"naming-nav",children:[e.jsx("h2",{children:"Name your navigations"}),e.jsxs("p",{children:["When you have more than one ",e.jsx("code",{children:"<nav>"}),", give each an accessible name."]}),e.jsx(a.Code,{role:"region","aria-label":"Named nav examples",children:e.jsx("pre",{children:String.raw`<nav aria-label="Primary">…</nav>
<nav aria-label="Footer">…</nav>
<aside>
  <nav aria-label="Breadcrumb">…</nav>
</aside>`})})]}),e.jsxs("section",{id:"pitfalls",children:[e.jsx("h2",{children:"Pitfalls"}),e.jsxs("ul",{className:"badges",children:[e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Missing ",e.jsx("code",{children:"lang"})," on ",e.jsx("code",{children:"<html>"}),"."]}),e.jsxs("li",{children:[e.jsx("span",{className:"bad",children:"Wrong"})," Two ",e.jsx("code",{children:"<main>"})," regions on one page."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Multiple ",e.jsx("code",{children:"<nav>"})," with clear labels."]}),e.jsxs("li",{children:[e.jsx("span",{className:"good",children:"Good"})," Use native landmarks; add ARIA only if necessary."]})]})]}),e.jsxs("section",{id:"play",children:[e.jsx("h2",{children:"Try it live"}),e.jsxs("p",{className:"lede",children:["Add ",e.jsx("code",{children:"lang"})," to ",e.jsx("code",{children:"<html>"}),", mark inline language changes, ensure a single ",e.jsx("code",{children:"<main>"}),", and name your navigations. Autosaves to this lesson."]}),e.jsx(o,{storageKey:"core-html:a11y:language-landmarks:v1",initialHtml:s,height:640})]}),e.jsxs("nav",{className:"nextPrev","aria-label":"Lesson navigation",children:[e.jsx(n,{to:"/images-perf/fetchpriority-note",className:"prev","aria-label":"Go to fetchpriority (concept)",children:"← fetchpriority (concept)"}),e.jsx(n,{to:"/a11y/form-labels-errors",className:"next","aria-label":"Go to Form labels & errors",children:"Next: Form labels & errors →"})]}),e.jsx("div",{className:"backTop",children:e.jsx("a",{href:"#top",children:"Back to top ↑"})})]})}export{c as default};
